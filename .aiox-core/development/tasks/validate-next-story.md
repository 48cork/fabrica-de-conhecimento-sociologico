# Task: validate-next-story

## Metadata
- **Agent:** @po (Pax)
- **Workflow:** Story Development Cycle — Phase 2
- **Command:** `*validate-story-draft`

## Inputs
- Story file in `Draft` status

## Output
- Verdict: GO (>=7/10) or NO-GO (<7/10)
- Updated story status: `Draft → Ready` (on GO)

## Pre-conditions
- Story file exists with status `Draft`

## 10-Point Validation Checklist
1. Clear and objective title
2. Complete description (problem/need explained)
3. Testable acceptance criteria (Given/When/Then preferred)
4. Well-defined scope (IN and OUT clearly listed)
5. Dependencies mapped (prerequisite stories/resources)
6. Complexity estimate (points or T-shirt sizing)
7. Business value (benefit to user/business clear)
8. Risks documented (potential problems identified)
9. Criteria of Done (clear definition of complete)
10. Alignment with PRD/Epic (consistency with source docs)

## Decision Rules
| Score | Verdict | Action |
|-------|---------|--------|
| >= 7  | GO      | Update status to `Ready`, log in Change Log |
| < 7   | NO-GO   | List required fixes, return to @sm |

## Post-conditions (GO)
- Story status updated to `Ready`
- Change Log updated with transition entry
- Story ready for @dev implementation

## CRITICAL
On GO verdict, @po MUST update the story's Status field from `Draft` → `Ready`.
Leaving a story in `Draft` after GO is a process violation.
