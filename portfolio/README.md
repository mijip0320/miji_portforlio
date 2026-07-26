# Portfolio

Vite + React + TypeScript + Tailwind 원페이지 포트폴리오입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

→ [http://localhost:5173](http://localhost:5173)

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 (`base` 경로 포함) |
| `npm run lint` | 린트 |

## 언어 (KO / EN)

헤더·푸터의 **KO / EN**으로 전환합니다.

- 한국(언어·타임존·IP 국가)이면 기본 `KO`, 그 외 `EN`
- 직접 고른 값은 `localStorage`에 저장되어 다음 방문에도 유지됩니다

## 콘텐츠 수정

| 파일 | 내용 |
|------|------|
| `src/i18n/content.ko.ts` | 국문 카피·프로젝트 |
| `src/i18n/content.en.ts` | 영문 카피·프로젝트 |
| `src/i18n/types.ts` | 콘텐츠 타입 |

## 배포

라이브: [https://mijip0320.github.io/miji_portforlio/](https://mijip0320.github.io/miji_portforlio/)

- `main` push 시 GitHub Actions가 이 폴더를 빌드해 Pages에 배포합니다
- GitHub Pages용 `base`는 `vite.config.ts`의 `/miji_portforlio/` 입니다
