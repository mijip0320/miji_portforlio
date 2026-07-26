# miji_portforlio

프론트엔드 포트폴리오 사이트와 Cursor 스킬 워크스페이스입니다.

## 라이브

[https://mijip0320.github.io/miji_portforlio/](https://mijip0320.github.io/miji_portforlio/)

`main`에 push하면 GitHub Actions가 `portfolio/`를 빌드해 Pages에 배포합니다.

## 로컬 실행

```bash
cd portfolio
npm install
npm run dev
```

→ [http://localhost:5173](http://localhost:5173)

## 구조

```text
miji_portforlio/
  portfolio/              # Vite + React + Tailwind 포트폴리오 앱
  Skills/                 # MengTo/Skills 스냅샷
  .cursor/skills/         # Cursor가 읽는 스킬 심볼릭 링크
  docs/                   # 로컬 계획·스펙 (git 제외)
  scripts/link-skills.sh  # 스킬 링크 재생성
  AGENTS.md               # 에이전트 작업 규칙
```

## 다른 컴퓨터에서 시작

```bash
git clone https://github.com/mijip0320/miji_portforlio.git
cd miji_portforlio
./scripts/link-skills.sh   # 링크가 깨졌을 때만
cd portfolio && npm install && npm run dev
```

Cursor에서 **이 폴더를 워크스페이스로** 엽니다.

## 스킬 업데이트 (선택)

```bash
rm -rf Skills
git clone --depth 1 https://github.com/MengTo/Skills.git Skills
./scripts/link-skills.sh
```
