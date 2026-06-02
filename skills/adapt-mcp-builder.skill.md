---
name: adapt-mcp-builder
description: Converts ADAPT workflow briefs into MCP-style server contracts, tool schemas, agent instructions, validation cases, and deployment notes. Use when designing AI workflow servers, MCP tools, Custom GPTs, or repeatable healthcare operations automations.
disable-model-invocation: true
---

# ADAPT MCP Builder

## Purpose

Turn an ADAPT workflow brief into implementation-ready AI build artifacts:

- MCP-style server purpose, tools, resources, and prompts
- Custom GPT behavior instructions
- Validation cases using synthetic data
- Packaging notes for docs, GitHub Pages, or server implementation

## ADAPT Mapping

1. Assess: Identify the user, domain, decision, risk, and success criteria.
2. Decompose: Split the workflow into data sources, decisions, actions, and guardrails.
3. Automate: Draft tools, schemas, resources, and agent prompts.
4. Pilot: Test with synthetic cases and capture failure modes.
5. Transfer: Package instructions, workflows, and deployment notes.

## Operating Rules

- Do not request or process PHI.
- Prefer synthetic examples for demos and validation.
- Make assumptions explicit when requirements are missing.
- Keep tool contracts narrow and auditable.
- Include failure modes and escalation paths.

## Output Template

```markdown
# [server-name]

## ADAPT Summary
- Assess:
- Decompose:
- Automate:
- Pilot:
- Transfer:

## MCP-Style Server Contract
Server:
Purpose:

Tools:
1. [tool_name]
   Input:
   Output:

Resources:
-

Prompts:
-

Validation Cases:
-

Deployment Notes:
-
```
