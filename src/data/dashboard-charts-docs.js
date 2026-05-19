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
            src: "https://www.youtube.com/embed/cD2Kdxp59qA",
            title: "Dashboard Templates, Charts, Graphs & Reports for Jira - Product Overview",
          },
          content: `# Dashboard Templates, Charts, Graphs & Reports for Jira

Custom Charts for Jira is a reporting app that helps you **see your Jira data in a clear, visual way**.

## Core Value Proposition

- Make **charts and graphs** from your Jira issues with no coding required
- Build **tables and issue lists** with configurable columns, smart labels, and quick filters
- Create **interactive configurable dashboards** for your team using a shared Dynamic Filter Controller
- Export everything as **PNG, PDF, or CSV** for stakeholders and reporting

All of this is done **inside Jira**, using your existing projects, filters, and JQL.

<!--VIDEO_BREAK-->

## Three Integrated Gadgets

| Gadget | What It Does |
|---|---|
| **Custom Charts** | Create pie, bar, line, table, funnel, and tile charts from Jira issues; supports 10 chart types |
| **Issue List** | Display Jira issues in a configurable table with custom columns, smart labels, and quick filters |
| **Dynamic Filter Controller** | Create a shared filter bar that controls multiple charts and lists simultaneously |

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
          content: `# Installation & Setup

## Prerequisites

Before installing, confirm:

1. You are a **Jira Cloud site administrator** (required to install Marketplace apps)
2. Your Jira instance is **Jira Cloud** - this app does not support Server or Data Center
3. You have access to the **Atlassian Marketplace** from your Jira instance

## Installation Steps

1. Log in to your Jira Cloud site as an administrator
2. Click the **gear icon** (Settings) in the top-right corner → select **Apps**
3. Click **Find new apps** in the left sidebar
4. Search for **"Dashboard Templates Charts Graphs Reports Clovity"**
5. Click the app in the search results
6. Click **Try it free** (30-day trial) or **Buy now**
7. Review and accept the requested permissions
8. Click **Accept** - the app installs immediately, no restart required

## Verify Installation

After installation:

1. Open any Jira **Dashboard** (or create a new one)
2. Click **Add gadget** (pencil/edit mode)
3. Search for **"Custom Charts"** or **"Issue List"** or **"Dynamic Filter Controller"**
4. The gadgets should appear in the search results

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| Step | Where | What to Do |
|---|---|---|
| 1. Open Admin Settings | Apps → Custom Charts → Admin | Review global defaults for export, number format, date format |
| 2. Configure export access | Admin → Customization Options | Enable or disable PNG/PDF/CSV export for all users |
| 3. Set data source rules | Admin → Data Sources | Control whether users can use Projects, Saved Filters, JQL, or Controller |
| 4. Enable/disable features | Admin → Features | Toggle Issue List, Custom Chart, Dynamic Filter Controller, and Templates on or off |
| 5. Create a test dashboard | Jira → Dashboards → Create | Add one of each gadget to verify everything works |

## Jira Permissions Required for Installation

The app requests the following permissions during Marketplace install:

| Permission | Why It's Needed |
|---|---|
| read:jira-work | Read issues, projects, and filters for charts and tables |
| write:jira-work | Save gadget configurations |
| read:jira-user | Display user information (assignees, reporters) in Issue List |
| read:dashboard:jira | Access dashboard gadgets |
| write:dashboard:jira | Save and update gadget configurations |
| storage:app | Store gadget configurations in Forge KVS |

## Uninstalling

To uninstall: Jira Settings → Apps → Manage apps → find the app → click **Uninstall**. All app-stored configurations (gadget setups, saved templates) will be permanently deleted. Jira issues and projects are unaffected.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `# Quick Start Guide

Get up and running with your first Jira dashboard chart in under 5 minutes.

![Quick Start Guide](/images/global/dashboard-charts/quick-start-guide.png)

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
          slug: "system-requirements",
          title: "System Requirements",
          content: `# System Requirements

## Platform Requirements

| Requirement | Details |
|---|---|
| **Jira Edition** | Jira Cloud only |
| **Jira Server** | Not supported |
| **Jira Data Center** | Not supported |
| **Atlassian Platform** | Atlassian Forge |

## Browser Requirements

All modern browsers are supported:

| Browser | Minimum Version |
|---|---|
| Google Chrome | Latest 2 versions |
| Mozilla Firefox | Latest 2 versions |
| Microsoft Edge | Latest 2 versions |
| Apple Safari | Latest 2 versions |

Internet Explorer is not supported.

## Jira Permissions Required

The app requests the following permissions during Marketplace install:

| Permission | Why It's Needed |
|---|---|
| read:jira-work | Read issues, projects, filters for charts and tables |
| write:jira-work | Save gadget configurations |
| read:jira-user | Display user information in Issue List columns |
| read:dashboard:jira | Access dashboard gadgets |
| write:dashboard:jira | Save and update gadget configurations on dashboards |
| storage:app | Store gadget configurations in Forge KVS |

## Data Limits & Performance

| Constraint | Impact |
|---|---|
| Large issue queries | Queries returning 50,000+ issues may be slow to render |
| Real-time updates | Data refreshes on page load or manual refresh - not streaming |
| Segment count | 10–20 segments render faster than 100+; keep queries focused |
| Forge KVS storage | Gadget configurations stored in Forge KVS - very large configurations may approach limits |

## Known Limitations

- **No Jira Server / Data Center support** - Atlassian Forge is Cloud-only
- **No real-time push updates** - dashboard data reflects the state at last page load; manual refresh required
- **No historical snapshots** - charts show current Jira state; point-in-time snapshots are not built in
- **No external integrations** - the app does not natively connect to Slack, Teams, or external BI tools

## Network Requirements

No special network configuration is required beyond standard access to \`*.atlassian.net\` and \`*.atlassian.com\`.`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `# Permissions & Access

## How Access Works

Custom Charts & Dashboards does not have its own user role system. Access is governed entirely by **Jira's existing permissions**:

| Access Level | How It's Determined | What Users Can Do |
|---|---|---|
| **Dashboard Owner / Editor** | Jira dashboard share permissions | Add, edit, and remove gadgets; save configurations |
| **Dashboard Viewer** | Jira dashboard share permissions | View gadget data; use Dynamic Filter Controller filters |
| **Jira Admin** | Jira site admin or project admin role | Access Admin Settings; enable/disable features and data sources |

## Jira Dashboard Permissions

Gadget access is tied to Jira dashboard permissions:

| Permission | Who Sets It | Effect |
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
| Pie | Pie Chart |
| Bar | Bar, Grouped Bar, Stacked Bar |
| Line | Line, 2D Line |
| Table | Table, 2D Table |
| Other | Funnel, Tile |

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
| Chart Type | Visual format (pie, bar, line, etc.) |
| Chart By | Main grouping field/segments |
| Group By | Second dimension (for 2D charts) |
| Calculations | Reference lines (goal, trend, average) |
| Display Settings | Visual options and formatting |
| Description | Explanatory text |
| Import/Export | Configuration sharing |

## Quick Reference: Chart Type Selection

| **If You Want To...** | **Use This Chart** |
| --- | --- |
| Show percentages/proportions | Pie |
| Compare values across categories | Bar |
| Compare with sub-categories | Grouped Bar |
| Show composition within categories | Stacked Bar |
| Show trends over time | Line |
| Compare multiple trends | 2D Line |
| Show exact numbers | Table |
| Show a data matrix | 2D Table |
| Show stage progression | Funnel |
| Show single KPIs | Tile |

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

### When to Use

* Comparing values across categories
* Showing rankings or distributions

### Best For

* Issues per team member
* Bugs per component
* Story points by sprint

## Grouped Bar Chart (2D)

### When to Use

* Comparing multiple series side-by-side
* Showing breakdown within each category

Example: Chart By: Status | Group By: Issue Type

Result: For each status, see separate bars for Stories, Bugs, Tasks side by side.

## Stacked Bar Chart (2D)

### When to Use

* Showing composition within categories
* Comparing totals AND breakdowns

Example: Chart By: Sprint | Group By: Priority

Result: Each sprint shows a single bar with priority levels stacked.

## Line Chart (1D)

### When to Use

* Showing trends over time
* Displaying progression or change

### Best For

* Issues created per week
* Velocity trend across sprints
* Bug count over time

## 2D Line Chart

### When to Use

* Comparing multiple trends simultaneously
* Showing related metrics over time

Example: Chart By: Week | Group By: Issue Type

Result: Separate lines for Stories, Bugs, and Tasks on the same time axis.

## Table Chart (1D)

### When to Use

* Displaying exact numbers
* When precision matters more than visualization

## 2D Table Chart

### When to Use

* Showing data matrix with two dimensions
* Cross-tabulating two fields

Example: Chart By: Assignee | Group By: Status

Result: A table where rows are team members, columns are statuses, and cells show the count.

## Funnel Chart

### When to Use

* Showing stage-based progression
* Visualizing conversion or workflow

### Best For

* Support ticket funnel (New → Triaged → Working → Resolved)
* Sales pipeline stages

## Tile Chart

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

## What is "Field"?

"Field" defines how your issues are categorized into segments (slices, bars, lines, or rows depending on chart type).

| **Chart Type** | **Field Creates** |
| --- | --- |
| Pie | Slices |
| Bar | Bars |
| Line | Points on the line |
| Table | Rows |
| Funnel | Funnel stages |
| Tile | Single value |

## Chart By Options

You have three ways to define segments:

| **Option** | **Description** | **Best For** |
| --- | --- | --- |
| Jira Fields | Group by any Jira field | Simple field-based grouping |
| Custom JQL | Define segments with JQL queries | Complex, custom groupings |
| Saved Filters | Use existing filters as segments | Reusing filter definitions |

## Option 1: Grouping by Jira Fields

Select any Jira field to group your data. Segments are automatically created for each unique value.

### Common Fields

| **Field** | **Creates Segments For** |
| --- | --- |
| Status | Each workflow status |
| Assignee | Each team member + Unassigned |
| Priority | Highest, High, Medium, Low, Lowest |
| Issue Type | Story, Bug, Task, Epic, etc. |
| Component | Each component in the project |
| Labels | Each label applied to issues |
| Sprint | Each sprint (active, future, closed) |

## Option 2: Grouping by Custom JQL

Define your own segments using JQL queries. This gives you complete control over how data is grouped.

### Example: Bug Age Groupings

| **Segment Name** | **JQL Condition** |
| --- | --- |
| New (< 7 days) | issuetype = Bug AND created >= -7d |
| Aging (7-30 days) | issuetype = Bug AND created >= -30d AND created < -7d |
| Old (> 30 days) | issuetype = Bug AND created < -30d |

> **Tip:** Each issue appears only in the FIRST matching segment. Order your segments carefully if conditions might overlap.

## Working with Segments

### Renaming Segments

Click on the segment name to edit it. This changes the label shown in the chart without affecting the data.

### Reordering Segments

Drag and drop segments to change their order in the chart.

### Showing/Hiding Segments

Toggle the visibility icon to show or hide segments. Hidden segments are not included in calculations.

### Changing Segment Colors

Click the color swatch to open the color picker.

## Ordering Options

| **Option** | **Sorts By** |
| --- | --- |
| Count (High to Low) | Largest segments first |
| Count (Low to High) | Smallest segments first |
| A to Z | Alphabetical ascending |
| Z to A | Alphabetical descending |
| Custom | Your manual drag order |
`,
        },
        {
          slug: "group-by-segments-2d",
          title: "Group By Segments 2D",
          content: `# Group By (2D Charts)

Add a second dimension to your charts with the "Group By" feature, available for Grouped Bar, Stacked Bar, 2D Line, and 2D Table charts.

## What is "Group By"?

"Group By" adds a second grouping dimension to your chart, creating a two-dimensional visualization.

| **Without Group By** | **With Group By** |
| --- | --- |
| Status (3 bars) | Status x Issue Type (3 groups of 3 bars) |
| One data series | Multiple data series |
| Simple comparison | Cross-dimensional analysis |

## Which Charts Support Group By?

| **Chart Type** | **Group By Support** |
| --- | --- |
| Pie | No |
| Bar (1D) | No |
| Grouped Bar | Yes |
| Stacked Bar | Yes |
| Line (1D) | No |
| 2D Line | Yes |
| Table (1D) | No |
| 2D Table | Yes |
| Funnel | No |
| Tile | No |

## How Field By and Group By Work Together

Field By = Rows/Categories (X-axis)

Group By = Columns/Series (multiple bars/lines)

### Grouped Bar Example

| **Setting** | **Value** |
| --- | --- |
| Field By | Status |
| Group By | Issue Type |
| Result | For each status, see separate bars for Stories, Bugs, Tasks side by side |

### Stacked Bar Example

| **Setting** | **Value** |
| --- | --- |
| Field By | Status |
| Group By | Priority |
| Result | Each Status shows priorities stacked in a single bar |

### 2D Table Example

| **Setting** | **Value** |
| --- | --- |
| Field By | Priority |
| Group By | Status |
| Result | Matrix with Priority as rows, statuses as columns |

## Common Group By Combinations

| **Purpose** | **Field By** | **Group By** |
| --- | --- | --- |
| Bug vs Story by status | Status | Issue Type |
| Priority mix per sprint | Sprint | Priority |
| Team trends over time | Week | Team |
| Completion by component | Component | Status |
| Work type by person | Assignee | Issue Type |

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
          content: `# Calculations & Reference Lines

Configure what values your chart displays and add goal, trend, and average lines for context.

## Calculation Types

By default, charts show the Count of issues. You can change this:

| **Calculation** | **What It Shows** | **Example** |
| --- | --- | --- |
| Count | Number of issues | 25 issues in "To Do" |
| Sum | Total of a numeric field | 150 total Story Points |
| Average | Mean of a numeric field | 6 SP average per issue |

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
| Goal | Fixed target value you set | We want to complete 50 SP per sprint |
| Trend | Calculated trend direction | Are bugs increasing or decreasing? |
| Average | Mean across all segments | Who's above/below average? |

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
| Week 1 | 10 - 10 |
| Week 2 | 15 - 25 |
| Week 3 | 12 - 37 |
| Week 4 | 8 - 45 |

## Which Charts Support Reference Lines?

| **Chart Type** | **Reference Lines** |
| --- | --- |
| Bar | Goal, Trend, Average |
| Grouped Bar | Goal, Trend, Average |
| Stacked Bar | Goal, Trend, Average |
| Line | Goal, Trend, Average |
| 2D Line | Goal, Trend, Average |
| Pie | Not applicable |
| Table | Not applicable |
| Funnel | Not applicable |
| Tile | Not applicable |
`,
        },
        {
          slug: "display-options",
          title: "Display Options",
          content: `# Display Options for Custom Charts

Control how your Custom Chart looks: formatting, tooltips, labels, layout, and export behavior.

## Where to find it

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

| Setting | What it does | Default |
| --- | --- | --- |
| Date format | Controls how dates appear in charts/tooltips where dates are shown. | 20 Jan 2021 (DD Mon YYYY) |
| % Places Control | Sets decimal places for percentage values shown in labels/tooltips. | 1 |
| Auto refresh every 10 minute | Refreshes the gadget automatically (primarily useful in View mode). | Off |
| Show options menu button | Shows the chart's options/menu button (for quick actions). | On |
| Export to Png, Pdf & Csv | Enables direct export from the gadget. | On (may be disabled by admin) |

If export is disabled by admin, the toggle will show **"Disabled by admin"** and exports won't be available.

## Pie / Funnel charts (Display Options)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on Legends name hover | Hover over legend items to see tooltip details. | On |
| Display on hover | What appears on hover: Count, Count / %, %, % / Count. | Count |
| Maximum pie chart diameter | Controls pie size (range: 300-400px). (Pie only) | 300px |
| Y-axis height | Vertical size control (Funnel only) (range: 320-800px). | 350px |

### Labels

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Heading label shown with the chart/legend area. | Blank |
| Count label | Label for count values (ex: "Issues", "Tickets"). | Issues |

### Legend display

| Setting | What it does | Default |
| --- | --- | --- |
| Show chart legend | Shows/hides the legend list. | On |
| Show total row | Shows a total row in the legend/table area (where applicable). | On |
| Show number column | Shows the serial/number column in the legend/table area. | On |

**Example (Pie):** If you want quick context without clicking, set **Display on hover = Count / %** and **% Places Control = 1**.

## Bar charts (Bar / Grouped Bar / Stacked Bar)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on bar hover | Shows tooltip when hovering a bar. | On |
| Tooltip display | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| Show Count labels above bars | Prints count values above each bar. | On |
| Show zero Count labels above bars | Also shows labels for bars with 0 count. | Off |
| Show % labels above bars | Prints % labels above bars. | Off |
| Show horizontal gridlines | Adds horizontal gridlines for readability. | Off |
| Show Count total under chart | Displays total count below the chart. | On |

### Axis & label

| Setting | What it does | Default |
| --- | --- | --- |
| Show y-axis label | Toggles Y-axis label. | On |
| Y-axis label | Custom Y-axis title text. | Issues |
| Show x-axis label | Toggles X-axis label. | On |
| X-axis label | Custom X-axis title text. | Date |
| Y-axis height | Chart height control (range: 320-800px). | 350px |
| Y-axis unit | Shows axis values as Count or %. | Count |

**Example (Bar):** To display distribution instead of raw totals: set **Y-axis unit = %**, enable **Show % labels above bars**, and keep **% Places Control = 1**.

## Line charts (Line / Line 2D)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on point hover | Shows tooltip when hovering a point. | On |
| Tooltip display | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| Show Count labels above points | Prints count values above points. | On |
| Show zero Count labels above points | Shows labels for 0 values. | Off |
| Show % labels above points | Prints % labels above points. | Off |
| Show horizontal gridlines | Adds horizontal gridlines. | Off |
| Show vertical gridlines | Adds vertical gridlines. | Off |
| Show vertical hover line | Shows a vertical guide line on hover. | On |
| Show Count total under chart | Displays total count below the chart. | On |

### Axis & label

| Setting | What it does | Default |
| --- | --- | --- |
| Show y-axis label / Y-axis label | Toggle + text for Y-axis title. | On / Issues |
| Show x-axis label / X-axis label | Toggle + text for X-axis title. | On / Date |
| Y-axis height | Chart height control (range: 320-800px). | 350px |
| Y-axis unit | Axis unit: Count or %. | Count |

## Table charts (Table / Table 2D)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on hover | Shows tooltip when hovering over values/names. | On |
| Show number column | Adds a serial/number column. | On |
| Show total rows | Adds total row(s) at bottom. | On |
| Limit rows | Limits table rows shown (range: 1-200). | 5 |

### Table 2D only

| Setting | What it does | Default |
| --- | --- | --- |
| Show total column | Adds a total column to the right. | On |
| Display | Chooses how values display: Count, Count / %, %, % / Count. | Count |
| Group By Label | Custom label for the group-by dimension. | Blank |
| Show group by heading label | Shows/hides the group-by heading label. | On |

### Labels

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Table heading label. | Blank |
| Count label | Column label for count values. | Issues |

**Example (Table):** For clean dashboards, set **Limit rows = 10-20**, enable **Show total rows**, and keep **Display = Count / %** for executive summaries (Table 2D).

## Tile chart

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Max tiles per row | Controls how many tiles appear in one row (range: 1-8). | 5 |
| Limit rows | Controls how many tile rows appear (range: 1-50). | 2 |
| Display | Tile content format: Count, Count / %, %, % / Count, Name only. | Count |
| Show count total | Shows the total count summary (where applicable). | On |
| Show tooltip on name hover | Shows tooltip when hovering tile name. | On |

### Labels

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Tile section heading label. | Blank |
| Count label | Label for count values. | Issues |
| Show chart by and count labels | Shows/hides footer labels for chart-by + count label. | On |

**Example (Tiles):** For compact widgets, use **Max tiles per row = 4**, **Limit rows = 2**, and **Display = Count / %**.

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
          content: `# Templates for Custom Charts

Use Templates to start a Custom Chart faster with a ready-made chart setup. Templates are useful for common reporting views such as Issues by Status, Priority, Issue Type, Assignee, Project, and comparison-style charts.

## Where to find it

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

| **Area** | **What the template applies** | **Why it matters** |
| --- | --- | --- |
| Chart setup | Chart title, chart type, main field, and group by field when defined in the template. | The basic report layout is created for you. |
| Advanced logic | JQL segments and group-by JQL segments for templates that use comparison or segment-based logic. | Templates can represent more than a simple field chart. |
| Starter labels | Starter labels used by the template where needed. | Users get a readable chart immediately and can refine it later. |

## Template catalog for Custom Charts

| **Template** | **Chart type** | **Main field** | **Group By** | **What it creates** | **Best use** |
| --- | --- | --- | --- | --- | --- |
| Issues by Status | Pie Chart | status | - | Shows how issues are distributed by status. | Good for a fast status breakdown and a simple shareable chart. |
| Issues by Priority | Funnel Chart | priority | - | Shows issue volume by priority in a funnel-style view. | Useful when you want to compare how work is distributed across priority levels. |
| Issues by Issue Type | Line Chart | issuetype | - | Plots issues by issue type in a line-style view. | Useful when you want a lightweight category comparison in a line chart presentation. |
| Issues by Assignee | Bar Chart | assignee | - | Shows how work is distributed across assignees. | Useful for workload distribution or ownership checks. |
| Unresolved Issues | Bar Chart | Custom JQL | - | Creates a JQL-segment chart using the segment "Unresolved" with JQL \`status != Done\`. | Useful when you want a quick unresolved-only starter chart without building a segment manually. |
| Issues by Component | Table Chart | components | - | Builds a table-based summary by component. | Useful when users prefer a tabular view instead of a visual chart. |
| Issues by Labels | Bar Chart | labels | - | Builds a bar chart grouped by issue labels. | Useful for tag-based reporting and theme analysis. |
| Issues by Fix Version | Line Chart | fixVersions | - | Builds a line-style chart by fix version. | Useful for release-oriented reporting. |
| Bug Rate by Sprint | Grouped Bar Chart | sprint | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "Bugs" segment using \`issuetype = Bug\`. | Useful when you want sprint-level comparison with a bug-only grouped slice. |
| Issues by Status per Project | Stacked Bar Chart | status | project | Compares statuses within each project using a stacked bar layout. | Useful for cross-project status comparison in one chart. |
| Issues by Priority per Project | Grouped Bar Chart | priority | project | Compares project-level priority distribution side by side. | Useful for seeing whether one project carries more high-priority work than another. |
| Issues by Type per Assignee | Stacked Bar Chart | issuetype | assignee | Compares issue types within each assignee. | Useful for role mix, work allocation, and team ownership analysis. |
| To Do by Priority | Stacked Bar Chart | priority | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "TO DO" segment using \`status = 'To Do'\`. | Useful when you want to compare only To Do issues by priority. |
| Epic Progress | Grouped Bar Chart | status | Epic link | Builds a grouped comparison using status within each Epic link. | Useful for epic-level progress review and delivery tracking. |

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
          content: `# Date Range for Custom Charts

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
| Date grouping | Controls how dates are bucketed for reporting. | Days, Weeks, Months, Years |
| Date range | Limits which period is included in the chart. | All, Past 7 Days, Past 30 Days, Past 90 Days, This Week, Last Week, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year, Between dates |
| Custom from / to dates | Appears when Between dates is selected so the user can define an exact window. | Manual date entry |
| Date format | Controls how the final date labels appear to users. | Examples include DD Mon YYYY, Mon DD, YYYY, or YYYY-M-DD |
| Ordering | Keeps date charts in time order instead of alphabetical order. | Chronological by default for date fields |

> **Note:** When a date field is selected, the gadget automatically prefers chronological ordering. This makes trend charts easier to read.

## Date grouping options

| **Grouping option** | **Best use** |
| --- | --- |
| Days | Shows each day as its own point or segment. Best for short time windows and detailed monitoring. |
| Weeks | Groups issues into weekly buckets. Useful for sprint-level and weekly trend reporting. |
| Months | Groups issues by calendar month. Good for management reporting and longer trend views. |
| Years | Groups issues by year. Best for long-term summaries with a broad time span. |

## Date range options

| **Range option** | **When to use it** |
| --- | --- |
| All | Shows all available dates in the result set. |
| Past 24 Hours | Rolling window ending now. Useful for near-real-time activity. |
| Past 3 / 7 / 30 / 90 Days | Rolling time windows for short- or medium-term trend analysis. |
| This Week / Last Week | Calendar-based weekly windows. |
| This Month / Last Month | Calendar-based monthly windows. |
| This Quarter / Last Quarter | Quarter-based reporting windows. |
| This Year / Last Year | Year-based reporting windows. |
| Between dates | Lets the user choose an exact from-date and to-date for a custom report window. |

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
| **Issue List Guide** | *A quick start guide to building your first Table, understanding the configuration tabs, and best practices for visualization.* |
| **Templates For Issue List** | *Ready-made table layouts for common reporting use cases.* |
`,
        },
        {
          slug: "issue-list-guide",
          title: "Issue List Guide",
          content: `The Issue List gadget displays Jira issues in a configurable table format, perfect for status reports, work tracking, and providing quick access to issue details.

## Overview

| **Feature** | **Description** |
| --- | --- |
| Custom Columns | Add any Jira field as a column |
| Smart Labels | Add indicator badges based on conditions |
| Quick Filters | One-click filter buttons |
| Sorting | Click headers to sort |
| Pagination | Control results per page |
| Export | CSV, PNG, and PDF |

## Columns

### Adding Columns

1. Click "+ Add another field"
2. Search for the field you want
3. Select the field to add it
4. Repeat for additional columns

### Recommended Column Sets

**Sprint Report:** Key, Summary, Status, Assignee, Story Points, Priority

**Bug List:** Key, Summary, Priority, Status, Assignee, Created, Component

### Reordering Columns

Drag columns up or down in the list. The first column appears on the left.

### Renaming Columns

Click the edit (pencil) icon next to a column. Enter the new name.

## Smart Labels

Smart Labels add special indicator columns that show badges when issues match certain conditions.

### Types of Smart Labels

| **Type** | **How It Works** |
| --- | --- |
| Filter-Based | Shows badge if issue matches a saved filter |
| JQL-Based | Shows badge if issue matches a JQL condition |

### Smart Label Examples

| **Label Name** | **JQL Condition** |
| --- | --- |
| Critical | priority = Highest |
| Overdue | duedate < now() AND resolution is EMPTY |
| Blocked | labels = blocked |
| Unassigned | assignee is EMPTY |
| Due Soon | duedate >= now() AND duedate <= 7d |

## Quick Filters

Quick Filters add clickable buttons above the table for instant filtering.

### Quick Filter Ideas

| **Filter Name** | **JQL** |
| --- | --- |
| My Issues | assignee = currentUser() |
| Bugs Only | issuetype = Bug |
| High Priority | priority in (High, Highest) |
| Due This Week | duedate >= startOfWeek() AND duedate <= endOfWeek() |
| Unassigned | assignee is EMPTY |

### AND vs OR Logic

| **Mode** | **Behavior** |
| --- | --- |
| AND | Issues must match ALL active filters |
| OR | Issues must match ANY active filter |

## Display Options

| **Option** | **Description** |
| --- | --- |
| Results per page | Show 5, 10, 20, or 50 issues per page |
| Alternating row colors | Striped rows for easier reading |
| Show number column | Row numbers |
| Show timestamps | Time on date fields |
| Show user icons | Avatar images |
| Disable hyperlinks | Turn off clickable links |

## Exporting

### Export Formats

| **Format** | **Use Case** |
| --- | --- |
| Import Export Configuration | Copy and reuse chart configuration easily |
| CSV | Open in Excel, Google Sheets |
| PNG | Image for presentations |
| PDF | Printable document |

> **Tip:** The export includes only currently filtered data. Apply filters first to export exactly what you need.
`,
        },
        {
          slug: "templates-issue-list",
          title: "Templates For Issue List",
          content: `# Issue List Templates for the Issue List gadget

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
| Title update | The Issue List title is updated to the template name so the table is easy to recognize. |
| Column setup | The template chooses the main columns for that use case, such as Key, Summary, Status, Priority, Assignee, Created, Updated, or Resolved. |
| Sorting | The template applies default sorting so the most important issues appear first. |
| Quick filters | Templates can include one or more quick filters. Some templates include active quick filters by default, while others include optional filters that start inactive. |
| Filter operator | Templates use a filter operator to combine quick filters. In the current built-in catalog, the operator is AND. |
| Issue Type safeguard | If a template does not include Issue Type in its column list, the gadget automatically adds Issue Type so the table keeps a clear type indicator. |

## Built-in Issue List templates

| **Template** | **Best used for** | **Main columns** | **Default sort** |
| --- | --- | --- | --- |
| My Open Issues | Personal work queue | Key, Summary, Status, Priority, Updated, Assignee | Updated newest first |
| Recently Updated Issues | Latest activity tracking | Key, Summary, Status, Assignee, Updated, Project | Updated newest first |
| Unresolved by Priority | Outstanding work by urgency | Priority, Key, Summary, Status, Assignee, Created | Priority high to low, then newest created |
| Team Workload | Work split by assignee | Assignee, Key, Summary, Status, Priority, Due Date | Assignee A-Z, then Priority high to low |
| Reopened Issues | Reopened or bounced-back work | Key, Summary, Status, Priority, Assignee, Updated, Resolved | Updated newest first |
| Blockers List (Release / Sprint) | Release or sprint blockers | Key, Summary, Priority, Status, Assignee, Fix Versions, Updated | Priority high to low, then Updated newest first |
| Recently Resolved (Last 7 days) | Freshly completed work | Key, Summary, Priority, Assignee, Resolved, Created | Resolved newest first |
| High Priority Unassigned (Triage) | Unassigned urgent work needing ownership | Priority, Key, Summary, Status, Project, Created, Updated | Priority high to low, then oldest created first |
| Open Issues (No update in 14 days) | Aging open work | Key, Summary, Status, Assignee, Priority, Updated, Created | Oldest updated first |
| Critical Bugs Open (P1 Bugs) | Highest-risk bug list | Key, Summary, Priority, Status, Assignee, Updated, Created | Updated newest first |
| Delivery Outliers (Recently Resolved, Created Long Ago) | Items resolved recently but created long ago | Key, Summary, Priority, Created, Resolved, Assignee | Resolved newest first, then oldest created first |

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
| **Dynamic Filter Controller Guide** | *A high-level look at shared filtering, real-time updates, Reference IDs, and the core mechanics of the controller.* |
| **Templates For Dynamic Filter Controller** | *Ready-made filter field sets and quick filters for common use cases.* |
`,
        },
        {
          slug: "dynamic-filter-controller-guide",
          title: "Dynamic Filter Controller Guide",
          content: `The Dynamic Filter Controller creates an interactive filter bar that controls multiple charts and lists simultaneously, enabling powerful interactive dashboards.

## Overview

| **Feature** | **Description** |
| --- | --- |
| Shared Filtering | One filter bar controls all connected gadgets |
| Multiple Filter Types | Jira fields, text search, JQL, saved filters |
| Tabs | Preset filter combinations for one-click switching |
| Real-time Updates | Connected gadgets update instantly |
| Reference ID | Unique identifier for connecting gadgets |

## How It Works

1. You set up the filter controller with a base data source and filter fields
2. You connect your charts and lists to this controller
3. Users interact with the filter bar to change what they see
4. All connected gadgets update instantly based on the selected filters

## Setting Up the Controller

### Step 1: Base Data Source

The base data source defines the universe of issues that can be filtered.

**Example JQL:** \`project = TEAM AND issuetype in (Story, Bug, Task)\`

### Step 2: Adding Filter Fields

Add the fields users can filter by:

1. Go to the Fields tab
2. Click "+ Add Field"
3. Select field type
4. Configure the field
5. Repeat for additional fields

### Filter Field Types

| **Type** | **Description** |
| --- | --- |
| Jira Field | Dropdown for a Jira field (Status, Sprint, etc.) |
| Contains Text | Free-text search box |
| Custom JQL | Advanced JQL input |
| Saved Filter | Toggle a saved filter |

## Configuring Tabs

Tabs are preset filter combinations users can switch between with one click.

### Creating Tabs

1. Go to the Live Preview area
2. Click "+" next to existing tabs
3. A new tab is created
4. Set filter values for this tab
5. Rename the tab by clicking its name

### Tab Examples

| **Tab Name** | **Default Filters** |
| --- | --- |
| All Work | (no filters) |
| My Issues | Assignee = currentUser() |
| Bugs Only | Issue Type = Bug |
| High Priority | Priority = High, Highest |
| This Sprint | This Sprint |

## Connecting Gadgets

### How to Connect

1. Edit the Custom Chart or Issue List gadget
2. In Data Source, select "Dynamic Filter Controller"
3. A dropdown appears with available controllers
4. Select your controller (identified by Reference ID)
5. Save the gadget

### Verifying Connections

Click "Show Connected Charts" in the controller to highlight all connected gadgets on the dashboard.

## Display Options

| **Option** | **Description** |
| --- | --- |
| Show Sorting Options | Let users sort connected Issue Lists |
| Allow Add Fields | Users can temporarily add filter fields |
| Show AND/OR Selector | Toggle filter logic |
| Show Options Menu | Menu button visibility |

## User Experience

When viewing the dashboard, users can:

* Select values from filter dropdowns
* Type in text search boxes
* Click tabs to switch between preset views
* Click "Search" to apply their filter selections
* Click "Reset" to clear all filters
`,
        },
        {
          slug: "templates-dynamic-filter-controller",
          title: "Templates For Dynamic Filter Controller",
          content: `# Templates for Dynamic Filter Controller

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
| Active tab fields | The current field list on the active tab is replaced by the template field set. |
| Quick filters | Template quick filters are added as Custom JQL toggle chips. Filters marked active in the template start enabled. |
| Selected projects | The current project selection is reused as a default selection on the active tab. |
| Other tabs | No changes are made to other tabs. |
| Data source | No change. The existing source type and source values remain in place. |
| Gadget layout and display options | No chart-style or admin-setting change is made by templates. |

> **Note:** Some templates use fields such as Sprint, Epic, or Story Points. If those fields are not available in your Jira site or are configured differently, you may need to edit the tab after applying the template.

## Built-in template catalog

| **Template** | **Best for** | **Main filters** | **Default active filter** |
| --- | --- | --- | --- |
| My Work (Daily Driver) | Everyday personal work view | Project, Issue Type, Status, Assignee, Priority, Text | Assignee to me |
| Sprint Control (Scrum) | Sprint planning and sprint tracking | Project, Sprint, Status, Assignee, Issue Type, Text | Current sprint |
| Backlog Grooming | Backlog clean-up and triage | Project, Issue Type, Priority, Assignee, Labels, Components, Text | Backlog only |
| Team Workload (People View) | Balancing work across people | Project, Assignee, Status Category, Priority, Due Date, Text | Assigned only |
| Triage Inbox (New + Unowned) | New work that needs assignment | Project, Issue Type, Priority, Assignee, Created, Components, Text | Unassigned only + Created last 48h |
| Critical Incidents (P1/P2) | Serious incident response | Project, Issue Type, Priority, Status, Assignee, Updated, Text | P1 only |
| Aging Open Issues (Stale Work) | Work that has gone quiet | Project, Status Category, Priority, Assignee, Updated, Text | Open only + No update 14d+ |
| Roadmap Scope (Epic + Work) | Roadmap and epic-level visibility | Project, Epic, Issue Type, Status Category, Assignee, Priority, Text | Not done |
| Dependency & Blockers (Delivery Risk) | Blocked work and linked issue risk | Project, Status, Priority, Assignee, Text | Is blocked |
| QA / Testing Pipeline | Testing handoff and QA tracking | Project, Status, Issue Type, Priority, Assignee, Fix Versions, Text | Bugs only |
| Due Dates & Commitments | Deadline and commitment tracking | Project, Due Date, Status Category, Assignee, Priority, Text | Due this week |
| Customer Escalations / VIP | Escalated or VIP work | Project, Priority, Status, Assignee, Labels, Updated, Text | Escalation |

> **Note:** Dynamic Filter Controller template is a starter pack for one tab. It gives that tab a useful set of fields and quick filters, but it does not rebuild the whole gadget.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. ADMIN SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "admin-settings",
      title: "Admin Settings",
      articles: [
        {
          slug: "admin-settings",
          title: "Admin Settings",
          content: `# Admin Settings for Custom Charts & Dashboards

Control global app behavior for Custom Charts, Issue List, and Dynamic Filter Controller. Use Admin Settings to manage defaults, feature availability, allowed data sources, and support links for all users in your Jira site.

## Where to find it

* Open Jira and go to Apps.
* Open the Custom Charts & Dashboards app.
* Open the Admin page.
* Use the tabs at the top to manage Customization Options, Features, Data Sources, and Support.

## What Admin Settings control

* Global export access for PNG, PDF, and CSV.
* Default display values such as number format, decimal places, date format, and time unit.
* Feature availability for Issue List, Custom Chart, Dynamic Filter Controller, and Templates.
* Allowed data source types such as Projects, Saved Filters, Custom JQL, and Filter Controller.
* Support and documentation links for end users.

## Admin Settings tabs

| Tab | What it does | Applies to |
| --- | --- | --- |
| Customization Options | Sets global defaults for export and display formatting. | Custom Chart, Issue List |
| Features | Turns major app features on or off for the whole site. | All gadgets |
| Data Sources | Controls which source types users can select when building gadgets. | Custom Chart, Issue List, Filter Controller links |
| Support | Provides help, training, and documentation links. | All users |

## Customization Options

**This tab controls global defaults.** These values help keep gadget behavior consistent across the site, especially when users create new reports.

### Available settings

| Setting | What it does | Default | Notes |
| --- | --- | --- | --- |
| Allow direct export | Lets users export gadget content directly from the gadget menu. | On | If disabled, export actions should not be available to users. |
| Number format | Controls how large numbers are displayed. | 123,456.78 | Useful for keeping chart and table totals consistent. |
| Decimal places | Sets default decimal precision for percentages and calculated values. | 1 | Applied as the starting value, but users may still change it in gadget settings. |
| Date format | Controls how dates appear in supported gadgets. | 20 Jan 2025 style | Helps standardize date display across reports. |
| Time unit | Controls the default time unit used where supported. | Hours | Relevant for calculations and time-based reporting displays. |

> **Note:** Customization Options are global defaults. They are meant to give users a clean starting point, but they do not replace every gadget-level display setting.

## Features Tab

**This tab controls which major app features are available.** When a feature is disabled, users should see that the feature is unavailable instead of being able to use it normally.

### Feature toggles

| Feature | What happens when enabled | What happens when disabled |
| --- | --- | --- |
| Issue List | Users can create and use Issue List gadgets. | Issue List functionality is blocked for users. |
| Custom Chart | Users can create and use Custom Chart gadgets. | Custom Chart functionality is blocked for users. |
| Dynamic Filter Controller | Users can use the Dynamic Filter Controller gadget. | Controller-based filtering is blocked for users. |
| Templates | Users can open and apply built-in templates in supported gadgets. | Template buttons or template flows should be unavailable. |

## Data Sources

**This tab decides which source types users can choose when configuring gadgets.** It is useful when an admin wants to simplify setup, limit raw JQL usage, or guide users toward approved sources.

### Available source controls

| Source type | What it allows | Used in | If disabled |
| --- | --- | --- | --- |
| Projects | Users can build gadgets from selected Jira projects. | Custom Chart, Issue List | Project source option should not be available. |
| Saved Filters | Users can use saved Jira filters as the source. | Custom Chart, Issue List | Saved filter source option should not be available. |
| Custom JQL | Users can enter their own JQL. | Custom Chart, Issue List, Filter workflows | Raw custom JQL should not be available as a source option. |
| Filter Controller | Users can connect gadgets to a Dynamic Filter Controller. | Custom Chart, Issue List | Controller reference source should not be available. |

## Support Tab

**The Support tab is an information area rather than a control panel.** It provides users with quick access to help resources such as support tickets, training, quick-start material, and documentation links.

* Raise a support ticket.
* Schedule training.
* Open quick-start or documentation resources.
* Direct users to help without leaving the app context.

## How Admin Settings apply in the app

| Area | How settings are used | Important detail |
| --- | --- | --- |
| Custom Chart | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can influence chart setup, but not every chart-specific display option. |
| Issue List | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can control broad behavior, but not every table preference. |
| Dynamic Filter Controller | Uses feature flags and source-related controls. | Formatting defaults are less relevant here than in chart and table gadgets. |
| Templates | Controlled mainly through the global Templates feature toggle. | Admins can enable or disable template access, but cannot manage template content from Admin Settings. |

> **Note:** Admin Settings work best as a global governance layer. They are strong for basic control and consistency, but they are not a full enterprise policy console.

## Recommended admin practice

* Use Customization Options to set clean default formatting before users create new gadgets.
* Disable source types that your team should not use, especially Custom JQL if you want a simpler setup flow.
* Use the Templates toggle if you want to allow or block quick-start preset usage across gadgets.
`,
        },
      ],
    },

    // ═══ USER GUIDE ═══
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "overview-dashboard",
          title: "Overview & Dashboard",
          content: `# Overview & Dashboard

Welcome to the **Dashboard Templates, Charts, Graphs & Reports for Jira** user guide. This page explains the app layout, gadget types, and the core UI patterns you will use every day.

## App Layout at a Glance

The app adds three Jira dashboard gadgets. Each gadget opens a configuration panel split into three main zones:

| Zone | Location | What It Contains |
|---|---|---|
| **Data Source Panel** | Left | Source type selector (Projects, Saved Filter, JQL, Controller), source search, issue count preview |
| **Live Preview** | Center | Real-time chart or table preview - updates instantly as you change settings |
| **Settings Panel** | Right | Tabbed configuration: Chart Type, Chart By, Group By, Calculations, Display Options, Description, Import/Export |

## Three Integrated Gadgets

### Custom Charts
The primary visualization gadget. Supports **10 chart types** across 5 categories:

| Category | Chart Types |
|---|---|
| Pie | Pie Chart |
| Bar | Bar, Grouped Bar, Stacked Bar |
| Line | Line, 2D Line |
| Table | Table, 2D Table |
| Other | Funnel, Tile |

**Best for:** Status breakdowns, trend analysis, workload distribution, KPI scorecards.

### Issue List
A fully configurable issue table - choose columns, add visual label indicators, and set quick-filter buttons for one-click filtering.

**Best for:** Live sprint boards, bug trackers, team work queues, and any report where exact issue details matter.

### Dynamic Filter Controller
A shared interactive filter bar that controls multiple Custom Charts and Issue Lists simultaneously. Set it up once, connect your gadgets, and let users filter the whole dashboard with a single interaction.

**Best for:** Team dashboards where different people need to slice the same data by sprint, assignee, priority, or date.

## Dashboard Edit Mode

To add or configure gadgets you must be in **edit mode**:

1. Open a Jira dashboard
2. Click the **Edit** button (pencil icon, top right)
3. Click **Add gadget** to open the gadget gallery
4. Search for "Custom Charts", "Issue List", or "Dynamic Filter Controller"
5. Click **Add** - the gadget appears in configuration mode immediately

To exit edit mode, click **Done** or **Save layout**.

## Configuration Panel Structure

When you open a gadget in edit mode, the three-panel layout activates:

### Left Panel - Data Source
- **Source Type:** Projects | Saved Filter | Custom JQL | Dynamic Filter Controller
- **Source Search:** Find and select the project or filter you want
- **Issue Count:** Shows how many issues match the current source - updates live

### Center Panel - Live Preview
- Updates in real time as you change any setting
- Reflects the exact chart or table that will display on the dashboard
- For Dynamic Filter Controller: shows the filter bar and connected chart references

### Right Panel - Settings Tabs

| Tab | What It Controls |
|---|---|
| **Chart Type** | Visual format selection |
| **Chart By** | Primary grouping field or segments |
| **Group By** | Second dimension (2D charts only) |
| **Calculations** | Count / Sum / Average + reference lines |
| **Display Options** | Labels, tooltips, axes, layout, export |
| **Description** | Rich text annotation for the gadget |
| **Import / Export** | Copy or paste gadget configuration JSON |

## Common UI Patterns

### Save Gadget
- Located at the bottom of the configuration panel
- Saves all settings and closes the configuration view
- The gadget becomes live on the dashboard immediately

### Export Button
- Available in **view mode** (not edit mode)
- Click the **options menu (…)** on the gadget
- Choose **PNG**, **PDF**, or **CSV**
- If the button is missing, export may be disabled by your Jira admin - contact them to enable it

### Refresh
- Click the options menu (…) → **Refresh** to reload gadget data
- Data is not streamed in real time - use manual refresh or enable auto-refresh in Display Options

### Live Preview
- Every change in the settings panel instantly updates the center preview
- No need to save to see how the chart will look - just configure and check the preview

## Module Navigation: Which Gadget to Use

| Goal | Recommended Gadget |
|---|---|
| Visual chart from Jira data | Custom Charts |
| Table of individual issues | Issue List |
| Interactive filter bar for whole dashboard | Dynamic Filter Controller |
| KPI tile / single number | Custom Charts → Tile type |
| Cross-tab / matrix report | Custom Charts → 2D Table |
| Exportable issue list for stakeholders | Issue List + CSV export |

## Tips for New Users

- **Start with Custom Charts (Pie)** - it is the fastest way to get a meaningful chart in under 2 minutes
- **Use Projects as your first data source** - it is the simplest option; JQL gives more power but requires knowledge of your Jira fields
- **Save often** - configuration is only persisted after clicking "Save gadget"
- **Check the Live Preview** before saving - what you see in the preview is what you get on the dashboard
- **Connect gadgets to a Dynamic Filter Controller** once you have more than two gadgets - it makes dashboards much more useful for teams
- **Export a chart** to PNG or PDF when you need to include Jira data in a presentation or email
- **Use Templates** to skip the setup steps for common chart types - find them in the right panel
`,
        },
        {
          slug: "how-to-guides",
          title: "How-To Guides",
          content: `# How-To Guides

Step-by-step instructions for the most common tasks in **Dashboard Templates, Charts, Graphs & Reports for Jira**.

---

## 1. How to Create Your First Chart

1. In Jira, go to **Dashboards** → open or create a dashboard
2. Click the **Edit** button (pencil icon) to enter edit mode
3. Click **Add gadget** and search for **"Custom Charts"**
4. Click **Add** - the gadget opens in configuration mode
5. In the **left panel**, select **Projects** as the source type
6. Search for and select a Jira project
7. In the **right panel**, click the **Chart Type** tab and select **Pie Chart**
8. Click the **Chart By** tab and select **Status** from the field dropdown
9. Watch the **Live Preview** update instantly in the center
10. Click **Save gadget** - your chart is now live on the dashboard

**Result:** A pie chart showing your project's issue distribution by status.

---

## 2. How to Connect a Dynamic Filter Controller

1. Add a **Dynamic Filter Controller** gadget to your dashboard (Add gadget → search "Dynamic Filter Controller")
2. In the left panel, set the **data source** (same project or JQL as your charts)
3. In the **Fields** tab, click **+ Add Field** and add filters: Status, Assignee, Sprint
4. Click **Save gadget** - note the **Reference ID** displayed on the saved gadget (e.g., "ABC123")
5. Edit an existing **Custom Charts** gadget
6. In the left panel, change **Data Source** to **Dynamic Filter Controller**
7. Select your controller from the dropdown (it shows by Reference ID)
8. Click **Save gadget**
9. Repeat steps 5–8 for any other gadgets you want to connect

**Result:** Selecting a filter in the controller updates all connected charts and lists simultaneously.

---

## 3. How to Add Smart Labels to Issue List

1. Open an **Issue List** gadget in edit mode
2. In the right panel, click the **Smart Labels** tab
3. Click **+ Add Smart Label**
4. Enter a label name (e.g., "Overdue")
5. Select **JQL-Based** as the label type
6. Enter the JQL condition: \`duedate < now() AND resolution is EMPTY\`
7. Choose a badge color (e.g., red for overdue)
8. Click **Save gadget**

**Result:** Issues matching the JQL condition will show a colored "Overdue" badge in the table.

**More smart label examples:**

| Label Name | JQL Condition |
|---|---|
| Critical | \`priority = Highest\` |
| Blocked | \`labels = blocked\` |
| Unassigned | \`assignee is EMPTY\` |
| Due Soon | \`duedate >= now() AND duedate <= 7d\` |

---

## 4. How to Export a Chart as PNG / PDF / CSV

1. Make sure you are in **view mode** (not edit mode) - click **Done** if you are in edit mode
2. On the gadget, click the **options menu (…)** (top-right corner of the gadget)
3. Select your export format:
   - **PNG** - image file, ideal for presentations and emails
   - **PDF** - document format, ideal for printing and sharing
   - **CSV** - spreadsheet format, ideal for further analysis in Excel or Google Sheets
4. The file downloads to your browser's default download folder

> **Note:** If export options are missing, your Jira admin may have disabled exports globally. Contact your admin and ask them to enable it in Admin Settings → Customization Options → Allow direct export.

---

## 5. How to Duplicate a Gadget

Jira does not have a built-in gadget duplicate button, but you can reuse a configuration using **Import/Export**:

1. Open the original gadget in **edit mode**
2. Click the **Import/Export** tab in the right panel
3. Click **Export Configuration** - a JSON string is copied to your clipboard
4. Click **Done** (or Cancel) to close the edit panel
5. Add a **new gadget** of the same type to your dashboard
6. Open the new gadget in edit mode
7. Click the **Import/Export** tab
8. Paste the JSON into the import field and click **Import**
9. The new gadget now has the same configuration as the original
10. Adjust the data source or title as needed, then click **Save gadget**

---

## 6. How to Use JQL as a Data Source

1. Open a gadget in edit mode
2. In the **left panel**, change **Source Type** to **Custom JQL**
3. A JQL text input appears - enter your query, for example:
   \`\`\`
   project = MYPROJECT AND issuetype = Bug AND status != Done
   \`\`\`
4. The **issue count** below the input updates to show how many issues match
5. If the JQL has an error, a red validation message appears - fix the query before saving
6. Complete the rest of the configuration (chart type, chart by, etc.)
7. Click **Save gadget**

**Useful JQL patterns:**

| Use Case | JQL |
|---|---|
| All open bugs in project | \`project = X AND issuetype = Bug AND resolution is EMPTY\` |
| Issues assigned to me | \`assignee = currentUser() AND resolution is EMPTY\` |
| Current sprint issues | \`sprint in openSprints()\` |
| Issues created this month | \`created >= startOfMonth()\` |
| High priority unresolved | \`priority in (High, Highest) AND resolution is EMPTY\` |

---

## 7. How to Add Tabs to the Dynamic Filter Controller

Tabs let users switch between preset filter views with a single click:

1. Open the **Dynamic Filter Controller** gadget in edit mode
2. In the **Live Preview** area, click the **+** button next to the existing tab
3. A new tab is created - click the tab name to rename it (e.g., "My Issues", "Bugs Only")
4. Set the default filter values for this tab (e.g., set Assignee = currentUser())
5. Repeat to add more tabs
6. Click **Save gadget**

---

## 8. How to Add a Goal Line to a Bar Chart

1. Open a **Custom Charts** bar chart gadget in edit mode
2. Click the **Calculations** tab in the right panel
3. Click **+ Add Reference Line**
4. Select **Goal Line**
5. Enter the target value (e.g., 50 for "50 story points per sprint")
6. Enter a label (e.g., "Sprint Target")
7. Choose line style (solid or dashed)
8. Check the **Live Preview** - the goal line appears on the chart
9. Click **Save gadget**

---

## 9. How to Group Issues by Date (Trend Charts)

1. Open a **Custom Charts** gadget in edit mode
2. In the **Chart By** tab, select a **date field** (e.g., Created, Resolved, Updated)
3. The gadget detects this is a date field and shows date controls
4. Set **Date Grouping** to: Days, Weeks, Months, or Years
5. Set **Date Range** to filter the time window (e.g., "Past 90 Days")
6. Change **Chart Type** to **Line Chart** for a trend view
7. Click **Save gadget**

---

## 10. How to Apply a Template

1. Open a gadget in edit mode
2. In the right panel, click the **Templates** option (in the chart header area)
3. Browse the template list or search by name
4. Click **Use Template** on the one you want
5. The chart configuration is applied instantly - check the **Live Preview**
6. Adjust the data source or any settings as needed
7. Click **Save gadget**

---

## 11. How to Set Columns in an Issue List

1. Open an **Issue List** gadget in edit mode
2. In the **Columns** section, click **+ Add another field**
3. Search for the field (e.g., "Story Points", "Due Date", "Component")
4. Click the field to add it as a column
5. **Drag** columns up or down to reorder them
6. Click the **pencil icon** next to a column name to rename it
7. Click the **trash icon** to remove a column
8. Click **Save gadget**
`,
        },
        {
          slug: "demo-dashboard-guide",
          title: "Demo Dashboard Guide: Executive Delivery Command Center",
          content: `# Demo Dashboard Guide: Executive Delivery Command Center

## Overview

The **Executive Delivery Command Center** is a pre-built demo dashboard that showcases how the three gadgets — Custom Charts, Issue List, and Dynamic Filter Controller — work together to create a high-impact, fully interactive executive-level Jira dashboard.

This guide explains how each component is configured so you can replicate or adapt it for your own team.

## Dashboard Layout

The dashboard contains 7 gadgets arranged in a structured two-row layout:

| Gadget | Type | Position |
|---|---|---|
| Global Filter Controller | Dynamic Filter Controller | Full width, top row |
| Total Issues (KPI Tile) | Custom Charts → Tile | Left column, row 2 |
| Issue Distribution | Custom Charts → Pie | Center, row 2 |
| Delivery Funnel | Custom Charts → Funnel | Right column, row 2 |
| Sprint Progress | Custom Charts → Stacked Bar | Left-center, row 3 |
| Trend Over Time | Custom Charts → 2D Line | Right-center, row 3 |
| Active Issues | Issue List | Full width, bottom row |

## 1. Global Filter Controller

The Dynamic Filter Controller drives the entire dashboard. All other gadgets connect to it so that any selection in the filter bar instantly updates every chart and the issue list simultaneously.

### Dropdown Filters (8 configured)

| Filter | Field | What It Controls |
|---|---|---|
| Sprint | Sprint | Active, closed, or all sprints |
| Team / Assignee | Assignee | Filter by individual team member |
| Priority | Priority | Highest, High, Medium, Low, Lowest |
| Issue Type | Issue Type | Story, Bug, Task, Sub-task, Epic |
| Status | Status | To Do, In Progress, Done, Blocked |
| Component | Component | Filter by software component or module |
| Reporter | Reporter | Who created the issue |
| Epic | Epic Link | Group by epic |

### Quick Filter Tabs (6 preset views)

| Tab Label | Pre-configured Filter |
|---|---|
| **All Issues** | No filters — full dataset |
| **My Issues** | Assignee = currentUser() |
| **Bugs Only** | Issue Type = Bug |
| **Blockers** | Priority = Highest OR Status = Blocked |
| **This Sprint** | Sprint = current open sprint |
| **Done This Month** | Status = Done AND resolved >= startOfMonth() |

## 2. KPI Tile — Total Issues

A single-number display showing the count of issues matching the current filter state.

**Configuration:**
- Chart Type: **Tile**
- Data Source: Dynamic Filter Controller reference
- Calculation: Count of issues
- Display: Large-font issue count with color-coded background (green/yellow/red based on configurable thresholds)

**How to configure thresholds:**
1. Open the tile gadget in edit mode
2. Go to the **Calculations** tab
3. Set **Warning threshold** and **Critical threshold** values
4. The tile background color updates automatically when the live count crosses a threshold

## 3. Pie Chart — Issue Distribution

Breaks down the issue mix by type, status, or priority.

**Configuration in this demo:**
- Chart Type: **Pie**
- Chart By: **Issue Type**
- Data Source: Dynamic Filter Controller

**Reading the chart:**
- Each slice represents one value of the Chart By field
- Hover a slice to see the exact count and percentage
- Click a slice to highlight the corresponding rows in connected Issue List gadgets

## 4. Funnel Chart — Delivery Funnel

Shows how issues flow through workflow statuses — from backlog through to Done. Useful for identifying bottleneck stages.

**Configuration:**
- Chart Type: **Funnel**
- Chart By: **Status**
- Status sequence: To Do → In Progress → In Review → Done

**Why this is useful:**
- Visualize where issues pile up
- See overall workflow health at a glance
- Identify stages with disproportionately high issue counts compared to adjacent stages

## 5. Stacked Bar — Sprint Progress

Shows progress by sprint with issues grouped by status (stacked segments), so you can compare sprint completion rates across recent sprints.

**Configuration:**
- Chart Type: **Stacked Bar**
- Chart By: **Sprint** (last 6 sprints)
- Group By (stack): **Status**

**Reading the chart:**
- Each bar = one sprint
- Bar segments = issue counts by status (colored by status)
- Taller "Done" segments = higher sprint completion rate
- Compare bar heights across sprints to check velocity consistency

## 6. 2D Line Chart — Trend Over Time

Tracks issue creation vs. resolution over time to show whether the team is clearing issues faster than they arrive.

**Configuration:**
- Chart Type: **2D Line**
- Chart By: **Created date** (grouped by week)
- Second dimension: **Resolved date** (grouped by week)
- Date range: Last 90 days

**Reading the chart:**
- Line 1 (blue) = issues created per week
- Line 2 (green) = issues resolved per week
- Green line above blue line → team is clearing backlog
- Blue line above green line → backlog is growing — investigate capacity or scope

## 7. Issue List — Active Issues

A tabular view showing individual issue details not visible in charts.

**Columns configured:**

| Column | Field |
|---|---|
| Key | Issue key (linked to Jira) |
| Summary | Issue title |
| Assignee | Assigned user |
| Status | Current status (with color label) |
| Priority | Priority (with icon) |
| Sprint | Current sprint name |
| Updated | Last updated date |

**Quick Filters on this gadget:** My Issues | Unassigned | High Priority

## Replicating This Dashboard

1. Create a new Jira dashboard
2. Add a **Dynamic Filter Controller** gadget first — configure the 8 filters and 6 tabs as documented above
3. Note the **Reference ID** shown on the saved gadget (e.g., "ABC123")
4. Add each **Custom Charts** gadget — set Source Type to "Dynamic Filter Controller" and enter the Reference ID
5. Configure each chart type, Chart By, and Group By as documented in the sections above
6. Add the **Issue List** gadget — connect it to the same Reference ID
7. Arrange gadgets using the layout table as a guide
8. Click **Done** to exit edit mode

> **Tip:** Use the gadget **Import / Export** feature (in the right panel Settings tab) to copy a fully configured gadget as JSON — paste it into another gadget to clone the configuration without reconfiguring from scratch.`,
        },
      ],
    },

    // ═══ RELEASE NOTES ═══
    {
      id: "release-notes",
      title: "Release Notes",
      articles: [
        {
          slug: "latest-release",
          title: "Latest Release",
          content: `# Latest Release

Stay up to date with the newest features, improvements, and fixes in **Dashboard Templates, Charts, Graphs & Reports for Jira**.

> **Marketplace Listing:** [Dashboard Templates, Charts, Graphs & Reports for Jira](https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira)

---

## What's New

### Enhanced Chart Performance & Rendering
Charts now load significantly faster for large datasets. The rendering engine has been optimized to handle queries with 10,000+ issues while maintaining smooth Live Preview updates as you configure your gadget. Segment processing and color assignment are now handled more efficiently, reducing configuration panel lag.

### New Chart Types: Funnel & Tile
Two new chart types are now available in Custom Charts:

- **Funnel Chart** - Visualize stage-based progression (e.g., support ticket stages, release pipeline). Ideal for showing how issues move through a defined workflow sequence.
- **Tile Chart** - Display single KPI metrics as compact visual tiles. Perfect for scorecards showing total open issues, story points remaining, or bugs this week. Supports configurable tiles per row and multiple rows.

### Dynamic Filter Controller - Tabs & Preset Views
The Dynamic Filter Controller now supports **multi-tab preset views**. Admins and dashboard owners can define named tabs (e.g., "My Issues", "This Sprint", "High Priority") with pre-set filter values. Users can switch between views with a single click, eliminating the need to manually re-select filters for common scenarios.

### Import / Export Configuration
All three gadgets now support **JSON-based configuration import and export**. This allows you to:
- Duplicate a gadget configuration without rebuilding it manually
- Share chart setups between team members
- Back up gadget configurations before making major changes
- Migrate configurations between dashboards within the same Jira instance

---

## Bug Fixes & Improvements

| Area | Fix / Improvement |
|---|---|
| Chart By - JQL segments | Fixed issue where overlapping JQL conditions caused double-counting in some configurations |
| Issue List - column sorting | Clicking column headers now correctly sorts by the selected field across all pages |
| Dynamic Filter Controller | Reference ID display now always visible after first save (previously required a page refresh in some browsers) |
| Display Options | Auto-refresh setting now persists correctly after gadget re-edit |
| Export - PDF | Fixed layout clipping for charts with more than 12 segments |
| Segment colors | Color picker now remembers the last used custom color per gadget session |

---

## Upgrade Notes

All existing gadget configurations are **fully compatible** with this release. No migration or manual action is required. Gadgets on existing dashboards will continue to work without changes.

---

## Coming Soon

| Feature | Status |
|---|---|
| Template management (save your own templates) | In development |
| Sprint burndown chart type | Planned |
| Scheduled PDF report delivery | Under consideration |
| Dark mode support for gadget UI | Under consideration |

---

> For the full version history, see [Version History](/apps/dashboard-charts-jira/version-history).
> For setup and configuration help, see [Getting Started](/apps/dashboard-charts-jira/installation-setup).
`,
        },
        {
          slug: "version-history",
          title: "Version History",
          content: `# Version History

A complete changelog for **Dashboard Templates, Charts, Graphs & Reports for Jira**.

> **Marketplace Listing:** [Dashboard Templates, Charts, Graphs & Reports for Jira](https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira)

---

## Release Timeline

| Version | Release Date | Type | Highlights |
|---|---|---|---|
| v2.3 | May 2026 | Feature Release | Import/Export config, Funnel & Tile chart types, Controller tabs |
| v2.2 | March 2026 | Improvement Release | Chart performance optimization, PDF export fix, segment color persistence |
| v2.1 | January 2026 | Feature Release | Smart Labels for Issue List, AND/OR quick filter logic, user icon display |
| v2.0 | February 2025 | Major Release | Dynamic Filter Controller, 2D charts, Group By, Sum/Avg calculations, reference lines |
| v1.1 | February 2025 | Patch | JQL validation improvements, number formatting options, bug fixes |
| v1.0 | January 2025 | Initial Release | Custom Charts (Pie/Bar/Line), Issue List, Projects/Filter/JQL data sources |

---

## v2.3 - May 2026

### New Features
- **Funnel Chart** - Stage-based progression visualization
- **Tile Chart** - KPI tiles with configurable rows and per-row tile count
- **Import/Export Configuration** - JSON-based config sharing across gadgets and dashboards
- **Dynamic Filter Controller Tabs** - Named preset filter views with one-click switching

### Improvements
- Chart rendering performance significantly improved for large datasets (10,000+ issues)
- Live Preview updates are now debounced to prevent excessive re-renders while typing JQL
- Segment color picker remembers last used custom color per session

### Bug Fixes
- Fixed double-counting in overlapping JQL segment configurations
- Fixed Issue List column sort not persisting across pages
- Fixed Reference ID visibility requiring page refresh on first save
- Fixed PDF export clipping for charts with 12+ segments

---

## v2.2 - March 2026

### Improvements
- General chart load time improvements across all chart types
- Better error messages for invalid JQL in segment definitions
- Display Options: Auto-refresh setting now persists correctly on re-edit

### Bug Fixes
- Fixed segment order not being preserved after gadget re-edit in some browsers
- Fixed tooltip misalignment on 2D Line charts with long segment names

---

## v2.1 - January 2026

### New Features
- **Smart Labels** - JQL-based and filter-based visual badges in Issue List
- **AND/OR Quick Filter Logic** - Choose how multiple active quick filters are combined
- **User Icon Display** - Show avatar images in Issue List assignee columns

### Improvements
- Quick filter buttons now show active state more clearly
- Issue List column rename UI improved
- Display Options tab reorganized for clarity

### Bug Fixes
- Fixed Smart Label badge overflow on narrow dashboard columns
- Fixed Quick Filter AND mode including extra issues in edge cases

---

## v2.0 - February 2025

### Major New Features
- **Dynamic Filter Controller Gadget** - Shared interactive filter bar controlling multiple charts and lists
- **2D Chart Types** - Grouped Bar, Stacked Bar, 2D Line, 2D Table
- **Group By** - Second dimension for cross-tab analysis
- **Sum and Average Calculations** - Numeric field aggregations beyond issue count
- **Reference Lines** - Goal, Trend, and Average lines for Bar and Line charts
- **Cumulative Total** - Running total option for trend analysis

### Improvements
- Enhanced segment controls: search, pagination for large field lists, improved color picker
- Segment renaming now inline (click to edit)
- More number formatting options in Display Options

---

## v1.1 - February 2025

### Improvements
- JQL validation: clearer error messages with field name suggestions
- Number format options added (comma separators, decimal places)
- Segment ordering improved for date-based fields

### Bug Fixes
- Fixed bar chart x-axis labels overlapping for long segment names
- Fixed CSV export encoding for special characters

---

## v1.0 - January 2025

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
          content: `# Supported Integrations

**Dashboard Templates, Charts, Graphs & Reports for Jira** is a native Jira Cloud app built on Atlassian Forge. It integrates deeply with Jira's own data model and dashboard system - no external services, no third-party connectors, and no data leaving your Atlassian environment.

---

## Native Jira Integration

The app reads and displays data directly from your Jira Cloud instance. All data access uses Jira's standard APIs within the Forge sandbox - the same data you would see in Jira's own issue navigator and board views.

### Jira Data the App Uses

| Jira Data Type | How the App Uses It |
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

### What the App Cannot Access

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

| Gadget | Recommended Column Width |
|---|---|
| Custom Charts (Pie, Bar, Line) | 1 or 2 columns |
| Issue List | 2 or 3 columns (wider is better for many columns) |
| Dynamic Filter Controller | Full width (3 columns) or at least 2 columns |

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

| Filter Type | Supported |
|---|---|
| Personal saved filters (My Filters) | Yes |
| Shared filters (visible to you) | Yes |
| Favorite filters | Yes |
| Starred filters | Yes |
| Filters you don't have access to | No - only filters you can view in Jira |

---

## No External Service Integrations

The current version does not natively integrate with:

| Tool | Status |
|---|---|
| Slack | Not supported |
| Microsoft Teams | Not supported |
| Confluence | Not supported |
| Google Sheets / Excel | Not supported (use CSV export instead) |
| BI tools (Tableau, Power BI) | Not supported (use CSV export instead) |
| Jira Server / Data Center | Not supported |

> **Workaround for BI tools:** Use the CSV export feature to download issue data, then import it into your preferred BI or spreadsheet tool.

---

## Platform & Security

| Aspect | Detail |
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
          content: `# Data Migration

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

| Included | Not Included |
|---|---|
| Chart type | Jira issue data |
| Chart By field and segments | Jira project settings |
| Group By field | Dashboard layout |
| Display Options | User access permissions |
| Quick filters (Issue List) | Dynamic Filter Controller connections |
| Smart Labels (Issue List) | |
| Reference lines (Custom Charts) | |
| Gadget title and description | |

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

| Config Element | Transfers? | Notes |
|---|---|---|
| Chart type | Yes | |
| Chart By - Jira standard fields | Usually yes | Field must exist on target instance |
| Chart By - Custom JQL segments | Usually yes | JQL field names must be valid on target |
| Display Options | Yes | |
| Smart Labels | Usually yes | JQL conditions must be valid on target |
| Quick Filters | Usually yes | JQL conditions must be valid on target |
| Chart title / description | Yes | |
| Data source selection | **No** | Must be re-selected manually |
| Custom field references | **Verify** | Custom field names must match on target |

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

| Limitation | Detail |
|---|---|
| No bulk export | Configurations must be exported one gadget at a time |
| No dashboard-level export | Jira does not support exporting a full dashboard including gadget configs |
| Controller connections not exported | Linked chart-to-controller relationships must be re-established manually after import |
| Data source not exported | Project, filter, or JQL selections must be re-entered after import |
| App uninstall deletes all configs | There is no recovery after uninstall if configurations were not exported first |
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
          content: `# Common Use Cases

Real-world examples of how teams use **Dashboard Templates, Charts, Graphs & Reports for Jira** to visualize their work, track progress, and make faster decisions.

---

## 1. Sprint Dashboard

**Who:** Scrum Masters, Agile Coaches, Development Teams
**When:** Sprint planning, daily standups, sprint reviews

### What It Shows
A complete view of the current sprint - what's done, what's in progress, what's blocked, and how much work remains.

### Recommended Gadget Setup

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Pie) | Data: Current Sprint JQL \`sprint in openSprints()\` - Chart By: Status | Sprint status distribution at a glance |
| Custom Charts (Bar) | Data: Same sprint - Chart By: Assignee - Calculation: Count | Work distribution across team members |
| Custom Charts (Tile) | Data: Sprint JQL - Chart By: Custom JQL segments (Done vs Total) | Story point completion percentage |
| Issue List | Data: Sprint JQL - Columns: Key, Summary, Status, Assignee, Story Points | Full sprint backlog with click-through to issues |
| Dynamic Filter Controller | Data: Sprint JQL - Fields: Assignee, Status, Priority | Let team members filter by their own name |

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

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Pie) | Data: \`issuetype = Bug AND resolution is EMPTY\` - Chart By: Priority | Bug severity distribution |
| Custom Charts (Bar) | Data: Open bugs - Chart By: Assignee | Bug ownership per developer |
| Custom Charts (Stacked Bar) | Data: Open bugs - Chart By: Component - Group By: Priority | Priority mix per component |
| Custom Charts (Line) | Data: \`issuetype = Bug AND created >= -90d\` - Chart By: Created (by Week) | Bug creation trend over 90 days |
| Issue List | Data: Open bugs - Columns: Key, Summary, Priority, Status, Assignee, Created, Component | Full bug list sortable by priority |

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

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Bar) | Data: \`project = X AND resolution is EMPTY\` - Chart By: Assignee | Issue count per team member |
| Custom Charts (Grouped Bar) | Data: Same - Chart By: Assignee - Group By: Status | Work stage breakdown per person |
| Custom Charts (Stacked Bar) | Data: Same - Chart By: Assignee - Group By: Priority | Priority distribution per person |
| Custom Charts (Bar) | Data: Same - Chart By: Assignee - Calculation: Sum of Story Points | Story point load per person |
| Issue List | Data: Same - Columns: Assignee, Key, Summary, Status, Priority, Due Date | Full team work queue |

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

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Pie) | Data: \`fixVersion = "v2.0"\` - Chart By: Custom JQL (Done vs Not Done) | Overall release completion percentage |
| Custom Charts (Stacked Bar) | Data: Fix version JQL - Chart By: Component - Group By: Status | Completion by component |
| Custom Charts (Tile) | Data: \`fixVersion = "v2.0" AND priority = Highest AND resolution is EMPTY\` - Chart By: Status | Critical open blockers count |
| Issue List | Data: \`fixVersion = "v2.0" AND resolution is EMPTY AND priority in (Highest, High)\` - Columns: Key, Summary, Priority, Status, Assignee | High-priority outstanding items |
| Custom Charts (Line) | Data: Fix version JQL - Chart By: Resolved (by Day) | Resolution velocity trend |

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

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Tile) | Data: \`project in (X, Y, Z) AND resolution is EMPTY\` | Total open issues across all projects |
| Custom Charts (Tile) | Data: \`issuetype = Bug AND priority = Highest AND resolution is EMPTY\` | Critical open bugs |
| Custom Charts (Tile) | Data: \`sprint in openSprints() AND resolution is not EMPTY\` | Issues resolved this sprint |
| Custom Charts (Bar) | Data: \`created >= -12w\` - Chart By: Created (by Month) | Issue creation trend (last 3 months) |
| Custom Charts (Stacked Bar) | Data: Multi-project - Chart By: Project - Group By: Status | Cross-project health overview |

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

| Gadget | Configuration | Purpose |
|---|---|---|
| Custom Charts (Funnel) | Data: All open support tickets - Chart By: Status (ordered by workflow) | Ticket pipeline visualization |
| Custom Charts (Bar) | Data: \`created >= -7d\` - Chart By: Assignee | New tickets per agent this week |
| Issue List | Data: Open high-priority tickets - Smart Labels: Overdue, Escalated | Tickets needing immediate attention |

### Configuration Tips
- Order funnel segments to match your support workflow (e.g., New → Triaged → In Progress → Pending Customer → Resolved)
- Add a Smart Label "Overdue" using \`duedate < now() AND resolution is EMPTY\` with a red badge
- Add Quick Filters: "My Tickets" (\`assignee = currentUser()\`), "Unassigned" (\`assignee is EMPTY\`)
`,
        },
        {
          slug: "use-case-templates",
          title: "Use Case Templates",
          content: `# Use Case Templates

Ready-to-use dashboard templates with recommended gadget combinations, JQL, and configuration tips. Copy the JQL and gadget setups directly into your dashboard.

---

## Template 1: Sprint Health Dashboard

**Purpose:** Daily standup and sprint review dashboard for Scrum teams
**Audience:** Scrum Master, Development Team
**Update Frequency:** Daily

### Gadgets to Add (in order)

| Position | Gadget Type | Title |
|---|---|---|
| Row 1, Col 1 | Custom Charts - Pie | Sprint Status Overview |
| Row 1, Col 2 | Custom Charts - Tile | Sprint Completion % |
| Row 1, Col 3 | Custom Charts - Bar | Work by Assignee |
| Row 2, Full width | Dynamic Filter Controller | Sprint Filters |
| Row 3, Full width | Issue List | Sprint Backlog |

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

| Position | Gadget Type | Title |
|---|---|---|
| Row 1, Col 1 | Custom Charts - Pie | Bugs by Priority |
| Row 1, Col 2 | Custom Charts - Bar | Bugs by Assignee |
| Row 1, Col 3 | Custom Charts - Tile | Total Open Bugs |
| Row 2, Full width | Issue List | Open Bug List |

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

| Position | Gadget Type | Title |
|---|---|---|
| Row 1, Full width | Dynamic Filter Controller | Team Filters |
| Row 2, Col 1 | Custom Charts - Bar | Issues per Person |
| Row 2, Col 2 | Custom Charts - Bar | Story Points per Person |
| Row 2, Col 3 | Custom Charts - Pie | Status Overview |
| Row 3, Full width | Issue List | Team Work Queue |

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

| Position | Gadget Type | Title |
|---|---|---|
| Row 1, Col 1 | Custom Charts - Pie | Release Completion |
| Row 1, Col 2 | Custom Charts - Tile | Critical Blockers |
| Row 1, Col 3 | Custom Charts - Line | Resolution Velocity |
| Row 2, Full width | Issue List | Outstanding Items |

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

| Position | Gadget Type | Title |
|---|---|---|
| Row 1, 4 tiles | Custom Charts - Tile | Open Issues, Critical Bugs, Resolved This Month, Active Team Members |
| Row 2, Col 1 | Custom Charts - Bar | Monthly Issue Trend |
| Row 2, Col 2 | Custom Charts - Stacked Bar | Project Health |

### JQL for Each Tile

| Tile | JQL |
|---|---|
| Open Issues | \`project in (X, Y, Z) AND resolution is EMPTY\` |
| Critical Bugs | \`issuetype = Bug AND priority = Highest AND resolution is EMPTY\` |
| Resolved This Month | \`resolved >= startOfMonth() AND project in (X, Y, Z)\` |

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
    // 6. HELP & SUPPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "faq",
          title: "FAQ",
          content: `# Frequently Asked Questions

## General

### What is Dashboard Templates, Charts, Graphs & Reports for Jira?
It is a Jira Cloud app that adds three powerful gadgets to your Jira dashboards: **Custom Charts** (10 chart types), **Issue List** (configurable issue table), and **Dynamic Filter Controller** (shared interactive filter bar). All gadgets update in real time as Jira data changes.

### Which Jira products does the app support?
The app works with all Jira Cloud products — Jira Software, Jira Service Management, and Jira Work Management. It requires Jira Cloud; Server and Data Center are not supported.

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
Yes. Any custom field in your Jira instance can be used for Chart By, Group By, or Calculations — including custom dropdowns, number fields, and user pickers.

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
Yes. In edit mode, scroll to the **Quick Filters** section and click **+ Add filter**. Set the label and JQL condition — the filter button appears on the gadget in view mode.

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
Licensing follows Atlassian's standard Marketplace model — priced per Jira user tier. The cost scales with the number of users in your Jira instance.

### What happens when the trial ends?
If you do not purchase a license, gadgets become read-only and configuration is locked. Existing data is not deleted — purchasing a license restores full functionality immediately.

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
| "Field 'X' does not exist" | Check exact field name in Jira |
| "Value 'X' does not exist" | Check valid options in Jira |
| "Syntax error" | Review JQL syntax, check quotes and operators |

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
| Jira Site URL | https://yourcompany.atlassian.net |
| Gadget Type | Custom Charts / Issue List / Dynamic Filter Controller |
| Issue Description | Chart shows no data when filtering by Sprint |

### Helpful Additional Information

| **Information** | **Why It Helps** |
| --- | --- |
| Data Source Type | Projects, Saved Filter, JQL, or Controller |
| JQL Query | Exact JQL you're using |
| Screenshots | Shows exactly what you're seeing |
| Error Messages | Exact text of any errors |
| Browser & Version | Chrome 120, Firefox 121, etc. |

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
| Configuration help | 1-2 business days |
| Bug reports | 2-5 business days |
| Feature requests | Logged for review |

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

    // ═══════════════════════════════════════════════════════════════
    // 7. EULA
    // ═══════════════════════════════════════════════════════════════
    {
      id: "additional-resources",
      title: "Additional Resources",
      articles: [
        {
          slug: "eula",
          title: "End User License Agreement (Eula)",
          content: `**End User License Agreement (EULA)**

This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and Clovity, Inc. ("Company" or "We"), governing your use of the **Dashboard Templates, Charts, Graphs & Reports for Jira** application ("Software") available on the Atlassian Marketplace.

By installing, accessing, or using this Software, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use the Software.

## 1. LICENSE GRANT

Clovity, Inc. grants you a non-exclusive, non-transferable, revocable, and limited license to use the Software within your Atlassian Jira environment in accordance with this Agreement.

## 2. RESTRICTIONS

You shall not:

* Copy, modify, distribute, or create derivative works of the Software.
* Reverse engineer, decompile, or attempt to extract the source code.
* Use the Software for unlawful or unauthorized purposes.
* Rent, lease, sublicense, or transfer the Software to third parties.

## 3. DATA PRIVACY & SECURITY

The Software may process Jira-related data but does not store, share, or transmit personal or confidential data outside of your Jira environment.

Your use of the Software must comply with applicable data protection laws and Atlassian's policies.

## 4. SUPPORT & UPDATES

Clovity, Inc. may provide updates, patches, or improvements to the Software at its discretion.

Support services are available as per the Atlassian Marketplace listing.

## 5. DISCLAIMER OF WARRANTIES

The Software is provided "AS IS" without any express or implied warranties, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Clovity, Inc. does not warrant that the Software will be error-free or operate without interruptions.

## 6. LIMITATION OF LIABILITY

To the fullest extent permitted by law, Clovity, Inc. shall not be liable for any damages arising out of or related to the use or inability to use the Software, including but not limited to loss of profits, data, or other intangible losses, even if Clovity, Inc. has been advised of the possibility of such damages.
`,
        },
      ],
    },
  ],
};
