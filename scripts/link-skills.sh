#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS_SRC="$ROOT/Skills/agent-skills"
DEST="$ROOT/.cursor/skills"

mkdir -p "$DEST"

# clear old links only (keep directory)
find "$DEST" -maxdepth 1 -type l -delete

duplicates=0
while IFS= read -r skill_md; do
  skill_dir="$(dirname "$skill_md")"
  skill_name="$(basename "$skill_dir")"
  target="$DEST/$skill_name"
  if [[ -e "$target" || -L "$target" ]]; then
    category="$(basename "$(dirname "$skill_dir")")"
    target="$DEST/${category}-${skill_name}"
    duplicates=$((duplicates + 1))
  fi
  # relative symlink so the repo works on other machines
  rel_target="$(python3 -c 'import os,sys; print(os.path.relpath(sys.argv[1], sys.argv[2]))' "$skill_dir" "$DEST")"
  ln -sfn "$rel_target" "$target"
done < <(find "$SKILLS_SRC" -name SKILL.md | sort)

count="$(find "$DEST" -maxdepth 1 -type l | wc -l | tr -d ' ')"
echo "Linked $count skills into .cursor/skills (collision renames: $duplicates)"
