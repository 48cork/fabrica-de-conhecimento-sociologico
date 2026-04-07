# Task: create-next-story

## Metadata
- **Agent:** @sm (River)
- **Workflow:** Story Development Cycle — Phase 1
- **Command:** `*draft` | `*create-story`

## Inputs
- PRD sharded (docs/prd/)
- Epic context (docs/stories/epics/)

## Output
- `docs/stories/{epicNum}.{storyNum}.story.md`
- Status: `Draft`

## Pre-conditions
- Epic exists and is approved
- PRD is available and sharded

## Steps
1. Read epic context and identify next story number
2. Select appropriate story template
3. Draft story with: title, description, AC, scope, dependencies, complexity, business value, risks, DoD
4. Save to `docs/stories/{epicNum}.{storyNum}.story.md`
5. Set status to `Draft`

## Post-conditions
- Story file exists with all sections filled
- Status is `Draft`
- Ready for @po validation (`*validate-story-draft`)

## Template
```markdown
# Story {epicNum}.{storyNum}: {Title}

**Status:** Draft
**Epic:** {epicNum}
**Agent:** @dev

## Description
{problem/need explained}

## Acceptance Criteria
- [ ] Given ... When ... Then ...

## Scope
**IN:** ...
**OUT:** ...

## Dependencies
- Story: {prerequisite story IDs}
- Resources: {external dependencies}

## Complexity
{points or T-shirt sizing}

## Business Value
{benefit to user/business}

## Risks
{potential problems}

## Definition of Done
- [ ] All AC met
- [ ] Tests passing
- [ ] QA PASS
- [ ] Deployed

## Change Log
| Date | Agent | Change |
|------|-------|--------|
| {date} | @sm | Created |
```
