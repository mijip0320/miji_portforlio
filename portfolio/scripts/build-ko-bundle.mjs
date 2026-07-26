import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

const root = path.resolve(import.meta.dirname, '..')
const contentPath = path.join(root, 'src/data/content.ts')
let source = fs.readFileSync(contentPath, 'utf8')

// Strip TypeScript-only syntax enough for a CJS eval
source = source
  .replace(/^export type[\s\S]*?^}\n/gm, '')
  .replace(/: FeaturedProject\[\]/g, '')
  .replace(/: SecondaryProject\[\]/g, '')
  .replace(/: OtherProject\[\]/g, '')
  .replace(/: Capability\[\]/g, '')
  .replace(/: Method\[\]/g, '')
  .replace(/ as const/g, '')
  .replace(/export const /g, 'exports.')

const module = { exports: {} }
const fn = new Function('exports', 'module', source + '\n')
fn(module.exports, module)
const c = module.exports

const ui = {
  metaDescription:
    '박미지 — 복잡한 사내 업무 시스템을 React·TypeScript로 이관·구조화하는 프론트엔드 개발자.',
  navAria: '주요 내비게이션',
  footerNavAria: '푸터 내비게이션',
  heroArtLabel: '추상적인 에디토리얼 히어로 비주얼',
  profileEyebrow: 'Profile',
  profileTitle: ['한눈에 보는', '프로필'],
  fitForLabel: 'Fit for',
  currentFocusLabel: 'Current focus',
  previousLabel: '이전',
  selectedWork: 'Selected work',
  impactLabel: 'Impact',
  roleLabel: 'Role',
  scopeLabel: 'Scope',
  yearLabel: 'Year',
  stackLabel: 'Stack',
  viewCase: '상세 케이스 보기 ↓',
  closeCase: '케이스 접기 ↑',
  caseOpen: 'Case open',
  problemLabel: 'Problem',
  outcomesLabel: 'Outcomes',
  learningLabel: 'Learning',
  moreWorkTitle: 'More work',
  moreWorkIntro:
    'Featured 외에도 권한형 게시판, 레거시 이관, 엑셀→웹 전환 등 비슷한 문제 유형의 프로젝트를 수행했습니다.',
  whatIDid: 'What I did',
  alsoLabel: 'Also',
  approachEyebrow: 'Approach',
  approachTitle: ['작품 뒤의', '작업 방식'],
  approachIntro:
    '기능을 구현하는 데 그치지 않고, 원인과 변경 영향을 파악한 뒤 확장·유지보수가 가능한 구조로 해결합니다.',
  coreCompetencies: 'Core competencies',
  educationLicense: 'Education / License',
  troubleshooting: 'Troubleshooting patterns',
  troubleshootingIntro:
    '여러 프로젝트에서 반복된 문제를 패턴으로 정리한 내용입니다. 비슷한 상황에서 어떻게 접근하는지를 보는 기준이 됩니다.',
  resultLabel: '결과',
  capabilitiesEyebrow: 'Capabilities',
  capabilitiesTitle: '어떤 문제를 맡길 수 있는 사람인지',
  capabilitiesHint: '항목을 클릭하면 상세 설명이 펼쳐집니다. Esc로 닫을 수 있습니다.',
  relatedExperience: '관련 경험',
  skillFrontend: 'Frontend',
  skillUi: 'UI / Styling',
  skillCollab: 'Collaboration',
  skillBackend: 'Backend 경험',
  contactEyebrow: 'Contact',
  contactTitle: ['이력서·경력기술서', '요청하기'],
  contactBody:
    '채용·협업 문의는 이메일로 주세요. 이력서와 경력기술서를 보내 드리며, 관심 포지션에 맞춰 관련 케이스(마이그레이션 / 권한 UI / DS)를 추가로 설명할 수 있습니다.',
  contactSubject: '포트폴리오 문의 — 이력서/경력기술서 요청',
}

const site = {
  name: c.site.name,
  nameKo: c.site.nameKo,
  email: c.site.email,
  role: c.site.role,
  years: c.site.years,
  location: c.site.location,
  education: c.site.education,
  educationPeriod: c.site.educationPeriod,
  license: c.site.license,
  languages: c.site.languages,
  positioning: c.site.positioningKo,
  summary: c.site.summary,
  fitFor: c.site.fitFor,
  highlights: c.site.highlights,
  experience: c.site.experience,
  previous: c.site.previous,
  skills: c.site.skills,
}

const bundle = {
  site,
  nav: c.nav.map(({ href, label }) => ({ href, label })),
  featured: c.featured,
  secondary: c.secondary,
  otherWork: c.otherWork,
  methods: c.methods,
  capabilities: c.capabilities,
  competencies: c.competencies,
  ui,
}

const outPath = path.join(root, 'src/i18n/content.ko.ts')
fs.writeFileSync(
  outPath,
  `import type { ContentBundle } from './types'\n\nexport const contentKo: ContentBundle = ${JSON.stringify(bundle, null, 2)}\n`,
)
console.log('wrote', outPath, 'keys', Object.keys(bundle))
