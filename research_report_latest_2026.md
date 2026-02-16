# AI 오픈소스 생태계 최신 통계 및 트렌드 리서치 보고서 (2025-2026)

> **작성일**: 2026년 2월 16일
> **작성자**: 리서치 에이전트
> **목적**: AIOI 6주 교육 과정 1주차 발표 슬라이드 자료

---

## 📊 Executive Summary

2025-2026년 AI 오픈소스 생태계는 폭발적 성장을 경험했습니다:
- GitHub AI 리포지토리 **430만 개** 돌파, LLM SDK 임포트 리포지토리 **178% 증가**
- Hugging Face Hub: **200만 모델**, **50만 데이터셋**, **100만 Spaces**
- MCP 프로토콜: 월간 **9,700만 SDK 다운로드**, **1만 개 이상 활성 서버**
- Linux Foundation AAIF 설립으로 AI 오픈소스 거버넌스 체계 확립

---

## 1. GitHub Octoverse 2025: AI 오픈소스 현황

### 1.1 전체 규모

| 지표 | 수치 | 전년 대비 증가율 |
|------|------|---------------|
| **총 리포지토리** | 6억 3천만 개 | - |
| **신규 개발자** | 3,600만 명 | - |
| **2025년 신규 리포지토리** | 1억 2,100만 개 | - |
| **분당 신규 리포지토리** | 230개 이상 | - |

### 1.2 AI 특화 통계

| 항목 | 수치 | 의미 |
|------|------|------|
| **AI 관련 리포지토리** | 430만 개 이상 | GitHub 전체의 약 0.7% |
| **LLM SDK 임포트 리포지토리** | 110만 개 이상 (공개 리포지토리) | 전년 대비 **178% 증가** |
| **빠르게 성장하는 AI 프로젝트** | 상위 10개 중 6개가 AI 인프라 | vLLM, Cline, Home Assistant, RAGFlow, SGLang 등 |

### 1.3 주요 발견 사항

- **신규 개발자의 AI 도구 채택**: 신규 개발자의 거의 **80%가 첫 주에 Copilot 사용**
- **가장 활발한 프로젝트**: **vLLM이 2025년 컨트리뷰터 수 1위** - AI 서빙/인프라가 최대 기여 영역
- **언어 트렌드**:
  - TypeScript가 컨트리뷰터 수 기준 **1위로 부상** (2025년 8월)
  - Python은 약 **85만 명 컨트리뷰터 증가** (전년 대비 48.78%)

**출처**: [GitHub Octoverse 2025](https://octoverse.github.com/), [WebProNews](https://www.webpronews.com/github-octoverse-2025-630m-repos-ai-fuels-developer-surge/)

---

## 2. Hugging Face Hub: AI 모델 생태계 중심

### 2.1 플랫폼 규모 (2026년 2월 기준)

| 카테고리 | 수량 | 설명 |
|---------|------|------|
| **모델** | 200만 개 이상 | 텍스트, 비전, 오디오, 멀티모달 모델 |
| **데이터셋** | 50만 개 이상 | 8,000개 이상 언어 지원 |
| **Spaces (데모 앱)** | 100만 개 | 대화형 AI 데모 및 앱 |

### 2.2 주요 다운로드 통계

**인기 모델 예시**:
- 상위 50개 모델의 통계 데이터가 공개되어 있음
- 2025년 10월 기준, 분석 대상 72,423개 모델은 전체의 3.41%

### 2.3 한국 AI 모델 성과

**Naver HyperCLOVA X**:
- **SEED-Vision-Instruct-3B**: 출시 1개월 만에 **40만 다운로드 돌파** (2025년 4월)
- **SEED 32B Think**: Hugging Face에서 **23,589 다운로드** (2026년 1월 5일 기준)
  - 한국 독립 AI 모델 중 **다운로드 1위**
  - 경쟁 모델 대비: Upstage Solar (1,208), LG K-EXAONE (1,039), NC VAETKI (665)

**출처**: [Hugging Face Hub](https://huggingface.co/), [Business Korea](https://www.businesskorea.co.kr/news/articleView.html?idxno=260254)

---

## 3. AI OSS 카테고리별 주요 프로젝트 및 통계

### 3.1 LLM Inference (추론 엔진)

| 프로젝트 | GitHub Stars | 주요 특징 | 2025-2026 통계 |
|---------|-------------|----------|---------------|
| **vLLM** | 36,000+ | PagedAttention, 고처리량 추론 | 2025년 GitHub 컨트리뷰터 수 **1위**, NVFP4로 **8,033 tokens/sec** |
| **llama.cpp** | 75,000+ | C/C++ 기반, 최소 의존성, GGUF | 모바일/에지 추론 표준, 최대 커뮤니티 규모 |
| **Ollama** | 150,000+ | 로컬 LLM 실행 도구 | 오프라인/프라이빗 LLM 배포의 대표 도구, **484 tokens/sec** |
| **SGLang** | 10,000+ | RadixAttention, KV 캐시 재사용 | vLLM 대비 **17% 빠른 처리량** (6,395 tokens/sec), 기준 대비 **6.4배 처리량** |
| **TensorRT-LLM** | 10,000+ | NVIDIA TensorRT 컴파일 엔진 | B200 GPU에서 최고 성능, 높은 진입 장벽 |

**성능 비교 (2026년 벤치마크)**:
- vLLM vs llama.cpp: **35배 높은 처리량(RPS)**, **44배 높은 토큰 출력(TPS)**
- SGLang vs vLLM: **동일 포맷(GPTQ-INT4)에서 17% 우수**
- Ollama: 전용 서버 대비 **약 10배 느림** (편의성 우선)

**출처**: [vLLM vs llama.cpp](https://developers.redhat.com/articles/2025/09/30/vllm-or-llamacpp-choosing-right-llm-inference-engine-your-use-case), [LLM Serving Frameworks](https://www.hyperbolic.ai/blog/llm-serving-frameworks)

### 3.2 LLM Training (학습 프레임워크)

| 프로젝트 | 주요 특징 | 2025-2026 현황 |
|---------|----------|--------------|
| **PyTorch** | 딥러닝 표준 프레임워크 | Python 3.9+, PyTorch 2.4+ 지원, Transformers와 긴밀한 통합 |
| **DeepSpeed** | Microsoft, ZeRO 최적화 | HuggingFace Transformers/PyTorch Lightning 직접 통합, 단일 GPU에서도 유용 |
| **Hugging Face Transformers** | 140,000+ Stars | **100만 개 이상 체크포인트**, 대부분 학습 프레임워크와 호환 |
| **Megatron-LM** | NVIDIA, 대규모 병렬 학습 | GPT, BERT 등 초대형 모델 학습 |

**출처**: [Hugging Face Transformers](https://github.com/huggingface/transformers), [DeepSpeed](https://www.deepspeed.ai/)

### 3.3 LLM Applications (애플리케이션 프레임워크)

| 프로젝트 | GitHub Stars | 월간 다운로드 | 주요 특징 |
|---------|-------------|-------------|----------|
| **LangChain** | 100,000+ | - | LLM 앱 개발 표준, LangGraph로 상태 기반 에이전트 지원 |
| **LlamaIndex** | 40,000+ | - | RAG 특화, 검색 품질 및 관찰성 강점 |
| **Dify** | 119,000+ | - | 완성도 높은 LLM 앱 빌더, 템플릿/RAG 내장 |
| **CrewAI** | 43,600+ | 250,000+ | 역할 기반 멀티 에이전트 협업 |
| **AutoGen** | 107,000+ | 4,200,000+ | Microsoft, 비동기 이벤트 드리븐 멀티 에이전트 |
| **Langflow** | 140,000+ | - | 드래그앤드롭 LangChain 체인 빌더 |
| **Flowise** | 12,000+ | - | 경량 셀프호스팅 비주얼 RAG 프로토타이핑 |

**시장 규모**: AI 에이전트 시장은 2024년 **54억 달러**에서 2025년 **76.3억 달러**로 성장, 2030년 **503억 달러** 전망 (CAGR 45.8%)

**출처**: [Top AI Agent Frameworks 2026](https://www.alphamatch.ai/blog/top-agentic-ai-frameworks-2026), [Best AI Frameworks 2025](https://www.getmaxim.ai/articles/top-5-ai-agent-frameworks-in-2025-a-practical-guide-for-ai-builders/)

### 3.4 ML Frameworks (머신러닝 프레임워크)

| 프로젝트 | GitHub Stars | 주요 특징 |
|---------|-------------|----------|
| **Hugging Face Transformers** | 140,000+ | 텍스트, 비전, 오디오, 비디오 통합 지원 |
| **PEFT** | 18,000+ | LoRA, QLoRA 등 파라미터 효율적 파인튜닝 |
| **TRL** | 12,000+ | SFT, GRPO, DPO 등 포스트 트레이닝 |
| **MLflow** | 20,000+ | Linux Foundation 후원, 실험 추적/모델 관리 |

---

## 4. LLM 생태계 맵: 주요 플레이어 및 모델 출시

### 4.1 상용 LLM 프로바이더 (2025-2026 주요 출시)

| 제공자 | 주요 모델 | 출시일 | 주요 특징 |
|--------|---------|--------|----------|
| **OpenAI** | GPT-5 | 2025년 8월 | 속도/추론 2개 모델, GPT-5.2는 **400K 컨텍스트**, AIME 2025 **100%** |
| **Anthropic** | Claude 4.5 | 2025년 말 | Opus 4.5는 SWE-bench Verified **80.9%** (업계 1위) |
| **Google** | Gemini 3 Pro | 2025년 11월 18일 | **100만 토큰 컨텍스트**, AIME 2025 **100%** |
| **Meta** | Llama 4 | 2025년 4월 | Llama 최초 멀티모달 (Scout, Maverick), 텍스트/이미지/비디오 |
| **DeepSeek** | DeepSeek R1 | 2025년 1월 | **MIT 라이선스**, 추론 모델, 가격 **$0.27/$1.10 per M tokens** |
| **Mistral** | Mixtral 8x22B | - | Apache 2.0, MoE 아키텍처, Devstral/Pixtral/Mathstral 시리즈 |

**릴리스 경쟁**: 2025년 11월 **6일 사이에** GPT-5.1, Grok 4.1, Gemini 3 Pro, Claude Opus 4.5 동시 출시

**출처**: [2025 LLM Review](https://atoms.dev/blog/2025-llm-review-gpt-5-2-gemini-3-pro-claude-4-5), [Top LLMs in 2026](https://www.techtarget.com/whatis/feature/12-of-the-best-large-language-models)

### 4.2 오픈소스/오픈 웨이트 모델

| 모델 | 라이선스 | 특징 | 다운로드/인기 |
|------|---------|------|-------------|
| **DeepSeek R1** | **MIT** | 가장 허용적 라이선스, 추론 특화, 상업적 자유 | 혁명적 가격, 자체 호스팅 가능 |
| **Llama 4** | LLaMA Community | 7억 MAU 미만 무료, 이상은 별도 라이선스 | 첫 멀티모달 Llama |
| **Gemma 3** | Gemma License | 1B, 4B, 12B, 27B, 연구/상업 가능 | Google 경량 멀티모달 |
| **Qwen 3** | - | 오픈소스 멀티모달 영역 개척 | TRL 통합 |
| **HyperCLOVA X** | - | 한국어 특화 (GPT-4 대비 6,500배 한국어 데이터) | SEED 40만 다운로드 (1개월) |

**출처**: [DeepSeek R1 License](https://github.com/deepseek-ai/DeepSeek-R1), [HyperCLOVA X](https://clova.ai/en/hyperclova)

---

## 5. MCP (Model Context Protocol): 산업 표준으로 부상

### 5.1 발전 타임라인

| 시기 | 주요 이벤트 |
|------|-----------|
| **2024년 11월** | Anthropic이 MCP를 오픈 표준으로 발표 |
| **2025년 3월** | OpenAI가 MCP 공식 채택 (ChatGPT 데스크톱 앱 통합) |
| **2025년 4월** | Google DeepMind가 Gemini 모델 MCP 지원 발표 |
| **2025년 6월** | 첫 안정 버전 출시 (동기적 도구 호출 정의) |
| **2025년 9월** | MCP Registry 공개 (초기 수백 개 서버) |
| **2025년 11월** | 1주년 대규모 스펙 업데이트 (비동기 실행, 엔터프라이즈 기능) |
| **2025년 12월** | Anthropic이 MCP를 Linux Foundation 산하 **AAIF**에 기증 |

### 5.2 생태계 통계 (2025-2026)

| 지표 | 수치 | 의미 |
|------|------|------|
| **월간 SDK 다운로드** | **9,700만 회** (Python/TypeScript) | 2024년 11월 대비 폭발적 성장 |
| **활성 공개 MCP 서버** | **10,000개 이상** | Fortune 500 배포 포함 |
| **MCP Registry 성장률** | **407%** | 2025년 9월 대비 |
| **MCP 서버 다운로드** | 2024년 11월 **~10만** → 2025년 4월 **800만 이상** | 80배 성장 |
| **등록된 서버** | 5,800+ (Smithery 등 디렉토리 기준) | - |
| **MCP 클라이언트** | 300+ | - |

### 5.3 주요 플랫폼 채택

- **Anthropic**: Claude (Desktop, Web)
- **OpenAI**: ChatGPT (Desktop App)
- **Google**: Gemini
- **Microsoft**: Copilot
- **IDE**: VS Code, Cursor

### 5.4 AAIF (Agentic AI Foundation)

**설립**: 2025년 12월, Linux Foundation 산하
**공동 설립자**: Anthropic, Block, OpenAI
**지원자**: Google, Microsoft, AWS, Cloudflare, Bloomberg

**목적**: 에이전트 AI의 개방형 표준 및 거버넌스 제공

**출처**: [MCP Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol), [Linux Foundation AAIF](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)

### 5.5 인기 MCP 서버 카테고리

**개발/DevOps**:
- GitHub MCP (리포지토리, 이슈, PR 관리)
- Playwright MCP (브라우저 자동화)
- Docker Hub MCP (컨테이너 관리)

**데이터/데이터베이스**:
- PostgreSQL MCP (자연어 DB 쿼리)
- SQLite MCP (로컬 DB 조작)

**비즈니스/생산성**:
- Slack MCP (메시지, 채널 관리)
- Notion MCP (페이지 생성, DB 쿼리)
- Google Workspace MCP (문서, 캘린더)

**한국 서비스 연동**:
- **KiMCP** (Korea-integrated MCP): 네이버(블로그, 뉴스, 쇼핑, DataLab), 카카오(지도, 라우팅), TMAP
- Naver Search/Maps MCP
- Kakao Navigation/Mobility MCP

---

## 6. AI 라이선스 및 오픈소스 정의

### 6.1 OSAID 1.0 (Open Source AI Definition)

**발표**: 2024년 10월, OSI(Open Source Initiative)

**핵심 요구사항**:
1. **사용, 연구, 수정, 공유**의 4가지 자유 보장
2. **"수정을 위한 선호 형태" 필수**:
   - 투명한 학습 데이터 정보
   - 완전한 소스 코드
   - 모델 파라미터/웨이트

**검증된 모델 (OSAID 1.0 준수)**:
- Pythia (Eleuther AI)
- OLMo (AI2)
- Amber, CrystalCoder (LLM360)
- T5 (Google)

**출처**: [OSAID 1.0](https://opensource.org/ai/open-source-ai-definition), [OSI Blog](https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid)

### 6.2 Open Weight vs Open Source 논쟁

| 구분 | Open Weight | Open Source (OSAID 1.0) |
|------|-------------|------------------------|
| **모델 웨이트** | ✅ 공개 | ✅ 공개 |
| **소스 코드** | ❌ 비공개 가능 | ✅ 필수 공개 |
| **학습 데이터 정보** | ❌ 비공개 가능 | ✅ 투명한 정보 필수 |
| **재현성** | 제한적 (파인튜닝/추론만) | 완전한 재학습 가능 |
| **대표 사례** | Meta Llama, DeepSeek R1 (웨이트는 공개, 데이터 비공개) | OLMo, Pythia |

**"Openwashing" 경고**: 모델 웨이트만 공개하면서 "오픈소스"를 표방하는 행위에 대한 커뮤니티 비판 증가

### 6.3 주요 라이선스 비교

| 라이선스 | 유형 | 상업적 사용 | 대표 프로젝트 |
|---------|------|------------|-------------|
| **MIT** | 허용적 | ✅ 완전 자유 | DeepSeek R1, BabyAGI |
| **Apache 2.0** | 허용적 | ✅ 자유 + 특허 보호 | LangChain, vLLM, MLflow, Mistral |
| **LLaMA Community** | 제한적 | ⚠️ MAU 7억 미만 무료 | Llama 2/3/4 |
| **Gemma** | 제한적 | ⚠️ 연구/상업 가능, 일부 제한 | Gemma |

### 6.4 2025년 라이선스 주요 이벤트

- **2025년 1월**: DeepSeek R1 **MIT 라이선스** 공개 - 가장 허용적 라이선스의 고성능 모델
- **2025년 8월**: OpenAI GPT-OSS 공개 - OpenAI 최초 오픈소스 모델
- **Linux Foundation AI**: AI 모델 라이선스 표준화 노력 지속

**DeepSeek R1의 의미**:
- MIT 라이선스: **무제한 상업적 사용, 수정, 재배포 가능**
- **자체 호스팅 가능**: GPU 인프라 보유 시 API 비용 제로
- **벤더 락인 없음**: 커스터마이징 완전 자유
- 기존 "오픈 웨이트" 모델 대비 **진정한 오픈소스에 가까움**

**출처**: [DeepSeek R1 License](https://github.com/deepseek-ai/DeepSeek-R1), [Open Weight Definition](https://undercodenews.com/the-open-weight-definition-a-new-framework-for-open-source-ai-standards/)

---

## 7. 한국 AI OSS 생태계

### 7.1 Naver HyperCLOVA X

**특징**:
- GPT-4 대비 **6,500배 많은 한국어 데이터**로 학습
- 한국 문화와 사회적 맥락 이해에 특화

**모델 라인업**:
- HCX-L (강력한 모델)
- HCX-S (경량 모델)
- 파라미터 크기: 4B, 11B, 15B, 33B (Hugging Face)

**다운로드 성과**:
- **SEED 32B Think**: 23,589 다운로드 (2026년 1월 5일)
  - 한국 독립 AI 모델 중 **1위**
- **SEED-Vision-Instruct-3B**: 출시 1개월 만에 **40만 다운로드** (2025년 4월)

**최신 개발**:
- **HyperCLOVA X THINK**: 고급 추론 모델, 기술 보고서 공개 (2025년 6월 30일)

### 7.2 한국 AI 5대 컨소시엄

**참여 기업**: Naver, SKT, LG, NCSoft, Upstage
**프로젝트**: "모두를 위한 AI"

**주요 모델**:
| 기업 | 모델 | 특징 |
|------|------|------|
| Naver | HyperCLOVA X | 한국어 특화, 다운로드 1위 |
| Upstage | Solar Open | 1,208 다운로드 |
| LG AI | K-EXAONE | 1,039 다운로드 |
| NCSoft | VAETKI | 665 다운로드 |
| SKT | A.X 3.1 | 2025년 여름 오픈소스 공개 예정 |

### 7.3 한국 MCP 서버 생태계

**KiMCP** (Korea-integrated MCP):
- **GitHub**: [zeikar/kimcp](https://github.com/zeikar/kimcp)
- **라이선스**: MIT
- **지원 API**:
  - 네이버: 블로그, 뉴스, 카페, 쇼핑, 지역 검색, DataLab 트렌드 분석
  - 카카오: 지도, 경로 탐색
  - TMAP: 대중교통 경로 안내

**개별 한국 서비스 MCP**:
- Naver Search/Maps MCP
- Kakao Navigation/Mobility MCP
- Reservation Platform MCP (네이버/Airbnb/야놀자/카카오 통합)

**출처**: [Naver HyperCLOVA X](https://clova.ai/en/hyperclova), [Business Korea](https://www.businesskorea.co.kr/news/articleView.html?idxno=260254)

---

## 8. 2025-2026 주요 트렌드 요약

### 8.1 인프라 중심 성장

- **vLLM**: 2025년 GitHub 컨트리뷰터 수 1위
- 빠르게 성장하는 상위 10개 프로젝트 중 **6개가 AI 인프라**
- 추론 최적화가 핵심 경쟁 영역

### 8.2 표준화 및 거버넌스

- **MCP**: 1년 만에 산업 표준으로 부상, AAIF로 거버넌스 이전
- **OSAID 1.0**: AI 오픈소스의 명확한 정의 확립
- **Linux Foundation AAIF**: Anthropic, OpenAI, Block 공동 설립

### 8.3 멀티모달 AI의 보편화

- GPT-5, Claude 4.5, Gemini 3, Llama 4 모두 멀티모달
- 이미지, 오디오, 비디오 이해가 기본 능력으로

### 8.4 로컬/에지 AI 성장

- Ollama 150K+ Stars로 로컬 LLM 표준
- llama.cpp: 모바일/에지 추론 인프라
- 프라이버시, 비용 절감, 오프라인 동작 수요 증가

### 8.5 AI 에이전트 시장 폭발

- 2024년 54억 달러 → 2025년 76.3억 달러 (41% 성장)
- 2030년 503억 달러 전망 (CAGR 45.8%)
- 멀티 에이전트 조율, 고급 계획 능력 고도화

### 8.6 한국 AI 생태계 성장

- HyperCLOVA X: 한국 독립 AI 모델 다운로드 1위
- 한국 AI 5대 컨소시엄 협력 강화
- KiMCP 등 한국 서비스 연동 인프라 구축

---

## 9. 교육 과정 설계 시사점

### 9.1 초보자 기여에 적합한 영역

1. **MCP 서버 개발** (난이도: 하)
   - Python FastMCP로 1-2일 내 간단한 서버 구축 가능
   - 한국 서비스 API 래핑 (공공 데이터, 네이버/카카오)
   - 실제 사용 가능한 기여 산출물

2. **문서화 및 번역** (난이도: 하)
   - Hugging Face 모델 카드 한국어 번역
   - LangChain, Dify 한국어 문서화
   - 한국어 프롬프트 템플릿 공유

3. **RAG 시스템 구축** (난이도: 중)
   - LangChain + Chroma/Supabase Vector
   - 문서 기반 Q&A 챗봇
   - Streamlit으로 빠른 프로토타이핑

4. **로컬 LLM 활용** (난이도: 중)
   - Ollama로 프라이버시 보호 AI 앱
   - llama.cpp 바인딩 활용
   - 비용 부담 없는 실습 환경

### 9.2 6주 커리큘럼 추천

| 주차 | 주제 | 실습 프로젝트 |
|------|------|-------------|
| 1주 | AI OSS 생태계 이해 | Ollama 로컬 LLM 실행, Hugging Face 모델 탐색 |
| 2주 | GitHub 기여 워크플로우 | Good First Issue 찾기, PR 제출 연습 |
| 3주 | LLM 앱 개발 기초 | LangChain/Flowise로 RAG 앱 구축 |
| 4주 | MCP/도구 통합 | 한국 서비스 API를 MCP 서버로 개발 |
| 5주 | 실전 오픈소스 기여 | 선택 프로젝트에 실제 PR 제출 |
| 6주 | 발표 및 회고 | 기여 경험 공유, 오픈소스 커리어 탐색 |

### 9.3 한국어 기여 우선순위

1. Hugging Face 모델 카드/문서 한국어 번역
2. HyperCLOVA X 모델 활용 예제 작성
3. 한국어 벤치마크 데이터셋 기여
4. KiMCP 확장 (추가 한국 서비스 연동)
5. LangChain/Dify 한국어 문서화

---

## 10. 주요 정량 지표 요약 (슬라이드용)

### 플랫폼 규모
- GitHub AI 리포지토리: **430만 개**
- Hugging Face 모델: **200만 개**
- Hugging Face 데이터셋: **50만 개**
- Hugging Face Spaces: **100만 개**

### 성장률
- LLM SDK 임포트 리포지토리: **178% YoY**
- MCP Registry 성장: **407%** (2025년 9월 대비)
- MCP 서버 다운로드: **80배** (2024년 11월 → 2025년 4월)
- Python 컨트리뷰터 증가: **48.78% YoY**

### MCP 생태계
- 월간 SDK 다운로드: **9,700만 회**
- 활성 공개 서버: **10,000개 이상**
- 등록된 서버: **5,800+ (디렉토리 기준)**

### AI 에이전트 시장
- 2024년: **54억 달러**
- 2025년: **76.3억 달러** (41% 성장)
- 2030년 전망: **503억 달러** (CAGR 45.8%)

### 한국 AI 모델
- HyperCLOVA X SEED: **40만 다운로드** (1개월)
- SEED 32B Think: **23,589 다운로드** (한국 모델 1위)
- 경쟁 모델 격차: Upstage (1,208), LG (1,039), NC (665)

### 인프라 성능
- vLLM vs llama.cpp: **35배 처리량**, **44배 토큰 출력**
- SGLang vs vLLM: **17% 우수**
- vLLM NVFP4: **8,033 tokens/sec** (최고 기록)

---

## 참고 자료 (Sources)

### GitHub & AI Statistics
- [GitHub Octoverse 2025](https://octoverse.github.com/)
- [GitHub Universe 2025](https://azure.microsoft.com/en-us/blog/github-universe-2025-where-developer-innovation-took-center-stage/)
- [WebProNews - GitHub Octoverse](https://www.webpronews.com/github-octoverse-2025-630m-repos-ai-fuels-developer-surge/)

### Hugging Face
- [Hugging Face Hub](https://huggingface.co/)
- [Hugging Face Complete Guide 2026](https://www.techaimag.com/latest-hugging-face-models/hugging-face-complete-guide-2026-models-datasets-development)

### LLM Inference Frameworks
- [vLLM vs llama.cpp](https://developers.redhat.com/articles/2025/09/30/vllm-or-llamacpp-choosing-right-llm-inference-engine-your-use-case)
- [LLM Serving Frameworks](https://www.hyperbolic.ai/blog/llm-serving-frameworks)
- [State of LLM Serving in 2026](https://thecanteenapp.com/analysis/2026/01/03/inference-serving-landscape.html)

### MCP Protocol
- [MCP Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
- [A Year of MCP](https://www.pento.ai/blog/a-year-of-mcp-2025-review)
- [Linux Foundation AAIF Announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)
- [MCP Adoption Report](https://zuplo.com/mcp-report)

### AI Licensing
- [OSAID 1.0](https://opensource.org/ai/open-source-ai-definition)
- [OSI Blog - OSAID Report](https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid)
- [Open Source AI Wikipedia](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence)

### LLM Models
- [2025 LLM Review](https://atoms.dev/blog/2025-llm-review-gpt-5-2-gemini-3-pro-claude-4-5)
- [Top LLMs in February 2026](https://www.techtarget.com/whatis/feature/12-of-the-best-large-language-models)
- [DeepSeek R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)
- [DeepSeek R1 License Analysis](https://www.gmicloud.ai/blog/deepseek-r1-the-open-source-challenger-upending-the-llm-market)

### AI Agent Frameworks
- [Top AI Agent Frameworks 2026](https://www.alphamatch.ai/blog/top-agentic-ai-frameworks-2026)
- [Best AI Frameworks 2025](https://www.getmaxim.ai/articles/top-5-ai-agent-frameworks-in-2025-a-practical-guide-for-ai-builders/)

### Korean AI Ecosystem
- [Naver HyperCLOVA X](https://clova.ai/en/hyperclova)
- [Business Korea - Naver AI Downloads](https://www.businesskorea.co.kr/news/articleView.html?idxno=260254)
- [KiMCP GitHub](https://github.com/zeikar/kimcp)

### Training Frameworks
- [Hugging Face Transformers](https://github.com/huggingface/transformers)
- [DeepSpeed](https://www.deepspeed.ai/)

---

## 결론

2025-2026년 AI 오픈소스 생태계는 다음과 같은 특징을 보입니다:

1. **급속한 성장**: GitHub AI 리포지토리 430만 개, Hugging Face 200만 모델, MCP 월 9,700만 다운로드
2. **표준화 진전**: MCP가 산업 표준으로 부상, OSAID 1.0으로 오픈소스 정의 확립
3. **인프라 우선**: vLLM이 컨트리뷰터 수 1위, 추론 최적화가 핵심 경쟁 영역
4. **멀티모달화**: 모든 주요 LLM이 멀티모달 지원
5. **라이선스 다양화**: MIT(DeepSeek R1)부터 제한적 라이선스(Llama)까지 스펙트럼 확대
6. **한국 생태계 성장**: HyperCLOVA X가 한국 모델 다운로드 1위, KiMCP 등 한국 서비스 연동 활발

**AIOI 교육 과정 방향성**:
- MCP 서버 개발, 한국어 문서화, RAG 시스템 구축 등 초보자 친화적 프로젝트 중심
- 로컬 LLM(Ollama) 활용으로 비용 부담 최소화
- 한국 AI 생태계(HyperCLOVA X, KiMCP) 연계 기여 장려

---

**작성일**: 2026년 2월 16일
**리서치 기간**: 2025-2026년 최신 데이터
**다음 단계**: 이 리서치 자료를 기반으로 발표 슬라이드 제작
