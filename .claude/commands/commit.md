---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*), Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Bash(npm run lint:*), Bash(npm run test:*), Bash(npm run build:*), Bash(npm run test:e2e:*), Agent
description: Full vibe-coding commit workflow — lint, test, build, E2E, code review, then commit and push
---

## Context

- Current branch: !`git branch --show-current`
- Git status: !`git status`
- Staged/unstaged diff: !`git diff HEAD`
- Recent commits: !`git log --oneline -5`

## Your task

Follow the vibe-coding commit workflow from CLAUDE.md **in order**. Stop immediately if any step fails and report what broke.

### Step 1 — Lint
Run `npm run lint`. Fix any errors before continuing.

### Step 2 — Unit tests
Run `npm run test`. All tests must pass.

### Step 3 — Production build
Run `npm run build`. Build must succeed with no errors.

### Step 4 — E2E tests
Run `npm run test:e2e`. All Playwright tests must pass.

### Step 5 — Code review
Spawn an Agent (subagent_type: general-purpose) with the following checklist against the staged diff:
- Code quality and readability
- Security (no secrets, XSS prevention, safe API usage)
- Accessibility (semantic HTML, ARIA labels, keyboard navigation)
- Performance (no unnecessary re-renders, optimized images, lazy loading)
- Best practices (TypeScript strict mode, proper error handling)

If the review finds issues, fix them and loop back to Step 1.

### Step 6 — Commit
Stage all relevant changes with `git add` and create a commit with a clear, descriptive message.
Commit message format: concise imperative subject line (≤72 chars), body if needed.

### Step 7 — Push
Push the branch to origin with `git push`.

Only proceed to each next step after the previous one succeeds.
