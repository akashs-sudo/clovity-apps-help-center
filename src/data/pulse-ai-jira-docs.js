export const pulseAiJiraDocs = {
  appSlug: "pulse-ai-jira",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-pulse-ai",
          title: "What is Pulse AI for Jira?",
          sideVideo: {
            src: "https://www.youtube.com/embed/3FalU4tBR88",
            title: "Pulse AI for Jira - Product Overview",
          },
          content: `
Pulse AI for Jira is an AI-powered Jira Cloud app built by Clovity - an Atlassian Platinum Solution Partner. It turns Jira into an intelligent command centre: a real-time scored instance Pulse Score dashboard, AI-powered governance and configuration agents, sprint delivery intelligence, anomaly detection, team performance monitoring, NLP-driven chat, and scheduled reporting - all without leaving Jira.

Pulse AI is available on the Atlassian Marketplace and is partner-supported by Clovity.

<!--VIDEO_BREAK-->

## Core Capabilities

- **AI Chat Mini Agents** - every view has its own dedicated conversational AI assistant scoped to that report's live data
- **Org Pulse Score** - a single composite score across five weighted dimensions: Governance, Delivery, Quality, Security, and Configuration
- **Sprint Analytics** - track velocity, capacity utilisation, overcommitment, and delivery in real time across all active Scrum sprints
- **Project Pulse Score Dashboard** - per-project Pulse Scores, stale backlog flags, lead coverage, and anomaly indicators
- **Governance & Configuration Audit** - deep audit of projects, users, groups, workflows, schemes, custom fields, screens, issue types, and more
- **Extensible Agent Layer** - standalone advanced agents available as separately licensed modules

## Who Should Use This Guide

| Role | Primary Sections |
|---|---|
| **Jira Admins** | Full guide. Primary audience. Responsible for approving AI write actions. |
| **Jira Project Leads** | Dashboard, Projects, Sprints & Delivery. Cannot confirm write actions unless granted admin. |
| **Engineering Managers** | Sprints & Delivery, Governance → Projects. |
| **IT / Security Teams** | Governance, Workflows & Schemes, Configuration. |
| **Executive Stakeholders** | Dashboard Pulse Score, Reporting Agents. |
| **Business Analysts / PMO** | Project Pulse Scores, sprint analytics, backlog and risk indicators. |
| **Clovity Consultants** | Full guide. Use Troubleshooting for client onboarding and health assessments. |

## Platform

Jira Cloud only. Not compatible with Jira Server or Data Center.
`,
        },
        {
          slug: "platform-requirements",
          title: "Platform Requirements",
          content: `
Before installing Pulse AI, verify your environment meets the following requirements.

## Requirements Table

| Item | Detail |
|---|---|
| **Jira version** | Jira Cloud only. Not compatible with Jira Server or Data Center. |
| **Marketplace** | Available on the Atlassian Marketplace. Search "Pulse AI" by Clovity. |
| **Installation role** | Jira site administrator required. |
| **Forge runtime** | Atlassian Forge - app logic runs inside your Atlassian tenancy. Node.js 24.x, 256 MB, arm64. |
| **LLM** | OpenAI (primary) and Anthropic Claude for NLP chat and intent detection. AWS Bedrock also supported. |
| **Data storage** | Forge-native. All org findings, scores, and action log entries live in Forge storage. Raw API data is never written to persistent storage. |
| **Mobile** | No dedicated mobile app. Runs inside Jira Cloud's web interface. |
| **Support** | Partner Supported by Clovity. Enterprise SLA: 4-hour initial response. |

## Key Concepts

### Pulse Score
A 0–100 composite score. Weighted average of five dimensions (Governance, Delivery, Quality, Security, Configuration). Each dimension starts at 100 and deductions are applied proportionally per affected item. The score recomputes after every sync.

### Sync / Scan
A full read of your Jira org. Triggered manually via the top-bar **Run Scan** button or on your configured auto-sync schedule. All data is processed in memory - raw API data is never written to storage. Only findings, scores, and action log entries are persisted.

### Action Card
The confirmation dialog shown before any AI-initiated write action. Displays exactly what will happen, which items are affected, and whether the action can be undone. Requires an explicit admin click to proceed. Every confirmed action is written to the Action Log.

### Mini Agent
Every report in Pulse AI has its own dedicated Mini Agent - a conversational AI assistant scoped to that report's data. Agents can answer questions about findings and, for admins, execute write-back actions after confirmation via an Action Card.
`,
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
Only a Jira site administrator can install Pulse AI.

## Installation Steps

1. Log in to your Jira Cloud site as a **site administrator**
2. Click **Apps** in the top navigation bar, then select **Find new apps** (Atlassian Marketplace)
3. Search for **"Pulse AI"** by Clovity, or navigate directly to the Clovity vendor page on the Marketplace
4. Click **Get it now** and confirm the installation prompt
5. After installation, navigate to **Apps → Pulse AI** in the Jira top nav to launch the app

> **Note:** After installation the app appears as Pulse AI under the Apps top-nav item in Jira. If it does not appear within 5 minutes, refresh the page or clear your browser cache.

## Verify Installation

After installation:

1. Click **Apps** in the Jira top navigation bar
2. Look for **Pulse AI** in the dropdown menu
3. Click it to open the app - you should see the Welcome / OAuth screen on first launch

## Jira Permissions Required

| Permission | Why It's Needed |
|---|---|
| Read Jira issues and projects | Load project context and findings for scoring |
| Read Jira configuration | Detect workflows, schemes, custom fields, and issue types |
| Read users and groups | Audit access hygiene and permission risk |
| Administer Jira (admin only) | Execute write-back actions confirmed via Action Cards |

## Uninstalling

To uninstall: **Jira Settings → Apps → Manage apps** → find Pulse AI → click **Uninstall**. All Forge storage data (findings, scores, action log) will be permanently deleted.
`,
        },
        {
          slug: "first-launch-oauth",
          title: "First Launch & OAuth Authorisation",
          content: `
On first launch you will see the Welcome / OAuth screen. Pulse AI uses OAuth 2.0 (3-legged) via Atlassian to authorise access to your site's data.

## OAuth Setup Steps

1. Click **Connect with Atlassian** on the Welcome screen
2. You will be redirected to an Atlassian authorisation page listing the scopes Pulse AI requires
3. Review the scopes and click **Accept**
4. You are redirected back to Pulse AI. The initial org sync begins automatically
5. Wait for the sync to complete (progress shown in the top bar). Typical duration: **30–90 seconds** for orgs under 500 projects

> **Warning:** OAuth must be completed before any data is visible. If you see an empty Dashboard after OAuth, click **Run Scan** (top bar) to trigger the first full sync manually.

## What Happens During the First Sync

- Pulse AI reads all Jira projects, users, groups, workflows, schemes, custom fields, and sprint data
- All data is processed in memory - nothing is written to external systems
- Only findings, scores, and action log entries are persisted to Forge storage
- The Pulse Score is calculated and displayed on the Dashboard when the sync completes

## Re-authorising

If your OAuth token expires or you see a "Not connected" status:

1. Navigate to **Settings** in the Pulse AI sidebar
2. Click **Re-connect with Atlassian**
3. Complete the OAuth flow again
4. Click **Run Scan** to refresh data
`,
        },
        {
          slug: "understanding-the-layout",
          title: "Understanding the Layout",
          content: `
Pulse AI has a consistent three-zone layout across all views.

## Top Bar

Spans the full width. Contains:

- **Pulse AI logo and site name** (left)
- **Scan status indicator** - shows the timestamp of the last completed scan
- **Run Scan button** (top-right) - triggers a full org sync manually

## Left Sidebar

Primary navigation. All sections are accessible from the sidebar, grouped into logical areas. Sub-sections expand in-place.

| Group | Views |
|---|---|
| **Overview** | Dashboard |
| **AI & Agents** | Advance Agents |
| **Governance** | Projects, Users & Permissions, Groups |
| **Workflows & Schemes** | Workflows, Schemes (Workflow, Permission, Notification, Work Item Security) |
| **Configuration** | Custom Fields, Fields & Types, Global Config |
| **Delivery** | Sprints & Delivery |
| **System** | Settings |

## Main Content Area

Renders the selected view - dashboard, table, or form. Tables support sorting, filtering, and CSV export in most views.

## Mini Agent FAB

A floating action button (bottom-right of most views) opens the view-specific Mini Agent chat panel. The agent is scoped to the data in the current view.

**Views without a FAB:** Advance Agents, Reporting Agents, Settings, Help.

> **Tip:** Configure auto-sync frequency via **Settings → Scan Schedule** to keep your Pulse Score current without manual intervention.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `
Pulse AI surfaces different things depending on what you do. Use this guide to find the fastest path to what matters for your role.

## Jira Administrator

Your primary responsibility is approving AI write actions. You have access to the full app.

**Start with:**
1. [Installation & Setup](/apps/pulse-ai-jira/installation-setup) - install the app and complete OAuth
2. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - read the Pulse Score and top findings
3. [How to: Improve Your Pulse Score](/apps/pulse-ai-jira/how-to-improve-pulse-score) - structured remediation run
4. [Settings Overview](/apps/pulse-ai-jira/settings-overview) - configure scan schedule and scoring weights

**Key sections for you:** All tabs. Focus on [Governance](/apps/pulse-ai-jira/governance-overview), [Configuration](/apps/pulse-ai-jira/configuration-overview), and [Workflows & Schemes](/apps/pulse-ai-jira/workflows).

---

## Jira Project Lead

You can view all reports but cannot confirm write actions unless you have Administer Jira.

**Start with:**
1. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - check the overall score and your project's findings
2. [Projects](/apps/pulse-ai-jira/projects) - find your project's Pulse Score and stale backlog flag
3. [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-overview) - check sprint risk for your boards

---

## Engineering Manager / Scrum Master

Your focus is sprint delivery health and team performance.

**Start with:**
1. [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-overview) - active sprint risk across all boards
2. [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds) - understand the On track / Tight / AT RISK / OVERCOMMITTED badges
3. [Ask Sprint Intelligence](/apps/pulse-ai-jira/ask-sprint-intelligence) - get deferral plans and JQL for at-risk items
4. [How to: Monitor Sprint Health](/apps/pulse-ai-jira/how-to-sprint-monitoring) - step-by-step monitoring workflow

---

## IT / Security Team

Your focus is access hygiene, permissions risk, and configuration governance.

**Start with:**
1. [Users & Permissions](/apps/pulse-ai-jira/users-and-permissions) - inactive admins, ghost accounts, overpermissioned users
2. [Groups](/apps/pulse-ai-jira/groups) - empty and unreferenced group cleanup
3. [How to: Run a Governance Audit](/apps/pulse-ai-jira/how-to-governance-audit) - full governance audit walkthrough
4. [Workflows](/apps/pulse-ai-jira/workflows) and [Workflow Schemes](/apps/pulse-ai-jira/workflow-schemes) - configuration debt

---

## Executive Stakeholder / PMO

Your focus is high-level health reporting and delivery trends.

**Start with:**
1. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - overall Pulse Score and dimension breakdown
2. [Pulse Score](/apps/pulse-ai-jira/pulse-score) - understand the score bands and what they require
3. [Reporting Agents](/apps/pulse-ai-jira/reporting-agents) - KPIs, velocity, sprint analytics (requires add-on)
4. [AI Prompt Playbook](/apps/pulse-ai-jira/ai-prompt-playbook) - use Ask Pulse AI to generate executive summaries

---

## Clovity Consultant

You are running a client instance health assessment. Use the full guide.

**Start with:**
1. [Installation & Setup](/apps/pulse-ai-jira/installation-setup) - work with client's site admin
2. [How to: Improve Your Pulse Score](/apps/pulse-ai-jira/how-to-improve-pulse-score) - baseline and remediation plan
3. [How to: Run a Governance Audit](/apps/pulse-ai-jira/how-to-governance-audit) - governance section walkthrough
4. [Troubleshooting](/apps/pulse-ai-jira/troubleshooting) - reference and stale thresholds
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for the numbers, thresholds, and permissions you'll look up most often.

## Pulse Score Bands

| Label | Range | What It Requires |
|---|---|---|
| Excellent | 85 – 100 | Maintain. Monitor on your sync schedule. |
| Good | 70 – 84 | Address High findings within 2 sprints. |
| Fair | 40 – 69 | Prioritise Critical + High findings this sprint. |
| Poor | 0 – 39 | Immediate remediation. Use Mini Agents on each report. |

→ [Pulse Score](/apps/pulse-ai-jira/pulse-score)

## Dimension Weights

| Dimension | Weight | Highest-Impact Deduction Signals |
|---|---|---|
| Governance | 25% | No project lead · Orphaned workflows · Duplicate schemes |
| Delivery | 25% | Sprint overcommitment > 115% · Carryover > 15% · Active blockers |
| Quality | 25% | Stories with no linked test · Epics with no assignee |
| Security | 15% | Inactive admins · Ghost accounts · Overpermissioned users |
| Configuration | 10% | Unused custom fields · Global context bloat |

## Stale / Inactivity Thresholds

| Entity | Threshold |
|---|---|
| Project (stale backlog) | > 30% of open issues with no update in 90+ days |
| Workflow (stale) | Zero projects + last edited ≥ 90 days ago |
| User inactivity | No audit log activity ≥ 60 days |
| Inactive Admin | Admin with no activity ≥ ~65 days |
| Group (empty) | Zero members |
| Custom field (unused) | Zero issues with a value in this field |
| Custom field (global bloat) | Global context + used in < 2 projects |

## Sprint Risk Thresholds

| Badge | Capacity Utilisation | Colour |
|---|---|---|
| On track | < 100% | Teal |
| Tight | 100 – 114% | Amber |
| AT RISK | 115 – 149% | Amber |
| OVERCOMMITTED | ≥ 150% | Red |

→ [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds)

## Permission Requirements

| Action | Required Permission |
|---|---|
| View all reports | Any Jira user |
| Run a scan | Any Jira user |
| Confirm write actions | Administer Jira (org admin) |
| Customise Scoring Weights | Site or org administrator |
| Install the app | Jira site administrator |

## Finding Severity Levels

| Severity | Examples |
|---|---|
| Critical | Unused custom fields · Broken workflow resolutions |
| High | Duplicate custom fields · Duplicate screens · Dead-end workflows |
| Medium | Global context bloat · Orphaned screens · Orphaned schemes |

→ [Top Findings Table](/apps/pulse-ai-jira/top-findings-table)
`,
        },
        {
          slug: "how-to-improve-pulse-score",
          title: "How to: Improve Your Pulse Score",
          content: `
A structured remediation run - from first scan to a measurably higher Pulse Score. Each step links to the detailed documentation for that section.

## Step 1 - Run a Scan

Click **Run Scan** in the top bar. Wait 30–90 seconds for the scan to complete (longer for orgs with 500+ projects).

## Step 2 - Read the Dashboard

Open the [Dashboard](/apps/pulse-ai-jira/dashboard-overview):

- Check the [Pulse Score](/apps/pulse-ai-jira/pulse-score) and its band label
- The **lowest-scoring dimension bar** is your highest-leverage starting point
- Check the **score delta** - negative means new findings are appearing faster than you're fixing them

## Step 3 - Triage Critical Findings

Open the [Top Findings Table](/apps/pulse-ai-jira/top-findings-table). Filter by **Critical**.

Use Ask Pulse AI (FAB, bottom-right): *"Give me a prioritised cleanup plan ordered by impact on the Pulse Score."*

## Step 4 - Fix Configuration (Quickest Wins)

1. [Custom Fields](/apps/pulse-ai-jira/custom-fields) → **Unused** tab → soft-delete via Ask Config Auditor
2. [Workflow Schemes](/apps/pulse-ai-jira/workflow-schemes) → delete orphaned schemes
3. [Workflows](/apps/pulse-ai-jira/workflows) → delete unused and dead-end workflows
4. [Global Config](/apps/pulse-ai-jira/global-config) → fix broken resolutions, transfer dead-owner filters

## Step 5 - Fix Governance (Highest Weight at 25%)

1. [Projects](/apps/pulse-ai-jira/projects) → assign leads; archive genuinely stale projects
2. [Users & Permissions](/apps/pulse-ai-jira/users-and-permissions) → remove inactive admins; deactivate ghost accounts
3. [Groups](/apps/pulse-ai-jira/groups) → delete empty and unreferenced groups

## Step 6 - Review Delivery Risk

[Sprints & Delivery](/apps/pulse-ai-jira/sprints-overview) → resolve OVERCOMMITTED sprints and active blockers.

## Step 7 - Re-scan and Measure

Click **Run Scan**. The score delta on the Dashboard shows your improvement. Target **Good (70–84)** first, then **Excellent (85+)**.
`,
        },
        {
          slug: "how-to-governance-audit",
          title: "How to: Run a Governance Audit",
          content: `
A logical audit sequence for Jira admins and IT/security teams. Covers all sections that feed the Governance and Security dimensions.

## 1. Check the Dashboard First

Open [Dashboard](/apps/pulse-ai-jira/dashboard-overview). Note the **Governance** and **Security** dimension scores. A score below 70 on either means material debt exists.

## 2. Audit Projects

Go to [Projects](/apps/pulse-ai-jira/projects):

- **Stale Backlog** tab - > 30% stale issues
- **Lead column** - empty = Governance deduction
- Prompt Ask Project Agent: *"Which stale projects have no lead and no activity in 6 months?"*
- Archive dead projects via Action Card; assign leads to active but leadless projects directly in Jira

## 3. Audit Users & Permissions

Go to [Users & Permissions](/apps/pulse-ai-jira/users-and-permissions) and work each tab:

| Tab | Risk | Action |
|---|---|---|
| Inactive Admins | Admin, no activity ≥ 60 days | Remove Group via Action Card |
| Ghost Accounts | No audit log events ever | Link to Atlassian Admin Console |
| Over-permissioned | Admin on 15+ projects | Review and reduce assignments |
| No Group | No group membership | Check for direct project role grants |

## 4. Audit Groups

Go to [Groups](/apps/pulse-ai-jira/groups):

- Delete **Empty Groups** (zero members) via Action Card
- Review **Unreferenced Groups** (not in any scheme) - delete if confirmed unused

## 5. Audit Workflows & Schemes

Go to [Workflows](/apps/pulse-ai-jira/workflows) → delete Unused and fix Dead-ends.

Go to [Workflow Schemes](/apps/pulse-ai-jira/workflow-schemes), [Permission Schemes](/apps/pulse-ai-jira/permission-schemes), [Notification Schemes](/apps/pulse-ai-jira/notification-schemes) → delete Orphaned and Duplicates.

Use **Ask Scheme Simplifier** for an AI-generated consolidation plan before making changes.

## 6. Export and Record

Click **Run Scan**. On the Dashboard, filter by **Critical** → **Export PDF** for compliance reporting.

Every confirmed action is recorded in [Settings → Action Log](/apps/pulse-ai-jira/settings-overview) - use it as your audit trail.
`,
        },
        {
          slug: "how-to-sprint-monitoring",
          title: "How to: Monitor Sprint Health",
          content: `
A practical workflow for engineering managers and Scrum masters to catch at-risk sprints before they derail.

## 1. Open Sprints & Delivery

Navigate to **Delivery → Sprints & Delivery** → [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-overview).

## 2. Check the Summary Cards

| Card | Green Zone | Red Zone |
|---|---|---|
| Overcommitted | 0 | Any number > 0 |
| Avg Carryover Rate | < 15% | > 20% |
| Active Blockers | 0 | Any number > 0 |

## 3. Find At-Risk Sprints

Filter by **Overcommitted** tab. Each sprint card shows a risk badge - see the full reference at [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds).

## 4. Get a Deferral Plan

Click **Ask Sprint Intelligence** (FAB) and prompt:

- *"Top 5 stories to defer from [Sprint Name] to get capacity below 115%"*
- *"Which stories have carried over more than twice in the last 4 sprints?"*
- *"Generate a JQL filter for all overdue items in the current sprint"*

Copy the generated JQL into Jira Issue Navigator to take action.

→ [Ask Sprint Intelligence](/apps/pulse-ai-jira/ask-sprint-intelligence)

## 5. Configure Daily Auto-Sync

Sprint risk changes daily. Go to [Settings](/apps/pulse-ai-jira/settings-overview) → **Scan Schedule** → set to **Daily** so badges stay current automatically.

## 6. Target Metrics Over Time

| Metric | Target |
|---|---|
| Avg Carryover Rate | < 15% |
| Overcommitted sprint count | 0 |
| Active blockers at sprint midpoint | 0 |

For velocity trend charts and sprint-over-sprint data, see [Reporting Agents](/apps/pulse-ai-jira/reporting-agents) (add-on).
`,
        },
        {
          slug: "ai-prompt-playbook",
          title: "AI Prompt Playbook",
          content: `
Every report in Pulse AI has its own Mini Agent. This playbook gives you ready-to-use prompts for each one, organised by the job you're trying to get done.

## Ask Pulse AI - Dashboard

*The full-instance assistant. Knows all findings from the last scan.*

| Job to be Done | Prompt |
|---|---|
| Executive summary | *"Give me a 5-bullet Jira health summary for a leadership update."* |
| Triage starting point | *"Which 3 findings will have the highest impact on the Pulse Score if I fix them today?"* |
| Full cleanup plan | *"Give me a prioritised remediation plan for all Critical findings, grouped by effort."* |
| Score explanation | *"Why is our Governance score lower than our Configuration score?"* |
| Score improvement estimate | *"If I delete all unused custom fields, how many points would the Pulse Score gain?"* |

→ [AI Assistant](/apps/pulse-ai-jira/ai-assistant)

## Ask Project Agent - Governance → Projects

*Knows all project Pulse Scores, activity dates, and lead assignments.*

| Job to be Done | Prompt |
|---|---|
| Archive candidates | *"Which stale projects have no lead and no activity in the last 6 months?"* |
| Lead coverage gap | *"List all projects with no lead assigned, ordered by issue count."* |
| Health summary | *"What is the average Pulse Score across our Software projects?"* |

→ [Projects](/apps/pulse-ai-jira/projects)

## Ask Permission Auditor - Governance → Users & Permissions

*Knows all user access, activity dates, and group memberships.*

| Job to be Done | Prompt |
|---|---|
| Inactive admin list | *"List all inactive admins and when they last had any activity."* |
| Ghost account check | *"How many ghost accounts exist and what groups are they in?"* |
| Overpermissioning risk | *"Which users are admin on more than 10 projects and haven't logged in for 30 days?"* |

→ [Users & Permissions](/apps/pulse-ai-jira/users-and-permissions)

## Ask Workflow Optimizer - Workflows & Schemes → Workflows

*Knows workflow health, dead-ends, and duplicate signatures.*

| Job to be Done | Prompt |
|---|---|
| Safe-to-delete list | *"List all unused workflows that have zero project assignments and were last edited over 90 days ago."* |
| Dead-end fix guide | *"Which workflows have dead-end statuses, and what are the affected status names?"* |
| Duplicate identification | *"Show me duplicate workflows and explain what makes them duplicates."* |

→ [Workflows](/apps/pulse-ai-jira/workflows)

## Ask Scheme Simplifier - Workflows & Schemes → Schemes

*Knows all scheme types, orphan status, and consolidation opportunities.*

| Job to be Done | Prompt |
|---|---|
| Consolidation plan | *"Generate a consolidation plan for our duplicate workflow schemes."* |
| Safe orphan deletions | *"Which orphaned permission schemes are safe to delete?"* |
| Duplicate analysis | *"Compare the two duplicate notification schemes and explain the differences."* |

→ [Workflow Schemes](/apps/pulse-ai-jira/workflow-schemes)

## Ask Config Auditor - Configuration

*Knows custom field usage, context, and configuration debt.*

| Job to be Done | Prompt |
|---|---|
| Deletion candidates | *"Which unused custom fields are safe to delete and what is their estimated score impact?"* |
| Bloat identification | *"Show all global-context fields used in fewer than 2 projects."* |
| Dependency check | *"Are any of the unused fields referenced in automation rules or board configurations?"* |
| Filter risk | *"Which saved filters have a dead owner and which boards will break if deleted?"* |

→ [Custom Fields](/apps/pulse-ai-jira/custom-fields) · [Global Config](/apps/pulse-ai-jira/global-config)

## Ask Sprint Intelligence - Delivery → Sprints & Delivery

*Knows all active and recently closed sprint data across every Scrum board.*

| Job to be Done | Prompt |
|---|---|
| Deferral plan | *"Top 5 stories to defer from the overcommitted sprint to get capacity below 115%."* |
| Carryover analysis | *"What is the carryover rate for each board over the last 3 sprints?"* |
| Blocker summary | *"List all active blockers across all sprints and which sprint they are blocking."* |
| Risk stories | *"Which stories in the current sprint are at risk of not completing, based on size and assignee?"* |
| JQL generation | *"Generate a JQL filter for all overdue items in the current sprint."* |

→ [Ask Sprint Intelligence](/apps/pulse-ai-jira/ask-sprint-intelligence)
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that make a real difference - things that aren't in the feature documentation.

## Score & Scanning

- **Dimension bars beat the headline score.** A score of 75 with Governance at 45 needs different action than 75 with all five dimensions above 65. Always look at which dimension is dragging.
- **Flat score despite active cleanup = new findings arriving.** Run a mid-session scan and compare. If the delta is negative, you're treading water - find what's generating new findings.
- **Set Enterprise scoring weights before the first big cleanup.** If you change weights after cleanup, some already-resolved items may suddenly affect the score differently. Agree weights once and lock them.

## Governance

- **Archive before escalating to delete.** Archive makes a project read-only. If no one raises an objection within 30 days, the Jira admin can delete it directly in Jira. You cannot undo Archive from Pulse AI.
- **Transfer filter ownership before deactivating accounts.** A dead-owner filter silently returns empty results - boards using it will show no issues with no error. Fix the filter first, then deactivate.
- **Don't remove inactive admins in bulk.** Some may be service accounts. Check Atlassian Admin Console for API usage before removing their group. One at a time, with verification.

## Configuration

- **Custom field deletions go to Jira's trash for 60 days.** This is recoverable - use it. Delete unused fields confidently; if something breaks within 60 days, restore from trash.
- **Ask Config Auditor before bulk-deleting custom fields.** Fields can appear unused in Pulse AI but still be referenced in Jira automation rules or gadgets. The agent can cross-check.
- **Fix Unused (Critical) before Global Context Bloat (Medium).** Higher severity = higher score impact per item. Don't get distracted by a long list of Medium findings while Critical ones remain open.

## Sprint Health

- **OVERCOMMITTED at the start of sprint = planning problem. OVERCOMMITTED at midpoint = execution problem.** Different root causes, different solutions. Sprint Intelligence can help identify which it is.
- **Carryover > 20% for two consecutive sprints is a structural signal.** One sprint is an anomaly. Two in a row means the team is consistently over-planning. Use Ask Sprint Intelligence to identify which stories keep carrying over.
- **Active blockers at sprint midpoint should be zero.** If they're not, escalate immediately - they compound daily.

## AI Agents

- **Start with a question, not a command.** Ask *"Which workflows are safe to delete?"* before asking *"Delete the unused workflows."* The answer shapes the command and avoids surprises in the Action Card.
- **Action Card shows the full impact before anything runs.** If it looks wrong - unexpected items, unexpected scope - click Cancel and rephrase. The agent will clarify.
- **Use Ask Pulse AI for executive summaries across all findings.** Per-view agents are scoped to one section. For a full-org summary, go to the Dashboard and use Ask Pulse AI.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. DASHBOARD
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dashboard",
      title: "Dashboard",
      articles: [
        {
          slug: "dashboard-overview",
          title: "Dashboard Overview",
          content: `
The Dashboard is the default landing page after login and scan. It provides a complete org overview: the aggregate Pulse Score, per-dimension scores, finding counts by severity, and the full findings table.

<img
  src="/images/pulse-ai/dashboard.png"
  alt="Pulse AI Dashboard"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## What You See on the Dashboard

| Element | Description |
|---|---|
| **Pulse Score** | Composite 0–100 score with label (Excellent / Good / Fair / Poor) |
| **Score Delta** | Change in points since the previous scan |
| **Dimension Bars** | Individual scores for Governance, Delivery, Quality, Security, Configuration |
| **Finding Counts** | Total Critical, High, and Medium findings from the last sync |
| **Top Findings Table** | Full list of all findings ordered by severity |
| **Ask Pulse AI button** | Opens the full-instance AI assistant (bottom-right) |

## Dashboard Actions

- **Run Scan** (top bar) - triggers a new full sync and refreshes all data
- **Export PDF** - exports the current findings table as a PDF report
- **Filter tabs** - filter findings by All / Critical / High severity
- **All Reports dropdown** - filter findings by scanner module (Custom Fields, Workflows, Schemes, etc.)

## Score Delta

The small indicator in the top-right of the Pulse Score card shows the point change since the last scan. A positive delta (e.g., +4 pts) means issues were resolved. A negative delta means new findings were detected.
`,
        },
        {
          slug: "pulse-score",
          title: "Pulse Score",
          content: `
The Pulse Score is the single most important metric in Pulse AI - a weighted composite of five dimensions, each scored 0–100.

## Score Bands

| Label | Score Range | Recommended Action |
|---|---|---|
| **Excellent** | 85 – 100 | Maintain. Monitor on your configured sync schedule. |
| **Good** | 70 – 84 | Address High findings within 2 sprints. |
| **Fair** | 40 – 69 | Prioritise Critical + High findings this sprint. |
| **Poor** | 0 – 39 | Immediate structured remediation needed. Use Mini Agents on each report. |

## Dimension Weights

The overall Pulse Score is calculated as:

**Overall = (Governance × 0.25) + (Delivery × 0.25) + (Quality × 0.25) + (Security × 0.15) + (Configuration × 0.10)**

| Dimension | Weight | What It Measures |
|---|---|---|
| **Governance** | 25% | Workflow cleanliness, scheme hygiene, project ownership. |
| **Delivery** | 25% | Sprint load vs. velocity baseline, carryover rate, backlog staleness. |
| **Quality** | 25% | Test coverage linkage, bug recurrence, required field completeness. |
| **Security** | 15% | Access hygiene and permission risk. |
| **Configuration** | 10% | Custom field hygiene and orphaned configuration objects. |

> **Note:** Enterprise plan admins can customise the deduction weights for each dimension in **Settings → Scoring Weights**. All five dimensions are adjustable and must sum to 100%.

## How Scores Are Calculated

Each dimension starts at 100. Deductions are applied proportionally per affected item. For example:

- A project with no lead assigned deducts from the Governance dimension
- An overcommitted sprint deducts from the Delivery dimension
- An unused custom field deducts from the Configuration dimension

The score recomputes automatically after every sync. To trigger an immediate recalculation after fixing findings, click **Run Scan**.

## Deduction Signals by Dimension

| Dimension | Deduction Signals |
|---|---|
| **Governance** | No lead on project · Orphaned workflows · Duplicate schemes · Projects with no activity in 90+ days |
| **Delivery** | Sprint overcommitment > 115% · Carryover > 15% · Active Blocker issues · Stale backlog |
| **Quality** | Stories with no linked test · Epics with no assignee · Open bug patterns · Low issue type coverage |
| **Security** | Inactive admins (60+ days) · Ghost accounts · Overpermissioned users (admin on 15+ projects) |
| **Configuration** | Unused custom fields · Global context bloat · Orphaned screens/schemes |
`,
        },
        {
          slug: "top-findings-table",
          title: "Top Findings Table",
          content: `
The findings table lists every issue detected in the last sync, ordered by severity. It is the primary action surface for remediation work.

## Filtering the Table

- **All / Critical / High tab bar** - filter by severity level
- **All Reports dropdown** - filter by scanner module (Custom Fields, Schemes, Workflows, Users, etc.)
- **Export PDF** - exports the currently filtered view

## Table Columns

| Column | Description |
|---|---|
| **#** | Finding sequence number for this scan |
| **Pulse Summary** | Short description of the issue |
| **Report** | Which scanner module produced this finding |
| **Severity** | Critical (red), High (amber), Medium (yellow) |
| **Detected** | Date the finding was first recorded |
| **Status** | Open (needs action) or Resolved |
| **Action** | Fix, Archive, Delete, Clean, or - (no direct action available) |

## Severity Levels

| Severity | Colour | What It Means |
|---|---|---|
| **Critical** | Red | Immediate attention required - significant governance, security, or delivery risk |
| **High** | Amber | Should be addressed within the current sprint |
| **Medium** | Yellow | Address in the next 1–2 sprints |

## Available Actions

| Action | What It Does |
|---|---|
| **Fix** | Opens an AI-guided remediation flow via the Mini Agent |
| **Archive** | Makes a project read-only (projects only). Requires admin confirmation. |
| **Delete** | Permanently removes the item from Jira. Requires admin confirmation. |
| **Clean** | Removes orphaned or duplicate configuration objects. Requires admin confirmation. |
| **-** | No direct action available - review manually in Jira. |

> **Warning:** Actions cannot be undone from within Pulse AI. Archive makes a project read-only. Delete permanently removes the item from Jira. Always review the Action Card before confirming.
`,
        },
        {
          slug: "ai-assistant",
          title: "AI Assistant (Ask Pulse AI)",
          content: `
The **Ask Pulse AI** floating button (bottom-right of the Dashboard) opens the full-instance AI assistant with context of your current scan results. It can answer questions, explain findings, suggest remediation steps, and execute write actions after admin confirmation.

## Example Prompts

- "Why is our Pulse Score low this week?"
- "List all Critical findings and explain what each one means."
- "Which custom fields are safe to delete?"
- "Show me all workflows with dead-end statuses."
- "Give me a step-by-step cleanup plan ordered by impact on the Pulse Score."
- "How many inactive admins do we have and what is the risk?"

## Write Action Confirmation Flow

Every write action follows this mandatory flow - nothing is automatic:

1. **Admin opens the Mini Agent** on any report
2. **Admin asks a question or requests an action**
3. **Action Card is shown** - displays what will happen, exactly which items are affected, and whether the action can be undone
4. **Pre-flight check** - the agent re-fetches the item from the live Jira API to confirm it still exists and is in the expected state
5. **Action runs** - the Jira REST API call is made and the result is shown in the agent panel
6. **Action log entry is written** - every action (succeeded or failed) is recorded in Settings → Action Log

> **Warning:** Only users with **Administer Jira** permission can confirm write actions. The app checks your permission in real time before showing the Confirm button.

## Mini Agent vs Ask Pulse AI

| Feature | Ask Pulse AI (Dashboard) | Mini Agent (Per-view) |
|---|---|---|
| **Scope** | Full org - all findings from last scan | Scoped to the current report's data only |
| **Available on** | Dashboard only (bottom-right FAB) | Every report view except Advance Agents, Reporting Agents, Settings, Help |
| **Write actions** | Yes (admin only) | Yes (admin only) |
| **Example** | "Summarise all Critical findings" | "Which workflows in this list have dead-end statuses?" |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. GOVERNANCE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "governance",
      title: "Governance",
      articles: [
        {
          slug: "governance-overview",
          title: "Governance Overview",
          content: `
The Governance section provides a holistic view of project portfolio Pulse Scores, user access hygiene, and directory management. It is the primary section for Jira admins and IT/security teams.

## What Governance Covers

| Sub-section | What It Audits |
|---|---|
| **Projects** | Project health scores, stale backlogs, missing leads, anomaly indicators |
| **Users & Permissions** | Inactive admins, ghost accounts, overpermissioned users, users with no group |
| **Groups** | Empty groups, unreferenced groups, system group inventory |

## Governance Dimension Score

The Governance dimension (25% weight) deducts points for:

- Projects with no lead assigned
- Orphaned or unused workflows
- Duplicate schemes
- Projects with no issue activity in 90+ days

Addressing items in this section typically has the highest single impact on improving the overall Pulse Score.
`,
        },
        {
          slug: "projects",
          title: "Projects",
          content: `
Navigate to **Governance → Projects** for a project-level Pulse Score breakdown across every Jira project in the org.

<img
  src="/images/pulse-ai/projects.png"
  alt="Governance - Projects"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Org Total** | Total number of Jira projects synced |
| **Stale Backlog** | Projects where over 30% of issues have not been updated in 90+ days |

## Projects Table Columns

| Column | Description |
|---|---|
| **Project** | Project display name. Click to open in Jira. |
| **Key** | Jira project key (e.g., AD, PO). |
| **Type** | Software, Service Desk, Business, etc. |
| **Last Activity** | Time since the last issue update. ≥ 90 days flags the project as stale. |
| **Lead** | Project lead display name. Empty = no lead assigned - a Governance deduction. |
| **Issues** | Total open issue count. |
| **Pulse Score** | Per-project health score (0–100). Green ≥ 80, Amber 50–79, Red < 50. |
| **Pulse Summary** | Stale Backlog, Inactive, No lead, Empty, or Clean. |
| **Action** | Archive (for stale/leadless projects). Requires confirmation. |

## Filters

Use the **All / Stale Backlog** filter tabs and the **All types** dropdown to narrow the project list. Export to CSV via the **Export CSV** button.

## Archiving a Project

The Archive action makes a project read-only in Jira. It is surfaced for projects that are stale or have no lead assigned.

> **Warning:** Archiving cannot be undone from Pulse AI. To restore a project, a Jira admin must manually unarchive it in Jira project settings.

## Ask Project Agent

The **Ask Project Agent** FAB (bottom-right) opens a Mini Agent scoped to your project portfolio data. Example prompts:

- "Which projects have no lead and haven't been active in 6 months?"
- "List all stale projects and recommend which ones to archive."
- "What is the average Pulse Score across Software projects?"
`,
        },
        {
          slug: "users-and-permissions",
          title: "Users & Permissions",
          content: `
Navigate to **Governance → Users & Permissions** for a security and access risk audit for every user licensed in the org.

<img
  src="/images/pulse-ai/user%20%26%20permissions.png"
  alt="Users and Permissions"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Licensed Users** | Total active licensed users. Active in last 30 days shown below. |
| **Inactive Admins** | Admins with no activity for 60+ days. |
| **Over-permissioned** | Users who are admin on 15+ projects. |
| **Ghost Accounts** | Accounts that have never generated an audit log event. |
| **Users With No Group** | Users with no group membership - may be over-permissioned directly. |

## Risk Categories

| Risk Category | Condition | Action Available |
|---|---|---|
| **Inactive Admin** | Admin with no activity for 60+ days | Remove Group |
| **Ghost Account** | Account that has never generated an audit log event | Link to Atlassian Admin Console |
| **Over-permissioned** | Admin on 15+ projects | Review in-app |
| **No Group** | User with no group membership | Review in-app |

## Table Columns

| Column | Description |
|---|---|
| **Account Id** | Atlassian account identifier |
| **User** | Display name |
| **Groups** | Group memberships |
| **Last activity** | Most recent audit log event date |
| **Projects** | Number of projects the user has admin access to |
| **Joined** | Account creation date |
| **Pulse Summary** | Risk classification badge |
| **Action** | Available remediation action |

## Filter Tabs

Use the **Inactive Admins / Over-permissioned / Ghost Accounts / No group / All groups** tabs to focus on specific risk categories. Search by name, email, account ID, or group.

> **Note:** User deactivation cannot be executed directly via the Jira REST API on Jira Cloud. Pulse AI shows a direct link to the **Atlassian Admin Console** (admin.atlassian.com) where deactivation must be performed.

## Ask Permission Auditor

The Mini Agent FAB opens the Permission Auditor, scoped to user and access data. Example:

- "Who are our inactive admins and when did they last log in?"
- "List all ghost accounts that have never been active."
- "Which users have admin access to more than 10 projects?"
`,
        },
        {
          slug: "groups",
          title: "Groups",
          content: `
Navigate to **Governance → Groups** for Jira group directory hygiene auditing.

<img
  src="/images/pulse-ai/groups.png"
  alt="Groups Directory"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Total Groups** | All Jira groups synced, including system groups. |
| **Empty Groups** | Groups with zero members. Candidates for deletion - they serve no access-control purpose. |
| **Unreferenced** | Groups not referenced in any permission, notification, or work item security scheme. |

## Table Columns

| Column | Description |
|---|---|
| **#** | Row number |
| **Id** | Internal Jira group identifier |
| **Group Name** | Display name of the group |
| **Members** | Current member count |
| **Pulse Summary** | Clean, Empty, or Unreferenced |
| **Action** | Delete (where applicable) |

## Filter Tabs

Use **All / Empty / Unreferenced** to focus on cleanup candidates. Search by group name.

## Deleting Groups

The Delete action is available for groups where Jira's backend marks the group as deletable.

> **Note:** Jira system groups (e.g., jira-administrators, jira-software-users) cannot be deleted. Pulse AI will not surface a Delete action for these groups.

## Ask Group Agent

The Mini Agent FAB opens a Groups-scoped agent. Example prompts:

- "List all empty groups that are safe to delete."
- "Which groups are unreferenced and serve no access-control purpose?"
- "How many groups do we have in total vs. how many are actively used?"
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. WORKFLOWS & SCHEMES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "workflows-and-schemes",
      title: "Workflows & Schemes",
      articles: [
        {
          slug: "workflows",
          title: "Workflows",
          content: `
Navigate to **Workflows & Schemes → Workflows**.

<img
  src="/images/pulse-ai/workflows.png"
  alt="Workflows"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

Jira's workflow layer is one of the most common sources of configuration debt. Unused, duplicate, and dead-end workflows accumulate over time and directly impact the Governance dimension of the Pulse Score.

## Summary Cards

| Card | Description |
|---|---|
| **Total Workflows** | All workflows (active + inactive). Active vs. unused counts shown below. |
| **Unused Workflows** | Workflows not assigned to any project via a scheme. Primary cleanup target. |
| **Workflow Dead-Ends** | Workflows with at least one status that has no outgoing transitions. Tickets in that status can never be moved forward. |
| **Duplicates** | Workflows grouped by identical transition/status signature. |

## Table Columns

| Column | Description |
|---|---|
| **ID** | Internal Jira workflow ID |
| **Workflow Name** | Display name |
| **Statuses** | Number of statuses in this workflow |
| **Transitions** | Number of transitions |
| **Active Projects** | Number of projects using this workflow via a scheme |
| **Last Modified** | Date last edited |
| **Pulse Summary** | Clean, Unused, Dead-end, Duplicate, or combination |
| **Action** | Delete (bin icon) where applicable |

## Filter Tabs

Use **All / Unused / Dead-ends / Duplicates** to focus your cleanup work. Search by workflow name.

> **Note:** A workflow is flagged as stale when it has zero project assignments AND was last edited ≥ 90 days ago.

## Ask Workflow Optimizer

The Mini Agent FAB opens the Workflow Optimizer agent. Example prompts:

- "Which workflows have dead-end statuses and what are the affected statuses?"
- "List all unused workflows that are safe to delete."
- "Show me duplicate workflows and explain what makes them duplicates."
`,
        },
        {
          slug: "workflow-schemes",
          title: "Workflow Schemes",
          content: `
Navigate to **Workflows & Schemes → Workflow Schemes**. Workflow schemes map workflows to work types (issue types) within a project.

<img
  src="/images/pulse-ai/schemes.png"
  alt="Workflow Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Workflow Schemes** | Total synced workflow schemes for this org. |
| **Orphaned Schemes** | projectCount = 0 - no project references this scheme. Safe to delete. |
| **Duplicates** | Same work-type–workflow signature as another scheme. |

## Table Columns

| Column | Description |
|---|---|
| **Scheme Name** | Display name |
| **Projects** | Number of projects using this scheme |
| **Work Type Mappings** | Number of issue type → workflow mappings |
| **Pulse Summary** | Active, Orphaned, or Duplicate |
| **Action** | Delete (bin icon) where applicable |

## Ask Scheme Simplifier

Use the **Ask Scheme Simplifier** FAB for an AI-generated consolidation plan. Example prompts:

- "Generate a consolidation plan for our duplicate workflow schemes."
- "Which orphaned schemes can I safely delete?"
`,
        },
        {
          slug: "permission-schemes",
          title: "Permission Schemes",
          content: `
Navigate to **Workflows & Schemes → Permission Schemes**. Permission schemes define who can do what within a project.

<img
  src="/images/pulse-ai/permission%20schemes.png"
  alt="Permission Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Permission Schemes** | Total synced permission schemes. |
| **Orphaned** | projectCount = 0 - not assigned to any project. |
| **Duplicates** | Same grant signature as another scheme. |

## Table Columns

| Column | Description |
|---|---|
| **Scheme Name** | Display name |
| **Projects** | Number of projects using this scheme |
| **Type** | company-managed or team-managed |
| **Grants** | Total permission grants defined |
| **Pulse Summary** | Active, Duplicate, or Not assigned to any project |
| **Action** | Delete (bin icon) where applicable |

> **Note:** The Default Permission Scheme and Default Software Scheme cannot be deleted from Jira. Pulse AI will not surface a Delete action for these.
`,
        },
        {
          slug: "notification-schemes",
          title: "Notification Schemes",
          content: `
Navigate to **Workflows & Schemes → Notification Schemes**. Notification schemes control which events trigger email notifications and to whom.

<img
  src="/images/pulse-ai/NotificationSchemes.png"
  alt="Notification Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Notification Schemes** | Total synced notification schemes. |
| **Orphaned** | projectCount = 0 - not referenced by any project. |
| **Duplicates** | Same event-rule signature as another scheme. Schemes with the same 16-event rule set are flagged. |

## Table Columns

| Column | Description |
|---|---|
| **Scheme Name** | Display name |
| **Projects** | Number of projects using this scheme |
| **Type** | company-managed |
| **Events Configured** | Total notification event rules |
| **Pulse Summary** | Active or Duplicate |
| **Action** | - (review manually) |
`,
        },
        {
          slug: "work-item-security-schemes",
          title: "Work Item Security Schemes",
          content: `
Navigate to **Workflows & Schemes → Work Item Security Schemes**. Issue security schemes restrict visibility of individual issues to specific users or groups.

<img
  src="/images/pulse-ai/securitySchemes.png"
  alt="Work Item Security Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Work Item Security Schemes** | Total synced issue security schemes. |
| **Orphaned** | projectCount = 0 - not referenced by any project. |
| **Single Level Only** | Schemes with ≤ 1 security level. |

## Table Columns

| Column | Description |
|---|---|
| **Scheme Name** | Display name |
| **Projects** | Number of projects using this scheme |
| **Type** | company-managed |
| **Security Levels** | Number of security levels configured |
| **Pulse Summary** | Active or Single-level |
| **Action** | - (review manually) |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. CONFIGURATION
    // ═══════════════════════════════════════════════════════════════
    {
      id: "configuration",
      title: "Configuration",
      articles: [
        {
          slug: "configuration-overview",
          title: "Configuration Overview",
          content: `
The Configuration section covers the full Jira configuration layer: custom fields, field configuration schemes, work types, screens, screen schemes, and global config. The majority of Critical findings typically originate here - especially from unused custom fields.

## Sub-sections

| Sub-section | What It Audits |
|---|---|
| **Custom Fields** | Unused fields, duplicates, global context bloat |
| **Field Configuration Schemes** | Orphaned schemes not assigned to any project |
| **Work Types & Schemes** | Unused issue types, scheme orphans and duplicates |
| **Screens & Screen Schemes** | Orphaned screens, duplicate screens, orphaned screen schemes |
| **Global Config** | Statuses, priorities, resolutions, saved filters |

## Configuration Dimension Score

The Configuration dimension (10% weight) deducts points for:

- Unused custom fields (Critical)
- Global context bloat - custom fields with global context used in fewer than 2 projects (Medium)
- Orphaned screens and screen schemes (Medium)

Custom field bloat is one of the most common Jira configuration problems. Every unused global-context field adds overhead to every Jira issue screen and API payload.
`,
        },
        {
          slug: "custom-fields",
          title: "Custom Fields",
          content: `
Navigate to **Configuration → Custom Fields**.

<img
  src="/images/pulse-ai/customFields.png"
  alt="Custom Fields"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Total Custom Fields** | All custom fields synced (system fields excluded). |
| **Unused Fields** | Fields where zero issues have a value - primary cleanup target. |
| **Duplicates** | Fields with the same name and type pattern as another field. |
| **Global Context Bloat** | Global-context fields used in fewer than 2 projects. |

## Finding Severity

| Finding | Severity | Condition |
|---|---|---|
| **Unused** | Critical | Zero issues have a value in this field |
| **Duplicate** | High | Same name and type pattern as another field |
| **Global Context Bloat** | Medium | Global context but used in fewer than 2 projects |

## Table Columns

| Column | Description |
|---|---|
| **Field Name** | Display name |
| **Type** | Field type (text, number, date, array, etc.) |
| **Usage** | Number of issues with a value in this field |
| **Context** | Global or project-specific |
| **Projects** | Number of projects this field appears in |
| **Pulse Summary** | Clean, Unused, Global Context Bloat, or combination |
| **Action** | - (deletion handled via Mini Agent) |

## Custom Field Deletion

Custom field deletion via Pulse AI is a **soft-delete** - the field is moved to Jira's trash (recoverable for up to 60 days) rather than permanently deleted.

> **Note:** Always use the Ask Config Auditor Mini Agent before deleting custom fields. Some fields may be referenced in automation rules, dashboards, or board configurations not visible in this view.

## Ask Config Auditor

The Mini Agent FAB opens the Config Auditor. Example prompts:

- "Which custom fields are safe to delete?"
- "List all unused fields that have no value across any issue."
- "Show me all global-context fields that are only used in one project."
`,
        },
        {
          slug: "field-configuration-schemes",
          title: "Field Configuration Schemes",
          content: `
Navigate to **Configuration → Jira Field Configuration Schemes** (accessible under **Fields & Types**).

Field configuration schemes control which fields are required, optional, or hidden for different issue types within a project.

## Key Metrics

| Metric | Description |
|---|---|
| **Total Schemes** | All field configuration schemes synced |
| **Orphaned** | Schemes with zero projects assigned - safe to delete |

## Cleanup Guidance

Orphaned field configuration schemes are safe to delete. They add no value and clutter the Jira configuration layer. Use the Ask Config Auditor to generate a deletion plan before proceeding.
`,
        },
        {
          slug: "work-types-and-schemes",
          title: "Work Types & Work Type Schemes",
          content: `
Navigate to **Configuration → Fields & Types → Work Types** and **Work Type Schemes**.

## Work Types

Work Types shows all issue types (Task, Story, Bug, Epic, and custom types) with coverage and usage data.

<img
  src="/images/pulse-ai/worktypes.png"
  alt="Work Types"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

### Summary Cards

| Card | Description |
|---|---|
| **Total Work Types** | All issue types across all work type schemes |
| **Unused Types** | Issue types with zero issues ever created |
| **Req. / Config gaps** | Missing required fields or scheme gaps |

### Table Columns

| Column | Description |
|---|---|
| **Work Type** | Issue type name |
| **Type** | company-managed |
| **Issues** | Total issues ever created with this type |
| **Schemes Using** | Number of work type schemes using this type |
| **Req. Fields** | Required field coverage status |
| **Pulse Summary** | OK or Low coverage |

## Work Type Schemes

Work Type Schemes map issue types to projects.

<img
  src="/images/pulse-ai/worktypeSchemes.png"
  alt="Work Type Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

### Key Metrics

| Metric | Description |
|---|---|
| **Total Schemes** | All work type schemes synced |
| **Orphaned** | Schemes with zero projects assigned |
| **Duplicates** | Schemes with identical issue type signatures |
`,
        },
        {
          slug: "screens-and-screen-schemes",
          title: "Screens & Screen Schemes",
          content: `
Navigate to **Configuration → Fields & Types → Screens** and **Screen Schemes**.

Screens define which fields appear on issue creation, editing, and transition forms. Screen Schemes map screens to operations (Create, Edit, View) for each issue type.

## Screens

<img
  src="/images/pulse-ai/screen.png"
  alt="Screens"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

### Summary Cards

| Card | Description |
|---|---|
| **Total Screens** | All screens synced |
| **Orphaned** | Not used in any screen scheme |
| **Duplicates** | Flagged in index (same field configuration) |

### Finding Severity

| Finding | Severity |
|---|---|
| Duplicate screen | High |
| Orphaned screen | Medium |
| Orphaned scheme | Medium |

### Table Columns

| Column | Description |
|---|---|
| **Screen Name** | Display name |
| **Fields** | Number of fields on the screen |
| **Screen Schemes Using** | Number of screen schemes referencing this screen |
| **Pulse Summary** | Clean, Orphaned, or Duplicate |
| **Recommendation** | - |

## Screen Schemes

<img
  src="/images/pulse-ai/screenschemes.png"
  alt="Screen Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

### Summary Cards

| Card | Description |
|---|---|
| **Screen Schemes** | Total screen schemes synced |
| **Orphaned** | Not assigned to any issue type screen scheme |
| **Duplicates** | Same screen mappings as another scheme |

> **Note:** Screens cannot be deleted directly from within Pulse AI. Deletion must be performed by a Jira admin in Jira project settings.
`,
        },
        {
          slug: "global-config",
          title: "Global Config",
          content: `
Navigate to **Configuration → Global Config**. This section covers Jira instance-level configuration objects that apply globally across all projects.

## Sub-views

### Statuses

<img
  src="/images/pulse-ai/status.png"
  alt="Global Config - Statuses"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| Metric | Description |
|---|---|
| **Total Statuses** | All statuses across all workflows |
| **Orphaned** | Not used in any workflow |
| **Name Conflicts** | Same name, different category (e.g., two "Done" statuses in different categories) |

### Priorities

<img
  src="/images/pulse-ai/priority.png"
  alt="Global Config - Priorities"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| Metric | Description |
|---|---|
| **Total Priorities** | All priority levels defined |
| **Unused** | Zero issues ever used this priority |

> **Note:** Jira prevents deletion of any priority that has ever been used on any issue - past or present.

### Resolutions

<img
  src="/images/pulse-ai/Resolution.png"
  alt="Global Config - Resolutions"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| Pulse Summary | Severity | Condition |
|---|---|---|
| **Broken Workflow** | Critical | Resolution value used in a Done status but not configured in the workflow |
| **Overloaded** | High | More than 5 issues resolved with this value in a single status |
| **Unused** | Medium | Zero issues resolved with this value |

> **Data Quality Issue:** Issues in a Done status with no resolution value set breaks resolution-based reporting and velocity metrics.

### Filters

<img
  src="/images/pulse-ai/filters.png"
  alt="Global Config - Filters"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| Pulse Summary | Condition |
|---|---|
| **Valid** | JQL is valid, owner is active |
| **Invalid JQL** | Filter JQL silently fails - results may be empty or wrong |
| **Dead Owner** | Filter owned by a deactivated user |
| **Unused** | Not used on any board |

> **Tip:** Transfer ownership of filters with a dead owner before deleting the owner account. Use the Ask Config Auditor to identify which boards will break if a filter is deleted.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 7. SPRINTS & DELIVERY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sprints-and-delivery",
      title: "Sprints & Delivery",
      articles: [
        {
          slug: "sprints-overview",
          title: "Sprints & Delivery Overview",
          content: `
Navigate to **Delivery → Sprints & Delivery**. This view surfaces active sprint intelligence across all Scrum boards in the org. It is the primary tool for engineering managers and Scrum masters.

<img
  src="/images/pulse-ai/sprint%26Delivery.png"
  alt="Sprints and Delivery"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| Card | Description |
|---|---|
| **Active Sprints** | Total number of currently active sprints across all Scrum boards. |
| **Overcommitted** | Sprints where committed story points exceed 150% of the board's velocity baseline. |
| **Avg Carryover Rate** | Average percentage of incomplete issues carried from the previous sprint. > 20% indicates chronic overcommitment. |
| **Active Blockers** | Blocker-priority issues that are unresolved. Highest-impact delivery risks. |

## Sprint Cards

Each active sprint displays:

- **Sprint name and board**
- **Days remaining**
- **Story Points** - committed vs. completed
- **Planned items** - ticket count
- **Velocity** - historical baseline
- **Issues Done** - completed vs. total
- **Capacity utilisation bar** - visual indicator with percentage
- **Risk badge** - On track, Tight, AT RISK, or OVERCOMMITTED

## Filter Tabs

Use **All / Overcommitted / On track** to focus on specific risk categories. Search by sprint name, board ID, or project key. Export to CSV.
`,
        },
        {
          slug: "sprint-risk-thresholds",
          title: "Sprint Risk Thresholds",
          content: `
Pulse AI uses capacity utilisation percentage to classify each sprint's risk level.

## Risk Badge Reference

| Badge | Utilisation % | Colour | Recommended Action |
|---|---|---|---|
| **On track** | < 100% | Teal | No action needed. |
| **Tight** | 100 – 114% | Amber | Monitor daily. Consider deferring lower-priority items. |
| **AT RISK** | 115 – 149% | Amber | Scope reduction recommended. Review blockers immediately. |
| **OVERCOMMITTED** | ≥ 150% | Red | Immediate scope reduction. Use Ask Sprint Intelligence to generate a deferral list. |

## Velocity Baseline

The velocity baseline is calculated from the board's last 3 completed sprints. If fewer than 3 sprints are available, Pulse AI uses the available history.

**Capacity utilisation = (Committed story points ÷ Velocity baseline) × 100**

## Carryover Rate

**Carryover rate = (Incomplete issues from previous sprint ÷ Total issues in previous sprint) × 100**

A carryover rate above 20% across multiple sprints indicates systematic overcommitment. Use the Ask Sprint Intelligence agent to identify the recurring items that are never completing.

## Active Blockers

Blocker-priority unresolved issues are flagged across all active sprints. These represent the highest-impact delivery risks. The count shown in the summary card links directly to a filtered view of all active blockers.
`,
        },
        {
          slug: "ask-sprint-intelligence",
          title: "Ask Sprint Intelligence",
          content: `
The **Ask Sprint Intelligence** button (bottom-right FAB) opens the Sprint Intelligence AI assistant with context of all active and recently closed sprints.

## Example Prompts

- "Which stories in the current sprint are at risk of not completing?"
- "Generate a JQL filter for all overdue items in the current sprint."
- "Show me the top 5 stories to defer from the overcommitted sprint to reduce load below 115%."
- "What is the average carryover rate across all boards over the last 3 sprints?"
- "List all active blockers and which sprint they are blocking."
- "Which team has the highest carryover rate this sprint?"

## What Sprint Intelligence Can Do

- Read and reason about sprint data from the last sync
- Generate JQL queries based on natural language requests
- Identify stories most likely to be deferred (based on priority, size, and assignee capacity)
- Summarise delivery risk across all boards in plain English
- Produce deferral recommendation lists for overcommitted sprints

## What Sprint Intelligence Cannot Do

Sprint Intelligence can read and reason about sprint data and generate JQL queries. It **cannot** move issues between sprints directly - those decisions require business context. Admins must execute moves manually in Jira.

> **Note:** Sprint Intelligence generates JQL queries but does not execute searches automatically. Copy the generated JQL and paste it into the Jira Issue Navigator to see live results.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. AI & AGENTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "ai-and-agents",
      title: "AI & Agents",
      articles: [
        {
          slug: "advance-agents-panel",
          title: "Advance Agents Panel",
          content: `
Navigate to **AI & Agents → Advance Agents** to see all available standalone agent modules. These are independently licensed apps that integrate with Pulse AI findings.

<img
  src="/images/pulse-ai/agents.png"
  alt="Advance Agents Panel"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Available Agents

| Agent | What It Does | Pricing |
|---|---|---|
| **WorkflowAI for Jira** | AI-powered workflow authoring: generate complete workflow definitions from plain English, validate against Jira schema, version history with rollback. | $250/mo · $2,500/yr |
| **OnboardAI for Jira** | Automates new-team-member onboarding: 30/60/90-day plans, auto-creates milestone issues, Confluence space linking, manager progress dashboard. | $150/mo · $1,500/yr |
| **AutomateIQ for Jira** | Full automation rule lifecycle management: generate rules from plain English, pre-fill Jira's native editor, detect and surface misfiring rules. | $200/mo · $2,000/yr |
| **Reporting for Jira** | Executive and engineering analytics: KPIs, velocity trends, sprint analytics, technical debt tracking, delivery timelines. Exports to PDF and CSV. | $180/mo · $1,800/yr |

> **Note:** All four agents currently display **Coming soon** status. Contact [support.clovity.com](https://support.clovity.com) to arrange early access.

## Integration with Pulse AI

Advance agents integrate with Pulse AI findings - for example, WorkflowAI appears as an action button on workflow findings, and AutomateIQ surfaces on automation-related alerts. Billing and lifecycle management for each agent are handled separately via the Atlassian Marketplace vendor page.
`,
        },
        {
          slug: "active-subscriptions",
          title: "Active Subscriptions",
          content: `
Once an agent module is licensed and activated, it appears under **Active Subscriptions** in the sidebar. Each active agent adds contextual action buttons throughout the app.

## Managing Subscriptions

Subscription management is handled via the Atlassian Marketplace vendor page. To activate an agent:

1. Visit the Clovity vendor page on the Atlassian Marketplace
2. Select the agent module you want to subscribe to
3. Complete the purchase flow
4. Return to Pulse AI - the agent will appear under Active Subscriptions within a few minutes

## What Changes When an Agent is Active

- The agent's name appears in the **Active Subscriptions** section of the left sidebar
- Contextual action buttons for that agent appear on relevant findings throughout Pulse AI
- The agent's dedicated view becomes accessible from the sidebar

## Deactivating a Subscription

To deactivate, manage the subscription directly on the Atlassian Marketplace. After deactivation, the agent's buttons and views are removed from Pulse AI automatically.
`,
        },
        {
          slug: "reporting-agents",
          title: "Reporting Agents",
          content: `
Navigate to **AI & Agents → Reporting Agents** (only visible when the **Reporting for Jira** add-on is installed and active). Provides executive and engineering analytics drawn from the same data warehouse that powers the Pulse Score.

## Report Tabs

| Report Tab | What It Shows |
|---|---|
| **Overview KPIs** | Delivery rate, cycle time, throughput, SLA compliance. |
| **Team Performance** | Velocity, story point accuracy, sprint commitment vs. completion. |
| **Sprint Analytics** | Velocity charts, burndown alignment, backlog growth. |
| **Technical Debt** | Open bug age, defect trends. |
| **Timesheets** | Logged effort distribution. |
| **Delivery Timelines** | Milestone tracking, release readiness. |

> **Note:** The Reporting Agents view is not visible until the Reporting for Jira add-on is installed via the Marketplace. Contact Clovity to arrange early access.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. USE CASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "use-cases",
      title: "Use Cases",
      articles: [
        {
          slug: "jira-admin-governance-cleanup",
          title: "Jira Admin: Instance Governance Cleanup",
          content: `
This use case walks a Jira administrator through using Pulse AI to identify and remediate the most common sources of configuration debt in a Jira Cloud instance.

## Scenario

A growing software company's Jira instance has been active for 3 years. The admin suspects there are dozens of unused custom fields, orphaned workflows, and stale projects - but has no easy way to quantify or prioritise the cleanup.

## Steps

### 1. Run a Full Scan
Open Pulse AI and click **Run Scan** in the top bar. Wait 30–90 seconds for the sync to complete.

### 2. Review the Dashboard Pulse Score
On the Dashboard, check the Governance and Configuration dimension scores. Low scores in these areas confirm configuration debt.

### 3. Address Critical Custom Field Findings
Navigate to **Configuration → Custom Fields**. Filter by **Unused** tab.

Ask the Config Auditor Mini Agent:
> "Which unused custom fields are safe to delete and will have the highest impact on the Pulse Score?"

Review the Action Card and confirm deletion for safe candidates. Unused fields are soft-deleted (recoverable for 60 days).

### 4. Clean Up Orphaned Workflows
Navigate to **Workflows & Schemes → Workflows**. Filter by **Unused** tab.

Ask the Workflow Optimizer:
> "List all unused workflows not assigned to any project that were last edited over 90 days ago."

Delete confirmed candidates via the Action Card.

### 5. Fix Stale Projects with No Lead
Navigate to **Governance → Projects**. Filter by **Stale Backlog**.

For each stale project:
- If genuinely inactive: use the **Archive** action via the Action Card
- If active but missing a lead: use the **Ask Project Agent** to identify the right owner and assign them in Jira

### 6. Re-run the Scan
Click **Run Scan** to recalculate the Pulse Score. The delta indicator will show the improvement.

## Expected Outcome

- Pulse Score improvement of 5–15 points depending on the volume of unused fields and orphaned objects
- Reduced Jira API payload size from fewer global custom fields
- Cleaner governance dimension score

## Time Required

ESTIMATE: 1–2 hours for an instance with 50–200 projects and moderate configuration debt.
`,
        },
        {
          slug: "engineering-manager-sprint-health",
          title: "Engineering Manager: Sprint Health Monitoring",
          content: `
This use case shows an engineering manager how to use Pulse AI to monitor sprint health across multiple Scrum teams and take action on overcommitted sprints before they derail delivery.

## Scenario

An engineering manager oversees three Scrum teams running parallel sprints. In the past, sprints regularly finished with carryover above 25%. The manager wants a single view across all active sprints and early warning when a sprint is at risk.

## Steps

### 1. Open Sprints & Delivery
Navigate to **Delivery → Sprints & Delivery**. Review the summary cards at the top:

- How many active sprints?
- Are any flagged as OVERCOMMITTED?
- What is the average carryover rate?
- How many active blockers exist?

### 2. Identify Overcommitted Sprints
Filter the sprint list by **Overcommitted** tab. For each overcommitted sprint:

- Review the capacity utilisation bar and story point breakdown
- Note the **Velocity** baseline vs. committed points

### 3. Ask Sprint Intelligence for a Deferral Plan
Click the **Ask Sprint Intelligence** FAB and prompt:

> "Show me the top 5 stories to defer from [Sprint Name] to reduce capacity utilisation below 115%. Prioritise by lowest business value and highest story point count."

Sprint Intelligence returns a ranked deferral list with JQL to locate those issues.

### 4. Review Active Blockers
Back on the summary cards, click **Active Blockers** to see all unresolved blocker issues. Share the list with team leads for immediate resolution planning.

### 5. Monitor Carryover Trends
Use the Ask Sprint Intelligence agent:

> "What is the carryover rate for each of our Scrum boards over the last 3 sprints?"

This identifies which teams have chronic overcommitment vs. one-off incidents.

### 6. Set Up Auto-Sync
Navigate to **Settings → Scan Schedule** and configure daily auto-sync so the Sprints & Delivery view stays current without manual scans.

## Expected Outcome

- Clear visibility into which sprints are at risk before end-of-sprint panic
- Data-driven deferral decisions backed by velocity history
- Reduced carryover rate over 2–3 sprints as teams right-size commitments

## Key Metrics to Track

- Average carryover rate (target: < 15%)
- OVERCOMMITTED sprint count (target: 0)
- Active blocker count (target: 0 at sprint midpoint)
`,
        },
        {
          slug: "security-team-access-audit",
          title: "IT / Security Team: Access Risk Audit",
          content: `
This use case guides an IT or security team through using Pulse AI to identify and remediate access hygiene risks in a Jira Cloud org.

## Scenario

Following a security review, the IT team needs to audit all Jira admin accounts, identify ghost accounts, and reduce overpermissioning risk. The team has no existing tooling to do this systematically.

## Steps

### 1. Run a Full Scan
Open Pulse AI and click **Run Scan**. Wait for completion.

### 2. Navigate to Users & Permissions
Go to **Governance → Users & Permissions**. Review the summary cards:

- How many **Inactive Admins** exist (no activity for 60+ days)?
- How many **Ghost Accounts** (never logged an audit event)?
- How many **Over-permissioned** users (admin on 15+ projects)?

### 3. Address Inactive Admins
Filter by **Inactive Admins** tab. For each inactive admin:

- Review when they last had activity
- Use the **Remove Group** action to remove their admin group membership (requires admin confirmation via Action Card)

### 4. Handle Ghost Accounts
Filter by **Ghost Accounts** tab. Ghost accounts have never generated an audit log event - they may be service accounts, test accounts, or onboarding accounts that were never used.

- Click the **Link to Atlassian Admin Console** action to open the account in admin.atlassian.com for deactivation

> **Note:** User deactivation must be performed in the Atlassian Admin Console (admin.atlassian.com) - it cannot be done directly via Jira REST API.

### 5. Review Over-permissioned Users
Filter by **Over-permissioned** tab. Users with admin access to 15+ projects represent a significant access risk surface.

Ask the Permission Auditor:
> "List all users who are admin on more than 10 projects and have not logged in for the last 30 days."

Work with project leads to reassign project admin roles to active team members where appropriate.

### 6. Check Users With No Group
Filter by **No group** tab. Users with no group membership may have been granted project roles directly - bypassing access control governance.

### 7. Re-run Scan and Report
After remediation, run a new scan and compare the Security dimension score. Export the findings via **Export CSV** for compliance reporting.

## Expected Outcome

- Measurable reduction in access risk surface
- Security Pulse Score improvement
- Documented audit trail in Settings → Action Log for compliance evidence
`,
        },
        {
          slug: "executive-stakeholder-reporting",
          title: "Executive Stakeholder: Jira Health Reporting",
          content: `
This use case shows how an executive stakeholder or PMO lead uses Pulse AI's Dashboard and Reporting capabilities to track Jira instance health over time without needing deep Jira knowledge.

## Scenario

A VP of Engineering wants a monthly summary of Jira governance health, sprint delivery performance, and outstanding configuration risks to present to the CTO. Currently this requires manual effort from the Jira admin team.

## Steps

### 1. Review the Org Pulse Score
Open Pulse AI → Dashboard. The Pulse Score provides an instant health summary:

- **85–100 (Excellent):** Instance is well-maintained
- **70–84 (Good):** Minor issues to address
- **40–69 (Fair):** Prioritised remediation needed
- **0–39 (Poor):** Structural cleanup required

Note the score delta (change since last scan) to show trend direction.

### 2. Review Per-Dimension Scores
The five dimension scores (Governance, Delivery, Quality, Security, Configuration) identify where the most risk is concentrated. Share these with the relevant team owners.

### 3. Export Critical Findings
On the Top Findings Table, filter by **Critical** and click **Export PDF**. This generates a shareable report of the most urgent issues.

### 4. Use Ask Pulse AI for an Executive Summary
Click the **Ask Pulse AI** FAB and prompt:

> "Give me a 5-bullet executive summary of our current Jira instance health, the top 3 risks, and what is being done about them."

The response is immediately shareable in a leadership update.

### 5. Review Sprint Delivery Metrics (with Reporting Add-on)
If the Reporting for Jira add-on is active, navigate to **AI & Agents → Reporting Agents** for:

- Delivery rate and cycle time
- Velocity trends across teams
- Sprint commitment vs. completion ratios
- Technical debt trend

### 6. Set Up Scheduled Reports
With the Reporting for Jira add-on, configure scheduled email reports to send the Pulse Score summary and key KPIs to stakeholders automatically on a weekly or monthly cadence.

## Expected Outcome

- Executive-ready Jira health summary in under 10 minutes
- Consistent, data-driven narrative for leadership reporting
- Accountability structure for dimension-level score ownership
`,
        },
        {
          slug: "clovity-consultant-onboarding",
          title: "Clovity Consultant: Client Instance Health Assessment",
          content: `
This use case guides Clovity consultants through using Pulse AI to perform a rapid Jira instance health assessment for a new or existing client.

## Scenario

A Clovity engagement team is beginning a Jira governance and optimisation project for a client. The first deliverable is an instance health assessment report to baseline current state and prioritise remediation work.

## Steps

### 1. Install and Authorise
Work with the client's Jira site admin to install Pulse AI and complete the OAuth authorisation flow. See the Installation & Setup article for step-by-step guidance.

### 2. Run the First Full Scan
Click **Run Scan** and wait for completion. For large orgs (500+ projects), this may take up to 3–5 minutes.

### 3. Capture the Baseline Pulse Score
Record:
- Overall Pulse Score and label (Excellent / Good / Fair / Poor)
- Per-dimension scores (Governance, Delivery, Quality, Security, Configuration)
- Finding counts by severity (Critical / High / Medium)

### 4. Export the Findings Table
Filter to **Critical** and **High** findings, then **Export PDF**. This forms the evidence base for the assessment report.

### 5. Assess Each Section

| Section | What to Look For |
|---|---|
| **Governance → Projects** | Stale projects, missing leads, inactive project portfolios |
| **Governance → Users & Permissions** | Inactive admins, ghost accounts, overpermissioning |
| **Configuration → Custom Fields** | Volume of unused fields, global context bloat |
| **Workflows & Schemes → Workflows** | Unused and dead-end workflows |
| **Delivery → Sprints** | Overcommitted sprints, chronic carryover |

### 6. Use Mini Agents for Depth

On each report, use the Mini Agent to ask deeper questions:
> "Summarise the top 3 issues in this section and their estimated remediation effort."

### 7. Build the Assessment Report

Structure the output:
- Pulse Score summary (baseline)
- Dimension-by-dimension risk breakdown
- Top 10 Critical findings with recommended actions
- Remediation priority matrix (impact vs. effort)
- Proposed sprint plan for remediation work

### 8. Re-scan After Remediation

After the client team completes remediation items, run a new scan to show score improvement. Track delta as a delivery KPI for the engagement.

## Deliverable Template

| Section | Content Source |
|---|---|
| Executive Summary | Ask Pulse AI: "Give me a 5-bullet health summary" |
| Baseline Scores | Dashboard screenshot + dimension breakdown |
| Critical Findings | Exported PDF from Top Findings Table |
| Recommendations | Mini Agent outputs per section |
| Remediation Plan | Sprint-mapped action items by dimension |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 10. SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "settings",
      title: "Settings",
      articles: [
        {
          slug: "settings-overview",
          title: "Settings Overview",
          content: `
Navigate to **Settings** in the left sidebar. Settings is organised into six tabs that control app behaviour, scanning, and access.

<img
  src="/images/pulse-ai/settings.png"
  alt="Settings"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Settings Tabs

| Tab | Description |
|---|---|
| **General** | Displays the Jira instance name (read-only). |
| **Scan Schedule** | Current sync frequency, live sync status, scan retention, and the Run Now button. |
| **Agent Position** | Controls where the Mini Agent panel opens: Right Panel (default) or Bottom Drawer. |
| **Scoring Weights** | Enterprise only. Adjust five customisable dimension weights (must sum to 100%). |
| **Access Control** | Enterprise only. Displays who can view reports and who can run scans. |
| **Action Log** | Displays the last 10 actions recorded for the current user. Stored per user, never deleted. |

## Scan Schedule

Configure how frequently Pulse AI runs an automatic org sync:

- **Manual only** - only runs when you click Run Scan
- **Daily** - runs once per day at a configured time
- **Weekly** - runs once per week

**Scan retention** controls how many historical scan results are kept (for trend comparison in Reporting add-on).

> **Tip:** Set daily auto-sync for production instances to keep the Pulse Score current without manual intervention.

## Agent Position

Controls where the Mini Agent chat panel opens:

| Option | Description |
|---|---|
| **Right Panel** (default) | Agent panel slides in from the right side of the screen, alongside the table |
| **Bottom Drawer** | Agent panel opens as a drawer at the bottom of the screen, useful on narrower displays |

## Scoring Weights (Enterprise)

Enterprise plan admins can customise the deduction weights for each dimension. All five values must sum to 100%.

| Dimension | Default Weight | Adjustable Range |
|---|---|---|
| Governance | 25% | 0–100% |
| Delivery | 25% | 0–100% |
| Quality | 25% | 0–100% |
| Security | 15% | 0–100% |
| Configuration | 10% | 0–100% |

> **Note:** Scoring Weights is an Enterprise-only feature. The tab is only visible to site or org administrators on an Enterprise plan.

## Action Log

The Action Log records every write action confirmed by the current user. It stores:

- Action type (Delete, Archive, Remove Group, etc.)
- Target item (workflow name, custom field, user, etc.)
- Timestamp
- Outcome (succeeded or failed)

The log displays the last 10 confirmed actions per user and is never deleted.

> **Note:** If the Action Log is empty, no write actions have been confirmed by the current user in this instance.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 11. RELEASE NOTES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "release-notes",
      title: "Release Notes",
      articles: [
        {
          slug: "release-notes-v5",
          title: "Release Notes - v5.x",
          content: `
## v5.1.0 - May 2026

**Release type:** Minor update

### What's New

- **Sprints & Delivery** - Added **Active Blockers** summary card to the Sprints & Delivery overview. Displays the count of all unresolved blocker-priority issues across every active Scrum sprint in the org, with a direct link to the filtered issue list. This is the highest-impact delivery risk indicator in the sprint view.
- **Governance → Users & Permissions** - **Ghost Account** detection now identifies accounts that have never generated an audit log event - giving admins a concrete, audit-backed definition of dormant accounts rather than relying on login timestamps alone.
- **Configuration → Custom Fields** - Global context bloat detection refined: custom fields with a global context that are used in fewer than 2 projects are now flagged to help admins identify fields that were intended for specific teams but were scoped too broadly.
- **Ask Pulse AI** - Write-action intent detection improved. When a natural language request matches multiple candidate items (e.g., asking to clean a workflow that appears in multiple schemes), the agent now asks a clarifying scope question before surfacing an Action Card - reducing the risk of unintended bulk actions.
- **Settings → Scan Schedule** - Scan retention is now configurable: 1 month, 3 months, or 6 months. Historical scan results within the retention window are used by the Reporting for Jira add-on for trend analysis and score delta charting.

### Bug Fixes

- Fixed an issue where the Pulse Score delta indicator displayed the wrong sign (positive vs. negative) immediately after completing an OAuth reconnect and re-running the first scan
- Resolved a layout issue where the Mini Agent floating action button overlapped table pagination controls on viewports narrower than 1280px
- Fixed Workflow Dead-Ends detection missing transitions that route through a Jira global transition group (transitions shared across multiple workflows)

---

## v5.0.0 - April 2026

**Release type:** Major release

### What's New

- **Governance → Groups** - New **Groups Directory** view audits all Jira groups in the org. Surfaces **Empty** groups (zero members) and **Unreferenced** groups (not referenced in any permission, notification, or work item security scheme) as cleanup candidates. Delete action available for eligible groups (system groups excluded).
- **Configuration → Global Config → Filters** - New **Filters** sub-view audits all saved Jira filters. Detects **Invalid JQL** (filter JQL that silently returns empty or wrong results), **Dead Owner** (filter owned by a deactivated account), and **Unused** filters (not attached to any board). Each finding links to the affected filter for direct remediation.
- **Sprints & Delivery** - **Ask Sprint Intelligence** AI agent launched. Scoped to active and recently closed sprint data. Supports natural language questions, JQL generation for overdue and at-risk items, deferral recommendation lists for overcommitted sprints, and carryover trend analysis across boards.
- **AI & Agents** - **Advance Agents** panel introduced under the AI & Agents sidebar section. Lists four independently licensed agent modules: **WorkflowAI for Jira**, **OnboardAI for Jira**, **AutomateIQ for Jira**, and **Reporting for Jira**. All four are currently in early access (Coming soon status). Contact Clovity to request access.
- **Settings → Action Log** - Full per-user audit trail of all write actions confirmed via Action Cards. Every action - succeeded or failed - is recorded with timestamp, action type, affected item, and outcome. Records are stored per user and never automatically deleted.
- **Settings → OAuth** - Re-authorisation flow redesigned. **Settings → General** now shows live connection status, last token refresh time, and a **Re-connect with Atlassian** button. Status indicators update in real time during the OAuth flow.

### Breaking Changes

- Forge runtime upgraded from Node.js 20.x to **Node.js 24.x**. Instances using a custom Forge deployment must update the runtime before upgrading to v5.0.0. Standard Atlassian Marketplace installations upgrade automatically.

---

## v4.x - Q1 2026

### v4.3.0

- Introduced **per-project Pulse Score** in Governance → Projects. Each project is scored 0–100 and colour-coded (green ≥ 80, amber 50–79, red < 50) based on governance signals: lead assignment, issue activity, backlog freshness, and open issue volume.
- Added **Stale Backlog** detection: projects where more than 30% of open issues have had no update in 90+ days are flagged in the Pulse Summary column and in a dedicated filter tab.
- Custom field deletion changed to **soft-delete**: deleted fields are moved to the Jira configuration trash and remain recoverable for 60 days before permanent removal.

### v4.2.0

- Added **Export PDF** to the Top Findings Table. Exports the currently filtered findings view (All / Critical / High, filtered by report module) as a formatted PDF report.
- Introduced **Score Delta** indicator on the Dashboard Pulse Score card. Shows the point change since the previous scan - positive delta means findings were resolved, negative delta means new findings were detected.
- Permission Schemes - **Duplicate detection** added. Schemes with an identical grant signature (same combination of roles, groups, and permission types) are flagged as duplicates regardless of display name.

### v4.1.0

- **Work Item Security Schemes** view added under Workflows & Schemes. Audits all issue security schemes - surfaces orphaned schemes not assigned to any project and duplicate schemes with matching security level configurations.
- Notification Schemes - **Duplicate detection** added. Schemes are compared against a 16-event rule set; schemes with identical notification mappings are flagged for consolidation.
- **Settings → Agent Position** toggle introduced. Admins can choose between **Right Panel** (default - slides in alongside the table) and **Bottom Drawer** (opens at the bottom of the screen, suited for narrower displays).

### v4.0.0

- Initial release of Pulse AI for Jira on the Atlassian Marketplace
- **Five-dimension Pulse Score** model launched: Governance (25%), Delivery (25%), Quality (25%), Security (15%), Configuration (10%)
- Core views launched: Dashboard, Governance (Projects, Users & Permissions), Workflows & Schemes, Configuration (Custom Fields, Fields & Types, Global Config), and Sprints & Delivery
- **Mini Agent FAB** introduced on all report views - a floating action button (bottom-right) that opens a conversational AI assistant scoped to the current report's live data
- **OAuth 2.0 (3-legged)** authorisation via Atlassian - all data access is scoped to your Atlassian tenancy and runs inside the Forge runtime
- **Action Card** confirmation flow introduced - every AI-initiated write action requires explicit admin confirmation before execution, with a pre-flight check against the live Jira API

---

## Roadmap

The following capabilities are planned for upcoming releases. Timelines are estimates and subject to change.

| Feature | Target Release |
|---|---|
| WorkflowAI for Jira GA | Q3 2026 |
| OnboardAI for Jira GA | Q3 2026 |
| AutomateIQ for Jira GA | Q4 2026 |
| Reporting for Jira GA | Q3 2026 |
| Jira Data Center support | Under evaluation |
| Slack / Teams Pulse Score alerts | Q4 2026 |
| Custom deduction rules engine | Q4 2026 |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 12. HELP CENTER
    // ═══════════════════════════════════════════════════════════════
    {
      id: "help-center",
      title: "Help Center",
      articles: [
        {
          slug: "troubleshooting",
          title: "Troubleshooting",
          content: `
## Common Issues & Resolutions

| Issue | Resolution |
|---|---|
| **Dashboard shows no data after OAuth** | Click **Run Scan**. Verify the OAuth status indicator shows "Connected". |
| **"Not authorised" error on write actions** | You do not have Administer Jira permission. Ask your site admin to grant it. |
| **Pulse Score not updated after fixing findings** | Score updates after the next sync. Click **Run Scan** to trigger immediately. |
| **Mini Agent panel not opening** | The FAB is not shown on Advance Agents, Reporting Agents, Settings, or Help views. |
| **Agent panel covering the table** | Switch panel mode in **Settings → Agent Position** to Bottom Drawer. |
| **Scoring Weights tab not visible** | Enterprise feature. Visible only to site or org administrators on an Enterprise plan. |
| **Action Log is empty** | Stores last 10 confirmed write actions per user. Empty if no write actions have been confirmed. |
| **Delete action not available** | Pulse AI uses the backend \`isDeletable\` field. Some Jira system objects cannot be deleted. |
| **Advance Agents show "Coming soon"** | Contact Clovity at support.clovity.com to arrange early access. |
| **Scan takes longer than expected** | For orgs with 500+ projects, syncs can take 3–5 minutes. Do not navigate away during the scan. |
| **OAuth token expired** | Navigate to **Settings → General** and click **Re-connect with Atlassian** to re-authorise. |
| **Reporting Agents view not visible** | The Reporting for Jira add-on must be installed and active. Contact Clovity for early access. |

## Permissions Reference

| Action | Required Permission |
|---|---|
| View all reports | Any Jira user |
| Run a scan | Any Jira user |
| Confirm write actions | Administer Jira (org admin) |
| Customise Scoring Weights | Site or org administrator |
| Install the app | Jira site administrator |

## Stale / Threshold Reference

| Entity | Stale Threshold |
|---|---|
| Workflow | Zero projects + last modified ≥ 90 days |
| Project activity | Last issue update ≥ 90 days |
| User inactivity | No audit log activity ≥ 60 days |
| Inactive Admin | Admin user with no activity ≥ ~65 days |
| Group (empty) | Zero members |
| Custom field (unused) | Zero issues with a value in this field |
| Custom field (global bloat) | Global context + used in < 2 projects |

## Write Action Categories

All write actions require admin permission and explicit Action Card confirmation.

| Category | Actions Available |
|---|---|
| **Users** | Remove Group |
| **Groups** | Delete · Deactivate · Clean Up (remove deactivated members) |
| **Projects** | Archive · Assign Lead |
| **Workflows** | Delete |
| **Schemes** | Delete (Workflow · Permission · Notification · Security) |
| **Custom Fields** | Delete (soft-delete to Jira trash) |
| **Screens** | Review & remove (via Jira admin - not in-app delete) |
| **Screen Schemes** | Delete |
| **Statuses** | Delete |
| **Filters** | Delete · Transfer ownership |
| **Issue Types** | Delete |
`,
        },
        {
          slug: "contact-support",
          title: "Help & Support",
          content: `
Pulse AI is partner-supported by Clovity - an Atlassian Platinum Solution Partner.

## Support Resources

| Resource | Description |
|---|---|
| **Documentation** | Full feature guides, API reference, Forge storage model, and setup walkthroughs - available in this Help Center |
| **Contact Support** | Raise a ticket at [support.clovity.com](https://support.clovity.com). Enterprise SLA: 4-hour initial response. |
| **Email** | [developers@clovity.com](mailto:developers@clovity.com) |
| **Video Tutorials** | Step-by-step setup, first scan, and feature walkthrough videos available on the Clovity YouTube channel |

## Enterprise SLA

For Enterprise plan customers, Clovity provides:

- **4-hour initial response** for all support tickets
- Dedicated Slack channel (upon request)
- Named technical account manager for onboarding and ongoing governance reviews

## Atlassian Marketplace

Pulse AI is available on the Atlassian Marketplace. For billing, trial extensions, and subscription management, visit the Clovity vendor page on the Marketplace.

## About Clovity

Clovity is an Atlassian Platinum Solution Partner and enterprise AI consulting firm. Pulse AI is one of several Forge-native Jira and Confluence apps built and maintained by Clovity's Atlassian practice.

Notable client deployments include federal and SLED organisations, healthcare systems, and enterprise technology companies.

## Feature Requests & Feedback

Submit feature requests and product feedback via the support portal at [support.clovity.com](https://support.clovity.com). The product roadmap is informed by customer feedback and partner input.
`,
        },
      ],
    },
  ],
};

export function getAllArticles(docs) {
  return docs.categories.flatMap((cat) =>
    cat.articles.map((article) => ({
      ...article,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  );
}

export function findArticle(docs, articleSlug) {
  for (const cat of docs.categories) {
    const article = cat.articles.find((a) => a.slug === articleSlug);
    if (article) return { article, category: cat };
  }
  return null;
}
