# Workflow: QA Loop

## Overview
Automated iterative review-fix cycle after the initial QA gate. Max 5 iterations.

## Flow
```
@qa review → verdict → @dev fixes → re-review (max 5)
```

## Commands
| Command | Action |
|---------|--------|
| `*qa-loop {storyId}` | Start full loop |
| `*qa-loop-review` | Resume from review step |
| `*qa-loop-fix` | Resume from fix step |
| `*stop-qa-loop` | Pause and save state |
| `*resume-qa-loop` | Resume from saved state |
| `*escalate-qa-loop` | Force manual escalation |

## Verdicts
| Verdict | Action |
|---------|--------|
| APPROVE | Complete loop, mark story Done |
| REJECT | @dev fixes, re-review |
| BLOCKED | Escalate immediately |

## Escalation Triggers
- `max_iterations_reached` (default: 5)
- `verdict_blocked`
- `fix_failure` (after retries)
- `manual_escalate` (user command)

## State File
`qa/loop-status.json`

```json
{
  "storyId": "STORY-{id}",
  "iteration": 0,
  "maxIterations": 5,
  "status": "running | paused | complete | escalated",
  "lastVerdict": "APPROVE | REJECT | BLOCKED",
  "history": []
}
```
