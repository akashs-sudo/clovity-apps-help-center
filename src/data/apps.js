export const apps = [
  {
    slug: "dashboard-charts-jira",
    name: "Dashboard Templates, Charts, Graphs & Reports for Jira",
    shortName: "Dashboard Charts & Reports",
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
    shortName: "Time Tracking & PPM",
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
  // {
  //   slug: "backlog-auditor-jira",
  //   name: "Backlog Auditor & Export",
  //   shortName: "Backlog Auditor",
  //   platform: "Jira Cloud",
  //   badge: null,
  //   rating: null,
  //   installs: 9,
  //   icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/Backlog_Auditor_and_Export_70f358fa4c.png",
  //   description:
  //     "Keep your Jira backlog clean, consistent, and exportable - effortlessly.",
  //   marketplaceUrl:
  //     "https://marketplace.atlassian.com/apps/2421185342/backlog-auditor-export",
  //   sections: [
  //     {
  //       id: "overview",
  //       title: "Overview",
  //       content:
  //         "Backlog Auditor & Export helps Jira teams maintain a clean, well-structured backlog. Automatically detect issues missing estimates, descriptions, or labels. Export your entire backlog to Excel with one click.",
  //     },
  //     {
  //       id: "audit-rules",
  //       title: "Audit Rules",
  //       content:
  //         "Configure audit rules for your project: required fields (story points, description, labels, assignee), naming conventions, and age limits for open issues. Issues that violate rules are flagged in the Audit Dashboard.",
  //     },
  //     {
  //       id: "export",
  //       title: "Exporting the Backlog",
  //       content:
  //         "Click the Export button from the Backlog Auditor panel to download your full backlog as an Excel file. The export includes all standard and custom fields.",
  //     },
  //     {
  //       id: "faq",
  //       title: "FAQ",
  //       content:
  //         "Q: Does it work with all project types? A: Yes, Scrum, Kanban, and next-gen projects are supported. Q: Can I schedule exports? A: Scheduled exports are on the roadmap.",
  //     },
  //   ],
  // },
  // {
  //   slug: "jql-ai-jira",
  //   name: "JQL AI",
  //   shortName: "JQL AI",
  //   platform: "Jira Cloud",
  //   badge: null,
  //   rating: null,
  //   installs: 27,
  //   icon: "https://clovity-website.s3.ap-south-1.amazonaws.com/JQL_AI_5c9387a3f4.png",
  //   description:
  //     "Effortlessly transform natural language into precise JQL queries with AI-powered query conversion.",
  //   marketplaceUrl: "https://marketplace.atlassian.com/apps/1237395/jql-ai",
  //   sections: [
  //     {
  //       id: "overview",
  //       title: "Overview",
  //       content:
  //         "JQL AI converts plain English into Jira Query Language instantly. No more memorizing JQL syntax - just describe what you want to find, and the AI writes the perfect query for you.",
  //     },
  //     {
  //       id: "usage",
  //       title: "How to Use",
  //       content:
  //         'In Jira Issue Navigator, click the "AI" button added by JQL AI. Type your question in plain English and the app generates the correct JQL and applies it automatically.',
  //     },
  //     {
  //       id: "examples",
  //       title: "Query Examples",
  //       content:
  //         'Natural: "Bugs reported last sprint not yet fixed" → JQL: issuetype = Bug AND sprint in closedSprints() AND status != Done. Natural: "Stories with no story points" → JQL: issuetype = Story AND "Story Points" is EMPTY.',
  //     },
  //     {
  //       id: "faq",
  //       title: "FAQ",
  //       content:
  //         "Q: Do I need JQL knowledge? A: No, that is the whole point. Q: Does it learn my custom fields? A: Yes, it auto-discovers your project custom fields and includes them in suggestions.",
  //     },
  //   ],
  // },
  {
    slug: "content-formatting-confluence",
    name: "Content Formatting Macros: Tabs Navigation Visibility CSS",
    shortName: "Content Formatting Macros",
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
    shortName: "Reports & Charts",
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
    shortName: "LaTeX & Diagrams",
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
