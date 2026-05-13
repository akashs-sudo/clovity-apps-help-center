export const timeTrackingDocs = {
  appSlug: "time-tracking-jira",
  categories: [
    {
      id: "overview",
      slug: "overview",
      title: "Overview",
      articles: [
        {
          slug: "overview-intro",
          title: "Overview",
          content: `### Time Tracking, Resource Planning & Project Management

Time Tracking, Resource Planning & Project Management is an app that gives your team full visibility into workload, delivery health, and priorities — all inside Jira.

Track and approve time against issues

Analyze team capacity and spot delivery risks before they escalate

Score and rank your backlog using a configurable prioritization model

Monitor portfolio health across all your active projects and initiatives

All of this runs natively inside Jira Cloud, using your existing projects, issues, and Jira user management — no external tools, no data exports, no setup overhead.

### In This Section

| Page Name | Description |
| --- | --- |
| What's Included | Specifies the core modules, features, and capabilities delivered with the app |
| Benefits & Outcomes | Highlights the value this app delivers to team members, leads, managers, and admins |
| Use Cases Gallery | Presents practical, real-world scenarios showing how teams use the app day-to-day |
| Limitations & Capabilities | Defines what the app can and cannot do, including known constraints and platform requirements |`,
        },
        {
          slug: "whats-included",
          title: "What's Included",
          content: `### 1. Time Tracking, Resource Planning and Project Management - What's Included

This app extends Jira with four integrated modules that give teams and managers a unified view of time, workload, priorities, and portfolio health - all without leaving Jira.

### 2. Modules at a Glance

#### 2.1. Time Tracking

Log and manage time directly inside Jira issues. Team members submit time entries linked to specific issues; time admins review and approve or reject submissions. The module tracks estimated vs. actual time across the team and surfaces over logged or under logged issues at a glance.

**Key features:**

* Log time against any Jira issue
* Approve/reject time entries (admin)
* View time logs by issue, assignee, or date range
* Time unit toggle: hours or story points

#### 2.2. Capacity Analytics

Analyze team workload and delivery health using issue data pulled directly from Jira. Set a project and date range as your scope, then explore four analytical tabs:

* Team Allocation - distribution of issues across the team by status, priority, and type
* Assignee Capacity - per-person workload, time estimates vs. actual, and issue counts
* Upcoming Deadlines & Risks - issues approaching or past due dates, prioritized by risk level
* Status Aging Monitor - issues stuck in a status too long, highlighting delivery bottlenecks

#### 2.3. Backlog Prioritization

Score and rank backlog items using a configurable scoring model. Apply weighted criteria (business value, urgency, effort, risk) to surface the highest-impact work. Create prioritization plans and compare scenarios before committing to a sprint.

**Key features:**

* Configurable scoring criteria with weights
* Bulk scoring of backlog items
* Saved prioritization plans
* Export scored backlog to CSV

#### 2.4. Portfolio Management (PPM)

Get a bird's-eye view of all active projects, epics, and initiatives. Track delivery progress, budget health, and cross-project dependencies in one place.

**Key features:**

* Portfolio-level timeline and progress tracking
* Project health indicators
* Dependency mapping between epics
* Executive summary reports

### 3. Supporting Capabilities

| Capability | Description |
| --- | --- |
| **Role-Based Access Control (RBAC)** | Manage who can do what across all modules |
| **Settings** | Configure time units, display preferences, and default behaviors |
| **My Permissions** | Each user can view their own role and what they are allowed to do |`,
        },
        {
          slug: "benefits-outcomes",
          title: "Benefits & Outcomes",
          content: `This app was built to close the visibility gap between what teams are working on, how much capacity they have, and what they should be working on next.

### 1. For Team Members

**Clarity on what matters** Backlog prioritization gives every team member a ranked, scored view of the backlog so daily decisions are grounded in business impact rather than gut feel or recency bias.

**Effortless time logging** Log time without leaving Jira. No context switching to external tools, no manual CSV imports, no end-of-week guesswork about where time went.

**Transparency into your own standing** The My Permissions tab shows each user exactly what role they hold and what actions they can perform — no surprises when they try to use a feature.

### 2. For Team Leads & Project Managers

**Real workload visibility** The Assignee Capacity tab shows each person's issue load, estimated hours, and logged hours side-by-side. Spot over-allocation before it becomes a missed deadline.

**Early risk detection** The Deadlines & Risks tab surfaces issues that are approaching or past their due dates, grouped by severity. Act before the stakeholder escalation, not after.

**Fewer blocked conversations** Status Aging Monitor highlights issues that have been sitting in the same status too long — whether that's "In Review" or "Waiting for Input" — so you can unblock the right person at the right time.

### 3. For Engineering Managers & Directors

**Honest capacity planning** Stop planning sprints based on headcount. Use actual logged time and current issue distribution to set realistic sprint commitments.

**Prioritization that sticks** When backlog ranking is driven by a shared, configurable scoring model, there is a defensible record of why certain items were promoted. Reduces stakeholder negotiation cycles.

**Portfolio health at a glance** See all projects in one view with progress, budget status, and flagged risks — without needing to open ten separate boards.

### 4. For Jira Admins

**Lightweight role management** RBAC is managed entirely within the app. Assign or revoke the Member role from a simple user list. Global Admin access is inherited automatically from Jira — no duplicate configuration.

**No infrastructure overhead** The app runs entirely on Atlassian Forge. No servers to maintain, no external databases, no third-party services.

### 5. Measurable Outcomes

| Outcome | How the App Delivers It |
| --- | --- |
| Reduce sprint overcommitment | Capacity Analytics shows real availability before planning |
| Surface delivery risk earlier | Deadlines & Risks and Status Aging tabs flag issues proactively |
| Improve backlog quality | Scoring model makes prioritization consistent and auditable |
| Save time on reporting | Portfolio views and exportable data replace manual status decks |
| Reduce RBAC admin burden | Two-role model (Global Admin / Member) is simple to manage |`,
        },
        {
          slug: "use-cases-gallery",
          title: "Use Cases Gallery",
          content: `Real scenarios showing how teams use this app across different situations.

### 1. Sprint Capacity Check Before Planning

**Who:** Engineering Manager
**When:** Sprint planning day

Before committing to a sprint scope, the manager opens Capacity Analytics, sets the project and the upcoming two-week window, and reviews the Assignee Capacity tab. Three engineers have carryover issues with significant remaining estimates. The manager adjusts the sprint scope down by 20% before the planning meeting — avoiding the usual mid-sprint scramble.

**Modules used:** Capacity Analytics → Assignee Capacity tab

### 2. Identifying a Delivery Bottleneck

**Who:** Team Lead
**When:** Mid-sprint check-in

The team's velocity feels off but no one can pinpoint why. The lead opens the Status Aging Monitor for the current sprint window. Six issues have been in "In Review" for more than five days — all assigned to the same reviewer. The lead reassigns two reviews and unblocks the queue in one conversation.

**Modules used:** Capacity Analytics → Status Aging Monitor tab

### 3. Quarterly Backlog Grooming

**Who:** Product Manager + Tech Lead
**When:** End of quarter

Before the quarterly planning session, the PM creates a new prioritization plan in Backlog Prioritization. They score 40 backlog items using the weighted model (business value × 40%, effort × 30%, risk × 30%). The resulting ranked list becomes the input for the planning session, replacing a subjective spreadsheet that previously took two hours to prepare.

**Modules used:** Backlog Prioritization

### 4. Escalation-Ready Progress Report

**Who:** Director of Engineering
**When:** Monthly executive review

The director opens Portfolio Management and exports a summary for three active projects. Each project shows delivery percentage, budget burn, and any flagged risks. The five-minute report replaces a 45-minute slide preparation exercise.

**Modules used:** Portfolio Management (PPM)

### 5. Time Audit for a Completed Project

**Who:** Delivery Manager
**When:** Project retrospective

After a project closes, the delivery manager reviews time logs across all team members for the project duration. They compare estimated vs. actual hours per issue type to identify where estimation accuracy broke down — informing planning norms for the next project.

**Modules used:** Time Tracking

### 6. Onboarding a New Team Member

**Who:** Jira Admin
**When:** New hire starts

A new developer joins. The Jira Admin opens the RBAC → User Roles tab, finds the new user, and assigns the Member role. The developer now has access to log time, view capacity data, participate in backlog scoring, and view portfolio summaries. They can see exactly what they can do in the My Permissions tab.

**Modules used:** RBAC → User Roles, My Permissions

### 7. Flagging At-Risk Deadlines to Stakeholders

**Who:** Project Manager
**When:** Weekly stakeholder update

The PM filters the Upcoming Deadlines & Risks tab to the current project and exports the list of overdue and high-risk items. They paste the table into the stakeholder update, with no manual issue hunting across the board.

**Modules used:** Capacity Analytics → Deadlines & Risks tab`,
        },
        {
          slug: "limitations-capabilities",
          title: "Limitations & Capabilities",
          content: `An honest overview of what this app can and cannot do.

### 1. What the App Can Do

| Area | Capability |
| --- | --- |
| Time Tracking | Log, edit, approve, and reject time entries linked to Jira issues |
| Capacity Analytics | Fetch and analyze all issues in a project within a date range, with progress tracking |
| Backlog Prioritization | Score, rank, and save prioritization plans for backlog items |
| Portfolio Management | View cross-project health, progress, and dependencies |
| RBAC | Assign/revoke the Member role; auto-detect Jira Global Admins |
| Data Source | Reads directly from Jira via the Atlassian Forge platform |
| Export | CSV export for scored backlogs and reports |

### 2. Known Limitations

**RBAC model is intentionally simple** The app supports exactly two effective access levels: Global Admin (inherited from Jira) and Member (manually assigned). There are no custom roles, granular permission matrices, or per-project role scoping. Users with neither role get default read-only access.

**Capacity Analytics requires a date range** You must select both a project and a date range before any data loads. There is no "all-time" view. For large projects with many issues, initial load may take 30–60 seconds as all matching issues are fetched from the Jira API.

**Time Tracking is issue-level only** Time entries are logged against individual Jira issues. There is no free-form time logging, no billable/non-billable distinction, and no payroll or invoice integration.

**No real-time collaboration** The app does not push live updates. Data reflects the state at the time of the last load. Users need to refresh manually to see changes made by others.

**Jira Cloud only** This app runs on Atlassian Forge and is only compatible with Jira Cloud instances. Jira Server and Jira Data Center are not supported.

**Global Admin cannot be managed inside the app** Global Admin access is determined entirely by Jira's user management (group membership). To add or remove a Global Admin, the Jira site admin must make the change in Jira — the app reflects it automatically on next load.

**No email or notification integration** The app does not send emails, Slack messages, or Jira notifications. Risk flags and overdue deadlines are visible in the app only — users must check the app proactively.

### 3. Platform Constraints (Forge)

| Constraint | Impact |
| --- | --- |
| Forge storage limits | App data (roles, time logs) stored in Forge KVS; large datasets may approach limits |
| API rate limits | Jira REST API rate limits apply; large issue fetches use backoff/retry automatically |
| No background scheduled jobs beyond Forge scheduler | Reporting data is always pulled on-demand, not pre-aggregated overnight |`,
        },
      ],
    },
    {
      id: "getting-started",
      slug: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "getting-started-intro",
          title: "Getting Started",
          content: `### 1. Getting Started with Time Tracking, Resource Planning & Project Management

Everything you need to start using the app from day one — whether you are a team member logging your first time entry, a manager running a capacity check, or an admin setting up roles for your team.

* Find the app inside your Jira Cloud instance
* Understand what you can do based on your role
* Navigate the interface and run your first analysis

All it takes is a Jira account and the right role assignment. No installation on your machine, no external logins, no configuration files.

### 2. In This Section

| Page Name | Description |
| --- | --- |
| Accessing the App | Explains where to find the app in Jira, prerequisites, role requirements, and how to request access |
| Understanding the Interface | Walks through the layout, navigation, key UI elements, and module-by-module interface guide |`,
        },
        {
          slug: "accessing-the-app",
          title: "Accessing the App",
          content: `### 1. Prerequisites

Before you can use this app, the following must be true:

1. The app has been installed on your Jira Cloud site by a Jira administrator.
2. You have a Jira account on that site with at least Browse Projects permission.
3. You have been assigned the **Member** role (or you are a **Global Admin**) if you want to do anything beyond read-only viewing.

If you are unsure whether the app is installed, ask your Jira administrator.

---

### 2. How to Open the App

**From the Jira navigation:**

1. Log in to your Jira Cloud site.
2. In the left sidebar, look for the app entry labelled **"Time Tracking, Resource Planning & Project Management"**.
3. Click the app name to open it.

### 3. First-Time Experience

When you open the app for the first time, you will see the **Time Tracking** module by default. A brief guide overlay may appear to orient you — you can dismiss it or choose not to show it again.

The top navigation bar shows the four modules:

* Time Tracking
* Capacity Analytics
* Backlog Prioritization
* Portfolio Management

A **Settings** link is also available for users with admin access.

### 4. Access Levels

What you see and can do depends on your role:

| Role | How you get it | What you can do |
| --- | --- | --- |
| **Global Admin** | Automatically — if you are a Jira site administrator | Full access to all features, settings, and RBAC management |
| **Member** | Assigned by a Global Admin inside the app | Log time, run capacity analysis, score backlogs, view portfolio |
| **No role (default)** | Automatic — all Jira users without an assigned role | Read-only access; cannot log time, approve, or modify data |

To check your own role and permissions, open **Settings → My Permissions**.

### 5. Requesting Access

If you open the app and find that key features are greyed out or unavailable:

1. Open **Settings → My Permissions** to confirm your current role.
2. If you have no role assigned, contact your Jira Admin or the person who manages this app.
3. Ask them to assign you the **Member** role from **Settings → RBAC → User Roles**.

There is no self-service role request form — access is granted by a Global Admin.

### 6. Switching Modules

Use the top navigation tabs to switch between modules. Your scope and filter selections within each module are preserved while you stay in the same session. Navigating away from the app and returning will reset your session state.`,
        },
        {
          slug: "understanding-interface",
          title: "Understanding Interface",
          content: `### Overall Layout

The app uses a consistent layout across all modules:

| **Area** | **Location** | **Purpose** |
| --- | --- | --- |
| App Switcher | Top of sidebar | Switch between the 4 modules (Capacity, Time, Backlog, Portfolio) |
| Sidebar Navigation | Left panel | Navigate between sections within the active module |
| Content Area | Right panel (main) | Displays the active section's content |

### Module Navigation (Top Tabs)

The top of the page contains tabs for each module:

| Tab | What it opens |
| --- | --- |
| **Time Tracking** | Log, review, and approve time entries |
| **Capacity Analytics** | Analyse team workload for a selected project and date range |
| **Backlog Prioritization** | Score and rank backlog items |
| **Portfolio Management** | Cross-project overview and health metrics |

Click any tab to switch modules. The active tab is highlighted.

### Capacity Analytics — Interface Walk-through

Since Capacity Analytics is the most interactive module, here is a detailed walk-through of its interface.

#### The Scope Button

When you first open Capacity Analytics, you will see a **Scope** button in the top-right area. This is your starting point.

* Click **Scope** to open a modal dialog.
* Select a **Project** from the dropdown (all your Jira projects are listed).
* Select a **Date Range** using the date picker (both From and To dates are required).
* Click **Apply**.

The button label updates to show your selected project and date range (e.g., \`My Project (PROJ) • 2025-01-01 – 2025-03-31\`).

#### Loading Indicator

After clicking Apply, the app fetches all matching issues from Jira. A loading overlay appears with a progress indicator showing how many issues have been loaded so far (e.g., "Loading issues… 150 / 430").

Large projects may take 30–60 seconds. Do not navigate away during loading.

#### Assignee Filter

Once issues are loaded, an **All Assignees** dropdown appears next to the Scope button. Use it to filter all tabs down to a single team member's issues.

#### Analysis Tabs

Four tabs appear below the filter bar:

| Tab | What it shows |
| --- | --- |
| **Team Allocation** | Issue distribution by status, type, and priority across the team |
| **Assignee Capacity** | Per-person breakdown of issue count, estimates, and logged time |
| **Upcoming Deadlines & Risks** | Issues near or past their due date, sorted by risk level |
| **Status Aging Monitor** | Issues that have been in the same status for an unusually long time |

Click any tab to switch the main content area. Your scope and assignee filter apply across all tabs.

### Settings — Interface Walk-through

Access Settings from the navigation. The Settings page is tabbed:

| Tab | Purpose |
| --- | --- |
| **General** | App-wide preferences (e.g., default time unit: hours or story points) |
| **Time Tracking** | Time tracking module settings |
| **Capacity** | Capacity module display settings |
| **Backlog** | Scoring model configuration |
| **RBAC → User Roles** | Assign/revoke Member role for users |
| **My Permissions** | View your own role, permissions, and what you cannot do |

A **Save** button appears at the bottom of Settings for tabs that have editable settings. The Save button is hidden on the **My Permissions** tab (it is read-only).

### My Permissions Tab — What You Will See

The My Permissions tab gives each user a personal view of their access level.

**KPI Cards (top row):**

* **Assigned Roles** — how many roles you hold (1 for Global Admin or Member, 0 for no role)
* **Total Permissions** — number of individual permissions granted ("All" for Global Admin)
* **Module Access** — number of modules you have access to

**Your Roles section:**

* Displays your role as a coloured card (red for Global Admin, blue for Member)
* If no role is assigned, shows a grey "No role assigned" state`,
        },
      ],
    },
    {
      id: "capacity-planner",
      slug: "capacity-planner",
      title: "Capacity Planner & Insight",
      articles: [
        {
          slug: "capacity-planner-insight-overview",
          title: "Capacity Planner & Insight",
          content: `The Capacity Planner & Insight module provides enterprise-grade workforce planning and analytics capabilities designed to optimize resource allocation, identify delivery constraints, and enable data-driven capacity decisions. This integrated solution consolidates capacity planning, configuration management, detailed reporting, and visual analytics into a unified interface for program managers, delivery leads, and resource planners.

Organizations use this module to maintain visibility across distributed teams, proactively manage workload distribution, mitigate delivery risks, and ensure optimal resource utilization throughout the project lifecycle.

### 1. Core Capabilities

#### 1.1. Strategic Planning

Forecast and allocate capacity across organizational hierarchies including individuals, teams, and functional groups

#### 1.2. Workload Analysis

Compare planned commitments against available capacity to identify allocation gaps and resource constraints

#### 1.3. Configuration Management

Store and reuse standardized planning templates for consistent capacity management practices

#### 1.4. Enterprise Reporting

Generate comprehensive capacity reports with multi-dimensional filtering, grouping, and time-series analysis

#### 1.5. Risk Intelligence

Visualize workload distribution, deadline exposure, and workflow efficiency through purpose-built dashboards

### 2. Functional Components

| Component | Primary Function | Key Users |
| --- | --- | --- |
| Capacity Planner | Build and visualize resource allocation plans using timesheet-style planning interfaces with configurable time horizons and organizational filters | Resource Managers, Delivery Leads, Program Managers |
| Saved Plans Repository | Maintain reusable planning configurations to ensure consistency and reduce setup time for recurring planning activities | Scrum Masters, Resource Coordinators |
| Capacity Reports | Analyze planned capacity through structured tabular views with advanced filtering, grouping, and temporal breakdown options | Project Managers, Portfolio Managers, Stakeholders |
| Analytics Dashboard | Monitor team health, resource utilization, deadline risk, and workflow efficiency through visual analytics and key performance indicators | Leadership, Delivery Directors, Operations Teams |

### 3. Implementation Guide

1. **Access the Module** — Navigate to **Capacity Planner & Insight** from the primary application navigation menu.
2. **Select Functional Area** — Choose the appropriate section based on your planning or analysis objective:
   * **Planner** – Create new capacity allocations
   * **Saved Plans** – Access existing planning templates
   * **Reports** – Generate detailed capacity analysis
   * **Analytics Dashboard** – Review visual insights and KPIs
3. **Configure Filters** — Apply relevant filters to scope your analysis: project or program selection, user/team/group assignment, date range and planning horizon, view mode and display preferences.
4. **Generate View** — Execute the planner, report, or dashboard generation based on your selected parameters.
5. **Save Configuration (Optional)** — For frequently used planning setups, save the configuration to the Saved Plans repository for rapid access in future planning cycles.

### 4. Use Cases

#### 4.1. Resource Planning & Allocation

* Forecast team capacity requirements for upcoming sprints, quarters, or fiscal periods
* Allocate resources across multiple concurrent projects or initiatives
* Model capacity scenarios to evaluate different resource distribution strategies

#### 4.2. Workload Optimization

* Identify underutilized resources and redistribute work to improve efficiency
* Detect over-allocation conditions before they impact team performance or morale
* Balance workload distribution across team members to prevent burnout

#### 4.3. Delivery Risk Management

* Monitor issue deadline exposure to proactively address potential delivery slippage
* Track workflow status aging to identify bottlenecks and process inefficiencies
* Generate risk reports for stakeholder communication and escalation

#### 4.4. Operational Efficiency

* Leverage saved planning configurations to accelerate recurring planning activities
* Standardize capacity planning practices across multiple teams or departments
* Reduce manual effort through reusable templates and automated report generation

### 5. Analytics Framework

The Analytics Dashboard provides multi-dimensional project intelligence through four integrated analytical views. To activate analytics, select a project from the dropdown selector.

| Analytics View | Business Question Addressed | Key Insights |
| --- | --- | --- |
| **Team Allocation** | How is work distributed across the organization? | Work distribution patterns, team load balancing, assignment concentration |
| **Assignee Capacity** | Are resources over or under-committed? | Capacity utilization rates, availability vs. demand, resource constraints |
| **Deadlines & Risk** | Which deliverables are at risk of missing deadlines? | Deadline proximity, overdue items, at-risk work identification |
| **Status Aging** | Where is work getting stuck in the workflow? | Cycle time analysis, bottleneck identification, process efficiency metrics |

### 6. Business Value & Outcomes

The Capacity Planner & Insight module enables organizations to transition from reactive resource management to proactive, data-driven capacity planning. Key business outcomes include:

* **Enhanced Visibility** – Comprehensive view of resource allocation, workload distribution, and capacity utilization across the organization
* **Accelerated Planning** – Reduced planning cycle time through reusable configurations and automated capacity analysis
* **Risk Mitigation** – Early identification of delivery risks, capacity constraints, and workflow bottlenecks
* **Informed Decision Making** – Data-driven insights supporting resource allocation, priority setting, and strategic planning
* **Operational Consistency** – Standardized planning practices and reporting templates across teams and departments
* **Resource Optimization** – Improved utilization rates through proactive workload balancing and constraint identification`,
        },
        {
          slug: "capacity-planner",
          title: "Capacity Planner",
          content: `The Planner section provides a timesheet-style capacity view with nested grouping, similar to the Time-Tracking report builder.

### Creating a Plan

* Go to Capacity > Planner in the sidebar
* Click 'Create New Planner'
* Select users, groups, or teams to include
* Choose a date range and view mode (Days, Weeks, Months)
* The planner generates a capacity distribution report`,
        },
        {
          slug: "analytics-dashboard",
          title: "Analytics Dashboard",
          content: `The Capacity module provides analytics dashboards to understand team workload, individual capacity, deadline risks, and workflow health.

Select a project from the dropdown at the top, then navigate between analytics tabs.

| **Tab** | **What It Shows** | **Charts** |
| --- | --- | --- |
| Team Allocation | How work is distributed across team members | Bar chart of issues per assignee, status breakdown |
| Assignee Capacity | Individual workload vs. available capacity | Stacked bar showing allocated vs. free capacity |
| Deadlines & Risk | Issues approaching or past due date | Timeline chart with risk indicators (red/amber/green) |
| Status Aging | How long issues have been in their current status | Aging chart showing days in status per issue |

### Using Filters

* Select a Project from the top dropdown (required)
* Issues for the selected project load automatically
* Each tab filters and visualizes the same issue set differently

**Tip:** If a project has many issues, the initial load may take a few seconds. The spinner indicates data is being fetched.`,
        },
        {
          slug: "saved-plans",
          title: "Saved Plans",
          content: `Saved plans preserve your planner configuration for future use.

* After configuring a planner, click 'Save'
* Saved plans appear in the Saved Plans sidebar section
* Click any saved plan to reload its configuration and regenerate data
* Delete plans you no longer need from the list`,
        },
        {
          slug: "capacity-report",
          title: "Capacity Report",
          content: `The Reports section shows your planned capacity data in a detailed tabular report view with advanced filtering and grouping capabilities. You can filter by projects, users, and date ranges, group results by assignee, project, issue type, or sprint, and save configurations to re-run reports at any time.

* **View detailed breakdown** - See time entries organized by projects, issues, assignees, or custom fields
* **Filter your data** - Focus on specific projects, accounts, time categories, or date ranges
* **Multi-level grouping** - Group by project → issue → date for hierarchical time breakdown
* **Day-by-day breakdown** - Each column shows planned time for specific dates in your selected range`,
        },
      ],
    },
    {
      id: "time-tracking",
      slug: "time-tracking",
      title: "Time Tracking and Reporting",
      articles: [
        {
          slug: "time-tracking-reporting-overview",
          title: "Time Tracking and Reporting",
          content: `### Time Tracking

The **Time Tracking module** helps teams log work against Jira issues, monitor time spent on tasks, and generate detailed reports for analysis and billing. It provides multiple views and tools that allow users to track their work efficiently and understand how time is distributed across projects, issues, and activities.

With features like **calendar-based time logging, customizable reports, advanced filtering, and account-based tracking**, the module enables both individuals and teams to maintain accurate work records and gain valuable productivity insights.

### Key Capabilities

| **Feature** | **Description** |
| --- | --- |
| **Log Time on Jira Issues** | Track work by logging time directly against Jira issues, ensuring accurate records of effort spent on tasks. |
| **Personal Time Calendar** | Use a calendar view to quickly review daily worklogs and identify days with missing entries. |
| **Detailed Timesheet Reports** | Generate powerful tabular reports with advanced filtering and hierarchical grouping. |
| **Customizable Report Builder** | Create nested reports using filters, grouping dimensions, charts, and export options. |
| **Account-Based Time Tracking** | Categorize worklogs using billing accounts or client codes to support reporting and invoicing. |
| **Custom Worklog Fields & Categories** | Capture additional information during time logging using custom fields and activity categories. |`,
        },
        {
          slug: "my-calendar",
          title: "My Calendar",
          content: `The My Calendar section shows your logged time in a monthly calendar view.

* Each day cell shows total hours logged
* Hover on day cell to see total hours logged for that date
* Drag issues from the sidebar to log time on a specific day

**Tip:** Use the calendar to quickly spot days with no time logged and fill in missing entries.`,
        },
        {
          slug: "my-timesheet",
          title: "My Timesheet",
          content: `The My Timesheet section shows your logged time in a detailed tabular report view with advanced filtering and grouping capabilities.

* **View detailed breakdown** - See time entries organized by projects, issues, assignees, or custom fields
* **Filter your data** - Focus on specific projects, accounts, time categories, or date ranges
* **Multi-level grouping** - Group by project → issue → date for hierarchical time breakdown
* **Day-by-day breakdown** - Each column shows hours logged for specific dates in your selected range

**Tip:** Use the timesheet view to review your weekly/monthly time entries and identify patterns in your work. Click "Add Filter" to customize exactly what you want to see.`,
        },
        {
          slug: "timesheet-and-reporting",
          title: "Timesheet and Reporting",
          content: `The Time-Tracking module lets you log work time against Jira issues, build customizable nested reports, view a personal calendar, and manage accounts.

The Timesheet section is the primary landing page. It shows a list of saved report configurations and lets you create new ones.

### Report List

* All saved reports appear in a searchable, sortable table
* Columns: Name, Created date
* Click any report name to open it
* Click the trash icon to delete a report

### Creating a New Report

* Click 'Create Report' at the top right
* A new untitled report opens in the Report Builder

### Report Builder

The Report Builder is the core of time reporting. It has these components:

| **Component** | **Description** |
| --- | --- |
| Report Name | Click the title to rename. Auto-saves on blur. |
| Filter & Group By | Click 'Add Filter' button to open the Filters |
| Date Range Picker | Select From and To dates to scope the report |
| View Mode Toggle | Switch between Days, Weeks, Months view |
| Log Time Button | Quick-log time without leaving the report |
| Export Button | Export the report as CSV or PDF |
| Chart Section | Visual bar/pie chart of logged time |
| Nested Table | Multi-level grouped table showing worklogs |`,
        },
        {
          slug: "filters-and-grouping",
          title: "Filters and Grouping",
          content: `Click 'Add Filter' in the Report Builder to open the combined filter and grouping modal.

### Filter Options

| **Filter** | **Type** | **Description** |
| --- | --- | --- |
| Projects | Multi-select | Filter worklogs by one or more Jira projects |
| Users | Multi-select | Filter by specific team members (search by name) |
| Accounts | Multi-select | Filter by billing account (if configured) |
| Time Categories | Multi-select | Filter by time category (e.g., Development, QA) |
| Jira Groups | Multi-select | Filter by Jira group membership |

### Group By Options

Add one or more grouping dimensions. The report nests rows hierarchically in the order you add them.

| **Group By** | **Description** |
| --- | --- |
| Project | Group by Jira project |
| Assignee | Group by the person who logged time |
| Issue (Key + Summary) | Group by individual issue |
| Issue Type | Group by type (Epic, Story, Task, Bug) |
| Priority | Group by priority (Highest, High, Medium, Low, Lowest) |
| Status | Group by issue status (To Do, In Progress, Done) |
| Reporter | Group by issue reporter |
| Label | Group by Jira labels |
| Sprint | Group by sprint |
| Parent | Group by parent issue (for subtasks) |`,
        },
        {
          slug: "billing-accounts",
          title: "Billing Accounts",
          content: `Accounts let you categorize time against billing codes or client accounts.

### Managing Accounts

* Go to Time-Tracking > Accounts in the sidebar
* Click 'Create Account' to add a new account
* Each account has: Name, Key (unique code), Status (Active/Inactive)
* Accounts can have custom worklog fields attached to them

| **Field** | **Required** | **Description** |
| --- | --- | --- |
| Account Name | Yes | Display name (e.g., 'Client ABC - Phase 2') |
| Account Key | Yes | Unique identifier (e.g., 'CLIENT-ABC-P2') |
| Status | Yes | Active or Inactive. Only active accounts appear in time logging. |

### Using Accounts When Logging Time

* When logging time on an issue, select an Account from the dropdown
* The account is stored as worklog metadata alongside the Jira worklog
* Filter reports by Account to see time spent per client/billing code`,
        },
        {
          slug: "time-tracking-setting",
          title: "Time-Tracking Settings",
          content: `Accessible from Time-Tracking > Settings in the sidebar.

| **Setting** | **Options** | **Default** |
| --- | --- | --- |
| Time Display Unit | Jira default, Hours/Minutes, Hours, Days, Weeks, Months | Jira default |
| Default Time Range | Current month, quarter, year, week, day, last 7 days | Current month |
| Timezone Mode | Jira timezone, User's timezone, My timezone | Jira timezone |
| First Day of Week | Sunday through Saturday | Monday |
| Working Days | Checkboxes for each day | Mon-Fri |
| Hours Per Day | Number input | 8 |

### Worklog Custom Fields

Admins can create custom fields that appear when logging time.

* Go to Settings > Worklog Fields tab
* Click 'Add Field' to create a new custom field
* Field types: Text, Number, Dropdown, Checkbox

### Time Categories

Categories let you classify time entries (e.g., Development, Code Review, Meetings).

* Go to Settings > Time Categories tab
* Create, edit, or delete categories
* Categories appear as a dropdown when logging time`,
        },
      ],
    },
    {
      id: "portfolio-management",
      slug: "portfolio-management",
      title: "Project Portfolio Management",
      articles: [
        {
          slug: "portfolio-management-overview",
          title: "Project Portfolio Management",
          content: `The Portfolio Management module delivers comprehensive cross-project visibility and strategic planning capabilities for enterprise organizations managing complex project portfolios. This unified solution consolidates work items from multiple Jira projects into cohesive portfolio views, enabling executive leadership, program managers, and delivery teams to track strategic initiatives, assess delivery health, and make informed portfolio-level decisions.

By aggregating project data into customizable portfolio perspectives, organizations gain the clarity needed to align tactical execution with strategic objectives, identify cross-project dependencies, optimize resource allocation, and communicate progress to stakeholders at appropriate levels of abstraction.

### 1. Strategic Capabilities

#### 1.1. Multi-Project Orchestration

Aggregate and manage work items across organizational project boundaries into unified portfolio constructs

#### 1.2. Advanced Filtering

Define portfolio scope using guided manual filters or sophisticated JQL queries for precise work item selection

#### 1.3. Multi-Modal Visualization

Analyze portfolio data through table, timeline, chart, treemap, and board visualization modes optimized for different stakeholder needs

#### 1.4. Portfolio Persistence

Store and retrieve portfolio configurations to ensure consistency and eliminate redundant setup across planning cycles

#### 1.5. Scheduling Framework

Configure date mapping, calendar rules, and planning parameters to ensure accurate timeline visualization and forecasting

### 2. Functional Architecture

| Component | Primary Function | Business Value |
| --- | --- | --- |
| Portfolio Creation | Define portfolio composition, apply filtering criteria, configure naming conventions, and establish reusable portfolio structures | Enables controlled aggregation of cross-project work for strategic tracking and analysis |
| Visualization Engine | Render portfolio data across multiple view types optimized for different analytical and communication requirements | Supports stakeholder-appropriate presentation of portfolio status and delivery progress |
| Portfolio Repository | Maintain library of saved portfolio configurations with preserved filters, scope definitions, and view preferences | Accelerates portfolio access and ensures consistency in recurring portfolio reviews |
| Configuration Management | Establish date field mappings, calendar parameters, and scheduling conventions for portfolio-level planning | Ensures accurate timeline visualization and dependency analysis across heterogeneous project structures |

### 3. Implementation Workflow

1. **Access Portfolio Management** — Navigate to **Portfolio (PPM)** from the primary application navigation interface.
2. **Initialize Portfolio** — Create a new portfolio or select an existing saved portfolio from the portfolio repository.
3. **Define Portfolio Scope** — Configure the portfolio composition using one of the available filtering mechanisms:
   * **Manual Filters** – Guided field-based filtering for standard portfolio definitions
   * **Saved Filters** – Uses Jira's saved filters to define which issues populate the portfolio view
   * **JQL Queries** – Advanced query language for complex filtering requirements
4. **Persist Portfolio Configuration** — Save the portfolio configuration to the repository once scope definition is complete.
5. **Select Visualization Mode** — Switch between available view types to analyze portfolio data from different strategic perspectives.
6. **Configure Planning Parameters (As Required)** — Adjust portfolio settings to define date field mappings, calendar rules, and scheduling conventions.

### 4. Visualization Framework

The Portfolio Management module supports six distinct visualization modes, each optimized for specific analytical or communication objectives.

#### 4.1. Table View – Structured Data Analysis

**Purpose:** Detailed examination of portfolio work items with support for hierarchical grouping, custom field display, and bulk data analysis. Optimal for operational teams requiring granular issue-level visibility.

#### 4.2. Gantt Chart – Schedule & Roadmap Planning

**Purpose:** Interactive timeline with horizontal task bars for visualizing schedules, durations, and deadlines. Supports four dependency types (FS/SS/FF/SF) with lag/lead, critical path highlighting, baseline comparison, milestones, and drag-to-reschedule.

#### 4.3. Graph View – Portfolio Structure & Overview

**Purpose:** Visual hierarchy flowchart displaying portfolio structure as connected node cards in a top-down tree layout. Each card shows project, epic, or issue details with progress indicators and completion stats.

#### 4.4. Treemap View – Proportional Distribution Analysis

**Purpose:** Nested hierarchical blocks illustrating relative size, progress, and distribution of work across portfolio dimensions. Effective for capacity analysis and visual pattern recognition.

#### 4.5. Pie Chart View – Percentage-Based Composition

**Purpose:** Proportional breakdown of portfolio composition by configurable dimensions such as project, status, priority, or custom attributes. Ideal for executive reporting and high-level status communication.

#### 4.6. Board View – Workflow & Status Tracking

**Purpose:** Kanban-style layout presenting work item flow through defined workflow states. Supports team-level tracking, bottleneck identification, and workflow efficiency analysis.

### 5. Filtering Methodology

Portfolio scope can be defined through three complementary filtering approaches.

#### 5.1. Manual Filter Configuration

Guided interface providing field-based filtering across common Jira dimensions including project selection, assignee and team-based filtering, issue type/status/priority criteria, date range constraints, and sort order preferences.

#### 5.2. Saved Filter Configuration

Allows users to select and reuse pre-existing Jira saved filters as the data source for a portfolio, enabling consistent and centrally managed issue scoping.

#### 5.3. JQL Query Definition

Advanced filtering using Jira Query Language (JQL) syntax enabling complex boolean logic, nested conditions, custom field filtering, and dynamic portfolio scope based on project state.

### 6. Use Cases

#### 6.1. Strategic Initiative Tracking

* Consolidate cross-project work supporting strategic initiatives into unified portfolio views
* Track initiative progress against organizational objectives and key results (OKRs)
* Visualize initiative roadmaps spanning multiple delivery teams and projects

#### 6.2. Program & Portfolio Governance

* Monitor delivery health across organizational project portfolios
* Identify cross-project risks, dependencies, and resource constraints
* Generate portfolio-level status reports for governance forums and steering committees

#### 6.3. Stakeholder Communication

* Produce executive-appropriate visualizations abstracting technical project detail
* Communicate delivery timelines and milestone achievement to non-technical stakeholders
* Maintain saved portfolios for consistent reporting in recurring stakeholder briefings

#### 6.4. Resource & Capacity Planning

* Analyze work distribution across teams, projects, and organizational units
* Identify resource allocation patterns and capacity constraints
* Support portfolio rebalancing decisions based on delivery capacity analysis

#### 6.5. Dependency & Risk Management

* Visualize cross-project dependencies through timeline-based views
* Identify delivery risks emerging from schedule conflicts or resource contention
* Enable proactive risk mitigation through early dependency visibility

### 7. Configuration Management

Portfolio settings establish the foundational parameters governing schedule visualization, timeline calculation, and date-based planning across all portfolio views.

#### 7.1. Date Field Mapping

Define which Jira fields serve as authoritative sources for portfolio scheduling:

* Start Date Field – Jira field representing work item commencement
* End Date Field – Jira field representing work item completion target
* Support for custom date fields accommodating organizational planning conventions

#### 7.2. Calendar & Schedule Configuration

Establish working day definitions and calendar parameters affecting timeline calculations:

* Working day patterns and organizational holiday calendars
* Time zone considerations for distributed portfolio execution
* Planning unit preferences (days, weeks, sprints) for timeline granularity`,
        },
        {
          slug: "creating-a-portfolio",
          title: "Creating a Portfolio",
          content: `The Portfolio module provides cross-project roadmap visualization with multiple view types, JQL-powered filtering, and a Gantt timeline.

* Navigate to Portfolio > Portfolio Roadmap
* Click 'New Portfolio'
* Click the title to rename your portfolio
* Click 'Filter' to set up which issues to include
* Click 'Save' to persist your portfolio

### Filter Types

| **Filter Mode** | **How It Works** |
| --- | --- |
| Manual Filter | Select Project, Assignee, Issue Type, Date Range, Status, Sort individually from dropdowns |
| JQL Filter | Write a JQL query for full control (e.g., project = 'Mobile' AND type = Epic AND status != Done) |

### Manual Filter Fields

| **Field** | **Description** |
| --- | --- |
| Project | Select one or more projects |
| Assignee | Filter by assigned users |
| Issue Type | Epic, Story, Task, Subtask, Bug |
| Start Date / Due Date | Date range boundaries |
| Epic Status / Issue Status | Filter by workflow status |
| Sort By / Order | Default sort field and direction |`,
        },
        {
          slug: "view-types",
          title: "View Types",
          content: `Switch views using the View Selector dropdown in the toolbar.

| **View** | **Description** | **Best For** |
| --- | --- | --- |
| Table View | Detailed list with columns: Summary, Assignee, Status, Priority. Expandable hierarchy. Group by: Hierarchy, Issue Type, Assignee, Project. | Detailed editing and bulk review |
| Gantt Chart | Interactive task timeline with dependencies, critical path, baselines, and drag-to-schedule. | Roadmap presentations and timeline planning |
| Graph View | Visual hierarchy flowchart displaying portfolio structure as connected node cards in a top-down tree layout. | Portfolio structure visualization and high-level overview. |
| Treemap View | Nested boxes where size = issue count. Colors: Green (Done), Gray (To Do). Click to drill down. | Visual health check of project status |
| Pie Chart View | Circular distribution chart. Click segments to drill down. Shows percentage breakdown. | Distribution analysis and stakeholder reporting |
| Board View | Kanban-style board that groups issues into columns. Switch grouping to **Status**, **Priority**, or **Assignee**. Drag-and-drop to update issues. | Workflow tracking, team workload visibility, and fast triage |`,
        },
        {
          slug: "saved-portfolios",
          title: "Saved Portfolios",
          content: `All portfolios you create are auto-listed in the 'Saved Portfolio' sidebar section.

* View all portfolios in a card/list layout
* Click a portfolio to open it with its saved filters and view
* Edit the name inline by clicking the title
* Delete portfolios you no longer need`,
        },
        {
          slug: "dashboard-gadget",
          title: "Dashboard Gadget",
          content: `The Portfolio dashboard gadget provides a consolidated, real-time view of key portfolio metrics across multiple projects or workstreams. It helps stakeholders quickly understand status, progress, risks, and delivery trends in a single place without navigating through multiple reports.

## How to configure the gadget

Follow these steps to add and configure the Portfolio dashboard gadget on a dashboard page.

1. Open the target dashboard where you want the gadget to appear.
2. Choose the option to add a new gadget or widget to the dashboard layout.
3. Search for "Project Portfolio Management" in the gadget gallery and add it to the page.
4. In the configuration dialog, select the source scope:
    * Choose one or more projects or saved filters that represent your portfolio.
    * Verify that the selected scope is narrow enough to stay performant but broad enough to cover all portfolio items.
5. Define portfolio groupings:
    * Select a grouping mode from the Hierarchy dropdown: Hierarchy (WBS), Assignee, Project, Status, or Priority.
    * Hierarchy mode displays the native Jira parent-child structure (Epic → Story → Sub-task).
6. Configure columns and fields:
    * Use the Add Column dropdown to add Jira fields such as assignee, status, priority, dates, story points, labels, sprint, or fix version.
    * Reorder columns by dragging headers; resize by dragging the column edge.
7. Open the Gantt chart:
    * Click the Gantt Chart button to display the interactive timeline alongside the table.
    * Create dependencies, set baselines, and view the critical path from the Tools menu.
8. Configure export and access:
    * Use the Export button to download data as CSV or Excel for reporting.
    * Confirm that all intended viewers have access to the underlying projects or filters used by the gadget.
9. Save the configuration and verify the displayed data to ensure it matches expectations.`,
        },
        {
          slug: "portfolio-settings",
          title: "Portfolio Settings",
          content: `Accessible from Portfolio > Settings > Calendar & working days. These control the date fields inside the Portfolio module.

### Settings Tabs

| **Tab** | **What You Configure** |
| --- | --- |
| Time & Units | Choose how time should be displayed across the suite (timesheets, dashboards and reports). |
| Calendar & working days | Booking window (start/end dates), Hours per day, Working days |
| Timezone & defaults | Choose how worklog date & time should be interpreted when saving to Jira and rendering in the suite. |

**Calendar & working days (Booking date fields)**

This settings tab maps which Jira date fields your suite uses for scheduling and planning. For Portfolio, you only need to configure:

* **Bookings start date** → select the Jira field to use as the portfolio start date (e.g., _Start date_)
* **Bookings end date** → select the Jira field to use as the portfolio end date (e.g., _Due date_)

Once these two fields are set, the portfolio can correctly apply date-based scope and timelines.`,
        },
      ],
    },
    {
      id: "backlog-prioritization",
      slug: "backlog-prioritization",
      title: "Backlog Prioritization",
      articles: [
        {
          slug: "backlog-prioritization-overview",
          title: "Backlog Prioritization",
          content: `The **Backlog Prioritization** module helps teams evaluate, score, and organize Jira issues using structured prioritization methods. It brings **scoring templates, customizable backlog views, sorting, filtering, matrix visualization, and saved reports** into one workflow so teams can make clearer prioritization decisions.

Use this module to:

* Score backlog items with standardized frameworks
* Compare issues using configurable metrics
* Sort and filter issues based on planning needs
* Visualize priorities in a matrix view
* Save views and reports for future planning sessions

### 1. What You Can Do in This Module

#### 1.1. Backlog Table

Work with backlog issues in a detailed table view. The table lets you select a project, load its issues, edit metric values inline, and review calculated scores directly in the same interface.

#### 1.2. Scoring Templates

Apply built-in or custom prioritization frameworks. Templates define which metrics are used, how they are entered, and how the final score is calculated.

#### 1.3. Views, Filters & Sorting

Customize how backlog data is displayed. You can show or hide columns, apply filters, sort by one or more fields, and save preferred layouts for repeated use.

#### 1.4. Priority Matrix

Visualize backlog issues in a two-axis matrix. The matrix helps teams quickly identify quick wins, strategic opportunities, and lower-priority work.

#### 1.5. Saved Prioritized Reports

Save backlog snapshots for later review. Reports preserve the current scoring, filtering, and sorting configuration for a project so it can be reopened when needed.

### 2. Module Sections

| Section | Purpose |
| --- | --- |
| Backlog Table | View and score Jira issues in a sortable, filterable table |
| Scoring Templates | Use built-in or custom templates to define metrics and formulas |
| Views, Filters & Sorting | Customize columns, filters, and sorting behavior |
| Priority Matrix | Visualize issues across two scoring dimensions |
| Saved Prioritized Reports | Preserve backlog scoring views for future reference |

### 3. How It Works

1. Open **Backlog Prioritization** from the app navigation.
2. Select a Jira project to load its backlog issues.
3. Choose a scoring template such as ICE, RICE, WSJF, or a custom template.
4. Enter or update metric values directly in the table.
5. Review automatically calculated scores.
6. Apply filters, sorting, and column settings as needed.
7. Save views or prioritized reports for future use.

### 4. Key Capabilities

#### 4.1. Structured Scoring

Use defined metrics and formulas to bring consistency to backlog decisions.

#### 4.2. Flexible Templates

Choose from built-in scoring methods or create custom templates aligned with your team's process.

#### 4.3. Interactive Backlog Table

Edit scores inline, sort issues, filter results, and configure visible columns.

#### 4.4. Visual Prioritization

Use the Priority Matrix to compare issues across selected dimensions and highlight potential quick wins.

#### 4.5. Reusable Configurations

Save views and reports to reduce setup time during recurring backlog reviews.

### 5. Typical Use Cases

* Rank backlog issues for sprint planning
* Compare features, tasks, or initiatives using scoring models
* Standardize prioritization across teams
* Identify high-value, low-effort opportunities
* Save scoring views for recurring product or delivery reviews
* Review historical scoring snapshots through saved reports

### 6. Built-In Template Examples

The module supports common prioritization methods such as ICE, RICE, WSJF, Value vs. Effort, and Quick Wins. Teams can also create custom templates with their own metrics, weights, and scoring formulas.

### 7. Priority Matrix Overview

The **Priority Matrix** helps teams visualize issues based on two selected metrics. For example, plotting **Value** against **Effort** can help identify:

* **Quick Wins** – high value, low effort
* **Big Bets** – high value, high effort
* **Fill-ins** – low value, low effort
* **Avoid** – low value, high effort

### 8. Best Practices

* Use one scoring template consistently within a team or planning cycle
* Keep metric definitions clear so scoring remains consistent
* Save commonly used views for recurring backlog reviews
* Use filters to focus on the most relevant issue types, statuses, or teams
* Review the Priority Matrix alongside the table view for better decision-making`,
        },
        {
          slug: "backlog-table",
          title: "Backlog Table",
          content: `The Backlog module helps you score, rank, and visualize your Jira backlog using customizable prioritization frameworks.

The Backlog Table is the primary interface. Select a project to load its issues with scoring columns.

### Interface Layout

| **Area** | **Description** |
| --- | --- |
| Project Selector | Searchable dropdown to pick a Jira project |
| Template Selector | Choose a scoring template (ICE, RICE, WSJF, etc.) |
| View Dropdown | Switch between saved views or create new ones |
| Columns Dropdown | Show/hide Jira fields and metric columns |
| Issue Table | Sortable, filterable table of issues with inline-editable metric cells |
| Priority Matrix | Toggle to see a scatter plot of issues by two metrics |

### Scoring an Issue

* Click any metric cell in the table to edit it inline
* Depending on the metric type, you'll see: number input, dropdown, star rating, or effort scale
* The Score column auto-calculates based on the template formula
* Changes are saved automatically after each edit

**Tip:** The score formula is defined in the template. For example, RICE = (REACH × IMPACT × CONFIDENCE) / EFFORT.`,
        },
        {
          slug: "scoring-template",
          title: "Scoring Template",
          content: `Templates define which metrics appear and how the final score is calculated.

### Built-In Templates

| **Template** | **Metrics** | **Formula** |
| --- | --- | --- |
| ICE | Impact, Confidence, Ease | Impact x Confidence x Ease |
| RICE | Reach, Impact, Confidence, Effort | (Reach x Impact x Confidence) / Effort |
| WSJF | Business Value, Time Criticality, Risk Reduction, Job Size | (BV + TC + RR) / Job Size |
| Value vs Effort | Value, Effort | Value / Effort |
| Quick Wins | Impact, Effort | Impact / Effort (filtered for low effort) |

### Creating a Custom Template

* Click the template selector > 'Manage Templates'
* Click 'Create New Template'
* Add metrics: Name, Type (number/dropdown/star/effort/label), Weight
* Define the score formula using metric references
* Save and activate the template

### Metric Types

| **Type** | **Input Style** | **Values** |
| --- | --- | --- |
| Number | Direct number input | Any numeric value (0-100 typical) |
| Dropdown | Select from predefined options | Admin-defined choices with numeric values |
| Star Rating | 1-5 stars | Click to rate |
| Effort Scale | T-shirt sizing | XS, S, M, L, XL mapped to numeric values |
| Label | Text tag | Freeform labels for categorization |`,
        },
        {
          slug: "views-filters-sorting",
          title: "Views, Filters & Sorting",
          content: `Views save your preferred column layout, filters, and sorting configuration.

### Saving a View

* Configure your columns, filters, and sorting
* Click the View dropdown > 'Save as New View'
* Name your view and save
* Switch between views using the dropdown

### Column Configuration

* Click the Columns button to show/hide columns
* Jira fields (Summary, Status, Assignee, Priority, etc.) and metric columns are available
* Drag columns to reorder them

### Filtering

* Use the Filter bar below the header to add field-level filters
* Supported filter types: Issue Type, Status, Assignee, Priority, Label, Sprint
* Multiple filters combine with AND logic

### Sorting

* Click any column header to sort ascending/descending
* Use the Sorting modal for multi-column sorting`,
        },
        {
          slug: "priority-matrix",
          title: "Priority Matrix",
          content: `The Priority Matrix is a scatter plot that plots issues on two axes (e.g., Value vs. Effort) to visually identify quick wins and strategic bets.

* Toggle to Matrix view using the view switcher at the top
* Each dot represents an issue; hover to see details
* Quadrants are labeled: Quick Wins (high value, low effort), Big Bets (high value, high effort), Fill-ins (low value, low effort), Avoid (low value, high effort)
* Click Matrix Settings to change the X and Y axis metrics`,
        },
        {
          slug: "saved-prioritized-reports",
          title: "Saved Prioritized Reports",
          content: `Save your current project's backlog with its scores for future reference.

* Click 'Save Report' from the action bar
* Reports are saved per project with a snapshot of current scores
* Access saved reports from the Saved Reports sidebar section
* Click a report to reload the project view with that report's filter/sort configuration`,
        },
      ],
    },
    {
      id: "teams-management",
      slug: "teams-management",
      title: "Teams management",
      articles: [
        {
          slug: "teams-management-overview",
          title: "Teams management",
          content: `The **Teams Management** module helps organizations define and manage team structures that can be reused across the app. It provides a centralized place to create teams, assign members, organize programs, and support planning, reporting, and portfolio workflows with consistent team data.

Use this module to:

* Create and manage teams in one place
* Add members manually or import them from Jira groups
* Organize multiple teams under programs
* Reuse team structures across Capacity, Time Tracking, and Portfolio workflows
* Improve consistency in reporting and planning views

### What You Can Do in This Module

#### Teams

Create and manage teams with names, descriptions, colors, and member assignments. Teams can be built manually or linked to Jira groups for easier member management.

#### Programs

Group multiple teams together into higher-level structures. Programs help represent broader organizational units and provide a hierarchical view of teams and members.

### Module Sections

| Section | Purpose |
| --- | --- |
| Teams | Create, view, and manage individual teams and their members |
| Programs | Group teams together for higher-level organizational views |

### How It Works

1. Open **Teams Management** from the app navigation or sidebar.
2. Go to the **Teams** section to create or manage teams.
3. Enter team details such as name, description, color, and source type.
4. Add members manually or import them from a Jira group.
5. Use the **Programs** section to group multiple teams together.
6. Save changes so teams and programs can be reused across the app.

### Key Capabilities

#### Centralized Team Management

Maintain team information in one place instead of recreating team structures in different modules.

#### Flexible Member Assignment

Create teams manually or use Jira groups to simplify onboarding and updates.

#### Reusable Team Structures

Use the same teams across capacity planning, reporting, and portfolio-level views.

#### Program-Level Organization

Create programs to represent larger organizational groupings made up of multiple teams.

### Typical Use Cases

* Create delivery teams for capacity planning
* Import members from Jira groups for easier maintenance
* Group related teams under a shared program
* Standardize team definitions across modules
* Improve filtering and reporting by team structure
* Support higher-level planning with program-based views

### Best Practices

* Use clear and consistent team names
* Add descriptions so team purpose is easy to understand
* Use Jira group-based teams when membership changes frequently
* Keep programs aligned with real organizational structures
* Review team and program membership regularly to keep data current`,
        },
        {
          slug: "teams",
          title: "Teams",
          content: `Team Management is shared across modules and accessible from the sidebar of Capacity and Time-Tracking.

* View all teams in a filterable table
* Click 'Create Team' to add a new team
* Teams have: Name, Description, Color, Members, Source (Manual or Jira Group)
* Import team members from a Jira Group for automatic sync
* Click a team name to see the detail view with member list

### Creating a Team

| **Field** | **Required** | **Description** |
| --- | --- | --- |
| Team Name | Yes | Display name for the team |
| Description | No | Brief description of the team's purpose |
| Color | No | Color tag for visual identification |
| Source | Yes | Manual (add members individually) or Jira Group (import from group) |
| Members | Yes | Add members via user search or select a Jira Group |`,
        },
        {
          slug: "programs",
          title: "Programs",
          content: `Programs group multiple teams together for higher-level organizational views.

* Go to Team Management > Programs tab
* Click 'Create Program' to add a new program
* Assign teams to the program
* Programs provide a hierarchical view: Program > Teams > Members`,
        },
      ],
    },
    {
      id: "permissions",
      slug: "permissions",
      title: "Permissions & RBAC",
      articles: [
        {
          slug: "permissions-rbac-overview",
          title: "Permissions & RBAC",
          content: `The application implements a simplified, two-tier role-based access control (RBAC) model that integrates seamlessly with existing Jira user management infrastructure. This design eliminates the need for separate administrative consoles or duplicate user configuration, reducing administrative overhead while maintaining comprehensive access governance across all application modules.

Access control operates transparently through Jira's existing user base, with automatic privilege inheritance for Jira administrators and straightforward member role assignment through a unified user interface. This approach ensures that access management remains lightweight, auditable, and aligned with organizational Jira governance practices.

### In This Section

| Page Name | Description |
| --- | --- |
| Roles Overview | Explains the two roles in the app, how they are assigned, and what each role can do across all modules |
| Managing Permissions | Step-by-step guide for Global Admins to assign roles, remove access, and handle common permission scenarios |`,
        },
        {
          slug: "roles-overview",
          title: "Roles Overview",
          content: `The app has exactly two roles. Every user on your Jira site falls into one of three access states based on those roles.

### The Two Roles

#### Global Admin

Global Admin is not assigned inside the app. It is automatically detected based on your Jira site-level ADMINISTER permission — meaning anyone who is a Jira administrator on your site is automatically a Global Admin in this app.

What Global Admin can do:

* Full access to all features across every module (Time Tracking, Capacity Analytics, Backlog Prioritization, Portfolio Management)
* Approve and reject time entries submitted by any team member
* Open Settings and modify all app-wide configuration
* Assign or revoke the Member role for any user via RBAC → User Roles
* View all user permissions across the team

How Global Admin is granted: Jira site admins control this. To make someone a Global Admin in the app, add them to the appropriate Jira administrator group in Jira's user management. The app detects the change automatically on their next login — no action needed inside the app.

#### Member

Member is the standard working role for team members who need to actively use the app. It is manually assigned by a Global Admin from within the app.

What Member can do:

* Log time against Jira issues
* View and edit their own time entries
* Run capacity analysis for any project they have access to in Jira
* Participate in backlog scoring and prioritization plans
* View portfolio summaries and project health data
* View their own permissions in the My Permissions tab

What Member cannot do:

* Approve or reject time entries submitted by others
* Access Settings or modify app configuration
* Assign or revoke roles for other users

### The Default State (No Role)

Any Jira user who opens the app without being a Global Admin or having the Member role assigned is in the **default read-only state**. They can open the app and view data, but cannot take any action.

### Role Comparison Table

| Capability | Global Admin | Member | No Role |
| --- | --- | --- | --- |
| Log time against issues | Yes | Yes | No |
| Edit own time entries | Yes | Yes | No |
| Approve / reject time entries | Yes | No | No |
| View capacity analytics | Yes | Yes | Read-only |
| Run backlog prioritization | Yes | Yes | Read-only |
| View portfolio data | Yes | Yes | Read-only |
| Access Settings | Yes | No | No |
| Assign / revoke Member roles | Yes | No | No |
| View My Permissions tab | Yes | Yes | Yes |

### Important Notes

**Global Admin cannot be modified inside the app** The role assignment UI in RBAC → User Roles only manages the Member role.

**Role changes take effect immediately** There is no approval workflow or delay. As soon as a Global Admin saves a role assignment, the affected user's access level changes on their next action in the app.`,
        },
        {
          slug: "managing-permissions",
          title: "Managing Permissions",
          content: `This page is for Global Admins. It covers how to assign the Member role, remove access, handle edge cases, and help users understand their own permissions.

### Prerequisites

You must be a **Global Admin** (Jira site administrator) to manage permissions inside this app. If you are not sure whether you have the right access, open **Settings → My Permissions** — your role is shown in the "Your Roles" section.

### Assigning the Member Role to a User

1. Open the app inside Jira.
2. Click **Settings** in the top navigation.
3. Go to the **RBAC** tab, then click **User Roles**.
4. The user list shows all users on your Jira site. Use the search bar to find the user by name or email.
5. Click the **Edit** (pencil) icon next to the user's name. A modal dialog opens.
6. Check the **Member** checkbox.
7. Click **Save**.

The user now has Member-level access. The change takes effect immediately — they do not need to log out and back in.

### Removing the Member Role from a User

1. Follow steps 1–5 above to open the role modal for the user.
2. Uncheck the **Member** checkbox.
3. Click **Save**.

The user is returned to the default read-only state. Any in-progress work (e.g., time entries already submitted) is not deleted — only their ability to take future actions is restricted.

### Making Someone a Global Admin

You cannot do this from within the app. Global Admin access comes from Jira's user management.

1. Go to your Jira site settings (as a Jira site admin).
2. Navigate to **User Management → Groups**.
3. Add the user to the appropriate Jira administrator group (typically \`site-admins\` or \`jira-administrators\`).
4. The user will be recognised as a Global Admin in the app the next time their permissions are checked.

### Common Scenarios

**A new hire needs to start logging time** Assign them the Member role via RBAC → User Roles. Done.

**A contractor's engagement has ended** Remove the Member role via RBAC → User Roles. Their read-only access remains but they can no longer log time or modify data.

**A team lead was promoted to engineering manager and needs full admin access** Add them to the Jira administrator group in Jira user management. The app will automatically recognise them as a Global Admin.

**A user doesn't know why they can't log time** Direct them to Settings → My Permissions. If they have no role, the Restricted Actions section will confirm they need the Member role.`,
        },
      ],
    },
    {
      id: "global-settings",
      slug: "global-settings",
      title: "Global Setting",
      articles: [
        {
          slug: "global-setting-overview",
          title: "Global Setting",
          content: `The **Setting** module provides shared configuration options that apply across the app. It helps administrators define common defaults for **time display, date handling, worklog capture, time classification, and holiday-based capacity calculations** so teams work with consistent settings across all modules.

Use this module to:

* Configure default time and date settings across the suite
* Define custom fields for worklog entry forms
* Create time categories for better reporting
* Manage holiday calendars used in capacity calculations
* Standardize app behavior for all users

## Module Sections

| Section | Purpose |
| --- | --- |
| General Settings | Configure default time, timezone, calendar, and working-day behavior |
| Worklog Fields | Define custom fields available during time entry |
| Time Categories | Classify logged work for better reporting |
| Holiday Calendar | Manage holidays that affect capacity calculations |

## How It Works

1. Open **Global Setting** from the app navigation or module sidebar.
2. Select the settings area you want to configure.
3. Update the required fields or defaults.
4. Save the changes.
5. The updated configuration is then applied across the relevant modules in the app.

## Key Capabilities

| Capability | Description |
| --- | --- |
| Shared App Configuration | Manage settings centrally so behavior remains consistent across modules. |
| Standardized Time Handling | Define how time is displayed, which timezone is used, and how working calendars are interpreted. |
| Structured Worklog Data | Add custom worklog fields and categories to improve reporting quality. |
| Capacity-Aware Calendars | Use holiday settings to ensure capacity calculations reflect real working availability. |

## General Settings Overview

The **General Settings** section controls common defaults used throughout the app, such as time display unit, default time range, timezone mode, first day of the week, working days, and hours per day.

## Worklog Fields Overview

The **Worklog Fields** section allows administrators to add custom fields to the time logging form. These fields can be used to capture additional information required by the organization, such as project-specific details, classifications, or workflow-related context.

## Time Categories Overview

The **Time Categories** section lets teams classify worklog entries into meaningful categories such as development, meetings, testing, documentation, or review work. This improves reporting by allowing teams to analyze not only how much time was logged, but also what kind of work that time was spent on.

## Holiday Calendar Overview

The **Holiday Calendar** section is used to define holidays that affect capacity and planning. When a holiday is configured, the app can account for reduced working availability during that period.

## Best Practices

* Review general settings before rolling out the app broadly
* Keep worklog fields limited to the information teams truly need
* Use a consistent set of time categories across the organization
* Keep holiday calendars updated in advance for planning accuracy
* Revisit shared settings periodically as team processes evolve`,
        },
        {
          slug: "general-settings",
          title: "General Settings",
          content: `Settings apply across the app and are accessible from any module's sidebar (bottom).

| **Setting** | **Description** | **Default** |
| --- | --- | --- |
| Time Display Unit | How time values are formatted throughout the app | Jira default (1d 3h 30m) |
| Enable Rough Planning | Capacity planning mode that allows manual booking and resource allocation without strict Jira field synchronization | Sync. With Jira |
| Default Time Range | Initial date range when opening reports | Current month |
| Timezone Mode | Which timezone to use for date calculations | Jira timezone |
| First Day of Week | Which day starts the week in calendar views | Monday |`,
        },
        {
          slug: "worklog-fields",
          title: "Worklog Fields",
          content: `Custom fields that appear when logging time.

* Navigate to Settings > Worklog Fields tab
* Click 'Add Field' to create a new field
* Configure: Name, Type (Text, Number, Select, Checkbox), Required (yes/no)
* Fields appear in the Log Time form across the app`,
        },
        {
          slug: "time-categories",
          title: "Time Categories",
          content: `Classify time entries into categories for better reporting.

* Navigate to Settings > Time Categories tab
* Create categories like: Development, Code Review, Meeting, QA Testing, Documentation
* Categories appear as a dropdown when logging time
* Filter reports by category to analyze time distribution`,
        },
        {
          slug: "manage-staff",
          title: "Manage Staff",
          content: `### Holiday Calendar

Define company-wide holidays to adjust capacity calculations.

* Navigate to Settings > Manage Staff > Holiday Calendar
* Add holidays with: Name, Date
* Holidays reduce available capacity for all users on that date
* Capacity planner automatically accounts for holidays

### Workload Scheme

How to create and manage work hour patterns.

* Navigate to Settings > Manage Staff > Workload Scheme
* Setting hours per day of week
* Creating schemes like "Full-Time 8h", "Part-Time 4h"
* Managing existing schemes

### Staff Assignments

How to link staff to schemes and calendars.

* Navigate to Settings > Manage Staff > Staff Assignment
* Finding and assigning team members
* Auto-save functionality
* Search and filtering`,
        },
      ],
    },
    {
      id: "help-support",
      slug: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "help-support-overview",
          title: "Help & Support",
          content: `The **Help & Support** section provides guidance for resolving common issues, understanding how the app works, and contacting the support team when needed. It brings together **troubleshooting steps, frequently asked questions, and support contact information** so users can quickly find answers and get help with the Time, Capacity, Prioritization & PPM Suite.

Use this section to:

* Troubleshoot common problems across modules
* Find answers to frequently asked questions
* Understand common causes of empty reports, permission issues, or slow performance
* Learn what information to collect before contacting support
* Reach the Clovity support team for assistance

## What You Can Find in This Section

### Troubleshooting Guide

Use the troubleshooting guide to resolve common issues step by step. It covers problems such as empty reports, blank values, scoring issues, permission errors, Gantt chart problems, gadget data issues, export failures, and slow performance.

### Frequently Asked Questions

Review answers to the most common questions about app setup, supported environments, permissions, modules, reporting, backlog scoring, portfolio features, and performance.

### Contact Support

Get in touch with the support team when documentation and troubleshooting steps do not resolve the issue. This page explains what information to include so support can investigate more efficiently.

## Section Pages

| Section | Purpose |
| --- | --- |
| **Troubleshooting Guide** | Resolve common issues using step-by-step solutions |
| **Frequently Asked Questions** | Find quick answers to common product and usage questions |
| **Contact Support** | Learn how to contact support and what details to provide |

## Common Issue Areas Covered

This section helps users with issues such as:

* Reports showing no data
* Blank or zero values in results
* Backlog scores not calculating
* Permission denied errors
* Missing buttons or sections
* Gantt chart rendering problems
* Dashboard gadget data issues
* Slow loading or performance concerns
* Export failures

## Best Practices Before Raising a Support Request

* Check the relevant documentation page first
* Review the troubleshooting steps for your issue
* Confirm your permissions and role
* Verify filters, date ranges, and project access
* Try a browser refresh or a different browser
* Capture screenshots or console errors if the issue persists`,
        },
        {
          slug: "troubleshooting-guide",
          title: "Troubleshooting Guide",
          content: `Step-by-step solutions for common issues with the Time, Capacity, Prioritization & PPM Suite.

### No Data or Empty Report

**Symptoms**

* Report displays no rows after building
* Chart section is empty
* Zero totals for all time periods

**Solutions**

* **Step 1:** Check your date range - Make sure From/To dates cover a period where worklogs exist
* **Step 2:** Check filters - Remove all filters and rebuild. If data appears, one of your filters was too narrow.
* **Step 3:** Verify permissions - Can you view worklogs for the selected project? Check with your Jira admin.
* **Step 4:** Check for logged time - Open a Jira issue directly and verify worklogs exist in the 'Time tracking' section.

### Everything Shows as 0h or Blank

**Why this happens:** This usually means the date range does not overlap with any existing worklogs.

**Fixes**

* Expand the date range to 'Current year' or 'Last 7 days' and rebuild
* Switch View Mode from 'Days' to 'Months' to see aggregated data
* Check that the Users filter includes people who actually logged time

### Backlog Scores Not Calculating

**Symptoms**

* Score column shows 0 or blank for all issues
* Metric cells are not editable

**Solutions**

* **Step 1:** Check your template - Make sure a scoring template is selected (not 'None')
* **Step 2:** Check metric values - Score requires all metrics to have values. Fill in any blank cells.
* **Step 3:** Verify formula - In Manage Templates, check that the formula references the correct metric names.
* **Step 4:** Check permissions - You need edit permissions to modify metric cells.

### Permission Denied Errors

**Symptoms**

* Error message: 'PERMISSION_DENIED' when trying to save, edit, or delete
* Buttons or sections are missing from the interface

**Solutions**

* **Step 1:** Check your role - Go to Settings > My Permissions tab to see your current permissions
* **Step 2:** Contact your admin - Ask them to assign the appropriate role via Permissions > User Roles
* **Step 3:** Verify Jira admin status - If you should be a Global Admin, confirm you have the 'Administer Jira' permission in Jira settings

### Gantt Chart Not Rendering

* **Step 1:** Refresh the page - Try Ctrl+F5 (hard refresh)
* **Step 2:** Check your filters - If the portfolio filter returns zero issues, the chart has nothing to render
* **Step 3:** Verify date fields - Gantt requires Start Date and Due Date. Issues without dates won't appear.
* **Step 4:** Try a different browser - If the issue persists, try Chrome or Firefox

### Slow Loading / Performance Issues

* **Step 1:** Narrow your query - Use a smaller date range or fewer projects
* **Step 2:** Reduce group-by dimensions - Fewer grouping levels = faster report generation
* **Step 3:** Check Jira performance - Is Jira itself slow? The app depends on Jira API response times.
* **Step 4:** Browser troubleshooting - Close unnecessary tabs, clear cache, try a different browser

### Still Having Issues?

* Gather information: Jira site URL, which module you were using, steps to reproduce, and browser console errors (F12 > Console tab)
* Contact support: [support@clovity.com](mailto:support@clovity.com)`,
        },
        {
          slug: "faq",
          title: "Frequently Asked Questions",
          content: `### General Questions

**What is the Time, Capacity, Prioritization & PPM Suite?**

It is a Jira Cloud app that combines four modules into a single interface: Time-Tracking & Reporting (log and report work time), Capacity Planner & Insights (workload analytics), Backlog Prioritization (score and rank issues), and Portfolio/PPM (cross-project roadmaps with Gantt chart).

**Which Jira versions are supported?**

The app is built on Atlassian Forge and supports Jira Cloud only. It is not compatible with Jira Server or Data Center.

**How do I install the app?**

Contact your Jira administrator. They can install the app from the Atlassian Marketplace. After installation, it appears under Apps in the Jira top navigation bar.

**How do I switch between modules?**

Click the dropdown at the top of the sidebar and select: Capacity Planner, Time-Tracking, Backlog Prioritization, or Portfolio.

### Data & Permissions

**What data can the app access?**

The app can access Jira issues, projects, worklogs, users, and fields that you have permission to view. It cannot see data you don't have access to in Jira.

**Does the app store my data?**

The app stores configurations (report setups, templates, portfolio filters, scores) using Atlassian Forge Key-Value Storage. This is encrypted, isolated per installation, and managed by Atlassian. It does not copy or export your data to external systems.

**What happens if I have no role assigned?**

You automatically get the Viewer role, which grants read-only access to all modules. An admin must assign a higher role for edit, create, or delete permissions.

### Time-Tracking & Reports

**How do I log time?**

Open any report in the Report Builder and click the "Log Time" button. Search for an issue, enter hours, select a date, and optionally choose an Account and Time Category.

**What grouping options are available?**

You can group by: Project, Assignee, Issue (Key + Summary), Issue Type, Priority, Status, Reporter, Label, Sprint, and Parent. Add multiple groupings for nested hierarchical reports.

**Can I export reports?**

Yes. Use the Export button in the Report Builder to download as CSV or PDF.

### Backlog Prioritization

**What scoring templates are available?**

Five built-in templates: ICE (Impact x Confidence x Ease), RICE ((Reach x Impact x Confidence) / Effort), WSJF ((BV + TC + RR) / Job Size), Value vs Effort, and Quick Wins.

**Can I create custom scoring templates?**

Yes. Go to the template selector > Manage Templates > Create New Template. Define custom metrics and your own formula.

**What is the Priority Matrix?**

A scatter plot that plots issues on two axes (e.g., Value vs. Effort). Quadrants are labeled: Quick Wins, Big Bets, Fill-ins, and Avoid.

### Portfolio / PPM

**What view types are available?**

Six views: Table, Gantt Chart, Graph View, Treemap View, Pie Chart View, and Board View.

**Can the Gantt chart update Jira dates?**

Yes. Drag the edges of a bar in Graph view to change the start or due date. The change is saved directly to the Jira issue.

**Can multiple users edit the same portfolio?**

The app uses last-write-wins storage. Simultaneous edits to the same portfolio may overwrite each other. Coordinate with your team when editing shared portfolios.

### Performance

**Why is my report loading slowly?**

Large date ranges with many worklogs take longer. Narrow your date range, reduce the number of group-by dimensions, or filter to fewer projects/users.

**How many issues can the app handle?**

There is no hard limit. However, backlog tables with 10,000+ issues or reports spanning years of worklogs may be slower. Use filters to keep datasets focused.`,
        },
        {
          slug: "contact-support",
          title: "Contact Support",
          content: `_How to get help from the Time, Capacity, Prioritization & PPM Suite support team._

## Support Email

**Email:** [support@clovity.com](mailto:support@clovity.com)

**Response Time:** Within 1-2 business days

## Before Contacting Support

To help us resolve your issue faster, please try these steps first:

1. Check Documentation — FAQ and Troubleshooting Guide
2. Verify Your Setup — Confirm you can access the app from Apps in the Jira top nav. Check your role under Settings > My Permissions.
3. Try Basic Fixes — Refresh the page (Ctrl+F5), try a different browser, clear browser cache.

## What to Include in Your Support Request

| **Information** | **Example** |
| --- | --- |
| Jira Site URL | https://yourcompany.atlassian.net |
| Module | Time-Tracking / Capacity / Backlog / Portfolio |
| Section | Report Builder / Backlog Table / Gantt Chart / etc. |
| Issue Description | Report shows no data when filtering by Project X |
| Your Role | Helps us check if it's a permissions issue |
| Screenshots | Shows exactly what you're seeing |
| Console Errors | F12 > Console tab - copy any red error messages |
| Browser & Version | Chrome 120, Firefox 121, Safari 18, etc. |

## Typical Resolution Times

| **Issue Type** | **Typical Time** |
| --- | --- |
| Configuration help | 1-2 business days |
| Bug reports | 2-5 business days |
| Feature requests | Logged for review |

## Feature Requests

We love hearing your ideas! Email [support@clovity.com](mailto:support@clovity.com) with subject: "Feature Request: [Brief Description]". Include what you want to accomplish, why it would be valuable, and current workarounds.`,
        },
      ],
    },
    {
      id: "legal",
      slug: "legal",
      title: "End User License Agreement (Eula)",
      articles: [
        {
          slug: "eula",
          title: "End User License Agreement (Eula)",
          content: `**End User License Agreement (EULA)**

This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and Clovity, Inc. ("Company" or "We"), governing your use of the **Time Tracking, Resource Planning & Project Management** application ("Software") available on the Atlassian Marketplace.

By installing, accessing, or using this Software, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use the Software.

**1. LICENSE GRANT**

Clovity, Inc. grants you a non-exclusive, non-transferable, revocable, and limited license to use the Software within your Atlassian Jira environment in accordance with this Agreement.

**2. RESTRICTIONS**

You shall not:

* Copy, modify, distribute, or create derivative works of the Software.
* Reverse engineer, decompile, or attempt to extract the source code.
* Use the Software for unlawful or unauthorized purposes.
* Rent, lease, sublicense, or transfer the Software to third parties.

**3. DATA PRIVACY & SECURITY**

The Software may process Jira-related data but does not store, share, or transmit personal or confidential data outside of your Jira environment.

Your use of the Software must comply with applicable data protection laws and Atlassian's policies.

**4. SUPPORT & UPDATES**

Clovity, Inc. may provide updates, patches, or improvements to the Software at its discretion.

Support services are available as per the Atlassian Marketplace listing.

**5. DISCLAIMER OF WARRANTIES**

The Software is provided "AS IS" without any express or implied warranties, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Clovity, Inc. does not warrant that the Software will be error-free or operate without interruptions.

**6. LIMITATION OF LIABILITY**

To the fullest extent permitted by law, Clovity, Inc. shall not be liable for any damages arising out of or related to the use or inability to use the Software, including but not limited to loss of profits, data, or other intangible losses, even if Clovity, Inc. has been advised of the possibility of such damages.`,
        },
      ],
    },
  ],
};

export function getAllArticles(docs) {
  return docs.categories.flatMap((cat) =>
    cat.articles.map((article) => ({ ...article, categoryId: cat.id, categoryTitle: cat.title }))
  );
}

export function findArticle(docs, articleSlug) {
  for (const cat of docs.categories) {
    const article = cat.articles.find((a) => a.slug === articleSlug);
    if (article) return { article, category: cat };
  }
  return null;
}
