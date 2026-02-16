"""
AIOI 슬라이드 TTS 음성 생성 스크립트

사용법:
  pip install google-genai
  export GEMINI_API_KEY="your-api-key"
  python generate_tts.py                    # 전체 슬라이드 생성 (이미 있는 파일은 건너뜀)
  python generate_tts.py --slide 1          # 특정 슬라이드만 생성
  python generate_tts.py --force            # 기존 파일 덮어쓰기
  python generate_tts.py --week 1           # 특정 주차만 생성
  python generate_tts.py --voice Kore       # 음성 변경 (기본: Kore)
"""

import argparse
import json
import os
import re
import sys
import wave
from pathlib import Path

from google import genai
from google.genai import types


def save_wav(filename: str, pcm_data: bytes, channels=1, rate=24000, sample_width=2):
    with wave.open(filename, "wb") as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(sample_width)
        wf.setframerate(rate)
        wf.writeframes(pcm_data)


def extract_scripts(html_path: str) -> dict[int, dict]:
    """HTML 파일에서 slideScripts 객체를 추출합니다."""
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = r"const\s+slideScripts\s*=\s*\{(.+?)\};\s*\n"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        return {}

    scripts = {}
    block = match.group(1)

    # 각 슬라이드 항목 파싱
    entry_pattern = r"(\d+)\s*:\s*\{[^}]*title\s*:\s*['\"]([^'\"]+)['\"][^}]*text\s*:\s*`([^`]+)`"
    for m in re.finditer(entry_pattern, block, re.DOTALL):
        slide_num = int(m.group(1))
        title = m.group(2)
        text = m.group(3).strip()
        scripts[slide_num] = {"title": title, "text": text}

    return scripts


def find_week_files(base_dir: str) -> list[tuple[int, str]]:
    """weekN-slides.html 파일 목록을 반환합니다."""
    results = []
    for f in sorted(Path(base_dir).glob("week*-slides.html")):
        m = re.match(r"week(\d+)-slides\.html", f.name)
        if m:
            results.append((int(m.group(1)), str(f)))
    return results


def generate_tts(
    client: genai.Client,
    text: str,
    output_path: str,
    voice: str = "Kore",
):
    response = client.models.generate_content(
        model="gemini-2.5-flash-preview-tts",
        contents=text,
        config=types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(
                        voice_name=voice,
                    )
                )
            ),
        ),
    )

    data = response.candidates[0].content.parts[0].inline_data.data
    save_wav(output_path, data)


def main():
    parser = argparse.ArgumentParser(description="AIOI 슬라이드 TTS 음성 생성")
    parser.add_argument("--week", type=int, help="특정 주차만 생성")
    parser.add_argument("--slide", type=int, help="특정 슬라이드만 생성")
    parser.add_argument("--force", action="store_true", help="기존 파일 덮어쓰기")
    parser.add_argument("--voice", default="Kore", help="음성 이름 (기본: Kore)")
    args = parser.parse_args()

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("오류: GOOGLE_API_KEY 환경변수를 설정해주세요.")
        print("  export GOOGLE_API_KEY='your-api-key'")
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    base_dir = Path(__file__).parent
    tts_dir = base_dir / "tts"
    tts_dir.mkdir(exist_ok=True)

    week_files = find_week_files(base_dir)
    if not week_files:
        print("weekN-slides.html 파일을 찾을 수 없습니다.")
        sys.exit(1)

    if args.week:
        week_files = [(w, p) for w, p in week_files if w == args.week]
        if not week_files:
            print(f"week{args.week}-slides.html 파일을 찾을 수 없습니다.")
            sys.exit(1)

    total_generated = 0
    total_skipped = 0

    for week_num, html_path in week_files:
        scripts = extract_scripts(html_path)
        if not scripts:
            print(f"[Week {week_num}] 스크립트를 찾을 수 없습니다. 건너뜁니다.")
            continue

        print(f"\n[Week {week_num}] {len(scripts)}개 슬라이드 스크립트 발견")

        for slide_num in sorted(scripts.keys()):
            if args.slide is not None and slide_num != args.slide:
                continue

            output_file = tts_dir / f"week{week_num}-slide{slide_num}.wav"

            if output_file.exists() and not args.force:
                print(f"  슬라이드 {slide_num}: 이미 존재 (건너뜀)")
                total_skipped += 1
                continue

            script = scripts[slide_num]
            print(f"  슬라이드 {slide_num}: 생성 중... ", end="", flush=True)

            try:
                generate_tts(client, script["text"], str(output_file), args.voice)
                size_kb = output_file.stat().st_size / 1024
                print(f"완료 ({size_kb:.0f}KB)")
                total_generated += 1
            except Exception as e:
                print(f"실패 - {e}")

    print(f"\n완료: {total_generated}개 생성, {total_skipped}개 건너뜀")


if __name__ == "__main__":
    main()
