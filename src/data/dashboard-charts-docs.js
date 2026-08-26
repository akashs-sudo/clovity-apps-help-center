export const dashboardChartsDocs = {
  appSlug: "dashboard-charts-jira",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-dashboard-charts",
          title: "What is Dashboard Templates, Charts, Graphs & Reports for Jira?",
          sideVideo: {
            src: "https://www.youtube.com/embed/nQyLKWUAf6c",
            title: "Dashboard Templates, Charts, Graphs & Reports for Jira - Product Overview",
          },
          content: `
Dashboard Templates, Charts, Graphs & Reports for Jira is a reporting app that helps you **see your Jira data in a clear, visual way**.

## Core Value Proposition

- Make **charts and graphs** from your Jira issues with no coding required
- Build **tables and issue lists** with configurable columns, smart labels, and quick filters
- Create **interactive, configurable dashboards** for your team using a shared Dynamic Filter Controller
- Export everything as **PNG, PDF, or CSV** for stakeholders and reporting

All of this is done **inside Jira**, using your existing projects, filters, and JQL.

<!--VIDEO_BREAK-->

## Fourteen Integrated Gadgets

| **Gadget** | What It Does |
|---|---|
| **Custom Charts** | Create pie, bar, line, table, funnel, and tile charts from Jira issues; supports 10 chart types |
| **Issue List** | Display Jira issues in a configurable table with custom columns, smart labels, and quick filters |
| **Dynamic Filter Controller** | Create a shared filter bar that controls multiple charts and lists simultaneously |
| **Time in Status** | Analyze exactly how long issues spend in each workflow status using changelog-based calculations |
| **Pivot Table** | Summarize issues in a cross-tabulation with flexible row/column grouping and 9 display types |
| **Cumulative Flow Diagram** | Visualize work distribution across workflow stages over time as a stacked area chart |
| **WIP Aging Charts** | Scatter plot showing how long work-in-progress items have been active - spot stalled work instantly |
| **Control Chart** | Cycle time and lead time of completed work as a scatter chart, with average, rolling average, threshold, and percentile lines |
| **Histogram Chart** | Frequency distribution of cycle and lead time - shows the shape of your delivery and the size of the slow tail |
| **Cycle Time Trend** | One bar per interval showing average cycle time over weeks, months, or sprints, with an optional trendline |
| **WIP Run Chart** | Work-in-progress over time as a line chart, with WIP limits and breach highlighting |
| **Sprint Burndown & Burnup** | Sprint progress day by day - remaining, burned, scope, and ideal lines for both burndown and burnup |
| **Team Wallboard** | Work items as cards grouped into board columns or status categories, with swimlanes and auto-refresh |
| **Issue Filter Formula** | KPIs built from up to nine independently-scoped aggregations combined with math formulas; number, gauge, star, or card display |

### Choosing between the flow metrics gadgets

Five gadgets measure delivery speed. They answer different questions:

| **Question** | **Gadget** |
|---|---|
| How long does each finished item take, and how consistent is that? | Control Chart |
| What does the spread look like - is there a long slow tail? | Histogram Chart |
| Are we getting faster or slower over time? | Cycle Time Trend |
| How much work is open at once, and are we over our limits? | WIP Run Chart |
| Which open items are old right now? | WIP Aging Charts |

## Who Is It For?

- **Scrum Masters** who need sprint health charts, burndown views, and daily standup dashboards
- **Product Owners** who need backlog health, release readiness, and priority breakdowns
- **Engineering Managers** who need team workload charts and bug trend analysis
- **Executives** who need high-level KPI dashboards without digging into Jira
- **QA Leads** who need defect tracking and quality metrics at a glance

## Benefits & Outcomes

### Better Visibility
- See your Jira data at a glance with visual charts
- Spot trends, bottlenecks, and issues before they become problems
- Share insights with stakeholders who don't use Jira

### Save Time
- Build reports in minutes, not hours
- No coding or external tools required
- Reuse configurations across dashboards with Import/Export

### Make Better Decisions
- Data-driven insights for sprint planning
- Track progress against goals with reference lines
- Compare performance across teams, sprints, or time periods

## Platform

Jira Cloud only. Built on Atlassian Forge - no external servers, no data exports, no infrastructure to maintain.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `4 step-by-step tutorials covering every gadget - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/dashboard-charts-jira/what-is-dashboard-charts) first.`,
          videoGallery: {
            playlistUrl: "https://www.youtube.com/watch?v=ld8eGIIAGzo&list=PLACoCS_WiVwT9chp45LEQYuxXOcRkDAeC",
            videos: [
              { id: "ld8eGIIAGzo", title: "Dashboard Templates, Charts, Graphs & Reports for Jira - App Overview" },
              { id: "2QqeABXzzHI", title: "Custom Charts in Jira - Build the Right Chart for Better Insights" },
              { id: "xco2CqE_64o", title: "Jira Issue List Tutorial - Tables, Filters, Labels & Export Explained" },
              { id: "Q0NC8CoL5Do", title: "Jira Dynamic Filter Controller - Connect & Control Your Dashboard Like a Pro" },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
## Prerequisites

Before installing, confirm:

1. You are a **Jira Cloud site administrator** (required to install Marketplace apps)
2. Your Jira instance is **Jira Cloud** - this app does not support Server or Data Center
3. You have access to the **Atlassian Marketplace** from your Jira instance

## Installation Steps

1. Go to **[marketplace.atlassian.com](https://marketplace.atlassian.com)** and search for **["Dashboard Templates Charts Graphs Reports Clovity"](https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira)**
2. On the app listing, confirm **Hosting → Cloud** is supported
3. Click **Try it free** (30-day trial) or **Buy now**
4. Select your **Atlassian Cloud site** when prompted
5. Choose **Jira** as the product
6. Review the permissions the app requires and click **Accept** to proceed
7. The app installs automatically - no restart required

## Verify Installation

After installation:

1. Open any Jira **Dashboard** (or create a new one)
2. Click **Add gadget** (pencil/edit mode)
3. Search for **"Custom Charts"** or **"Issue List"** or **"Dynamic Filter Controller"**
4. The gadgets should appear in the search results

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| **Step** | Where | What to Do |
|---|---|---|
| **1. Open Admin Settings** | Apps → Custom Charts → Admin | Review global defaults for export, number format, date format |
| **2. Configure export access** | Admin → Customization Options | Enable or disable PNG/PDF/CSV export for all users |
| **3. Set data source rules** | Admin → Data Sources | Control whether users can use Projects, Saved Filters, JQL, or Controller |
| **4. Enable/disable features** | Admin → Features | Toggle Issue List, Custom Chart, Dynamic Filter Controller, and Templates on or off |
| **5. Create a test dashboard** | Jira → Dashboards → Create | Add one of each gadget to verify everything works |

## Jira Permissions Required for Installation

The app requests the following permissions during Marketplace install:

| **Permission** | Why It's Needed |
|---|---|
| **read:jira-work** | Read issues, projects, and filters for charts and tables |
| **write:jira-work** | Save gadget configurations |
| **read:jira-user** | Display user information (assignees, reporters) in Issue List |
| **read:dashboard:jira** | Access dashboard gadgets |
| **write:dashboard:jira** | Save and update gadget configurations |
| **storage:app** | Store gadget configurations in Forge KVS |

## Uninstalling

To uninstall: Go to **admin.atlassian.com** → **Apps** → **Manage Apps** → click the app name → **Uninstall**. All app-stored configurations (gadget setups, saved templates) will be permanently deleted. Jira issues and projects are unaffected.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Get up and running with your first Jira dashboard chart in under 5 minutes.

![Quick Start Guide](/images/dashboard-charts/quick-start-guide.png)

## Step 1 - Open or Create a Dashboard

1. In Jira, click **Dashboards** in the top navigation bar
2. Select an existing dashboard, or click **Create dashboard** to make a new one
3. Click the **Edit** button (pencil icon) to enter edit mode

## Step 2 - Add Your First Chart

1. Click **Add gadget** (top-right area of the dashboard)
2. In the gadget gallery search, type **"Custom Charts"**
3. Click **Add** - the gadget appears on your dashboard in configuration mode

## Step 3 - Set a Data Source

In the left panel of the configuration screen:

1. Select **Projects** as the source type
2. Search for and select a Jira project you have access to
3. The issue count updates to show how many issues are included

## Step 4 - Choose a Chart Type

1. Click the **Chart Type** tab in the right panel
2. Select **Pie Chart** (a great starting point)
3. In the **Chart By** tab, select **Status** from the field dropdown
4. Watch the **Live Preview** in the center panel update instantly

## Step 5 - Save the Gadget

1. Click **Save gadget** at the bottom of the configuration screen
2. Your pie chart showing issue status distribution is now live on the dashboard

## Step 6 - Add an Issue List (Optional)

1. Click **Add gadget** again
2. Search for **"Issue List"**
3. Set the same project as the data source
4. Add columns: Key, Summary, Status, Assignee, Priority
5. Click **Save gadget**

## Step 7 - Add a Dynamic Filter Controller (Optional)

To make your dashboard interactive:

1. Add the **Dynamic Filter Controller** gadget
2. Set the same project as the base data source
3. Add filter fields: Status, Assignee, Sprint
4. Note the **Reference ID** shown after saving
5. Edit your chart gadget → change Data Source to **Dynamic Filter Controller** → select the controller
6. Now the filter bar controls your chart in real time

## What's Next?

- Explore the **Chart Types Guide** for all 10 chart types
- Try **Templates** to start from a ready-made chart configuration
- Learn about **Smart Labels** for visual indicators in Issue List
- Set up **Tabs** in the Dynamic Filter Controller for preset views`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## How Access Works

Dashboard Templates, Charts, Graphs & Reports for Jira does not have its own user role system. Access is governed entirely by **Jira's existing permissions**:

| **Access Level** | How It's Determined | What Users Can Do |
|---|---|---|
| **Dashboard Owner / Editor** | Jira dashboard share permissions | Add, edit, and remove gadgets; save configurations |
| **Dashboard Viewer** | Jira dashboard share permissions | View gadget data; use Dynamic Filter Controller filters |
| **Jira Admin** | Jira site admin or project admin role | Access Admin Settings; enable/disable features and data sources |

## Jira Dashboard Permissions

Gadget access is tied to Jira dashboard permissions:

| **Permission** | Who Sets It | Effect |
|---|---|---|
| **Owner** | Dashboard creator | Full edit access |
| **Can Edit** | Dashboard owner shares with individuals or groups | Can add/edit/remove gadgets |
| **Can View** | Dashboard owner shares with individuals or groups | View-only; can interact with filters but not edit gadgets |

To share a dashboard: open the dashboard → click **Actions (•••)** → **Share** → add users or groups.

## Data Access (What Charts Can Show)

Charts and tables only show **Jira data the current user can see**. If a user does not have "Browse Projects" permission for a project, issues from that project will not appear in their charts - even if the gadget is configured with that project as a source.

This means:
- Sensitive projects are automatically excluded for users without access
- No special configuration is needed to enforce data security
- Jira's native permissions are the single source of truth

## Admin Settings Access

Admin Settings are only accessible to **Jira site administrators** or **project administrators**. Regular users cannot change global export settings, feature toggles, or data source restrictions.

To open Admin Settings:
1. Log in as a Jira administrator
2. Go to Apps in the top navigation
3. Open the Custom Charts & Dashboards app
4. Click the **Admin** page

## How to Request Access to a Dashboard

If a dashboard is not shared with you:
1. Contact the dashboard owner (shown in the dashboard header)
2. Ask them to share the dashboard with your Jira user or group
3. The owner can set view or edit permissions

There is no self-service request form - access is granted by the dashboard owner.

## Gadget Export Permissions

If export buttons (PNG, PDF, CSV) are missing or disabled:
1. Check with your Jira admin - export may be disabled globally in Admin Settings
2. The admin can re-enable it under **Admin → Customization Options → Allow direct export**`,
        },
      ],
    },

    // ═══ USER GUIDE ═══
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `Find the right starting point based on your role. Each path takes you to the pages most relevant to what you need to do.

## Jira Administrator

You install and manage the app for your organisation.

**Start with:**
1. [Installation & Setup](/apps/dashboard-charts-jira/installation-setup) - install the app and verify it works
2. [Permissions & Access](/apps/dashboard-charts-jira/permissions-access) - understand how access is governed
3. [Admin Settings](/apps/dashboard-charts-jira/admin-settings) - configure global defaults, enable features, restrict data sources

**Then explore:** Set up a test dashboard using [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) to verify everything works end-to-end before rolling out to your team.

---

## Project Manager / Team Lead

You need dashboards to track work, report progress, and run team meetings.

**Start with:**
1. [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) - build your first chart in 5 minutes
2. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - learn all 10 chart types
3. [Issue List Gadget](/apps/dashboard-charts-jira/issue-list-gadget-intro) - add a configurable issue table
4. [Dynamic Filter Controller](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) - make the dashboard interactive

**Then explore:** [How to: Build Your First Dashboard](/apps/dashboard-charts-jira/how-to-first-dashboard) for a complete walkthrough.

---

## Engineering Manager / Scrum Master

You need sprint health charts, velocity tracking, and process metrics.

**Start with:**
1. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - status pie, assignee bar, velocity line
2. [Time in Status Gadget](/apps/dashboard-charts-jira/time-in-status-gadget-intro) - find where work slows down (Cycle Time, Lead Time)
3. [WIP Aging Charts](/apps/dashboard-charts-jira/wip-aging-charts-gadget-intro) - identify stalled work in standups
4. [Cumulative Flow Diagram](/apps/dashboard-charts-jira/cumulative-flow-gadget-intro) - monitor sprint and release flow health
5. [Sprint Burndown & Burnup](/apps/dashboard-charts-jira/sprint-burndown-gadget-intro) - track sprint progress and spot scope changes
6. [Control Chart](/apps/dashboard-charts-jira/control-chart-gadget-intro) - cycle time, predictability, and the percentile you can commit to
7. [WIP Run Chart](/apps/dashboard-charts-jira/wip-run-chart-gadget-intro) - whether the team is taking on too much at once
8. [Team Wallboard](/apps/dashboard-charts-jira/team-wallboard-gadget-intro) - a standup board that lives on the dashboard

**Then explore:** [Tips & Best Practices](/apps/dashboard-charts-jira/tips-best-practices) for process analytics dashboards, and [Cycle Time Trend](/apps/dashboard-charts-jira/cycle-time-trend-gadget-intro) when you need to show whether delivery is improving.

---

## Executive Stakeholder / PMO

You need high-level KPI dashboards without Jira jargon.

**Start with:**
1. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - Tile charts for KPI numbers
2. [Pivot Table Gadget](/apps/dashboard-charts-jira/pivot-table-gadget-intro) - cross-project aggregation
3. [Issue Filter Formula](/apps/dashboard-charts-jira/issue-filter-formula-gadget-intro) - KPI numbers, gauges, and ratios computed from several queries at once
4. [Cycle Time Trend](/apps/dashboard-charts-jira/cycle-time-trend-gadget-intro) - one chart that answers "are we getting faster?"
5. [How to: Build an Executive Delivery Dashboard](/apps/dashboard-charts-jira/how-to-executive-dashboard) - full walkthrough with all gadgets

**Key tip:** Use the **Description** tab on each gadget to add plain-language context below charts - no Jira jargon required.

---

## Any User - First Time

Never used this app before?

1. Read [What is Dashboard Templates, Charts, Graphs & Reports for Jira?](/apps/dashboard-charts-jira/what-is-dashboard-charts) - 2-minute overview
2. Follow [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) - build your first chart in under 5 minutes
3. Use [Quick Reference Card](/apps/dashboard-charts-jira/quick-reference) - bookmark this as a cheat sheet
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `A one-page cheat sheet for everything in the app. Bookmark this page.

## Fourteen Gadgets at a Glance

| **Gadget** | What It Does | Best For | Full Docs |
|---|---|---|---|
| **Custom Charts** | 10 chart types from Jira issue data | Visual reports, KPIs, trend charts | [Custom Charts →](/apps/dashboard-charts-jira/custom-charts-gadget-intro) |
| **Issue List** | Configurable table of Jira issues | Sprint boards, workqueues, exports | [Issue List →](/apps/dashboard-charts-jira/issue-list-gadget-intro) |
| **Dynamic Filter Controller** | Shared filter bar controlling all gadgets | Interactive dashboards for teams | [DFC →](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) |
| **Time in Status** | How long issues spend in each status | Bottlenecks, Cycle Time, Lead Time | [Time in Status →](/apps/dashboard-charts-jira/time-in-status-gadget-intro) |
| **Pivot Table** | Cross-tabulation with 7 aggregation methods | Workload matrices, story point summaries | [Pivot Table →](/apps/dashboard-charts-jira/pivot-table-gadget-intro) |
| **Cumulative Flow Diagram** | Work accumulation over time | Sprint/release flow health, WIP trends | [CFD →](/apps/dashboard-charts-jira/cumulative-flow-gadget-intro) |
| **WIP Aging Charts** | How long in-progress items have been active | Stalled work, SLA monitoring | [WIP Aging →](/apps/dashboard-charts-jira/wip-aging-charts-gadget-intro) |
| **Control Chart** | Cycle and lead time per completed item | Predictability, percentile commitments | [Control Chart →](/apps/dashboard-charts-jira/control-chart-gadget-intro) |
| **Histogram Chart** | Frequency distribution of cycle time | SLA setting, spotting the slow tail | [Histogram →](/apps/dashboard-charts-jira/histogram-chart-gadget-intro) |
| **Cycle Time Trend** | Average cycle time per interval, with trendline | Quarterly reviews, proving improvement | [Cycle Time Trend →](/apps/dashboard-charts-jira/cycle-time-trend-gadget-intro) |
| **WIP Run Chart** | WIP over time with limits and breaches | Introducing WIP limits, load balancing | [WIP Run Chart →](/apps/dashboard-charts-jira/wip-run-chart-gadget-intro) |
| **Sprint Burndown & Burnup** | Sprint progress with scope tracking | Standups, sprint reviews, retrospectives | [Burndown →](/apps/dashboard-charts-jira/sprint-burndown-gadget-intro) |
| **Team Wallboard** | Work items as cards in columns | Standups, wall displays, workload checks | [Wallboard →](/apps/dashboard-charts-jira/team-wallboard-gadget-intro) |
| **Issue Filter Formula** | KPIs from up to 9 aggregations plus formulas | Rates, ratios, gauges, exec KPI panels | [Formula →](/apps/dashboard-charts-jira/issue-filter-formula-gadget-intro) |

---

## 10 Chart Types (Custom Charts)

Full guide: [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)

| **Chart** | Use When | Reference |
|---|---|---|
| **Pie** | Show proportions (status mix, priority split) | [Pie →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Bar** | Compare categories (issues per assignee) | [Bar →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Grouped Bar** | Compare with sub-categories (status by type) | [Grouped Bar →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Stacked Bar** | Show composition inside categories (sprint by status) | [Stacked Bar →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Line** | Show trends over time (bugs created per week) | [Line →](/apps/dashboard-charts-jira/date-range-custom-charts) |
| **2D Line** | Compare multiple trends on one axis | [2D Line →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Table** | Show exact numbers | [Table →](/apps/dashboard-charts-jira/chart-types-guide) |
| **2D Table** | Cross-tab matrix (assignee × status) | [2D Table →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Funnel** | Show stage progression (workflow pipeline) | [Funnel →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Tile** | Single KPI number | [Tile →](/apps/dashboard-charts-jira/chart-types-guide) |

---

## Data Source Types

| **Source** | When to Use | Reference |
|---|---|---|
| **Projects** | Simple project-level reports | [Quick Start →](/apps/dashboard-charts-jira/quick-start) |
| **Saved Filter** | Reusable criteria shared across gadgets | [Integrations →](/apps/dashboard-charts-jira/supported-integrations) |
| **Custom JQL** | Advanced filtering or custom conditions | [Quick Start →](/apps/dashboard-charts-jira/quick-start) |
| **Board** | Board-scoped reporting and board column definitions - available in Time in Status, CFD, WIP Aging, Control Chart, Histogram, Cycle Time Trend, WIP Run Chart, Team Wallboard, and Issue Filter Formula; required by Sprint Burndown | [TIS Overview →](/apps/dashboard-charts-jira/time-in-status-overview) |
| **Dynamic Filter Controller** | End users filter the dashboard interactively | [DFC Setup →](/apps/dashboard-charts-jira/dynamic-filter-controller-setup) |

---

## Common JQL Patterns

| **Use Case** | JQL |
|---|---|
| **Current sprint** | \`sprint in openSprints()\` |
| **Open bugs** | \`issuetype = Bug AND resolution is EMPTY\` |
| **My issues** | \`assignee = currentUser()\` |
| **High priority unresolved** | \`priority in (High, Highest) AND resolution is EMPTY\` |
| **Issues created this month** | \`created >= startOfMonth()\` |
| **Overdue** | \`duedate < now() AND resolution is EMPTY\` |
| **Specific fix version** | \`fixVersion = "v2.0"\` |

---

## Export Formats by Gadget

| **Gadget** | CSV | PNG | PDF | Config JSON | Docs |
|---|---|---|---|---|---|
| **Custom Charts** | ✓ | ✓ | ✓ | ✓ | [Display Options →](/apps/dashboard-charts-jira/display-options) |
| **Issue List** | ✓ | ✓ | ✓ | ✓ | [Display & Export →](/apps/dashboard-charts-jira/issue-list-display-export) |
| **Time in Status** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/time-in-status-display-export) |
| **Pivot Table** | ✓ | ✓ | - | ✓ | [Formatting & Export →](/apps/dashboard-charts-jira/pivot-table-formatting-export) |
| **WIP Aging Charts** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/wip-aging-display-export) |
| **CFD** | - | - | - | ✓ | [Display Options →](/apps/dashboard-charts-jira/cumulative-flow-display) |
| **Control Chart** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/control-chart-display-export) |
| **Histogram Chart** | ✓ | - | ✓ | ✓ | [Display →](/apps/dashboard-charts-jira/histogram-chart-display-export) |
| **Cycle Time Trend** | ✓ | - | - | ✓ | [Series & Display →](/apps/dashboard-charts-jira/cycle-time-trend-series-display) |
| **WIP Run Chart** | ✓ | ✓ | - | ✓ | [Limits & Display →](/apps/dashboard-charts-jira/wip-run-chart-limits-display) |
| **Sprint Burndown & Burnup** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/sprint-burndown-display-export) |
| **Team Wallboard** | ✓ | - | ✓ | ✓ | [Display & Export →](/apps/dashboard-charts-jira/team-wallboard-display-export) |
| **Issue Filter Formula** | ✓ | ✓ | - | ✓ | [Display Modes →](/apps/dashboard-charts-jira/issue-filter-formula-display) |

---

## Key Settings Locations

| **Task** | Where | Reference |
|---|---|---|
| **Enable/disable gadgets site-wide** | Admin Settings → Features | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Restrict data sources** | Admin Settings → Data Sources | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Control export access** | Admin Settings → Customization Options | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Set global number/date format** | Admin Settings → Customization Options | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Connect to Dynamic Filter Controller** | Gadget edit mode → Data Source → DFC | [Connecting Gadgets →](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) |
| **Find Reference ID** | Saved DFC gadget (shown on the gadget face) | [Connecting Gadgets →](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) |
| **Backup gadget config** | Any gadget edit mode → Import/Export tab | [Data Migration →](/apps/dashboard-charts-jira/data-migration) |

---

## All Docs - Page Index

### Getting Started
- [What Is This App?](/apps/dashboard-charts-jira/what-is-dashboard-charts)
- [Installation & Setup](/apps/dashboard-charts-jira/installation-setup)
- [Quick Start Guide](/apps/dashboard-charts-jira/quick-start)
- [Permissions & Access](/apps/dashboard-charts-jira/permissions-access)

### Custom Charts
- [Overview](/apps/dashboard-charts-jira/custom-charts-overview) · [Chart Types](/apps/dashboard-charts-jira/chart-types-guide) · [Field Segments](/apps/dashboard-charts-jira/field-segments) · [Group By (2D)](/apps/dashboard-charts-jira/group-by-segments-2d) · [Calculations & Lines](/apps/dashboard-charts-jira/calculations-lines) · [Display Options](/apps/dashboard-charts-jira/display-options) · [Templates](/apps/dashboard-charts-jira/templates) · [Date Range](/apps/dashboard-charts-jira/date-range-custom-charts)

### Issue List
- [Overview](/apps/dashboard-charts-jira/issue-list-overview) · [Columns](/apps/dashboard-charts-jira/issue-list-columns) · [Smart Labels](/apps/dashboard-charts-jira/issue-list-smart-labels) · [Quick Filters](/apps/dashboard-charts-jira/issue-list-quick-filters) · [Display & Export](/apps/dashboard-charts-jira/issue-list-display-export) · [Templates](/apps/dashboard-charts-jira/templates-issue-list)

### Dynamic Filter Controller
- [Overview](/apps/dashboard-charts-jira/dynamic-filter-controller-overview) · [Setup & Filter Types](/apps/dashboard-charts-jira/dynamic-filter-controller-setup) · [Tabs](/apps/dashboard-charts-jira/dynamic-filter-controller-tabs) · [Connecting Gadgets](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) · [Templates](/apps/dashboard-charts-jira/templates-dynamic-filter-controller)

### Time in Status
- [Overview](/apps/dashboard-charts-jira/time-in-status-overview) · [Report Types](/apps/dashboard-charts-jira/time-in-status-report-types) · [Columns & Date Range](/apps/dashboard-charts-jira/time-in-status-columns-date-range) · [Status Groups](/apps/dashboard-charts-jira/time-in-status-status-groups) · [Work Schedule](/apps/dashboard-charts-jira/time-in-status-work-schedule) · [Display & Export](/apps/dashboard-charts-jira/time-in-status-display-export)

### Pivot Table
- [Overview](/apps/dashboard-charts-jira/pivot-table-overview) · [Row & Column Fields](/apps/dashboard-charts-jira/pivot-table-fields) · [Aggregation Methods](/apps/dashboard-charts-jira/pivot-table-aggregation) · [Display Types & Heatmaps](/apps/dashboard-charts-jira/pivot-table-display-types) · [Totals, Formatting & Export](/apps/dashboard-charts-jira/pivot-table-formatting-export)

### Cumulative Flow Diagram
- [Overview](/apps/dashboard-charts-jira/cumulative-flow-overview) · [Band Modes](/apps/dashboard-charts-jira/cumulative-flow-band-modes) · [Calculate By](/apps/dashboard-charts-jira/cumulative-flow-calculate-by) · [Date Ranges](/apps/dashboard-charts-jira/cumulative-flow-date-ranges) · [Display & Patterns](/apps/dashboard-charts-jira/cumulative-flow-display)

### WIP Aging Charts
- [Overview](/apps/dashboard-charts-jira/wip-aging-overview) · [Age Calculation Methods](/apps/dashboard-charts-jira/wip-aging-age-methods) · [Reference Lines & Scale](/apps/dashboard-charts-jira/wip-aging-reference-lines) · [Display & Export](/apps/dashboard-charts-jira/wip-aging-display-export)

### Control Chart
- [Overview](/apps/dashboard-charts-jira/control-chart-overview) · [Cycle Definition](/apps/dashboard-charts-jira/control-chart-cycle-definition) · [Reference Lines & Scale](/apps/dashboard-charts-jira/control-chart-reference-lines) · [Display & Export](/apps/dashboard-charts-jira/control-chart-display-export)

### Histogram Chart
- [Overview](/apps/dashboard-charts-jira/histogram-chart-overview) · [Buckets & Split Range](/apps/dashboard-charts-jira/histogram-chart-buckets) · [Reference Lines & Display](/apps/dashboard-charts-jira/histogram-chart-display-export)

### Cycle Time Trend
- [Overview](/apps/dashboard-charts-jira/cycle-time-trend-overview) · [Time Frame](/apps/dashboard-charts-jira/cycle-time-trend-time-frame) · [Series & Display](/apps/dashboard-charts-jira/cycle-time-trend-series-display)

### WIP Run Chart
- [Overview](/apps/dashboard-charts-jira/wip-run-chart-overview) · [WIP Rule & Calculation](/apps/dashboard-charts-jira/wip-run-chart-wip-rule) · [Limits & Display](/apps/dashboard-charts-jira/wip-run-chart-limits-display)

### Sprint Burndown & Burnup
- [Overview](/apps/dashboard-charts-jira/sprint-burndown-overview) · [Calculation Settings](/apps/dashboard-charts-jira/sprint-burndown-calculation) · [Display & Export](/apps/dashboard-charts-jira/sprint-burndown-display-export)

### Team Wallboard
- [Overview](/apps/dashboard-charts-jira/team-wallboard-overview) · [Settings](/apps/dashboard-charts-jira/team-wallboard-settings) · [Display & Export](/apps/dashboard-charts-jira/team-wallboard-display-export)

### Issue Filter Formula
- [Overview](/apps/dashboard-charts-jira/issue-filter-formula-overview) · [Variables](/apps/dashboard-charts-jira/issue-filter-formula-variables) · [Formulas](/apps/dashboard-charts-jira/issue-filter-formula-formulas) · [Display Modes](/apps/dashboard-charts-jira/issue-filter-formula-display)

### Admin & Other
- [Admin Settings](/apps/dashboard-charts-jira/admin-settings) · [Release Notes](/apps/dashboard-charts-jira/latest-release) · [Integrations](/apps/dashboard-charts-jira/supported-integrations) · [Data Migration](/apps/dashboard-charts-jira/data-migration) · [FAQ](/apps/dashboard-charts-jira/faq) · [Troubleshooting](/apps/dashboard-charts-jira/troubleshooting-guide)
`,
        },
        {
          slug: "how-to-first-dashboard",
          title: "How to: Build Your First Dashboard",
          content: `A step-by-step guide to building your first useful Jira dashboard in under 10 minutes using three gadgets.

## Before You Start

Make sure:
- The app is installed (check [Installation & Setup](/apps/dashboard-charts-jira/installation-setup))
- You have access to a Jira dashboard (view or edit)
- You have permission to view the project you want to report on

---

## What You Will Build

A three-gadget dashboard:
1. A **pie chart** showing issue status distribution
2. An **issue table** for reviewing the details
3. A **filter controller** so anyone can slice the data

---

## Step 1: Open or Create a Dashboard

1. In Jira, click **Dashboards** in the top navigation
2. Select an existing dashboard, or click **Create dashboard** to make a new one
3. Click the **Edit** button (pencil icon) to enter edit mode

---

## Step 2: Add a Status Pie Chart

1. Click **Add gadget**
2. Search for **"Custom Charts"** and click **Add**
3. In the **left panel**, select **Projects** and pick your project
4. In the **right panel** → **Chart Type** tab → select **Pie Chart**
5. Click the **Chart By** tab → select **Status**
6. Watch the live preview update
7. Click **Save gadget**

**Result:** A pie chart showing your project's issue distribution by status.

---

## Step 3: Add an Issue Table

1. Click **Add gadget** again
2. Search for **"Issue List"** and click **Add**
3. Set the same project as the data source
4. Add columns: Key, Summary, Status, Assignee, Priority
5. Add a Quick Filter: label "My Issues", JQL \`assignee = currentUser()\`
6. Click **Save gadget**

**Result:** A table showing all issues with a one-click "My Issues" filter.

---

## Step 4: Add a Filter Controller

1. Click **Add gadget** → search for **"Dynamic Filter Controller"** → **Add**
2. Set the same project as the base data source
3. Add filter fields: **Status**, **Assignee**, **Priority**
4. Click **Save gadget** - note the **Reference ID** shown on the saved gadget
5. Edit your pie chart → change Data Source to **Dynamic Filter Controller** → select the Reference ID
6. Edit your issue table → same step
7. Click **Done** to exit edit mode

**Result:** Selecting a filter updates both the chart and the table simultaneously.

---

## What's Next?

- Add a **Goal Line** to track targets: [Calculations & Reference Lines](/apps/dashboard-charts-jira/calculations-lines)
- Try **Templates** for faster setup: [Templates](/apps/dashboard-charts-jira/templates)
- Learn to spot bottlenecks: [Time in Status Gadget](/apps/dashboard-charts-jira/time-in-status-gadget-intro)
- See all 10 chart types: [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)
`,
        },
        {
          slug: "how-to-executive-dashboard",
          title: "How to: Build an Executive Delivery Dashboard",
          content: `A complete guide to building a high-impact executive dashboard using the app's core reporting gadgets.

## Who This Is For

Directors, VPs, and senior stakeholders who need a clear, data-driven view of delivery health without digging into Jira themselves.

## Dashboard Layout Plan

| **Row** | Gadget | Type | Purpose |
|---|---|---|---|
| **Row 1** | Global Filter Controller | Dynamic Filter Controller | One filter bar drives everything |
| **Row 2a** | Total Open Issues | Custom Charts → Tile | Key KPI number |
| **Row 2b** | Issue Distribution | Custom Charts → Pie | Status breakdown |
| **Row 2c** | Delivery Funnel | Custom Charts → Funnel | Pipeline visualization |
| **Row 3a** | Sprint Progress | Custom Charts → Stacked Bar | Sprint completion over time |
| **Row 3b** | Trend Over Time | Custom Charts → 2D Line | Created vs resolved trend |
| **Row 4a** | Flow Health | Cumulative Flow Diagram | WIP and bottleneck visibility |
| **Row 4b** | Aging Work | WIP Aging Charts | At-risk items at a glance |
| **Row 5a** | Team × Status | Pivot Table | Cross-dimensional workload |
| **Row 5b** | Cycle Time | Time in Status | Where work slows down |
| **Row 6** | Active Issues | Issue List | Full issue details |

### Optional additions for a delivery-metrics audience

| **Row** | Gadget | Type | Purpose |
|---|---|---|---|
| **Row 2d** | Delivery KPIs | Issue Filter Formula → gauges | On-time delivery %, escaped defect rate, and other ratios in one tile |
| **Row 3c** | Cycle Time Direction | Cycle Time Trend | One chart answering "are we getting faster?" |
| **Row 4c** | Predictability | Control Chart | The percentile you can safely commit to |
| **Row 7** | Sprint Health | Sprint Burndown & Burnup | Current sprint progress and scope changes |

---

## Step 1: Add the Filter Controller (Do This First)

1. Add **Dynamic Filter Controller** → set your project or JQL as base data source
2. Add filter fields: Sprint, Assignee, Priority, Issue Type, Status
3. Add tabs: **All Issues** (no filter), **This Sprint**, **My Issues**, **Bugs Only**, **High Priority**
4. Click **Save gadget** - note the **Reference ID**

---

## Step 2: Add Custom Charts (connect each to the Reference ID)

**Tile - Total Open Issues**
- Source: Dynamic Filter Controller
- Chart By: Custom JQL segment "Open" (\`resolution is EMPTY\`)
- Display: Count only, large number

**Pie - Issue Distribution**
- Source: Dynamic Filter Controller
- Chart By: Issue Type

**Funnel - Delivery Funnel**
- Source: Dynamic Filter Controller
- Chart By: Status (order: To Do → In Progress → In Review → Done)

**Stacked Bar - Sprint Progress**
- Source: same project (last 6 sprints)
- Chart By: Sprint, Group By: Status

**2D Line - Trend Over Time**
- Source: same project
- Chart By: Created (by Week), Group By: Resolved (by Week)
- Date range: Last 90 days

---

## Step 3: Add Analytics Gadgets

**Cumulative Flow Diagram**
- Source: Dynamic Filter Controller
- Date Range: Latest sprint (auto)
- Band Mode: Board columns

**WIP Aging Charts**
- Source: Dynamic Filter Controller
- Age Method: Time since last entry in current status
- Enable Threshold Line at 10 days, Percentile Line at 85

**Pivot Table - Team × Status**
- Source: Dynamic Filter Controller
- Row: Assignee, Column: Status
- Aggregation: Count, Display: Table Row Heatmap

**Time in Status - Cycle Time**
- Source: same project
- Report Type: Average Time
- Calculate In: Business Decimal Days

---

## Step 4: Add the Issue List

- Source: Dynamic Filter Controller
- Columns: Key, Summary, Assignee, Status, Priority, Sprint, Updated
- Quick Filters: My Issues, High Priority, Unassigned

---

## Step 5: Arrange and Share

1. Drag gadgets into the layout described above
2. Click **Done** to exit edit mode
3. Share the dashboard: Actions (•••) → Share → add your stakeholders
4. Use [Data Migration](/apps/dashboard-charts-jira/data-migration) to back up the configuration

> **Tip:** Use the **Description** tab on each gadget to add plain-language notes below charts. This helps executives understand what they are looking at without Jira jargon.
`,
        },
        {
          slug: "how-to-dynamic-filter",
          title: "How to: Connect Gadgets with Dynamic Filter Controller",
          content: `A step-by-step guide to setting up the Dynamic Filter Controller and connecting all your charts and tables to it.

## What You Need

- At least two gadgets already on your dashboard (Custom Charts, Issue List, Time in Status, Pivot Table, CFD, WIP Aging, Control Chart, Histogram Chart, Cycle Time Trend, WIP Run Chart, Team Wallboard, or Issue Filter Formula)
- Edit access to the dashboard

---

## Step 1: Add the Controller

1. Open your dashboard in **edit mode**
2. Click **Add gadget** → search for **"Dynamic Filter Controller"** → click **Add**

> **Best practice:** Add the controller FIRST, before adding other gadgets. It is easier to connect gadgets to a controller that already exists.

---

## Step 2: Set the Base Data Source

The base data source scopes all connected gadgets.

1. In the left panel, select your source type:
   - **Projects** for a simple project-level dashboard
   - **Custom JQL** for precise scoping (e.g., \`project = TEAM AND issuetype in (Story, Bug, Task)\`)
2. Search for and select your project or enter your JQL

---

## Step 3: Add Filter Fields

Filter fields are what users interact with in the bar.

1. In the settings panel, go to the **Fields** tab
2. Click **+ Add Field**
3. Add these common fields:
   - **Sprint** (Jira Field type)
   - **Assignee** (Jira Field type)
   - **Priority** (Jira Field type)
   - **Issue Type** (Jira Field type)
   - **Status** (Jira Field type)

Refer to [Setup & Filter Types](/apps/dashboard-charts-jira/dynamic-filter-controller-setup) for all filter field types.

---

## Step 4: Add Preset Tabs (Optional but Recommended)

1. In the live preview area, click **+** next to the existing tab
2. Create tabs for common views:
   - **All Work** (no filters)
   - **This Sprint** (Sprint = active sprint)
   - **My Issues** (Assignee = currentUser())
   - **Bugs Only** (Issue Type = Bug)
3. Rename each tab by clicking its name

---

## Step 5: Save and Note the Reference ID

1. Click **Save gadget**
2. The saved gadget shows a **Reference ID** (e.g., "ABC123")
3. Copy this ID - you need it to connect other gadgets

---

## Step 6: Connect Each Gadget

For every chart or table you want the controller to drive:

1. Open the gadget in edit mode
2. In the **left panel**, change **Source Type** to **Dynamic Filter Controller**
3. Select your controller from the dropdown (identified by Reference ID)
4. Click **Save gadget**

Supported gadgets: Custom Charts, Issue List, Time in Status, Pivot Table, CFD, WIP Aging Charts, Control Chart, Histogram Chart, Cycle Time Trend, WIP Run Chart, Team Wallboard, and Issue Filter Formula (per variable)

Not supported: Sprint Burndown & Burnup, which is scoped to a board and sprint by design

---

## Step 7: Verify

Click **"Show Connected Charts"** on the controller - all connected gadgets are highlighted on the dashboard.

## Common Issues

| **Problem** | Fix |
|---|---|
| **Gadget not updating** | Check Source Type is "Dynamic Filter Controller" and correct Reference ID is selected |
| **Controller not in the dropdown** | Both gadgets must be on the same dashboard |
| **Wrong data after filtering** | Check the controller's base data source scope |
| **Old data showing** | Hard refresh (Ctrl+F5) and re-save the controller |

See [Connecting Gadgets](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) for more detail.
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `Practical advice for building better dashboards, faster.

## Data Sources

**Use Saved Filters for shared dashboards.**
If multiple people use the same dashboard, build your Jira filter once (save it in Jira), then reference it as the data source. When the filter changes, all gadgets update automatically - no need to edit each gadget.

**Use JQL for precision.**
\`sprint in openSprints() AND project = TEAM\` is more reliable than selecting the project and trusting it always shows the right sprint. Test your JQL in Jira's Issue Navigator before using it in a gadget.

**Set the Dynamic Filter Controller's base JQL tightly.**
The more focused the base scope, the faster the dashboard loads. Use \`project = X AND issuetype in (Story, Bug, Task)\` rather than just \`project = X\` if you don't need sub-tasks or epics in most views.

---

## Custom Charts

**Use Templates to start fast.**
Apply a template first, then customize. It is faster than building from scratch. See [Templates](/apps/dashboard-charts-jira/templates).

**Keep segment count under 10.**
Charts with more than 10 segments become hard to read. Use **Custom JQL** to group rare values into an "Other" segment.

**Use Cumulative Total on line charts for running totals.**
When you want to show "total issues resolved this quarter", use the Cumulative Total calculation instead of week-by-week counts.

**Add a Description tab note.**
For stakeholder dashboards, use the Description tab to explain what the chart shows in plain language - no Jira jargon.

---

## Issue List

**Use Smart Labels to surface risk.**
Add a red "Overdue" label (\`duedate < now() AND resolution is EMPTY\`) and an orange "Due Soon" label (\`duedate <= 7d AND resolution is EMPTY\`). These appear on every row without filtering - leadership sees risk at a glance.

**Export after filtering.**
The CSV and PDF exports reflect the current filtered state. Apply Quick Filters first to export exactly the subset you need - e.g., only critical unassigned bugs.

**Use AND logic for focused lists, OR logic for catch-alls.**
AND: "Show me bugs that are also unassigned" (narrower). OR: "Show me anything that's either overdue or unassigned" (broader catch-all for triage).

---

## Time in Status

**Start with Average Time to find bottlenecks.**
Sort descending. The top row is your slowest stage. See [Display Settings & Export](/apps/dashboard-charts-jira/time-in-status-display-export) for interpretation tips.

**Use Business Decimal Days for SLA reporting.**
Calendar time includes nights and weekends. If your SLA is "resolve P1 within 2 business days", always use a Business format. Set up your Work Schedule first in the gadget settings.

**Cycle Time vs Lead Time - know the difference.**
Cycle Time starts when work actively began. Lead Time starts from creation. Report Lead Time to stakeholders. Use Cycle Time to evaluate your team's actual process speed.

---

## Pivot Table

**Start with Row Heatmap for workload analysis.**
Assignee × Status with Row Heatmap immediately shows who has the most "In Progress" or "In Review" work - no reading required.

**Make values clickable for drill-through.**
Enable "Make Values Clickable" so any cell opens the matching Jira issue list. This is the fastest way to go from summary to detail.

**Use date field formatting for trend pivots.**
When using Created or Resolved as a column field, set the format to "Month" or "Quarter" for cleaner grouping in management reports.

---

## Cumulative Flow Diagram

**Use "Latest sprint auto" on permanent team dashboards.**
With Latest Sprint Auto selected, the CFD always shows the current sprint - no one needs to update it after each sprint transition. See [Date Ranges & Scoping](/apps/dashboard-charts-jira/cumulative-flow-date-ranges).

**Watch for widening bands, not total height.**
A widening "In Review" band means work is piling up in review faster than it is leaving. The total height rising is normal (scope growing). A single band widening is the bottleneck signal.

**Use 1-week interval for releases, 1-day for active sprints.**
Daily intervals on a 90-day release chart create noise. Switch to weekly for longer time windows.

---

## WIP Aging Charts

**Use in every daily standup.**
Open the chart at the start of standup. Any dot past the threshold line gets a discussion: "What's blocking this? Can it be cleared today?" No sorting or filtering needed.

**Set the 85th percentile line as your SLE.**
"85% of our work completes within X days" - this is a data-driven commitment. Track whether the line moves over time to measure process improvement. See [Reference Lines & Scale](/apps/dashboard-charts-jira/wip-aging-reference-lines).

**Exclude weekends if your SLA is in business days.**
Enable "Exclude Weekends" so items sitting over weekends don't falsely trigger your threshold line.

---

## Performance

**Keep queries under 10,000 issues.**
Add date filters or project scoping to JQL for large Jira instances. \`created >= -90d\` is often enough to keep queries fast without losing useful data.

**Use auto-refresh sparingly.**
Auto-refresh every 10 minutes is useful on live dashboards shown in team areas. Turn it off for dashboards used in weekly meetings - manual refresh is enough and avoids performance overhead.

---

## Import / Export

**Back up configurations before big changes.**
Use the Import/Export tab on any gadget to export its JSON configuration. Save to a shared document or Confluence page before making major changes - this is your restore point.

**Duplicate gadgets instantly.**
Export a configured gadget → add a new gadget of the same type → import the JSON. A complete configuration is copied in seconds with no manual re-setup.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. CUSTOM CHARTS GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "custom-charts-gadget",
      title: "Custom Charts Gadget",
      articles: [
        {
          slug: "custom-charts-gadget-intro",
          title: "Custom Charts Gadget",
          content: `The **Custom Charts** gadget is the core of this app, allowing you to transform raw Jira data into beautiful, actionable visualizations. It supports 10 distinct chart types across 5 categories, giving you the flexibility to display everything from high-level KPI tiles to detailed 2D matrices.

Use this section to understand how to select the right chart, configure how your data is grouped, add calculations, and fine-tune your display settings.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *A quick start guide to building your first chart, understanding the configuration tabs, and best practices for visualization.* |
| **Chart Types Guide** | *A detailed breakdown of all 10 chart types (Pie, Bar, Line, Table, Funnel, Tile), including when and how to use them.* |
| **Field Segments** | *Learn how to use the "Chart By" setting to group your data into segments using Jira fields, Custom JQL, or Saved Filters.* |
| **Group By Segments 2D** | *Instructions on adding a second dimension to your charts for cross-tabulation and multi-series comparisons.* |
| **Calculations Lines** | *How to change metric calculations (Count, Sum, Average) and add Goal, Trend, or Average reference lines to your charts.* |
| **Display Options** | *A comprehensive guide to tweaking chart aesthetics, including tooltips, labels, gridlines, axes, and export settings.* |
| **Templates** | *Ready-made chart configurations for common Jira reporting use cases.* |
| **Date Range** | *How to use date fields for trend charts, time grouping, and date range filtering.* |
`,
        },
        {
          slug: "custom-charts-overview",
          title: "Overview",
          content: `The Custom Charts gadget lets you create beautiful, informative visualizations from your Jira data.

The Custom Charts gadget supports 10 chart types across 5 categories:

| **Category** | **Chart Types** |
| --- | --- |
| **Pie** | Pie Chart |
| **Bar** | Bar, Grouped Bar, Stacked Bar |
| **Line** | Line, 2D Line |
| **Table** | Table, 2D Table |
| **Other** | Funnel, Tile |

## Quick Start: Create Your First Chart

1. Add "Custom Charts" to your dashboard
2. Select a project, filter, or enter JQL
3. Click on the chart type you want (default is Pie)
4. Select how to group your data (e.g., Status, Assignee)
5. Click "Save gadget"

Done! Your chart is live.

## Configuration Tabs

| **Tab** | **What It Controls** |
| --- | --- |
| **Chart Type** | Visual format (pie, bar, line, etc.) |
| **Chart By** | Main grouping field/segments |
| **Group By** | Second dimension (for 2D charts) |
| **Calculations** | Reference lines (goal, trend, average) |
| **Display Settings** | Visual options and formatting |
| **Description** | Explanatory text |
| **Import/Export** | Configuration sharing |

## Quick Reference: Chart Type Selection

| **If You Want To...** | **Use This Chart** |
| --- | --- |
| **Show percentages/proportions** | Pie |
| **Compare values across categories** | Bar |
| **Compare with sub-categories** | Grouped Bar |
| **Show composition within categories** | Stacked Bar |
| **Show trends over time** | Line |
| **Compare multiple trends** | 2D Line |
| **Show exact numbers** | Table |
| **Show a data matrix** | 2D Table |
| **Show stage progression** | Funnel |
| **Show single KPIs** | Tile |

## Tips for Effective Charts

### Do

* Choose the right chart type for your data
* Limit segments to 10 or fewer for readability
* Use meaningful colors (red for bugs, green for done)
* Add descriptions to explain what the chart shows

### Don't

* Don't use pie charts with too many segments
* Don't use line charts for non-sequential data
* Don't forget to set a clear title
`,
        },
        {
          slug: "chart-types-guide",
          title: "Chart Types Guide",
          content: `Detailed guide to all 10 chart types available in Custom Charts, with examples and best practices.

## Pie Chart

![Pie Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/pie-chart.png)

### When to Use

* Showing how a whole is divided into parts
* Displaying percentages and proportions
* Comparing relative sizes of categories

### Best For

* Status distribution (To Do: 30%, In Progress: 45%, Done: 25%)
* Bug severity breakdown
* Work allocation by team member

### Best Practices

* Use 2-7 segments for readability
* Order segments by size (largest to smallest)
* Use contrasting colors

## Bar Chart (1D)

![Bar Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-bar-chart.png)

### When to Use

* Comparing values across categories
* Showing rankings or distributions

### Best For

* Issues per team member
* Bugs per component
* Story points by sprint

## Grouped Bar Chart (2D)

![Grouped Bar Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/grouped-bar-chart.png)

### When to Use

* Comparing multiple series side-by-side
* Showing breakdown within each category

Example: Chart By: Status | Group By: Issue Type

Result: For each status, see separate bars for Stories, Bugs, Tasks side by side.

## Stacked Bar Chart (2D)

![Stacked Bar Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/stacked-bar-chart.png)

### When to Use

* Showing composition within categories
* Comparing totals AND breakdowns

Example: Chart By: Sprint | Group By: Priority

Result: Each sprint shows a single bar with priority levels stacked.

## Line Chart (1D)

![Line Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-line-chart.png)

### When to Use

* Showing trends over time
* Displaying progression or change

### Best For

* Issues created per week
* Velocity trend across sprints
* Bug count over time

## 2D Line Chart

![2D Line Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/2d-line-chart.png)

### When to Use

* Comparing multiple trends simultaneously
* Showing related metrics over time

Example: Chart By: Week | Group By: Issue Type

Result: Separate lines for Stories, Bugs, and Tasks on the same time axis.

## Table Chart (1D)

![Table Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-table-chart.png)

### When to Use

* Displaying exact numbers
* When precision matters more than visualization

## 2D Table Chart

![2D Table Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/2d-table-chart.png)

### When to Use

* Showing data matrix with two dimensions
* Cross-tabulating two fields

Example: Chart By: Assignee | Group By: Status

Result: A table where rows are team members, columns are statuses, and cells show the count.

## Funnel Chart

![Funnel Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/funnel-chart.png)

### When to Use

* Showing stage-based progression
* Visualizing conversion or workflow

### Best For

* Support ticket funnel (New → Triaged → Working → Resolved)
* Sales pipeline stages

## Tile Chart

![Tile Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/tile-chart.png)

### When to Use

* Displaying single KPI metrics
* Creating dashboard scorecards

### Best For

* Total open issues
* Story points remaining
* Bugs this week
`,
        },
        {
          slug: "field-segments",
          title: "Field Segments",
          content: `The "Chart By" setting determines how your data is grouped and displayed. This is the most important configuration for any chart.

![Field Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/field-segments.png)

## What is "Field"?

"Field" defines how your issues are categorized into segments (slices, bars, lines, or rows depending on chart type).

| **Chart Type** | **Field Creates** |
| --- | --- |
| **Pie** | Slices |
| **Bar** | Bars |
| **Line** | Points on the line |
| **Table** | Rows |
| **Funnel** | Funnel stages |
| **Tile** | Single value |

## Chart By Options

![Chart By Option](/images/dashboard-charts/Custom%20Charts/Field%20Segments/chart-by-option.png)

You have three ways to define segments:

| **Option** | **Description** | **Best For** |
| --- | --- | --- |
| **Jira Fields** | Group by any Jira field | Simple field-based grouping |
| **Custom JQL** | Define segments with JQL queries | Complex, custom groupings |
| **Saved Filters** | Use existing filters as segments | Reusing filter definitions |

## Option 1: Grouping by Jira Fields

Select any Jira field to group your data. Segments are automatically created for each unique value.

### Common Fields

![Common Fields](/images/dashboard-charts/Custom%20Charts/Field%20Segments/common-fields.png)

| **Field** | **Creates Segments For** |
| --- | --- |
| **Status** | Each workflow status |
| **Assignee** | Each team member + Unassigned |
| **Priority** | Highest, High, Medium, Low, Lowest |
| **Issue Type** | Story, Bug, Task, Epic, etc. |
| **Component** | Each component in the project |
| **Labels** | Each label applied to issues |
| **Sprint** | Each sprint (active, future, closed) |

## Option 2: Grouping by Custom JQL

![Custom JQL Field](/images/dashboard-charts/Custom%20Charts/Field%20Segments/custom-jql-field.png)

Define your own segments using JQL queries. This gives you complete control over how data is grouped.

### Example: Bug Age Groupings

| **Segment Name** | **JQL Condition** |
| --- | --- |
| **New (< 7 days)** | issuetype = Bug AND created >= -7d |
| **Aging (7-30 days)** | issuetype = Bug AND created >= -30d AND created < -7d |
| **Old (> 30 days)** | issuetype = Bug AND created < -30d |

> **Tip:** Each issue appears only in the FIRST matching segment. Order your segments carefully if conditions might overlap.

## Working with Segments

### Renaming Segments

![Renaming Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/renaming-segments.png)

Click on the segment name to edit it. This changes the label shown in the chart without affecting the data.

### Reordering Segments

![Reordering Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/reordering-segments.png)

Drag and drop segments to change their order in the chart.

### Showing/Hiding Segments

![Showing/Hiding Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/showing-hiding-segments.png)

Toggle the visibility icon to show or hide segments. Hidden segments are not included in calculations.

### Changing Segment Colors

![Changing Segment Colors](/images/dashboard-charts/Custom%20Charts/Field%20Segments/changing-segments-colors.png)

Click the color swatch to open the color picker.

## Ordering Options

![Ordering Options](/images/dashboard-charts/Custom%20Charts/Field%20Segments/ordering-options.png)

| **Option** | **Sorts By** |
| --- | --- |
| **Count (High to Low)** | Largest segments first |
| **Count (Low to High)** | Smallest segments first |
| **A to Z** | Alphabetical ascending |
| **Z to A** | Alphabetical descending |
| **Custom** | Your manual drag order |
`,
        },
        {
          slug: "group-by-segments-2d",
          title: "Group By Segments 2D",
          content: `
Add a second dimension to your charts with the "Group By" feature, available for Grouped Bar, Stacked Bar, 2D Line, and 2D Table charts.

![Group By 2D](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/group-by-2d.png)

## What is "Group By"?

"Group By" adds a second grouping dimension to your chart, creating a two-dimensional visualization.

| **Without Group By** | **With Group By** |
| --- | --- |
| **Status (3 bars)** | Status x Issue Type (3 groups of 3 bars) |
| **One data series** | Multiple data series |
| **Simple comparison** | Cross-dimensional analysis |

## Which Charts Support Group By?

| **Chart Type** | **Group By Support** |
| --- | --- |
| **Pie** | No |
| **Bar (1D)** | No |
| **Grouped Bar** | Yes |
| **Stacked Bar** | Yes |
| **Line (1D)** | No |
| **2D Line** | Yes |
| **Table (1D)** | No |
| **2D Table** | Yes |
| **Funnel** | No |
| **Tile** | No |

## How Field By and Group By Work Together

Field By = Rows/Categories (X-axis)

Group By = Columns/Series (multiple bars/lines)

### Grouped Bar Example

![Grouped Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/grouped-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Status |
| **Group By** | Issue Type |
| **Result** | For each status, see separate bars for Stories, Bugs, Tasks side by side |

### Stacked Bar Example

![Stacked Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/stacked-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Status |
| **Group By** | Priority |
| **Result** | Each Status shows priorities stacked in a single bar |

### 2D Table Example

![2D Table Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/2d-table-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Priority |
| **Group By** | Status |
| **Result** | Matrix with Priority as rows, statuses as columns |

## Common Group By Combinations

| **Purpose** | **Field By** | **Group By** |
| --- | --- | --- |
| **Bug vs Story by status** | Status | Issue Type |
| **Priority mix per sprint** | Sprint | Priority |
| **Team trends over time** | Week | Team |
| **Completion by component** | Component | Status |
| **Work type by person** | Assignee | Issue Type |

## Best Practices

### Limit Group By Categories

* 3-5 categories is ideal for easy reading
* Maximum 7-8 before charts become confusing

### Choose Complementary Dimensions

* Status x Type - Different aspects of same issues
* Time x Category - Trend analysis with breakdown
* Person x Status - Individual progress tracking
`,
        },
        {
          slug: "calculations-lines",
          title: "Calculations Lines",
          content: `
Configure what values your chart displays and add goal, trend, and average lines for context.

## Calculation Types

By default, charts show the Count of issues. You can change this:

| **Calculation** | **What It Shows** | **Example** |
| --- | --- | --- |
| **Count** | Number of issues | 25 issues in "To Do" |
| **Sum** | Total of a numeric field | 150 total Story Points |
| **Average** | Mean of a numeric field | 6 SP average per issue |

## Count Calculation

The number of issues in each segment. This is the default.

## Sum Calculation

The total of a numeric field across issues in each segment.

**Use cases:** Total Story Points by assignee, Total estimated hours by sprint

## Average Calculation

The mean value of a numeric field for issues in each segment.

**Use cases:** Average story points per issue by type, Average complexity by component

## Reference Lines

Add horizontal reference lines to provide context on Bar and Line charts.

| **Line Type** | **Description** | **Use Case** |
| --- | --- | --- |
| **Goal** | Fixed target value you set | We want to complete 50 SP per sprint |
| **Trend** | Calculated trend direction | Are bugs increasing or decreasing? |
| **Average** | Mean across all segments | Who's above/below average? |

## Goal Line

**What it is:** A horizontal line at a specific value you set, representing a target.

### How to Add

1. In Calculations tab, click "Goal, Trend or Average Line"
2. Select "Goal Line"
3. Enter the goal value (e.g., 50)
4. Enter a label (e.g., "Sprint Target")
5. Choose line style (solid or dashed)

## Trend Line

**What it is:** A calculated line showing the overall direction of your data (increasing, decreasing, or flat).

The trend line is calculated using linear regression across your data points.

## Average Line

**What it is:** A horizontal line showing the mean value across all segments.

Helpful for comparing individuals to team average.

## Cumulative Total

**What it is:** Shows a running total that accumulates across segments, rather than individual values.

### Example

| **Week** | **Issues (Normal) - Issues (Cumulative)** |
| --- | --- |
| **Week 1** | 10 - 10 |
| **Week 2** | 15 - 25 |
| **Week 3** | 12 - 37 |
| **Week 4** | 8 - 45 |

## Which Charts Support Reference Lines?

| **Chart Type** | **Reference Lines** |
| --- | --- |
| **Bar** | Goal, Trend, Average |
| **Grouped Bar** | Goal, Trend, Average |
| **Stacked Bar** | Goal, Trend, Average |
| **Line** | Goal, Trend, Average |
| **2D Line** | Goal, Trend, Average |
| **Pie** | Not applicable |
| **Table** | Not applicable |
| **Funnel** | Not applicable |
| **Tile** | Not applicable |
`,
        },
        {
          slug: "display-options",
          title: "Display Options",
          content: `
Control how your Custom Chart looks: formatting, tooltips, labels, layout, and export behavior.

## Where to find it

![Display Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/display-options.png)

* Open a Custom Chart gadget
* Click Edit
* Go to the Display Options tab

## What you can change

* Formatting (date format, % decimal places)
* Chart behavior (tooltips, hover display, gridlines, totals)
* Labels (heading and column/metric labels)
* Layout controls (pie size, axis height, table/tile limits)
* Export + menu (options menu button, direct export enable/disable)

## General settings (available across chart types)

![General Settings](/images/dashboard-charts/Custom%20Charts/Display%20Options/general-settings.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Date format** | Controls how dates appear in charts/tooltips where dates are shown. | 20 Jan 2021 (DD Mon YYYY) |
| **% Places Control** | Sets decimal places for percentage values shown in labels/tooltips. | 1 |
| **Auto refresh every 10 minute** | Refreshes the gadget automatically (primarily useful in View mode). | Off |
| **Show options menu button** | Shows the chart's options/menu button (for quick actions). | On |
| **Export to Png, Pdf & Csv** | Enables direct export from the gadget. | On (may be disabled by admin) |

If export is disabled by admin, the toggle will show **"Disabled by admin"** and exports won't be available.

## Pie / Funnel charts (Display Options)

![Pie / Funnel Display Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/pie-funnel-display-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on Legends name hover** | Hover over legend items to see tooltip details. | On |
| **Display on hover** | What appears on hover: Count, Count / %, %, % / Count. | Count |
| **Maximum pie chart diameter** | Controls pie size (range: 300-400px). (Pie only) | 300px |
| **Y-axis height** | Vertical size control (Funnel only) (range: 320-800px). | 350px |

### Labels

![Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/labels.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Heading label shown with the chart/legend area. | Blank |
| **Count label** | Label for count values (ex: "Issues", "Tickets"). | Issues |

### Legend display

![Legends](/images/dashboard-charts/Custom%20Charts/Display%20Options/legends.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show chart legend** | Shows/hides the legend list. | On |
| **Show total row** | Shows a total row in the legend/table area (where applicable). | On |
| **Show number column** | Shows the serial/number column in the legend/table area. | On |

**Example (Pie):** If you want quick context without clicking, set **Display on hover = Count / %** and **% Places Control = 1**.

## Bar charts (Bar / Grouped Bar / Stacked Bar)

![Bar Chart Settings](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-chart-settings.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on bar hover** | Shows tooltip when hovering a bar. | On |
| **Tooltip display** | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| **Show Count labels above bars** | Prints count values above each bar. | On |
| **Show zero Count labels above bars** | Also shows labels for bars with 0 count. | Off |
| **Show % labels above bars** | Prints % labels above bars. | Off |
| **Show horizontal gridlines** | Adds horizontal gridlines for readability. | Off |
| **Show Count total under chart** | Displays total count below the chart. | On |

### Axis & label

![Axis and Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/axis-and-labels.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show y-axis label** | Toggles Y-axis label. | On |
| **Y-axis label** | Custom Y-axis title text. | Issues |
| **Show x-axis label** | Toggles X-axis label. | On |
| **X-axis label** | Custom X-axis title text. | Date |
| **Y-axis height** | Chart height control (range: 320-800px). | 350px |
| **Y-axis unit** | Shows axis values as Count or %. | Count |

**Example (Bar):** To display distribution instead of raw totals: set **Y-axis unit = %**, enable **Show % labels above bars**, and keep **% Places Control = 1**.

![Bar Distribution Example](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-distribution-eg.png)

## Line charts (Line / Line 2D)

![Line Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/line-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on point hover** | Shows tooltip when hovering a point. | On |
| **Tooltip display** | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| **Show Count labels above points** | Prints count values above points. | On |
| **Show zero Count labels above points** | Shows labels for 0 values. | Off |
| **Show % labels above points** | Prints % labels above points. | Off |
| **Show horizontal gridlines** | Adds horizontal gridlines. | Off |
| **Show vertical gridlines** | Adds vertical gridlines. | Off |
| **Show vertical hover line** | Shows a vertical guide line on hover. | On |
| **Show Count total under chart** | Displays total count below the chart. | On |

### Axis & label

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show y-axis label / Y-axis label** | Toggle + text for Y-axis title. | On / Issues |
| **Show x-axis label / X-axis label** | Toggle + text for X-axis title. | On / Date |
| **Y-axis height** | Chart height control (range: 320-800px). | 350px |
| **Y-axis unit** | Axis unit: Count or %. | Count |

## Table charts (Table / Table 2D)

![Table Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/table-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on hover** | Shows tooltip when hovering over values/names. | On |
| **Show number column** | Adds a serial/number column. | On |
| **Show total rows** | Adds total row(s) at bottom. | On |
| **Limit rows** | Limits table rows shown (range: 1-200). | 5 |

### Table 2D only

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show total column** | Adds a total column to the right. | On |
| **Display** | Chooses how values display: Count, Count / %, %, % / Count. | Count |
| **Group By Label** | Custom label for the group-by dimension. | Blank |
| **Show group by heading label** | Shows/hides the group-by heading label. | On |

### Labels

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Table heading label. | Blank |
| **Count label** | Column label for count values. | Issues |

**Example (Table):** For clean dashboards, set **Limit rows = 10-20**, enable **Show total rows**, and keep **Display = Count / %** for executive summaries (Table 2D).

## Tile chart

![Tile Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/tile-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Max tiles per row** | Controls how many tiles appear in one row (range: 1-8). | 5 |
| **Limit rows** | Controls how many tile rows appear (range: 1-50). | 2 |
| **Display** | Tile content format: Count, Count / %, %, % / Count, Name only. | Count |
| **Show count total** | Shows the total count summary (where applicable). | On |
| **Show tooltip on name hover** | Shows tooltip when hovering tile name. | On |

### Labels

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Tile section heading label. | Blank |
| **Count label** | Label for count values. | Issues |
| **Show chart by and count labels** | Shows/hides footer labels for chart-by + count label. | On |

**Example (Tiles):** For compact widgets, use **Max tiles per row = 4**, **Limit rows = 2**, and **Display = Count / %**.

![Tile Chart Example](/images/dashboard-charts/Custom%20Charts/Display%20Options/tile-chart-eg.png)

## Quick tips

* Keep **% Places Control = 0-1** for clean dashboards.
* Use **Limit rows** (Table) / **Limit rows + Max tiles per row** (Tile) to avoid overcrowding.
* Turn **Auto refresh** ON for live dashboards; keep it OFF for static reports.
* If users can't export, check whether **Export** is disabled by admin.
`,
        },
        {
          slug: "templates",
          title: "Templates",
          content: `
Use Templates to start a Custom Chart faster with a ready-made chart setup. Templates are useful for common reporting views such as Issues by Status, Priority, Issue Type, Assignee, Project, and comparison-style charts.

## Where to find it

![Where to Find Templates](/images/dashboard-charts/Custom%20Charts/Templates/where-to-find-templates.png)

* Open a Custom Chart gadget.
* Click Edit.
* Use the Templates option from the chart header or title area.
* Browse the template list, search by name, and click Use Template.

## What Templates do

* Give users a quick starting point instead of building the chart manually from scratch.
* Apply a ready-made chart idea with the main chart structure already filled in.
* Help teams create common reports more consistently across dashboards.
* Still allow the user to edit the chart after the template is applied.

## What gets applied when you use a template

![Template Applied](/images/dashboard-charts/Custom%20Charts/Templates/template-applied.png)

| **Area** | **What the template applies** | **Why it matters** |
| --- | --- | --- |
| **Chart setup** | Chart title, chart type, main field, and group by field when defined in the template. | The basic report layout is created for you. |
| **Advanced logic** | JQL segments and group-by JQL segments for templates that use comparison or segment-based logic. | Templates can represent more than a simple field chart. |
| **Starter labels** | Starter labels used by the template where needed. | Users get a readable chart immediately and can refine it later. |

## Template catalog for Custom Charts

![Templates Catalog](/images/dashboard-charts/Custom%20Charts/Templates/templates-catalog.png)

![Read Each Template](/images/dashboard-charts/Custom%20Charts/Templates/read-each-template.png)

| **Template** | **Chart type** | **Main field** | **Group By** | **What it creates** | **Best use** |
| --- | --- | --- | --- | --- | --- |
| **Issues by Status** | Pie Chart | status | - | Shows how issues are distributed by status. | Good for a fast status breakdown and a simple shareable chart. |
| **Issues by Priority** | Funnel Chart | priority | - | Shows issue volume by priority in a funnel-style view. | Useful when you want to compare how work is distributed across priority levels. |
| **Issues by Issue Type** | Line Chart | issuetype | - | Plots issues by issue type in a line-style view. | Useful when you want a lightweight category comparison in a line chart presentation. |
| **Issues by Assignee** | Bar Chart | assignee | - | Shows how work is distributed across assignees. | Useful for workload distribution or ownership checks. |
| **Unresolved Issues** | Bar Chart | Custom JQL | - | Creates a JQL-segment chart using the segment "Unresolved" with JQL \`status != Done\`. | Useful when you want a quick unresolved-only starter chart without building a segment manually. |
| **Issues by Component** | Table Chart | components | - | Builds a table-based summary by component. | Useful when users prefer a tabular view instead of a visual chart. |
| **Issues by Labels** | Bar Chart | labels | - | Builds a bar chart grouped by issue labels. | Useful for tag-based reporting and theme analysis. |
| **Issues by Fix Version** | Line Chart | fixVersions | - | Builds a line-style chart by fix version. | Useful for release-oriented reporting. |
| **Bug Rate by Sprint** | Grouped Bar Chart | sprint | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "Bugs" segment using \`issuetype = Bug\`. | Useful when you want sprint-level comparison with a bug-only grouped slice. |
| **Issues by Status per Project** | Stacked Bar Chart | status | project | Compares statuses within each project using a stacked bar layout. | Useful for cross-project status comparison in one chart. |
| **Issues by Priority per Project** | Grouped Bar Chart | priority | project | Compares project-level priority distribution side by side. | Useful for seeing whether one project carries more high-priority work than another. |
| **Issues by Type per Assignee** | Stacked Bar Chart | issuetype | assignee | Compares issue types within each assignee. | Useful for role mix, work allocation, and team ownership analysis. |
| **To Do by Priority** | Stacked Bar Chart | priority | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "TO DO" segment using \`status = 'To Do'\`. | Useful when you want to compare only To Do issues by priority. |
| **Epic Progress** | Grouped Bar Chart | status | Epic link | Builds a grouped comparison using status within each Epic link. | Useful for epic-level progress review and delivery tracking. |

## Important behavior and limitations

* Templates are built-in starter templates in the current implementation. They are not user-saved personal templates from the UI.
* Templates focus on chart setup, not full gadget restoration.
* Templates do not replace the need for Display Options when you want appearance-level customization.
* If the admin disables the Templates feature, users will not be able to use the template action.
`,
        },
        {
          slug: "date-range-custom-charts",
          title: "Date Range for Custom Charts",
          content: `
Use date fields to group Jira issues into clear time periods, build trend charts, and control how dates appear in labels and tooltips.

## Where to find it

* Open a Custom Chart gadget.
* Click Edit.
* Choose a date field such as Created, Updated, Due date, Resolved, or a custom date field.
* Use the date controls in the chart configuration and Display Options panel.

## What the date feature does

* Recognizes when the selected field is a date or date-time field.
* Groups raw dates into reporting buckets such as day, week, month, quarter, or year.
* Lets you choose a date range such as all dates, recent rolling periods, or a custom between-dates range.
* Formats date labels in a readable way across the chart, legend, labels, and tooltips.
* Keeps date-based charts in chronological order so trends are easier to read.

**When it appears:** The date feature becomes important when your Chart By field or Group By field is a date field. In that case, the gadget stops treating the values like normal categories and starts treating them as time-based data.

## Main date controls

| **Control** | **What it does** | **Common values** |
| --- | --- | --- |
| **Date grouping** | Controls how dates are bucketed for reporting. | Days, Weeks, Months, Years |
| **Date range** | Limits which period is included in the chart. | All, Past 7 Days, Past 30 Days, Past 90 Days, This Week, Last Week, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year, Between dates |
| **Custom from / to dates** | Appears when Between dates is selected so the user can define an exact window. | Manual date entry |
| **Date format** | Controls how the final date labels appear to users. | Examples include DD Mon YYYY, Mon DD, YYYY, or YYYY-M-DD |
| **Ordering** | Keeps date charts in time order instead of alphabetical order. | Chronological by default for date fields |

> **Note:** When a date field is selected, the gadget automatically prefers chronological ordering. This makes trend charts easier to read.

## Date grouping options

| **Grouping option** | **Best use** |
| --- | --- |
| **Days** | Shows each day as its own point or segment. Best for short time windows and detailed monitoring. |
| **Weeks** | Groups issues into weekly buckets. Useful for sprint-level and weekly trend reporting. |
| **Months** | Groups issues by calendar month. Good for management reporting and longer trend views. |
| **Years** | Groups issues by year. Best for long-term summaries with a broad time span. |

## Date range options

| **Range option** | **When to use it** |
| --- | --- |
| **All** | Shows all available dates in the result set. |
| **Past 24 Hours** | Rolling window ending now. Useful for near-real-time activity. |
| **Past 3 / 7 / 30 / 90 Days** | Rolling time windows for short- or medium-term trend analysis. |
| **This Week / Last Week** | Calendar-based weekly windows. |
| **This Month / Last Month** | Calendar-based monthly windows. |
| **This Quarter / Last Quarter** | Quarter-based reporting windows. |
| **This Year / Last Year** | Year-based reporting windows. |
| **Between dates** | Lets the user choose an exact from-date and to-date for a custom report window. |

## Examples

* Created by Month: shows how many issues were created in each month.
* Resolved by Week: shows weekly completion trend.
* Due Date by Quarter: groups upcoming work by quarter.
* Updated by Day for the Past 7 Days: useful for operational monitoring and daily activity checks.

## Best practices

* Use Days for short ranges and Months or Quarters for long ranges.
* Use line charts when you want to show a clear trend over time.
* Use a custom Between dates range when you need a precise reporting window.
* Keep the selected date format simple and consistent across dashboards.
* If the chart feels crowded, widen the range grouping from Days to Weeks or Months.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. ISSUE LIST GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "issue-list-gadget",
      title: "Issue List Gadget",
      articles: [
        {
          slug: "issue-list-gadget-intro",
          title: "Issue List Gadget",
          content: `The **Issue List** gadget displays your Jira issues in a highly configurable table format. It is perfect for generating live status reports, tracking team workloads, and providing quick, clickable access to issue details directly from your dashboard.

Use this section to learn how to customize your table columns, add visual indicators for high-priority items, and set up interactive filters for your users.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Issue List does, data sources, and when to use it over a chart.* |
| **Columns** | *How to add, rename, reorder, and remove columns - plus recommended column sets for common use cases.* |
| **Smart Labels** | *Add color-coded badge indicators to issues based on JQL conditions or saved filters.* |
| **Quick Filters** | *Add one-click filter buttons above the table, configure AND/OR logic, and set up preset views.* |
| **Display Options & Export** | *Table display preferences, pagination, timestamps, avatars, and export formats.* |
| **Templates For Issue List** | *Ready-made table layouts for common reporting use cases.* |
`,
        },
        {
          slug: "issue-list-overview",
          title: "Overview",
          content: `The Issue List gadget displays your Jira issues in a configurable table on your dashboard. It complements visual charts by showing the actual issues behind the numbers - with the columns, labels, and filters your team needs.

![Issue List gadget](/images/dashboard-charts/Issue%20List/issue-list-guide.png)

## When to Use Issue List

Use Issue List when you need:
- The actual issues behind a chart segment (not just a count)
- A live sprint board or workqueue on a dashboard
- A filtered issue table for standups, triage, or reviews
- An exportable list for stakeholders

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Show all issues from one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the issue scope |
| **Custom JQL** | Write precise JQL to scope exactly which issues appear |
| **Dynamic Filter Controller** | Connect to a shared filter bar so users can filter the table interactively |

## Feature Overview

| **Feature** | **Description** |
| --- | --- |
| **Custom Columns** | Add any Jira field as a column - standard or custom |
| **Smart Labels** | Color-coded badge indicators based on JQL or saved filter conditions |
| **Quick Filters** | One-click filter buttons above the table for instant slicing |
| **AND/OR Filter Logic** | Control whether multiple active filters narrow or broaden the result |
| **Sorting** | Click any column header to sort ascending or descending |
| **Pagination** | Show 5, 10, 20, or 50 issues per page |
| **Templates** | Pre-built table layouts for common use cases |
| **Export** | CSV, PNG, and PDF export for the currently filtered result set |
| **Import/Export Config** | JSON backup and restore of the full gadget configuration |
`,
        },
        {
          slug: "issue-list-columns",
          title: "Columns",
          content: `Columns are the foundation of the Issue List. You choose which Jira fields appear as columns, what order they appear in, and what labels to show.

## Adding Columns

1. Open the Issue List gadget in edit mode
2. In the **Columns** section, click **+ Add another field**
3. Search for the field you want (e.g., "Story Points", "Due Date", "Component")
4. Click the field to add it as a column
5. Repeat to add more columns

Any Jira field is available - standard fields and custom fields.

## Reordering Columns

Drag the handle icon next to a column up or down to change its position. The top of the list = leftmost column in the table.

## Renaming Columns

Click the **pencil icon** next to a column name and enter a new label. The rename only affects the column header in the table - the underlying Jira field is unchanged.

![Rename Columns](/images/dashboard-charts/Issue%20List/issue-list-renaming-columns.png)

## Removing Columns

Click the **trash icon** next to a column to remove it.

## Recommended Column Sets

Start with one of these proven combinations for common use cases:

**Sprint Report**
Key · Summary · Status · Assignee · Story Points · Priority

**Bug List**
Key · Summary · Priority · Status · Assignee · Created · Component

**Team Workload**
Assignee · Key · Summary · Status · Priority · Due Date

**Release Tracking**
Key · Summary · Priority · Status · Assignee · Fix Version · Updated

**Triage Queue**
Key · Summary · Priority · Status · Assignee · Created · Reporter

> **Tip:** Add the **Issue Type** column to any set - it helps distinguish Stories, Bugs, Tasks, and Epics at a glance without needing to click into each issue.
`,
        },
        {
          slug: "issue-list-smart-labels",
          title: "Smart Labels",
          content: `Smart Labels add a colored badge to any issue that matches a condition. They make it easy to spot critical, overdue, blocked, or high-risk issues at a glance - without filtering the table.

![Smart Labels](/images/dashboard-charts/Issue%20List/smart-labels.png)

## How Smart Labels Work

A Smart Label adds a new **indicator column** to the table. When an issue matches the label's condition, a colored badge appears in that column. Issues that don't match show an empty cell.

Multiple Smart Labels can be active at the same time - each gets its own column.

## Two Types of Smart Labels

| **Type** | **How It Works** | **Best When** |
| --- | --- | --- |
| **JQL-Based** | Shows badge if the issue matches a JQL condition | Custom conditions - overdue, blocked, SLA breach, any complex logic |
| **Filter-Based** | Shows badge if the issue matches a saved Jira filter | Reusing filter criteria already defined in Jira |

## How to Add a Smart Label

1. Open the Issue List gadget in edit mode
2. In the right panel, find the **Smart Labels** section
3. Click **+ Add Smart Label**
4. Enter a label name (e.g., "Overdue")
5. Choose the label type: JQL-Based or Filter-Based
6. Enter the JQL condition or select the saved filter
7. Choose a badge color
8. Save the gadget

## Smart Label Examples

| **Label** | **Type** | **Condition** |
| --- | --- | --- |
| **Critical** | JQL | \`priority = Highest\` |
| **Overdue** | JQL | \`duedate < now() AND resolution is EMPTY\` |
| **Blocked** | JQL | \`labels = blocked\` |
| **Unassigned** | JQL | \`assignee is EMPTY\` |
| **Due Soon** | JQL | \`duedate >= now() AND duedate <= 7d\` |
| **Escalated** | JQL | \`labels = escalated OR priority in (Highest, High)\` |
| **My Watch** | Filter | Any saved Jira filter you select |

## Color Conventions

While any color works, a consistent convention helps users read the table faster:
- **Red** - urgent / breached (Overdue, Critical, Blocked)
- **Orange** - at risk / approaching deadline (Due Soon, High Priority)
- **Blue** - informational (Watching, Assigned to me)
- **Green** - positive state (Ready for Review, Approved)
`,
        },
        {
          slug: "issue-list-quick-filters",
          title: "Quick Filters",
          content: `Quick Filters add clickable buttons above the Issue List table. One click instantly filters the table to a preset view - no re-configuration needed.

![Quick Filters](/images/dashboard-charts/Issue%20List/issue-list-quickfilters.png)

## How Quick Filters Work

Each Quick Filter button applies a JQL condition to the current issue set. When clicked, the table reloads showing only issues that match. Click the button again to deactivate it.

Multiple filters can be active at the same time - AND/OR logic controls how they combine.

## How to Add a Quick Filter

1. Open the Issue List gadget in edit mode
2. In the right panel, find the **Quick Filters** section
3. Click **+ Add filter**
4. Enter a label (e.g., "My Issues")
5. Enter the JQL condition
6. Save the gadget

## Quick Filter Ideas

| **Button Label** | **JQL Condition** |
| --- | --- |
| **My Issues** | \`assignee = currentUser()\` |
| **Bugs Only** | \`issuetype = Bug\` |
| **High Priority** | \`priority in (High, Highest)\` |
| **Due This Week** | \`duedate >= startOfWeek() AND duedate <= endOfWeek()\` |
| **Unassigned** | \`assignee is EMPTY\` |
| **Blocked** | \`labels = blocked\` |
| **Overdue** | \`duedate < now() AND resolution is EMPTY\` |
| **This Sprint** | \`sprint in openSprints()\` |
| **Recently Updated** | \`updated >= -7d\` |

## AND vs OR Logic

When multiple Quick Filters are active, you choose how they combine:

![AND vs OR](/images/dashboard-charts/Issue%20List/issue-list-AND-OR.png)

| **Mode** | **Behavior** | **Example** |
| --- | --- | --- |
| **AND** | Issues must match ALL active filters | "My Issues" AND "High Priority" → only my high-priority issues |
| **OR** | Issues must match ANY active filter | "My Issues" OR "Unassigned" → all issues assigned to me or to nobody |

**Use AND** when you want to narrow the result - e.g., "show only bugs that are also unassigned."

**Use OR** when you want to broaden the result - e.g., "show anything that's either a bug or overdue."
`,
        },
        {
          slug: "issue-list-display-export",
          title: "Display Options & Export",
          content: `Control how the table looks, how many issues appear per page, and how to export the data.

## Display Options

![Display Options](/images/dashboard-charts/Issue%20List/issue-list-display-options.png)

| **Option** | **What It Does** | **Default** |
| --- | --- | --- |
| **Results per page** | Number of issues shown per page: 5, 10, 20, or 50 | 10 |
| **Alternating row colors** | Striped rows for easier reading | Off |
| **Show number column** | Adds a row number in the first column | Off |
| **Show timestamps** | Shows time alongside date values (e.g., "Jan 06, 2025 14:32") | Off |
| **Show user icons** | Shows avatar images for Assignee and Reporter | On |
| **Disable hyperlinks** | Turns off clickable issue key links | Off |

> **Tip:** Enable **alternating row colors** on wide tables - it makes it much easier to track a row across many columns without losing your place.

## Sorting

Click any column header to sort the table by that column. Click again to reverse the sort direction. Sorting applies to the current filtered result set.

## Export

![Export Options](/images/dashboard-charts/Issue%20List/issue-list-export-options.png)

| **Format** | **Best For** |
| --- | --- |
| **CSV** | Opening in Excel or Google Sheets for further analysis |
| **PNG** | Including the table as an image in presentations or emails |
| **PDF** | Printable document for stakeholder reports |
| **Configuration** | JSON backup of all gadget settings for reuse or backup |

> **Tip:** The export includes only the **currently filtered data**. If you have Quick Filters active, the export reflects those filters - useful for exporting exactly "all critical open bugs" without editing the underlying data source.
`,
        },
        {
          slug: "templates-issue-list",
          title: "Templates For Issue List",
          content: `
Start with a ready-made table layout instead of building the Issue List from scratch. Templates set up the most useful columns, default sorting, and quick filters so you can reach a working view faster.

## Where to find it

1. Open an Issue List gadget
2. Click Edit
3. Open the Templates option in the gadget configuration area
4. Choose a template and apply it

## What templates do

* Apply a ready-made issue table layout for a common reporting use case.
* Update the table title to match the template name.
* Set the main columns shown in the Issue List.
* Apply default table sorting for that view.
* Load the quick filters included in the template.
* Apply the template filter operator when one is defined.

> **Note:** Templates are designed to speed up setup. They give you a strong starting point, and you can still edit columns, sorting, quick filters, and display options after the template is applied.

## What stays the same when you apply a template

* The data source stays unchanged. The template does not switch your selected projects, saved filter, custom JQL, or linked Dynamic Filter Controller.
* The template mainly changes presentation and filtering inside the Issue List, not the source selection.
* Existing admin restrictions still apply.

## Important template behavior

| **Behavior** | **What it means** |
| --- | --- |
| **Title update** | The Issue List title is updated to the template name so the table is easy to recognize. |
| **Column setup** | The template chooses the main columns for that use case, such as Key, Summary, Status, Priority, Assignee, Created, Updated, or Resolved. |
| **Sorting** | The template applies default sorting so the most important issues appear first. |
| **Quick filters** | Templates can include one or more quick filters. Some templates include active quick filters by default, while others include optional filters that start inactive. |
| **Filter operator** | Templates use a filter operator to combine quick filters. In the current built-in catalog, the operator is AND. |
| **Issue Type safeguard** | If a template does not include Issue Type in its column list, the gadget automatically adds Issue Type so the table keeps a clear type indicator. |

## Built-in Issue List templates

| **Template** | **Best used for** | **Main columns** | **Default sort** |
| --- | --- | --- | --- |
| **My Open Issues** | Personal work queue | Key, Summary, Status, Priority, Updated, Assignee | Updated newest first |
| **Recently Updated Issues** | Latest activity tracking | Key, Summary, Status, Assignee, Updated, Project | Updated newest first |
| **Unresolved by Priority** | Outstanding work by urgency | Priority, Key, Summary, Status, Assignee, Created | Priority high to low, then newest created |
| **Team Workload** | Work split by assignee | Assignee, Key, Summary, Status, Priority, Due Date | Assignee A-Z, then Priority high to low |
| **Reopened Issues** | Reopened or bounced-back work | Key, Summary, Status, Priority, Assignee, Updated, Resolved | Updated newest first |
| **Blockers List (Release / Sprint)** | Release or sprint blockers | Key, Summary, Priority, Status, Assignee, Fix Versions, Updated | Priority high to low, then Updated newest first |
| **Recently Resolved (Last 7 days)** | Freshly completed work | Key, Summary, Priority, Assignee, Resolved, Created | Resolved newest first |
| **High Priority Unassigned (Triage)** | Unassigned urgent work needing ownership | Priority, Key, Summary, Status, Project, Created, Updated | Priority high to low, then oldest created first |
| **Open Issues (No update in 14 days)** | Aging open work | Key, Summary, Status, Assignee, Priority, Updated, Created | Oldest updated first |
| **Critical Bugs Open (P1 Bugs)** | Highest-risk bug list | Key, Summary, Priority, Status, Assignee, Updated, Created | Updated newest first |
| **Delivery Outliers (Recently Resolved, Created Long Ago)** | Items resolved recently but created long ago | Key, Summary, Priority, Created, Resolved, Assignee | Resolved newest first, then oldest created first |

> **Note:** Templates do not lock the Issue List. After applying a template, you can still add or remove columns, change the sort order, edit quick filters, and save the gadget with your own final setup.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. DYNAMIC FILTER CONTROLLER
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dynamic-filter-controller",
      title: "Dynamic Filter Controller",
      articles: [
        {
          slug: "dynamic-filter-controller-intro",
          title: "Dynamic Filter Controller",
          content: `The **Dynamic Filter Controller** is the key to building truly interactive dashboards. Instead of hard-coding every chart, this gadget creates a shared, interactive filter bar that controls multiple Custom Charts and Issue Lists simultaneously.

Use this section to learn how to set up your base data, configure dropdown filters, create preset tabs for your users, and connect all your gadgets together for real-time updates.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Dynamic Filter Controller does, how it works, and when to use it.* |
| **Setup & Filter Types** | *How to configure the base data source, add filter fields, and choose between Jira field, text, JQL, and saved filter types.* |
| **Tabs** | *Create preset filter views users can switch between with one click - like "This Sprint", "My Issues", or "Bugs Only".* |
| **Connecting Gadgets** | *How to link charts and issue lists to the controller using the Reference ID, verify connections, and control display options.* |
| **Templates For Dynamic Filter Controller** | *Ready-made filter field sets and quick filters for common use cases.* |
`,
        },
        {
          slug: "dynamic-filter-controller-overview",
          title: "Overview",
          content: `The Dynamic Filter Controller is a shared interactive filter bar that sits on your dashboard. When a user changes a filter, every gadget connected to it updates simultaneously - charts, tables, and all.

![Dynamic Filter Controller Guide](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-filter-guide.png)

## The Problem It Solves

Without the controller, filtering requires editing each gadget individually. A dashboard with 6 gadgets needs 6 separate edits to show "only sprint 42" - and reverting requires 6 more.

With the controller, one filter selection updates all 6 gadgets at once. Users interact with dashboards without needing to edit anything.

## How It Works

1. **You set up the controller** with a base data source and the filter fields users should see
2. **You connect your gadgets** to the controller using a Reference ID
3. **Users select filters** in the bar - the whole dashboard updates instantly
4. **Users click tabs** to switch between preset views (e.g., "This Sprint", "My Issues")

## Feature Overview

| **Feature** | **Description** |
| --- | --- |
| **Shared Filtering** | One filter bar controls all connected gadgets simultaneously |
| **4 Filter Types** | Jira field dropdowns, text search, custom JQL, saved filter toggles |
| **Preset Tabs** | Named views users switch between with one click |
| **Real-time Updates** | Connected gadgets update immediately on filter change |
| **Reference ID** | A unique code used to link gadgets to the controller |
| **Templates** | Pre-built tab configurations for common use cases |

## When to Use It

Use the Dynamic Filter Controller when:
- Your dashboard has more than 2 gadgets and users need to filter across all of them
- Different team members need to filter the same dashboard by their own name
- You want preset views like "This Sprint", "Bugs Only", or "My Issues" users can switch between instantly
- You want a clean, interactive dashboard without exposing complex JQL to end users
`,
        },
        {
          slug: "dynamic-filter-controller-setup",
          title: "Setup & Filter Types",
          content: `Set up the Dynamic Filter Controller by choosing a base data source and adding the filter fields users will interact with.

## Step 1: Base Data Source

The base data source defines the universe of issues that can be filtered. All gadgets connected to this controller will draw their data from this scope.

![Dynamic Filter Base Data Source](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-Filter-Base-Data-Source.png)

Choose the source type that covers the full scope of your dashboard:

| **Source** | **When to Use** |
| --- | --- |
| **Projects** | The dashboard covers one or more Jira projects |
| **Saved Filter** | You have a pre-defined filter that covers the dashboard scope |
| **Custom JQL** | You need precise scoping (e.g., \`project = TEAM AND issuetype in (Story, Bug, Task)\`) |

> **Tip:** Use JQL as the base source to pre-scope the data, then let filter fields narrow it further. This keeps the dataset focused and avoids slow queries.

## Step 2: Add Filter Fields

Filter fields are the dropdowns, search boxes, and toggles that appear in the filter bar.

1. In the edit mode, go to the **Fields** tab
2. Click **+ Add Field**
3. Choose the field type
4. Configure and label the field
5. Repeat for each filter you want

![Dynamic Filter Columns](/images/dashboard-charts/Dynamic%20FIlter/dynmaic-filter-columns.png)

## Filter Field Types

| **Type** | **What It Creates** | **Best For** |
| --- | --- | --- |
| **Jira Field** | A dropdown of values for any Jira field | Status, Sprint, Assignee, Priority, Issue Type, Component, etc. |
| **Contains Text** | A free-text search box | Filtering by issue summary or description keywords |
| **Custom JQL** | An advanced JQL input field | Power users who need complex conditions |
| **Saved Filter** | A toggle button that applies a saved Jira filter | Reusing Jira filters as one-click toggles |

## Recommended Filter Combinations

| **Dashboard Type** | **Suggested Filter Fields** |
| --- | --- |
| **Sprint Dashboard** | Sprint, Assignee, Status, Priority |
| **Team Workload** | Assignee, Status, Issue Type, Priority |
| **Bug Tracking** | Priority, Status, Assignee, Component |
| **Release Dashboard** | Fix Version, Priority, Status, Assignee |
| **Executive KPI** | Project, Status Category, Assignee |

## Order and Labels

- **Order** the filter fields from most to least important - leftmost filters get the most use
- **Label** each field clearly - "Team Member" is clearer than "Assignee" for non-Jira users
`,
        },
        {
          slug: "dynamic-filter-controller-tabs",
          title: "Tabs",
          content: `Tabs let users switch between preset filter views with a single click. Instead of manually selecting filters every time, users click a tab name and the whole dashboard snaps to that preset.

![Dynamic Filter Tab](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-tab-example.png)

## What Tabs Are

Each tab stores a set of pre-selected filter values. When a user clicks a tab, all the controller's filter fields jump to those values and all connected gadgets update instantly.

**Example tabs:**
- **All Work** → no filters active (shows everything)
- **This Sprint** → Sprint filter set to current sprint
- **My Issues** → Assignee filter set to current user
- **Bugs Only** → Issue Type filter set to Bug
- **High Priority** → Priority filter set to High + Highest

## How to Create a Tab

1. Open the Dynamic Filter Controller in edit mode
2. In the **Live Preview** area, click the **+** button next to the existing tab
3. A new tab appears - click its name to rename it
4. Set the default filter values for this tab (select values in the filter bar)
5. Repeat to add more tabs
6. Click **Save gadget**

## Managing Tabs

- **Rename**: Click the tab name to edit it inline
- **Delete**: Hover the tab and click the remove icon
- **Reorder**: Drag tabs to change their left-to-right order

## Tab Design Tips

- **Keep tab names short** - "My Issues" not "Issues Assigned to Me"
- **Always include an "All" or "All Work" tab** - users need a one-click reset
- **Order tabs by frequency of use** - most common tabs on the left
- **Use 3–6 tabs** - more than 6 makes the bar cluttered

## Common Tab Patterns

| **Tab Name** | **Preset Filters** | **Best For** |
| --- | --- | --- |
| **All Work** | (no filters) | Default / reset view |
| **My Issues** | Assignee = currentUser() | Personal workqueue |
| **This Sprint** | Sprint = active sprint | Sprint planning and standups |
| **Bugs Only** | Issue Type = Bug | Bug tracking and QA |
| **Blockers** | Labels = blocked OR Priority = Highest | Daily risk review |
| **High Priority** | Priority in (High, Highest) | Triage and prioritization |
| **Done This Month** | Status = Done AND resolved >= startOfMonth() | Retrospective and reporting |
`,
        },
        {
          slug: "dynamic-filter-controller-connect",
          title: "Connecting Gadgets",
          content: `After setting up the controller and saving it, connect your charts and issue lists so they respond to its filter bar.

## The Reference ID

When you save the Dynamic Filter Controller, it generates a **Reference ID** - a short unique code (e.g., "ABC123") shown on the saved gadget.

This ID is how you link other gadgets to this controller. Each controller on a dashboard has its own Reference ID.

## How to Connect a Gadget

1. Open the gadget you want to connect (Custom Charts, Issue List, Time in Status, etc.) in edit mode
2. In the **left panel**, change **Source Type** to **Dynamic Filter Controller**
3. A dropdown appears - select your controller by its Reference ID
4. Click **Save gadget**

Repeat for every gadget you want the controller to drive.

## Verifying Connections

To see which gadgets are connected, click **"Show Connected Charts"** in the controller. All connected gadgets on the dashboard are highlighted.

![Verifying Connections](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-verifying-connections.png)

## Troubleshooting Connections

| **Symptom** | **Fix** |
| --- | --- |
| **Gadget not updating when filter changes** | Verify the gadget's Source Type is "Dynamic Filter Controller" and the correct Reference ID is selected |
| **Controller doesn't appear in the dropdown** | Both gadgets must be on the same dashboard |
| **Wrong data showing after filter selection** | Check the controller's base data source - it may be scoped differently than expected |
| **Dashboard still shows old data** | Try a hard refresh (Ctrl+F5) and re-save the controller without changes |

## Display Options

Control what users can see and do in view mode:

![Display Options](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-display-options.png)

| **Option** | **What It Allows** |
| --- | --- |
| **Show Sorting Options** | Users can sort connected Issue Lists from the filter bar |
| **Allow Add Fields** | Users can temporarily add extra filter fields in view mode (they do not persist) |
| **Show AND/OR Selector** | Users can toggle whether multiple active filters combine with AND or OR logic |
| **Show Options Menu** | Shows or hides the gadget's options menu button |

## What Users Can Do in View Mode

Once the dashboard is saved and edit mode is closed, users can:

- Pick values from dropdown filter menus
- Type keywords into text search fields
- Click tabs to switch between preset views
- Click **Search** to apply their selections
- Click **Reset** to clear all filters and return to the default view
- Add temporary extra fields (if "Allow Add Fields" is on)
`,
        },
        {
          slug: "templates-dynamic-filter-controller",
          title: "Templates For Dynamic Filter Controller",
          content: `
Use Templates to add a ready-made set of filter fields and quick filters to the active tab of your Dynamic Filter Controller gadget. Templates help you start faster and then fine-tune the tab for your team.

## Where to find it

* Open a Dynamic Filter Controller gadget.
* Click Edit.
* In the top section, open Templates.
* Choose the template that matches the type of work you want to manage.

## What Templates do

* Apply only to the active tab. Other tabs stay as they are.
* Replace the active tab's field list with the fields from the selected template.
* Add the template's quick filters as toggle-style filter chips.
* Carry over the current project selection from the gadget data source into the active tab's default selections.
* Keep tabs enabled and keep the selected tab active after the template is applied.
* Leave the gadget data source unchanged. Templates do not switch Projects, Saved Filter, or Custom JQL for you.
* Do not create new tabs and do not remove existing tabs.

| **Area** | **What happens when you apply a template** |
| --- | --- |
| **Active tab fields** | The current field list on the active tab is replaced by the template field set. |
| **Quick filters** | Template quick filters are added as Custom JQL toggle chips. Filters marked active in the template start enabled. |
| **Selected projects** | The current project selection is reused as a default selection on the active tab. |
| **Other tabs** | No changes are made to other tabs. |
| **Data source** | No change. The existing source type and source values remain in place. |
| **Gadget layout and display options** | No chart-style or admin-setting change is made by templates. |

> **Note:** Some templates use fields such as Sprint, Epic, or Story Points. If those fields are not available in your Jira site or are configured differently, you may need to edit the tab after applying the template.

## Built-in template catalog

| **Template** | **Best for** | **Main filters** | **Default active filter** |
| --- | --- | --- | --- |
| **My Work (Daily Driver)** | Everyday personal work view | Project, Issue Type, Status, Assignee, Priority, Text | Assignee to me |
| **Sprint Control (Scrum)** | Sprint planning and sprint tracking | Project, Sprint, Status, Assignee, Issue Type, Text | Current sprint |
| **Backlog Grooming** | Backlog clean-up and triage | Project, Issue Type, Priority, Assignee, Labels, Components, Text | Backlog only |
| **Team Workload (People View)** | Balancing work across people | Project, Assignee, Status Category, Priority, Due Date, Text | Assigned only |
| **Triage Inbox (New + Unowned)** | New work that needs assignment | Project, Issue Type, Priority, Assignee, Created, Components, Text | Unassigned only + Created last 48h |
| **Critical Incidents (P1/P2)** | Serious incident response | Project, Issue Type, Priority, Status, Assignee, Updated, Text | P1 only |
| **Aging Open Issues (Stale Work)** | Work that has gone quiet | Project, Status Category, Priority, Assignee, Updated, Text | Open only + No update 14d+ |
| **Roadmap Scope (Epic + Work)** | Roadmap and epic-level visibility | Project, Epic, Issue Type, Status Category, Assignee, Priority, Text | Not done |
| **Dependency & Blockers (Delivery Risk)** | Blocked work and linked issue risk | Project, Status, Priority, Assignee, Text | Is blocked |
| **QA / Testing Pipeline** | Testing handoff and QA tracking | Project, Status, Issue Type, Priority, Assignee, Fix Versions, Text | Bugs only |
| **Due Dates & Commitments** | Deadline and commitment tracking | Project, Due Date, Status Category, Assignee, Priority, Text | Due this week |
| **Customer Escalations / VIP** | Escalated or VIP work | Project, Priority, Status, Assignee, Labels, Updated, Text | Escalation |

> **Note:** Dynamic Filter Controller template is a starter pack for one tab. It gives that tab a useful set of fields and quick filters, but it does not rebuild the whole gadget.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. TIME IN STATUS GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "time-in-status-gadget",
      title: "Time in Status Gadget",
      articles: [
        {
          slug: "time-in-status-gadget-intro",
          title: "Time in Status Gadget",
          content: `The **Time in Status** gadget measures exactly how long issues spend in each workflow status. Unlike charts built from current issue state, this gadget reads the full issue changelog to calculate precise transition times - giving you an accurate picture of where work gets stuck and where it flows smoothly.

Use this section to understand report types, configuration options, status grouping, and how to interpret bottleneck data.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What Time in Status does, data source options, and when to use it.* |
| **Report Types** | *All 7 report types explained - Time in Status, Average Time, Status Count, Transition Count, Time in Assignee, Time per Date, Status Entrance Date.* |
| **Columns & Date Range** | *Configure which fields and statuses appear in the report and scope the analysis to a time window.* |
| **Status Groups** | *Combine multiple statuses into named bands - built-in Cycle Time and Lead Time groups, plus how to create your own.* |
| **Work Schedule & Time Formats** | *Calculate elapsed time in business hours only using configurable work schedules and time format options.* |
| **Display Settings & Export** | *Display options, export formats, and tips for interpreting the results.* |
`,
        },
        {
          slug: "time-in-status-overview",
          title: "Overview",
          content: `The Time in Status gadget reads your Jira issue changelog to calculate exactly how long each issue has spent in every workflow status - not just the current state, but the complete history of every transition.

## When to Use It

- **Finding bottlenecks** - which status holds work longest?
- **Measuring Cycle Time and Lead Time** across your workflow
- **Detecting rework** - issues that visit the same status multiple times
- **SLA tracking** - when did issues enter each stage?
- **Assignee analysis** - who holds work the longest?

## What Makes It Different from Other Charts

Standard Jira charts show the current state of issues. Time in Status reads the full changelog - every time an issue moved from one status to another, the exact timestamp is recorded. This gadget uses those timestamps to calculate real durations, not snapshots.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Select one or more Jira projects and analyze all issues within them |
| **Saved Filter** | Use a pre-saved Jira filter to scope the issue set |
| **Custom JQL** | Write a JQL query for precise scoping (e.g., \`sprint in openSprints()\`) |
| **Board** | Connect to a Jira Software board - issues on that board are used as the analysis scope |
| **Dynamic Filter Controller** | Connect to a shared filter bar so users can slice the data interactively |

## Feature Highlights

| **Feature** | **Description** |
| --- | --- |
| **Changelog-Based** | Reads actual status transition history - not just current state |
| **7 Report Types** | Time in Status, Average Time, Time per Date, Status Count, Transition Count, Time in Assignee, Status Entrance Date |
| **Chart Outputs** | Column chart, bar chart, and line chart - each report type has its own visualization |
| **Status Grouping** | Combine multiple statuses into named bands - built-in Cycle Time and Lead Time groups included |
| **Working Hours** | Select a "Business" time format + configure a Work Schedule to exclude non-working hours |
| **Date Range Filter** | Scope analysis to last 7/30/90 days, this/last week, this/last month, or a custom range |
| **Configurable Columns** | Choose which statuses, fields, and issues appear in the report |
`,
        },
        {
          slug: "time-in-status-report-types",
          title: "Report Types",
          content: `The **Report Type** selector controls what data the gadget shows. Each report answers a different question about your workflow.

## All 7 Report Types

| **Report Type** | **What It Shows** | **Best For** |
| --- | --- | --- |
| **Time in Status** | How long each issue has spent in each status | Per-issue bottleneck analysis |
| **Average Time** | Mean time across all issues per status | Identifying consistently slow stages |
| **Time in Status per Date** | How issue time in status breaks down by date | Temporal patterns and trend analysis |
| **Status Count** | Total count of issues that passed through each status | Volume tracking per stage |
| **Transition Count** | How many times each status was visited per issue | Rework detection (issues bouncing back) |
| **Time in Assignee** | Time each issue spent assigned to each person | Individual workload and handoff analysis |
| **Status Entrance Date** | When each issue first entered each status | Audit trails, SLA start tracking |

## Choosing the Right Report

**"Where is work getting stuck?"** → **Average Time** - sort by time descending. The top row is your biggest bottleneck.

**"Are issues bouncing back through review?"** → **Transition Count** - counts > 2 on "In Review" or "QA" indicate rework.

**"Who is holding issues longest?"** → **Time in Assignee** - see each person's average hold time.

**"When did issues enter testing?"** → **Status Entrance Date** - exact date each issue entered each status.

**"How much total work passed through each stage?"** → **Status Count** - volume tracking per stage.

**"How does time in each stage trend over time?"** → **Time in Status per Date** - reveals seasonal patterns and process changes.

## Chart Output per Report Type

Each report type has its own visualization:

| **Report** | **Default Visualization** |
| --- | --- |
| **Time in Status** | Column chart (per issue, per status) |
| **Average Time** | Bar chart (status vs average time) |
| **Time in Status per Date** | Line chart (trend over time) |
| **Status Count** | Bar chart (count per status) |
| **Transition Count** | Bar chart (transitions per status) |
| **Time in Assignee** | Bar chart (time per assignee) |
| **Status Entrance Date** | Table (date per issue per status) |

You can switch between Chart and Table view for most report types using the view toggle in the gadget header.
`,
        },
        {
          slug: "time-in-status-columns-date-range",
          title: "Columns & Date Range",
          content: `Control which data appears in the report and scope the analysis to a specific time window.

## Columns Configuration

The Columns section lets you choose exactly which data appears in the report table.

### Issue Fields

Toggle which issue-level fields appear as columns:
- Key, Summary, Assignee, Status, Issue Type
- Any custom fields available in your Jira instance

### Status Columns

Select which workflow statuses appear as time columns in the report:

| **Option** | **What It Does** |
| --- | --- |
| **Auto** | Includes all statuses that appear in the data - no manual selection needed |
| **All** | Includes every status in your Jira instance |
| **Custom** | You pick exactly which statuses to show |

> **Tip:** Use Custom selection to keep the report focused. For a bug-tracking report, show only "To Do → In Progress → QA → Done" and hide everything else.

### Status Column Ordering

Drag statuses in the column list to match your workflow order left to right. This makes the table read like a process flow rather than an alphabetical list.

## Date Range

Scope the analysis to a specific time window - only issues matching the date criteria will appear.

| **Option** | **Description** |
| --- | --- |
| **All** | No date restriction - analyze the full history of matching issues |
| **Past 7 / 30 / 60 / 90 Days** | Rolling time window ending today |
| **This / Last Week** | Calendar-based weekly windows |
| **This / Last Month** | Calendar-based monthly windows |
| **Custom Range** | Pick an exact from-date and to-date |

### Which Date Field Is Used?

The date range filter applies to the issue's selected date field - you can choose:
- **Created** - filter by when the issue was created
- **Updated** - filter by when the issue was last updated
- **Resolved** - filter by when the issue was resolved
- **Due** - filter by the issue due date

> **Tip:** Use "Past 30 Days" + Created to analyze how recently created issues flow through your process. Use "Past 90 Days" + Resolved to analyze recently completed work.
`,
        },
        {
          slug: "time-in-status-status-groups",
          title: "Status Groups",
          content: `Status Groups let you combine multiple workflow statuses into a single named band. Instead of seeing separate columns for "Code Review", "Peer Review", and "Awaiting Approval", you see one "Review" column showing the total time across all three.

## Why Use Status Groups?

Most teams have more workflow statuses than meaningful phases. Status Groups let you map fine-grained statuses to the business concepts that actually matter - like Cycle Time and Lead Time.

## Built-in Groups

Two groups come ready to use by default:

### Cycle Time
Measures time from when active work started to when it completed. This is the metric your team directly controls.

**Typical statuses:** All "In Progress" category statuses through "Done"

*Example: An issue spent 2 days In Progress, 1 day In Review, and 1 day in QA. Cycle Time = 4 days.*

### Lead Time
Measures total elapsed time from when the issue was created to when it was done - including waiting time before work started.

**Typical statuses:** All statuses from creation ("To Do") through "Done"

*Example: The same issue waited 5 days in To Do before work began. Lead Time = 9 days (5 waiting + 4 active).*

## Creating Custom Groups

You can create your own groups to match your team's terminology.

**Example:** Combine "Code Review", "Peer Review", and "Awaiting Approval" into a "Review" band.

### How to Set Up a Status Group

1. Open the Time in Status gadget in edit mode
2. Find the **Status Groups** section in the configuration panel
3. Click **+ Add Group**
4. Enter a name (e.g., "Testing")
5. Select the statuses to include (e.g., "QA", "UAT", "Regression Testing")
6. Save the group

The report adds a new column showing the combined time the issue spent across all statuses in that group.

## How Groups Appear in the Report

Status Groups appear as additional columns alongside individual status columns. Each group column shows the total time the issue spent across all included statuses.

You can have individual status columns AND group columns active at the same time - they do not conflict.
`,
        },
        {
          slug: "time-in-status-work-schedule",
          title: "Work Schedule & Time Formats",
          content: `Control how elapsed time is measured - calendar time (every hour) or business hours only (excluding nights, weekends, and non-working hours).

## Why This Matters

By default, Time in Status counts every hour - including nights, weekends, and public holidays. An issue that sat untouched over a 3-day weekend accumulates 72 hours against its age.

If your SLA commitments are stated in business days (e.g., "resolve P1 issues within 2 business days"), calendar time gives a misleading picture. Business-hours calculation gives the number that actually reflects your team's working capacity.

## Time Format Options

The **Calculate In** setting controls both the unit and whether business hours are used:

| **Format** | **Type** | **Example** |
| --- | --- | --- |
| **Business DaysHoursMinutes** | Business hours | 2d 3h 15m |
| **Business Decimal Days** | Business hours | 2.4 days |
| **Business Decimal Weeks** | Business hours | 0.48 weeks |
| **Decimal Days** | Calendar time | 2.4 days |
| **Decimal Hours** | Calendar time | 57.6 hours |
| **Decimal Weeks** | Calendar time | 0.34 weeks |
| **DaysHoursMinutesSeconds** | Calendar time | 2d 9h 36m 0s |
| **Hours:Minutes** | Calendar time | 57:36 |
| **HoursMinutes** | Calendar time | 57h 36m |
| **Minutes** | Calendar time | 3456 min |

> **Rule:** Any format starting with "Business" uses your Work Schedule. All others use calendar time (24/7).

## Work Schedule Configuration

To use business-hours calculation, configure your team's work schedule first.

### How to Set Up a Work Schedule

1. Open the **Work Schedule** page from the Time in Status gadget settings
2. Set the **working hours** for each day - choose a start time and end time
3. Select which **days of the week** are working days (e.g., Mon–Fri)
4. Save the schedule

### Applying the Work Schedule

Once your Work Schedule is saved, set **Calculate In** to a "Business" format (e.g., "Business Decimal Days"). The gadget now automatically excludes non-working hours from all time calculations.

## Practical Example

An issue moved to "In Review" on Friday at 5pm and out on Monday at 9am.

| **Calculation** | **Result** |
| --- | --- |
| **Calendar time** | 64 hours (full weekend counted) |
| **Business hours (8h/day, Mon–Fri)** | 0 hours (no working time elapsed over the weekend) |

The business hours result accurately reflects that no one was actually reviewing the issue over the weekend.
`,
        },
        {
          slug: "time-in-status-display-export",
          title: "Display Settings & Export",
          content: `Control how the report looks and export your data for further analysis or sharing.

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Number Format** | Controls how time values are displayed (comma separators, decimal places) |
| **Decimal Places** | Precision for time values - 0 for whole numbers, 2 for two decimal places |
| **Date Format** | Format for date columns in the Status Entrance Date report |
| **Chart Type** | For chart-based report types: Bar, Line, or Table view |
| **Default View** | Set whether the gadget opens in Chart or Table view by default |
| **Auto-Refresh** | Automatically reload data every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Full table with all issue rows, status columns, group columns, and calculated values |
| **PNG** | Image snapshot of the chart (for chart-based report types) |
| **Configuration** | JSON export of all gadget settings for reuse or backup |

## Interpreting the Results

### Finding Bottlenecks

Open **Average Time** and sort by time descending. The top row is your biggest bottleneck.

| **What You See** | **What It Means** | **What to Do** |
| --- | --- | --- |
| **"In Review" averaging 3+ days** | Reviews are not happening frequently enough | Schedule daily review slots |
| **"QA" averaging 5+ days** | QA capacity is too low relative to developer output | Add QA resource or reduce WIP |
| **"Waiting for Customer" averaging 10+ days** | Follow-up is not happening | Add SLA reminders or escalation rules |
| **"To Do" averaging 7+ days** | Work is queued longer than it takes to complete | Review prioritization process |

### Spotting Rework

Open **Transition Count**. Issues with counts > 2 on "In Review" or "QA" are bouncing back and forth - a sign of incomplete work or unclear acceptance criteria.

### SLA Tracking

Open **Status Entrance Date** and export as CSV. Combine with your SLA targets in a spreadsheet to flag issues that have been in a status longer than your policy allows.

> **Tip:** Export the chart as PNG to include Jira process data in presentations or status emails without requiring stakeholders to log into Jira.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. PIVOT TABLE GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "pivot-table-gadget",
      title: "Pivot Table Gadget",
      articles: [
        {
          slug: "pivot-table-gadget-intro",
          title: "Pivot Table Gadget",
          content: `The **Pivot Table** gadget lets you summarize Jira issues in a cross-tabulation format. Group issues by multiple fields on both rows and columns simultaneously, then aggregate by count, sum, average, minimum, or maximum. Visualize the results as a data table, heatmap, or chart.

Use this section to learn how to configure row/column grouping, choose an aggregation method, and get the most from the display types.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Pivot Table does, data sources, and common use cases with examples.* |
| **Row & Column Fields** | *How to add, order, and nest up to 3 fields per axis for multi-level grouping.* |
| **Aggregation Methods** | *All 7 aggregation methods - Count, Sum, Average, Min, Max, Count%, Sum% - and when to use each.* |
| **Display Types & Heatmaps** | *All 9 display types including heatmaps and chart options, plus heatmap color selection.* |
| **Totals, Formatting & Export** | *Summary rows/columns, percentage and average columns, date formatting, drill-through, and export.* |
`,
        },
        {
          slug: "pivot-table-overview",
          title: "Overview",
          content: `The Pivot Table gadget transforms your Jira issue data into a cross-tabulation matrix - the same format as an Excel PivotTable. Place any combination of Jira fields on rows and columns, choose how to aggregate the values, and display the result as a table, heatmap, or chart.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Multi-Field Grouping** | Up to 3 fields on rows, up to 3 fields on columns |
| **7 Aggregation Methods** | Count, Sum, Average, Min, Max, Count %, Sum % |
| **9 Display Types** | Tables, heatmaps, and charts |
| **Heatmap Coloring** | Color-code cells by value intensity (Red, Blue, Green, Grey) |
| **Totals & Averages** | Auto-sum and average rows, columns, and grand total |
| **Make Values Clickable** | Click any cell value to open the matching Jira issue list in a new tab |
| **Date Formatting** | Per-field date format options (day, week, month, quarter, year display formats) |
| **Auto-Refresh** | Automatically reload data every 10 minutes in view mode |

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all issues across one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the scope |
| **Custom JQL** | Write a JQL query for precise scoping |
| **Dynamic Filter Controller** | Connect to a shared filter bar for interactive exploration |

## Row and Column Fields

The Pivot Table is built by selecting fields for rows and columns:

- **Row Fields**: Each unique combination of row field values becomes a row in the table
- **Column Fields**: Each unique combination of column field values becomes a column
- **Up to 3 fields per axis**: Multi-level grouping creates nested row/column headers

### Example Configurations

| **Row Fields** | **Column Fields** | **What It Shows** |
| --- | --- | --- |
| **Assignee** | Status | Issues per person per status |
| **Component** | Priority | Issues per component per priority level |
| **Sprint, Issue Type** | Status | Issues by sprint + type combination, broken down by status |
| **Project** | Month (Created) | Issue volume per project per month |

### Adding Fields

1. Open the Pivot Table gadget in edit mode
2. In the **Output Configuration** tab, click **+ Add Row Field** or **+ Add Column Field**
3. Search for and select a Jira field
4. Drag fields up or down to change grouping order (outermost = first in list)
5. Repeat to add up to 3 fields per axis

## Aggregation Methods

The aggregation method controls what value appears in each cell of the pivot table.

| **Method** | **What It Calculates** | **Best For** |
| --- | --- | --- |
| **Count** | Number of issues in that cell | Most reports - issue volume |
| **Sum** | Total of a numeric field across matching issues | Story Points, estimate, or custom number fields |
| **Average** | Mean value of a numeric field | Average story points per issue type |
| **Minimum** | Lowest value of a numeric field | Fastest resolution time per category |
| **Maximum** | Highest value of a numeric field | Longest-running issue per assignee |
| **Count as Fraction of Rows (%)** | Each cell as a percentage of its row total | Row-relative distribution |
| **Sum as Fraction of Rows (%)** | Sum value as a percentage of the row total | Proportional contribution |

### Choosing Aggregation Field

When using Sum, Average, Min, or Max, you must also select the **Aggregation Field** - the numeric Jira field whose values will be aggregated (e.g., Story Points, Original Estimate, a custom number field).

## Display Types

Choose how to present the pivot data:

| **Display Type** | **Description** | **Best For** |
| --- | --- | --- |
| **Table** | Clean data grid with row/column headers | Exact numbers, large datasets |
| **Table Heatmap** | Table with all cells color-coded by value | Quickly spotting high/low values across the whole matrix |
| **Table Row Heatmap** | Each row independently color-coded | Comparing values within each row |
| **Table Column Heatmap** | Each column independently color-coded | Comparing values within each column |
| **Column Chart** | Vertical bar chart from the pivot data | Comparing categories visually |
| **Bar Chart** | Horizontal bar chart | Long category names that overflow vertical bars |
| **Line Chart** | Line series from the pivot data | Trend comparison across multiple series |
| **Stacked Area Chart** | Stacked area chart | Cumulative composition over time or categories |
| **Pie Chart** | Pie from the first pivot dimension | Proportion breakdown of one dimension |

### Heatmap Color Customization

In heatmap display types, choose the base color:
- **Red** - for risk-oriented reports (more = worse, e.g., open bugs)
- **Blue** - neutral, general-purpose
- **Green** - for positive metrics (more = better, e.g., resolved issues)
- **Grey** - for neutral comparisons where color should not imply good or bad

The shade intensity scales automatically from the lowest value (lightest) to the highest (darkest).

## Totals, Averages, and Percentages

Control what summary rows and columns appear:

| **Setting** | **Effect** |
| --- | --- |
| **Show Totals Row** | Adds a sum row at the bottom of the table |
| **Show Totals Column** | Adds a sum column on the right |
| **Show Percentage Column** | Shows each row value as a percentage of the grand total |
| **Show Average Column** | Adds an average column; choose basis: all values or non-zero values only |

## Display & Formatting

| **Setting** | **What It Controls** |
| --- | --- |
| **Number Format** | Separator style for large numbers (1,234 vs 1.234) |
| **Decimal Places** | Precision for calculated values |
| **Date Field Formatting** | Per-field format for date values - day, week ("Week of Jan 06"), month, quarter ("Q1 2025"), year |
| **Make Values Clickable** | When on, any cell value opens the matching Jira issue list in a new tab for drill-through |
| **Legend Position** | For chart display types: top, bottom, left, right, or hidden |
| **Color Mode** | Default palette or custom per-series colors |
| **Auto-Refresh** | Reload data every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Complete pivot matrix including row/column headers and totals |
| **PNG** | Image snapshot of the current display (table or chart) |
| **Configuration** | JSON export of all settings for reuse or backup |

## Common Use Cases

### Team × Status Workload Matrix
- Row: Assignee
- Column: Status
- Aggregation: Count
- Display: Table Row Heatmap
- **Insight:** Rows with heavy color in "In Progress" or "In Review" show overloaded team members

### Story Points by Sprint × Issue Type
- Row: Sprint
- Column: Issue Type
- Aggregation: Sum of Story Points
- Display: Stacked Area Chart
- **Insight:** Track how the mix of Stories vs. Bugs changes across sprints

### Component × Priority Risk Matrix
- Row: Component
- Column: Priority
- Aggregation: Count
- Display: Table Column Heatmap
- **Insight:** Spot which components carry the most critical bugs
`,
        },
        {
          slug: "pivot-table-fields",
          title: "Row & Column Fields",
          content: `The Pivot Table is built by placing Jira fields on rows and columns. Each unique combination of field values becomes a row or column in the grid.

## How Fields Work

- **Row Fields** → each unique value (or combination of values) becomes a table row
- **Column Fields** → each unique value (or combination of values) becomes a table column
- **The cell** at the intersection shows the aggregated value for issues matching both the row and column

## Multi-Level Grouping

You can add **up to 3 fields per axis** to create nested grouping.

**Example - 2 Row Fields:**
- Row Field 1: Sprint
- Row Field 2: Issue Type
- Result: Each sprint expands into Story/Bug/Task sub-rows

**Example - 2 Column Fields:**
- Column Field 1: Status
- Column Field 2: Priority
- Result: Each status expands into High/Medium/Low sub-columns

## Adding Fields

1. Open the Pivot Table gadget in edit mode
2. In the **Output Configuration** tab, click **+ Add Row Field** or **+ Add Column Field**
3. Search for and select a Jira field
4. Repeat to add up to 3 fields per axis

## Ordering Fields

Drag fields up or down in the list to control grouping order:
- The **first field** in the list is the outermost grouping (main rows/columns)
- The **second field** creates sub-groups within the first
- The **third field** creates sub-groups within the second

## Useful Field Combinations

| **Row Fields** | **Column Fields** | **What It Shows** |
| --- | --- | --- |
| **Assignee** | Status | Issues per person per status |
| **Component** | Priority | Issues per component per priority level |
| **Sprint, Issue Type** | Status | Issues by sprint + type, broken down by status |
| **Project** | Month (Created) | Issue volume per project per month |
| **Epic** | Assignee | Work per epic per team member |
`,
        },
        {
          slug: "pivot-table-aggregation",
          title: "Aggregation Methods",
          content: `The aggregation method controls what value appears in each cell. The default is Count.

## All 7 Aggregation Methods

| **Method** | **What It Calculates** | **Best For** |
| --- | --- | --- |
| **Count** | Number of issues in that cell | Most reports - issue volume |
| **Sum** | Total of a numeric field across matching issues | Story Points, estimate, or custom number fields |
| **Average** | Mean value of a numeric field | Average story points per issue type |
| **Minimum** | Lowest value of a numeric field | Fastest resolution time per category |
| **Maximum** | Highest value of a numeric field | Longest-running issue per assignee |
| **Count as Fraction of Rows (%)** | Each cell as a percentage of its row total | Row-relative distribution |
| **Sum as Fraction of Rows (%)** | Sum as a percentage of the row total | Proportional contribution |

## Choosing an Aggregation Field

When using **Sum, Average, Minimum, or Maximum**, you must select an **Aggregation Field** - the numeric Jira field whose values will be aggregated.

Common aggregation fields:
- Story Points
- Original Estimate
- Time Spent
- Any custom numeric field

## Practical Examples

**Story points per assignee per sprint:**
- Row: Assignee, Column: Sprint, Method: Sum, Field: Story Points

**Average story points per issue type:**
- Row: Issue Type, Column: Status, Method: Average, Field: Story Points

**Percentage of each assignee's work by status:**
- Row: Assignee, Column: Status, Method: Count as Fraction of Rows (%)
- Result: Each row sums to 100% - shows what proportion of each person's work is in each status
`,
        },
        {
          slug: "pivot-table-display-types",
          title: "Display Types & Heatmaps",
          content: `Choose how to visualize the pivot data. The same row/column/aggregation setup can be shown as a table, a heatmap, or a chart.

## All 9 Display Types

| **Display Type** | **Description** | **Best For** |
| --- | --- | --- |
| **Table** | Clean data grid with row/column headers | Exact numbers, large datasets |
| **Table Heatmap** | Entire table color-coded by value | Quickly spotting high/low values across the whole matrix |
| **Table Row Heatmap** | Each row independently color-coded | Comparing values within each row |
| **Table Column Heatmap** | Each column independently color-coded | Comparing values within each column |
| **Column Chart** | Vertical bar chart from the pivot data | Comparing categories visually |
| **Bar Chart** | Horizontal bar chart | Long category names that would overflow vertical bars |
| **Line Chart** | Line series from the pivot data | Trend comparison across multiple series |
| **Stacked Area Chart** | Stacked area chart | Cumulative composition over time or categories |
| **Pie Chart** | Pie from the first pivot dimension | Proportion breakdown of a single dimension |

## Heatmap Color Schemes

In heatmap display types, choose the base color that fits the meaning of your data:

| **Color** | **Best For** |
| --- | --- |
| **Red** | Risk-oriented reports where more = worse (e.g., open bugs per component) |
| **Blue** | Neutral, general-purpose comparisons |
| **Green** | Positive metrics where more = better (e.g., resolved issues per sprint) |
| **Grey** | Neutral comparisons where color should not imply good or bad |

The shade intensity scales automatically - the lowest value in the dataset gets the lightest shade and the highest gets the darkest. This happens per table, per row, or per column depending on the heatmap type you choose.

## Switching Display Types

You can change the display type at any time without reconfiguring your fields or aggregation. The same data renders in the new format instantly in the live preview.
`,
        },
        {
          slug: "pivot-table-formatting-export",
          title: "Totals, Formatting & Export",
          content: `Control summary rows/columns, number and date formatting, drill-through behavior, and how to export your pivot data.

## Summary Rows and Columns

| **Setting** | **Effect** |
| --- | --- |
| **Show Totals Row** | Adds a sum row at the bottom of the table |
| **Show Totals Column** | Adds a sum column on the right |
| **Show Percentage Column** | Shows each row value as a percentage of the grand total |
| **Show Average Column** | Adds an average column - choose basis: all values or non-zero values only |

## Number Formatting

| **Setting** | **What It Controls** |
| --- | --- |
| **Number Format** | Separator style for large numbers (1,234 vs 1.234) |
| **Decimal Places** | Precision for calculated values |

## Date Field Formatting

When a date field is used as a row or column field, you can control how the dates are grouped and displayed:

| **Format** | **Example** |
| --- | --- |
| **Day** | Jan 06, 2025 |
| **Week** | Week of Jan 06, 2025 |
| **Month** | January 2025 |
| **Quarter** | Q1 2025 |
| **Year** | 2025 |

Set a different format per date field - so Sprint can show as week-level while Created Date shows as month-level.

## Make Values Clickable (Drill-Through)

When enabled, any cell value in the table becomes a clickable link. Clicking a cell opens the matching list of Jira issues in a new browser tab.

This lets you go from summary to detail in one click - without leaving the dashboard.

> **Note:** Drill-through works on table display types. It is not available for chart display types.

## Legend and Color

| **Setting** | **What It Controls** |
| --- | --- |
| **Legend Position** | For chart display types: top, bottom, left, right, or hidden |
| **Color Mode** | Default palette or custom per-series colors |
| **Auto-Refresh** | Reload data every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Complete pivot matrix including row/column headers, all values, and totals |
| **PNG** | Image snapshot of the current display (table or chart) |
| **Configuration** | JSON export of all settings for reuse or backup |

> **Tip:** Export as CSV to analyze the pivot data in Excel or Google Sheets. The exported file preserves all row and column headers so you can apply your own formulas and conditional formatting.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 7. CUMULATIVE FLOW DIAGRAM
    // ═══════════════════════════════════════════════════════════════
    {
      id: "cumulative-flow-gadget",
      title: "Cumulative Flow Diagram",
      articles: [
        {
          slug: "cumulative-flow-gadget-intro",
          title: "Cumulative Flow Diagram",
          content: `The **Cumulative Flow Diagram (CFD)** shows how work accumulates across workflow stages over time as a stacked area chart. It is the standard tool for visualizing flow, measuring work-in-progress (WIP) trends, and identifying bottlenecks in Kanban and Scrum workflows.

Use this section to understand how to configure band modes, scope data to specific sprints or releases, and interpret the chart.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the CFD shows, how to read it, and data source options.* |
| **Band Modes** | *All 6 band modes - from status categories to board columns to custom field values - and how board integration works.* |
| **Calculate By** | *Choose what unit of work the bands measure: issue count, story points, time estimate, or a custom numeric field.* |
| **Date Ranges & Scoping** | *Rolling, fixed, sprint, and release date range modes - including the "latest sprint auto" option.* |
| **Display Options & Patterns** | *Display toggles, band customization, advanced options, and how to interpret common CFD patterns.* |
`,
        },
        {
          slug: "cumulative-flow-overview",
          title: "Overview",
          content: `The Cumulative Flow Diagram (CFD) plots the count of issues in each workflow stage on every day of your chosen date range. Each stage is a colored band stacked on the others, so the total height of the chart always equals your total issue count. Watching how bands grow and shrink tells you whether work is flowing smoothly or piling up.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Stacked Area Chart** | One colored band per workflow stage - bands stack to show total WIP |
| **6 Band Modes** | Status categories, individual statuses, board columns, board column categories, work item types, custom field values |
| **Calculate By** | Issue count, Story Points, Story Point Estimate, Original Time Estimate, or any custom numeric field |
| **Board Integration** | Connect to a Jira Software board to use its column definitions as bands |
| **Sprint & Release Scoping** | Scope the CFD to a specific sprint (including "latest sprint auto") or release version |
| **Flexible Date Ranges** | Rolling windows, fixed ranges, sprint dates, or release dates |
| **Include Sub-Tasks** | Toggle to include or exclude sub-tasks from the analysis |
| **Band Customization** | Reorder, hide, and color-code individual workflow bands |

## How to Read a CFD

- **Band width (vertical height at any date)** = number of issues currently in that stage
- **Narrow bands** = work moves through quickly (good)
- **Wide bands** = work is accumulating (potential bottleneck)
- **Flat top line** = no new work is being added (stable scope)
- **Rising top line** = new issues are being added (scope growth)
- **Steepening right edge** = accelerating completion (delivery speed increasing)

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all issues in one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the issue scope |
| **Custom JQL** | Write a JQL query for precise scoping (e.g., a specific component or epic) |
| **Jira Software Board** | Connect to a board to inherit its column definitions as CFD bands |

## Band Modes

The Band Mode controls how workflow stages are defined in the chart:

| **Band Mode** | **What Defines the Bands** | **Best For** |
| --- | --- | --- |
| **Status Categories** | Jira's built-in status categories (To Do / In Progress / Done) | High-level flow overview |
| **Individual Statuses** | Each unique Jira workflow status is its own band | Detailed per-status analysis |
| **Board Columns** | Columns from a connected Jira Software board | Teams using Kanban or Scrum boards |
| **Board Column Categories** | The category groupings of board columns (e.g., all "In Progress" columns as one band) | Simplified board-level view |
| **Work Item Types** | Group issues by issue type | Comparing Stories vs. Bugs vs. Tasks over time |
| **Values of a Custom Field** | Group issues by a custom field value | Non-standard workflows or multi-team boards |

## Calculate By

Choose what unit of work is counted in each band:

| **Option** | **What Is Counted** |
| --- | --- |
| **Work Item Count** | Number of issues in each band (default) |
| **Story Points** | Sum of story points for issues in each band |
| **Story Point Estimate** | Sum of story point estimates (team-managed projects) |
| **Original Time Estimate (hours)** | Sum of original time estimates |
| **Custom Numerical Field** | Sum of any custom numeric field you select |

Using Story Points instead of issue count gives a more accurate picture of work volume when your team sizes work unevenly.

### Using Board Integration (Column-Based)

When you select **Board Columns** and connect a Jira Software board, the CFD uses the board's column definitions instead of raw statuses. This means:

- Multiple statuses mapped to the same board column appear as a single band
- The band names match what your team sees on their board
- Column order matches the board left-to-right

**To connect a board:**
1. In the gadget edit mode, set **Band Mode** to **Column-Based**
2. In the data source panel, select **Board** and search for your board by name
3. The gadget loads the board's column configuration automatically

## Date Range Options

| **Mode** | **Description** | **Best For** |
| --- | --- | --- |
| **Rolling Days** | Last N calendar days ending today | Ongoing Kanban monitoring |
| **Fixed Range** | Specific from-date to to-date | Point-in-time analysis or reporting periods |
| **Sprint Range** | Scoped to one or more sprint date windows | Sprint retrospectives |
| **Release Date Range** | Scoped to a fix version's start/end dates | Release tracking and delivery analysis |

### Sprint Scoping

When connected to a board, you can scope the CFD to specific sprints:

1. Set **Date Range Mode** to **Dates of a sprint**
2. Select a specific sprint - or choose **Latest sprint (auto)** to always show the currently active sprint without reconfiguring
3. The chart automatically uses the sprint start and end dates as the time window

> **Tip:** Use "Latest sprint auto" on a permanent team dashboard so the CFD always shows the current sprint without anyone needing to update it after each sprint transition.

### Release / Version Scoping

To scope the CFD to a release:

1. Set **Date Range Mode** to **Release Date Range**
2. Select a fix version from the project's version list
3. The chart spans the version's start date to release date

## Display Options

| **Option** | **What It Does** | **Default** |
| --- | --- | --- |
| **Interval** | Granularity of data points: 1 day, 1 week, 2 weeks, or 1 month | 1 day |
| **Include Sub-Tasks** | Include sub-tasks alongside parent issues in the count | Off |
| **Show Percentage** | Display bands as % of total instead of counts | Off |
| **Show Legend** | Show/hide the band legend | On |
| **Hide Weekends** | Skip Saturday and Sunday on the X-axis | Off |
| **Show Horizontal Gridlines** | Add gridlines for reading values | Off |
| **Y-Axis Starts at Zero** | Force Y-axis to start at 0 (prevents misleading scale) | On |
| **Enable Scroll Zoom** | Allow pinch/scroll zoom on the chart | Off |

## Band Configuration

After the chart loads, you can customize individual bands:

- **Exclude a band**: Uncheck it from the band list - it is removed from both the chart and the count
- **Reorder bands**: Drag bands to match your workflow order (bottom of chart = first stage)
- **Custom colors**: Click the color swatch next to a band name to change its color

> **Tip:** Order bands so the earliest workflow stage (e.g., "To Do") is at the bottom and the final stage (e.g., "Done") is at the top. This matches the standard CFD convention where completion accumulates upward.

## Advanced Options

| **Option** | **What It Does** |
| --- | --- |
| **Continue After End Date** | Include issues that transitioned after the chart's end date |
| **Show Entire Time Interval** | Extend the X-axis to the full selected date range even if no data exists for some days |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **Configuration** | JSON export of all settings for reuse or backup |

## Interpreting Common CFD Patterns

### Healthy Flow
All bands are roughly proportional and the total height grows steadily. Done band widens progressively. No single band dominates.

### Bottleneck
One band (e.g., "In Review") grows consistently wider over time while later bands stay flat. Work is entering the stage faster than it is leaving. Address the bottleneck stage's capacity.

### Scope Creep
The top of the chart keeps rising even as the Done band grows. New work is being added faster than it is being completed.

### Stalled Sprint
The chart goes flat across all bands for multiple days. Work is not moving - investigate blockers, dependencies, or team availability.
`,
        },
        {
          slug: "cumulative-flow-band-modes",
          title: "Band Modes",
          content: `The **Band Mode** controls how workflow stages are defined in the chart. Each band in the stacked area represents one stage.

## All 6 Band Modes

| **Band Mode** | **What Defines the Bands** | **Best For** |
| --- | --- | --- |
| **Status Categories** | Jira's built-in categories: To Do / In Progress / Done | High-level flow overview - 3 bands, always clean |
| **Individual Statuses** | Each unique Jira workflow status is its own band | Detailed per-status analysis |
| **Board Columns** | Columns from a connected Jira Software board | Teams using Kanban or Scrum boards |
| **Board Column Categories** | Category groupings of board columns | Simplified board-level view |
| **Work Item Types** | Group issues by issue type (Story/Bug/Task) | Comparing work mix over time |
| **Values of a Custom Field** | Group by any custom field value | Non-standard workflows or multi-team boards |

## Board Integration

When you select **Board Columns** or **Board Column Categories**, connect the gadget to a Jira Software board. The CFD then uses that board's column definitions instead of raw workflow statuses.

**Benefits:**
- Multiple statuses mapped to the same board column appear as a single band
- Band names match exactly what your team sees on their board
- Column order matches the board left-to-right

**To connect a board:**
1. Set **Band Mode** to **Board Columns**
2. In the data source panel, select **Board** and search for your board by name
3. The gadget loads the board's column configuration automatically

## Choosing the Right Band Mode

**New to CFD?** Start with **Status Categories** - just 3 bands, immediately readable.

**Want more detail?** Switch to **Individual Statuses** to see where exactly within "In Progress" the work sits.

**Using a Kanban board?** Use **Board Columns** to match your board layout exactly.

**Analyzing work mix?** Use **Work Item Types** to see how Stories vs. Bugs vs. Tasks accumulate over time.
`,
        },
        {
          slug: "cumulative-flow-calculate-by",
          title: "Calculate By",
          content: `The **Calculate By** setting controls what unit of work is counted in each band. By default, each issue counts as 1. You can switch to story points or time estimates for a more accurate picture of work volume.

## All 5 Options

| **Option** | **What Is Counted** | **Best When** |
| --- | --- | --- |
| **Work Item Count** | Number of issues in each band | Default - works for all teams |
| **Story Points** | Sum of story points for issues in each band | Your team sizes work with story points |
| **Story Point Estimate** | Sum of story point estimates (team-managed projects) | Using team-managed Jira projects |
| **Original Time Estimate (hours)** | Sum of original time estimates | Your team estimates in hours |
| **Custom Numerical Field** | Sum of any custom numeric field you select | Any other numeric sizing field |

## Why It Matters

If your team has a mix of small and large issues, **counting issues** can be misleading. A sprint with 10 small bugs looks the same as a sprint with 10 large features.

Switching to **Story Points** shows the actual weight of work in each stage - giving a more accurate flow picture.

## Example

A team has 5 issues in "In Review":
- 3 bugs worth 1 point each
- 2 features worth 8 points each

| **Calculate By** | **"In Review" Band Height** |
| --- | --- |
| **Work Item Count** | 5 |
| **Story Points** | 19 |

The story points view reveals that "In Review" holds most of the sprint's value, which the count view underrepresents.
`,
        },
        {
          slug: "cumulative-flow-date-ranges",
          title: "Date Ranges & Scoping",
          content: `Choose the time window the CFD covers. The right date range depends on whether you are monitoring ongoing flow or analyzing a specific sprint or release.

## Date Range Modes

| **Mode** | **Description** | **Best For** |
| --- | --- | --- |
| **Rolling days** | Last N calendar days ending today | Ongoing Kanban monitoring |
| **Custom date range** | Specific from-date to to-date | Point-in-time analysis or reporting periods |
| **Dates of a sprint** | Scoped to sprint start and end dates | Sprint health and retrospectives |
| **Project release dates** | Scoped to a fix version's start/end dates | Release tracking and delivery analysis |

## Rolling Days Options

Choose from: 7 days · 14 days · 30 days · 60 days · 90 days · 180 days

Use **7–14 days** for active sprint monitoring. Use **30–90 days** for Kanban flow trends and release tracking.

## Sprint Scoping

1. Set **Date Range** to **Dates of a sprint**
2. Select a sprint from the dropdown

### Latest Sprint Auto

Instead of selecting a specific sprint, choose **"Latest sprint (auto)"**. The CFD automatically uses whichever sprint is currently active - no manual update needed when a new sprint starts.

> **Tip:** Use "Latest sprint auto" on any permanent team dashboard so the CFD always shows the current sprint without anyone needing to reconfigure it.

## Release / Version Scoping

1. Set **Date Range** to **Project release dates**
2. Select a fix version from the project's version list
3. The chart spans from the version's start date to its release date

This is ideal for release health dashboards - the chart automatically scopes to your release window.

## Interval Granularity

Control how many data points appear on the X-axis:

| **Interval** | **Best For** |
| --- | --- |
| **1 day** | Short sprints, detailed monitoring |
| **1 week** | Multi-week releases, quarterly views |
| **2 weeks** | Longer release cycles |
| **1 month** | Year-level or roadmap views |

Wider intervals produce smoother charts - useful when daily variation creates visual noise.
`,
        },
        {
          slug: "cumulative-flow-display",
          title: "Display Options & Patterns",
          content: `Control how the CFD looks, customize individual bands, use advanced options, and learn to read common chart patterns.

## Display Options

| **Option** | **What It Does** | **Default** |
| --- | --- | --- |
| **Interval** | Granularity: 1 day / 1 week / 2 weeks / 1 month | 1 day |
| **Include Sub-Tasks** | Include sub-tasks alongside parent issues | Off |
| **Show as % of total** | Display bands as percentage instead of counts | Off |
| **Show Legend** | Show/hide the band legend | On |
| **Hide Weekends** | Skip Saturday and Sunday on the X-axis | Off |
| **Show Horizontal Gridlines** | Add horizontal gridlines for reading values | Off |
| **Y-Axis Starts at Zero** | Force Y-axis to start at 0 - prevents misleading scale | On |
| **Enable Scroll Zoom** | Allow pinch/scroll zoom on the chart | Off |

## Advanced Options

| **Option** | **What It Does** |
| --- | --- |
| **Continue After End Date** | Include issues that transitioned after the chart's end date |
| **Show Entire Time Interval** | Extend the X-axis to the full date range even if no data exists for some days |

## Band Customization

After the chart loads, customize individual bands in the band list:

- **Exclude a band** - uncheck it to remove it from the chart and the count
- **Reorder bands** - drag bands to match your workflow order (bottom = first stage)
- **Custom colors** - click the color swatch next to a band name to change its color

> **Tip:** Order bands so the earliest stage (e.g., "To Do") is at the bottom and the final stage (e.g., "Done") is at the top. This is the standard CFD convention - completion accumulates upward.

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **Configuration** | JSON export of all settings for reuse or backup |

## Interpreting Common CFD Patterns

### Healthy Flow
All bands are roughly proportional. The total height grows steadily. The Done band widens progressively. No single band dominates.

### Bottleneck
One band (e.g., "In Review") grows consistently wider over time while later bands stay flat. Work is entering the stage faster than it is leaving. Address that stage's capacity.

### Scope Creep
The top of the chart keeps rising even as the Done band grows. New work is being added faster than it is being completed.

### Stalled Sprint
The chart goes flat across all bands for multiple days. Work is not moving - investigate blockers, dependencies, or team availability.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. WIP AGING CHARTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "wip-aging-charts-gadget",
      title: "WIP Aging Charts",
      articles: [
        {
          slug: "wip-aging-charts-gadget-intro",
          title: "WIP Aging Charts",
          content: `The **WIP Aging Charts** gadget visualizes how long your current work-in-progress items have been active. It plots issues on a scatter chart where the X-axis represents age in days - giving you an immediate view of which items are stalled, approaching SLA limits, or far outside normal cycle time.

Use this section to understand the scatter plot format, age calculation options, and how to configure reference lines for your team's SLA thresholds.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the WIP Aging Chart shows, how to read the scatter plot, and data source options.* |
| **Age Calculation Methods** | *All 5 age calculation methods, display units, weekend exclusion, and calendar vs. business time.* |
| **Reference Lines & Scale** | *Average, threshold, and percentile reference lines - how to configure each and what they mean.* |
| **Display Settings & Export** | *Data table view, display toggles, export options, and common use cases.* |
`,
        },
        {
          slug: "wip-aging-overview",
          title: "Overview",
          content: `The WIP Aging Charts gadget plots each in-progress issue as a point on a scatter chart. The Y-axis groups issues by status or custom field; the X-axis shows how many days each issue has been in its current state. Reference lines mark your average, SLA threshold, and statistical percentiles so outliers are immediately visible.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Scatter Plot** | One dot per issue - X-axis = age, Y-axis = status group |
| **5 Age Calculation Methods** | Time since last entry, sum of all occurrences, category sum, category first entry, time since creation |
| **Three Reference Lines** | Average, Threshold (with configurable value), and Percentile (1–99) lines |
| **Data Table View** | Switch from scatter plot to a tabular view of all WIP items with age details |
| **Log Scale Option** | Compress wide age ranges for better readability |
| **Status Ordering** | Custom Y-axis order via comma-separated list |

## How to Read the Chart

- **Each dot** = one WIP issue
- **X position** = how many days it has been in its current status
- **Y position** = which status it is in
- **Dots to the right of the threshold line** = SLA risk - these need attention
- **Clusters on the left** = normal, healthy WIP
- **Sparse dots far right** = stalled or forgotten work

> **Action pattern:** Review dots to the right of your threshold line in each daily standup. Ask "what is blocking this?" for anything past the line.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all WIP issues in one or more Jira projects |
| **Saved Filter** | Use a pre-saved filter to scope which issues appear |
| **Custom JQL** | Write precise JQL (e.g., \`status not in (Done, Closed, Cancelled)\`) |
| **Dynamic Filter Controller** | Connect to a shared filter bar for interactive slicing |

## Display Configuration

### Chart By

Choose how the Y-axis groups issues:

| **Option** | **Y-Axis Groups** |
| --- | --- |
| **Statuses of work items** (default) | One row per workflow status - shows age per stage |
| **Columns of the selected board** | Groups issues by the board column they belong to - useful when multiple statuses map to the same board column |

## Age Calculation Methods

The **Age Calculation Method** controls what "age" means for each issue - this is the most important config decision for WIP Aging.

| **Method** | **What It Measures** | **Best For** |
| --- | --- | --- |
| **Time since last entry in current status** | How long the issue has been in its current status continuously | Standard "how long in this status now" |
| **Sum of all time in current status** | Total accumulated time ever spent in this status, across all visits | Issues that bounce back - counts re-entry time too |
| **Sum of all time in the category of current status** | Total time across all statuses in the same category (e.g., all "In Progress" statuses) | Category-level aging (Cycle Time proxy) |
| **Time since first entry in current status category** | Clock starts from the first time the issue entered this category | Lead time measurement from category start |
| **Time since work item creation** | How long since the issue was created - regardless of current status | Total issue age / oldest backlog items |

### Age Display Options

| **Option** | **What It Controls** | **Default** |
| --- | --- | --- |
| **Calculate In** | Unit for age display: Hours, Days, or Minutes | Days |
| **Exclude Weekends** | Skip Saturday and Sunday when counting age | Off |
| **Include Sub-Tasks** | Whether sub-tasks appear as dots on the chart | Off |
| **Include "To Do" Category Items** | Include statuses in the "To Do" workflow category | Off |

### Calendar vs. Working Time

By default, age is measured in **calendar time** - every hour counts from when the issue entered its current status, including nights and weekends.

Enable **Exclude Weekends** to skip Saturday and Sunday when calculating age. An issue that sat over a 3-day weekend will then not accrue those days against its age.

Use this setting when your SLA commitments are stated in business days (e.g., "resolve P1 bugs within 2 business days").

## Reference Lines

Reference lines are horizontal markers drawn across all status groups. They help you immediately identify outliers.

### Average Line

Shows the **mean age** across all issues currently in that status group.

- **Useful for:** "What is normal for this stage?" - dots to the right of the average are above-average aging
- **Enable:** Toggle **Show Average Line** in the configuration panel
- **Customize:** Change the label text (default: "Average")

### Threshold Line

A **fixed value** you set - your team's SLA limit or internal policy.

**Example:** If your team commits to resolving critical bugs within 5 business days, set the threshold at 5. Any dot to the right immediately flags a policy breach.

- **Enable:** Toggle **Show Threshold Line** and enter the day value
- **Typical values:** 5 days (tactical), 10 days (strategic), 20 days (escalation trigger)
- **Customize:** Label text and the numeric value

### Percentile Line

Shows a **statistical percentile** of the current age distribution (e.g., 85th percentile means 85% of issues are younger than this line).

- **85th percentile** is the most common Kanban SLE (Service Level Expectation) - "85% of issues are resolved within X days"
- **95th percentile** is a stricter commitment
- **Enable:** Toggle **Show Percentile Line** and enter a value from 1 to 99
- **Customize:** The percentile value and the label text

> **Common setup:** Use all three lines together - Average (internal baseline), Percentile 85 (SLE commitment), Threshold (escalation trigger). Issues to the right of the threshold need immediate action.

## Scale Options

### Linear Scale (default)

Standard linear X-axis. Best when most issues cluster within a similar age range (e.g., all within 0–30 days).

### Log Scale

A logarithmic X-axis compresses the right side of the chart, making it easier to see clusters when ages span a wide range (e.g., 0–200 days with most items below 20 days).

- **Enable:** Toggle **Use Log Scale**
- **When to use:** When a few very old issues stretch the axis so far that normal-age items are all crammed into the left 10% of the chart

## Custom Status Order

Enter a comma-separated list of status names in the **Custom Status Order** field to control their vertical order on the Y-axis. Typical practice: list statuses from earliest workflow stage to latest, so the chart reads top-to-bottom like a workflow board (e.g., "To Do, In Progress, In Review, Done").

## Data Table View

Switch from the scatter plot to a tabular list of all WIP items with their age details. This is useful for sharing exact numbers or drilling into specific issues.

- **Toggle the view** using the Chart / Table switcher in the gadget header
- **Open table by default**: enable "Open table view by default" in the settings so the gadget always starts in table mode

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Show Legend** | Toggle legend visibility |
| **Tilt X-Axis Labels** | Angle status labels on the X-axis to prevent overlap when there are many statuses |
| **Number Format** | Separator style for large numbers |
| **Decimal Places** | Precision for age values |
| **Color Mode** | Default colors or custom per-status colors |
| **Open Table View by Default** | Gadget loads in table mode instead of scatter chart |
| **Auto-Refresh** | Refresh the chart automatically every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Raw WIP data with one row per issue - includes status, age in days, and key fields |
| **PNG** | Image snapshot of the scatter chart with reference lines |
| **Configuration** | JSON export of all settings for reuse or backup |

## Common Use Cases

### Daily Standup WIP Review
Set threshold to your team's SLA (e.g., 10 days). During standup, the chart immediately shows which items need discussion - no sorting or filtering required.

### Kanban SLE Tracking (85th Percentile)
Enable the percentile line at 85. The line value tells you: "85% of our in-progress work resolves within X days." Track this number over time to improve predictability.

### Sprint Retrospective
Run the WIP Aging report at the end of a sprint. Issues with high age that did not complete are candidates for retrospective discussion - were they blocked? Under-specified? Too large?

### SLA Breach Prevention
Set the threshold at your SLA boundary (e.g., 5 business days for P1 bugs). Run the chart daily and escalate any dot to the right of the threshold before it becomes a formal breach.
`,
        },
        {
          slug: "wip-aging-age-methods",
          title: "Age Calculation Methods",
          content: `The **Age Calculation Method** is the most important configuration decision in WIP Aging. It controls what "age" means for each issue - and different methods give very different numbers.

## All 5 Methods

| **Method** | **What It Measures** | **Best For** |
| --- | --- | --- |
| **Time since last entry in current status** | How long the issue has been in its current status continuously | Standard "how long in this status right now" |
| **Sum of all time in current status** | Total accumulated time in this status, including all previous visits | Issues that bounce back - counts every re-entry |
| **Sum of all time in category of current status** | Total time across all statuses in the same category (e.g., all "In Progress" statuses) | Category-level aging, Cycle Time proxy |
| **Time since first entry in current status category** | Clock starts from the very first time the issue entered this category | Lead time from category start |
| **Time since work item creation** | How long since the issue was created - regardless of current status | Total issue age, oldest backlog items |

## Choosing the Right Method

**For daily standup:** Use **Method 1** (time since last entry). It answers "how long has this been sitting here right now?" - the most actionable question for a team discussion.

**For rework detection:** Use **Method 2** (sum of all time). If an issue keeps bouncing back to "In Review", this method accumulates all that time and reveals the real cost.

**For Cycle Time monitoring:** Use **Method 3** (category sum). Measures total active working time regardless of which specific "In Progress" status the issue is in.

**For backlog hygiene:** Use **Method 5** (time since creation). Immediately shows which items have been sitting in the backlog for months.

## Age Display Units

| **Option** | **Default** |
| --- | --- |
| **Days** | ✓ Default |
| **Hours** | For short-lived workflows |
| **Minutes** | For very fast-moving processes |

## Weekend Exclusion

By default, age is measured in calendar time - every hour counts, including nights and weekends.

Enable **Exclude Weekends** to skip Saturday and Sunday. An issue that sat untouched over a 3-day weekend will not accumulate those days against its age.

Use this when your SLA commitments are stated in business days.

## Scope Options

| **Option** | **What It Does** |
| --- | --- |
| **Include Sub-Tasks** | Whether sub-tasks appear as individual dots on the chart |
| **Include "To Do" Category Items** | Include statuses in the "To Do" workflow category (off by default - WIP Aging is normally for in-progress work only) |
`,
        },
        {
          slug: "wip-aging-reference-lines",
          title: "Reference Lines & Scale",
          content: `Reference lines are horizontal markers drawn across all status groups on the chart. They give your team a visual benchmark - immediately showing which dots are within normal range and which need attention.

## Average Line

Shows the **mean age** across all currently in-progress issues.

- **What it tells you:** What is normal for your team right now
- **How to use it:** Any dot significantly to the right of the average is an outlier worth discussing
- **Enable:** Toggle **Show Average Line** in the configuration panel
- **Customize:** Change the label text (default: "Average")

## Threshold Line

A **fixed value** you set - your team's SLA limit or internal policy.

**Example:** Your team commits to resolving P1 bugs within 5 business days. Set the threshold to 5. Any dot to the right of this line is a potential SLA breach.

- **Enable:** Toggle **Show Threshold Line** and enter the day value
- **Typical values:**
  - 5 days - tactical / short SLA
  - 10 days - strategic / medium SLA
  - 20 days - escalation trigger
- **Customize:** Label text and the numeric value

> **Action pattern:** In every standup, any dot past the threshold line gets a discussion. Ask: "What is blocking this? Can it be cleared today?"

## Percentile Line

Shows a **statistical percentile** of the current age distribution.

**What 85th percentile means:** 85% of your current in-progress work is younger than this line. Only 15% is older.

This is the standard metric for a Kanban **Service Level Expectation (SLE)** - a data-driven commitment: "85% of our work completes within X days."

- **Enable:** Toggle **Show Percentile Line** and enter a value from 1 to 99
- **Common values:** 50 (median), 85 (standard SLE), 95 (stricter commitment)
- **Customize:** The percentile value and label text

## Using All Three Lines Together

A common professional setup:

| **Line** | **Value** | **Purpose** |
| --- | --- | --- |
| **Average** | Calculated automatically | Internal baseline - "what's normal" |
| **Percentile 85** | Calculated automatically | Your public SLE commitment to stakeholders |
| **Threshold** | Your SLA limit in days | Escalation trigger - anything past this needs action now |

## Scale Options

### Linear Scale (default)

Standard X-axis. Best when most issues cluster in a similar age range (e.g., 0–30 days).

### Logarithmic Scale

A log X-axis compresses the right side of the chart. Useful when a few very old issues stretch the axis so far that the normal-age items are all crammed into the left 10%.

- **Enable:** Toggle **Use Log Scale**
- **When to use:** When outliers are 10× older than typical items

## Custom Status Order

Enter a comma-separated list of status names in the **Custom Status Order** field to control the Y-axis order.

**Example:** \`To Do, In Progress, In Review, QA, Done\`

Typical practice: list statuses from earliest to latest so the chart reads top-to-bottom like a workflow board.
`,
        },
        {
          slug: "wip-aging-display-export",
          title: "Display Settings & Export",
          content: `Control the chart display, switch to a data table view, and export your WIP aging data.

## Data Table View

Switch from the scatter plot to a tabular list of all WIP items with their age details.

- **Toggle the view** using the Chart / Table switcher in the gadget header
- **Enable "Open table view by default"** in Display Settings so the gadget always starts in table mode

The data table is useful for:
- Sharing exact age numbers with stakeholders
- Exporting specific items for follow-up
- Reviewing items without the scatter plot visual

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Show Legend** | Toggle legend visibility |
| **Tilt X-Axis Labels** | Angle status labels to prevent overlap when there are many statuses |
| **Number Format** | Separator style for large numbers |
| **Decimal Places** | Precision for age values |
| **Color Mode** | Default colors or custom per-status colors |
| **Open Table View by Default** | Gadget loads in table mode instead of scatter chart |
| **Auto-Refresh** | Refresh the chart automatically every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Raw WIP data - one row per issue, with status, age in days, and key fields |
| **PNG** | Image snapshot of the scatter chart including all reference lines |
| **Configuration** | JSON export of all gadget settings for reuse or backup |

## Common Use Cases

### Daily Standup Review
Set the threshold to your team's SLA (e.g., 10 days). Open the chart at standup - any dot past the line needs a conversation. No sorting or filtering required.

### Kanban SLE Tracking
Enable the 85th percentile line. The line value is your team's SLE: "85% of our work completes within X days." Share this number with stakeholders as a data-driven commitment.

### Sprint Retrospective
Run the WIP Aging report at the end of a sprint. Issues with high age that did not complete are candidates for retrospective discussion - were they blocked? Under-specified? Too large?

### SLA Breach Prevention
Set the threshold at your SLA boundary. Run the chart daily and escalate any dot past the line before it becomes a formal breach.
`,
        },
      ],
    },


    // ═══════════════════════════════════════════════════════════════
    // 9. CONTROL CHART
    // ═══════════════════════════════════════════════════════════════
    {
      id: "control-chart-gadget",
      title: "Control Chart",
      articles: [
        {
          slug: "control-chart-gadget-intro",
          title: "Control Chart",
          content: `The **Control Chart** gadget plots the cycle time or lead time of completed work items as a scatter chart over time. Each dot is one completed item; reference lines show your average, rolling average, standard deviation band, SLA threshold, and percentiles - so you can see both how fast you deliver and how predictable that delivery is.

Use this section to define what a "cycle" means for your workflow, choose the date interval, and configure the statistical overlays.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Control Chart shows, how to read it, data sources, and date intervals.* |
| **Cycle Definition** | *Cycle time vs. lead time, start and end conditions, repeat entries, and repeated cycles.* |
| **Reference Lines & Scale** | *Average, rolling average, standard deviation band, threshold, percentiles, and log scale.* |
| **Display Settings & Export** | *Data table view, display toggles, colors, auto-refresh, and export options.* |
`,
        },
        {
          slug: "control-chart-overview",
          title: "Overview",
          content: `The Control Chart answers two questions at once: **how long does work take**, and **how consistent is that number**. The X-axis is the date each item finished its cycle; the Y-axis is how long that cycle took. A tight horizontal band means a predictable process. A widening spread means your delivery estimates are getting less reliable.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Scatter Plot** | One dot per completed work item - X-axis = completion date, Y-axis = cycle duration |
| **Two Metrics** | Cycle Time (start status to end status) or Lead Time (creation to end status) |
| **Configurable Cycle** | Define exactly which workflow transitions start and end the measurement |
| **Five Overlay Types** | Average, rolling average, standard deviation band, threshold, and up to 5 percentile lines |
| **Data Table View** | Switch to a table listing every item with its start date, end date, and duration |
| **Log Scale** | Compress a wide duration range so short cycles stay readable next to outliers |

## How to Read the Chart

- **Each dot** = one work item that completed its cycle
- **X position** = the date the cycle ended
- **Y position** = how long the cycle took, in your chosen unit
- **Dots above the threshold line** = items that breached your SLA
- **A tight horizontal band** = predictable delivery
- **A widening spread over time** = growing unpredictability - investigate before committing to dates
- **Dots above the 85th percentile line** = the slow tail; these are what stakeholders remember

> **Action pattern:** Quote the 85th percentile, not the average, when someone asks "how long will this take?" The average is met roughly half the time; the 85th percentile is met most of the time.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Measure delivery speed across one or more Jira projects |
| **Board** | Scope to a board's own filter - the board's JQL is resolved automatically |
| **Saved Filter** | Reuse a filter your team already maintains |
| **Custom JQL** | Write a precise query (for example, one issue type or one component) |
| **Dynamic Filter Controller** | Connect to a shared filter bar so the chart re-scopes with the rest of the dashboard |

## Date Interval

The interval controls **which completed items appear**, independent of the data source.

| **Interval Type** | **What It Covers** |
| --- | --- |
| **Last N days** (default, 90) | A rolling window that moves forward on its own - no editing needed |
| **Custom date range** | A fixed start and end date |
| **Sprint dates** | Pick any board and sprint; its start and end dates become the window. Enable auto-latest to always follow the active sprint |
| **Release dates** | Pick any project and release; its start and release dates become the window |

> Sprint and Release intervals are available for **every** data source type - the board or project you pick there supplies dates only, not the issue scope.
`,
        },
        {
          slug: "control-chart-cycle-definition",
          title: "Cycle Definition",
          content: `The cycle definition is the most important configuration decision in this gadget. It decides which transitions in an item's history start and stop the clock - and two teams measuring "cycle time" with different definitions cannot compare numbers.

## Metric

| **Metric** | **Measures From** | **Use When** |
| --- | --- | --- |
| **Cycle Time** | The start condition you choose below | You want to measure your team's working time, excluding backlog wait |
| **Lead Time** | The moment the item was created | You want the customer's view - total wait from request to delivery |

> Choosing **Lead Time** hides the start-condition options, because creation is the start by definition.

## Starts When

| **Option** | **The Clock Starts** |
| --- | --- |
| **Issue was created** | At creation. Equivalent to Lead Time |
| **Issue enters To Do** | The first time it moves into a status in the To Do category |
| **Issue enters In Progress** | The first time it moves into a status in the In Progress category. Items that never reached In Progress are not plotted |
| **Issue enters a custom status** | The first time it enters a specific workflow status you name |

## Ends When

| **Option** | **The Clock Stops** |
| --- | --- |
| **Issue enters Done** (default) | When it moves into a status in the Done category |
| **Issue enters In Progress** | When it moves into the In Progress category - measures queue time, or time-to-start |
| **Issue enters its current status** | At the moment it entered the status it sits in right now |
| **Issue enters a custom status** | When it enters a specific workflow status you name |

## Repeat Entries

Items rarely move in a straight line. Two inline settings control which visit counts:

- **If multiple entries in the start status, consider the first / last entry** - "first" measures from the earliest start; "last" measures the most recent attempt
- **If multiple entries in the end status, consider the first / last entry** - "first" credits the earliest completion; "last" waits for the final one

## Repeated Cycles

When an item goes through the whole cycle more than once - reopened, or bounced back to In Progress - choose how it is plotted:

| **Option** | **Result** |
| --- | --- |
| **Display all cycles** | One dot per cycle. Shows rework honestly |
| **Only the first cycle** | The original pass only |
| **Only the last cycle** (default) | The most recent pass only |
| **One cycle (first start to last end)** | A single dot spanning the entire span, rework included |
| **Sum of all cycles** | One dot totalling the active time only, excluding the gaps between cycles |

## Calculation Settings

| **Setting** | **Effect** | **Default** |
| --- | --- | --- |
| **Calculate in** | Unit on the Y-axis: Days, Hours, Minutes, or Weeks | Days |
| **Exclude weekends** | Skips Saturdays and Sundays, so durations reflect working time | Off |
| **Include sub-tasks** | Plots sub-tasks alongside their parents | Off |
| **Ignore zero duration** | Drops items whose cycle came out as zero - usually bulk-imported or bulk-transitioned items that would drag the average down | Off |

> **Reading the config once beats explaining the numbers twice.** Write your chosen definition into the gadget's Description tab so viewers know what the chart measures.
`,
        },
        {
          slug: "control-chart-reference-lines",
          title: "Reference Lines & Scale",
          content: `Reference lines turn a cloud of dots into a decision aid. Each overlay is a pure recalculation over the data already loaded - toggling one never re-queries Jira.

## Available Overlays

| **Overlay** | **What It Draws** | **Default** |
| --- | --- | --- |
| **Average line** | The mean cycle duration across all plotted items | On |
| **Rolling average** | A moving average over a window of N items - shows whether you are trending faster or slower | Off (window 7) |
| **Standard deviation band** | A shaded band around the average showing normal variation | On |
| **Threshold line** | A fixed value you set - your SLA or target | Off (value 14) |
| **Percentile lines** | Up to 5 lines at percentiles between 1 and 99 | On (50th and 85th) |

## Configuring Percentiles

Enter percentile values as a list. Up to five are allowed, each between 1 and 99.

| **Percentile** | **Reads As** | **Typical Use** |
| --- | --- | --- |
| **50th (median)** | Half of all items finished this fast | The typical case |
| **85th** | 85% of items finished this fast | The number to quote in commitments |
| **95th** | 95% of items finished this fast | Worst-case planning, escalation triggers |

## Threshold and the Average

**Exclude breaches from the average** removes items above the threshold line before the average is calculated. Turn it on when a handful of abandoned or forgotten items distorts an otherwise healthy average. Leave it off when you want the average to reflect reality including outliers.

## Rolling Average Window

The window is a count of work items, not days. A window of 7 means each point averages that item and the six before it. Smaller windows react faster and look noisier; larger windows are smoother and slower to show a change.

## Log Scale

Turn on **logarithmic scale** when your durations span orders of magnitude - a few items at 200 days flatten everything below 10 days into a single line at the bottom. A log scale keeps both readable, at the cost of making the visual distances non-linear.
`,
        },
        {
          slug: "control-chart-display-export",
          title: "Display Settings & Export",
          content: `## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show legend** | Legend for the dots and every enabled reference line | On |
| **Tilt X-axis labels** | Angles date labels so long ranges do not overlap | Off |
| **Open data tab first** | View mode opens on the table instead of the chart | Off |
| **Show options menu** | The in-view menu for refresh and export | On |
| **Show export options** | Whether viewers can export at all | On |
| **Auto-refresh** | Re-fetches on an interval: 5, 10, 15, or 30 minutes | Off (15 min) |

## Colors

**Auto** uses the app palette. **Custom** exposes one color per element:

| **Element** | **Default** |
| --- | --- |
| Work item dots | Blue |
| Breach dots (above threshold) | Red |
| Average line | Dark blue |
| Rolling average line | Amber |
| Threshold line | Red |
| Percentile lines | Grey |

## Data Table View

The table lists every plotted cycle with its work item key, summary, cycle start, cycle end, and duration in your chosen unit. Use it to identify the specific items behind an outlier dot, and to hand a list to whoever needs to follow up.

## Export

| **Format** | **Contains** |
| --- | --- |
| **PNG** | The chart exactly as displayed, including reference lines |
| **CSV** | Every plotted record with dates and durations, for spreadsheet analysis |

## Common Use Cases

**Forecasting with confidence.** Read the 85th percentile and use it as your commitment number. If it says 12 days, an item started today is very likely done inside 12 days.

**Detecting process drift.** Enable the rolling average. A line drifting upward over a quarter means work is getting slower - usually growing item size, growing WIP, or growing review queues.

**Retrospective evidence.** Set the threshold at your SLA and look at the breach dots for the sprint. Each one is a concrete conversation, not an opinion.

**Comparing before and after.** Pin a custom date range around a process change and compare the average and spread against the same-length window before it.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 10. HISTOGRAM CHART
    // ═══════════════════════════════════════════════════════════════
    {
      id: "histogram-chart-gadget",
      title: "Histogram Chart",
      articles: [
        {
          slug: "histogram-chart-gadget-intro",
          title: "Histogram Chart",
          content: `The **Histogram Chart** gadget shows the frequency distribution of cycle time or lead time - how many work items finished in each duration bucket. Where the Control Chart shows delivery over time, the histogram shows the **shape** of your delivery: whether most items cluster tightly, or whether you have a long slow tail.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the histogram shows, how to read the distribution, data sources, and intervals.* |
| **Buckets & Split Range** | *Equal intervals vs. custom thresholds, and how to choose bucket boundaries.* |
| **Reference Lines & Display** | *Average, threshold, percentiles, display toggles, colors, and export.* |
`,
        },
        {
          slug: "histogram-chart-overview",
          title: "Overview",
          content: `Each bar counts the work items whose cycle fell inside that duration bucket. The X-axis is duration; the Y-axis is the number of items. The cycle definition, calculation settings, and date intervals work exactly as they do in the [Control Chart](/apps/dashboard-charts-jira/control-chart-cycle-definition) - the difference is entirely in how the result is presented.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Frequency Distribution** | One bar per duration bucket, height = number of work items |
| **Two Metrics** | Cycle Time or Lead Time, with the same configurable start and end conditions |
| **Two Bucketing Modes** | Equal-width intervals, or your own comma-separated thresholds |
| **Reference Lines** | Average, threshold, and up to 5 percentile lines |
| **Data Table View** | The items behind every bucket, exportable |
| **Data Zoom** | Scroll and zoom the X-axis when the range is wide |

## How to Read the Distribution

- **A tall bar near the left with a short tail** = healthy, predictable flow
- **A long flat tail to the right** = a minority of items take far longer; these drive stakeholder perception
- **Two separate peaks** = you are really measuring two different kinds of work. Split the data source by issue type and chart them separately
- **A bar sitting at the far right on its own** = stalled or abandoned items; consider enabling ignore zero duration and checking whether they ever truly completed

> **Action pattern:** Do not try to move the average. Try to cut the tail. Shortening the slow 15% improves predictability far more than shaving a day off the typical case.

## Data Sources

Projects, Board, Saved Filter, Custom JQL, and Dynamic Filter Controller - the same five sources as the Control Chart.

## Date Interval

| **Interval Type** | **What It Covers** |
| --- | --- |
| **Last N days** (default, 364) | A rolling window. The wide default gives the distribution enough items to have a shape |
| **Custom date range** | A fixed start and end date |
| **Sprint dates** | Any board and sprint supplies the window; auto-latest follows the active sprint |
| **Release dates** | Any project and release supplies the window |

> A histogram needs volume. With fewer than about 30 completed items the shape is noise - widen the window before drawing conclusions.
`,
        },
        {
          slug: "histogram-chart-buckets",
          title: "Buckets & Split Range",
          content: `How you cut the range decides what the chart says. Too few buckets hides the tail; too many turns the distribution into a comb of single-item bars.

## Split Modes

| **Mode** | **How Buckets Are Built** | **Best For** |
| --- | --- | --- |
| **Split into equal intervals** (default) | Divides 0 to the largest cycle time into N equal-width buckets. Default N = 10 | A first look, when you do not yet know the range |
| **Split by custom thresholds** | You enter the boundaries, comma-separated (for example \`100, 200, 300, 400, 500\`) | Reporting against SLA tiers or planning brackets |

## Choosing Equal Intervals

| **Bucket Count** | **Result** |
| --- | --- |
| **5-8** | Broad shape, easy to read in a small dashboard tile |
| **10** (default) | Balanced - enough resolution to see a tail |
| **15-20** | Fine detail; needs a wide gadget and a decent item count |

One long-running outlier stretches the whole range, because the last bucket is anchored to the largest cycle time. If nine of ten buckets come back empty, either switch to custom thresholds or narrow the data source.

## Choosing Custom Thresholds

Custom thresholds are the right choice when the buckets need to mean something to the reader. Match them to the language your team already uses:

- **SLA tiers:** \`1, 3, 5, 10\` - same day, a few days, a week, over a week
- **Sprint arithmetic:** \`5, 10, 15, 20\` - within a sprint, one sprint over, and so on
- **Escalation brackets:** \`7, 14, 30\` - fine, watch, escalate

Enter boundaries in ascending order, separated by commas. Everything above your last threshold falls into a final open-ended bucket.

## Calculation Settings

The same options as the Control Chart apply, and they change the numbers before bucketing happens:

| **Setting** | **Effect** | **Default** |
| --- | --- | --- |
| **Calculate in** | Days, Hours, Minutes, or Weeks - also the unit of your thresholds | Days |
| **Exclude weekends** | Durations reflect working time | Off |
| **Include sub-tasks** | Counts sub-tasks as their own items | Off |
| **Ignore zero duration** | Drops zero-length cycles from bulk transitions | Off |
| **Repeated cycles** | Default here is all cycles, so rework is visible in the distribution | All |
`,
        },
        {
          slug: "histogram-chart-display-export",
          title: "Reference Lines & Display",
          content: `## Reference Lines

| **Overlay** | **What It Draws** | **Default** |
| --- | --- | --- |
| **Average line** | A vertical line at the mean duration | On |
| **Threshold line** | A vertical line at your SLA or target value | Off (value 14) |
| **Percentile lines** | Up to 5 vertical lines between the 1st and 99th percentile | On (50th and 85th) |
| **Exclude breaches from average** | Recomputes the average ignoring items past the threshold | Off |

On a histogram these lines read as cut points: everything to the right of the 85th percentile line is your slow tail, and its width tells you how bad the tail is.

## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show legend** | Legend for bars and reference lines | On |
| **Show data values** | Prints the item count above each bar | On |
| **Show data zoom** | Adds a scroll and zoom control to the X-axis | Off |
| **Tilt X-axis labels** | Angles bucket labels so long ranges stay readable | Off |
| **Open data tab first** | View mode opens on the table | Off |
| **Show options menu** | The in-view refresh and export menu | On |
| **Show export options** | Whether viewers can export | On |
| **Auto-refresh** | 5, 10, 15, or 30 minute interval | Off (15 min) |

## Colors

| **Element** | **Default** |
| --- | --- |
| Bars | Blue |
| Average line | Orange |
| Threshold line | Red |
| Percentile lines | Purple |

## Export

| **Format** | **Contains** |
| --- | --- |
| **CSV** | Every work item with its bucket, dates, and duration |
| **PDF** | A tabular PDF of the same records |

## Common Use Cases

**Setting a defensible SLA.** Read the 85th percentile off the chart and propose that as the SLA, rather than negotiating from a wish.

**Proving an improvement.** Chart the same window length before and after a process change. A distribution that shifted left and got narrower is the clearest evidence you can hand a stakeholder.

**Finding hidden work types.** A two-peaked distribution nearly always means two different work types share one board. Split them and manage them separately.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 11. CYCLE TIME TREND
    // ═══════════════════════════════════════════════════════════════
    {
      id: "cycle-time-trend-gadget",
      title: "Cycle Time Trend",
      articles: [
        {
          slug: "cycle-time-trend-gadget-intro",
          title: "Cycle Time Trend",
          content: `The **Cycle Time Trend** gadget answers one question: is our delivery getting faster or slower? It draws one bar per time interval showing the average cycle time for the items completed in that interval, with an optional trendline and an overall-average summary line.

Where the Control Chart shows every individual item and the Histogram shows the distribution, Cycle Time Trend shows the **direction of travel** over weeks, months, or sprints.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the trend chart shows, how to read it, and data sources.* |
| **Time Frame** | *Anchor date, interval length, interval count, and the current-interval toggle.* |
| **Series & Display** | *Average series, trendline types, overall average, display toggles, and export.* |
`,
        },
        {
          slug: "cycle-time-trend-overview",
          title: "Overview",
          content: `Each bar is one interval - a week, a month, or a sprint. Its height is the average cycle time of every item that completed inside that interval. Put six or twelve bars side by side and the trend is obvious in a way no single-snapshot chart can be.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **One Bar per Interval** | Average cycle time for items completed in that interval |
| **Eight Interval Lengths** | 1, 2, 3, 4, 6, or 8 weeks, 1 calendar month, or the board's own sprints |
| **Trendline** | Linear or polynomial fit over the bars |
| **Overall Average Line** | A horizontal reference computed over the last N intervals |
| **Same Cycle Definition** | Cycle time or lead time, with the same start and end conditions as the Control Chart |
| **Data Table View** | Every item behind every bar, with dates and durations |

## How to Read the Chart

- **Bars trending upward** = delivery is slowing. Usual causes: item size growing, WIP growing, review queues growing
- **Bars trending downward** = delivery is speeding up; worth naming what changed so you keep doing it
- **One tall bar among short ones** = one interval absorbed a few long-running items. Check the data table before treating it as a trend
- **Bars flat but tall** = stable but slow. Predictable, which is useful; the improvement conversation is separate
- **A missing or very short bar** = few or no items completed in that interval

> **Action pattern:** Use the trendline for the story and the bars for the evidence. A trendline alone can hide the fact that one interval carried the whole change.

## Data Sources

Projects, Board, Saved Filter, Custom JQL, and Dynamic Filter Controller.

> Selecting **Board Sprints** as the interval requires a Scrum board as the data source - Kanban boards have no sprints to draw intervals from.

## Cycle Definition

Identical to the [Control Chart](/apps/dashboard-charts-jira/control-chart-cycle-definition): choose Cycle Time or Lead Time, pick the start and end conditions, and decide how repeat entries and repeated cycles are handled. The default calculation unit here is **hours**, which suits shorter support-style cycles; switch to days or weeks for delivery work.
`,
        },
        {
          slug: "cycle-time-trend-time-frame",
          title: "Time Frame",
          content: `The time frame decides how many bars you get and how wide each one is. It is the difference between a chart that shows a trend and a chart that shows noise.

## Display Data Until

| **Option** | **Behavior** |
| --- | --- |
| **This date** | Anchors the chart to a fixed date. That date is the **start** of the final interval, so the last bar runs one full interval past it |
| **Previous day (end-of-day)** (default) | Anchors to yesterday, so the chart rolls forward on its own with nobody editing the gadget |

Use a fixed date when the chart backs a specific report or review. Use previous day for any dashboard that stays up.

## Interval Length

| **Option** | **Bars Cover** | **Good For** |
| --- | --- | --- |
| **1 week** (default) | Seven days each | Fast feedback, high-volume teams |
| **2 / 3 / 4 weeks** | Multi-week buckets | Matching your sprint cadence without using sprint dates |
| **6 / 8 weeks** | Long buckets | Low-volume teams, or a full-year view |
| **1 calendar month** | Calendar months, labelled MMM YY | Reporting that has to line up with monthly business cycles |
| **Board Sprints** | Each sprint's own real dates, labelled with the sprint name | Retrospectives - bars match what the team actually lived |

> Board Sprints handles uneven sprint lengths correctly, because each bar uses that sprint's own start and end dates rather than a fixed width.

## Interval Count

Choose the **total** number of bars, between 1 and 20 - this is the total drawn, not a count added on top of the current interval. Past roughly 20 bars the X-axis labels stop being readable, which is why 20 is the cap.

| **Count** | **With 1-week intervals** | **With 1-month intervals** |
| --- | --- | --- |
| **6** | Six weeks - a quarter's worth of recent signal | Half a year |
| **12** | A quarter | A full year |
| **20** | Roughly five months | Not recommended - labels crowd |

## Include the Current Interval

Off by default. The current interval is incomplete - only the items that happen to have finished so far are counted - so its bar is usually misleadingly low or high. Turn it on only when you want a live in-progress read and the audience understands the last bar is partial.
`,
        },
        {
          slug: "cycle-time-trend-series-display",
          title: "Series & Display",
          content: `## Series

| **Series** | **What It Draws** | **Default** |
| --- | --- | --- |
| **Average series** | The bars themselves - average cycle time per interval | On |
| **Trendline** | A fitted line across the bars | On |
| **Overall average** | A horizontal line at the average across the last N intervals | On (3 intervals) |

## Trendline Types

| **Type** | **Shape** | **Use When** |
| --- | --- | --- |
| **Linear** (default) | A straight line | You want the plain direction - up, down, or flat. Easiest to defend in a review |
| **Polynomial** | A curve | The trend genuinely reversed mid-period and a straight line would hide it |

> A polynomial fit will follow noise if you give it few bars. With under about eight intervals, stay linear.

## Overall Average Window

The **overall average** line is computed over the most recent N intervals, not the whole chart. Set N to your planning horizon: 3 intervals for a rolling recent read, or the full interval count if you want a true chart-wide average.

## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show legend** | Legend for bars, trendline, and average line | On |
| **Tilt X-axis labels** | Angles interval labels - useful with sprint names | On |
| **Show gridlines** | Horizontal gridlines behind the bars | On |
| **Show data values** | Prints each bar's value above it | Off |
| **Show data zoom** | Scroll and zoom control on the X-axis | Off |
| **Chart height** | Explicit pixel height, or auto | Auto |
| **Show data tab** | Makes the table view available in view mode | Off |
| **Open data tab first** | View mode opens on the table | Off |
| **Show options menu** | The in-view refresh and export menu | On |
| **Show export options** | Whether viewers can export | On |
| **Auto-refresh** | 5, 10, 15, or 30 minute interval | Off (15 min) |

## Colors

| **Element** | **Default** |
| --- | --- |
| Average bars | Blue |
| Trendline | Orange |

## Export

**CSV** exports every work item behind the chart with its interval, cycle start, cycle end, and duration - so you can verify any bar or hand the raw data to someone else.

## Common Use Cases

**Quarterly delivery review.** 12 weekly bars with a linear trendline gives a one-glance answer to "did we get faster this quarter?"

**Proving the effect of a process change.** Set the interval to your sprint cadence and count enough bars to cover several sprints either side of the change.

**Retrospective input.** Use Board Sprints intervals so each bar is a sprint the team remembers, then open the data table on the worst bar and discuss those specific items.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 12. WIP RUN CHART
    // ═══════════════════════════════════════════════════════════════
    {
      id: "wip-run-chart-gadget",
      title: "WIP Run Chart",
      articles: [
        {
          slug: "wip-run-chart-gadget-intro",
          title: "WIP Run Chart",
          content: `The **WIP Run Chart** gadget tracks how much work was in progress on every day of a period, as a line chart. Add WIP limits and the chart highlights the days you breached them.

WIP Aging tells you which items are old **right now**. WIP Run Chart tells you whether your team is systematically taking on too much - the root cause behind most aging work.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the run chart shows, how to read it, data sources, and date ranges.* |
| **WIP Rule & Calculation** | *What counts as WIP, what gets measured, intervals, sub-tasks, and splitting.* |
| **Limits & Display** | *WIP limits and breach highlighting, trendline, display toggles, and export.* |
`,
        },
        {
          slug: "wip-run-chart-overview",
          title: "Overview",
          content: `The X-axis is time; the Y-axis is how much work was in progress at each point. One line shows total WIP, and you can optionally split it into one line per field value.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **WIP Over Time** | A line showing in-progress volume across the period |
| **Three WIP Rules** | Status category, board middle columns, or an explicit status list |
| **Five Measures** | Work item count, story points, story point estimate, original estimate hours, or any numeric custom field |
| **WIP Limits** | Optional max and min limits, with breach highlighting |
| **Trendline** | Linear or polynomial fit |
| **Split by Field** | One line per value of a field - per assignee, per issue type, per component |
| **Data Table View** | The underlying per-interval numbers, exportable |

## How to Read the Chart

- **A rising line** = you are starting work faster than you are finishing it. Cycle time will follow it upward
- **A flat line** = start rate and finish rate are balanced. This is what a healthy team looks like
- **A sawtooth pattern** = work is batched, usually to sprint boundaries; everything starts on day one and lands at the end
- **A line above your max limit** = too many things open at once; expect context-switching and slow delivery
- **A line below your min limit** = the team may be starved of ready work

> **Action pattern:** Fix WIP before fixing cycle time. Cycle time is a symptom; WIP is usually the cause.

## Data Sources

Projects, Board, Saved Filter, Custom JQL, and Dynamic Filter Controller.

## Date Range

| **Mode** | **What It Covers** |
| --- | --- |
| **Last N days** (default, 30) | A rolling window that moves forward on its own |
| **Custom date range** | A fixed start and end date |
| **Sprint dates** | A specific sprint's dates, or auto-follow the latest sprint |
| **Release dates** | A release's start and release dates |

**Continue after end date** extends the line past the end of the range when items are still open - useful for showing that a sprint's leftovers did not disappear at the sprint boundary.
`,
        },
        {
          slug: "wip-run-chart-wip-rule",
          title: "WIP Rule & Calculation",
          content: `Two decisions define the chart: **what counts as work-in-progress**, and **what unit you count it in**.

## WIP Rule

| **Rule** | **An Item Counts as WIP While** | **Notes** |
| --- | --- | --- |
| **Work item status has category "In Progress"** (default) | Its status sits in Jira's built-in In Progress category | Works identically on every board with no extra setup. Start here |
| **Work item is in the middle columns of the selected board** | It is in a column that is neither the board's first nor its last | Matches how the team reads their own board. Requires picking a board |
| **Work item is in one of these statuses** | Its status is one you explicitly listed | Use when your definition of "active" does not match categories or columns - for example, excluding a Blocked status |

> If your workflow parks items in a status like "Waiting on customer" that sits in the In Progress category, the default rule will count it as WIP. Switch to an explicit status list to exclude it.

## Calculate By

| **Option** | **Measures** |
| --- | --- |
| **Work Item Count** (default) | Number of items - the honest measure of context-switching load |
| **Story Points** | Sum of story points in progress |
| **Story Point Estimate** | Sum of the team-managed story point estimate field |
| **Original Time Estimate (hours)** | Sum of original estimates |
| **Custom numeric field** | Any numeric field you name |

> Work item count is the better default for WIP. Point-weighted WIP can look flat while the number of open items doubles.

## Interval

**Intervals of** sets the number of days each point on the X-axis covers. One day gives the finest resolution; larger intervals smooth the line and suit longer periods.

## Sub-tasks

**Count also the sub-tasks and their estimate** is on by default. Turn it off if your team tracks work at the story level and sub-tasks would multiply the count.

## Split by Field

Choose a field to break total WIP into one line per value:

| **Split By** | **Reveals** |
| --- | --- |
| **Assignee** | Who is carrying too many open items at once |
| **Issue Type** | Whether bugs are crowding out feature work |
| **Component or Team** | Which area is overloaded |
| **Priority** | Whether high-priority work actually gets focus |

Keep **Show total WIP** on alongside a split so you can see both the whole and the parts.
`,
        },
        {
          slug: "wip-run-chart-limits-display",
          title: "Limits & Display",
          content: `## WIP Limits

| **Setting** | **What It Does** |
| --- | --- |
| **Max limit** | Draws a ceiling line; days above it are highlighted as breaches |
| **Min limit** | Draws a floor line; days below it are highlighted |

Both are off by default and each is enabled independently. A common starting point for a max limit is between one and two items per team member - then tighten it until flow improves.

> A limit only helps if someone reacts to a breach. Agree what happens when the line goes over - typically "stop starting, start finishing" - before you set the number.

## Trendline

| **Type** | **Use When** |
| --- | --- |
| **Linear** (default) | You want the plain direction over the period |
| **Polynomial** | WIP genuinely rose and then fell and a straight line would hide it |

## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show total WIP** | The combined line, shown alongside any split lines | On |
| **Show trendline** | The fitted line | On |
| **Show legend** | Legend for every series and limit | On |
| **Show data values** | Prints each point's value | Off |
| **Y-axis starts at zero** | Forces the Y-axis to zero rather than fitting the data | Off |
| **Show gridlines** | Horizontal gridlines | Off |
| **Enable scroll zoom** | Mouse-wheel zoom on the chart | Off |
| **Continue after end date** | Extends the line past the range end for still-open items | Off |
| **Chart height** | Explicit pixel height, or auto | Auto |
| **Show options menu** | The in-view refresh and export menu | On |
| **Auto-refresh** | 5, 10, 15, or 30 minute interval | Off (15 min) |

## Colors

| **Element** | **Default** |
| --- | --- |
| Total WIP line | Blue |
| Trendline | Orange |
| WIP limit lines | Red |

Split series get palette colors automatically, and can be set individually in custom color mode.

## Export

| **Format** | **Contains** |
| --- | --- |
| **PNG** | The chart as displayed, limits included |
| **CSV** | The per-interval numbers for every series |

## Common Use Cases

**Introducing WIP limits.** Chart the last 90 days with no limits first to see your actual baseline, then set a max limit slightly below the average and watch whether cycle time improves.

**Diagnosing a slow sprint.** Overlay this on the Control Chart. If WIP climbed through the sprint, the slow cycle times were a consequence, not a mystery.

**Balancing load across a team.** Split by assignee and look for one line consistently above the others - that is the person to unload, not the person to push.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 13. SPRINT BURNDOWN & BURNUP
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sprint-burndown-gadget",
      title: "Sprint Burndown & Burnup",
      articles: [
        {
          slug: "sprint-burndown-gadget-intro",
          title: "Sprint Burndown & Burnup",
          content: `The **Sprint Burndown Burnup Chart** gadget tracks sprint progress day by day. It draws up to five series - remaining work, burned work, scope, and an ideal line for both burndown and burnup - so you can see not just whether you are on track, but whether scope moved under you.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the chart shows, how to read each series, and board and sprint selection.* |
| **Calculation Settings** | *What to measure, sub-task handling, the Done definition, ideal scope basis, and weekends.* |
| **Display Settings & Export** | *Series toggles, display options, data table, colors, and export.* |
`,
        },
        {
          slug: "sprint-burndown-overview",
          title: "Overview",
          content: `This gadget is **board-scoped by design**: you pick a board, then a sprint on that board. Sprint dates, scope, and completion all come from the sprint itself, so the chart matches what the team committed to.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Five Series** | Remaining, Burned, Scope, Ideal Burndown, and Ideal Burnup - each toggled independently |
| **Seven Measures** | Story points, story point estimate, original estimate, remaining estimate, time remaining and spent, work item count, or a numeric custom field |
| **Scope Line** | Shows scope changes mid-sprint - the single most useful series for retrospectives |
| **Configurable Done** | Define completion by the board's last column or by an explicit status list |
| **Weekend Handling** | Treat weekends as working or non-working days, or hide them entirely |
| **Data Table View** | The per-day numbers behind every series |

## How to Read Each Series

| **Series** | **Reads As** |
| --- | --- |
| **Remaining** | Work still open. Should fall towards zero |
| **Burned** | Work completed so far. Should rise |
| **Scope** | Total committed work. A flat line means a stable sprint |
| **Ideal Burndown** | Straight line from full scope to zero - the pace needed to finish on time |
| **Ideal Burnup** | Straight line from zero to full scope - the mirror image, for teams who prefer counting up |

## Reading the Shape

- **Remaining above ideal** = behind pace. The gap at any day is roughly the catch-up needed
- **Remaining flat then dropping at the end** = work finished in a batch. Predictable-looking totals, unpredictable delivery
- **Scope line stepping up mid-sprint** = work was added after commitment. This explains a "failed" sprint more often than slow delivery does
- **Remaining rising** = new work is arriving faster than existing work closes
- **Both remaining and ideal hitting zero together** = a well-paced sprint

> **Action pattern:** In sprint review, read the scope line first. If it moved, the burndown was never going to land where it was drawn - and that is a planning conversation, not a delivery one.

## Board and Sprint Selection

1. Pick the **board** - only Scrum boards have sprints
2. Pick the **sprint**, or choose **Latest sprint (auto)** so the gadget follows the active sprint and never needs re-editing

> Auto-latest is the right choice for any dashboard that stays up across sprints. Pick a specific sprint only for a fixed retrospective report.
`,
        },
        {
          slug: "sprint-burndown-calculation",
          title: "Calculation Settings",
          content: `## Calculate By

| **Option** | **Measures** | **Notes** |
| --- | --- | --- |
| **Story Points** (default) | The story points field | The standard for Scrum teams estimating in points |
| **Story Point Estimate** | The team-managed story point estimate field | Use this on team-managed projects where points live in a different field |
| **Original Time Estimate** | Original estimate | Teams estimating in hours |
| **Remaining Time Estimate** | Remaining estimate | Reflects re-estimation during the sprint |
| **Time Remaining & Time Spent** | Both, together | Fullest picture for time-tracked teams |
| **Work Item Count** | Number of items | Simple, honest, and immune to estimate inflation |
| **Custom Field (Numeric)** | Any numeric field you name | For custom sizing schemes |

> If the chart does not load, check this first: **Custom Field** requires a numeric field to be selected before anything renders.

## Sub-tasks

| **Option** | **Behavior** |
| --- | --- |
| **Exclude the subtasks** (default) | Only parent items count |
| **Include subtasks with parent items** | Both count - use only if sub-tasks carry their own estimates |
| **Process only subtasks** | Sub-tasks alone, for teams who track all work at that level |

## Ignore Time Logged Before Sprint Start

Off by default. Turn it on when work started before the sprint began and you want the chart to show only the effort inside the sprint window.

## Definition of Done

| **Option** | **An Item Is Done When** |
| --- | --- |
| **Board's last column** (default) | It reaches the last column of the board |
| **Specific statuses** | It reaches one of the statuses you list |

Use specific statuses when your last board column holds more than one status, or when "done" for reporting purposes is earlier than the board's final column - for example, code merged rather than released.

> With **Specific statuses** selected, the chart waits until you pick at least one status before it renders.

## Ideal Line Basis

The ideal line has to start from a scope number. Choose which:

| **Option** | **Starts From** | **Use When** |
| --- | --- | --- |
| **The initial scope** | Scope at sprint start | You want to judge the team against what they committed to |
| **The current scope** (default) | Scope as it stands now | You want a realistic target that accounts for added work |
| **A fixed scope value** | A number you type | You are reporting against an externally agreed target |

## Weekends

| **Setting** | **Effect** |
| --- | --- |
| **Weekend mode: non-working** (default) | The ideal line is flat across weekends, so it does not expect progress nobody was making |
| **Weekend mode: working** | The ideal line descends through weekends - for teams who genuinely work them |
| **Hide weekends** | Removes weekend days from the X-axis entirely, compressing the chart |

> Changing weekend handling or the fixed scope value recalculates from data already loaded - no re-query, no wait.
`,
        },
        {
          slug: "sprint-burndown-display-export",
          title: "Display Settings & Export",
          content: `## Series Toggles

Each of the five series can be shown or hidden independently: **Ideal Burndown**, **Ideal Burnup**, **Remaining**, **Burned**, and **Scope**. All are on by default.

| **Combination** | **Reads As** |
| --- | --- |
| Remaining + Ideal Burndown | The classic burndown. Cleanest for a daily standup |
| Burned + Ideal Burnup | A burnup view. Better for stakeholders who prefer progress rising |
| Remaining + Scope | Diagnoses scope creep. The best pairing for a retrospective |
| All five | Complete but busy - use only on a wide gadget |

## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show legend** | Legend for the visible series | On |
| **Show data values** | Prints each point's value | Off |
| **Hide weekends** | Removes weekend days from the X-axis | Off |
| **Show gridlines** | Horizontal gridlines | Off |
| **Enable scroll zoom** | Mouse-wheel zoom | Off |
| **Chart height** | Explicit pixel height, or auto | Auto |
| **Open data tab first** | View mode opens on the table | Off |
| **Show options menu** | The in-view refresh and export menu | On |
| **Auto-refresh** | Periodic re-fetch during an active sprint | Off |

## Colors

| **Series** | **Default** |
| --- | --- |
| Ideal Burndown | Blue |
| Ideal Burnup | Red |
| Burned | Green |
| Remaining | Orange |
| Scope | Purple |

Switch color mode to **Custom** to set each series individually - useful when your organization has a house palette for status reporting.

## Data Table View

The table gives the per-day numbers behind every series: date, remaining, burned, and scope. Use it when someone questions a specific day, and to copy figures into a sprint report.

## Export

| **Format** | **Contains** |
| --- | --- |
| **PNG** | The chart as displayed, named after the sprint |
| **CSV** | The per-day series values, with the measure and custom field name included |

Both exports can be disabled independently if you want the chart visible but not extractable.

## Common Use Cases

**Daily standup.** Remaining plus Ideal Burndown, auto-latest sprint, auto-refresh on. It stays correct across sprints with no editing.

**Sprint review.** Turn on the Scope series. If scope stepped up mid-sprint, lead with that.

**Retrospective.** Open the data table and find the day the remaining line stopped falling. That date usually pins the blocker.

**Executive rollup.** Use Burned plus Ideal Burnup - a rising line reads as progress to an audience that does not live in Jira.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 14. TEAM WALLBOARD
    // ═══════════════════════════════════════════════════════════════
    {
      id: "team-wallboard-gadget",
      title: "Team Wallboard",
      articles: [
        {
          slug: "team-wallboard-gadget-intro",
          title: "Team Wallboard",
          content: `The **Team Wallboard** gadget puts your work items on a dashboard as cards, grouped into columns - a board view that lives next to your charts instead of on a separate screen. It is built for wall displays and standups: readable from a distance, refreshing on its own, with no clicking required.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the wallboard shows, grouping, views, and data sources.* |
| **Settings** | *Sprint selection, quick filters, swimlanes, sub-tasks, and the estimation field.* |
| **Display Settings & Export** | *Card colors, compact cards, sprint info, auto-refresh, and export.* |
`,
        },
        {
          slug: "team-wallboard-overview",
          title: "Overview",
          content: `Each work item is a card showing its key, summary, assignee, priority, and estimate. Cards are grouped into columns, and the whole board can be split into horizontal swimlanes.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Card Wallboard** | One card per work item, grouped into columns |
| **Two Grouping Modes** | The selected board's own columns, or Jira's status categories |
| **Seven Swimlane Modes** | None, stories, assignees, reporter, epics, projects, or priorities |
| **Two Quick Filters** | Recently Updated and Assigned to me, applied on top of any data source |
| **Two Views** | Wallboard cards, or a paginated table of the same items |
| **Auto-Refresh** | Keeps a wall display current without anyone touching it |
| **PDF and CSV Export** | The board as a document, or the items as data |

## Grouping

| **Grouping** | **Columns Are** | **Use When** |
| --- | --- | --- |
| **Board columns** | The columns of the board you selected, in board order | You want the wallboard to mirror the team's real board exactly |
| **Status category** | To Do, In Progress, Done | The data source is not a board, or you want a simple three-column rollup |

> Board columns require a Board data source. Every other source groups by status category.

## Views

| **View** | **Shows** |
| --- | --- |
| **Wallboard** (default) | Cards in columns, with optional swimlanes |
| **Table** | The same items as a paginated, sortable table with a configurable page size |

The table view is the better choice when someone needs to scan or sort many items; the wallboard is for shared displays.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | All work across one or more projects |
| **Board** | Mirror a real board, including its column layout |
| **Saved Filter** | Reuse an existing team filter |
| **Custom JQL** | Precise scoping - one epic, one component, one label |
| **Dynamic Filter Controller** | Let the shared filter bar re-scope the wallboard with the rest of the dashboard |

## How to Use It

- **Standup display.** Board grouping, sprint set to active, auto-refresh on. Walk the columns right to left
- **Blocked-work board.** Custom JQL for your blocked flag or label, swimlanes by assignee
- **Cross-team overview.** Projects source, swimlanes by project, status category grouping
`,
        },
        {
          slug: "team-wallboard-settings",
          title: "Settings",
          content: `## Sprint Selection

When the data source is a Scrum board you can scope the wallboard to a sprint. The default is the **active** sprint, so the board follows the team automatically as sprints roll over.

## Quick Filters

Quick filters are applied on top of whatever your data source returns, and work with **every** source type - not just boards.

| **Filter** | **Narrows To** | **Use For** |
| --- | --- | --- |
| **Recently Updated** | Items updated in the last day | Standups - shows what actually moved |
| **Assigned to me** | Items assigned to the viewer | Personal dashboards |

Both can be active at once; they combine to narrow the result further.

> **Assigned to me** resolves per viewer, so the same gadget shows each person their own work.

## Swimlanes

Swimlanes split the board into horizontal rows on top of the column grouping. All modes work with any data source.

| **Mode** | **One Row Per** | **Best For** |
| --- | --- | --- |
| **None** (default) | Single board | Small teams, wall displays |
| **By stories (parent work items)** | Parent item | Seeing sub-task progress under each story |
| **By assignees** | Assignee | Spotting who is overloaded, and who is idle |
| **By reporter** | Reporter | Support and intake queues |
| **By epics** | Epic | Tracking several epics in one sprint |
| **By projects** | Project | Cross-project or cross-team boards |
| **By priorities** | Priority | Checking that high-priority work is actually moving |

Items with no value for the chosen field are grouped into a clear catch-all row - Unassigned, No epic, No parent, or No priority.

## Sub-tasks

**Include sub-tasks** is on by default. Turn it off when your team tracks work at the story level and sub-task cards would flood the board.

## Estimation Field

Pick the field shown on each card as the estimate - story points, a time estimate, or any numeric field your team uses. Leave it unset for cards with no estimate badge.
`,
        },
        {
          slug: "team-wallboard-display-export",
          title: "Display Settings & Export",
          content: `## Card Colors

Cards are colored by the status category of the item, so progress is visible from across the room.

| **Category** | **Default** |
| --- | --- |
| **To Do** | Light grey |
| **In Progress** | Light yellow |
| **Done** | Light green |

Switch color mode to **Custom** to set each of the three individually - useful for matching a house palette or improving contrast on a large display.

## Display Options

| **Setting** | **What It Does** | **Default** |
| --- | --- | --- |
| **Show sprint info** | Sprint name and dates in the header | On |
| **Compact cards** | Smaller cards, more items visible at once | Off |
| **Show options menu** | The in-view refresh and export menu | On |
| **Show export options** | Whether viewers can export | On |
| **Auto-refresh** | Periodic re-fetch, in minutes | Off (10 min) |
| **Table page size** | Rows per page in table view | 10 |

> For a wall-mounted display: compact cards on, auto-refresh on, options menu off. The board then runs unattended and nobody can accidentally reconfigure it.

## Export

| **Format** | **Contains** |
| --- | --- |
| **PDF** | The wallboard as it appears, columns, cards, and swimlanes intact |
| **CSV** | Every item with its column, status, assignee, priority, and estimate |

PDF export renders issue-type and priority icons correctly, so the exported board is readable as a standalone document - suitable for attaching to a sprint report.

## Common Use Cases

**Standup wallboard.** Board source, active sprint, Recently Updated quick filter, auto-refresh on. Discussion follows the cards that moved.

**Workload check.** Swimlanes by assignee, no quick filters. One glance shows who has too much in progress.

**Epic tracking.** Swimlanes by epic with a JQL source scoped to the release. Shows which epics are stalled without opening a plan.

**Cross-team status.** Projects source, status-category grouping, swimlanes by project. Fits a single dashboard row and needs no board access.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 15. ISSUE FILTER FORMULA
    // ═══════════════════════════════════════════════════════════════
    {
      id: "issue-filter-formula-gadget",
      title: "Issue Filter Formula",
      articles: [
        {
          slug: "issue-filter-formula-gadget-intro",
          title: "Issue Filter Formula",
          content: `The **Issue Filter Formula** gadget computes KPIs. You define up to nine independently-scoped aggregations - each with its own data source, its own JQL, and its own aggregation - then combine them with math formulas and display the result as a number, a gauge, a star rating, or a card.

This is the gadget for every metric that is a **ratio, rate, or difference** rather than a count: escaped defect rate, on-time delivery percentage, bug-to-story ratio, budget burn.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *How variables, formulas, and displays fit together.* |
| **Variables** | *Per-variable data sources, aggregations, and fields.* |
| **Formulas** | *Expression syntax, the function library, and number formatting.* |
| **Display Modes** | *Number, colored number, gauge, and star rating - with color rules.* |
`,
        },
        {
          slug: "issue-filter-formula-overview",
          title: "Overview",
          content: `The gadget works in three layers. Understand the layers and the rest of the configuration is straightforward.

| **Layer** | **What It Is** | **How Many** |
| --- | --- | --- |
| **Variables** | Named aggregations over Jira issues, called \`a\` through \`i\`. Each has its own data source and JQL | Up to 9 |
| **Formulas** | Math expressions over those variables | As many as you need |
| **Displays** | How each formula's result is rendered | One mode per formula |

## A Worked Example

To show **escaped defect rate** - bugs found in production as a percentage of all bugs:

1. Variable \`a\`: Count of work items, JQL \`type = Bug AND labels = production\`
2. Variable \`b\`: Count of work items, JQL \`type = Bug\`
3. Formula: \`a / b * 100\`, suffix \`%\`, 1 decimal
4. Display: gauge, 0 to 100, green under 5, amber to 15, red above

The result is a single number your leadership can read, computed from two completely independent queries.

## Why Separate Data Sources Matter

Each variable resolves its own scope. That means one formula can compare **different projects**, **different time windows**, or **different issue types** - something no single-query gadget can do.

| **Comparison** | **How** |
| --- | --- |
| This sprint vs. last sprint | Two variables, two sprint-scoped JQL queries |
| Team A vs. Team B | Two variables, two project or component scopes |
| Bugs vs. stories | Two variables, two issue-type filters |
| Actual vs. target | One variable plus a constant in the formula |

## Overview

| **Feature** | **Description** |
| --- | --- |
| **9 Variables** | Named \`a\` to \`i\`, each independently scoped |
| **5 Aggregations** | Count, Sum, Average, Minimum, Maximum |
| **Full Function Library** | Arithmetic plus rounding, logs, conditionals, and aggregate functions |
| **4 Display Modes** | Number, number colored by value, gauge chart, and star rating |
| **Color Rules** | Value ranges that drive the color of the result |
| **Card Layout** | Multiple formulas laid out as cards in one gadget |

## Data Sources

Every variable supports Projects, Board, Saved Filter, Custom JQL, and Dynamic Filter Controller - chosen per variable, not once for the gadget.
`,
        },
        {
          slug: "issue-filter-formula-variables",
          title: "Variables",
          content: `A variable is one number. It is produced by running one query and aggregating one field - or just counting the results.

## Configuring a Variable

| **Setting** | **What It Does** |
| --- | --- |
| **Enabled** | Whether the variable is fetched at all. Only \`a\` is enabled by default |
| **Label** | A human-readable name shown in the config UI, so \`a\` is not just a letter |
| **Data source** | Projects, Board, Saved Filter, Custom JQL, or Dynamic Filter Controller |
| **Aggregation** | How the matching issues are reduced to one number |
| **Field** | Which field to aggregate - not needed for Count |

## Aggregations

| **Aggregation** | **Returns** | **Typical Use** |
| --- | --- | --- |
| **Count of work items** (default) | Number of matching issues | Counts, rates, ratios |
| **Sum of a field** | Total of a numeric field | Total story points, total time spent |
| **Average of a field** | Mean of a numeric field | Average estimate, average story size |
| **Minimum of a field** | Smallest value | Earliest or lowest bound |
| **Maximum of a field** | Largest value | Worst case, most recent |

## Time Fields

For time-tracking aggregations, three sub-values are available: **Time spent**, **Remaining estimate**, and **Original estimate**. Values are read in seconds, so divide in the formula to display hours or days - for example \`a / 3600\` for hours.

## Naming Variables

Give every enabled variable a label. Six months later, \`a / b * 100\` is unreadable but "Production bugs / All bugs x 100" is obvious - and the labels are what your successor will rely on.

## Practical Notes

- Enable only the variables you use. Each enabled variable is a separate query, so nine enabled variables means nine queries on every refresh
- A variable whose query matches nothing returns 0 for Count, and no value for Sum, Average, Minimum, and Maximum - which will make a formula dividing by it return NaN
- Variables scoped to the **Dynamic Filter Controller** re-resolve when the shared filter bar changes, so one formula can respond to dashboard-wide filtering
`,
        },
        {
          slug: "issue-filter-formula-formulas",
          title: "Formulas",
          content: `A formula is a math expression over your variables. It is evaluated as a numeric calculation only - it cannot modify data or build text.

## Expression Basics

| **Expression** | **Computes** |
| --- | --- |
| \`a\` | The value of variable a on its own |
| \`a / b\` | A ratio |
| \`a / b * 100\` | A percentage |
| \`a - b\` | A difference - actual vs. target |
| \`(a + b) / c\` | A weighted or combined rate |
| \`a / 3600\` | Seconds converted to hours |

Operators: \`+\` \`-\` \`*\` \`/\` \`%\` and \`^\` for powers, with parentheses for grouping. Comparison operators are available inside conditional functions.

## Function Library

**Rounding and sign**

| **Function** | **Does** | **Example** |
| --- | --- | --- |
| \`ROUND(x, d)\` | Rounds to d decimal places | \`ROUND(3.14159, 2)\` gives 3.14 |
| \`FLOOR(x)\` | Rounds down | \`FLOOR(4.9)\` gives 4 |
| \`CEILING(x)\` | Rounds up | \`CEILING(4.1)\` gives 5 |
| \`ABS(x)\` | Absolute value | \`ABS(-5)\` gives 5 |
| \`SIGN(x)\` | 1, -1, or 0 | \`SIGN(-3)\` gives -1 |

**Aggregate**

| **Function** | **Does** |
| --- | --- |
| \`SUM(a, b, c)\` | Adds the values |
| \`AVERAGE(a, b)\` or \`AVG(a, b)\` | Mean of the values |
| \`MIN(a, b)\` | Smallest |
| \`MAX(a, b)\` | Largest |

**Conditional**

| **Function** | **Does** | **Example** |
| --- | --- | --- |
| \`IF(test, x, y)\` | x if the test is true, else y | \`IF(a > b, a, b)\` |
| \`SWITCH(v, k1, r1, k2, r2, default)\` | Matches a value against options | \`SWITCH(a, 1, 10, 2, 20, 0)\` |
| \`COALESCE(a, b, 0)\` | First value that is a real number | Guards against NaN |
| \`NOT(x)\` | Flips 1 and 0 | \`NOT(a)\` |

**Math**

\`SQRT\`, \`POW\`, \`EXP\`, \`LOG\` and \`LN\` (natural log), \`LOG10\`, \`FACT\`, plus trigonometric functions. The constants \`PI\` and \`E\` are available in every expression.

> **Guard your divisions.** \`a / b\` returns NaN when b is 0. Wrap it: \`IF(b > 0, a / b * 100, 0)\`.

## Number Formatting

| **Setting** | **Effect** |
| --- | --- |
| **Decimals** | How many decimal places to show |
| **Prefix** | Text before the number - a currency symbol, for example |
| **Suffix** | Text after the number - \`%\`, \`h\`, \`pts\` |
| **Thousands separator** | Groups large numbers so they stay readable |

## Multiple Formulas

Add as many formulas as you need and each gets its own label, meaning text, formatting, and display mode. With the **cards** layout they appear side by side, turning one gadget into a small KPI panel.

**Show NaN** controls what happens when a formula cannot be computed. Leave it on while building so you can see the problem; turn it off on a display dashboard so an empty query does not put "NaN" on a wall screen.
`,
        },
        {
          slug: "issue-filter-formula-display",
          title: "Display Modes",
          content: `Each formula picks its own display mode. Pick by what the reader has to do with the number.

## Modes

| **Mode** | **Shows** | **Use When** |
| --- | --- | --- |
| **Number** | A plain number in the card | The value speaks for itself |
| **Number colored by value** | The number, colored by fixed color or value range, with an optional border highlight | Good or bad matters at a glance |
| **Gauge chart** | A radial gauge with min, max, and colored bands | The number is meaningful against a target range |
| **5-star rating** | The value mapped onto a star scale | Satisfaction and quality scores, for non-technical audiences |

## Color Rules

Colored numbers and gauges are driven by value ranges. Define each band with its bounds and color:

| **Range** | **Color** | **Reads As** |
| --- | --- | --- |
| 0 to 5 | Green | Healthy |
| 5 to 15 | Amber | Watch |
| 15 and above | Red | Act |

> Make sure your bands cover the whole plausible range with no gaps. A value that falls in a gap gets no color, which reads as a rendering fault rather than a state.

For metrics where lower is better - defect rate, cycle time - invert the order so green sits at the bottom. Do not rely on the reader working that out.

## Gauge Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Min and Max** | The gauge's range. Set these to something meaningful, not just the current value |
| **Gauge rules** | The colored bands drawn around the arc |

A percentage gauge should nearly always run 0 to 100, even if today's value is 12 - a gauge scaled to its own value tells the reader nothing about how much room is left.

## Star Rating Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Stars max** | How many stars are drawn |
| **Scale max** | The formula value that equals a full set of stars |

If your formula returns a percentage, set scale max to 100. If it returns a 1-5 score, set it to 5.

## Layout

The **cards** layout arranges every enabled formula as a card in one gadget - four or five KPIs in the space of one chart. Keep labels short; the card is the whole explanation the reader gets.

## Export

| **Format** | **Contains** |
| --- | --- |
| **PNG** | The KPI panel as displayed |
| **CSV** | Each formula with its label and computed result |

## Common Use Cases

**Escaped defect rate.** Production bugs divided by all bugs, as a gauge with green under 5%.

**On-time delivery.** Items completed by their due date divided by all completed items, as a percentage.

**Bug-to-story ratio.** Bug count divided by story count for the sprint - a rising number is a quality warning.

**Sprint completion.** Story points done divided by points committed, as a gauge running 0 to 100.

**Support satisfaction.** Average of a CSAT custom field, displayed as a star rating for a leadership dashboard.
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 16. ADMIN SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "admin-settings",
      title: "Admin Settings",
      articles: [
        {
          slug: "admin-settings",
          title: "Admin Settings",
          content: `
Control global app behavior for all fourteen gadgets - Custom Charts, Issue List, Dynamic Filter Controller, Time in Status, Pivot Table, Cumulative Flow Diagram, WIP Aging Charts, Control Chart, Histogram Chart, Cycle Time Trend, WIP Run Chart, Sprint Burndown & Burnup, Team Wallboard, and Issue Filter Formula. Use Admin Settings to manage defaults, feature availability, allowed data sources, and support links for all users in your Jira site.

## Where to find it

* Open Jira and go to Apps.
* Open the Custom Charts & Dashboards app.
* Open the Admin page.
* Use the tabs at the top to manage Customization Options, Features, Data Sources, and Support.

## What Admin Settings control

* Global export access for PNG, PDF, and CSV.
* Default display values such as number format, decimal places, date format, and time unit.
* Feature availability for every gadget individually, plus Templates.
* Allowed data source types: Projects, Boards, Saved Filters, Custom JQL, and Filter Controller.
* Support and documentation links for end users.

## Admin Settings tabs

| **Tab** | What it does | Applies to |
| --- | --- | --- |
| **Customization Options** | Sets global defaults for export and display formatting. | Custom Chart, Issue List |
| **Features** | Turns major app features on or off for the whole site. | All gadgets |
| **Data Sources** | Controls which source types users can select when building gadgets. | Custom Chart, Issue List, Filter Controller links |
| **Support** | Provides help, training, and documentation links. | All users |

## Customization Options

**This tab controls global defaults.** These values help keep gadget behavior consistent across the site, especially when users create new reports.

### Available settings

| **Setting** | What it does | Default | Notes |
| --- | --- | --- | --- |
| **Allow direct export** | Lets users export gadget content directly from the gadget menu. | On | If disabled, export actions should not be available to users. |
| **Number format** | Controls how large numbers are displayed. | 123,456.78 | Useful for keeping chart and table totals consistent. |
| **Decimal places** | Sets default decimal precision for percentages and calculated values. | 1 | Applied as the starting value, but users may still change it in gadget settings. |
| **Date format** | Controls how dates appear in supported gadgets. | 20 Jan 2025 style | Helps standardize date display across reports. |
| **Time unit** | Controls the default time unit used where supported. | Hours | Relevant for calculations and time-based reporting displays. |

> **Note:** Customization Options are global defaults. They are meant to give users a clean starting point, but they do not replace every gadget-level display setting.

## Features Tab

**This tab controls which major app features are available.** When a feature is disabled, users should see that the feature is unavailable instead of being able to use it normally.

### Feature toggles

| **Feature** | What happens when enabled | What happens when disabled |
| --- | --- | --- |
| **Issue List** | Users can create and use Issue List gadgets. | Issue List functionality is blocked for users. |
| **Custom Chart** | Users can create and use Custom Chart gadgets. | Custom Chart functionality is blocked for users. |
| **Dynamic Filter Controller** | Users can use the Dynamic Filter Controller gadget. | Controller-based filtering is blocked for users. |
| **Templates** | Users can open and apply built-in templates in supported gadgets. | Template buttons or template flows should be unavailable. |
| **Time in Status** | Users can create and use the Time in Status gadget. | Time in Status is hidden and unavailable. |
| **Pivot Table** | Users can create and use the Pivot Table gadget. | Pivot Table is hidden and unavailable. |
| **WIP Aging Charts** | Users can create and use the WIP Aging Charts gadget. | WIP Aging Charts is hidden and unavailable. |
| **Cumulative Flow Diagram** | Users can create and use the Cumulative Flow Diagram gadget. | CFD is hidden and unavailable. |
| **Control Chart** | Users can create and use the Control Chart gadget. | Control Chart is hidden and unavailable. |
| **Histogram Chart** | Users can create and use the Histogram Chart gadget. | Histogram Chart is hidden and unavailable. |
| **Cycle Time Trend** | Users can create and use the Cycle Time Trend gadget. | Cycle Time Trend is hidden and unavailable. |
| **WIP Run Chart** | Users can create and use the WIP Run Chart gadget. | WIP Run Chart is hidden and unavailable. |
| **Sprint Burndown** | Users can create and use the Sprint Burndown Burnup gadget. | Sprint Burndown is hidden and unavailable. |
| **Team Wallboard** | Users can create and use the Team Wallboard gadget. | Team Wallboard is hidden and unavailable. |
| **Issue Filter Formula** | Users can create and use the Issue Filter Formula gadget. | Issue Filter Formula is hidden and unavailable. |

> Each gadget has its own toggle. Disabling one leaves existing gadgets of that type in place on dashboards but shows a "feature unavailable" notice instead of the report.

## Data Sources

**This tab decides which source types users can choose when configuring gadgets.** It is useful when an admin wants to simplify setup, limit raw JQL usage, or guide users toward approved sources.

### Available source controls

| **Source type** | What it allows | Used in | If disabled |
| --- | --- | --- | --- |
| **Projects** | Users can build gadgets from selected Jira projects. | All gadgets with a source selector | Project source option should not be available. |
| **Boards** | Users can scope gadgets to a Jira Software board, using the board's own filter and column layout. | Control Chart, Histogram, Cycle Time Trend, WIP Run Chart, Team Wallboard, WIP Aging, CFD, Time in Status, Issue Filter Formula | Board source option should not be available. Sprint Burndown requires a board, so it cannot be configured while this is off. |
| **Saved Filters** | Users can use saved Jira filters as the source. | Custom Chart, Issue List | Saved filter source option should not be available. |
| **Custom JQL** | Users can enter their own JQL. | Custom Chart, Issue List, Filter workflows | Raw custom JQL should not be available as a source option. |
| **Filter Controller** | Users can connect gadgets to a Dynamic Filter Controller. | Custom Chart, Issue List | Controller reference source should not be available. |

## Support Tab

**The Support tab is an information area rather than a control panel.** It provides users with quick access to help resources such as support tickets, training, quick-start material, and documentation links.

* Raise a support ticket.
* Schedule training.
* Open quick-start or documentation resources.
* Direct users to help without leaving the app context.

## How Admin Settings apply in the app

| **Area** | How settings are used | Important detail |
| --- | --- | --- |
| **Custom Chart** | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can influence chart setup, but not every chart-specific display option. |
| **Issue List** | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can control broad behavior, but not every table preference. |
| **Dynamic Filter Controller** | Uses feature flags and source-related controls. | Formatting defaults are less relevant here than in chart and table gadgets. |
| **Templates** | Controlled mainly through the global Templates feature toggle. | Admins can enable or disable template access, but cannot manage template content from Admin Settings. |

> **Note:** Admin Settings work best as a global governance layer. They are strong for basic control and consistency, but they are not a full enterprise policy console.

## Recommended admin practice

* Use Customization Options to set clean default formatting before users create new gadgets.
* Disable source types that your team should not use, especially Custom JQL if you want a simpler setup flow.
* Use the Templates toggle if you want to allow or block quick-start preset usage across gadgets.
`,
        },
      ],
    },


    // ═══ 17. RELEASE NOTES ═══
    {
      id: "release-notes",
      title: "Release Notes",
      articles: [
        {
          slug: "latest-release",
          title: "Latest Release",
          content: `
Stay up to date with the newest features, improvements, and fixes in **Dashboard Templates, Charts, Graphs & Reports for Jira**.

> **Current Version:** v5.0.0 - August 2026
> **Marketplace Listing:** [Dashboard Templates, Charts, Graphs & Reports for Jira](https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira)

---

## What's New in v5.0.0

**Seven new gadgets.** The app now ships fourteen gadgets. The additions cover flow metrics, sprint tracking, board displays, and computed KPIs - areas that previously needed either a second app or a manual spreadsheet.

### Flow Metrics

Four new gadgets built on changelog analysis, each answering a different delivery question:

- **[Control Chart](/apps/dashboard-charts-jira/control-chart-gadget-intro)** - cycle time and lead time of every completed item as a scatter chart, with average, rolling average, standard deviation band, threshold, and up to five percentile lines. Define exactly which workflow transitions start and end the cycle, and choose how repeat entries and repeated cycles are counted.
- **[Histogram Chart](/apps/dashboard-charts-jira/histogram-chart-gadget-intro)** - the frequency distribution of those same durations. Split the range into equal intervals or your own comma-separated thresholds, then read the slow tail directly off the chart.
- **[Cycle Time Trend](/apps/dashboard-charts-jira/cycle-time-trend-gadget-intro)** - one bar per interval showing average cycle time, with a linear or polynomial trendline and an overall-average line. Intervals run from one week to eight weeks, calendar months, or the board's own sprints.
- **[WIP Run Chart](/apps/dashboard-charts-jira/wip-run-chart-gadget-intro)** - work-in-progress over time, with three WIP rules (status category, board middle columns, or an explicit status list), optional max and min limits with breach highlighting, and splitting by any field.

### Sprint Burndown & Burnup

**[Sprint Burndown & Burnup](/apps/dashboard-charts-jira/sprint-burndown-gadget-intro)** tracks sprint progress day by day across five independently-toggled series - remaining, burned, scope, ideal burndown, and ideal burnup. Seven measures are supported, from story points to work item count to any numeric custom field. The definition of done can follow the board's last column or an explicit status list, and weekends can be treated as working, non-working, or hidden. Selecting **Latest sprint (auto)** keeps the gadget correct across sprint boundaries with no re-editing.

### Team Wallboard

**[Team Wallboard](/apps/dashboard-charts-jira/team-wallboard-gadget-intro)** puts work items on the dashboard as cards, grouped into the board's own columns or into status categories. Seven swimlane modes, two quick filters that work with every data source, per-status-category card colors, compact cards for wall displays, and PDF or CSV export.

### Issue Filter Formula

**[Issue Filter Formula](/apps/dashboard-charts-jira/issue-filter-formula-gadget-intro)** computes KPIs that a single query cannot express. Define up to nine variables - each with its own data source, JQL, and aggregation - then combine them with math formulas and display the result as a number, a number colored by value, a gauge, or a star rating. Because every variable is scoped independently, one formula can compare two projects, two sprints, or two issue types.

### Board as a Data Source

**Board** is now a first-class data source alongside Projects, Saved Filters, Custom JQL, and the Dynamic Filter Controller. Selecting a board resolves the board's own filter automatically; Scrum boards are scoped to open sprints. Board source is available across the flow-metrics gadgets, Team Wallboard, and Issue Filter Formula, and is required by Sprint Burndown.

### Admin Controls

- **Per-gadget feature toggles** - every one of the fourteen gadgets now has its own toggle in Admin Settings, so gadgets can be rolled out to a site one at a time
- **Board source restriction** - Boards can be allowed or blocked in the Data Sources tab like any other source type

---

## Upgrade Notes

All existing gadget configurations are **fully compatible** with v5.0.0. No migration or manual action is required. The new gadgets appear in the Add Gadget dialog once the app updates, and every new gadget is enabled by default - disable any you do not want available from Admin Settings → Features.

---

## Previously in v4.1.0

### Improved Admin Controls
The Admin Settings panel has been expanded with clearer organization and new options:

- **Per-feature toggles** - Admins can now independently enable or disable Custom Charts, Issue List, Dynamic Filter Controller, and Templates from a single screen
- **Data source restrictions** - Restrict which data sources (Projects, Saved Filters, JQL, Controller) are available to end users
- **Export controls** - Enable or disable PNG, PDF, and CSV export independently per export format

### Display Options Enhancements
Several long-requested Display Options have been added across all chart types:

- **Tooltip formatting** - Choose between count, percentage, or both for pie and funnel chart tooltips
- **Axis label truncation control** - Set a maximum character length for x-axis labels to prevent overflow on bar charts with long segment names
- **Gridline visibility toggle** - Show or hide horizontal gridlines on bar and line charts independently

### Issue List 
Drag-and-Drop Reordering: You can now use drag-and-drop to easily rearrange and change the position of columns in the Issue List.


---

## Bug Fixes in v4.1.0

| **Area** | Fix |
|---|---|
| **Tile Chart** | Fixed tile count not updating when data source JQL was changed without saving and re-opening |
| **Funnel Chart** | Fixed stage order reverting to alphabetical after gadget re-edit in Firefox |
| **Dynamic Filter Controller** | Fixed tab switching not propagating filter changes to linked gadgets in some dashboard layouts |
| **Issue List** | Fixed Smart Label badges not rendering on the first page load after a gadget is freshly added |
| **Export - PDF** | Fixed chart title being cut off in PDF export when title exceeded 60 characters |
| **2D Line Chart** | Fixed tooltip showing incorrect Group By value when hovering over overlapping data points |
| **Display Options** | Fixed "Show data labels" toggle state not being saved correctly on Grouped Bar charts |

---

## Coming Soon

| **Feature** | Status |
|---|---|
| **Scheduled run scans** | In development |
| **Standard templates for the new flow-metrics gadgets** | Planned |
| **Cross-gadget metric definitions (define a cycle once, reuse everywhere)** | Planned |
| **Additional chart types (e.g., radar chart)** | Under consideration |

---

> For the full version history, see [Version History](/apps/dashboard-charts-jira/version-history).
> For setup and configuration help, see [Getting Started](/apps/dashboard-charts-jira/installation-setup).
`,
        },
        {
          slug: "version-history",
          title: "Version History",
          content: `
A complete changelog for **Dashboard Templates, Charts, Graphs & Reports for Jira**.

> **Marketplace Listing:** [Dashboard Templates, Charts, Graphs & Reports for Jira](https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira)

---

## Release Timeline

| **Version** | Release Date | Type | Highlights |
|---|---|---|---|
| **v5.0.0** | August 2026 | Major Release | Seven new gadgets (Control Chart, Histogram, Cycle Time Trend, WIP Run Chart, Sprint Burndown & Burnup, Team Wallboard, Issue Filter Formula), Board as a data source, per-gadget admin toggles |
| **v4.1.0** | May 2026 | Improvement Release | Expanded Admin Controls, Display Options enhancements, new Templates, bug fixes |
| **v4.0.0** | January 2026 | Major Release | Templates gallery, Date Range improvements, Import/Export Configuration, Controller Tabs |
| **v3.1.0** | October 2025 | Feature Release | Smart Labels, AND/OR Quick Filter logic, User Icon Display in Issue List |
| **v3.0.0** | August 2025 | Major Release | Funnel & Tile chart types, Admin Settings, Cumulative Total |
| **v2.1.0** | June 2025 | Improvement Release | Sum/Average calculations, Reference Lines, Display Options expansion |
| **v2.0.0** | April 2025 | Major Release | Dynamic Filter Controller, 2D charts, Group By second dimension |
| **v1.1.0** | February 2025 | Patch | JQL validation improvements, number formatting, bug fixes |
| **v1.0.0** | January 2025 | Initial Release | Custom Charts (Pie/Bar/Line), Issue List, Projects/Filter/JQL data sources |

---

## v5.0.0 - August 2026

### Major New Features
- **Control Chart** - cycle and lead time per completed item as a scatter chart, with a fully configurable cycle definition and five overlay types (average, rolling average, standard deviation band, threshold, percentiles)
- **Histogram Chart** - frequency distribution of cycle and lead time, bucketed by equal intervals or custom thresholds
- **Cycle Time Trend** - average cycle time per interval with linear or polynomial trendline; intervals of 1-8 weeks, calendar months, or board sprints
- **WIP Run Chart** - work-in-progress over time with three WIP rules, max and min limits, breach highlighting, and split-by-field series
- **Sprint Burndown & Burnup** - five series (remaining, burned, scope, ideal burndown, ideal burnup), seven measures, configurable definition of done, and weekend handling
- **Team Wallboard** - card wallboard grouped by board column or status category, with seven swimlane modes, quick filters, and PDF export
- **Issue Filter Formula** - up to nine independently-scoped aggregations combined with math formulas; number, colored number, gauge, and star-rating displays

### Improvements
- **Board data source** - available across the flow-metrics gadgets, Team Wallboard, and Issue Filter Formula; the board's own filter is resolved automatically and Scrum boards are scoped to open sprints
- **Per-gadget admin toggles** - all fourteen gadgets can be enabled or disabled individually from Admin Settings → Features
- **Board source restriction** - Boards can be blocked in Admin Settings → Data Sources like any other source type

### Upgrade Notes
Existing configurations are unchanged and require no migration. New gadgets are enabled by default.

---

## v4.1.0 - May 2026

### New & Improved
- **Admin Controls** - Per-feature toggles, data source restrictions, and per-format export controls
- **Display Options** - Tooltip formatting, axis label truncation, gridline toggle, legend position
- **Issue List** - Column widths now persist as part of gadget configuration
- **Templates** - Four new templates: Sprint Velocity Trend, Bug Triage Board, Team Workload Overview, Release Readiness

### Bug Fixes
- Fixed Tile Chart not updating when JQL was changed mid-session
- Fixed Funnel Chart stage order reverting to alphabetical after re-edit in Firefox
- Fixed Dynamic Filter Controller tab switching not propagating to linked gadgets
- Fixed Smart Label badges not rendering on first page load after fresh gadget add
- Fixed PDF export cutting off long chart titles
- Fixed 2D Line Chart tooltip showing incorrect Group By value on overlapping points
- Fixed "Show data labels" toggle not saving on Grouped Bar charts

---

## v4.0.0 - January 2026

### Major New Features
- **Templates Gallery** - Ready-made chart configurations for common Jira reporting scenarios; apply in one click and customize from there
- **Import / Export Configuration** - JSON-based config export and import for all three gadgets; share setups between team members or back up before making changes
- **Dynamic Filter Controller - Tabs** - Define named preset filter views (e.g., "My Issues", "This Sprint", "High Priority"); users switch between them with one click
- **Date Range Control** - New date grouping options (Day, Week, Month, Quarter) and a date range picker for filtering charts by creation or update date

### Improvements
- Configuration panel layout reorganized for faster access to common settings
- Live Preview debounced during JQL typing to reduce unnecessary re-renders
- Segment color picker now remembers the last used custom color per session

### Bug Fixes
- Fixed Reference ID not showing until page refresh after first Controller save
- Fixed CSV export producing garbled characters for non-ASCII field values

---

## v3.1.0 - October 2025

### New Features
- **Smart Labels** - Add JQL-based or filter-based visual badge indicators to any Issue List column; color-coded and configurable per label rule
- **AND/OR Quick Filter Logic** - Choose whether multiple active Quick Filters combine with AND (narrow results) or OR (broaden results)
- **User Icon Display** - Show Jira user avatar images in Issue List assignee and reporter columns

### Improvements
- Quick Filter buttons now show a clear active/inactive visual state
- Issue List column rename UI streamlined; rename inline without opening a modal
- Display Options tab reorganized into logical groups

### Bug Fixes
- Fixed Smart Label badge overflow on narrow dashboard columns
- Fixed Quick Filter AND mode including extra issues in edge cases with multi-value fields

---

## v3.0.0 - August 2025

### Major New Features
- **Funnel Chart** - Visualize stage-based progression; ideal for support workflows, release pipelines, and issue lifecycle tracking
- **Tile Chart** - Display single KPI metrics as compact visual tiles; configurable tiles per row and multiple rows for scorecard-style dashboards
- **Admin Settings** - New app administration page for Jira site admins; control global export permissions, enabled features, and allowed data sources
- **Cumulative Total** - Running total option for Line charts to show cumulative issue count over time

### Improvements
- Segment controls: added search and pagination for projects and filters with large field lists
- Segment renaming is now fully inline (click to edit directly in the list)
- Improved color contrast for default segment color palette

### Bug Fixes
- Fixed bar chart x-axis labels overlapping for segments with long names
- Fixed segment reorder not persisting after gadget re-edit in Safari

---

## v2.1.0 - June 2025

### New Features
- **Sum and Average Calculations** - Aggregate numeric Jira fields (story points, original estimate, custom number fields) instead of just counting issues
- **Reference Lines** - Add Goal, Trend, or Average reference lines to Bar and Line charts to visualize targets and benchmarks

### Improvements
- Display Options expanded: control tooltip visibility, data label placement, and axis scale (auto vs. fixed)
- Number formatting options added: comma separators, decimal place control, unit suffix (e.g., "pts", "hrs")
- Segment ordering improved for date-based fields (now sorts chronologically by default)

### Bug Fixes
- Fixed tooltip misalignment on 2D Line charts with long segment names
- Fixed segment order not being preserved after gadget re-edit in some browsers

---

## v2.0.0 - April 2025

### Major New Features
- **Dynamic Filter Controller Gadget** - A shared interactive filter bar that controls multiple Custom Charts and Issue List gadgets simultaneously on the same dashboard
- **2D Chart Types** - Four new chart types requiring a second dimension: Grouped Bar, Stacked Bar, 2D Line, 2D Table
- **Group By** - Add a second grouping field to any chart for cross-tab analysis and multi-series comparisons
- **Table Chart** - Display aggregated issue counts as a structured data table instead of a visual chart

### Improvements
- Configuration panel redesigned with tabbed layout (Chart Type, Chart By, Group By, Calculations, Display Settings)
- Segment list now supports drag-to-reorder and inline color editing
- Issue List gains column reordering by drag-and-drop

### Bug Fixes
- Fixed pie chart not rendering when all segment values were zero
- Fixed JQL data source not accepting filters with special characters in names

---

## v1.1.0 - February 2025

### Improvements
- JQL validation: clearer error messages with field name suggestions when a field is unrecognized
- Number format options added: comma separators and configurable decimal places in chart labels
- Segment ordering improved for date-based fields

### Bug Fixes
- Fixed bar chart x-axis labels overlapping for long segment names
- Fixed CSV export encoding for issue summaries containing special characters
- Fixed pie chart showing blank slices for zero-count segments

---

## v1.0.0 - January 2025

### Initial Release

**Custom Charts Gadget**
- Pie, Bar, and Line chart types
- Chart By: Jira fields, Custom JQL segments, Saved Filter segments
- Segment controls: rename, reorder, show/hide, color assignment
- Rich text description field
- CSV export

**Issue List Gadget**
- Configurable columns from any Jira field
- Custom column renaming and reordering
- Quick Filters with JQL conditions
- Pagination and results-per-page control
- CSV export

**Data Sources**
- Projects (single or multi-project)
- Saved Jira Filters
- Custom JQL

**Export**
- PNG image export
- CSV data export

**Platform**
- Jira Cloud only
- Built on Atlassian Forge
`,
        },
      ],
    },

    // ═══ INTEGRATIONS & MIGRATION ═══
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
**Dashboard Templates, Charts, Graphs & Reports for Jira** is a native Jira Cloud app built on Atlassian Forge. It integrates deeply with Jira's own data model and dashboard system - no external services, no third-party connectors, and no data leaving your Atlassian environment.

---

## Native Jira Integration

The app reads and displays data directly from your Jira Cloud instance. All data access uses Jira's standard APIs within the Forge sandbox - the same data you would see in Jira's own issue navigator and board views.

### Jira Data the App Uses

| **Jira Data Type** | How the App Uses It |
|---|---|
| **Issues** | Primary source for all charts, tables, and filters - count, sum, group, and filter issues by any field |
| **Projects** | Select one or more projects as the data source for a gadget |
| **Saved Filters** | Use any saved Jira filter as a gadget data source - picks up the filter's JQL automatically |
| **Sprints** | Filter and group issues by sprint (Active, Future, Closed); supports \`openSprints()\` and \`closedSprints()\` in JQL |
| **Custom Fields** | Any custom field on your Jira instance can be used as a Chart By, Group By, column, or filter field |
| **Standard Fields** | Status, Priority, Assignee, Reporter, Issue Type, Component, Labels, Fix Version, Epic Link, Story Points, Due Date, Created, Updated, Resolved |
| **User Data** | Assignee and Reporter fields display user names and avatars (Issue List); JQL supports \`currentUser()\` for personal views |
| **Jira Statuses & Workflows** | Status values reflect your project's actual workflow statuses - no mapping needed |
| **Epics** | Group or filter by Epic Link or Epic Name using standard Jira fields or JQL |
| **Boards** | Select a Jira Software board as a data source - the board's own filter is resolved automatically, and its column layout can define chart bands, wallboard columns, and WIP rules |
| **Issue History (changelog)** | Read to calculate status durations, cycle and lead time, WIP over time, and burndown progress - powers Time in Status, CFD, WIP Aging, Control Chart, Histogram, Cycle Time Trend, WIP Run Chart, and Sprint Burndown |
| **Releases / Versions** | A release's start and release dates can define a reporting window in the flow-metrics gadgets |

### What the App Cannot Access

- **Sprints on Kanban boards** - sprint-based intervals and sprint scoping require a Scrum board
- **Jira Service Management (JSM) specific fields** - some JSM-only fields may not be available depending on your Jira configuration
- **External issue trackers** - the app only reads from Jira Cloud; no GitHub, Asana, or Linear integration
- **Confluence pages** - the app does not read from Confluence
- **Jira Server / Data Center** - Atlassian Forge is Cloud-only

---

## Jira Dashboard Gadget Integration

The app is delivered as **Jira dashboard gadgets** - the standard Atlassian mechanism for adding content to Jira dashboards.

### What This Means

- Gadgets appear in the standard Jira **Add gadget** gallery
- Gadgets follow Jira dashboard **share permissions** - view or edit access is controlled by whoever owns the dashboard
- Gadgets can be placed on **any Jira dashboard**, including personal, team, and company dashboards
- Gadgets respect Jira's **column layout system** (1, 2, or 3 column layouts)
- Multiple gadgets of the same type can be added to the same dashboard

### Gadget Sizing

Gadgets adjust their display to the column width assigned in the dashboard layout. For best results:

| **Gadget** | Recommended Column Width |
|---|---|
| **Custom Charts (Pie, Bar, Line)** | 1 or 2 columns |
| **Issue List** | 2 or 3 columns (wider is better for many columns) |
| **Dynamic Filter Controller** | Full width (3 columns) or at least 2 columns |
| **Issue Filter Formula** | 1 column for a single KPI; 2 or 3 for a multi-card panel |
| **Control Chart, Histogram, Cycle Time Trend, WIP Run Chart** | 2 or 3 columns - reference lines and axis labels need horizontal room |
| **Sprint Burndown & Burnup** | 2 or 3 columns |
| **Team Wallboard** | Full width (3 columns); use compact cards in narrower layouts |

---

## Jira Filter Integration

**Saved Jira Filters** can be used directly as the data source for any gadget:

1. Open a gadget in edit mode
2. In the left panel, set **Source Type** to **Saved Filter**
3. Search for the filter by name
4. Select the filter - the gadget uses its JQL automatically

### Benefits of Using Saved Filters

- Changes to the saved filter in Jira are reflected automatically in the gadget
- Filters managed by your team ensure everyone uses consistent data definitions
- Useful for organization-wide dashboards where a central filter defines "all active projects"

### Supported Filter Types

| **Filter Type** | Supported |
|---|---|
| **Personal saved filters (My Filters)** | Yes |
| **Shared filters (visible to you)** | Yes |
| **Favorite filters** | Yes |
| **Starred filters** | Yes |
| **Filters you don't have access to** | No - only filters you can view in Jira |

---

## No External Service Integrations

The current version does not natively integrate with:

| **Tool** | Status |
|---|---|
| **Slack** | Not supported |
| **Microsoft Teams** | Not supported |
| **Confluence** | Not supported |
| **Google Sheets / Excel** | Not supported (use CSV export instead) |
| **BI tools (Tableau, Power BI)** | Not supported (use CSV export instead) |
| **Jira Server / Data Center** | Not supported |

> **Workaround for BI tools:** Use the CSV export feature to download issue data, then import it into your preferred BI or spreadsheet tool.

---

## Platform & Security

| **Aspect** | Detail |
|---|---|
| **Platform** | Atlassian Forge (Cloud-native, sandboxed) |
| **Data storage** | Forge KVS - gadget configurations only; no issue data stored |
| **Data transit** | All data accessed within Atlassian's infrastructure; no external API calls |
| **Permissions** | Respects Jira's native project and issue permissions - users only see data they can access in Jira |
| **Authentication** | Uses Atlassian's standard OAuth/session for all API calls |
`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
This guide explains how to export and import gadget configurations, move setups between dashboards, back up your configurations, and understand what can and cannot be migrated.

---

## Overview

The app stores **gadget configurations** (chart settings, column choices, filter fields, display options) in Atlassian Forge KVS - not in Jira issues or project data. When you "migrate" a dashboard setup, you are moving these gadget configurations, not Jira data.

> **Important:** Uninstalling the app permanently deletes all stored gadget configurations. Back up important configurations before uninstalling.

---

## How to Export a Gadget Configuration

Every gadget has a built-in JSON export that captures the complete configuration:

1. Open the gadget in **edit mode**
2. Click the **Import/Export** tab in the right settings panel
3. Click **Export Configuration**
4. The configuration JSON is shown in the text area - **copy the entire JSON string**
5. Save it to a file or document for safekeeping

### What the Export JSON Contains

| **Included** | Not Included |
|---|---|
| **Chart type** | Jira issue data |
| **Chart By field and segments** | Jira project settings |
| **Group By field** | Dashboard layout |
| **Display Options** | User access permissions |
| **Quick filters (Issue List)** | Dynamic Filter Controller connections |
| **Smart Labels (Issue List)** | |
| **Reference lines (Custom Charts)** | |
| **Gadget title and description** | |

---

## How to Import a Configuration

1. Add a **new gadget** of the same type to a dashboard
2. Open it in **edit mode**
3. Click the **Import/Export** tab
4. Paste the exported JSON into the import text area
5. Click **Import** - all settings are applied immediately
6. Check the **Live Preview** to confirm everything looks correct
7. Adjust the **data source** if needed (the import does not transfer data source selections - you must re-select the project or filter)
8. Click **Save gadget**

> **Note:** You must re-select the data source after import. Project names and filter IDs are environment-specific and may differ between dashboards or Jira instances.

---

## Moving Configurations Between Dashboards (Same Jira Instance)

Use Import/Export to copy a gadget from one dashboard to another within the same Jira site:

1. **Export** the configuration from the source gadget (steps above)
2. Open the **destination dashboard** in edit mode
3. **Add a new gadget** of the same type
4. **Import** the configuration into the new gadget
5. **Re-select the data source** (project, filter, or JQL)
6. **Save**

### Dynamic Filter Controller - Special Consideration

When moving a Dynamic Filter Controller to a new dashboard:
- The controller gets a **new Reference ID** on the new dashboard
- All connected charts on the new dashboard must be **re-connected** to the new Reference ID
- Export and import the controller configuration, then re-link each connected gadget

---

## Moving Configurations Between Jira Instances

Gadget configurations can be moved between different Jira Cloud sites using the same Import/Export process, but with additional manual steps:

### Steps

1. Export the gadget configuration JSON from the **source Jira instance**
2. On the **target Jira instance**, add a new gadget of the same type
3. Import the JSON
4. **Re-select the data source** - project names and filter IDs do not transfer between instances
5. Verify that **custom fields** used in Chart By, Group By, or columns exist on the target instance (field names must match)
6. Verify that **JQL segment conditions** reference valid field names and values on the target instance
7. Save

### What Transfers Cleanly

| **Config Element** | Transfers? | Notes |
|---|---|---|
| **Chart type** | Yes | |
| **Chart By - Jira standard fields** | Usually yes | Field must exist on target instance |
| **Chart By - Custom JQL segments** | Usually yes | JQL field names must be valid on target |
| **Display Options** | Yes | |
| **Smart Labels** | Usually yes | JQL conditions must be valid on target |
| **Quick Filters** | Usually yes | JQL conditions must be valid on target |
| **Chart title / description** | Yes | |
| **Data source selection** | **No** | Must be re-selected manually |
| **Custom field references** | **Verify** | Custom field names must match on target |

---

## JSON Configuration Backup

Best practices for backing up your gadget configurations:

### Before Major Changes
Always export configuration before making significant changes to a working gadget - this gives you a restore point.

### Regular Backup Process

1. For each important gadget, open it in edit mode
2. Export the configuration JSON
3. Save to a shared document, wiki page, or version-controlled file

### Backup Format Recommendation

Store backups as plain text files with a clear naming convention:

\`\`\`
dashboard-name_gadget-type_chart-name_YYYY-MM-DD.json
\`\`\`

Example:
\`\`\`
sprint-dashboard_custom-charts_bug-by-priority_2026-05-19.json
team-dashboard_issue-list_workload-view_2026-05-19.json
\`\`\`

### What to Back Up Before Uninstalling

If you plan to uninstall and reinstall the app:
1. Export every gadget configuration you want to preserve
2. Note the **Reference IDs** of Dynamic Filter Controllers and which charts connect to each
3. Document your dashboard layouts (screenshot or notes)
4. After reinstalling, import configurations and re-establish controller connections

---

## Limitations

| **Limitation** | Detail |
|---|---|
| **No bulk export** | Configurations must be exported one gadget at a time |
| **No dashboard-level export** | Jira does not support exporting a full dashboard including gadget configs |
| **Controller connections not exported** | Linked chart-to-controller relationships must be re-established manually after import |
| **Data source not exported** | Project, filter, or JQL selections must be re-entered after import |
| **App uninstall deletes all configs** | There is no recovery after uninstall if configurations were not exported first |
`,
        },
      ],
    },

    // ═══ USE CASES ═══
    {
      id: "use-cases",
      title: "Use Cases",
      articles: [
        {
          slug: "common-use-cases",
          title: "Common Use Cases",
          content: `
Real-world examples of how teams use **Dashboard Templates, Charts, Graphs & Reports for Jira** to visualize their work, track progress, and make faster decisions.

---

## 1. Sprint Dashboard

**Who:** Scrum Masters, Agile Coaches, Development Teams
**When:** Sprint planning, daily standups, sprint reviews

### What It Shows
A complete view of the current sprint - what's done, what's in progress, what's blocked, and how much work remains.

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Pie)** | Data: Current Sprint JQL \`sprint in openSprints()\` - Chart By: Status | Sprint status distribution at a glance |
| **Custom Charts (Bar)** | Data: Same sprint - Chart By: Assignee - Calculation: Count | Work distribution across team members |
| **Custom Charts (Tile)** | Data: Sprint JQL - Chart By: Custom JQL segments (Done vs Total) | Story point completion percentage |
| **Issue List** | Data: Sprint JQL - Columns: Key, Summary, Status, Assignee, Story Points | Full sprint backlog with click-through to issues |
| **Dynamic Filter Controller** | Data: Sprint JQL - Fields: Assignee, Status, Priority | Let team members filter by their own name |

### Configuration Tips
- Use \`sprint in openSprints()\` as your base JQL to always show the current sprint
- Add a **Goal Line** to the bar chart at your sprint velocity target (e.g., 40 story points)
- Connect all gadgets to the Dynamic Filter Controller so the whole dashboard updates when a team member filters by their name
- Add Smart Labels to the Issue List for "Blocked" (\`labels = blocked\`) and "High Priority" (\`priority in (High, Highest)\`)

---

## 2. Bug Tracking Dashboard

**Who:** QA Leads, Engineering Managers, Release Managers
**When:** Active development sprints, pre-release periods, production incident tracking

### What It Shows
A focused view of all open bugs - by severity, age, assignment status, and component.

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Pie)** | Data: \`issuetype = Bug AND resolution is EMPTY\` - Chart By: Priority | Bug severity distribution |
| **Custom Charts (Bar)** | Data: Open bugs - Chart By: Assignee | Bug ownership per developer |
| **Custom Charts (Stacked Bar)** | Data: Open bugs - Chart By: Component - Group By: Priority | Priority mix per component |
| **Custom Charts (Line)** | Data: \`issuetype = Bug AND created >= -90d\` - Chart By: Created (by Week) | Bug creation trend over 90 days |
| **Issue List** | Data: Open bugs - Columns: Key, Summary, Priority, Status, Assignee, Created, Component | Full bug list sortable by priority |

### Configuration Tips
- Set Chart By to **Priority** for the pie chart and map colors: Highest = red, High = orange, Medium = yellow
- Add a Quick Filter to the Issue List: "Unassigned" (\`assignee is EMPTY\`) to quickly spot untriaged bugs
- Use the Stacked Bar chart to identify which components have the highest proportion of critical bugs
- Add a **Trend Line** to the line chart to see if bug volume is increasing or decreasing

---

## 3. Team Workload Dashboard

**Who:** Engineering Managers, Team Leads, Project Managers
**When:** Weekly team reviews, capacity planning, identifying overloaded team members

### What It Shows
Who has what - a clear picture of work distribution across the team to spot imbalances before they become problems.

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Bar)** | Data: \`project = X AND resolution is EMPTY\` - Chart By: Assignee | Issue count per team member |
| **Custom Charts (Grouped Bar)** | Data: Same - Chart By: Assignee - Group By: Status | Work stage breakdown per person |
| **Custom Charts (Stacked Bar)** | Data: Same - Chart By: Assignee - Group By: Priority | Priority distribution per person |
| **Custom Charts (Bar)** | Data: Same - Chart By: Assignee - Calculation: Sum of Story Points | Story point load per person |
| **Issue List** | Data: Same - Columns: Assignee, Key, Summary, Status, Priority, Due Date | Full team work queue |

### Configuration Tips
- Add an **Average Line** to the issue count bar chart - immediately shows who is above/below team average
- Use **Sum of Story Points** calculation to compare actual work complexity, not just ticket count
- Add a Quick Filter "Due This Week" (\`duedate >= startOfWeek() AND duedate <= endOfWeek()\`) to the Issue List
- Connect all gadgets to a Dynamic Filter Controller with an Assignee field - managers can click a name to see that person's view

---

## 4. Release Readiness Dashboard

**Who:** Release Managers, Product Owners, Engineering Managers
**When:** Pre-release week, release gate reviews, stakeholder sign-off meetings

### What It Shows
Everything needed to decide if the release is ready - open blockers, remaining work by component, fix version status, and resolved vs unresolved ratio.

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Pie)** | Data: \`fixVersion = "v2.0"\` - Chart By: Custom JQL (Done vs Not Done) | Overall release completion percentage |
| **Custom Charts (Stacked Bar)** | Data: Fix version JQL - Chart By: Component - Group By: Status | Completion by component |
| **Custom Charts (Tile)** | Data: \`fixVersion = "v2.0" AND priority = Highest AND resolution is EMPTY\` - Chart By: Status | Critical open blockers count |
| **Issue List** | Data: \`fixVersion = "v2.0" AND resolution is EMPTY AND priority in (Highest, High)\` - Columns: Key, Summary, Priority, Status, Assignee | High-priority outstanding items |
| **Custom Charts (Line)** | Data: Fix version JQL - Chart By: Resolved (by Day) | Resolution velocity trend |

### Configuration Tips
- Create JQL segments for the pie chart: "Done" (\`resolution is not EMPTY\`) and "Remaining" (\`resolution is EMPTY\`)
- Set a **Goal Line** on the line chart at your target daily resolution rate
- Use Smart Labels in the Issue List for "Blocker" (\`labels = blocker\`) and "Needs QA" (\`status = "Ready for QA"\`)
- Share this dashboard with stakeholders using Jira's dashboard sharing - they can view without edit access

---

## 5. Executive KPI Dashboard

**Who:** VPs, Directors, C-Suite, Senior Stakeholders
**When:** Weekly/monthly reviews, board meetings, OKR check-ins

### What It Shows
High-level metrics without noise - the numbers that matter to leadership, presented cleanly without Jira-specific terminology.

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Tile)** | Data: \`project in (X, Y, Z) AND resolution is EMPTY\` | Total open issues across all projects |
| **Custom Charts (Tile)** | Data: \`issuetype = Bug AND priority = Highest AND resolution is EMPTY\` | Critical open bugs |
| **Custom Charts (Tile)** | Data: \`sprint in openSprints() AND resolution is not EMPTY\` | Issues resolved this sprint |
| **Custom Charts (Bar)** | Data: \`created >= -12w\` - Chart By: Created (by Month) | Issue creation trend (last 3 months) |
| **Custom Charts (Stacked Bar)** | Data: Multi-project - Chart By: Project - Group By: Status | Cross-project health overview |

### Configuration Tips
- Use **Tile charts** for the top row - one number per tile, large and clear
- Rename segment labels to business-friendly terms (e.g., rename "In Progress" to "Active Work")
- Set the title of each gadget clearly (e.g., "Open Critical Bugs" not "Priority = Highest, resolution is EMPTY")
- Use the **Description** tab to add context below charts (e.g., "As of last refresh - click Refresh to update")
- Export the dashboard view as PDF for board packs and email updates

---

## 6. Support & Service Desk Dashboard

**Who:** Support Leads, Customer Success Managers, Operations Teams
**When:** Daily team huddles, SLA review meetings, capacity planning

### Recommended Gadget Setup

| **Gadget** | Configuration | Purpose |
|---|---|---|
| **Custom Charts (Funnel)** | Data: All open support tickets - Chart By: Status (ordered by workflow) | Ticket pipeline visualization |
| **Custom Charts (Bar)** | Data: \`created >= -7d\` - Chart By: Assignee | New tickets per agent this week |
| **Issue List** | Data: Open high-priority tickets - Smart Labels: Overdue, Escalated | Tickets needing immediate attention |

### Configuration Tips
- Order funnel segments to match your support workflow (e.g., New → Triaged → In Progress → Pending Customer → Resolved)
- Add a Smart Label "Overdue" using \`duedate < now() AND resolution is EMPTY\` with a red badge
- Add Quick Filters: "My Tickets" (\`assignee = currentUser()\`), "Unassigned" (\`assignee is EMPTY\`)
`,
        },
        {
          slug: "use-case-templates",
          title: "Use Case Templates",
          content: `
Ready-to-use dashboard templates with recommended gadget combinations, JQL, and configuration tips. Copy the JQL and gadget setups directly into your dashboard.

---

## Template 1: Sprint Health Dashboard

**Purpose:** Daily standup and sprint review dashboard for Scrum teams
**Audience:** Scrum Master, Development Team
**Update Frequency:** Daily

### Gadgets to Add (in order)

| **Position** | Gadget Type | Title |
|---|---|---|
| **Row 1, Col 1** | Custom Charts - Pie | Sprint Status Overview |
| **Row 1, Col 2** | Custom Charts - Tile | Sprint Completion % |
| **Row 1, Col 3** | Custom Charts - Bar | Work by Assignee |
| **Row 2, Full width** | Dynamic Filter Controller | Sprint Filters |
| **Row 3, Full width** | Issue List | Sprint Backlog |

### JQL for All Gadgets
\`\`\`
sprint in openSprints() AND project = YOUR_PROJECT
\`\`\`

### Configuration Details

**Pie Chart - Sprint Status Overview**
- Source: JQL above
- Chart By: Status
- Colors: To Do = grey, In Progress = blue, Done = green, Blocked = red

**Tile Chart - Sprint Completion %**
- Source: JQL above
- Chart By: Custom JQL segments
  - Segment 1 "Done": \`status = Done\`
  - Segment 2 "Remaining": \`status != Done\`
- Display: % format

**Bar Chart - Work by Assignee**
- Source: JQL above
- Chart By: Assignee
- Calculation: Count
- Add Average Line to show team average

**Dynamic Filter Controller**
- Source: JQL above
- Filter Fields: Assignee, Status, Priority, Sprint
- Add Tabs: "All Work" (no filter), "My Issues" (Assignee = currentUser()), "In Progress" (Status = In Progress)

**Issue List - Sprint Backlog**
- Source: JQL above
- Columns: Key, Summary, Status, Assignee, Story Points, Priority
- Sort: Status ascending
- Quick Filters: "Blocked" (\`labels = blocked\`), "High Priority" (\`priority in (High, Highest)\`), "Unassigned" (\`assignee is EMPTY\`)

---

## Template 2: Bug Tracking Dashboard

**Purpose:** Track all open bugs with priority, age, and assignment visibility
**Audience:** QA Lead, Engineering Manager
**Update Frequency:** Daily

### Base JQL
\`\`\`
issuetype = Bug AND resolution is EMPTY AND project = YOUR_PROJECT
\`\`\`

### Gadgets to Add

| **Position** | Gadget Type | Title |
|---|---|---|
| **Row 1, Col 1** | Custom Charts - Pie | Bugs by Priority |
| **Row 1, Col 2** | Custom Charts - Bar | Bugs by Assignee |
| **Row 1, Col 3** | Custom Charts - Tile | Total Open Bugs |
| **Row 2, Full width** | Issue List | Open Bug List |

### Configuration Details

**Pie - Bugs by Priority**
- Chart By: Priority
- Colors: Highest = dark red, High = orange, Medium = yellow, Low = light blue, Lowest = grey

**Bar - Bugs by Assignee**
- Chart By: Assignee
- Add Average Line

**Tile - Total Open Bugs**
- Source: JQL above
- Chart By: Status (show all statuses)
- Display: Count only, show total

**Issue List - Open Bug List**
- Columns: Key, Summary, Priority, Status, Assignee, Created, Component
- Sort: Priority descending
- Smart Labels: "Critical" (\`priority = Highest\`), "Overdue" (\`duedate < now()\`)
- Quick Filters: "Unassigned" (\`assignee is EMPTY\`), "Critical" (\`priority = Highest\`), "My Bugs" (\`assignee = currentUser()\`)

---

## Template 3: Team Workload Dashboard

**Purpose:** Visualize work distribution and capacity across the team
**Audience:** Engineering Manager, Team Lead
**Update Frequency:** Weekly

### Base JQL
\`\`\`
project = YOUR_PROJECT AND resolution is EMPTY AND assignee is not EMPTY
\`\`\`

### Gadgets to Add

| **Position** | Gadget Type | Title |
|---|---|---|
| **Row 1, Full width** | Dynamic Filter Controller | Team Filters |
| **Row 2, Col 1** | Custom Charts - Bar | Issues per Person |
| **Row 2, Col 2** | Custom Charts - Bar | Story Points per Person |
| **Row 2, Col 3** | Custom Charts - Pie | Status Overview |
| **Row 3, Full width** | Issue List | Team Work Queue |

### Configuration Details

**Bar - Issues per Person**
- Chart By: Assignee
- Calculation: Count
- Add Average Line
- Add Goal Line at your team capacity limit (e.g., 10 issues per person)

**Bar - Story Points per Person**
- Chart By: Assignee
- Calculation: Sum of Story Points
- Add Average Line

**Pie - Status Overview**
- Chart By: Status

**Issue List - Team Work Queue**
- Columns: Assignee, Key, Summary, Status, Priority, Story Points, Due Date
- Sort: Assignee, then Priority
- Quick Filters: "Due This Week" (\`duedate <= endOfWeek()\`), "High Priority" (\`priority in (High, Highest)\`)

---

## Template 4: Release Readiness Dashboard

**Purpose:** Track release scope completion and outstanding blockers
**Audience:** Release Manager, Product Owner
**Update Frequency:** Daily during release period

### Base JQL (replace v2.0 with your fix version)
\`\`\`
fixVersion = "v2.0" AND project = YOUR_PROJECT
\`\`\`

### Gadgets to Add

| **Position** | Gadget Type | Title |
|---|---|---|
| **Row 1, Col 1** | Custom Charts - Pie | Release Completion |
| **Row 1, Col 2** | Custom Charts - Tile | Critical Blockers |
| **Row 1, Col 3** | Custom Charts - Line | Resolution Velocity |
| **Row 2, Full width** | Issue List | Outstanding Items |

### Configuration Details

**Pie - Release Completion**
- Chart By: Custom JQL segments
  - "Done": \`fixVersion = "v2.0" AND resolution is not EMPTY\`
  - "Remaining": \`fixVersion = "v2.0" AND resolution is EMPTY\`
- Colors: Done = green, Remaining = orange

**Tile - Critical Blockers**
- Source: \`fixVersion = "v2.0" AND priority = Highest AND resolution is EMPTY\`
- Display: Count only (large number format)
- If count > 0, this number needs attention

**Line - Resolution Velocity**
- Source: \`fixVersion = "v2.0" AND resolved >= -30d\`
- Chart By: Resolved (by Day)
- Date Grouping: Days
- Add Trend Line to see if velocity is increasing

**Issue List - Outstanding Items**
- Source: \`fixVersion = "v2.0" AND resolution is EMPTY\`
- Columns: Key, Summary, Priority, Status, Assignee, Component
- Sort: Priority descending
- Smart Labels: "Blocker" (\`labels = blocker\`), "Needs Review" (\`status = "In Review"\`)

---

## Template 5: Executive Summary Dashboard

**Purpose:** High-level KPI view for leadership
**Audience:** Director, VP, C-Suite
**Update Frequency:** Weekly

### Gadgets to Add

| **Position** | Gadget Type | Title |
|---|---|---|
| **Row 1, 4 tiles** | Custom Charts - Tile | Open Issues, Critical Bugs, Resolved This Month, Active Team Members |
| **Row 2, Col 1** | Custom Charts - Bar | Monthly Issue Trend |
| **Row 2, Col 2** | Custom Charts - Stacked Bar | Project Health |

### JQL for Each Tile

| **Tile** | JQL |
|---|---|
| **Open Issues** | \`project in (X, Y, Z) AND resolution is EMPTY\` |
| **Critical Bugs** | \`issuetype = Bug AND priority = Highest AND resolution is EMPTY\` |
| **Resolved This Month** | \`resolved >= startOfMonth() AND project in (X, Y, Z)\` |

### Tips for Executive Dashboards
- Use the **Description** tab on each gadget to add plain-language context below the chart
- Rename Jira status values to business language in segment labels (e.g., "In Progress" → "Active")
- Export to PDF monthly for board packs
- Set gadget titles to be stakeholder-friendly (avoid Jira jargon like "JQL" or "Assignee")
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 20. HELP & SUPPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "faq",
          title: "FAQ",
          content: `
## General

### What is Dashboard Templates, Charts, Graphs & Reports for Jira?
It is a Jira Cloud app that adds fourteen gadgets to your Jira dashboards: **Custom Charts** (10 chart types), **Issue List** (configurable issue table), **Dynamic Filter Controller** (shared interactive filter bar), **Time in Status** (changelog-based status duration analysis), **Pivot Table** (cross-tabulation with 9 display types), **Cumulative Flow Diagram** (stacked area flow chart), **WIP Aging Charts** (scatter plot for in-progress age), **Control Chart** (cycle and lead time per item), **Histogram Chart** (cycle time distribution), **Cycle Time Trend** (average cycle time per interval), **WIP Run Chart** (WIP over time with limits), **Sprint Burndown & Burnup** (sprint progress and scope), **Team Wallboard** (work items as cards in columns), and **Issue Filter Formula** (KPIs from up to nine aggregations combined with formulas). All gadgets read live Jira data.

### Which Jira products does the app support?
The app works with all Jira Cloud products - Jira Software, Jira Service Management, and Jira Work Management. It requires Jira Cloud; Server and Data Center are not supported.

### Is there a free trial?
Yes, a 30-day free trial is available on the Atlassian Marketplace. No credit card is required to start the trial.

### How do I install the app?
Go to **Jira Settings → Apps → Find new apps**, search for "Dashboard Templates Clovity", click **Install**, and accept the permissions. Gadgets are immediately available in the dashboard gadget gallery.

---

## Charts & Configuration

### How many chart types are available?
The Custom Charts gadget supports **10 chart types**: Pie, Bar, Grouped Bar, Stacked Bar, Line, 2D Line, Table, 2D Table, Funnel, and Tile.

### How do I change the chart type?
Open the gadget in edit mode, click the **Chart Type** tab in the right panel, and select your desired type. The preview updates instantly.

### Can I use custom fields in charts?
Yes. Any custom field in your Jira instance can be used for Chart By, Group By, or Calculations - including custom dropdowns, number fields, and user pickers.

### Why does my chart show "None" for some segments?
"None" appears when issues do not have a value for the selected Chart By field. You can rename the "None" label by clicking it, or hide it using the eye icon next to that segment.

### Why is my chart showing no data?
Check three things: (1) your data source (project, filter, or JQL) returns issues in Jira's Issue Navigator; (2) you have Browse Issues permission on the project; (3) the Chart By field has values for those issues.

### How do I export a chart?
In **view mode** (not edit mode), click the **options menu (…)** on the gadget and choose **PNG**, **PDF**, or **CSV**. If the export option is missing, your Jira admin may have disabled it globally.

### Can I add a goal or reference line to a chart?
Yes. Open the gadget in edit mode, go to the **Calculations** tab, and click **+ Add Reference Line**. Set the type (Goal Line or Average Line), value, and label.

---

## Data Sources & JQL

### What data sources can I use?
Each gadget supports four source types: **Projects** (one or more Jira projects), **Saved Filter** (a pre-saved Jira filter), **Custom JQL** (a manual JQL query), and **Dynamic Filter Controller** (connected to another gadget for interactive filtering).

### What is a good starting JQL for a chart?
Start with \`project = MYPROJECT\` to see all issues in a project. Then narrow it with conditions like \`AND issuetype = Bug\` or \`AND sprint in openSprints()\`. Test your JQL in Jira's Issue Navigator first to confirm it returns expected results.

### How do I filter by date in a chart?
Set Chart By to a date field (Created, Resolved, or Updated), then set **Date Grouping** (Days, Weeks, Months, Years) and **Date Range** in the Chart By tab. Switch Chart Type to Line for a trend view.

---

## Dynamic Filter Controller

### What is the Dynamic Filter Controller?
It is a special gadget that acts as a shared filter bar for your dashboard. Configure it once with dropdown filters, then connect your Custom Charts and Issue List gadgets to it so a single filter selection updates all connected gadgets simultaneously.

### What is the Reference ID?
The Reference ID (e.g., "ABC123") is a unique code shown on a saved Dynamic Filter Controller gadget. Enter it in other gadgets when setting their source type to "Dynamic Filter Controller" to link them together.

### Why aren't my connected charts updating when I use the filter controller?
Verify that each chart's **Data Source** is set to "Dynamic Filter Controller" and the correct Reference ID is entered. If the ID is correct, try editing the controller, saving without changes, and refreshing the dashboard with Ctrl+F5.

### Can I add quick-filter tabs to the controller?
Yes. In the controller's edit mode, click the **+** button next to the existing tab in the Live Preview area, give the new tab a name, and set its default filter values.

---

## Issue List Gadget

### How do I add or remove columns from the Issue List?
Open the Issue List gadget in edit mode. In the **Columns** section, click **+ Add another field** to add a column, drag the handle icon to reorder, and click the trash icon to remove a column.

### Can I add quick filters to the Issue List?
Yes. In edit mode, scroll to the **Quick Filters** section and click **+ Add filter**. Set the label and JQL condition - the filter button appears on the gadget in view mode.

---

## Time in Status

### How does Time in Status calculate time?
It reads the **issue changelog** - the full history of status transitions stored by Jira. When an issue moves from "In Progress" to "In Review", the timestamp of that transition is recorded. Time in Status calculates the difference between consecutive transition timestamps, giving you an accurate elapsed time for each status.

### Why is my Time in Status data different from what I see on the issue screen?
The issue screen shows the **current status**. Time in Status shows **historical time across all statuses** an issue has visited. If an issue was reopened or moved backward, both trips through a status are counted.

### Can I measure time in business hours only?
Yes. In the gadget's configuration panel, enable **Exclude Weekends** and set **Work Hours Per Day** to your team's working hours (e.g., 8). The calculation then counts only time within configured working days.

### What is Status Grouping?
Status Grouping lets you combine multiple statuses into a single logical band. For example, if you have "Code Review", "Peer Review", and "Awaiting Approval" as separate statuses, you can group them into a single "Review" band for the report. Configure groups in the **Status Groups** tab inside the Time in Status gadget settings.

### How do I measure time in business hours only?
Select a **Business** time format in the "Calculate In" setting (e.g., Business Decimal Days or Business DaysHoursMinutes). Then configure your team's work schedule - set working hours and working days in the **Work Schedule** page. The calculation will then exclude non-working hours automatically.

---

## Pivot Table

### How is the Pivot Table different from the Custom Charts 2D Table?
The Custom Charts 2D Table supports one field on each axis. The Pivot Table supports **up to 3 fields per axis**, creating multi-level nested grouping. It also offers 7 aggregation methods (vs. count-only in Custom Charts) and heatmap display types.

### Can I use Story Points or other numeric fields in the Pivot Table?
Yes. Set the **Aggregation Method** to Sum, Average, Min, or Max, then select the numeric field (e.g., Story Points, Original Estimate, or any custom number field) as the **Aggregation Field**.

### What is a heatmap display in the Pivot Table?
Heatmap mode color-codes each cell based on its value - darker color = higher value. You can choose to apply the color scale across the whole table (Table Heatmap), per row (Row Heatmap), or per column (Column Heatmap). Useful for quickly spotting outliers in a large matrix.

---

## Cumulative Flow Diagram

### What is a Cumulative Flow Diagram used for?
A CFD shows how work accumulates across workflow stages over time. The width of each band on any given day shows how many issues were in that stage. Widening bands indicate a bottleneck - work is entering the stage faster than it is leaving.

### Can I scope the CFD to a specific sprint?
Yes. Set **Date Range Mode** to **Sprint Range** and select the sprint. The chart automatically uses the sprint's start and end dates as the time window.

### What is Board Integration?
When you connect the CFD to a Jira Software board, it uses the board's **column definitions** as bands instead of raw statuses. This means multiple statuses mapped to the same board column appear as a single band - matching exactly what your team sees on their board.

---

## WIP Aging Charts

### What does the WIP Aging scatter plot show?
Each dot represents one in-progress issue. The **X position** shows how many days it has been in its current status. The **Y position** shows which status group it belongs to. Dots far to the right are the oldest - the ones most likely to be stalled or at SLA risk.

### What is the Percentile Line?
The percentile line shows a statistical boundary for your team's current aging distribution. The 85th percentile means "85% of your in-progress work is younger than this line." This is the standard metric for a Kanban **Service Level Expectation (SLE)** - a data-driven commitment to your stakeholders about how fast work typically completes.

### What is the Threshold Line?
The threshold is a fixed day value you set manually - typically your SLA limit or internal policy (e.g., "all P1 bugs must be resolved within 5 business days"). Any dot to the right of the threshold line is a potential SLA breach that needs immediate attention.

### What does Log Scale do?
Log scale compresses the X-axis logarithmically. Useful when a few very old issues stretch the axis so wide that normal-age issues are all clustered in the leftmost 10% of the chart. Log scale makes the typical cluster readable without removing the outliers.

---

## Flow Metrics Gadgets

### There are five gadgets about cycle time. Which one do I use?
**Control Chart** for every completed item plotted over time - use it for predictability and percentile commitments. **Histogram Chart** for the distribution of those same durations - use it to size the slow tail and set an SLA. **Cycle Time Trend** for the direction of travel over weeks or sprints. **WIP Run Chart** for how much work is open at once. **WIP Aging Charts** for which open items are old right now.

### What is the difference between cycle time and lead time?
**Lead time** starts when the work item was created - the customer's view of the wait. **Cycle time** starts at a workflow point you choose, usually when work actually began. Lead time is always the larger of the two, and the gap between them is your queue time.

### Why do two teams get different cycle time numbers for the same work?
Almost always because their start and end conditions differ. Cycle time is only comparable when the definition is identical. Write your definition into the gadget's Description tab so it travels with the chart.

### Why are some completed items missing from my Control Chart?
Items that never met the start condition are not plotted. If the cycle starts at "Issue enters In Progress" and an item went straight from To Do to Done, there is no cycle to measure. Switch the start condition or use Lead Time.

### What is a good number to quote for delivery estimates?
The 85th percentile, not the average. The average is met roughly half the time; the 85th percentile is met most of the time.

### How do I decide a WIP limit?
Chart your actual WIP first with no limits, using the WIP Run Chart. Start with a max limit slightly below your observed average and tighten it while watching cycle time on the Control Chart.

---

## Sprint Burndown & Burnup

### Why does the gadget only accept a board?
Sprint scope, sprint dates, and the definition of done all come from the board and its sprint, so the chart matches what the team committed to. Choose **Latest sprint (auto)** so the gadget follows the active sprint without being re-edited each sprint.

### My burndown looks fine but the sprint failed. Why?
Turn on the **Scope** series. A scope line that steps up mid-sprint means work was added after commitment - which explains a missed sprint more often than slow delivery does.

### Should weekends count?
Set weekend mode to **non-working** for most teams, so the ideal line stays flat across weekends instead of expecting progress nobody was making. **Hide weekends** removes them from the axis entirely.

### The chart will not load. What is missing?
Two settings block rendering until they are complete: **Calculate By: Custom Field** with no field selected, and **Definition of Done: Specific statuses** with no statuses selected.

---

## Team Wallboard

### Why are my columns To Do / In Progress / Done instead of my board's columns?
Board columns require a Board data source. Every other source type groups by Jira's status categories instead.

### Does "Assigned to me" show my work or the dashboard owner's?
The viewer's. The quick filter resolves per user, so one gadget shows each person their own items.

### Can I run it on a wall display?
Yes. Turn on auto-refresh and compact cards, and turn off the options menu so the board cannot be reconfigured by accident.

---

## Issue Filter Formula

### How is this different from a Tile chart?
A Tile chart counts one query. Issue Filter Formula combines up to nine independently-scoped queries with math - so it can express ratios, rates, and comparisons across different projects or time windows that no single query can produce.

### Why does my formula show NaN?
Usually a division by zero, or an aggregation over a query that matched nothing. Guard the expression: \`IF(b > 0, a / b * 100, 0)\`. Turn off **Show NaN** on display dashboards once the formulas are settled.

### Can each variable use a different project or filter?
Yes - that is the point of the gadget. Every variable has its own data source, JQL, aggregation, and field.

### The time values look enormous. Why?
Time-tracking fields are read in seconds. Divide in the formula: \`a / 3600\` for hours, \`a / 28800\` for eight-hour days.

---

## Security & Data

### Does the app send my Jira data to external servers?
No. The app runs on Jira's native Forge platform and queries Jira's own APIs. Gadget configurations are stored in Jira's built-in Forge KVS storage. Issue data is not copied or exported to any external system.

### Why can't I see certain issues in my chart?
You can only see issues you have permission to view in Jira. If some issues are missing, check your Jira project permissions and verify you have "Browse Issues" access on the relevant project.

### How many issues can the app handle?
There is no hard limit, but queries returning 50,000+ issues may load slowly. For best performance, keep queries under 10,000 issues by narrowing your JQL with date filters, project scoping, or status conditions.

### Who can install the app?
Only a **Jira site administrator** can install apps from the Atlassian Marketplace. Once installed, all users with dashboard edit access can add and configure gadgets.

---

## Billing & Licensing

### How is the app licensed?
Licensing follows Atlassian's standard Marketplace model - priced per Jira user tier. The cost scales with the number of users in your Jira instance.

### What happens when the trial ends?
If you do not purchase a license, gadgets become read-only and configuration is locked. Existing data is not deleted - purchasing a license restores full functionality immediately.

---

## Still Have Questions?

Check the **Troubleshooting Guide** or contact our support team at [support@clovity.com](mailto:support@clovity.com). Response time is within 1–2 business days.`,
        },
        {
          slug: "troubleshooting-guide",
          title: "Troubleshooting Guide",
          content: `Step-by-step solutions for common issues with Custom Charts & Dashboards.

## No Data or Empty Chart

### Symptoms

* Chart displays "No data" message
* Chart appears empty
* Zero count for all segments

### Solutions

**Step 1:** Test your JQL in Jira - Go to issue navigator, paste your JQL, check if issues appear

**Step 2:** Check permissions - Can you view the project? Do you have "Browse Issues" permission?

**Step 3:** Verify data source - Are issues in those projects? Does the filter return results?

**Step 4:** Check field values - If Chart By field is empty for all issues, you'll see "No data"

## Everything Shows as "None"

### Why this happens

"None" means the selected field is empty for those issues.

### Fixes

* Choose a different field - Use a field that has values (Status, Issue Type)
* Rename "None" - Click the segment name to give it a clearer label
* Hide "None" - Click the eye icon to hide empty values

## JQL Validation Errors

### Common Errors and Fixes

| **Error** | **Fix** |
| --- | --- |
| **"Field 'X' does not exist"** | Check exact field name in Jira |
| **"Value 'X' does not exist"** | Check valid options in Jira |
| **"Syntax error"** | Review JQL syntax, check quotes and operators |

## Slow Loading / Performance Issues

### Solutions

**Step 1:** Narrow your query - Add filters to reduce issue count

**Step 2:** Reduce segments - Fewer segments = faster rendering

**Step 3:** Check Jira performance - Is Jira itself slow?

**Step 4:** Browser troubleshooting - Close unnecessary tabs, try different browser

## Connected Charts Not Updating

### Solutions

**Step 1:** Verify connection - Click "Show Connected Charts" in the controller

**Step 2:** Check data source setting - Verify Data Source = "Dynamic Filter Controller"

**Step 3:** Refresh the dashboard - Try Ctrl+F5 (hard refresh)

**Step 4:** Re-save the controller - Edit the controller, make no changes, click Save

## Gadget Not Saving

### Solutions

* Check internet connection
* Check dashboard permissions
* Fix any validation errors (check for red error messages)
* Try a different browser

## Export Not Working

### Solutions

* Check popup blocker - Allow popups for your Jira domain
* Check export is enabled - In Display Settings, verify "Enable export" is on
* Check admin settings - Export may be disabled globally by your Jira admin
* Try different format - If PNG fails, try PDF or CSV

## Still Having Issues?

If none of these solutions work:

1. Gather information: Jira site URL, gadget type, JQL, screenshots
2. Contact support: support@clovity.com
`,
        },
        {
          slug: "contact-support",
          title: "Contact Support",
          content: `How to get help from the Custom Charts & Dashboards support team.

## Support Email

**Email:** support@clovity.com

**Response Time:** Within 1-2 business days

## Before Contacting Support

To help us resolve your issue faster, please try these steps first:

### 1. Check Documentation

* FAQ - Common questions answered
* Troubleshooting - Step-by-step issue resolution

### 2. Test Your JQL

* Go to Jira's issue navigator
* Test your JQL query there first
* Verify it returns expected results

### 3. Try Basic Fixes

* Refresh the dashboard
* Try a different browser
* Clear browser cache

## What to Include in Your Support Request

### Required Information

| **Information** | **Example** |
| --- | --- |
| **Jira Site URL** | https://yourcompany.atlassian.net |
| **Gadget Type** | Custom Charts / Issue List / Dynamic Filter Controller |
| **Issue Description** | Chart shows no data when filtering by Sprint |

### Helpful Additional Information

| **Information** | **Why It Helps** |
| --- | --- |
| **Data Source Type** | Projects, Board, Saved Filter, JQL, or Dynamic Filter Controller |
| **JQL Query** | Exact JQL you're using |
| **Screenshots** | Shows exactly what you're seeing |
| **Error Messages** | Exact text of any errors |
| **Browser & Version** | Chrome 120, Firefox 121, etc. |

## Response Process

### What Happens After You Contact Us

1. Acknowledgment - We confirm receipt (usually same day)
2. Review - We investigate your issue
3. Follow-up - We may ask clarifying questions
4. Resolution - We provide a solution or workaround
5. Verification - We confirm the issue is resolved

### Typical Resolution Times

| **Issue Type** | **Typical Time** |
| --- | --- |
| **Configuration help** | 1-2 business days |
| **Bug reports** | 2-5 business days |
| **Feature requests** | Logged for review |

## Feature Requests

We love hearing your ideas! To submit a feature request:

1. Email support@clovity.com
2. Subject: "Feature Request: [Brief Description]"
3. Include: What you want to accomplish, why it would be valuable, current workarounds

## Vendor Information

**Company:** Clovity

**Support Email:** [support@clovity.com](mailto:support@clovity.com)
`,
        },
      ],
    },
  ],
};
