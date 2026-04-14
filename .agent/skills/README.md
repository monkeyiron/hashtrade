# 🧠 Agent Skills — hashtrade

This directory contains **911 combined agent skills** from two curated sources, installed for use with Antigravity, Claude Code, Gemini CLI, and other compatible AI coding assistants.

## 📦 Sources

| Source | Skills | Priority |
|---|---|---|
| [guanyang/antigravity-skills](https://github.com/guanyang/antigravity-skills) | 58 core + pro skills | **High** (overwrites duplicates) |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 28 curated skills + 833 automation skills | Base |

## 🔌 Usage

Invoke any skill using `@[skill-name]` or `/skill-name` in your AI assistant chat:

```
@[frontend-design] Build a dashboard component for the hashtrade app
@[test-driven-development] Write tests for the invoice module
@[supabase-postgres-best-practices] Optimize our database queries
@[react-best-practices] Review this component for performance issues
@[systematic-debugging] Debug this TypeScript error
```

## 🎯 Most Relevant Skills for This Project

### Frontend & React
- `@[frontend-design]` — High-quality production-grade interfaces
- `@[react-best-practices]` — Vercel's React/Next.js optimization guidelines
- `@[composition-patterns]` — Scalable React component library patterns
- `@[web-artifacts-builder]` — Complex web apps with React/Tailwind/shadcn
- `@[ui-ux-pro-max]` — Professional UI/UX full design schemes

### Development Workflow
- `@[test-driven-development]` — TDD before writing implementation code
- `@[systematic-debugging]` — Debug bugs, test failures, abnormal behaviors
- `@[subagent-driven-development]` — Parallel sub-agent task coordination
- `@[finishing-a-development-branch]` — Branch finalization workflow
- `@[using-git-worktrees]` — Isolated git worktrees for parallel work

### Planning & Architecture
- `@[brainstorming]` — Clarify requirements before starting work
- `@[writing-plans]` — Detailed execution plans for complex tasks
- `@[planning-with-files]` — File-based planning system (Manus-style)
- `@[executing-plans]` — Execute implementation plans with checkpoints
- `@[project-development]` — Full LLM project lifecycle design

### Database & Backend
- `@[supabase-postgres-best-practices]` — Postgres performance optimization
- `@[mcp-builder]` — Build MCP servers for external API integration
- `@[tool-design]` — Design efficient agent tool interfaces

### Code Review
- `@[requesting-code-review]` — Initiate code reviews before merging
- `@[receiving-code-review]` — Handle review feedback with technical verification
- `@[verification-before-completion]` — Verify before declaring task done

### Document Processing
- `@[docx]` — Create/edit Word documents
- `@[pdf]` — PDF text extraction, merging, annotation
- `@[xlsx]` — Excel spreadsheet manipulation
- `@[pptx]` — PowerPoint creation and modification

### App Automation (833 SaaS integrations)
- `@[github-automation]` — GitHub: issues, PRs, repos, branches
- `@[slack-automation]` — Slack: messages, channels, reactions
- `@[supabase-automation]` — Supabase: SQL, schemas, edge functions
- `@[vercel-automation]` — Vercel: deployments, projects, domains
- `@[stripe-automation]` — Stripe: charges, subscriptions, refunds
- ...and 828 more

## 🔄 Updating Skills

To update from upstream:

```powershell
# Update antigravity-skills
cd C:\Users\stack\.gemini\antigravity-skills-repo
git pull

# Re-copy to project
Copy-Item -Path C:\Users\stack\.gemini\antigravity-skills-repo\skills\* -Destination c:\ie\hashtrade\.agent\skills -Recurse -Force

# Update composio skills
cd C:\Users\stack\.gemini\composio-skills-repo
git pull
```
