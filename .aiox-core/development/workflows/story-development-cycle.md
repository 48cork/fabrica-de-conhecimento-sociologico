# Workflow: Story Development Cycle (SDC)

## Overview
Full 4-phase workflow for all development work. Primary workflow of the AIOX framework.

## Phase Summary

| Phase | Agent | Task | Input Status | Output Status |
|-------|-------|------|-------------|--------------|
| 1. Create | @sm (River) | `create-next-story` | — | Draft |
| 2. Validate | @po (Pax) | `validate-next-story` | Draft | Ready |
| 3. Implement | @dev (Dex) | `dev-develop-story` | Ready | InReview |
| 4. QA Gate | @qa | `qa-gate` | InReview | Done |

## Flow Diagram

```
@sm *draft
    ↓
  Draft
    ↓
@po *validate-story-draft
    ↓
  GO? ──NO──→ return to @sm with fixes
    ↓ YES
  Ready
    ↓
@dev *develop
    ↓
  InReview
    ↓
@qa *qa-gate
    ↓
  PASS? ──FAIL──→ return to @dev with feedback
    ↓ PASS
  Done
    ↓
@devops *push → PR created
```

## Status Progression
```
Draft → Ready → InProgress → InReview → Done
```

## Commands
- `*draft` / `*create-story` — Phase 1 (@sm)
- `*validate-story-draft` — Phase 2 (@po)
- `*develop` — Phase 3 (@dev)
- `*qa-gate` — Phase 4 (@qa)
- `*push` — Final push (@devops)
