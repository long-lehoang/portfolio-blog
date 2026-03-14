---
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git log:*), Bash(git show:*), Read, Glob, Grep, Agent
description: Review staged/local changes against the project checklist — quality, security, accessibility, performance, best practices
---

## Context

- Current branch: !`git branch --show-current`
- Staged and unstaged diff: !`git diff HEAD`
- Changed files: !`git diff HEAD --name-only`
- Recent commits: !`git log --oneline -5`

## Your task

Review the local changes shown above against this project's code review checklist.

Launch 5 parallel Sonnet agents, each focusing on one dimension. Each agent should read only the relevant changed files (from the diff above) and return a list of concrete issues with file path, line reference, and explanation.

### Agent 1 — Code quality & readability
- Is the code clean, readable, and well-structured?
- No dead code, unused variables, or unnecessary complexity
- TypeScript strict mode compliance (no `any`, proper types)
- Follows existing patterns and conventions in the codebase

### Agent 2 — Security
- No secrets, API keys, or credentials exposed in code
- No XSS vectors (dangerouslySetInnerHTML, unescaped user input)
- No SQL/command injection risks
- Safe usage of external APIs (Notion, etc.)
- Environment variables used correctly via `process.env`

### Agent 3 — Accessibility
- Semantic HTML elements used appropriately
- ARIA labels on interactive elements without visible text
- Keyboard navigation works (focus management, tab order)
- Sufficient color contrast (no hardcoded low-contrast colors)
- Images have meaningful `alt` text

### Agent 4 — Performance
- No unnecessary re-renders (missing `key` props, unstable references)
- Images use `next/image` with proper `width`/`height`
- No large inline objects/arrays created on every render
- Lazy loading applied where appropriate
- No blocking operations on the main thread

### Agent 5 — Best practices
- Proper error handling (try/catch, error boundaries where needed)
- No hardcoded magic values that should be constants
- Framer Motion animations follow existing patterns
- Next.js App Router conventions followed (server vs client components)
- No console.log left in production code

## Output

After all agents complete, consolidate their findings:

1. Filter out false positives and pre-existing issues not touched by this diff
2. Group remaining issues by severity: **blocking** (must fix before commit) vs **advisory** (worth noting)
3. Report in this format:

---

### Code Review

**Blocking issues** (X found):
1. [file:line] — description

**Advisory** (Y found):
1. [file:line] — description

**Approved** if no blocking issues.

---

If no issues found, respond: `No issues found. Approved.`
