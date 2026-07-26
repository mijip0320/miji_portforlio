import type { ContentBundle } from './types'

export const contentEn: ContentBundle = {
  site: {
    name: 'Miji Park',
    nameKo: '박미지',
    email: 'devmail1012@gmail.com',
    role: 'Frontend Developer',
    years: '5yrs',
    location: 'Seoul, South Korea',
    education: "Sungshin Women's University, School of IT",
    educationPeriod: '2016.03 – 2021.02',
    license: 'Engineer Information Processing',
    languages: ['Korean', 'English'],
    positioning:
      'Frontend for complex internal systems — migration, permissions, and feedback-driven UX.',
    summary: [
      'Analyzed ASP.NET, ASP, Angular, and Vue legacy systems and migrated screens and functionality to a React codebase while preserving existing APIs and user workflows.',
      'Improved workflows such as role-based views, search filters, and assignee selection based on field feedback, with a strength in abstracting recurring permission checks, user selection, tables, boards, and form logic into shared components and hooks.',
      'Beyond shipping features, I prioritize understanding root causes and change impact, then solving for structures that remain maintainable and extensible as requirements evolve.',
    ],
    fitFor: [
      'Teams needing legacy → React·TypeScript migration',
      'B2B / internal systems with complex permissions, states, and workflows',
      'Products that need list·filter·form patterns standardized into shared structures',
      'Environments gradually standardizing design systems and shared components',
    ],
    highlights: [
      {
        label: 'Experience',
        value: '5 years',
        note: 'Fasoo Frontend · 2021.05–Present',
      },
      {
        label: 'Core',
        value: 'React · TS',
        note: 'Migration + business UI',
      },
      {
        label: 'Strength',
        value: 'Permissions·Workflow',
        note: 'Structured by allowed actions',
      },
      {
        label: 'Approach',
        value: 'Feedback-driven',
        note: 'Filters·assignees·navigation context',
      },
    ],
    experience: {
      company: 'Fasoo',
      role: 'Frontend Developer',
      period: '2021.05 – Present',
      body: 'Owned frontend for a range of internal business systems and product lines—including customer management, incident support, sales management, e-approval, leave, newsletter, and document management. Built new features in React·TypeScript and migrated legacy ASP.NET, ASP, Angular, and Vue screens into React structures.',
    },
    previous: {
      company: 'Innogrid',
      role: 'R&D project support',
      period: '2020.12 – 2021.03',
      body: 'Supported business plan and presentation materials for R&D projects and studied Docker and Kubernetes infrastructure concepts.',
    },
    skills: {
      frontend: [
        'React',
        'TypeScript',
        'JavaScript',
        'Next.js',
        'Vite',
        'Redux',
        'Recoil',
        'TanStack Query',
        'TanStack Table',
      ],
      ui: [
        'Chakra UI',
        'Tailwind CSS',
        'styled-components',
        'Sass',
        'Material UI',
        'Storybook',
        'Recharts',
      ],
      tools: ['Git', 'Figma', 'Cursor AI', 'ChatGPT'],
      backend: ['Node.js', 'ASP.NET', 'C#', 'MSSQL'],
    },
  },
  nav: [
    { href: '#profile', label: 'Profile' },
    { href: '#work', label: 'Work' },
    { href: '#approach', label: 'Approach' },
    { href: '#contact', label: 'Contact' },
  ],
  featured: [
    {
      id: 'customer',
      index: '01 / 04',
      title: 'Customer Management System Redesign',
      titleLines: ['Customer Management', 'System Redesign'],
      hook: 'Redesigned filter and assignee flows from user feedback',
      role: 'Frontend · Migration / Feature',
      year: '2025.07 – 2026.05',
      stack: 'React, TypeScript, TanStack Query/Table, Chakra UI, Storybook, Cursor AI',
      scope:
        'Key screen design and implementation, incident support CRUD, reservation calendar, role-based UI, org-chart selection logic improvements',
      impact: [
        'Unified CS inquiries, support reservations, assignee selection, and status management into one flow',
        'Expanded table browsing area with a detailed filter popup',
        'Extended from single assignee to multi-select assignee, recipient, and CC',
      ],
      chapterClass: 'bg-chapter-1 text-ink',
      mediaClass:
        'bg-[linear-gradient(145deg,#5c6b7a_0%,#a8b4c0_42%,#2f3a45_100%)]',
      mediaLabel: 'Abstract blue-gray panel representing customer management UI',
      overview:
        'Redesigned the existing system on React so the CS team could manage customer inquiries, incident support status, support reservations, assignee routing, and related history in one place. After launch, I incorporated real user feedback to further improve filter UX, role-based views, and assignee selection.',
      problem:
        'Customer, incident, support history, reservation, and assignee data were tightly linked, and view/edit scope varied by role and department—so one screen carried too much information and too many rules. After the redesign, growing search criteria narrowed the table, and limiting assignees to one person did not match how CS teams actually collaborate.',
      sections: [
        {
          label: 'Problem & approach',
          items: [
            'Split business information into meaningful units—customer, support history, related incidents—and used tabs and status indicators to manage information density.',
            'Separated the default query area from a detailed filter popup instead of always exposing filters, so list browsing stayed usable even as criteria grew.',
            'Moved from a single-assignee model to multi-select assignee, recipient, and CC, and redesigned related state and API data mapping.',
            'Rather than building each role-specific user picker separately, used a shared selection structure with role-specific rules isolated on top.',
          ],
        },
        {
          label: 'Key contributions',
          items: [
            'Implemented incident support create, read, update, delete, and support status management screens.',
            'Provided support reservations on a calendar and surfaced primary/secondary assignees and related incident status on screen.',
            'Separated viewable/editable data and actions by user role and department.',
            'Extended org-chart selection so assignees, recipients, and CC could be auto-added or assigned at group level.',
            'Updated state management and request payload mapping when moving from single-user to multi-user selection.',
          ],
        },
      ],
      outcomes: [
        'Improved the CS workflow so teams could move from inquiry intake through support reservation, assignee routing, and status management in one system.',
        'Made it faster for assignees to find the customer and support information they need through detailed filter separation and information architecture changes.',
        'Treated field feedback not as one-off UI change requests but as signals about which workflow context users lose—and improved the query flow itself.',
      ],
      learning:
        'For role-different user selection, a shared selection structure with role-specific rules separated out was more effective at reducing complexity than implementing each variant independently.',
    },
    {
      id: 'consent',
      index: '02 / 04',
      title: 'Marketing Consent Management Redesign',
      titleLines: ['Marketing Consent', 'Management Redesign'],
      hook: 'In progress — unified view of customer and consent data',
      role: 'Frontend · Migration',
      year: '2026.06 – Present',
      stack: 'React, TypeScript, TanStack Query/Table, Tailwind CSS, Storybook, Cursor AI',
      scope:
        'Legacy analysis and React migration, customer data integration, search·filter UI, API type definitions',
      impact: [
        'View customer info and marketing consent history on one screen',
        'Simplify audience selection with collection-path and condition-combination search',
        'Reuse existing customer data for marketing without duplicate storage',
      ],
      chapterClass: 'bg-chapter-2 text-ink',
      mediaClass:
        'bg-[linear-gradient(155deg,#6f648f_0%,#c4bbd9_48%,#3d3554_100%)]',
      mediaLabel: 'Abstract lavender panel representing consent data flow',
      overview:
        'Migrating the existing Vue·Node.js system to React so marketing teams can centrally manage customer consent collected across events, seminars, and other channels, and efficiently query and use audiences for promotional email and SMS campaigns.',
      problem:
        'The legacy screen combined event-collected marketing consent with internal customer-management data, so a simple UI swap would not scale for maintenance or future expansion. Collection paths and query criteria were likely to keep growing, so a reusable list and search structure was needed from the start.',
      sections: [
        {
          label: 'Problem & approach',
          items: [
            'Analyzed legacy query criteria, API request/response shapes, and how customer records were linked—feature by feature.',
            'Redefined screens and types for a React·TypeScript structure and documented conversion rules between legacy and UI data.',
            'Split search criteria, tables, and status UI into reusable components to prepare for future condition additions.',
            'Used Cursor AI for API call and type drafts, then validated against real data structures, requirements, and edge cases such as null and empty values.',
          ],
        },
        {
          label: 'Key contributions',
          items: [
            'Linked internal customer-management data with marketing consent so basic info, consent status, collection path, and related history could be viewed together.',
            'Built list screens to search and filter target customers by collection path (events, seminars, etc.) and combined criteria.',
            'Structured server state, query criteria, sorting, filters, and pagination with TanStack Query·Table.',
            'Defined API request/response types and documented legacy-to-UI data conversion rules to a reference level.',
          ],
        },
      ],
      outcomes: [
        'Simplifying audience selection by viewing customer information and marketing consent history on one screen.',
        'Building a screen structure that lets marketing reuse existing customer data without duplicate storage.',
        'Applying a migration approach that prioritizes workflow and data dependencies over copying screens as-is.',
      ],
      learning:
        'In legacy migration, organizing user workflow and data dependencies first makes later change easier than replicating the UI.',
    },
    {
      id: 'approval',
      index: '03 / 04',
      title: 'Internal E-Approval System',
      titleLines: ['Internal', 'E-Approval'],
      hook: 'Structured state·role combinations as allowed actions',
      role: 'Frontend · Feature',
      year: '2024.11 – 2024.12',
      stack: 'Next.js, TypeScript, TanStack Query, Chakra UI, styled-components',
      scope: 'Submission and approval flows, auto-routing for approval lines and CC, search·filter UI',
      impact: [
        'Built submit→approve·reject·final-approve·cancel·resubmit flow on the web',
        'Reduced risk of rule gaps by exposing only actions valid in the current state',
        'Reduced repetitive input through auto-assigned approval lines and CC',
      ],
      chapterClass: 'bg-chapter-3 text-ink',
      mediaClass:
        'bg-[linear-gradient(150deg,#5f6d3f_0%,#c2d08a_46%,#2f3520_100%)]',
      mediaLabel: 'Abstract olive panel representing approval state flow',
      overview:
        'Redesigned an e-approval system where employees submit various form types and approvers handle approve, reject, final approval, cancel, and resubmit actions.',
      problem:
        'Business rules were complex: available actions depended on document state, user role, and approval order, and those rules had to appear consistently on screen. Scattering conditions across screens made policy changes easy to miss.',
      sections: [
        {
          label: 'Problem & approach',
          items: [
            'Separated approval-state actions from user selection and data mapping.',
            'Configured screens to show only actions valid in the current state.',
            'Defined state transitions and allowed actions first to simplify implementation and verification scope.',
          ],
        },
        {
          label: 'Key contributions',
          items: [
            'Implemented compose screens to register and submit various approval form types.',
            'Reflected state-specific actions—approve, reject, final approval, cancel approval, resubmit—in the UI flow.',
            'Implemented user selection and data mapping so approval lines and CC were auto-assigned.',
            'Built search and filter for approval lists.',
          ],
        },
      ],
      outcomes: [
        'Enabled the full approval flow from submission through approve·reject·resubmit on the web.',
        'Automated repetitive approval-line and CC input to reduce user burden.',
        'Reused the pattern of defining allowed actions first for later permission-heavy screens.',
      ],
      learning:
        'In complex state-driven UI, defining state transitions and allowed actions upfront simplifies implementation and verification more than handling every condition per screen.',
    },
    {
      id: 'design-system',
      index: '04 / 04',
      title: 'Shared Components / DS',
      titleLines: ['Shared Components', '/ DS'],
      hook: 'Gradual shift from Chakra → Tailwind·shadcn',
      role: 'Frontend · Design System',
      year: '2024.05 – Present',
      stack: 'React, TypeScript, Tailwind CSS, shadcn/ui, Chakra UI, styled-components, Storybook',
      scope:
        'Stack migration evaluation, design token and shared component design, reusable components·hooks, Storybook documentation',
      impact: [
        'Reorganized scattered theme·style into shared design tokens',
        'Migrated new components first to Tailwind·shadcn structure',
        'Documented usage, variants, and exception rules in Storybook Docs',
      ],
      chapterClass: 'bg-chapter-4 text-ink',
      mediaClass:
        'bg-[linear-gradient(148deg,#8a7355_0%,#f0e2c8_50%,#4a3c2c_100%)]',
      mediaLabel: 'Abstract warm paper panel representing design system tokens',
      overview:
        'Building a design-system-based shared component library so UI reused across internal projects can follow consistent standards. Started with styled-components and Chakra UI; now gradually moving to Tailwind CSS and shadcn/ui.',
      problem:
        'In the previous setup, internal design-system colors, spacing, and state styles had to be overridden per component, and discontinued or incompatible dependencies increased React upgrade and shared-library maintenance cost.',
      sections: [
        {
          label: 'Problem & approach',
          items: [
            'Chose Tailwind·shadcn/ui over fitting into a full UI library’s defaults so design tokens and component source could be controlled directly for internal DS needs.',
            'Set migration priority by usage frequency and impact instead of replacing all components at once.',
            'Applied the new structure to new components first and planned gradual migration with compatibility for existing screens.',
          ],
        },
        {
          label: 'Key contributions',
          items: [
            'Analyzed colors, typography, spacing, and state styles scattered across Chakra UI theme.ts and styled-components, and reorganized them into shared design tokens.',
            'Defined semantic colors and style standards for the internal design system via Tailwind config and CSS variables.',
            'Adapted shadcn/ui source to internal UI policy and designed shared components extensible through props and variants.',
            'Documented usage, variants, and exception-handling rules for reusable components and custom hooks in Storybook Docs.',
          ],
        },
      ],
      outcomes: [
        'Laid groundwork to reduce repeated style overrides and project-to-project implementation drift when applying the internal design system.',
        'Moved toward directly owning component source and design tokens so new requirements and library version changes are easier to handle.',
        'Gained experience treating stack migration as designing existing usage, compatibility, and migration order—not just adopting a new library.',
      ],
      learning:
        'Stack migration goes more smoothly when existing usage, compatibility, and migration order are designed together—not when a new library is introduced in isolation.',
    },
  ],
  secondary: [
    {
      title: 'Product Improvement Management System Redesign',
      year: '2026.04 – 05',
      role: 'Legacy screen analysis, React migration, board CRUD, role-based UI, API integration·type definitions',
      stack: 'React, TypeScript, TanStack Query/Table, Chakra UI, Storybook, Cursor AI',
      note: 'Migrated to React an improvement-request system where employees submit product and internal system feedback and owners track status and responses.',
      highlights: [
        'Restructured registration, attachments, visibility, status, and permission actions tangled in ASP.NET screens into request submission, review, status change, and feedback flows',
        'Role-based UI separating viewable information and status-change scope by department head and specific permissions',
        'Reflected allowed actions on screen by public/private visibility and progress status',
        'Migrated 5 screens to React with roughly 15–20 API integrations and type definitions',
      ],
      outcomes: [
        'Enabled tracking from improvement request submission through owner feedback within the system.',
        'Confirmed that defining allowed actions first reduces change scope on screens with combined permissions and states.',
      ],
    },
    {
      title: 'Internal AI Sharing Board',
      year: '2026.01 – 02',
      role: 'New board development, permission-based approval flow, legacy migration, shared UI design',
      stack: 'React, TypeScript, TanStack Query/Table, Chakra UI, styled-components, Storybook',
      note: 'Built a knowledge-sharing board where employees post AI tool use cases and learning content, and authorized reviewers publish approved posts company-wide.',
      highlights: [
        'Reflected rules where allowed actions and visibility differ by author, reviewer, and company-wide user',
        'Separated shared board structure from board-specific approval and visibility rules',
        'Built approval flow from review complete to company-wide share after approval',
        'Preserved search filters and pagination when returning from detail to list',
      ],
      outcomes: [
        'Established an internal knowledge flow where AI use cases are reviewed before company-wide sharing instead of staying personal.',
        'Learned that treating list and detail as one navigation journey—not separate pages—improves usability.',
      ],
    },
    {
      title: 'US Entity Leave System',
      year: '2024.07 – 10',
      role: 'Excel-based process analysis, leave request·approval screens, shared component adoption',
      stack: 'React, TypeScript, styled-components, Storybook',
      note: 'Moved the US entity’s Excel-managed leave and PTO request and approval process to a web system.',
      highlights: [
        'Analyzed existing Excel fields and approval flow and structured applicant and admin screens',
        'Implemented leave and PTO requests, approval status views, and admin functions',
        'Applied Storybook-based shared components to input forms, buttons, and lists',
      ],
      outcomes: [
        'Moved a manually managed request·approval process into a system where status could be tracked end to end.',
        'Learned that when systemizing an existing tool, mapping real workflow steps and edge cases matters more than copying screens.',
      ],
    },
  ],
  otherWork: [
    {
      title: 'Internal Schedule Sharing System',
      year: '2026.03',
      note: 'Provided schedules and improvement suggestions as boards and cards, with role-based edit·delete and approve·reject flows',
    },
    {
      title: 'Sales Management Site — Additional Development',
      year: '2025.11 – 12',
      note: 'Customer project support schedule calendar; improved token expiry check, reissue, and login redirect flow',
    },
    {
      title: 'Marketing DTO Management System',
      year: '2025.04 – 06',
      note: 'Visualized product·channel marketing data in tables and charts; role-based data management and admin baseline settings',
    },
    {
      title: 'Sales Management System Redesign',
      year: '2025.01 – 03',
      note: 'Unified customers, projects, assignees, and support history in web and app WebView with condition-based UI',
    },
    {
      title: 'Internal Main Page Redesign',
      year: '2024.06 – Present',
      note: 'Migrated ASP-based main page to React component structure and applied Storybook shared components',
    },
    {
      title: 'Newsletter Delivery System',
      year: '2024.05 – 06',
      note: 'Sender, recipient, and attachment input with automatic exclusion filtering logic',
    },
    {
      title: 'Internal Task Registration — Responsive Page',
      year: '2024.01 – 04',
      note: 'Responsive screens to register and view customer-related tasks on mobile, with reusable input components',
    },
    {
      title: 'Document Management — Wrapsody',
      year: '2022.01 – 2023.12',
      note: 'Partial Angular-to-React redesign; admin and document search, filters, sharing, preview, history, recovery, and multilingual UI',
    },
    {
      title: 'Wrapsody eCo',
      year: '2023.07 – 09',
      note: 'External collaboration platform — admin logo settings and user-facing display implementation',
    },
    {
      title: 'Internal Module Management Website',
      year: '2021.05 – 12',
      note: 'JavaScript, ASP.NET, C#, MSSQL — module CRUD, file attachments, per-customer install and usage log management',
    },
  ],
  methods: [
    {
      title: 'Permissions·State → Allowed Actions',
      body: 'Instead of scattering view·edit·approve actions that vary by role, department, visibility, and workflow state across the UI, I organize by allowed actions first.',
      detail:
        'Extracted recurring permission checks from customer management, improvement requests, and e-approval into shared functions and hooks, with components rendering actions based on the result.',
      result:
        'Reduced the scope of changes when permission policy shifts and kept the same approach consistent across screens.',
    },
    {
      title: 'Org-Chart Selection Shared Pattern',
      body: 'For multi-select with different roles—assignee, recipient, CC—I split a common data structure and role-specific rules instead of building separate pickers per screen.',
      detail:
        'Managed selected users in shared state, isolated role-specific add·remove·duplicate and single/multi rules, and centralized API request mapping.',
      result:
        'When new roles or selection rules were added, extended the shared structure and role rules without rewriting entire screens.',
    },
    {
      title: 'Navigation Context Restoration',
      body: 'I treat query state as part of the browsing journey so filters and page position are not reset when returning from detail to list.',
      detail:
        'Managed search criteria and pagination separately from list query state and included actual query conditions in TanStack Query query keys to distinguish cache and requests per condition.',
      result:
        'Improved usability by letting users continue the previous list context after reviewing detail.',
    },
    {
      title: 'AI for Drafts, Developer for Verification',
      body: 'I use AI to accelerate legacy analysis, type drafts, and repetitive code, while personally verifying requirements, type safety, edge cases, and sensitive-data exposure.',
      detail:
        'Used ChatGPT and Cursor to speed analysis and drafts, but treated output as assistance—not truth—with verification owned by the developer.',
      result:
        'Reduced repetitive implementation cost while improving consistency in components and type definitions.',
    },
  ],
  capabilities: [
    {
      title: 'Legacy → React Migration',
      description:
        'Analyze ASP.NET, ASP, Angular, and Vue screen structure and API flow, then move to React·TypeScript components while preserving existing workflows.',
      proof: 'Marketing consent management, product improvement management, AI board, main page, partial Wrapsody screens',
      details: [
        'Analyze legacy query criteria, API request/response, and screen linkage feature by feature, then redefine as React components and types.',
        'Prioritize workflow and data dependencies over copying screens to prepare for future expansion.',
        'Experienced both frontend-only migration on existing APIs and moves to separated frontend·backend structures.',
      ],
      related: [
        { label: 'Marketing consent management', href: '#consent' },
        { label: 'Customer management system', href: '#customer' },
        { label: 'E-approval', href: '#approval' },
      ],
    },
    {
      title: 'Permission & Workflow UI',
      description:
        'Structure view·edit·approve actions that vary by user role, department, visibility, and workflow state around allowed actions.',
      proof: 'E-approval, customer management, product improvement management, AI sharing board approval flow',
      details: [
        'Extract permission checks from UI conditionals into shared functions and hooks; screens render the result only.',
        'Define state transitions and allowed actions first to reduce omission risk when policy changes.',
        'Applied the “show only actions valid now” pattern even in high-state flows such as approve·reject·final approve·resubmit.',
      ],
      related: [
        { label: 'E-approval', href: '#approval' },
        { label: 'Customer management system', href: '#customer' },
        { label: 'Approach methodology', href: '#approach' },
      ],
    },
    {
      title: 'Data-heavy Tables & Filters',
      description:
        'Build lists, search, filters, pagination, detail views, and calendar·dashboard UI with TanStack Query·Table.',
      proof: 'Customer management filter popup, marketing consent list, marketing DTO tables and charts',
      details: [
        'Experience separating default query from detailed filters so table browsing stays usable as criteria grow.',
        'Include actual query conditions in query keys to distinguish cache and requests, and preserve list context on return from detail.',
        'Align list·sort·filter·pagination with server state using TanStack Query/Table.',
      ],
      related: [
        { label: 'Customer management system', href: '#customer' },
        { label: 'Marketing consent management', href: '#consent' },
      ],
    },
    {
      title: 'Design System & Shared Components',
      description:
        'Abstract boards, tables, org-chart selection, permission hooks, and shared forms; migrate gradually from Chakra to Tailwind·shadcn; document in Storybook.',
      proof: 'Shared component library, Storybook Docs, design token consolidation',
      details: [
        'Reorganize scattered theme/styled styles into semantic tokens aligned via CSS variables and Tailwind config.',
        'Set migration priority by usage frequency and impact; move new components first instead of replacing everything at once.',
        'Document usage, variants, and exception rules for reusable components and hooks in Storybook Docs.',
      ],
      related: [
        { label: 'Shared components / DS', href: '#design-system' },
        { label: 'Approach', href: '#approach' },
      ],
    },
    {
      title: 'AI-assisted Delivery',
      description:
        'Use Cursor and ChatGPT to assist legacy analysis and type·repetitive code drafts; developer verifies requirements, type safety, and edge cases before applying.',
      proof: 'Migration and API type draft acceleration with verification ownership separated',
      details: [
        'Use AI as a speed tool for analysis and drafts; developer owns verification before final application.',
        'Check null/empty values, render structure, and sensitive-data exposure risk like a checklist before shipping.',
        'After drafts, refactor recurring board, table, form, and permission patterns back into components and hooks.',
      ],
      related: [
        { label: 'Marketing consent management', href: '#consent' },
        { label: 'Approach · AI verification', href: '#approach' },
      ],
    },
  ],
  competencies: [
    {
      title: 'Feedback-driven product improvement',
      body: 'Analyze friction reported in real use and improve workflow—filter UX, role-based views, assignee selection structure, and more.',
    },
    {
      title: 'Structuring complex business rules',
      body: 'Reflect actions that vary by role, department, visibility, and state in UI and data flow.',
    },
    {
      title: 'Legacy-to-React migration',
      body: 'Analyze ASP.NET, ASP, Angular, and Vue screen structure and API flow and move to React·TypeScript components.',
    },
    {
      title: 'Abstraction and reuse for recurring problems',
      body: 'Separate boards, tables, search criteria, permission checks, org-chart selection, and shared forms into components and custom hooks.',
    },
    {
      title: 'Data-centric UI development',
      body: 'Build lists, search, filters, pagination, detail views, calendars, and dashboard UI with TanStack Query·Table.',
    },
  ],
  ui: {
    metaDescription:
      'Miji Park — Frontend developer who migrates and structures complex internal systems with React and TypeScript.',
    navAria: 'Primary navigation',
    footerNavAria: 'Footer navigation',
    heroArtLabel: 'Abstract editorial hero visual',
    profileEyebrow: 'Profile',
    profileTitle: ['Profile', 'at a glance'],
    fitForLabel: 'Fit for',
    currentFocusLabel: 'Current focus',
    previousLabel: 'Previous',
    selectedWork: 'Selected work',
    impactLabel: 'Impact',
    roleLabel: 'Role',
    scopeLabel: 'Scope',
    yearLabel: 'Year',
    stackLabel: 'Stack',
    viewCase: 'View case ↓',
    closeCase: 'Close case ↑',
    closeEsc: 'Close · Esc',
    caseCollapsed: 'case (collapsed)',
    caseOpen: 'Case open',
    problemLabel: 'Problem',
    outcomesLabel: 'Outcomes',
    learningLabel: 'Learning',
    moreWorkTitle: 'More work',
    moreWorkIntro:
      'Beyond featured work, I have shipped permissioned boards, legacy migrations, and Excel-to-web transitions of a similar problem type.',
    whatIDid: 'What I did',
    alsoLabel: 'Also',
    approachEyebrow: 'Approach',
    approachTitle: ['How I work', 'behind the projects'],
    approachIntro:
      'I go beyond implementing features—I diagnose root causes and change impact, then solve for structures that stay maintainable and extensible.',
    coreCompetencies: 'Core competencies',
    educationLicense: 'Education / License',
    troubleshooting: 'Troubleshooting patterns',
    troubleshootingIntro:
      'Patterns distilled from recurring problems across projects—useful for seeing how I approach similar situations.',
    resultLabel: 'Result',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'What kinds of problems I can own',
    capabilitiesHint: 'Click an item to expand details. Press Esc to close.',
    relatedExperience: 'Related experience',
    skillFrontend: 'Frontend',
    skillUi: 'UI / Styling',
    skillCollab: 'Collaboration',
    skillBackend: 'Backend experience',
    contactEyebrow: 'Contact',
    contactTitle: ['Request resume', '& career brief'],
    contactBody:
      'For hiring or collaboration, email me. I can send my resume and career brief, and walk through relevant cases (migration / permission UI / design system) for the role.',
    contactSubject: 'Portfolio inquiry — resume / career brief request',
  },
}
