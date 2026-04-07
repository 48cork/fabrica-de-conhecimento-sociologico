# Task: qa-gate

## Metadata
- **Agent:** @qa
- **Workflow:** Story Development Cycle — Phase 4
- **Command:** `*qa-gate`

## Inputs
- Story file with status `InReview`
- Implemented code

## Output
- Gate file: `docs/qa/{storyId}-gate.yaml`
- Story status: `InReview → Done` (PASS) or `InReview → InProgress` (FAIL)

## Pre-conditions
- Story status is `InReview`
- All AC implemented by @dev

## 7 Quality Checks
1. **Code review** — patterns, readability, maintainability
2. **Unit tests** — adequate coverage, all passing
3. **Acceptance criteria** — all met per story AC
4. **No regressions** — existing functionality preserved
5. **Performance** — within acceptable limits
6. **Security** — OWASP basics verified
7. **Documentation** — updated if necessary

## Gate Decisions
| Decision  | Condition            | Action |
|-----------|----------------------|--------|
| PASS      | All checks OK        | Approve, proceed to @devops push |
| CONCERNS  | Minor issues only    | Approve with observations documented |
| FAIL      | HIGH/CRITICAL issues | Return to @dev with specific feedback |
| WAIVED    | Issues accepted      | Approve with waiver documented (rare) |

## Gate File Structure
```yaml
storyId: STORY-{id}
verdict: PASS | CONCERNS | FAIL | WAIVED
checks:
  code_review: pass | fail
  unit_tests: pass | fail
  acceptance_criteria: pass | fail
  no_regressions: pass | fail
  performance: pass | fail
  security: pass | fail
  documentation: pass | fail
issues:
  - severity: low | medium | high
    category: code | tests | requirements | performance | security | docs
    description: "..."
    recommendation: "..."
```

## Output Location
`docs/qa/coderabbit-reports/{storyId}-gate.yaml`
