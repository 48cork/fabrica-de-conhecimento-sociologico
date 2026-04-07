# Task: dev-develop-story

## Metadata
- **Agent:** @dev (Dex)
- **Workflow:** Story Development Cycle — Phase 3
- **Command:** `*develop`

## Inputs
- Story file with status `Ready`

## Output
- Implemented code committed locally
- Story status: `Ready → InProgress → InReview`
- File List and checkboxes updated in story

## Pre-conditions
- Story status is `Ready`
- Dependencies resolved

## Execution Modes

### YOLO (autonomous)
- 0-1 prompts
- All decisions logged in `decision-log-{story-id}.md`
- Best for: simple, deterministic tasks

### Interactive (default)
- 5-10 prompts with educational checkpoints
- Confirmations at key decision points
- Best for: learning, complex decisions

### Pre-Flight (plan-first)
- 10-15 questions upfront
- Generates execution plan before coding
- Zero-ambiguity execution phase
- Best for: ambiguous requirements, critical work

## CodeRabbit Self-Healing (Dev Phase)
```
iteration = 0
while CRITICAL issues found AND iteration < 2:
  auto-fix CRITICAL/HIGH
  iteration++
if CRITICAL persist after 2 iterations:
  HALT — manual intervention required
```

## Allowed Git Operations
- `git add`, `git commit`, `git status`
- `git branch`, `git checkout`, `git merge` (local only)
- `git stash`, `git diff`, `git log`

## Blocked Operations
- `git push` → delegate to @devops
- `gh pr create/merge` → delegate to @devops

## Story File Updates (by @dev)
- File List (add implemented files)
- Dev Notes
- Checkboxes (mark completed items)
- Change Log (append only)

## Post-conditions
- All AC implemented
- Tests passing locally
- CodeRabbit self-healing complete (no CRITICAL issues)
- Story status set to `InReview`
- Ready for @qa gate
