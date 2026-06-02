# Workflow: ADAPT Brief to MCP-Style Server

## 1. Intake

Capture:

- Domain
- Primary user
- Data sources
- Decision to support
- Desired output
- Risk boundaries

## 2. ADAPT Map

- Assess the operational problem and success criteria.
- Decompose the workflow into resources, tools, decisions, and guardrails.
- Automate the repeatable steps with tool contracts and prompts.
- Pilot with synthetic examples and validation checks.
- Transfer the package into instructions, docs, and deployable artifacts.

## 3. Server Contract

Draft:

- Server name and purpose
- Tool list
- Tool inputs and outputs
- Resources
- Prompt templates
- Error states and escalation paths

## 4. Validation

Run at least three synthetic cases:

- Happy path
- Missing evidence
- Escalation or exception path

For each case, verify:

- No PHI appears in inputs or outputs
- Tool outputs are actionable
- The next-best action is auditable
- The workflow can fail safely

## 5. Package

Deliver:

- MCP-style build brief
- `.skill` file
- Custom GPT instructions
- Workflow documentation
- Deployment or implementation notes
