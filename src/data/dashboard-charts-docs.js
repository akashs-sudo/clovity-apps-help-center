export const dashboardChartsDocs = {
  appSlug: "dashboard-charts-jira",
  categories: [
    {
      id: "overview",
      title: "Overview",
      articles: [
        {
          slug: "overview-intro",
          title: "Overview",
          content: `# Dashboard Templates, Charts, Graphs & Reports for Jira

Custom Charts for Jira is a reporting app that helps you **see your Jira data in a clear, visual way**.

* Make **charts and graphs**
* Build **tables and issue lists**
* Create **interactive configurable dashboards** for your team

All of this is done **inside Jira**, using your existing projects, filters, and JQL.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **What's Included** | *Specifies the fundamental components, deliverables, and features* |
| **Benefits & Outcomes** | *Emphasizes the anticipated value and positive impacts.* |
| **Use Cases Gallery** | *Presents practical examples and scenarios illustrating application.* |
| **Limitations & Compatibility** | *Defines constraints, boundaries, and system prerequisites.* |
`,
        },
        {
          slug: "whats-included",
          title: "What's Included",
          content: `This page provides a detailed breakdown of each gadget included in the Custom Charts & Dashboards app.

## Gadget 1: Custom Charts

**Purpose:** Create chart-based visual reports from Jira issues directly on dashboards.

### Supported Chart Types

| **Category** | **Chart Types** | **Best For** |
| --- | --- | --- |
| Pie | Pie Chart | Showing percentages and proportions |
| Bar | Bar, Grouped Bar, Stacked Bar | Comparing values across categories |
| Line | Line, 2D Line | Showing trends over time |
| Table | Table, 2D Table | Displaying exact numbers in grid format |
| Other | Funnel, Tile | Conversion stages, single KPI metrics |

### Key Features

| **Feature** | **Description** |
| --- | --- |
| Chart By | Group data by any Jira field, custom JQL, or saved filters |
| Group By | Add a second dimension for 2D charts |
| Calculations | Count, Sum, or Average of numeric fields |
| Reference Lines | Goal, Trend, and Average lines |
| Segment Controls | Rename, reorder, hide, color, and group segments |
| Live Preview | See changes instantly while configuring |
| Export | Download as PNG, PDF, or CSV |

## Gadget 2: Issue List

**Purpose:** Display Jira issues in a configurable table with sorting, filtering, and export capabilities.

### Key Features

| **Feature** | **Description** |
| --- | --- |
| Custom Columns | Add any Jira field as a column |
| Column Renaming | Change column headers for clarity |
| Smart Labels | Add indicator badges based on filters or JQL |
| Quick Filters | One-click filter buttons above the table |
| AND/OR Logic | Control how multiple filters combine |
| Sorting | Click column headers to sort |
| Export | Download as CSV, PNG, or PDF |

## Gadget 3: Dynamic Filter Controller

**Purpose:** Create a shared filter bar that controls multiple charts and lists simultaneously.

### Key Features

| **Feature** | **Description** |
| --- | --- |
| Shared Filtering | One filter bar controls all connected gadgets |
| Filter Fields | Add Jira fields, text search, JQL, or saved filters |
| Tabs | Create preset filter combinations for one-click switching |
| Real-time Updates | Connected gadgets update instantly when filters change |
| Reference ID | Unique identifier for connecting gadgets |
| Show Connected | Highlight which gadgets are linked |

## Data Sources (All Gadgets)

Every gadget supports these data source options:

| **Source** | **Description** |
| --- | --- |
| Projects | Select one or more Jira projects |
| Saved Filter | Use an existing Jira filter |
| Custom JQL | Write your own JQL query |
| Dynamic Filter Controller | Connect to a filter controller gadget |
`,
        },
        {
          slug: "benefits-outcomes",
          title: "Benefits & Outcomes",
          content: `Discover what you can achieve with Custom Charts & Dashboards for Jira.

## Key Benefits

### Better Visibility

* See your Jira data at a glance with visual charts
* Spot trends, bottlenecks, and issues before they become problems
* Share insights with stakeholders who don't use Jira

### Save Time

* Build reports in minutes, not hours
* No coding or external tools required
* Reuse configurations across dashboards with Import/Export

### Make Better Decisions

* Data-driven insights for sprint planning
* Track progress against goals with reference lines
* Compare performance across teams, sprints, or time periods

### Improve Collaboration

* Interactive dashboards for team standups
* Preset tabs for different audience views
* Self-service filtering so users find what they need

## What You Can Track

| **Category** | **Examples** |
| --- | --- |
| Sprint Health | Status distribution, burndown, velocity trends |
| Team Workload | Issues per assignee, story points by team member |
| Bug Tracking | Bug trends, severity breakdown, resolution time |
| Release Progress | Completion percentage, blocking issues, scope changes |
| Portfolio View | Cross-project comparisons, resource allocation |

## Who Benefits

| **Role** | **How They Benefit** |
| --- | --- |
| Scrum Masters | Track sprint progress, identify blockers, run standups |
| Product Owners | Monitor backlog health, release readiness, priorities |
| Engineering Managers | Team workload, bug trends, velocity comparisons |
| Executives | High-level KPIs, portfolio status, trend analysis |
| QA Leads | Defect tracking, test coverage, quality metrics |
`,
        },
        {
          slug: "use-cases-gallery",
          title: "Use Cases Gallery",
          content: `Real-world dashboard examples and configurations to help you get started.

## Sprint Dashboard

**Audience:** Scrum Teams, Scrum Masters, Product Owners

**Purpose:** Track daily sprint progress, identify blockers, and monitor team velocity.

### Recommended Gadgets

| **Gadget** | **Configuration** |
| --- | --- |
| Dynamic Filter Controller | Base: project = TEAM AND sprint in openSprints() \\| Filters: Sprint, Assignee, Issue Type \\| Tabs: All Work, My Items, Blocked |
| Pie Chart | Chart By: Status \\| Shows: To Do, In Progress, Done distribution |
| Stacked Bar Chart | Chart By: Sprint \\| Group By: Issue Type \\| Shows: Work mix per sprint |
| Issue List | Columns: Key, Summary, Status, Assignee, Story Points \\| Quick Filter: Blocked items |

## Bug Tracking Dashboard

**Audience:** QA Leads, Engineering Managers

**Purpose:** Monitor bug trends, track resolution progress, identify problem areas.

### Recommended Gadgets

| **Gadget** | **Configuration** |
| --- | --- |
| Line Chart | Chart By: Custom JQL Segments \\| Segment 1: Created - issuetype = Bug AND created >= -30d \\| Segment 2: Resolved - issuetype = Bug AND resolved >= -30d \\| Add: Trend lines |
| Bar Chart | Chart By: Component \\| Data: issuetype = Bug AND resolution is EMPTY \\| Shows: Open bugs by component |
| Pie Chart | Chart By: Priority \\| Shows: Bug severity distribution |
| Issue List | Quick Filters: Critical, This Week, Unassigned |

### Smart Label Ideas

| **Label** | **JQL Condition** |
| --- | --- |
| 🔥 Critical | priority = Highest |
| ⚠️ Aging (>7d) | created < -7d AND resolution is EMPTY |
| 👤 Unassigned | assignee is EMPTY |

## Team Workload Dashboard

**Audience:** Engineering Managers, Team Leads

**Purpose:** Balance work distribution, identify overloaded team members.

### Recommended Gadgets

| **Gadget** | **Configuration** |
| --- | --- |
| Bar Chart | Chart By: Assignee \\| Calculation: Sum of Story Points \\| Add: Average Line |
| Stacked Bar Chart | Chart By: Assignee \\| Group By: Status \\| Shows: What state each person's work is in |
| Tile Charts | Tile 1: Total open issues \\| Tile 2: Unassigned count \\| Tile 3: Blocked count |
| 2D Table | Chart By: Assignee \\| Group By: Issue Type \\| Shows: Work type breakdown per person |

## Release Readiness Dashboard

**Audience:** Release Managers, Product Owners

**Purpose:** Track progress toward a release milestone.

### Recommended Gadgets

| **Gadget** | **Configuration** |
| --- | --- |
| Tile Chart | Calculation: Percentage Done \\| Shows: Overall release completion |
| Pie Chart | Chart By: Status \\| Data: fixVersion = "2024.Q1" \\| Shows: Status breakdown |
| 2D Table | Chart By: Component \\| Group By: Status \\| Shows: Completion matrix by component |
| Issue List | Data: fixVersion = "2024.Q1" AND statusCategory != Done \\| Quick Filter: Blockers |
`,
        },
        {
          slug: "limitations-compatibility",
          title: "Limitations & Compatibility",
          content: `Understanding system requirements, known limitations, and compatibility information.

## System Requirements

### Jira Compatibility

| **Requirement** | **Details** |
| --- | --- |
| Jira Version | Jira Cloud (Atlassian Cloud) |
| Platform | Forge-based app |
| Browser Support | Chrome, Firefox, Safari, Edge (latest versions) |

### Permissions Required

| **Permission** | **Why It's Needed** |
| --- | --- |
| read:jira-work | Read issues, projects, filters |
| write:jira-work | Save gadget configurations |
| read:jira-user | Display user information (assignees, reporters) |
| read:dashboard:jira | Access dashboard gadgets |
| write:dashboard:jira | Save and update gadgets |
| storage:app | Store gadget configurations |

## Known Limitations

### Data Limits

| **Limitation** | **Details** |
| --- | --- |
| Large Datasets | Queries returning 50,000+ issues may be slow to render |
| Real-time Updates | Data refreshes on page load or manual refresh (not streaming) |
| Historical Data | Shows current state, historical snapshots require Time in Status features |

### Feature Limitations

| **Feature** | **Status** |
| --- | --- |
| Template Management | Coming in future version |
| Admin Settings | Coming in future version |
| Shared Dashboard Gadget | Coming in future version |

## What's NOT Included

To set clear expectations, this app does not provide:

| **Feature** | **Alternative** |
| --- | --- |
| Time tracking reports | Use Jira's built-in time tracking or dedicated apps |
| Gantt charts | Use Jira's Timeline view or dedicated Gantt apps |
| Resource planning | Use Jira's Team Management or planning apps |
| Automated alerts | Use Jira Automation rules |
| Historical snapshots | Current state only (Time in Status coming soon) |

## Performance Considerations

### For Best Performance

| **Recommendation** | **Why** |
| --- | --- |
| Use specific JQL | Narrow queries load faster than broad ones |
| Limit segments | 10-20 segments render faster than 100+ |
| Use saved filters | Often cached and optimized by Jira |
| Avoid nested queries | Simple JQL performs better |
`,
        },
      ],
    },
    {
      id: "get-started",
      title: "Get Started",
      articles: [
        {
          slug: "get-started-intro",
          title: "Get Started",
          content: `Welcome to the Quick Start guide for **Dashboard Templates, Charts, Graphs & Reports for Jira**.

This section provides everything you need to build powerful, customized Jira dashboards. Whether you are placing your first chart, pulling in specific Jira issues, or navigating the configuration menus, the guides below will walk you through the process step-by-step.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Adding Gadgets** | *Step-by-step instructions for adding, editing, and removing charts, issue lists, and filter gadgets on your Jira dashboard.* |
| **Choosing Data Sources** | *A guide to selecting the right Jira data using Projects, Saved Filters, Custom JQL, or Dynamic Filter Controllers.* |
| **Understanding Interface** | *An overview of the three-panel configuration layout (Data Source, Live Preview, and Settings).* |
`,
        },
        {
          slug: "adding-gadgets",
          title: "Adding Gadgets",
          content: `# Adding Gadgets to Dashboards

Learn how to add Custom Charts, Issue List, and Dynamic Filter Controller gadgets to your Jira dashboards.

## Prerequisites

Before adding gadgets, ensure:

* You have access to a Jira dashboard (view or edit permissions)
* The Custom Charts & Dashboards app is installed (check with your Jira admin)
* You have permission to view the Jira data you want to report on

## Step-by-Step: Adding a Gadget

### Step 1: Open a Dashboard

1. In Jira, click Dashboards in the top navigation
2. Select an existing dashboard, or click Create dashboard to make a new one
3. Click the Edit button (pencil icon) to enter edit mode

### Step 2: Open the Gadget Gallery

1. Click the "Add gadget" button (usually top-right)
2. The gadget gallery opens, showing all available gadgets

### Step 3: Find Our Gadgets

Search for any of these gadgets:

| **Search Term** | **Gadget Name** |
| --- | --- |
| Custom Charts | Custom Charts |
| Issue List | Issue List |
| Dynamic Filter | Dynamic Filter Controller |

### Step 4: Add the Gadget

1. Click on the gadget name or the Add button
2. The gadget appears on your dashboard in edit mode
3. The configuration panel opens automatically

### Step 5: Configure and Save

1. Set your data source
2. Configure the gadget options
3. Watch the Live Preview update as you make changes
4. Click "Save gadget" when finished

## Editing Existing Gadgets

To modify a gadget after saving:

1. Hover over the gadget
2. Click the Edit (pencil) icon in the gadget header
3. Make your changes
4. Click "Save gadget"

## Removing Gadgets

To remove a gadget from a dashboard:

1. Hover over the gadget
2. Click the More options (•••) menu
3. Select Remove
4. Confirm the removal

> **Tip:** Removing a gadget deletes its configuration. Use Export before removing if you want to save the configuration.
`,
        },
        {
          slug: "choosing-data-sources",
          title: "Choosing Data Sources",
          content: `Every gadget needs a data source that defines which Jira issues to include. This guide explains each option and when to use it.

## Data Source Options

| **Option** | **Best For** |
| --- | --- |
| Projects | Simple reports on one or more projects |
| Saved Filter | Reusing existing filter definitions |
| Custom JQL | Precise control over issue selection |
| Dynamic Filter Controller | Interactive filtering by users |

## Option 1: Projects

**What it does:** Includes all issues from selected Jira projects.

### How to Use

1. Select Projects as the source type
2. Search for and select one or more projects
3. All issues from those projects (that you can see) are included

### When to Use Projects

* You want all issues from a project
* You're creating a simple project-level report
* You don't need complex filtering

## Option 2: Saved Filter

**What it does:** Uses an existing Jira filter you or someone else created.

### How to Use

1. Select Saved Filter as the source type
2. Search for the filter by name
3. Select the filter

### When to Use Saved Filters

* You already have a well-defined filter
* Multiple gadgets should use the same criteria
* Filter is maintained by someone else
* You want filter changes to automatically update reports

## Option 3: Custom JQL

**What it does:** Lets you write a JQL (Jira Query Language) query for precise control.

### JQL Examples

| **Use Case** | **JQL** |
| --- | --- |
| Current sprint | project = TEAM AND sprint in openSprints() |
| My open items | assignee = currentUser() AND resolution is EMPTY |
| Recent bugs | issuetype = Bug AND created >= -7d |
| High priority unassigned | priority in (High, Highest) AND assignee is EMPTY |
| Overdue items | duedate < now() AND resolution is EMPTY |

## Option 4: Dynamic Filter Controller

**What it does:** Connects to a Dynamic Filter Controller gadget, enabling interactive filtering.

### How to Use

1. First, add a Dynamic Filter Controller gadget to your dashboard
2. Configure and save the controller
3. Note the Reference ID shown in the controller
4. Edit your chart or list gadget
5. Select Dynamic Filter Controller as the source type
6. Select the controller by its Reference ID

## Choosing the Right Source

| **Question** | **Recommendation** |
| --- | --- |
| Do I need filtering? | If no → Projects. If yes → JQL or Filter |
| Is there an existing filter? | If yes → Saved Filter |
| Do I need complex criteria? | If yes → Custom JQL |
| Should users filter interactively? | If yes → Dynamic Filter Controller |
`,
        },
        {
          slug: "understanding-interface",
          title: "Understanding Interface",
          content: `Learn how to navigate the gadget configuration interface effectively.

## The Three-Panel Layout

When you edit any of our gadgets, you'll see a three-panel layout:

* **LEFT PANEL - Data Source:** Choose where your data comes from
* **CENTER PANEL - Live Preview:** See your chart or table update in real-time
* **RIGHT PANEL - Configuration Tabs:** Fine-tune settings

## Left Panel: Data Source

This is where you select your data source.

| **Element** | **Purpose** |
| --- | --- |
| Source Type Selector | Choose Projects, Saved Filter, JQL, or Controller |
| Project Picker | Search and select Jira projects |
| Filter Picker | Search and select saved filters |
| JQL Editor | Write custom JQL with validation |
| Issue Count | Shows how many issues match your source |

## Center Panel: Live Preview

This shows a real-time preview of your gadget.

| **Action** | **Preview Response** |
| --- | --- |
| Change data source | Reloads with new data |
| Change chart type | Re-renders immediately |
| Modify segments | Updates chart |
| Change display options | Applies styling changes |

## Right Panel: Configuration Tabs

### Common Tabs Across All Gadgets

| **Tab** | **Purpose** |
| --- | --- |
| Display Settings | Visual options, title, formatting |
| Description | Add rich text explanation |
| Import/Export | Copy/paste configurations |

### Custom Charts Specific Tabs

| **Tab** | **Purpose** |
| --- | --- |
| Chart Type | Select pie, bar, line, table, etc. |
| Chart By | Configure main grouping |
| Group By | Configure second dimension (2D charts) |
| Calculations | Count, Sum, Average, reference lines |

### Issue List Specific Tabs

| **Tab** | **Purpose** |
| --- | --- |
| Columns | Add, remove, reorder columns |
| Quick Filters | Add filter buttons |

## Save and Cancel Buttons

At the bottom of the configuration screen:

| **Button** | **Action** |
| --- | --- |
| Save gadget | Saves configuration, closes editor, shows gadget |
| Cancel | Discards changes, returns to previous state |

> **Tip:** Changes are NOT saved until you click "Save gadget". If you navigate away or click Cancel, your changes are lost.
`,
        },
      ],
    },
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

### Do ✅

* Choose the right chart type for your data
* Limit segments to 10 or fewer for readability
* Use meaningful colors (red for bugs, green for done)
* Add descriptions to explain what the chart shows

### Don't ❌

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
| Count (High → Low) | Largest segments first |
| Count (Low → High) | Smallest segments first |
| A → Z | Alphabetical ascending |
| Z → A | Alphabetical descending |
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
| Status (3 bars) | Status × Issue Type (3 groups of 3 bars) |
| One data series | Multiple data series |
| Simple comparison | Cross-dimensional analysis |

## Which Charts Support Group By?

| **Chart Type** | **Group By Support** |
| --- | --- |
| Pie | ❌ No |
| Bar (1D) | ❌ No |
| Grouped Bar | ✅ Yes |
| Stacked Bar | ✅ Yes |
| Line (1D) | ❌ No |
| 2D Line | ✅ Yes |
| Table (1D) | ❌ No |
| 2D Table | ✅ Yes |
| Funnel | ❌ No |
| Tile | ❌ No |

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

* Status × Type - Different aspects of same issues
* Time × Category - Trend analysis with breakdown
* Person × Status - Individual progress tracking
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

| **Week** | **Issues (Normal) → Issues (Cumulative)** |
| --- | --- |
| Week 1 | 10 → 10 |
| Week 2 | 15 → 25 |
| Week 3 | 12 → 37 |
| Week 4 | 8 → 45 |

## Which Charts Support Reference Lines?

| **Chart Type** | **Reference Lines** |
| --- | --- |
| Bar | ✅ Goal, Trend, Average |
| Grouped Bar | ✅ Goal, Trend, Average |
| Stacked Bar | ✅ Goal, Trend, Average |
| Line | ✅ Goal, Trend, Average |
| 2D Line | ✅ Goal, Trend, Average |
| Pie | ❌ Not applicable |
| Table | ❌ Not applicable |
| Funnel | ❌ Not applicable |
| Tile | ❌ Not applicable |
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
| Maximum pie chart diameter | Controls pie size (range: 300–400px). (Pie only) | 300px |
| Y-axis height | Vertical size control (Funnel only) (range: 320–800px). | 350px |

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
| Y-axis height | Chart height control (range: 320–800px). | 350px |
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
| Y-axis height | Chart height control (range: 320–800px). | 350px |
| Y-axis unit | Axis unit: Count or %. | Count |

## Table charts (Table / Table 2D)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on hover | Shows tooltip when hovering over values/names. | On |
| Show number column | Adds a serial/number column. | On |
| Show total rows | Adds total row(s) at bottom. | On |
| Limit rows | Limits table rows shown (range: 1–200). | 5 |

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

**Example (Table):** For clean dashboards, set **Limit rows = 10–20**, enable **Show total rows**, and keep **Display = Count / %** for executive summaries (Table 2D).

## Tile chart

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Max tiles per row | Controls how many tiles appear in one row (range: 1–8). | 5 |
| Limit rows | Controls how many tile rows appear (range: 1–50). | 2 |
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

* Keep **% Places Control = 0–1** for clean dashboards.
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
| Issues by Status | Pie Chart | status | — | Shows how issues are distributed by status. | Good for a fast status breakdown and a simple shareable chart. |
| Issues by Priority | Funnel Chart | priority | — | Shows issue volume by priority in a funnel-style view. | Useful when you want to compare how work is distributed across priority levels. |
| Issues by Issue Type | Line Chart | issuetype | — | Plots issues by issue type in a line-style view. | Useful when you want a lightweight category comparison in a line chart presentation. |
| Issues by Assignee | Bar Chart | assignee | — | Shows how work is distributed across assignees. | Useful for workload distribution or ownership checks. |
| Unresolved Issues | Bar Chart | Custom JQL | — | Creates a JQL-segment chart using the segment "Unresolved" with JQL \`status != Done\`. | Useful when you want a quick unresolved-only starter chart without building a segment manually. |
| Issues by Component | Table Chart | components | — | Builds a table-based summary by component. | Useful when users prefer a tabular view instead of a visual chart. |
| Issues by Labels | Bar Chart | labels | — | Builds a bar chart grouped by issue labels. | Useful for tag-based reporting and theme analysis. |
| Issues by Fix Version | Line Chart | fixVersions | — | Builds a line-style chart by fix version. | Useful for release-oriented reporting. |
| Bug Rate by Sprint | Grouped Bar Chart | sprint | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "Bugs" segment using \`issuetype = Bug\`. | Useful when you want sprint-level comparison with a bug-only grouped slice. |
| Issues by Status per Project | Stacked Bar Chart | status | project | Compares statuses within each project using a stacked bar layout. | Useful for cross-project status comparison in one chart. |
| Issues by Priority per Project | Grouped Bar Chart | priority | project | Compares project-level priority distribution side by side. | Useful for seeing whether one project carries more high-priority work than another. |
| Issues by Type per Assignee | Stacked Bar Chart | issuetype | assignee | Compares issue types within each assignee. | Useful for role mix, work allocation, and team ownership analysis. |
| To Do by Priority | Stacked Bar Chart | priority | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "TO DO" segment using \`status = 'To Do'\`. | Useful when you want to compare only To Do issues by priority. |
| Epic Progress | Grouped Bar Chart | status | Epic link | Builds a grouped comparison using status within each Epic link. | Useful for epic-level progress review and delivery tracking. |

## Template groups explained

### 1. Single-field starter templates

These templates use one main Jira field and no Group By field. They are the simplest templates and are best when you want a quick chart with one clear dimension. This group includes Issues by Status, Issues by Priority, Issues by Issue Type, Issues by Assignee, Issues by Component, Issues by Labels, and Issues by Fix Version.

### 2. Segment-based starter templates

These templates use JQL-based logic instead of relying only on a regular Jira field. They are useful when the chart needs a filtered slice such as unresolved issues or To Do issues. This group includes Unresolved Issues, Bug Rate by Sprint, and To Do by Priority.

### 3. Two-dimensional comparison templates

These templates use both a main field and a Group By field. They are best when you want to compare one category inside another category. This group includes Issues by Status per Project, Issues by Priority per Project, Issues by Type per Assignee, and Epic Progress.

> **Note:** Advanced templates can use Group By JQL segments. In those cases, the template does more than pick a field—it also builds a comparison slice behind the scenes.

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

## How the chart behaves with date fields

| **Behavior** | **What it means** |
| --- | --- |
| Trend readability | Dates are shown as time periods instead of a long list of raw values. |
| Chronological order | Date values stay ordered from older to newer, or the reverse when appropriate. |
| Deduplication | Multiple issues on the same date are combined into one date bucket. |
| Range validation | Only dates inside the selected range are included in the generated date segments. |
| Grouped labels | Week, month, quarter, and year labels are displayed in a readable reporting format. |

## Display Options for date charts

When the chart uses a date field, the Display Options panel includes date-focused settings.

| **Section** | **What you can change** |
| --- | --- |
| General | Date format, percentage decimal places, auto refresh, options menu, direct export. |
| Chart | Tooltip on point hover, tooltip display, count labels, zero-count labels, percent labels, horizontal gridlines, vertical gridlines, vertical hover line, total under chart. |
| Axis & Label | Heading, show or hide Y-axis label, custom Y-axis label, show or hide X-axis label, custom X-axis label, Y-axis unit. |

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

## Limitations

* The feature depends on the Jira field being correctly recognized as a date or date-time field.
* This is a reporting and grouping feature, not a full business-calendar or fiscal-calendar engine.
* Very detailed date grouping over large ranges can still create busy charts if the grouping level is too fine.

> **Note:** Formatting changes how dates look. Grouping changes how the data is analyzed. Both are important in date-based charts.
`,
        },
      ],
    },
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
| 🔥 Critical | priority = Highest |
| ⚠️ Overdue | duedate < now() AND resolution is EMPTY |
| 🚫 Blocked | labels = blocked |
| 👤 Unassigned | assignee is EMPTY |
| 📅 Due Soon | duedate >= now() AND duedate <= 7d |

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
| Team Workload | Work split by assignee | Assignee, Key, Summary, Status, Priority, Due Date | Assignee A–Z, then Priority high to low |
| Reopened Issues | Reopened or bounced-back work | Key, Summary, Status, Priority, Assignee, Updated, Resolved | Updated newest first |
| Blockers List (Release / Sprint) | Release or sprint blockers | Key, Summary, Priority, Status, Assignee, Fix Versions, Updated | Priority high to low, then Updated newest first |
| Recently Resolved (Last 7 days) | Freshly completed work | Key, Summary, Priority, Assignee, Resolved, Created | Resolved newest first |
| High Priority Unassigned (Triage) | Unassigned urgent work needing ownership | Priority, Key, Summary, Status, Project, Created, Updated | Priority high to low, then oldest created first |
| Open Issues (No update in 14 days) | Aging open work | Key, Summary, Status, Assignee, Priority, Updated, Created | Oldest updated first |
| Critical Bugs Open — P1 Bugs | Highest-risk bug list | Key, Summary, Priority, Status, Assignee, Updated, Created | Updated newest first |
| Delivery Outliers — Recently Resolved (Created Long Ago) | Items resolved recently but created long ago | Key, Summary, Priority, Created, Resolved, Assignee | Resolved newest first, then oldest created first |

## Template-by-template details

### My Open Issues

Best for users who want a personal action list. This template focuses on issue identity, current status, priority, last update time, and assignee. It includes quick filters for My open issues, Due this week, and Hide subtasks.

### Recently Updated Issues

Best for monitoring recent activity. This template brings Updated and Project into view so teams can quickly see where changes are happening. It includes quick filters for My issues and Recently Updated Issues.

### Unresolved by Priority

Best for reviewing open work in urgency order. It starts with Priority as the lead column and sorts by priority first. Quick filters include Unresolved Issues, High only, and Older than 30d.

### Team Workload

Best for checking how work is distributed across assignees. It highlights Assignee, Priority, and Due Date so managers or scrum leads can scan workload and upcoming commitments. Quick filters include Due this week and No due date.

### Reopened Issues

Best for tracking issues that came back after earlier progress. It keeps Updated and Resolved visible so you can understand recency and prior closure. Quick filters include Reopened status, Updated last 7d, and High priority.

### Blockers List (Release / Sprint)

Best for finding work that can delay a release or sprint. It includes Fix Versions and Updated so release-focused teams can track blockers in context. Quick filters include Has blockers and High priority.

### Recently Resolved (Last 7 days)

Best for reviewing freshly completed work. It shows Resolved and Created together so teams can compare completion recency with age. Quick filters include Resolved last 7d, Bugs only, and High priority only.

### High Priority Unassigned (Triage)

Best for triage meetings. It highlights urgent unassigned work and shows Project, Created, and Updated so coordinators can assign ownership quickly. Quick filters include High Priority, Unassigned Issues, and Created last 7d.

### Open Issues (No update in 14 days)

Best for identifying stale work. It sorts by oldest Updated value first so neglected items rise to the top. Quick filters include Open only, Not updated in 14+ days, and Unassigned.

### Critical Bugs Open — P1 Bugs

Best for a high-severity bug watchlist. It focuses on bug triage and lets teams narrow to Critical, Highest, High, and Unresolved conditions using the built-in quick filters.

### Delivery Outliers — Recently Resolved (Created Long Ago)

Best for spotting items that took a long time to finish. It compares Created and Resolved dates in the same list and uses quick filters such as Resolved last 7d and Created 30d+.

> **Note:** Templates do not lock the Issue List. After applying a template, you can still add or remove columns, change the sort order, edit quick filters, and save the gadget with your own final setup.
`,
        },
      ],
    },
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

**Example JQL:** project = TEAM AND issuetype in (Story, Bug, Task)

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

## Detailed template guide

### My Work (Daily Driver)

This template is designed for a single user who wants one practical tab for daily work.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Issue Type, Status, Assignee, Priority, and Contains text. |
| Quick filters added as toggle chips | Assignee to me (active), Unresolved only, Due this week, Hide subtasks, and Updated last 24h. |
| Best used when | Personal task review, stand-ups, and quick "what should I work on now?" checks |

### Sprint Control (Scrum)

This template focuses on sprint-based delivery.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Sprint, Status, Assignee, Issue Type, and Contains text. |
| Quick filters added as toggle chips | Current sprint (active), Remaining only, Done only, and Blocked. |
| Best used when | Scrum teams that need a sprint-focused control bar for daily tracking or review meetings. |

### Backlog Grooming

This template is aimed at backlog refinement.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Issue Type, Priority, Assignee, Labels, Components, and Contains text. |
| Quick filters added as toggle chips | Backlog Only (Open) (active), Unestimated only, High priority, and Old items (30d+). |
| Best used when | Refinement sessions, backlog clean-up, and product-owner review. |

### Team Workload (People View)

This template helps teams understand who owns current work.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Assignee, Status Category, Priority, Due Date, and Contains text. |
| Quick filters added as toggle chips | Assigned only (active), Unassigned, Due this week, and In progress only. |
| Best used when | Load balancing, team lead reviews, and checking who has time-sensitive work. |

### Triage Inbox (New + Unowned)

This template is made for incoming work that still needs a decision.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Issue Type, Priority, Assignee, Created, Components, and Contains text. |
| Quick filters added as toggle chips | Unassigned only (active), Created last 48h (active), Critical/Highest only, and Unresolved. |
| Best used when | Support queues, operations triage, and any team that reviews new issues before routing them. |

### Critical Incidents (P1/P2)

This template is tailored for high-severity incidents.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Issue Type, Priority, Status, Assignee, Updated, and Contains text. |
| Quick filters added as toggle chips | P1 only (Critical) (active), P1 + P2, Bugs only, Updated last 24h, and Blocked. |
| Best used when | Incident response, service management, or production support teams working on urgent issues. |

### Aging Open Issues (Stale Work)

This template helps surface work that is still open but may be ignored or stuck.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Status Category, Priority, Assignee, Updated, and Contains text. |
| Quick filters added as toggle chips | Open only (active), No update 14d+ (active), No update 30d+, and Unassigned. |
| Best used when | Weekly cleanup, stale-work review, and delivery-risk checks. |

### Roadmap Scope (Epic + Work)

This template helps connect roadmap-level planning with the work sitting under it.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Epic, Issue Type, Status Category, Assignee, Priority, and Contains text. |
| Quick filters added as toggle chips | Not done (active), Epics only, Stories only, and Stale 14d+. |
| Best used when | Roadmap reviews, portfolio discussions, and epic-level planning conversations. |

### Dependency & Blockers (Delivery Risk)

This template focuses on issue links and blockers.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Status, Priority, Assignee, and Contains text. |
| Quick filters added as toggle chips | Is blocked (active), Blocks others, Has any links, and Flagged impediment. |
| Best used when | Delivery-risk management, release readiness review, and dependency tracking. |

### QA / Testing Pipeline

This template supports test flow and release preparation.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Status, Issue Type, Priority, Assignee, Fix Versions, and Contains text. |
| Quick filters added as toggle chips | Bugs only (active), Ready for QA, In Testing, and Reopened. |
| Best used when | QA stand-ups, release testing, and bug verification workflows. |

### Due Dates & Commitments

This template is for teams that need to stay on top of deadlines and promised delivery dates.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Due Date, Status Category, Assignee, Priority, and Contains text. |
| Quick filters added as toggle chips | Due this week (active), Overdue, No due date, and Not done. |
| Best used when | Deadline tracking, commitment review, and weekly delivery planning. |

### Customer Escalations / VIP

This template makes it easier to focus on the issues that matter most to customers.

| **Part** | **Details** |
| --- | --- |
| Fields added to the active tab | Project, Priority, Status, Assignee, Labels, Updated, and Contains text. |
| Quick filters added as toggle chips | Escalation (active), VIP, and High priority only. |
| Best used when | Escalation review, customer-health meetings, and VIP ticket management. |

> **Note:** Dynamic Filter Controller template is a starter pack for one tab. It gives that tab a useful set of fields and quick filters, but it does not rebuild the whole gadget.
`,
        },
      ],
    },
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
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "help-support-intro",
          title: "Help & Support",
          content: `Welcome to the Help & Support center for **Dashboard Templates, Charts, Graphs & Reports for Jira**.

Whether you are running into an unexpected error, looking for answers to common questions, or checking out the latest features we've released, this section has you covered. If you can't find the answer you need in our guides, our support team is ready to assist you.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Troubleshooting Guide** | *Step-by-step solutions for common issues, including empty charts, missing data, JQL errors, and performance slowdowns.* |
| **Release Notes & Changelog** | *Track what's new, improved, and fixed in each version of the app, including our major Version 2.0 update.* |
| **Frequently Asked Questions** | *Answers to the most common questions regarding app compatibility, data permissions, chart configuration, and the Dynamic Filter Controller.* |
| **Contact Support** | *Information on how to reach the Clovity support team, including response times, best practices for reporting issues, and how to submit feature requests.* |
`,
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
* Try different format - If PNG fails, try PDF or CSV

## Still Having Issues?

If none of these solutions work:

1. Gather information: Jira site URL, gadget type, JQL, screenshots
2. Contact support: support@clovity.com
`,
        },
        {
          slug: "release-notes-changelog",
          title: "Release Notes & Changelog",
          content: `Track what's new, improved, and fixed in each version of Custom Charts & Dashboards.

## Version 2.0 (Current)

**Release Date:** February 2025

### New Features

**Dynamic Filter Controller Gadget**

* New gadget type for interactive dashboard filtering
* Shared filter bar controls multiple connected charts and lists
* Configurable filter fields (Jira fields, text search, JQL, saved filters)
* Tabs for preset filter combinations
* Real-time updates to all connected gadgets

**2D Chart Types**

* Grouped Bar Chart - Compare multiple series side-by-side
* Stacked Bar Chart - Show composition within categories
* 2D Line Chart - Compare multiple trend lines
* 2D Table Chart - Matrix view with two grouping dimensions

**Additional Features**

* Funnel Chart and Tile Chart
* Group By feature for 2D charts
* Sum and Average calculations
* Goal, Trend, and Average reference lines
* Cumulative total option
* Smart Labels for Issue List
* Import/Export configuration

### Improvements

* Enhanced segment controls (search, pagination, color picker)
* Better JQL validation with clearer error messages
* More number formatting options
* AND/OR logic for quick filters
* User icon display option in Issue List

## Version 1.0

**Release Date:** January 2025

### Initial Release Features

* Custom Charts Gadget (Pie, Bar, Line)
* Issue List Gadget with custom columns
* Projects, Saved Filters, Custom JQL data sources
* Chart By with Jira fields, JQL segments, filter segments
* Segment controls (rename, reorder, show/hide, colors)
* Rich text descriptions
* CSV export

## Roadmap

### Planned Features

| **Feature** | **Status** |
| --- | --- |
| Template Management | Planned |
| Admin Settings | Planned |
| Date-based Chart By improvements | In Development |
| Additional chart types | Under Consideration |

## Upgrade Notes

### Upgrading from V1 to V2

**Compatibility:** V1 configurations are fully compatible with V2. Existing gadgets will continue to work. No action required for existing dashboards.

## Getting Updates

The app updates automatically through Atlassian Marketplace. No manual action is required.
`,
        },
        {
          slug: "frequently-asked-questions",
          title: "Frequently Asked Questions",
          content: `Answers to the most common questions about Custom Charts & Dashboards for Jira.

## General Questions

### What is Custom Charts & Dashboards?

Custom Charts & Dashboards is a Jira app that adds three dashboard gadgets: Custom Charts (visual reports), Issue List (configurable issue tables), and Dynamic Filter Controller (interactive filter bar).

### Which Jira versions are supported?

The app is built on Atlassian Forge and supports Jira Cloud only. It is not compatible with Jira Server or Data Center.

### How do I install the app?

Contact your Jira administrator. They can install the app from the Atlassian Marketplace.

## Data & Permissions

### What data can the app access?

The app can access Jira issues, projects, filters, and fields that you have permission to view. It cannot see data you don't have access to.

### Why can't I see certain issues in my chart?

You can only see issues you have permission to view in Jira. Check your Jira permissions and verify the project allows you to view issues.

### Does the app store my data?

The app stores your gadget configurations using Jira's built-in storage. It does not copy or export your Jira data to external systems.

## Charts & Configuration

### How do I change the chart type?

Edit the Custom Charts gadget, click on the Chart Type selector, choose your desired chart type. The chart converts automatically.

### Can I use custom fields in charts?

Yes! You can use any custom field in your Jira instance for Chart By, Group By, or Calculations.

### Why does my chart show "None" for some segments?

"None" appears when issues don't have a value for the selected field. You can rename "None" to something clearer or hide it.

### How do I export a chart?

View the gadget (not edit mode), click the options menu (•••), select PNG, PDF, or CSV.

## Dynamic Filter Controller

### What is the Reference ID?

The Reference ID is a unique code (like "ABC123") that identifies your Dynamic Filter Controller. You use it to connect other gadgets to the controller.

### How do I connect a chart to the controller?

Edit your chart, set Data Source to "Dynamic Filter Controller", select your controller from the dropdown, save.

### Why aren't my connected charts updating?

Verify the chart's data source is set to "Dynamic Filter Controller", check you selected the correct controller, try refreshing the dashboard.

## Performance

### Why is my gadget loading slowly?

Large datasets take longer to process. Narrow your JQL (add date limits, project filters), reduce segments, use saved filters.

### How many issues can the app handle?

There's no hard limit, but queries returning 50,000+ issues may be slow. Keep queries under 10,000 issues when possible.

## Still Have Questions?

If your question isn't answered here:

1. Check the Troubleshooting guide
2. Search this documentation
3. Contact support@clovity.com
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
    {
      id: "eula",
      title: "End User License Agreement (Eula)",
      articles: [
        {
          slug: "eula",
          title: "End User License Agreement (Eula)",
          content: `**End User License Agreement (EULA)**

This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and Clovity, Inc. ("Company" or "We"), governing your use of the **Custom Charts, Reports, Dashboards & Tables for Jira** application ("Software") available on the Atlassian Marketplace.

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
