import type { ContentBundle } from './types'

export const contentKo: ContentBundle = {
  "site": {
    "name": "Miji Park",
    "nameKo": "박미지",
    "email": "devmail1012@gmail.com",
    "role": "Frontend Developer",
    "years": "5yrs",
    "location": "Seoul, South Korea",
    "education": "성신여자대학교 IT학부",
    "educationPeriod": "2016.03 – 2021.02",
    "license": "정보처리기사",
    "languages": [
      "한국어",
      "영어"
    ],
    "positioning": "React와 TypeScript를 중심으로 고객관리, 문서관리, 전자결재 등 복잡한 사내 업무 시스템을 개발해 온 5년 차 프론트엔드 개발자입니다.",
    "summary": [
      "ASP.NET, ASP, Angular, Vue 기반 레거시 시스템을 분석하고, 기존 API와 사용자 업무 흐름을 유지하면서 화면과 기능을 React 기반 코드베이스로 이관해 왔습니다.",
      "현업 피드백을 바탕으로 권한별 화면, 조회 필터, 담당자 지정 방식 같은 업무 흐름을 개선했으며, 반복되는 권한 판별·사용자 선택·테이블·게시판·폼 로직을 공통 컴포넌트와 hook으로 추상화하는 데 강점이 있습니다.",
      "정해진 기능을 구현하는 데 그치지 않고, 문제의 원인과 변경 영향을 파악한 뒤 이후 요구사항 확장과 유지보수가 가능한 구조로 해결하는 것을 중요하게 생각합니다."
    ],
    "fitFor": [
      "레거시 → React·TypeScript 이관이 필요한 팀",
      "권한·상태·워크플로가 복잡한 B2B / 사내 시스템",
      "목록·필터·폼을 공통 구조로 정리해야 하는 제품",
      "디자인 시스템·공통 컴포넌트를 점진적으로 표준화하는 환경"
    ],
    "highlights": [
      {
        "label": "경력",
        "value": "5년",
        "note": "Fasoo Frontend · 2021.05–현재"
      },
      {
        "label": "주력",
        "value": "React · TS",
        "note": "마이그레이션 + 업무 UI"
      },
      {
        "label": "강점",
        "value": "권한·워크플로",
        "note": "허용 액션 기준 구조화"
      },
      {
        "label": "방식",
        "value": "피드백 개선",
        "note": "필터·담당자·탐색 맥락"
      }
    ],
    "experience": {
      "company": "Fasoo",
      "role": "Frontend Developer",
      "period": "2021.05 – 현재",
      "body": "고객관리, 장애 지원, 영업 관리, 전자결재, 휴가, 뉴스레터, 문서관리 등 다양한 사내 업무 시스템과 제품군의 프론트엔드를 담당했습니다. React·TypeScript 신규 기능 개발과 함께 ASP.NET, ASP, Angular, Vue 레거시 화면을 React 구조로 전환했습니다."
    },
    "previous": {
      "company": "Innogrid",
      "role": "R&D 사업 과제 지원",
      "period": "2020.12 – 2021.03",
      "body": "R&D 사업 과제 관련 사업계획서와 발표 자료 작성을 지원했으며, Docker와 Kubernetes 기반 인프라 개념을 학습했습니다."
    },
    "skills": {
      "frontend": [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Vite",
        "Redux",
        "Recoil",
        "TanStack Query",
        "TanStack Table"
      ],
      "ui": [
        "Chakra UI",
        "Tailwind CSS",
        "styled-components",
        "Sass",
        "Material UI",
        "Storybook",
        "Recharts"
      ],
      "tools": [
        "Git",
        "Figma",
        "Cursor AI",
        "ChatGPT"
      ],
      "backend": [
        "Node.js",
        "ASP.NET",
        "C#",
        "MSSQL"
      ]
    }
  },
  "nav": [
    {
      "href": "#profile",
      "label": "Profile"
    },
    {
      "href": "#work",
      "label": "Work"
    },
    {
      "href": "#approach",
      "label": "Approach"
    },
    {
      "href": "#contact",
      "label": "Contact"
    }
  ],
  "featured": [
    {
      "id": "customer",
      "index": "01 / 04",
      "title": "고객 관리 시스템 개편",
      "titleLines": [
        "고객 관리",
        "시스템 개편"
      ],
      "hook": "피드백으로 필터·담당자 흐름을 다시 설계",
      "role": "Frontend · Migration / Feature",
      "year": "2025.07 – 2026.05",
      "stack": "React, TypeScript, TanStack Query/Table, Chakra UI, Storybook, Cursor AI",
      "scope": "주요 화면 설계·구현, 장애 지원 CRUD, 예약 캘린더, 권한별 UI, 조직도 선택 로직 개선",
      "impact": [
        "CS 문의·지원 예약·담당자 지정·상태 관리를 한 흐름으로 통합",
        "상세 필터 팝업으로 테이블 탐색 영역 확보",
        "단일 담당자 → 담당자·수신자·참조자 다중 지정으로 확장"
      ],
      "chapterClass": "bg-chapter-1 text-ink",
      "mediaClass": "bg-[linear-gradient(145deg,#5c6b7a_0%,#a8b4c0_42%,#2f3a45_100%)]",
      "mediaLabel": "고객 관리 UI를 추상화한 블루그레이 패널",
      "overview": "CS팀이 고객 문의, 장애 지원 상태, 지원 예약, 담당자 배정과 관련 이력을 통합 관리할 수 있도록 기존 시스템을 React 기반으로 개편했습니다. 개편 이후에는 실제 사용자의 피드백을 반영해 필터 UX, 권한별 화면, 담당자 지정 방식을 추가 개선했습니다.",
      "problem": "고객·장애·지원 이력·예약·담당자 정보가 서로 연결되고, 역할·부서에 따라 조회·수정 가능한 범위가 달라 한 화면에 정보와 규칙이 과도하게 몰려 있었습니다. 개편 후에는 조회 조건이 늘수록 테이블이 좁아지고, 담당자를 한 명만 지정할 수 있어 실제 CS 협업 흐름과 맞지 않는다는 피드백이 있었습니다.",
      "sections": [
        {
          "label": "문제와 접근",
          "items": [
            "업무 정보를 고객, 지원 이력, 연관 장애 등 의미 단위로 분리하고 탭·상태 표시로 정보 밀도를 조절했습니다.",
            "필터를 항상 노출하지 않고 기본 조회 영역과 상세 필터 팝업으로 나눠, 조건이 많아져도 목록 탐색이 가능하도록 했습니다.",
            "담당자 1명 구조를 담당자·수신자·참조자 다중 지정으로 바꾸며 관련 상태와 API 데이터 매핑을 재설계했습니다.",
            "역할이 다른 사용자 선택을 각각 구현하지 않고, 공통 선택 구조를 기반으로 역할별 규칙만 분리했습니다."
          ]
        },
        {
          "label": "주요 기여",
          "items": [
            "장애 지원 등록·조회·수정·삭제와 지원 상태 관리 화면을 구현했습니다.",
            "지원 예약을 캘린더로 제공하고 1차·2차 담당자 및 관심 장애 상태를 화면에 표시했습니다.",
            "사용자 역할과 부서에 따라 조회·입력 가능한 데이터와 액션을 분리했습니다.",
            "조직도에서 담당자·수신자·참조자를 자동 추가하거나 그룹 단위로 지정할 수 있도록 선택 로직을 확장했습니다.",
            "단일 사용자 선택에서 다중 사용자 지정으로 전환하며 상태 관리와 요청 데이터 매핑 로직을 수정했습니다."
          ]
        }
      ],
      "outcomes": [
        "고객 문의 접수부터 지원 예약, 담당자 지정, 상태 관리까지 CS 업무 흐름을 하나의 시스템에서 이어가도록 개선했습니다.",
        "상세 필터 분리와 정보 구조 재구성으로 담당자가 필요한 고객·지원 정보를 더 빠르게 탐색할 수 있게 했습니다.",
        "실제 피드백을 UI 수정 요청이 아니라 “업무 중 어떤 맥락을 잃는지”의 신호로 해석해 조회 흐름 자체를 개선했습니다."
      ],
      "learning": "역할이 다른 사용자 선택 기능을 각각 구현하기보다, 공통 선택 구조를 두고 역할별 규칙만 분리하는 방식이 복잡성을 낮추는 데 효과적이었습니다."
    },
    {
      "id": "consent",
      "index": "02 / 04",
      "title": "마케팅 동의 관리 개편",
      "titleLines": [
        "마케팅 동의",
        "관리 개편"
      ],
      "hook": "진행 중 — 고객·동의 데이터의 통합 조회",
      "role": "Frontend · Migration",
      "year": "2026.06 – 진행 중",
      "stack": "React, TypeScript, TanStack Query/Table, Tailwind CSS, Storybook, Cursor AI",
      "scope": "레거시 분석 및 React 마이그레이션, 고객 데이터 연동, 검색·필터 UI, API 타입 정의",
      "impact": [
        "고객 정보 + 마케팅 동의 내역을 한 화면에서 조회",
        "수집 경로·조건 조합 검색으로 발송 대상 선별 단순화",
        "중복 저장 없이 기존 고객 데이터를 마케팅에 재사용"
      ],
      "chapterClass": "bg-chapter-2 text-ink",
      "mediaClass": "bg-[linear-gradient(155deg,#6f648f_0%,#c4bbd9_48%,#3d3554_100%)]",
      "mediaLabel": "동의 데이터 흐름을 추상화한 라벤더 패널",
      "overview": "행사·세미나 등 다양한 채널에서 마케팅 활용에 동의한 고객 정보를 통합 관리하고, 마케팅 담당자가 광고성 메일·문자 발송 대상자를 효율적으로 조회·활용할 수 있도록 기존 Vue·Node.js 기반 시스템을 React로 개편하고 있습니다.",
      "problem": "기존 화면에는 행사에서 수집한 마케팅 동의 정보와 사내 고객관리 데이터가 함께 사용되고 있어, 단순 UI 교체만으로는 유지보수와 이후 확장에 한계가 있었습니다. 수집 경로와 조회 조건이 계속 늘어날 수 있어, 처음부터 재사용 가능한 목록·검색 구조가 필요했습니다.",
      "sections": [
        {
          "label": "문제와 접근",
          "items": [
            "레거시 화면의 조회 조건, API 요청·응답 구조, 고객 정보 연결 방식을 기능 단위로 분석했습니다.",
            "React·TypeScript 구조에 맞게 화면과 타입을 재정의하고, 레거시 데이터와 화면 데이터 간 변환 기준을 정리했습니다.",
            "검색 조건, 테이블, 상태 UI를 재사용 가능한 컴포넌트로 분리해 이후 조건 추가에 대비했습니다.",
            "Cursor AI로 API 호출·타입 초안을 만든 뒤, 실제 데이터 구조·요구사항·null/빈 값 등 엣지 케이스를 검증했습니다."
          ]
        },
        {
          "label": "주요 기여",
          "items": [
            "사내 고객관리 데이터와 마케팅 동의 정보를 연동해 기본 정보, 동의 여부, 동의 경로·관련 이력을 함께 조회하도록 구현했습니다.",
            "행사·세미나 등 수집 경로와 다양한 조건을 조합해 대상 고객을 검색·필터링하는 목록 화면을 개발했습니다.",
            "TanStack Query·Table로 서버 상태, 조회 조건, 정렬, 필터, 페이지네이션 흐름을 구성했습니다.",
            "API 요청·응답 타입을 정의하고 레거시–화면 데이터 변환 기준을 문서화 수준으로 정리했습니다."
          ]
        }
      ],
      "outcomes": [
        "고객 정보와 마케팅 동의 내역을 한 화면에서 조회해 발송 대상자 선별 과정을 단순화하고 있습니다.",
        "기존 고객 데이터를 중복 저장하지 않고 마케팅 업무에 활용할 수 있는 화면 구조를 마련하고 있습니다.",
        "화면을 그대로 복제하기보다 업무 흐름과 데이터 의존 관계를 먼저 정리하는 마이그레이션 접근을 적용 중입니다."
      ],
      "learning": "레거시 마이그레이션에서는 UI를 복제하기보다, 사용자 업무 흐름과 데이터 의존 관계를 먼저 정리해야 이후 변경에 대응하기 쉽습니다."
    },
    {
      "id": "approval",
      "index": "03 / 04",
      "title": "사내 전자결재 시스템",
      "titleLines": [
        "사내",
        "전자결재"
      ],
      "hook": "상태·역할 조합을 허용 액션으로 정리",
      "role": "Frontend · Feature",
      "year": "2024.11 – 2024.12",
      "stack": "Next.js, TypeScript, TanStack Query, Chakra UI, styled-components",
      "scope": "결재 상신·승인 플로우, 결재라인·참조자 자동 지정, 검색·필터 UI",
      "impact": [
        "상신→승인·반려·전결·취소·재상신 흐름을 웹으로 구축",
        "현재 상태에서 가능한 액션만 노출해 규칙 누락 위험 감소",
        "결재라인·참조자 자동 지정으로 반복 입력 부담 감소"
      ],
      "chapterClass": "bg-chapter-3 text-ink",
      "mediaClass": "bg-[linear-gradient(150deg,#5f6d3f_0%,#c2d08a_46%,#2f3520_100%)]",
      "mediaLabel": "결재 상태 흐름을 추상화한 올리브 패널",
      "overview": "임직원이 다양한 양식의 결재를 상신하고, 결재자가 승인, 반려, 전결, 취소와 재상신을 처리할 수 있는 전자결재 시스템을 개편했습니다.",
      "problem": "문서 상태, 사용자 역할, 결재 순서의 조합에 따라 가능한 액션이 달라지는 복잡한 업무 규칙을 화면에 일관되게 반영해야 했습니다. 조건을 화면마다 흩어 두면 정책 변경 시 누락이 생기기 쉬운 구조였습니다.",
      "sections": [
        {
          "label": "문제와 접근",
          "items": [
            "결재 상태별 액션과 사용자 선택·데이터 매핑을 분리했습니다.",
            "화면에서는 현재 상태에서 가능한 액션만 노출하도록 구성했습니다.",
            "상태 전이와 허용 액션을 먼저 정의해 구현·검증 범위를 단순화했습니다."
          ]
        },
        {
          "label": "주요 기여",
          "items": [
            "다양한 결재 양식을 등록하고 상신할 수 있는 작성 화면을 구현했습니다.",
            "승인, 반려, 전결, 결재 취소, 재상신 등 상태별 액션을 UI 흐름에 반영했습니다.",
            "결재라인과 참조자가 자동 지정되도록 사용자 선택 및 데이터 매핑 로직을 구현했습니다.",
            "결재 목록 검색과 필터 기능을 개발했습니다."
          ]
        }
      ],
      "outcomes": [
        "상신부터 승인·반려·재상신까지 이어지는 결재 흐름을 웹에서 처리할 수 있도록 구축했습니다.",
        "반복적인 결재라인·참조자 입력을 자동화해 사용자의 입력 부담을 줄였습니다.",
        "복잡한 상태 기반 UI에서 허용 액션을 먼저 정의하는 패턴을 이후 권한형 화면에도 재사용했습니다."
      ],
      "learning": "복잡한 상태 기반 UI에서는 가능한 모든 조건을 화면마다 처리하기보다, 상태 전이와 허용 액션을 먼저 정의하는 것이 구현과 검증을 단순하게 만듭니다."
    },
    {
      "id": "design-system",
      "index": "04 / 04",
      "title": "공통 컴포넌트 / DS",
      "titleLines": [
        "공통 컴포넌트",
        "/ DS"
      ],
      "hook": "Chakra → Tailwind·shadcn 점진 전환",
      "role": "Frontend · Design System",
      "year": "2024.05 – 현재",
      "stack": "React, TypeScript, Tailwind CSS, shadcn/ui, Chakra UI, styled-components, Storybook",
      "scope": "기술 스택 전환 검토, 디자인 토큰·공통 컴포넌트 설계, 재사용 컴포넌트·hook 개발, Storybook 문서화",
      "impact": [
        "분산된 테마·스타일을 공통 디자인 토큰으로 재정리",
        "신규 컴포넌트부터 Tailwind·shadcn 구조로 점진 이관",
        "Storybook Docs로 사용법·variant·예외 기준 문서화"
      ],
      "chapterClass": "bg-chapter-4 text-ink",
      "mediaClass": "bg-[linear-gradient(148deg,#8a7355_0%,#f0e2c8_50%,#4a3c2c_100%)]",
      "mediaLabel": "디자인 시스템 토큰을 추상화한 워밍 페이퍼 패널",
      "overview": "여러 사내 프로젝트에서 반복 사용하는 UI를 일관된 기준으로 구현할 수 있도록 디자인 시스템 기반의 공통 컴포넌트 라이브러리를 개발하고 있습니다. 초기에는 styled-components와 Chakra UI를 사용했고, 현재는 Tailwind CSS와 shadcn/ui 기반 구조로 점진적으로 전환하고 있습니다.",
      "problem": "기존 구조에서는 사내 디자인 시스템의 색상·간격·상태 스타일을 컴포넌트마다 덮어써야 했고, 일부 의존 라이브러리의 업데이트 중단·버전 호환성 문제로 React 업그레이드와 공통 라이브러리 유지보수 비용이 커졌습니다.",
      "sections": [
        {
          "label": "문제와 접근",
          "items": [
            "완성형 UI 라이브러리의 기본 스타일에 맞추기보다, 디자인 토큰과 컴포넌트 소스를 직접 제어할 수 있는 Tailwind·shadcn/ui가 사내 DS 반영에 적합하다고 판단했습니다.",
            "기존 컴포넌트를 한 번에 교체하지 않고 사용 빈도·영향 범위로 이관 우선순위를 정했습니다.",
            "신규 컴포넌트부터 새 구조를 적용하고, 기존 화면과 함께 동작하도록 호환 범위를 고려해 점진 마이그레이션했습니다."
          ]
        },
        {
          "label": "주요 기여",
          "items": [
            "Chakra UI theme.ts와 styled-components에 분산된 색상·타이포·간격·상태 스타일을 분석해 공통 디자인 토큰으로 재정리했습니다.",
            "Tailwind 설정과 CSS 변수로 사내 디자인 시스템의 시멘틱 컬러와 스타일 기준을 정의했습니다.",
            "shadcn/ui 소스를 사내 UI 정책에 맞게 수정하고, props·variant로 확장 가능한 공통 컴포넌트 구조를 설계했습니다.",
            "재사용 컴포넌트와 custom hook의 사용 방법, variant, 예외 처리 기준을 Storybook Docs에 문서화했습니다."
          ]
        }
      ],
      "outcomes": [
        "사내 디자인 시스템을 적용할 때 반복되던 스타일 오버라이드와 프로젝트별 구현 편차를 줄일 기반을 마련했습니다.",
        "컴포넌트 소스와 디자인 토큰을 직접 관리하는 구조로 전환해 신규 요구사항·라이브러리 버전 변화에 대응하기 쉬운 방향을 잡았습니다.",
        "스택 전환을 “도입”이 아니라 “기존 사용처·호환성·이관 순서 설계”로 진행하는 경험을 쌓았습니다."
      ],
      "learning": "기술 스택 전환은 새 라이브러리를 도입하는 일보다, 기존 사용처와 호환성·이관 순서를 함께 설계해야 안정적으로 진행할 수 있습니다."
    }
  ],
  "secondary": [
    {
      "title": "제품개선관리 시스템 개편",
      "year": "2026.04 – 05",
      "role": "레거시 화면 분석, React 마이그레이션, 게시판 CRUD, 권한별 UI, API 연동·타입 정의",
      "stack": "React, TypeScript, TanStack Query/Table, Chakra UI, Storybook, Cursor AI",
      "note": "임직원이 제품·사내 시스템 개선 의견을 등록하고, 담당자가 진행 상태와 피드백을 관리하는 개선 요청 시스템을 React로 개편했습니다.",
      "highlights": [
        "ASP.NET 화면에 얽혀 있던 등록·첨부·공개 범위·상태·권한 액션을 요청 등록·검토·상태 변경·피드백으로 분리해 재구성",
        "부서장·특정 권한에 따라 조회 가능한 정보와 상태 변경 범위를 구분한 권한 기반 UI",
        "공개·비공개와 진행 상태에 따라 가능한 액션을 화면에 반영",
        "총 5개 화면 React 전환, 약 15–20개 API 연동 및 타입 정의"
      ],
      "outcomes": [
        "개선 요청 등록부터 담당자 피드백까지 업무 상태를 시스템 안에서 추적할 수 있도록 구성했습니다.",
        "권한·상태가 복합인 화면에서는 허용 액션 기준을 먼저 정리하는 것이 변경 범위를 줄인다는 점을 확인했습니다."
      ]
    },
    {
      "title": "사내 AI 공유 게시판",
      "year": "2026.01 – 02",
      "role": "신규 게시판 개발, 권한 기반 승인 플로우, 레거시 마이그레이션, 공통 UI 설계",
      "stack": "React, TypeScript, TanStack Query/Table, Chakra UI, styled-components, Storybook",
      "note": "임직원이 AI 도구 활용 사례와 학습 내용을 공유하고, 권한자가 검토한 게시물을 전사에 공개하는 지식 공유 게시판을 개발했습니다.",
      "highlights": [
        "작성자·검토 권한자·전사 사용자에 따라 가능한 액션과 공개 상태가 달라지는 규칙을 반영",
        "공통 게시판 구조와 게시판별 승인·공개 규칙을 분리",
        "검토완료·승인 후 전사 공유되는 승인 플로우 구성",
        "상세에서 목록 복귀 시 검색 필터·페이지네이션 상태 유지"
      ],
      "outcomes": [
        "AI 활용 사례가 개인 단위로 흩어지지 않고 검토를 거쳐 공유되는 사내 지식 관리 흐름을 구축했습니다.",
        "목록과 상세를 별개 페이지가 아니라 하나의 탐색 과정으로 설계해야 사용성이 높아진다는 점을 경험했습니다."
      ]
    },
    {
      "title": "미국 법인 휴가 시스템",
      "year": "2024.07 – 10",
      "role": "엑셀 기반 프로세스 분석, 휴가 신청·승인 화면, 공통 컴포넌트 적용",
      "stack": "React, TypeScript, styled-components, Storybook",
      "note": "엑셀로 관리되던 미국 법인의 휴가·연차 신청과 승인 프로세스를 웹 시스템으로 전환했습니다.",
      "highlights": [
        "기존 엑셀 항목과 승인 흐름을 분석해 신청자·관리자 화면으로 구조화",
        "휴가·연차 신청, 승인 상태 조회, 관리 기능 구현",
        "입력 폼·버튼·목록에 Storybook 기반 공통 컴포넌트 적용"
      ],
      "outcomes": [
        "수기로 관리되던 신청·승인 과정을 시스템 안에서 확인할 수 있도록 전환했습니다.",
        "기존 도구를 시스템화할 때는 화면 복제보다 실제 업무 단계와 예외 상황을 먼저 파악해야 한다는 점을 경험했습니다."
      ]
    }
  ],
  "otherWork": [
    {
      "title": "사내 일정 공유 시스템",
      "year": "2026.03",
      "note": "일정·개선 제안을 게시판·카드로 제공하고, 권한별 수정·삭제 및 승인·반려 플로우를 구현"
    },
    {
      "title": "영업 관리 사이트 추가 개발",
      "year": "2025.11 – 12",
      "note": "고객사 프로젝트 지원 일정 캘린더 제공, 토큰 만료 확인·재발급·로그인 이동 흐름 개선"
    },
    {
      "title": "마케팅 DTO 관리 시스템",
      "year": "2025.04 – 06",
      "note": "제품·채널별 마케팅 데이터를 테이블·차트로 시각화, 권한별 데이터 관리·관리자 기준값 설정"
    },
    {
      "title": "영업 관리 시스템 개편",
      "year": "2025.01 – 03",
      "note": "고객·프로젝트·담당자·지원 이력을 웹·앱 WebView에서 통합하고 조건별 UI 구현"
    },
    {
      "title": "사내 메인 페이지 개편",
      "year": "2024.06 – 현재",
      "note": "ASP 기반 메인 페이지를 React 컴포넌트 구조로 전환하고 Storybook 공통 컴포넌트 적용"
    },
    {
      "title": "뉴스레터 전송 시스템",
      "year": "2024.05 – 06",
      "note": "발신자·수신자·첨부파일 입력과 제외 대상 자동 필터링 로직 구현"
    },
    {
      "title": "사내 업무 등록 반응형 페이지",
      "year": "2024.01 – 04",
      "note": "고객사 관련 업무를 모바일에서 등록·조회하는 반응형 화면과 재사용 입력 컴포넌트 개발"
    },
    {
      "title": "문서관리시스템 Wrapsody",
      "year": "2022.01 – 2023.12",
      "note": "Angular 일부 화면 React 개편, 관리자·문서 검색·필터·공유·미리보기·이력·복구·다국어 UI 참여"
    },
    {
      "title": "Wrapsody eCo",
      "year": "2023.07 – 09",
      "note": "외부 협업 플랫폼 — 관리자 로고 설정과 사용자 화면 반영 기능 구현"
    },
    {
      "title": "사내 모듈 관리 웹사이트",
      "year": "2021.05 – 12",
      "note": "JavaScript, ASP.NET, C#, MSSQL — 모듈 CRUD, 파일 첨부, 고객사별 설치·사용 로그 관리"
    }
  ],
  "methods": [
    {
      "title": "권한·상태 → 허용 액션",
      "body": "역할·부서·공개 범위·업무 상태에 따라 달라지는 조회·수정·승인 액션을 UI에 흩뿌리지 않고, 허용 액션 기준으로 먼저 정리합니다.",
      "detail": "고객관리·개선 요청·전자결재에서 반복되던 권한 판별을 공통 함수·hook으로 추출하고, 컴포넌트는 판별 결과에 따라 액션만 렌더링하도록 분리했습니다.",
      "result": "권한 정책 변경 시 수정 범위를 줄이고, 여러 화면에서 동일한 접근 기준을 유지할 수 있었습니다."
    },
    {
      "title": "조직도 선택 공통화",
      "body": "담당자·수신자·참조자처럼 역할이 다른 다중 선택을 화면마다 따로 만들지 않고, 공통 데이터 구조와 역할별 규칙으로 나눕니다.",
      "detail": "선택된 사용자를 공통 상태로 관리하고 역할별 추가·삭제·중복·단일/다중 규칙을 분리했으며, API 요청 매핑은 한곳에서 관리하도록 정리했습니다.",
      "result": "새 역할이나 선택 규칙이 추가될 때 화면 전체를 수정하지 않고 공통 구조와 역할별 규칙만 확장할 수 있게 했습니다."
    },
    {
      "title": "탐색 맥락 복원",
      "body": "목록에서 상세로 갔다가 돌아올 때 필터·페이지가 초기화되지 않도록, 조회 상태를 탐색 과정의 일부로 설계합니다.",
      "detail": "검색 조건과 페이지네이션을 목록 조회 상태와 분리해 관리하고, TanStack Query의 query key에 실제 조회 조건을 포함해 조건별 캐시와 요청을 구분했습니다.",
      "result": "상세 확인 후에도 이전 목록의 탐색 맥락을 이어가도록 사용성을 개선했습니다."
    },
    {
      "title": "AI는 초안, 검증은 개발자",
      "body": "레거시 분석·타입 초안·반복 코드는 AI로 가속하고, 요구사항·타입 안정성·엣지 케이스·민감정보 노출은 직접 검증합니다.",
      "detail": "ChatGPT·Cursor로 분석과 초안 속도를 높이되, 결과를 정답으로 쓰지 않고 검증 책임이 개발자에게 있는 보조 프로세스로 정리했습니다.",
      "result": "반복 구현 비용을 줄이면서 컴포넌트·타입 정의의 일관성을 높였습니다."
    }
  ],
  "capabilities": [
    {
      "title": "Legacy → React Migration",
      "description": "ASP.NET, ASP, Angular, Vue 화면의 구조와 API 흐름을 분석하고, 기존 업무 흐름을 유지한 채 React·TypeScript 컴포넌트 구조로 전환합니다.",
      "proof": "마케팅 동의 관리, 제품개선관리, AI 게시판, 메인 페이지, Wrapsody 일부 화면",
      "details": [
        "레거시 조회 조건·API 요청/응답·화면 연결 방식을 기능 단위로 분석한 뒤 React 컴포넌트와 타입으로 재정의합니다.",
        "화면을 그대로 복제하기보다 업무 흐름과 데이터 의존 관계를 먼저 정리해 이후 확장에 대비합니다.",
        "기존 API를 유지한 채 프론트만 전환하거나, 프론트·백 분리 구조로 옮기는 케이스 모두 경험했습니다."
      ],
      "related": [
        {
          "label": "마케팅 동의 관리",
          "href": "#consent"
        },
        {
          "label": "고객 관리 시스템",
          "href": "#customer"
        },
        {
          "label": "전자결재",
          "href": "#approval"
        }
      ]
    },
    {
      "title": "Permission & Workflow UI",
      "description": "사용자 역할, 부서, 공개 범위, 업무 상태에 따라 달라지는 조회·수정·승인 액션을 허용 액션 기준으로 구조화합니다.",
      "proof": "전자결재, 고객관리, 제품개선관리, AI 공유 게시판 승인 플로우",
      "details": [
        "권한 판별을 UI 조건문에 흩뿌리지 않고 공통 함수·hook으로 분리한 뒤, 화면은 결과만 렌더링합니다.",
        "상태 전이와 허용 액션을 먼저 정의해 정책 변경 시 누락 위험을 줄입니다.",
        "승인·반려·전결·재상신처럼 상태가 많은 플로우에서도 “지금 가능한 액션”만 노출하는 패턴을 적용했습니다."
      ],
      "related": [
        {
          "label": "전자결재",
          "href": "#approval"
        },
        {
          "label": "고객 관리 시스템",
          "href": "#customer"
        },
        {
          "label": "Approach 방법론",
          "href": "#approach"
        }
      ]
    },
    {
      "title": "Data-heavy Tables & Filters",
      "description": "TanStack Query·Table 기반 목록, 검색, 필터, 페이지네이션, 상세 조회, 캘린더·대시보드 UI를 구현합니다.",
      "proof": "고객관리 필터 팝업, 마케팅 동의 목록, 마케팅 DTO 테이블·차트",
      "details": [
        "조회 조건이 늘어도 테이블 탐색이 가능하도록 기본 조회와 상세 필터를 분리한 경험이 있습니다.",
        "query key에 실제 조회 조건을 포함해 조건별 캐시·요청을 구분하고, 상세 복귀 시 목록 맥락을 유지합니다.",
        "목록·정렬·필터·페이지네이션을 서버 상태와 맞춰 TanStack Query/Table로 구성합니다."
      ],
      "related": [
        {
          "label": "고객 관리 시스템",
          "href": "#customer"
        },
        {
          "label": "마케팅 동의 관리",
          "href": "#consent"
        }
      ]
    },
    {
      "title": "Design System & Shared Components",
      "description": "게시판·테이블·조직도 선택·권한 hook·공통 폼을 추상화하고, Chakra에서 Tailwind·shadcn으로 점진 전환하며 Storybook으로 문서화합니다.",
      "proof": "공통 컴포넌트 라이브러리, Storybook Docs, 디자인 토큰 정리",
      "details": [
        "분산된 theme/styled 스타일을 시멘틱 토큰으로 재정리하고 CSS 변수·Tailwind 설정으로 기준을 맞춥니다.",
        "한 번에 교체하지 않고 사용 빈도·영향 범위로 우선순위를 정해 신규 컴포넌트부터 이관합니다.",
        "재사용 컴포넌트와 hook의 사용법·variant·예외 기준을 Storybook Docs에 남깁니다."
      ],
      "related": [
        {
          "label": "공통 컴포넌트 / DS",
          "href": "#design-system"
        },
        {
          "label": "Approach",
          "href": "#approach"
        }
      ]
    },
    {
      "title": "AI-assisted Delivery",
      "description": "Cursor·ChatGPT로 레거시 분석과 타입·반복 코드 초안을 보조하고, 요구사항·타입 안정성·엣지 케이스는 개발자가 검증해 적용합니다.",
      "proof": "마이그레이션·API 타입 초안 가속 + 검증 책임 분리",
      "details": [
        "AI는 분석·초안 속도를 올리는 보조 도구로 쓰고, 최종 적용 전 검증 책임은 개발자에게 둡니다.",
        "null/빈 값, 렌더링 구조, 민감정보 노출 가능성을 체크리스트처럼 확인한 뒤 반영합니다.",
        "반복되는 게시판·테이블·폼·권한 패턴은 초안 이후 컴포넌트와 hook으로 다시 정리합니다."
      ],
      "related": [
        {
          "label": "마케팅 동의 관리",
          "href": "#consent"
        },
        {
          "label": "Approach · AI 검증",
          "href": "#approach"
        }
      ]
    }
  ],
  "competencies": [
    {
      "title": "사용자 피드백 기반 제품 개선",
      "body": "실제 사용 중 접수된 불편을 분석해 필터 UX, 권한별 화면, 담당자 지정 구조 등 업무 흐름을 개선합니다."
    },
    {
      "title": "복잡한 업무 규칙의 구조화",
      "body": "역할·부서·공개 범위·상태에 따라 달라지는 액션을 UI와 데이터 흐름에 반영합니다."
    },
    {
      "title": "레거시 시스템의 React 마이그레이션",
      "body": "ASP.NET, ASP, Angular, Vue 기반 화면의 구조와 API 흐름을 분석하고 React·TypeScript 컴포넌트 구조로 전환합니다."
    },
    {
      "title": "반복 문제의 추상화와 재사용",
      "body": "게시판, 테이블, 검색 조건, 권한 판별, 조직도 선택, 공통 폼을 컴포넌트와 custom hook으로 분리합니다."
    },
    {
      "title": "데이터 중심 UI 개발",
      "body": "TanStack Query·Table 기반 목록, 검색, 필터, 페이지네이션, 상세 조회, 캘린더 및 대시보드 UI를 구현합니다."
    }
  ],
  "ui": {
    "metaDescription": "박미지 — 복잡한 사내 업무 시스템을 React·TypeScript로 이관·구조화하는 프론트엔드 개발자.",
    "navAria": "주요 내비게이션",
    "footerNavAria": "푸터 내비게이션",
    "heroArtLabel": "추상적인 에디토리얼 히어로 비주얼",
    "profileEyebrow": "Profile",
    "profileTitle": [
      "한눈에 보는",
      "프로필"
    ],
    "fitForLabel": "Fit for",
    "currentFocusLabel": "Current focus",
    "previousLabel": "이전",
    "selectedWork": "Selected work",
    "impactLabel": "Impact",
    "roleLabel": "Role",
    "scopeLabel": "Scope",
    "yearLabel": "Year",
    "stackLabel": "Stack",
    "viewCase": "상세 케이스 보기 ↓",
    "closeCase": "케이스 접기 ↑",
    "closeEsc": "닫기 · Esc",
    "caseCollapsed": "케이스 (접힘)",
    "caseOpen": "Case open",
    "problemLabel": "Problem",
    "outcomesLabel": "Outcomes",
    "learningLabel": "Learning",
    "moreWorkTitle": "More work",
    "moreWorkIntro": "Featured 외에도 권한형 게시판, 레거시 이관, 엑셀→웹 전환 등 비슷한 문제 유형의 프로젝트를 수행했습니다.",
    "whatIDid": "What I did",
    "alsoLabel": "Also",
    "approachEyebrow": "Approach",
    "approachTitle": [
      "작품 뒤의",
      "작업 방식"
    ],
    "approachIntro": "기능을 구현하는 데 그치지 않고, 원인과 변경 영향을 파악한 뒤 확장·유지보수가 가능한 구조로 해결합니다.",
    "coreCompetencies": "Core competencies",
    "educationLicense": "Education / License",
    "troubleshooting": "Troubleshooting patterns",
    "troubleshootingIntro": "여러 프로젝트에서 반복된 문제를 패턴으로 정리한 내용입니다. 비슷한 상황에서 어떻게 접근하는지를 보는 기준이 됩니다.",
    "resultLabel": "결과",
    "capabilitiesEyebrow": "Capabilities",
    "capabilitiesTitle": "어떤 문제를 맡길 수 있는 사람인지",
    "capabilitiesHint": "항목을 클릭하면 상세 설명이 펼쳐집니다. Esc로 닫을 수 있습니다.",
    "relatedExperience": "관련 경험",
    "skillFrontend": "Frontend",
    "skillUi": "UI / Styling",
    "skillCollab": "Collaboration",
    "skillBackend": "Backend 경험",
    "contactEyebrow": "Contact",
    "contactTitle": [
      "이력서·경력기술서",
      "요청하기"
    ],
    "contactBody": "채용·협업 문의는 이메일로 주세요. 이력서와 경력기술서를 보내 드리며, 관심 포지션에 맞춰 관련 케이스(마이그레이션 / 권한 UI / DS)를 추가로 설명할 수 있습니다.",
    "contactSubject": "포트폴리오 문의 — 이력서/경력기술서 요청"
  }
}
