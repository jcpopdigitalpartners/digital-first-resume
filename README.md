# Digital-First Resume

A static, GitHub Pages-ready resume and AI build portfolio.

## What It Includes

- Live links to deployed GitHub Pages work:
  - Mental Model Lab: <https://jcpopdigitalpartners.github.io/vue-app/>
  - Mock EHR AI Coach: <https://jcpopdigitalpartners.github.io/mock-ehr-ai-coach/>
  - npm vs Tinder Risk: <https://jcpopdigitalpartners.github.io/npm-vs-tinder-risk/>
- An embedded formal resume PDF at `content/JC_CHOI_21052026.pdf` with view and download actions.
- An interactive ADAPT-to-MCP Builder mini app.
- Reusable AI artifacts:
  - `skills/adapt-mcp-builder.skill.md`
  - `custom-instructions/adapt-mcp-builder.md`
  - `workflows/adapt-to-mcp.workflow.md`
- A GitHub Actions workflow for GitHub Pages deployment.

## Separation of Concerns

- `index.html`: document shell and section targets
- `src/resume-data.js`: resume content, project links, ADAPT model, artifact links
- `src/app.js`: rendering and mini app behavior
- `src/styles.css`: visual design and responsive layout
- `skills/`: agent skill files
- `custom-instructions/`: Custom GPT instruction sets
- `workflows/`: repeatable workflow playbooks

## Local Preview

Use any static file server from this folder. For example:

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploy to GitHub Pages

1. Create a GitHub repository named `digital-first-resume`.
2. Push this folder to the repository's `main` branch.
3. In GitHub, enable Pages with the source set to GitHub Actions.
4. The included workflow deploys the static site.

Expected URL:

```text
https://jcpopdigitalpartners.github.io/digital-first-resume/
```
