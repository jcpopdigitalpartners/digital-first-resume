import {
  adaptFramework,
  aiAbsorption,
  artifactLinks,
  capabilities,
  coverLetter,
  deployedWork,
  profile,
  resumeDocument,
} from './resume-data.js'

const byId = (id) => document.getElementById(id)

function renderProfile() {
  byId('profile').innerHTML = `
    <div class="hero-copy">
      <p class="eyebrow">Digital-first resume</p>
      <h1 id="profile-title">${profile.name}</h1>
      <p class="role">${profile.role}</p>
      <p class="summary">${profile.summary}</p>
      <div class="button-row">
        <a class="button button-primary" href="#resume">View Resume</a>
        <a class="button" href="${resumeDocument.url}" download="${resumeDocument.fileName}">Download PDF</a>
        ${profile.links
          .map(
            (link) =>
              `<a class="button" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`,
          )
          .join('')}
      </div>
    </div>
    <aside class="proof-card" aria-label="Resume proof points">
      <h2>What This Resume Proves</h2>
      <ul>
        ${profile.proofPoints.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </aside>
    <div class="hero-absorption" aria-label="AI feature absorption time">
      <p class="eyebrow">${aiAbsorption.eyebrow}</p>
      <p class="hero-absorption-time">${aiAbsorption.total}</p>
      <p>${aiAbsorption.summary}</p>
    </div>
  `
}

function renderResumeDocument() {
  byId('resume').innerHTML = `
    <div class="resume-panel">
      <div class="resume-intro">
        <p class="eyebrow">Formal resume</p>
        <h2 id="resume-title">${resumeDocument.title}</h2>
        <p>${resumeDocument.summary}</p>
        <div class="button-row">
          <a class="button button-primary" href="${resumeDocument.url}" target="_blank" rel="noopener">Open PDF</a>
          <a class="button" href="${resumeDocument.url}" download="${resumeDocument.fileName}">Download PDF</a>
        </div>
      </div>
      <div class="pdf-frame" aria-label="Embedded PDF resume preview">
        <object data="${resumeDocument.url}" type="application/pdf">
          <p>
            PDF preview is unavailable in this browser.
            <a href="${resumeDocument.url}" target="_blank" rel="noopener">Open the resume PDF</a>.
          </p>
        </object>
      </div>
    </div>
  `
}

function renderWork() {
  byId('work').innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Currently deployed work</p>
      <h2 id="work-title">Live GitHub Pages Portfolio</h2>
      <p>Each project below is already deployed and linked as working evidence, not a screenshot.</p>
    </div>
    <div class="project-grid">
      ${deployedWork
        .map(
          (project) => `
            <article class="project-card">
              <div>
                <p class="project-type">${project.type}</p>
                <h3>${project.name}</h3>
                <p>${project.impact}</p>
              </div>
              <dl>
                <dt>Focus</dt>
                <dd>${project.focus}</dd>
                <dt>Stack</dt>
                <dd>${project.stack.join(' · ')}</dd>
              </dl>
              <div class="link-row">
                <a href="${project.url}" target="_blank" rel="noopener">Open live app</a>
                <a href="${project.repo}" target="_blank" rel="noopener">View repo</a>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  `
}

function field(name, label, value, help) {
  return `
    <label class="field">
      <span>${label}</span>
      <textarea name="${name}" rows="2" aria-describedby="${name}-help">${value}</textarea>
      <small id="${name}-help">${help}</small>
    </label>
  `
}

function renderBuilder() {
  const defaults = adaptFramework.defaultInputs
  byId('builder').innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">AI build example</p>
      <h2 id="builder-title">${adaptFramework.name}</h2>
      <p>${adaptFramework.tagline}</p>
    </div>

    <div class="adapt-stages" aria-label="ADAPT framework stages">
      ${adaptFramework.stages
        .map(
          (stage) => `
            <article>
              <span>${stage.key}</span>
              <h3>${stage.name}</h3>
              <p>${stage.prompt}</p>
            </article>
          `,
        )
        .join('')}
    </div>

    <div class="builder-layout">
      <form class="builder-form" id="adapt-form">
        ${field('domain', 'Domain', defaults.domain, 'The operational area the server should support.')}
        ${field('user', 'Primary user', defaults.user, 'Who will call or rely on the workflow.')}
        ${field('dataSource', 'Data source', defaults.dataSource, 'Use synthetic or approved data sources for demos.')}
        ${field('decision', 'Decision to support', defaults.decision, 'The judgment the tools should make easier.')}
        ${field('output', 'Desired output', defaults.output, 'The artifact the agent should produce.')}
        <button class="button button-primary" type="submit">Generate MCP Build Brief</button>
      </form>

      <section class="builder-output" aria-live="polite">
        <div class="output-header">
          <h3>Generated Build Brief</h3>
          <button class="ghost-button" id="copy-brief" type="button">Copy brief</button>
        </div>
        <pre id="brief-output"></pre>
      </section>
    </div>
  `

  const form = byId('adapt-form')
  const copyButton = byId('copy-brief')
  const output = byId('brief-output')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    output.textContent = createBuildBrief(new FormData(form))
  })

  copyButton.addEventListener('click', async () => {
    await copyText(output.textContent)
    copyButton.textContent = 'Copied'
    window.setTimeout(() => {
      copyButton.textContent = 'Copy brief'
    }, 1500)
  })

  output.textContent = createBuildBrief(new FormData(form))
}

async function copyText(text) {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.append(textArea)
  textArea.select()
  document.execCommand('copy')
  textArea.remove()
}

function clean(value) {
  return String(value || '').trim()
}

function slug(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48)
}

function createBuildBrief(formData) {
  const domain = clean(formData.get('domain'))
  const user = clean(formData.get('user'))
  const dataSource = clean(formData.get('dataSource'))
  const decision = clean(formData.get('decision'))
  const output = clean(formData.get('output'))
  const serverName = `${slug(domain) || 'adapt-workflow'}-mcp`

  return `# ${serverName}

## ADAPT Summary
- Assess: ${user} needs support for "${decision}".
- Decompose: Inputs come from ${dataSource}.
- Automate: Provide MCP-style tools that turn workflow evidence into action.
- Pilot: Test with synthetic cases before connecting to live systems.
- Transfer: Package as a skill file, Custom GPT instructions, and deployment workflow.

## MCP-Style Server Contract
Server: ${serverName}
Purpose: ${output}

Tools:
1. assess_readiness
   Input: case_summary, policy_requirements, current_tasks
   Output: readiness_score, blockers, next_best_action
2. find_evidence_gaps
   Input: case_summary, required_evidence
   Output: missing_documents, stale_data, recommended_owner
3. draft_escalation_packet
   Input: blockers, clinical_context, payer_context
   Output: appeal_outline, peer_to_peer_notes, audit_trail

Resources:
- adapt://workflow/${slug(domain) || 'domain'}
- adapt://policy/requirements
- adapt://synthetic-cases/examples

Skill Trigger:
Use when the user asks to convert an ADAPT workflow into MCP tools, server scaffolds, agent instructions, or validation steps.

Custom GPT Behavior:
Ask for missing domain, user, data, decision, and output details. Refuse PHI. Prefer synthetic examples. Return tool schemas, workflow steps, validation cases, and deployment notes.

Workflow:
1. Intake workflow brief.
2. Map ADAPT stages.
3. Draft MCP tools and resources.
4. Generate skill and Custom GPT instructions.
5. Validate against synthetic cases.
6. Package for GitHub Pages documentation and server implementation.`
}

function renderSystems() {
  byId('systems').innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Operating model</p>
      <h2 id="systems-title">How the AI Builds Are Made Repeatable</h2>
    </div>
    <div class="capability-grid">
      ${capabilities
        .map(
          (capability) => `
            <article>
              <h3>${capability.title}</h3>
              <p>${capability.details}</p>
            </article>
          `,
        )
        .join('')}
    </div>
  `
}

function renderArtifacts() {
  byId('artifacts').innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Reusable AI artifacts</p>
      <h2 id="artifacts-title">Skills, Instructions, and Workflows</h2>
      <p>The mini app is backed by explicit operating artifacts so the AI build process can be inspected, reused, or extended.</p>
    </div>
    <div class="artifact-list">
      ${artifactLinks
        .map(
          (artifact) => `
            <a class="artifact-card" href="${artifact.href}">
              <span>${artifact.label}</span>
              <p>${artifact.description}</p>
            </a>
          `,
        )
        .join('')}
    </div>
  `
}

function renderCoverLetter() {
  byId('cover-letter').innerHTML = `
    <article class="cover-letter">
      <p class="eyebrow">${coverLetter.eyebrow}</p>
      <h2 id="cover-letter-title">${coverLetter.title}</h2>
      <p class="cover-letter-hero">${coverLetter.hero}</p>
      <div class="cover-letter-body">
        ${coverLetter.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      </div>
      <p class="cover-letter-signature">${coverLetter.signature}</p>
    </article>
  `
}

renderProfile()
renderResumeDocument()
renderWork()
renderBuilder()
renderSystems()
renderArtifacts()
renderCoverLetter()
