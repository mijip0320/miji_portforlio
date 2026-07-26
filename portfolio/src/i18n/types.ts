export type Locale = 'ko' | 'en'

export type CaseSection = {
  label: string
  items: string[]
}

export type FeaturedProject = {
  id: string
  index: string
  title: string
  titleLines: string[]
  hook: string
  role: string
  year: string
  stack: string
  scope: string
  impact: string[]
  chapterClass: string
  mediaClass: string
  mediaLabel: string
  overview: string
  problem: string
  sections: CaseSection[]
  outcomes: string[]
  learning: string
}

export type SecondaryProject = {
  title: string
  year: string
  role: string
  stack: string
  note: string
  highlights: string[]
  outcomes: string[]
}

export type OtherProject = {
  title: string
  year: string
  note: string
}

export type Capability = {
  title: string
  description: string
  proof: string
  details: string[]
  related: { label: string; href: string }[]
}

export type Method = {
  title: string
  body: string
  detail: string
  result: string
}

export type Competency = {
  title: string
  body: string
}

export type NavItem = {
  href: string
  label: string
}

export type SiteContent = {
  name: string
  nameKo: string
  email: string
  role: string
  years: string
  location: string
  education: string
  educationPeriod: string
  license: string
  languages: string[]
  positioning: string
  summary: string[]
  fitFor: string[]
  highlights: { label: string; value: string; note: string }[]
  experience: {
    company: string
    role: string
    period: string
    body: string
  }
  previous: {
    company: string
    role: string
    period: string
    body: string
  }
  skills: {
    frontend: string[]
    ui: string[]
    tools: string[]
    backend: string[]
  }
}

export type UiCopy = {
  metaDescription: string
  navAria: string
  footerNavAria: string
  heroArtLabel: string
  profileEyebrow: string
  profileTitle: [string, string]
  fitForLabel: string
  currentFocusLabel: string
  previousLabel: string
  selectedWork: string
  impactLabel: string
  roleLabel: string
  scopeLabel: string
  yearLabel: string
  stackLabel: string
  viewCase: string
  closeCase: string
  closeEsc: string
  caseCollapsed: string
  caseOpen: string
  problemLabel: string
  outcomesLabel: string
  learningLabel: string
  moreWorkTitle: string
  moreWorkIntro: string
  whatIDid: string
  alsoLabel: string
  approachEyebrow: string
  approachTitle: [string, string]
  approachIntro: string
  coreCompetencies: string
  educationLicense: string
  troubleshooting: string
  troubleshootingIntro: string
  resultLabel: string
  capabilitiesEyebrow: string
  capabilitiesTitle: string
  capabilitiesHint: string
  relatedExperience: string
  skillFrontend: string
  skillUi: string
  skillCollab: string
  skillBackend: string
  contactEyebrow: string
  contactTitle: [string, string]
  contactBody: string
  contactSubject: string
}

export type ContentBundle = {
  site: SiteContent
  nav: NavItem[]
  featured: FeaturedProject[]
  secondary: SecondaryProject[]
  otherWork: OtherProject[]
  methods: Method[]
  capabilities: Capability[]
  competencies: Competency[]
  ui: UiCopy
}
