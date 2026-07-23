# Agent instructions

This workspace loads Meng To agent skills from `.cursor/skills/`.

## Rules

1. Before UI/web-design work, load the narrowest matching skill from `.cursor/skills/<name>/SKILL.md`.
2. Follow that skill’s workflow, defaults, and pitfalls. Prefer its snippets over inventing a new approach.
3. Keep `REFERENCES.md` as links-only context; keep long explanations in `ARTICLE.md` when present.
4. Demos live under each skill’s `demo/` folder — use them as reference implementations.
5. Do not edit files under `Skills/` unless the user asks to contribute upstream. Treat it as an upstream clone.

## Common entry points

- Landing / marketing pages → `landing-page`, then style skills as needed
- Spec-driven prompting → `design-first-ui-prompting`
- Motion → `gsap`, `animation-on-scroll`, `cinematic-gsap-lenis-motion-system`
- Tailwind implementation → `tailwindcss`
- Reference video → prompt → `video-to-superprompt`
