# 박미지 포트폴리오 사이트 계획

> 소스: Notion 내보내기 `박미지 경력기술서` (2026.07.23)  
> 사이트 방향: `design-first-ui-prompting` → `editorial-portfolio-chapters` → Cursor 구현  
> 작성일: 2026-07-24

---

## 1. 한 줄 포지셔닝

**복잡한 사내 업무 시스템을 React·TypeScript로 이관·구조화하는 5년 차 프론트엔드 개발자.**

채용/이직용. 메인 CTA는 **이력서·경력기술서 요청** 또는 **이메일 연락**.

| 항목 | 값 |
|------|-----|
| 이름 | Miji Park / 박미지 |
| 역할 | Frontend Developer |
| 경력 | 5년 (Fasoo 2021.05~현재) |
| 위치 | Seoul |
| 연락 | mijip0320@gmail.com |
| 학력 | 성신여대 IT학부 |
| 자격 | 정보처리기사 |

---

## 2. 소스 내용 요약

### 강점 (사이트에서 강조할 축)

1. **레거시 → React 마이그레이션** — ASP.NET / ASP / Angular / Vue 분석 후 TS 코드베이스로 이관
2. **복잡한 업무 규칙의 UI 구조화** — 권한·부서·상태·공개범위에 따른 액션 분리
3. **사용자 피드백 기반 개선** — 필터 UX, 담당자 지정, 목록 맥락 복원
4. **공통 추상화** — 게시판·테이블·조직도 선택·권한 hook, 디자인 시스템 전환(Chakra → Tailwind/shadcn)
5. **AI 보조 개발** — Cursor/ChatGPT로 분석·타입 초안, 검증 책임은 개발자

### 경력

| 회사 | 기간 | 역할 |
|------|------|------|
| Fasoo | 2021.05 ~ 현재 | Frontend Developer — 고객관리, 장애지원, 전자결재, 휴가, 문서관리 등 |
| Innogrid | 2020.12 ~ 2021.03 | R&D 사업 과제 지원 (짧게, About에만) |

### Works 전체 목록 (소스 기준)

**상세 케이스 (7)**

| # | 프로젝트 | 기간 | 핵심 태그 |
|---|----------|------|-----------|
| 1 | 마케팅 동의 관리 페이지 개편 | 2026.06~진행중 | Vue→React, TanStack, 고객 데이터 연동 |
| 2 | 제품개선관리 시스템 개편 | 2026.04~05 | ASP.NET→React, 권한 UI, 15~20 API |
| 3 | 고객 관리 시스템 개편 + 피드백 개선 | 2025.07~2026.05 | CS 통합, 필터 팝업, 다중 담당자 |
| 4 | 사내 AI 공유 게시판 | 2026.01~02 | 승인 플로우, 목록 맥락 복원 |
| 5 | 사내 전자결재 시스템 | 2024.11~12 | Next.js, 상태별 액션, 결재라인 자동화 |
| 6 | 미국 법인 휴가 시스템 | 2024.07~10 | 엑셀→웹, Storybook 공통 컴포넌트 |
| 7 | 공통 컴포넌트 라이브러리 / DS | 2024.05~현재 | Tailwind+shadcn 전환, 토큰, Storybook |

**기타 (요약 리스트로만)** — 일정 공유, 영업관리, 마케팅 DTO, 메인페이지, 뉴스레터, 반응형 업무등록, Wrapsody, eCo, 모듈 관리 등

**Troubleshooting (5)** — 조직도 선택 공통화, 권한 액션 분리, 검색 맥락 복원, AI 마이그레이션, 공통 테마 표준화

---

## 3. 사이트에서 다룰 범위 (선별)

내부 시스템 비중이 커서 **라이브 데모보다 문제→접근→기여→러닝** 내러티브가 핵심이다.  
스크린샷은 가능하면 비식별화/추상 UI, 없으면 프로젝트별 muted color 챕터 + 다이어그램성 비주얼로 대체.

### Featured 챕터 (4개) — 스크롤 메인

우선순위는 **스토리 다양성 + 최근성 + 차별점**.

| 순서 | 프로젝트 | 챕터 색 방향(초안) | 한 줄 훅 |
|------|----------|-------------------|----------|
| 01 | 고객 관리 시스템 개편 | muted blue-gray | 피드백으로 필터·담당자 흐름을 다시 설계 |
| 02 | 마케팅 동의 관리 개편 | muted lavender | 진행 중 — 고객·동의 데이터의 통합 조회 |
| 03 | 전자결재 시스템 | muted olive | 상태·역할 조합을 허용 액션으로 정리 |
| 04 | 공통 컴포넌트 / DS | warm paper | Chakra → Tailwind·shadcn 점진 전환 |

### Secondary (Projects index / 접이식)

- 제품개선관리, AI 공유 게시판, 미국 법인 휴가
- 기타 프로젝트는 연도·한 줄 역할만 나열

### Studio / Approach (작품 뒤)

Professional Summary + Core Competencies를 **스튜디오 챕터**로 재구성.  
Troubleshooting 5건 중 3건만 짧은 “방법론” 블록으로:

1. 권한·상태 → 허용 액션 분리  
2. 조직도 다중 역할 선택 공통화  
3. AI는 초안, 검증은 개발자

### Services (= Capabilities, oversized type)

소스 Skills를 서비스형 헤딩으로 재배열:

- Legacy → React Migration  
- Permission & Workflow UI  
- Data-heavy Tables & Filters  
- Design System & Shared Components  
- AI-assisted Delivery (검증 포함)

### Contact

이메일 한 액션 + 서울 / Frontend / 5yrs 메타.  
이력서 PDF 다운로드는 자산 준비되면 추가.

---

## 4. 페이지 구성 (`editorial-portfolio-chapters`)

이야기 순서: **작품이 먼저, 설명은 나중.**

```text
Header        compact nav (Work / Approach / Capabilities / Contact) + 중앙 wordmark "Miji Park"
Hero          full-bleed 추상 editorial 비주얼 + 작은 포지셔닝 한 줄
              ↓ fold 바로 아래 Featured 01 시작
Work 01–04    프로젝트별 color chapter (제목 / 역할 / 연도 / 액션 / square media)
More work     Secondary + 기타 리스트 (카드 남발 금지, 리스트·룰)
Approach      비대칭 구성 — 요약 + 방법론 3
Capabilities  oversized semantic headings
Contact       고대비 단일 CTA (email)
Footer        nav 복제, location, language, license (가볍게)
```

### 히어로 카피 초안

- **브랜드:** Miji Park  
- **포지셔닝:** Frontend for complex internal systems — migration, permissions, and feedback-driven UX.  
- **서브(선택):** React · TypeScript · 5 years  

CTA는 히어로에 크게 두지 않고 Contact에 모은다 (포트폴리오 editorial 규칙).

### 프로젝트 패널 메타 포맷

각 Featured:

```text
Title
Role: Frontend · Migration / Feature / DS
Year: 2025–2026
Stack: React, TypeScript, TanStack Query …
Action: View case → (앵커 또는 /work/slug)
```

케이스 상세는 같은 페이지 확장 섹션 또는 `/work/[slug]` — **1차는 원페이지 앵커**, 2차에 상세 라우트.

---

## 5. 실행 흐름 (추천 파이프라인)

### Step 1 — Design-first 스펙 (`design-first-ui-prompting`)

확정할 스펙 문서(후속 파일 후보: `docs/portfolio-design-spec.md`):

- GOAL / FORMAT / LAYOUT / TYPE / COLOR / IMAGERY / COPY / CONSTRAINTS / NEGATIVE  
- Constraints 카드 예: `FONT  Grotesk+Neutral  ·  STYLE  Dark editorial  ·  MODE  Near-black`

반복 규칙: 첫 출력은 layout+hierarchy+copy만. variant는 변수 1개씩.

### Step 2 — 챕터 프롬프트 (`editorial-portfolio-chapters`)

데모는 **품질 바만** 참고. Morrow 브랜드·카피·이미지는 사용하지 않음.  
Remix 프롬프트에 위 Featured 4 + 본인 카피·팔레트·연락처를 주입.

참고 경로:

- `.cursor/skills/editorial-portfolio-chapters/SKILL.md`
- `.cursor/skills/editorial-portfolio-chapters/demo/PROMPT.md`

### Step 3 — 구현 (Cursor 메인)

| 담당 | 범위 |
|------|------|
| **Cursor** | 원페이지 HTML 또는 Vite/React 스캐폴드, 섹션 마크업, Tailwind, a11y, 반응형 |
| **Codex (가끔)** | 모션 타이밍 미세조정, 카피 톤 다듬기, 리팩터 PR 단위 |

모션 스킬(필요 시): `gsap`, `animation-on-scroll` — editorial defaults (160–220ms control / 500–760ms reveal / no scroll hijack).

스타일 구현: `tailwindcss` 스킬.

### Step 4 — 검증

- 헤딩 순서, focus, alt, 대비(챕터 색 변경마다)  
- keyboard / touch / 200% zoom / reduced-motion  
- 정적 상태에서도 프로젝트 타이틀·액션 가독  
- 회사 기밀·스크린샷·수치 과대 주장 없음  

---

## 6. 콘텐츠 매핑 (소스 → 웹)

| 소스 섹션 | 웹 위치 | 처리 |
|-----------|---------|------|
| Professional Summary | Approach + Hero 한 줄 | 압축, 채용용 톤 |
| Core Competencies | Approach 방법론 / Capabilities | 중복 제거 |
| Skills | Capabilities + 프로젝트 스택 칩 | 나열만 하지 않음 |
| Experience Fasoo | Approach 또는 Footer 메타 | 짧개 |
| Innogrid | About 한 줄 또는 생략 | 비중 낮음 |
| Works 상세 7 | Featured 4 + Secondary 3 | 위 선별 |
| 기타 프로젝트 | More work 리스트 | 한 줄 |
| Troubleshooting | Approach 3개 | 나머지 생략 또는 PDF 전용 |
| Education / Language / License | Footer | 최소 |

---

## 7. 리스크와 제약

| 이슈 | 대응 |
|------|------|
| 대부분 사내 시스템 — 공개 데모/스크린샷 제한 | 비식별 mock, abstract media, 다이어그램, 텍스트 케이스 |
| 성과 수치가 정성 위주 | 과장 숫자 만들지 않음. “15~20 API” 등 소스에 있는 것만 |
| 프로젝트 수가 많음 | Featured 4로 제한, 나머지는 index |
| 현재 워크스페이스는 skills repo | 사이트는 `portfolio/` 또는 별도 repo로 분리 권장 |
| 영문/국문 | 1차는 **국문**, 영문 토글은 2차 |

---

## 8. 산출물 체크리스트

### 문서

- [x] `docs/portfolio-site-plan.md` (본 문서)
- [ ] `docs/portfolio-design-spec.md` — design-first 스펙
- [ ] (선택) `docs/case-briefs.md` — Featured 4 케이스 카피 확정본

### 구현

- [ ] 스캐폴드 (`portfolio/` 또는 신규 repo)
- [ ] Hero + Featured 4 chapters
- [ ] Approach / Capabilities / Contact
- [ ] 모션 + reduced-motion
- [ ] 배포 (Vercel/Netlify 등)

### 자산

- [ ] 히어로 추상 이미지(원본)
- [ ] 프로젝트별 비주얼 4 (또는 플레이스홀더 규칙)
- [ ] 이력서/경력기술서 PDF (다운로드용, 선택)
- [ ] favicon / OG image

---

## 9. 바로 다음 액션

1. 이 계획의 Featured 4 선별·CTA·국/영 확정  
2. `design-first-ui-prompting`으로 `docs/portfolio-design-spec.md` 작성  
3. 스펙 확정 후 Cursor에서 `editorial-portfolio-chapters` 기준으로 첫 HTML/페이지 구현  

미확정 질문(스펙 전에 답하면 좋음):

- CTA: 이메일만 vs PDF 다운로드 vs LinkedIn 등  
- Featured 4 교체 희망 여부 (예: AI 게시판을 전자결재 대신)  
- 공개 가능한 스크린샷/목업 유무  
- 사이트 코드 위치: 이 repo의 `portfolio/` vs 새 repo
