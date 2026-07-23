# miji_portforlio

박미지(Miji Park) 프론트엔드 포트폴리오 사이트 + Cursor 스킬 워크스페이스입니다.

다른 컴퓨터에서도 같은 스킬/계획으로 작업할 수 있도록 MengTo Skills와 포트폴리오 계획 문서를 함께 포함합니다.

## 구조

```text
miji_portforlio/
  Skills/                 # MengTo/Skills 스냅샷 (원본 clone 내용)
  .cursor/skills/         # Cursor가 읽는 스킬 심볼릭 링크 (상대 경로)
  docs/                   # 포트폴리오 계획·스펙
  scripts/link-skills.sh  # 스킬 링크 재생성
  AGENTS.md               # 에이전트 작업 규칙
```

## 다른 컴퓨터에서 시작

```bash
git clone https://github.com/mijip0320/miji_portforlio.git
cd miji_portforlio
./scripts/link-skills.sh   # 링크가 깨졌을 때만
```

Cursor에서 **이 폴더를 워크스페이스로 열기**.

## 포트폴리오 계획

- `docs/portfolio-site-plan.md`

## 스킬 업데이트 (선택)

upstream을 새로 받으려면:

```bash
rm -rf Skills
git clone --depth 1 https://github.com/MengTo/Skills.git Skills
./scripts/link-skills.sh
```

## Contact

- Email: mijip0320@gmail.com
