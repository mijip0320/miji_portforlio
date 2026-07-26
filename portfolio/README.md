# Miji Park Portfolio

박미지 프론트엔드 포트폴리오 사이트 (Vite + React + TypeScript + Tailwind).

`editorial-portfolio-chapters` 스킬 기준으로 작품 우선 내러티브의 원페이지입니다.

## 실행

```bash
cd portfolio
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 을 엽니다.

헤더/푸터의 **KO / EN** 토글로 국문·영문을 전환할 수 있습니다.

- 기본 언어: 한국(언어·타임존·IP 국가코드)이면 `KO`, 그 외는 `EN`
- 사용자가 직접 고른 언어는 `localStorage`에 저장되어 다음 방문에도 유지됩니다.

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

## 콘텐츠

카피·프로젝트 목록은 `src/data/content.ts`에서 수정합니다.
계획 문서는 저장소 루트 `docs/portfolio-site-plan.md`를 참고하세요.
