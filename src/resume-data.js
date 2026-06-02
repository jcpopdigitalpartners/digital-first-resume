export const profile = {
  name: 'JC PopDigital Partners',
  role: 'AI Workflow Builder | Healthcare Operations Systems | Digital Learning Products',
  summary:
    'Builds practical AI-enabled tools for healthcare access, prior authorization, learning simulations, and workflow design. The work emphasizes explainable decision paths, synthetic-data safety, fast prototyping, and deployable artifacts that stakeholders can actually use.',
  proofPoints: [
    'Ships static, auditable learning products on GitHub Pages.',
    'Turns ambiguous healthcare operations workflows into guided product experiences.',
    'Uses agent instructions, skills, and workflow templates to make AI builds repeatable.',
    'Designs with privacy boundaries first: synthetic patients, no PHI, and client-side demos where possible.',
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/jcpopdigitalpartners',
    },
  ],
}

export const resumeDocument = {
  title: 'Formal Resume',
  fileName: 'JC_CHOI_21052026.pdf',
  url: './content/JC_CHOI_21052026.pdf',
  summary:
    'Open the formal PDF resume directly in the page, then download or view it in a new tab when you want the print-ready version.',
}

export const deployedWork = [
  {
    name: 'Mental Model Lab',
    url: 'https://jcpopdigitalpartners.github.io/vue-app/',
    repo: 'https://github.com/jcpopdigitalpartners/vue-app',
    type: 'Interactive assessment app',
    focus: 'Clinical access operations, payer friction, accommodation workflows',
    impact:
      'Frames high-stakes healthcare operations as short scenario decisions so learners can rehearse judgment before real patients are affected.',
    stack: ['Vue', 'Vite', 'GitHub Pages', 'Client-side assessment logic'],
  },
  {
    name: 'Mock EHR AI Coach',
    url: 'https://jcpopdigitalpartners.github.io/mock-ehr-ai-coach/',
    repo: 'https://github.com/jcpopdigitalpartners/mock-ehr-ai-coach',
    type: 'Synthetic EHR training interface',
    focus: 'Prior authorization, chart review, medication access, audit-friendly coaching',
    impact:
      'Demonstrates how AI coaching can sit inside a synthetic EHR workflow while preserving a clear no-PHI learning boundary.',
    stack: ['React', 'Vite', 'Synthetic clinical data', 'GitHub Pages'],
  },
  {
    name: 'npm vs Tinder Risk',
    url: 'https://jcpopdigitalpartners.github.io/npm-vs-tinder-risk/',
    repo: 'https://github.com/jcpopdigitalpartners/npm-vs-tinder-risk',
    type: 'Security storytelling deck',
    focus: 'Software supply-chain risk, developer education, memorable risk framing',
    impact:
      'Uses a visual narrative to make dependency risk understandable for non-specialist audiences.',
    stack: ['Slidev', 'Vue', 'GitHub Pages'],
  },
]

export const capabilities = [
  {
    title: 'AI Product Prototyping',
    details:
      'Rapidly converts workflows into deployable demos, decision aids, and learning tools with scoped data boundaries.',
  },
  {
    title: 'Healthcare Workflow Design',
    details:
      'Models payer, patient access, chart review, documentation, appeal, and accommodation pathways as usable software flows.',
  },
  {
    title: 'Agent Operating Systems',
    details:
      'Creates custom instructions, agent skills, validation loops, and reusable workflows for repeatable AI-assisted delivery.',
  },
  {
    title: 'Digital Learning',
    details:
      'Builds scenario-based training products that surface learner mental models and operational risk.',
  },
]

export const adaptFramework = {
  name: 'ADAPT-to-MCP Builder',
  tagline:
    'A mini app that turns an ADAPT workflow brief into an MCP-style tool contract, skill file, custom GPT instructions, and delivery workflow.',
  stages: [
    {
      key: 'A',
      name: 'Assess',
      prompt: 'Clarify the domain, users, risk, and success criteria.',
    },
    {
      key: 'D',
      name: 'Decompose',
      prompt: 'Break the work into resources, decisions, tools, and guardrails.',
    },
    {
      key: 'A',
      name: 'Automate',
      prompt: 'Draft MCP-style tools, schemas, prompts, and repeatable agent skills.',
    },
    {
      key: 'P',
      name: 'Pilot',
      prompt: 'Run synthetic examples, validate outputs, and capture failure modes.',
    },
    {
      key: 'T',
      name: 'Transfer',
      prompt: 'Package the workflow into instructions, docs, and deployment steps.',
    },
  ],
  defaultInputs: {
    domain: 'Prior authorization readiness for specialty medication access',
    user: 'Access operations lead',
    dataSource: 'Synthetic chart summary, payer policy notes, and task status',
    decision: 'Is the case ready for submission, escalation, or documentation repair?',
    output: 'MCP server contract with tools for readiness scoring, evidence gaps, and appeal prep',
  },
}

export const artifactLinks = [
  {
    label: 'ADAPT MCP Builder Skill',
    href: './skills/adapt-mcp-builder.skill.md',
    description: 'Reusable agent skill for turning ADAPT briefs into MCP-style build plans.',
  },
  {
    label: 'Custom GPT Instructions',
    href: './custom-instructions/adapt-mcp-builder.md',
    description: 'Instruction set for a Custom GPT that facilitates the ADAPT-to-MCP workflow.',
  },
  {
    label: 'Workflow Template',
    href: './workflows/adapt-to-mcp.workflow.md',
    description: 'Step-by-step workflow for discovery, design, scaffold, validation, and packaging.',
  },
]
