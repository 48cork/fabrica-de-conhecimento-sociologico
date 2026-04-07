# Workflow: Spec Pipeline

## Overview
Transform informal requirements into an executable spec before implementation.
Use when a feature is complex or ambiguous enough to warrant formal specification.

## Phases

| Phase | Agent | Output | Skip If |
|-------|-------|--------|---------|
| 1. Gather | @pm (Morgan) | `requirements.json` | Never |
| 2. Assess | @architect (Aria) | `complexity.json` | source=simple |
| 3. Research | @analyst | `research.json` | SIMPLE class |
| 4. Write Spec | @pm (Morgan) | `spec.md` | Never |
| 5. Critique | @qa | `critique.json` | Never |
| 6. Plan | @architect (Aria) | `implementation.yaml` | If APPROVED |

## Complexity Classes

| Score | Class | Phases Run |
|-------|-------|-----------|
| <= 8 | SIMPLE | 1 → 4 → 5 (3 phases) |
| 9-15 | STANDARD | All 6 phases |
| >= 16 | COMPLEX | 6 phases + revision cycle |

## 5 Complexity Dimensions (scored 1–5 each)
1. **Scope** — Files/modules affected
2. **Integration** — External APIs or services
3. **Infrastructure** — Changes to infra needed
4. **Knowledge** — Team familiarity with domain
5. **Risk** — Criticality level

## Critique Verdicts

| Verdict | Avg Score | Next Step |
|---------|-----------|-----------|
| APPROVED | >= 4.0 | Proceed to Phase 6 (Plan) |
| NEEDS_REVISION | 3.0–3.9 | Revise spec (Phase 5b) |
| BLOCKED | < 3.0 | Escalate to @architect |

## Constitutional Gate (Article IV — No Invention)
Every statement in `spec.md` MUST trace to a FR-*, NFR-*, CON-*, or research finding.
No invented features allowed.

## Output Location
`docs/specs/{feature-name}/`
