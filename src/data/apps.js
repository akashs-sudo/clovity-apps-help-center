export const apps = [
  {
    slug: "dashboard-charts-jira",
    name: "Dashboard Templates, Charts, Graphs & Reports for Jira",
    shortName: "Dashboard Templates, Charts, Graphs & Reports for Jira",
    platform: "Jira Cloud",
    badge: "Rising Star",
    rating: 4,
    installs: 189,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Custom_Charts_and_Dashboards_for_Jira_1edfecba57.png",
    description:
      "#1 Jira dashboard app – build charts & issue lists from projects, saved filters, or JQL with live preview.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/359777765/dashboard-templates-charts-graphs-reports-for-jira",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Dashboard Templates, Charts, Graphs & Reports for Jira is the #1 Jira dashboard app. Build beautiful charts and issue lists from projects, saved filters, or JQL queries with live preview. Perfect for project managers and team leads who need instant visibility into their Jira data.",
      },
      {
        id: "installation",
        title: "Installation",
        content:
          'Go to Jira Settings > Apps > Find new apps. Search for "Dashboard Templates Clovity". Click Install and accept the permissions. The app will appear in your Jira dashboard gadgets immediately.',
      },
      {
        id: "getting-started",
        title: "Getting Started",
        content:
          'After installation, navigate to your Jira dashboard and click "Add Gadget". Select your preferred chart type, configure the data source (project, filter, or JQL), and click Save. Charts update automatically in real time.',
      },
      {
        id: "chart-types",
        title: "Chart Types",
        content:
          "Supports bar charts, pie charts, line charts, burndown charts, cumulative flow diagrams, sprint velocity, and issue list gadgets. Each chart type has customizable colors, labels, and data filters.",
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: Does it work with Jira Software and Jira Service Management? A: Yes, it works with all Jira Cloud products. Q: Can I export charts? A: Yes, export to PNG and PDF is supported. Q: Is there a free trial? A: Yes, 30-day free trial available.",
      },
    ],
  },
  {
    slug: "time-tracking-jira",
    name: "Time Tracking, Resource Planning & Project Management",
    shortName: "Time Tracking, Resource Planning & Project Management",
    platform: "Jira Cloud",
    badge: null,
    rating: 4,
    installs: 149,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Timesheets_Capacity_Planner_Prioritization_and_PPM_Suite_0851421e4d.png",
    description:
      "#1 Time Tracking & PPM Solution – plan resources, track timesheets, prioritize portfolios in Jira.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/877949909/time-tracking-resource-planning-project-management",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "A comprehensive Project Portfolio Management solution built for Jira Cloud. Track time, plan resources, manage timesheets, and prioritize your project portfolio all within Jira.",
      },
      {
        id: "installation",
        title: "Installation",
        content:
          "Install from the Atlassian Marketplace. After installation, go to Jira Settings > Apps > Time Tracking by Clovity to begin configuration. Set up your teams, roles, and working calendars first.",
      },
      {
        id: "timesheet-logging",
        title: "Logging Time",
        content:
          "Log time directly on any Jira issue using the Time Tracking panel. You can also use the Timesheet view to log time in bulk for the week. Time entries are linked to Jira issues and visible in reports.",
      },
      {
        id: "resource-planning",
        title: "Resource Planning",
        content:
          "Use the Resource Planner to see team capacity, assign work, and forecast utilization across projects. Drag-and-drop scheduling helps balance workloads and avoid over-commitment.",
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: Can managers approve timesheets? A: Yes, timesheet approval workflows are supported. Q: Does it integrate with Jira sprints? A: Yes, sprint data is automatically synced.",
      },
    ],
  },
  {
    slug: "backlog-auditor-jira",
    name: "Backlog Auditor & Export",
    shortName: "Backlog Auditor & Export",
    platform: "Jira Cloud",
    badge: null,
    rating: null,
    installs: 9,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Backlog_Auditor_and_Export_70f358fa4c.png",
    description:
      "Keep your Jira backlog clean, consistent, and exportable - effortlessly.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/2421185342/backlog-auditor-export",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          'Backlog Auditor & Export is a Forge-powered Jira Cloud application designed to help project administrators and teams systematically monitor and improve backlog quality. Backlogs often grow messy - with missing fields, outdated issues, or inconsistent data. Manually checking hundreds (or thousands) of issues is both time-consuming and error-prone. Backlog Auditor & Export solves this by allowing administrators to define rule-based checks for fields across issues, automatically detecting violations that deviate from agreed standards, and presenting actionable reports that highlight trends, bottlenecks, and recurring issues. Instead of asking "Why is our backlog full of unclear or outdated issues?", it provides a clear, visual, and repeatable way to enforce standards and drive backlog discipline.',
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        content:
          "Before installing or using Backlog Auditor & Export, ensure the following: Jira Environment - Only supported on Jira Cloud (Jira Data Center and Server are not supported). Installation - Install via the Atlassian Marketplace or deploy through Forge. Browser - Use an up-to-date browser (Chrome, Firefox, or Edge). Permissions - Project Administrators can configure rulesets; Team Members can view audit reports if they have project access. Access to Fields & Workflows - For meaningful audits, the user must have visibility of project fields (system and custom) and workflows. Ensure all fields you want to audit are visible and not restricted by field configurations or screen schemes.",
      },
      {
        id: "app-structure",
        title: "Application Structure",
        content:
          'The app consists of two key areas, each serving a distinct purpose. 1. Admin Page - This is where administrators design and manage rulesets. Think of it as setting the "audit checklist" for a project. 2. Project Page (Auditing) - This is where the audits are executed and results are displayed in an easy-to-read format. This separation ensures that rule creation and audit execution are distinct, reducing errors and keeping responsibilities clear.',
      },
      {
        id: "building-rulesets",
        title: "Building Rulesets (Admin Page)",
        content:
          "When you first configure the app: 1. Select a Project - Narrow scope to one project at a time. 2. Select Issue Types - Decide whether audits apply to Stories, Bugs, Epics, or custom issue types. 3. Fetch Relevant Fields - The app loads only the fields that apply to your selected project and issue types. On first use, it performs a live discovery from Jira; afterward it serves results from a cached snapshot (shown with a Last scanned timestamp). Use Rescan to bypass the cache and fetch a fresh set directly from Jira. 4. Choose or Create a Ruleset - Reuse a prior ruleset or start fresh. 5. Add Rules - For each rule: pick a field, select a condition (based on field type), write a violation message (guidance for team members), and click Add Rule. 6. Save Ruleset - Once satisfied, store the ruleset for future audits. 7. View All Rulesets - Quickly access a list of all existing rulesets for the selected project, making it easier to review, compare, or reuse them in future audits.",
      },
      {
        id: "running-audits",
        title: "Running Audits (Project Page)",
        content:
          "When running an audit: 1. Select a Ruleset - Choose from the rulesets available for that project. 2. Run Audit - The app will automatically check each issue against your ruleset and display a progress indicator as issues are scanned. 3. Review Results - Results are presented in a structured, visual, and easy-to-interpret format including Summary Cards (total audited, total violations, most common violations), Charts (defects by assignee, issue type, condition, and field), a Defects Trend Chart to track progress over time, and a Detailed Table with a row-by-row breakdown of every issue and what rule it failed.",
      },
      {
        id: "audit-report",
        title: "Understanding the Audit Report",
        content:
          'Backlog Auditor & Export\'s reporting is designed to be both executive-friendly and action-oriented. Summary Cards provide at-a-glance insights: Total Audited (how many issues were checked), Total Violations (number of rule breaks), Top Violated Condition (the most common problem), and Defects by Assignee/Field/Issue Type (who or what is most affected). Charts break down violations by Condition (which rules fail most often), by Field (spot fields with recurring issues), by Assignee (detect team members needing more support), and by Issue Type (understand where problems cluster - Stories vs. Bugs). The Defects Trend Chart is one of the most powerful features - it shows how violations evolve over time. If violations decrease, backlog health is improving. If violations increase, standards are not being followed and corrective action is required. The Defects Table provides detailed evidence for every flagged issue: Issue Key (linked to Jira), Summary, Field Name & Type, Condition that failed, and the Violation Message. This table acts as the "to-do list" for teams - every row highlights what to fix. You can also Export the table to CSV directly from the report.',
      },
      {
        id: "safety-nets",
        title: "Friendly Fallbacks & Safety Nets",
        content:
          "Backlog Auditor & Export is designed to be forgiving and user-friendly. Unsaved Changes Protection - Whenever you edit, add, or delete a rule and then try to navigate away, switch projects, or close the page without saving, the app surfaces an Unsaved Changes dialog with three options: Cancel (stay on the current screen and keep editing), Discard (proceed without saving pending edits), or Save Changes (save pending edits and then continue). Other built-in safeguards include: Delete Confirmations (removing a rule or entire ruleset asks for confirmation), Helpful Empty States (if a selection returns no fields, the UI explains why and how to proceed), Permission-Aware Messaging (clear messages instead of silent failures when access is restricted), and Graceful Loading & Retries (progress indicators and guidance if data fetches take longer than expected).",
      },
      {
        id: "rule-conditions",
        title: "Supported Rule Conditions",
        content:
          "Backlog Auditor & Export offers a wide variety of conditions tailored to field types, making rules precise and relevant. String Fields (Summary, Description, custom text fields) - require or block specific words, enforce equality/inequality, check emptiness. Number Fields (Story Points, Estimates) - check emptiness, require exact or non-exact values, enforce numeric comparisons (>, <, ≥, ≤). Date/DateTime Fields (Due Date, Created, Updated) - detect empty values, identify older or newer issues based on days, compare with a specific date. User Fields (Assignee, Reporter) - check assignment, match specific users, detect inactive accounts. Priority, Status, Issue Type - check for exact matches or mismatches. Default/Fallback - Is Empty / Is Not Empty for any field type not covered above.",
      },
      {
        id: "example-rules",
        title: "Example Rule Scenarios",
        content:
          'Ensure Descriptions Exist - Field: Description | Condition: Is Empty | Message: "Please add a description so the team has context." Catch Old Bugs - Field: Created Date | Condition: Older Than (days) → 90 | Message: "This bug is over 90 days old. Reassess its relevance." Check Assignments - Field: Assignee | Condition: Is Empty | Message: "This issue is unassigned. Assign it to a responsible person." Validate Estimates - Field: Story Points | Condition: Greater Than → 13 | Message: "Story points exceed recommended range (max 13)." These conditions make rules extremely flexible - for instance, you can enforce that "Stories must always have story points" or "Bugs older than 60 days must be reviewed."',
      },
      {
        id: "best-practices",
        title: "Best Practices",
        content:
          'Start small - Begin with a handful of high-value rules before expanding. Write actionable violation messages - Instead of just "Invalid", guide users with specific instructions like "Story points must be ≤ 13." Audit regularly - Run audits every sprint or month to ensure continuous improvement. Monitor trends - Use the Defect Trend Chart to demonstrate backlog improvements to stakeholders. Collaborate with teams - Share reports during sprint reviews or grooming sessions to drive accountability and awareness.',
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        content:
          "Audit does not start → Check project permissions and confirm the ruleset exists. Ruleset missing → Confirm it was saved under the correct project. Empty charts → Ensure issues actually match your audit conditions. Unexpected results → Validate field visibility and whether custom fields are indexed in Jira. For further assistance, contact developers@Clovity.com or visit clovity.com.",
      },
    ],
  },
  {
    slug: "jql-ai-jira",
    name: "JQL AI",
    shortName: "JQL AI",
    platform: "Jira Cloud",
    badge: null,
    rating: null,
    installs: 27,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/JQL_AI_5c9387a3f4.png",
    description:
      "Effortlessly transform natural language into precise JQL queries with AI-powered query conversion.",
    marketplaceUrl: "https://marketplace.atlassian.com/apps/1237395/jql-ai",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "JQL AI is a Jira app designed to simplify complex JQL searches by converting natural language queries into accurate JQL statements. Whether you're a beginner or an experienced Jira user, JQL AI helps you find issues faster without needing to memorize complex syntax. It supports both Global Search and Project-Specific Search, includes quick actions for frequently used queries, and gives admins control over enabling or disabling the app per project.",
      },
      {
        id: "installation",
        title: "Installation",
        content:
          "Go to the Atlassian Marketplace and search for JQL AI. Click Get it now and install the app in your Jira instance. Follow the on-screen instructions to complete the installation. Once installed, navigate to a Jira project or the global search page to start using JQL AI.",
      },
      {
        id: "getting-started",
        title: "Getting Started",
        content:
          "Once installed, JQL AI is accessible in three places: Global Search (available in the Jira navigation menu for system-wide searches), Project Page (available inside individual Jira projects for project-specific searches), and the Admin Page (manage settings and permissions from the Jira Admin panel).",
      },
      {
        id: "entering-queries",
        title: "Entering a Query",
        content:
          'Type a natural language query such as "Find all open issues", "Show all closed tasks from last week", or "Find issues assigned to John Doe in Project X". Press Enter or click Convert to generate the JQL query. The app displays the converted JQL and gives you two options: Copy (copy the query to use elsewhere) or Search in Jira (open the Jira issue search page with the query pre-applied).',
      },
      {
        id: "quick-actions",
        title: "Quick Actions",
        content:
          "Use pre-configured quick actions to generate common JQL queries instantly. Available quick actions include Open Issues, Closed Issues, and In-Progress Issues. Click any quick action to generate the respective JQL query without typing a prompt - ideal for repetitive searches.",
      },
      {
        id: "admin-settings",
        title: "Admin Settings",
        content:
          "Admins can enable or disable JQL AI at different levels. Global Level: apply JQL AI across all projects in the Jira instance. Project Level: enable or disable JQL AI for individual projects. Security Filters: the app automatically filters inappropriate content in queries to keep results relevant and safe.",
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        content:
          'App is disabled - Contact your Jira admin to check if JQL AI is enabled for your project or globally. "Something went wrong" error - Ensure you have a valid OpenAI API key configured and verify your internet connection, then try again. "Project-specific queries only" error - If using JQL AI inside a project, ensure your query does not reference multiple projects; use Global Search for multi-project queries. For further assistance, visit the Atlassian Marketplace support section or contact our support team.',
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: Do I need JQL knowledge to use this app? A: No, that is the whole point - just describe what you want in plain English. Q: Does it learn my custom fields? A: Yes, it auto-discovers your project custom fields and includes them in suggestions. Q: Can I use it for multi-project searches? A: Yes, use Global Search mode for queries spanning multiple projects. Q: Who can manage app permissions? A: Jira admins can enable or disable JQL AI at the global or individual project level.",
      },
    ],
  },
  {
    slug: "content-formatting-confluence",
    name: "Content Formatting Macros: Tabs Navigation Visibility CSS",
    shortName: "Content Formatting Macros: Tabs Navigation Visibility CSS",
    platform: "Confluence Cloud",
    badge: null,
    rating: 4,
    installs: 169,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Content_Formatting_Navigation_and_Visibility_for_Confluence_08a87c7128.png",
    description:
      "Create tabbed hubs, tailor sections by audience, and bulk manage attachments in Confluence Cloud.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/3890258352/content-formatting-macros-tabs-navigation-visibility-css",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Powerful content formatting macros for Confluence Cloud. Create tabbed navigation, show/hide content for specific audiences, apply custom CSS, and manage attachments in bulk.",
      },
      {
        id: "tabs-macro",
        title: "Tabs Macro",
        content:
          "Use the Tabs macro to create tabbed content sections on any Confluence page. Insert the macro, add tab containers, and place your content inside each tab. Users can click tabs to switch views without leaving the page.",
      },
      {
        id: "visibility-macro",
        title: "Visibility Macro",
        content:
          "Control who sees what content. Restrict sections to specific Confluence groups, space admins, or logged-in users only. Ideal for pages that serve both internal teams and external guests.",
      },
      {
        id: "css-macro",
        title: "Custom CSS",
        content:
          "Apply scoped CSS styles to any page section without affecting the rest of your Confluence space. CSS is sandboxed to the macro container for safety.",
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: Does it work with Confluence Data Center? A: This version is for Cloud only. Q: Can I nest tabs? A: Yes, nested tabs are supported. Q: Is CSS sandboxed? A: Yes, CSS is scoped to the page.",
      },
    ],
  },
  {
    slug: "reports-charts-confluence",
    name: "Reports, Charts, Templates, CQL & Export for Confluence",
    shortName: "Reports, Charts, Templates, CQL & Export for Confluence",
    platform: "Confluence Cloud",
    badge: null,
    rating: 4,
    installs: 88,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Custom_Reports_for_Confluence_3e8b2955ff.png",
    description:
      "Create live Confluence reports from CQL - with exports to Excel, PDF and more.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/4125307933/reports-charts-templates-cql-export-for-confluence",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Build live, dynamic reports in Confluence using Confluence Query Language (CQL). Generate charts, tables, and export them to Excel or PDF.",
      },
      {
        id: "cql-reports",
        title: "Building CQL Reports",
        content:
          "Insert the CQL Report macro on any page, enter your CQL query, and choose your display format (table, chart, or list). The report updates automatically whenever matching content changes.",
      },
      {
        id: "chart-types",
        title: "Chart Types",
        content:
          "Supports bar charts, pie charts, line graphs, and data tables. Customize colors, groupings, and sorting to match your documentation needs.",
      },
      {
        id: "export",
        title: "Exporting Reports",
        content:
          "Export any report to Excel (.xlsx) or PDF with one click. Exports preserve formatting, charts, and table structure.",
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: What is CQL? A: Confluence Query Language, similar to Jira JQL but for Confluence content. Q: Can I export charts? A: Yes, charts export as images inside PDF/Excel exports.",
      },
    ],
  },
  {
    slug: "latex-diagrams-confluence",
    name: "LaTeX Formulas & Diagrams (Gantt Charts, ERDs & Flowcharts)",
    shortName: "LaTeX Formulas & Diagrams (Gantt Charts, ERDs & Flowcharts)",
    platform: "Confluence Cloud",
    badge: null,
    rating: 4,
    installs: 74,
    icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Latex_Math_And_UML_Diagrams_For_Confluence_2dd7288878.png",
    description:
      "Embed LaTeX equations and UML diagrams directly into Confluence for clearer technical documentation.",
    marketplaceUrl:
      "https://marketplace.atlassian.com/apps/138412229/latex-formulas-diagrams-gantt-charts-erds-flowcharts",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Render beautiful LaTeX math equations and UML/Mermaid diagrams directly inside Confluence pages. Supports Gantt charts, ERDs, flowcharts, sequence diagrams, and full LaTeX math notation.",
      },
      {
        id: "latex",
        title: "Using LaTeX Equations",
        content:
          "Insert the LaTeX macro and type your equation using standard LaTeX syntax. The formula renders inline or as a block display equation. Supports all standard LaTeX math packages.",
      },
      {
        id: "diagrams",
        title: "Creating Diagrams",
        content:
          "Use the Diagram macro with Mermaid or PlantUML syntax to create flowcharts, sequence diagrams, ERDs, and Gantt charts. The diagram renders live as you type.",
      },
      {
        id: "faq",
        title: "FAQ",
        content:
          "Q: Which diagram languages are supported? A: Mermaid and PlantUML. Q: Can I export diagrams? A: Yes, export as PNG or SVG.",
      },
    ],
  },
];
