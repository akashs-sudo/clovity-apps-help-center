export const reportsChartsConfluenceDocs = {
  appSlug: "reports-charts-confluence",
  categories: [
    {
      id: "overview",
      title: "Overview",
      articles: [
        {
          slug: "overview-intro",
          title: "Overview",
          content: `What Reports, Charts, Templates, CQL & Export for Confluence is and what it can do for you.

Reports, Charts, Templates, CQL & Export for Confluence is a macro-based reporting app that lets you build live, dynamic reports inside Confluence pages — without scripts or external tools.

## This section covers

| **Subpage** | **What you will find** |
| --- | --- |
| What's Included | Key capabilities, data sources, and what makes the app powerful |
| Benefits & Outcomes | Outcomes, business value, and when to use Custom Reports |
| Use Case Gallery | Real-world scenarios with recommended report views |
| Limitations & Compatibility | Data-source limits, permission behaviour, and performance notes |`,
        },
        {
          slug: "whats-included",
          title: "What's Included",
          content: `Reports, Charts, Templates, CQL & Export for Confluence is a macro-based reporting app that lets you build live, dynamic reports inside Confluence pages — without scripts or external tools.

## Key Capabilities

| **Capability** | **Description** |
| --- | --- |
| Data Source Selection | Spaces drill-down (visual) or Custom CQL (query-based) for flexible content targeting |
| Metadata Loading | Load expansion groups to make fields available for columns, filters, and charts |
| Display Options | Table, List, Paragraph, Grid, or Charts — choose the format that fits your audience |
| Columns & Filters | Define what data fields appear and refine which records are shown |
| Templates | 35 pre-built tabular + 17 chart templates for instant setup |
| Import / Export | Share report setups as JSON recipes across teams and spaces |
| Raw View | Inspect underlying JSON data and metadata structure for debugging |
| Explore | Discover available metadata fields with types and sample values |
| Live Preview | See changes instantly as you configure — no save needed |
| Export | Download report data as CSV or JSON for offline analysis |
| Result Limit + Pagination | Control dataset size and navigate large reports efficiently |

## Data Sources

### Option A — Custom CQL

Best for precise, rules-based, and dynamic content selection.

* Use Confluence Query Language for advanced filtering
* Target content by space, type, labels, creators, dates, and more
* Queries automatically update as content changes
* Combine multiple criteria for complex reports

### Option B — Spaces (Drill-down)

Best for browse-based, intuitive content selection without writing queries.

* Select one or more Spaces from a visual dropdown
* Drill down to specific Pages within selected spaces
* Multi-select spaces and pages simultaneously
* Ideal for non-technical users

## Display Views

| **View** | **Best For** |
| --- | --- |
| Table | Structured data with sorting — audits, compliance, governance |
| List | Simple listing format — page indexes, quick inventories |
| Paragraph | Narrative summaries — digests, executive reports |
| Grid | Card-style visual layout — team directories, dashboards |
| Charts | Visual analytics — bar, pie, and line charts |

### What Makes Reports, Charts, Templates, CQL & Export for Confluence Powerful

* No coding required — visual, user-friendly configuration interface
* Live & dynamic — reports update automatically as Confluence content changes
* Flexible — multiple views and extensive customization options
* Shareable — reuse and standardize configurations across teams and spaces
* Permission-aware — respects Confluence access rights
* Efficient — built-in pagination and result limits for performance`,
        },
        {
          slug: "benefits-outcomes",
          title: "Benefits & Outcomes",
          content: `Use Reports, Charts, Templates, CQL & Export for Confluence when you need live, permission-aware reporting built directly into your Confluence pages.

## When to Use Reports, Charts, Templates, CQL & Export for Confluence

### Single Source of Truth

* Centralized reporting in one location
* Consistent reporting across teams and spaces
* Standardized report formats organization-wide

### Reusable Configurations

* Save report definitions as templates
* Share setups via JSON export/import recipes
* Repeat the same reports across spaces with no re-configuration

### Live, Dynamic Reports

* Reports update automatically as Confluence content changes
* Dynamic data reflects current Confluence state
* No manual refresh or re-running required

## Key Benefits

| **Benefit** | **What It Means For You** |
| --- | --- |
| No coding required | Anyone can build reports — no developer needed |
| Real-time data | Reports always show current Confluence content |
| Permission-aware | Each viewer sees only content they have access to |
| Flexible formats | Choose Table, List, Grid, Paragraph, or Charts per audience |
| Reusable | One configuration, used across many pages and teams |
| Shareable | Export as JSON recipe, paste anywhere to recreate instantly |
| Debuggable | Raw View + Explore make field issues easy to diagnose |
| Scalable | Pagination + result limits handle large datasets gracefully |

## How Access & Results Work

### Permissions & Data Visibility

Reports only return content the viewer is allowed to see in Confluence. If a user cannot access a space or page, it will not appear in their report results. Reports fully respect restrictions and content permissions.

### Where Reports Run

Reports, Charts, Templates, CQL & Export for Confluence reports are created and viewed directly on Confluence pages using the macro. No external tools, dashboards, or separate applications are required.

**Important:** Two users viewing the same report may see different results — each sees only content they have permission to access.`,
        },
        {
          slug: "use-case-gallery",
          title: "Use Case Gallery",
          content: `Common scenarios where Reports, Charts, Templates, CQL & Export for Confluence delivers immediate value.

| **Use Case** | **What to Build** | **Recommended View** |
| --- | --- | --- |
| Content Auditing | Track and summarize pages, blog posts, comments across spaces. Monitor updates by users. | Table |
| Stale Content Review | Find pages not updated within a time period for cleanup campaigns. | Table + Charts |
| Team Directory | Visual cards showing team members, profile pictures, and links. | Grid |
| Activity Dashboard | Live charts showing page creation, updates, and comment trends. | Charts |
| Weekly Digest | Narrative summary of recent created/updated content in the last 7 days. | Paragraph |
| Governance & Compliance | Track ownership, updates, modifications for auditing and compliance reviews. | Table |
| Label Taxonomy Review | Find untagged pages, review label usage, clean up duplicates. | Table |
| Contributor Tracking | See who created or last modified which pages across spaces. | Table |
| Personal Dashboard | All pages authored by the current user, sorted by last modified. | Table or Grid |
| Attachment Audit | List attachments with file name, parent page, size, and preview. | Table |
| Executive Summary | Narrative-style report aggregating key metrics in readable prose. | Paragraph |
| Filtered Reporting | Apply labels, creator, date range filters to narrow results precisely. | Table |

## Detailed Use Cases

### Content Auditing

Track and summarize pages, blog posts, and comments across Confluence spaces. Monitor updates and modifications by users.

### Metadata Discovery

Use Explore to find available metadata fields. Pick correct fields for columns, filters, and charts.

### Custom Report Creation

Build reports using Spaces drill-down or Custom CQL. Configure views: Table, List, Grid, Paragraph, Charts.

### Filtered Reporting

Apply filters for labels, creator, last modifier, date ranges. Narrow preview results with AND behavior (top to bottom).

### Dynamic Dashboards

Create dashboards using Live Preview updates while configuring. Use Grid and Charts for quick visual insights.

### Template-Based Reporting

Use pre-built templates such as Pages updated by user, Pages with labels. Save reusable patterns for consistent reporting.

### Data Export & Sharing

Export report results in CSV or JSON. Share reports using Import/Export JSON recipes.

### Pagination & Result Management

Use Result Limit and Pagination to manage large datasets. Improve report performance and readability.

### Data Inspection & Debugging

Use Raw View to inspect JSON data. Validate expansions and field paths before finalizing reports.

### Governance & Compliance

Track ownership, updates, and modifications for auditing. Support governance review and compliance checks.`,
        },
        {
          slug: "limitations-compatibility",
          title: "Limitations & Compatibility",
          content: `Understanding the boundaries of Reports, Charts, Templates, CQL & Export for Confluence helps you plan effective reports and avoid common issues.

## Data Source Limits

| **Limit** | **Value** | **Reason** |
| --- | --- | --- |
| Space Selection (Spaces mode) | Up to 15 spaces | Ensures optimal system performance and efficient data processing |
| Page Selection (Spaces mode) | Up to 25 pages | Maintains report performance and prevents system overload |
| Result Limit | Configurable (e.g., 50, 100, 500) | Controlled by user via Result Limit setting |

## Permissions & Visibility

* Reports only return content the viewer is allowed to see in Confluence
* If a user cannot access a space or page, it will not appear in their report results
* Reports respect restrictions and content-level permissions
* Two users viewing the same report may see different results

## Field Availability

* Fields are only available after the required expansion is loaded
* Some fields exist only for certain content types (pages vs blogs vs attachments)
* Use Explore to verify field availability before configuring columns
* Use Raw View to confirm exact JSON paths

## Performance Considerations

* Loading many expansions simultaneously may slow down Live Preview
* Very high result limits with heavy expansions can affect performance
* Best practice: load only needed expansions, start with lower result limits

## Charts Limitations

* Charts require suitable group-by fields for aggregation
* Very small or over-filtered datasets may produce empty charts
* Charts use a separate axis/series configuration from tabular column settings

## Best Practices to Stay Within Limits

1. Start with smaller result limits (50–100) for faster testing
2. Load minimal expansions — add more only as needed
3. Use CQL to narrow scope before adding heavy expansions
4. Use Pagination instead of removing result limits
5. Test in Live Preview before saving to the page`,
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
          content: `Everything you need to build your first report in under 5 minutes

| **Subpage** | **What you will find** |
| --- | --- |
| Quick Start Guide | Step-by-step guide to build and publish your first report |
| Data Source | Spaces drill-down vs Custom CQL — when to use each |
| Expansions | What expansions are, how to load them, and best practices |
| Report Views | Overview of Table, List, Grid, Paragraph, and Chart views |
| Columns & Filters | Block types, column setup, filter operators and logic |
| Templates & Import/Export | Pre-built templates, JSON recipes, and export options |
| Macro Editor UI Tour | Visual walkthrough of every panel and tab in the macro editor |`,
        },
        {
          slug: "quick-start-guide",
          title: "Quick Start Guide",
          content: `Build your first report in under 5 minutes. Follow these four steps.

## Step 1 — Open the Macro Editor

1. Open any Confluence page and click the Edit button.
2. Type / to open the macro insert menu.
3. Search for 'Reports, Charts, Templates, CQL & Export for Confluence' and click to insert.
4. The macro editor opens automatically.

## Step 2 — Configure the Report

### Choose Your Data Source

Select Spaces (recommended for beginners) or Custom CQL from the Source dropdown in the header. Specify your source value — select spaces or enter a CQL query.

### Select a View

Choose Table from the Report Type dropdown. Table view is easiest to understand for first-time users. Other options: List, Paragraph, Grid, Charts.

### Add Expansions

In the left panel, select metadata groups. Load only the metadata you need. Common starting point: metadata and version — these cover most common fields.

### Define Columns

Navigate to the Columns tab in the right panel. Click + Add New Column, set a label, and pick a data field. Apply formatting as needed.

### Apply Filters

In the center panel, use the Filter section to narrow results. Each filter row narrows results further (AND logic). Click + Add filter to add a row. Use Delete (trash) to remove, or Clear all to reset.

### Set Result Limit

Set an appropriate limit in the header or right panel (e.g., 50, 100, 500). Start with 50 for faster testing.

## Step 3 — Confirm Results in Live Preview

The center panel shows your report results in real-time. Verify data looks correct before saving. Adjust configuration if needed.

## Step 4 — Save

Click Save to publish the report to your Confluence page. The macro editor closes and your live report appears on the page.

## Quick Start Tips

* Start with a pre-built template for faster setup — navigate to the Templates tab first
* Use Table view for your first report — it's easiest to understand
* Load minimal expansions initially, add more as needed
* Check Live Preview frequently to validate changes`,
        },
        {
          slug: "data-source",
          title: "Data Source",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports two ways to fetch Confluence content. Select from the Data Source dropdown in the macro editor header.

## Option A — Spaces (Drill-down)

Best for browse-based, simple reporting. No syntax required — ideal for non-technical users.

### Capabilities

* Select one or more Spaces — choose from all available Confluence spaces
* Select specific Pages — drill down to individual pages within selected spaces
* Multi-select — select multiple spaces and pages simultaneously
* Include Children — automatically includes all child/descendant pages under selected pages
* Visual navigation — browse through space hierarchy like a file explorer
* Search functionality — find spaces and pages by name quickly

### Limits

| **Limit** | **Value** | **Reason** |
| --- | --- | --- |
| Space Selection Limit | Up to 15 spaces | Ensures optimal system performance |
| Page Selection Limit | Up to 25 pages | Maintains report performance |

### When to Use Spaces

* Simple, straightforward reporting on known spaces
* Non-technical users who prefer visual selection over queries
* Selecting content from specific pages or documentation sections
* Quick setup without writing queries
* Content selection based on space organization

## Option B — Custom CQL

Confluence Query Language (CQL) gives you precise, rules-based control. Best for dynamic queries that update automatically as content changes.

### What CQL Can Target

* Space and content type
* Labels, creator, last modifier
* Title keyword matching
* Created and updated date windows
* Multiple combined criteria

### Example CQL Queries

**Recently updated (last 30 days):** type = page AND lastmodified >= now("-30d")

**Title contains keyword:** type = page AND title ~ "Release Notes"

**Pages in a specific space:** space = "ENG" AND type = page

**Pages with a label:** label = "decision" AND type = page

### When to Use CQL

* Dynamic, rules-based selection that updates automatically
* Filtering by metadata — labels, dates, creators, status
* Complex criteria spanning multiple spaces
* Automated reports that grow with new content
* Users familiar with CQL syntax

## Side-by-Side Comparison

| **Feature** | **Spaces (Drill-down)** | **Custom CQL** |
| --- | --- | --- |
| Ease of use | Visual, no syntax required | Requires CQL knowledge |
| Dynamic updates | Fixed selection | Fully dynamic |
| Cross-space queries | Up to 15 spaces | Unlimited |
| Child page inclusion | Include Children toggle | Use CQL descendants() |
| Technical level | Non-technical users | Technical users |
| Best for | Quick, targeted reports | Complex, automated reports |`,
        },
        {
          slug: "expansions",
          title: "Expansions",
          content: `Expansions control what metadata fields are loaded. Columns, filters, and charts all depend on the expansions you select.

## What Are Expansions?

Expansions are metadata groups that load additional field data for each content item in your report. Without loading the right expansion, a column or filter using that field will return empty values.

## Expansion Categories

| **Category** | **Fields Available** |
| --- | --- |
| Structure | ancestors, children, descendants, container |
| Body & Metadata | body, metadata, operations, restrictions, version |
| History | contributors, lastUpdated, previousVersion, nextVersion, ownedBy |

## How to Use Expansions

1. Open the macro editor — the Left Panel shows expansion groups.
2. Use the Search box to find a specific field by name.
3. Check the checkbox next to any group to load its fields.
4. Fields immediately become available for column, filter, and chart configuration.
5. Star (pin) frequently used fields to keep them at the top.

## Best Practices

* Load only what you need — each additional expansion adds fields but also increases data load time
* Use the Search box in the expansions panel to find fields quickly
* Use Favorites to pin commonly used expansions for faster access
* Remove unused expansions before saving to optimize report performance
* Use Explore (center panel) to discover what fields are available after loading expansions

**Blank column values?** If a column shows empty values, the required expansion is probably not loaded. Use Raw View to confirm the field path, then load the matching expansion.`,
        },
        {
          slug: "report-views",
          title: "Report Views",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports five display formats. Choose the view that best matches how you want to present your data.

| **View** | **Description** | **Best For** | **Pagination** |
| --- | --- | --- | --- |
| Table | Rows and columns — spreadsheet-style layout | Audits, governance, structured data | Yes |
| List | One card/row per record — simple vertical list | Page indexes, quick inventories | Yes |
| Paragraph | Flowing prose — each record becomes a text block | Weekly digests, executive summaries | No |
| Grid | Card layout in a responsive grid | Team directories, visual dashboards | Yes |
| Charts | Bar, pie, or line charts | Trend analysis, distribution insights | No |

## Table View

The default and most versatile view. Displays data in rows and columns. Best for comparing values across multiple fields.

### Key Features

* Column headers defined by your Columns tab configuration
* Sortable columns — click header to sort ascending/descending
* Pagination — control result limit and navigate pages
* CSV and JSON export available

## List View

Shows results as a simple vertical list — one item per row, minimal layout. Ideal for readable, human-friendly output.

### Key Features

* Card-based layout — each record occupies its own row
* Field labels shown inline for readability
* Supports Image block — great for profile pictures or thumbnails
* Link block creates clickable items directly in the list
* Pagination supported

## Paragraph View

Renders output as flowing prose. Each record generates a paragraph using your column template. Ideal for status updates, summaries, and narrative reports.

### Key Features

* Prose output — reads as natural text, not a table
* Columns act as text segments that are concatenated
* Prefix and suffix settings (Text block type) add connective words
* No pagination — all records rendered sequentially

## Grid View

Displays records as a responsive card grid — like a gallery. Ideal for visual content, team directories with photos, or dashboard-style pages.

### Key Features

* Responsive multi-column grid layout
* Image block renders prominently in each card
* Link block makes card titles or images clickable
* Pagination supported

## Charts View

Visualizes data with bar, pie, or line charts. Configured separately via the Charts section. Use when you want analytics and trends rather than raw records.

## Switching Between Views

Change the Report Type from the dropdown in the header. The Live Preview updates instantly — no data reload needed.

**Note:** Column configuration is shared across Table, List, Paragraph, and Grid views. Charts use a separate axis/series configuration.`,
        },
        {
          slug: "columns-filters",
          title: "Columns & Filters",
          content: `Columns define what data appears in your report. Filters refine which records are shown.

## Configuring Columns

Each column has three required settings: Column Label, Block Type, and Data Value (JSON path from loaded expansions).

## Block Types

| **Block Type** | **Description** | **Use Cases** |
| --- | --- | --- |
| Basic | Standard text/numeric display | Names, IDs, dates, simple metadata |
| Image | Displays images from URLs. Size adjustable with slider (shows px dimensions) | Profile pictures, thumbnails, logos |
| Link | Creates clickable hyperlinks. Combines link text + URL from different fields | Page titles linking to pages, URLs |
| Collection | Handles array/list data. Custom joiners: comma, pipe, newline, etc. | Labels, contributors, tags |
| Regex | Applies regex patterns to extract or transform data | Extracting patterns, data cleanup |
| Text | Enhanced display with prefix/suffix, truncation, case, fallback values | Formatted output, truncated titles |

## Column Actions

| **Action** | **Description** |
| --- | --- |
| Add Column | Click '+ Add New Column' to create a new column |
| Edit Column | Modify label, block type, source field, or formatting inline |
| Delete Column | Remove a column using the trash icon |
| Drag & Drop Reorder | Drag the handle icon to change column display order |
| Duplicate Column | Copy an existing column configuration — saves setup time for similar columns |
| Hide Column | Temporarily remove from display without deleting — configuration is preserved |

## Applying Filters

Filters refine which records appear in the preview. They run top-to-bottom with AND logic — each row further narrows results.

### Each Filter Row Has 3 Parts

| **Part** | **Description** | **Examples** |
| --- | --- | --- |
| Operator | How to compare the value | Contains, Equals, >, <, >=, <=, Starts With, Ends With, Regex, Is Empty, Advanced |
| Property | The field to filter on | Title, Space, Created Date, Last Modified, Created By, Content Type |
| Value / Query | What to compare against | "Release Notes", "DEV", currentUser() |

### How to Fill a Filter Row

1. Pick Operator
2. Choose the Property
3. Enter the Value / Query

Preview updates using the full stack of filters, top to bottom.

## Full Operator Reference

| **Operator** | **Description** | **Example** |
| --- | --- | --- |
| Contains | Field includes the value | Title contains 'Project' |
| Not Contains | Field excludes the value | Title not contains 'Draft' |
| Equals | Exact match | Type equals 'page' |
| Not Equals | Any value except this | Status not equals 'archived' |
| Starts With | Field begins with value | Title starts with 'Release' |
| Ends With | Field ends with value | Title ends with '2024' |
| Greater Than (>) | Numeric/date comparison | Version > 5 |
| Less Than (<) | Numeric/date comparison | Like count < 10 |
| Greater or Equal (>=) | Numeric/date comparison | Created >= 2024-01-01 |
| Less or Equal (<=) | Numeric/date comparison | Like count <= 100 |
| Is Empty | Field has no value | Labels is empty |
| Is Not Empty | Field has a value | Last modified is not empty |
| Regex | Pattern matching | Title matches /Release/ |
| Advanced | Custom expression | Complex multi-field expressions |`,
        },
        {
          slug: "templates-import-export",
          title: "Templates & Import/Export",
          content: `Use pre-built templates for instant setup, or share report configurations as JSON recipes across your team.

## Pre-built Templates Overview

Reports, Charts, Templates, CQL & Export for Confluence includes 35 tabular templates and 17 chart templates — ready-to-use configurations for the most common reporting scenarios. Templates save time and ensure consistent reporting patterns.

### How to Use Templates

1. Open the macro editor.
2. Navigate to the Templates tab in the right panel.
3. Search or browse to find a template.
4. Select a template — it auto-configures source, expansions, columns, filters, and view.
5. Customize as needed.
6. Review in Live Preview.
7. Save to your Confluence page.

### Benefits

* Quick start — ready-to-use configurations with zero setup
* Best practices — proven report structures for common use cases
* Consistency — standardized reporting across teams
* Customizable — use as starting points and modify as needed

## Import — Recreate from JSON Recipe

Use Import to recreate any report from a JSON configuration recipe — instantly rebuilds the full setup including source, expansions, columns, filters, and view.

### How to Import

1. Navigate to the Import tab in the right panel.
2. Paste the JSON recipe into the text area.
3. The app automatically rebuilds the entire report configuration.
4. Review in Live Preview and save.

### Recommended for

* Standardizing reports across spaces
* Sharing configurations across teams
* Quickly replicating dashboards on multiple pages

## Export Options

| **Export Type** | **Format** | **How to Access** | **What's Included** |
| --- | --- | --- | --- |
| Report Data | CSV | Center panel Export button (Table view) | All visible columns and filtered data |
| Report Data | JSON | Center panel Export button (all views) | Full data structure from Confluence |
| Report Config | JSON Recipe | Copy JSON button in Import tab | Full configuration to recreate the report |

**Tip:** Store JSON recipes on a shared Confluence 'Report Library' page — document each recipe's purpose and use case so your team can find and reuse them.`,
        },
        {
          slug: "macro-editor-ui-tour",
          title: "Macro Editor UI Tour",
          content: `A complete visual walkthrough of the macro editor — where everything is and what it does.

## Header Section

The top bar contains the primary controls for your report configuration.

| **Header Element** | **Description** | **Notes** |
| --- | --- | --- |
| Data Source | Toggle between Spaces and Custom CQL | Changes the Source Value field behavior below it |
| Source Value | The actual query or space/page selection | CQL text for CQL mode; visual selector for Spaces mode |
| Result Limit | Max records to return | Default 50. Can be set to any number (e.g. 100, 500) |
| Report Type | Display format selector | Table, List, Paragraph, Grid, Charts |
| Save | Publish the report to Confluence page | Closes editor after saving |
| Close | Exit without saving | Prompts if unsaved changes exist |

## Left Panel — Data Expansions

Load metadata fields required for columns, filters, and charts.

* Search box — real-time filtering of expansion fields by name
* Checkbox selection — check any group to load its fields
* Favorites / Pinned — click the star icon to pin frequently used fields to the top
* Hierarchical groups — organized by Structure, Body & Metadata, History

| **Expansion Category** | **Key Fields** |
| --- | --- |
| Structure | ancestors, children, descendants, container |
| Body & Metadata | body, metadata, operations, restrictions, version |
| History | contributors, lastUpdated, previousVersion, nextVersion, ownedBy |

## Center Panel — Live Preview & Tools

The center panel is your main workspace — it shows results and provides all preview and debug tools.

| **Element** | **What It Does** |
| --- | --- |
| Live Preview | Displays report results in real-time. Updates automatically as configuration changes. |
| Filter Panel | Apply filter rows (Operator + Property + Value). AND logic, top-to-bottom execution. |
| Explore | Switch to Explore mode — lists all available fields with types and sample values. |
| Export | Download data as CSV (Table view) or JSON (all views). Includes copy-to-clipboard. |
| Edit (Lock/Unlock) | Templates are locked after applying. Click Edit to unlock and modify. |
| Pagination | Previous/Next buttons, page numbers, results-per-page selector. |

## Right Panel — Configuration Tabs

Four tabs for configuring your report structure, applying templates, importing recipes, and inspecting raw data.

| **Tab** | **Purpose** | **Key Actions** |
| --- | --- | --- |
| Columns | Define what data appears and how it is formatted | Add, Edit, Delete, Reorder, Duplicate, Hide columns |
| Templates | Browse and apply 35 tabular + 17 chart templates | Search, select, apply — auto-configures everything |
| Import | Import JSON recipes to recreate report configurations | Paste JSON, validate, search, copy config |
| Raw | Inspect raw JSON returned from Confluence | View, search, expand/collapse, copy field paths |

## Saved Report on Confluence Page

After clicking Save, the macro editor closes and your live report appears directly on the Confluence page.

| **Element** | **Where It Appears** | **What It Does** |
| --- | --- | --- |
| Report Title / Header | Top of the macro | Shows the report name or description (if configured) |
| Table with Columns & Rows | Main body | Displays live Confluence data — updates automatically as content changes |
| Search Box | Top of report | Filters visible rows by keyword — does not change the data source |
| Export Button (CSV/JSON) | Top toolbar | Downloads current report data — CSV for spreadsheets, JSON for integrations |
| Pagination Controls (Prev/Next) | Bottom of report | Navigate between pages of results — shows current page and total count |
| Edit Button (pencil icon) | Top right of macro | Reopens the macro editor — only visible to users with edit permission on the page |

## Complete Workflow Summary

1. Set Data Source (Header) — choose Spaces or Custom CQL and enter source value
2. Load Expansions (Left Panel) — select metadata groups needed for your columns
3. Check Live Preview (Center) — confirm data is returning correctly
4. Use Explore (Center) — discover available field paths and types
5. Configure Columns (Right → Columns) — define what to display and how
6. Apply Filters (Center) — refine which records appear
7. Set Report Type + Result Limit (Header) — choose format and data size
8. Inspect Raw View if needed (Right → Raw) — verify JSON paths
9. Click Save (Header) — publish the live report to your Confluence page`,
        },
      ],
    },
    {
      id: "custom-tabular-report",
      title: "Custom Tabular Report",
      articles: [
        {
          slug: "custom-tabular-report-intro",
          title: "Custom Tabular Report",
          content: `Four flexible layouts — Table, List, Grid, and Paragraph

| **Subpage** | **What you will find** |
| --- | --- |
| Tabular Overview | When to use each view and how to choose the right one |
| Table View | Spreadsheet-style rows and columns — the primary report type |
| List View | One card per record — clean, human-readable output |
| Grid View | Responsive card grid — visual dashboards and directories |
| Paragraph View | Prose-style output — digests, summaries, newsletters |
| Templates | All 35 pre-built tabular templates listed and described |`,
        },
        {
          slug: "tabular-overview",
          title: "Tabular Overview",
          content: `Custom Tabular Report lets you display Confluence data in four flexible layouts — Table, List, Grid, and Paragraph. Each view is suited to a different audience and purpose, all powered by the same underlying data source and column configuration.

## Available Views

| **View** | **Layout Style** | **Best For** | **Supports Pagination** |
| --- | --- | --- | --- |
| Table | Rows and columns — spreadsheet-style | Audits, governance, structured data comparison | Yes |
| List | One card per record — vertical list | Page indexes, team directories, readable inventories | Yes |
| Grid | Card tiles in a responsive grid | Visual dashboards, profile directories, galleries | Yes |
| Paragraph | Flowing prose — one block per record | Weekly digests, executive summaries, narrative reports | No |

## What All Views Share

* Same data source — Spaces drill-down or Custom CQL
* Same expansions — load once, all views use the same metadata
* Same column configuration — Columns tab applies across Table, List, Grid, and Paragraph
* Same filters — filter rows apply to all tabular views
* Live Preview — switch between views instantly in the macro editor
* Result Limit + Pagination — control dataset size in all views

## How to Choose the Right View

| **If you want to...** | **Use This View** |
| --- | --- |
| Compare multiple fields side by side across many records | Table |
| Show a clean, readable list where each item stands alone | List |
| Present visual cards with images — like a team directory or gallery | Grid |
| Create a narrative summary — readable prose, not a data table | Paragraph |

## Switching Between Views

1. Open the macro editor.
2. Change the Report Type dropdown in the header.
3. Live Preview updates instantly — no data reload needed.
4. Save when satisfied with the selected view.

**Note:** Charts (Bar, Pie, Line) are configured separately in the Custom Charts Report section and use a different axis/series configuration.`,
        },
        {
          slug: "table-view",
          title: "Table View",
          content: `Table view displays Confluence data in rows and columns — a familiar spreadsheet-style layout. It is the primary and most versatile report type in Reports, Charts, Templates, CQL & Export for Confluence.

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Column headers | Defined by your Columns tab — label, block type, and source field |
| Sortable columns | Click any header to sort ascending or descending |
| Inline search | Filter visible rows by keyword — no data reload |
| CSV export | Download all visible columns and filtered data as a spreadsheet |
| JSON export | Full data structure download for developers or integrations |
| Pagination | Navigate large datasets with Previous/Next and page numbers |
| Result Limit | Control how many rows appear per page |
| All 6 block types | Basic, Image, Link, Collection, Regex, Text — all supported |

## Column Block Types in Table View

| **Block Type** | **What It Renders** | **Common Table Use Case** |
| --- | --- | --- |
| Basic | Plain text or number | Page ID, version number, space key, status |
| Image | Inline image (size adjustable) | Profile picture of last editor, page thumbnail |
| Link | Clickable hyperlink | Page title linking to the Confluence page |
| Collection | Array/list joined by separator | Labels as comma-separated list, contributors |
| Regex | Extracted or transformed text via pattern | Extracting version number from a title |
| Text | Formatted text with prefix, suffix, truncation, fallback | Truncated excerpt, 'N/A' fallback for empty fields |

## Configuring Table View

1. Set Report Type to Table in the header dropdown.
2. Load required expansions in the left panel.
3. Open the Columns tab in the right panel.
4. Click + Add New Column — set Label, Block Type, and Source Field.
5. Reorder columns by dragging the handle icon.
6. Apply filters in the center panel to narrow results.
7. Set Result Limit in the header.
8. Review in Live Preview, then Save.

## Export from Table View

| **Format** | **How to Access** | **Best For** |
| --- | --- | --- |
| CSV | Export button → CSV | Excel, Google Sheets, stakeholder sharing |
| JSON | Export button → JSON | Developer use, API integrations |
| Config Recipe | Import tab → Copy JSON | Share report setup with team |

**Best for:** Content audits, governance reports, compliance tracking, contributor tracking, stale content review, and any report that benefits from side-by-side field comparison.`,
        },
        {
          slug: "list-view",
          title: "List View",
          content: `List view shows each Confluence content item as a single card in a clean vertical list. It is ideal for creating readable, human-friendly output — like a page index, task list, or simple directory.

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Card-based layout | Each record occupies its own row as a standalone card |
| Field labels inline | Column labels shown next to values for easy reading |
| Image block support | Profile pictures or thumbnails render prominently in each card |
| Link block support | Card titles or fields can be clickable links |
| Pagination | Navigate large lists with Previous/Next controls |
| Inline search | Filter visible items by keyword |

## When to Use List View

* Team or people directories — one card per person with name, role, profile picture
* Task or action item lists — clean one-item-per-row layout
* Content indexes — quick overview of pages with key metadata
* Simple space inventories — lightweight listing without heavy table formatting
* Anywhere a table feels too dense — List gives more breathing room per record

## Configuring List View

1. Set Report Type to List in the header dropdown.
2. Load required expansions in the left panel.
3. Open the Columns tab — configure columns the same way as Table view.
4. Use Image block for profile pictures or thumbnails.
5. Use Link block for clickable page titles or URLs.
6. Apply filters and set Result Limit as needed.
7. Review in Live Preview, then Save.

**Best for:** Team directories, task lists, content indexes — anywhere each record should stand out as a single readable item rather than a row in a dense table.`,
        },
        {
          slug: "grid-view",
          title: "Grid View",
          content: `Grid view displays each Confluence content item as a visual card in a responsive multi-column grid. It is ideal for dashboards, team directories with profile photos, and any report where visual browsing is more important than data comparison.

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Responsive grid layout | Cards arrange in multiple columns and adapt to page width |
| Image block — prominent | Images render as the card's visual focus (e.g. profile photo, thumbnail) |
| Link block | Card title or image can be a clickable link to the Confluence page |
| Pagination | Navigate large grids with Previous/Next controls |
| Inline search | Filter visible cards by keyword |
| All column types supported | Basic, Image, Link, Collection, Regex, Text |

## When to Use Grid View

* Team / people directories — profile photo + name + role in each card
* Visual content galleries — page thumbnails or attachment images
* Portfolio dashboards — visual showcase of projects or deliverables
* Topic hubs — cards for each topic area with a preview image and link
* Anywhere a visual, browsable layout is better than a row-based table

## Configuring Grid View

1. Set Report Type to Grid in the header dropdown.
2. Load history expansion for profile picture fields.
3. Open the Columns tab — add Image block as the first column for visual cards.
4. Add Link block for the card title — set it to link to the Confluence page.
5. Add Basic or Text block columns for supporting metadata (role, space, date).
6. Apply filters and set Result Limit.
7. Review in Live Preview, then Save.

**Best for:** Team directories with profile photos, visual page catalogs, portfolio dashboards — any report where visual browsing matters more than side-by-side data comparison.`,
        },
        {
          slug: "paragraph-view",
          title: "Paragraph View",
          content: `Paragraph view converts each Confluence content item into a readable text block — prose-style output instead of a table. It is ideal for narrative summaries, weekly digests, executive reports, and any context where readable text matters more than structured data.

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Prose output | Each record becomes a readable paragraph, not a table row |
| Column concatenation | Column values are joined together to form sentences |
| Prefix & Suffix (Text block) | Add connecting words before/after field values to build natural sentences |
| Fallback values | Show a default text when a field is empty |
| No pagination | All records rendered sequentially as continuous text |
| Inline search | Filter visible paragraphs by keyword |

## When to Use Paragraph View

* Weekly content digest — narrative summary of recent created/updated pages
* Executive summaries — readable output for non-technical stakeholders
* Newsletter-style reporting — blog posts or announcements in prose format
* Change log summaries — each update described in a sentence
* Anywhere a table feels too technical — Paragraph makes data human-readable

## How to Build Readable Sentences

Use the Text block type with Prefix and Suffix settings to construct natural-language sentences from field values.

| **Column** | **Block Type** | **Prefix** | **Source Field** | **Suffix** | **Result** |
| --- | --- | --- | --- | --- | --- |
| 1 | Link | — | title → _links.webui | — | Clickable page title |
| 2 | Text | was last updated by | version.by.displayName | — | ...was last updated by John |
| 3 | Text | on | version.when | . | ...on 12 Feb 2026. |

## Configuring Paragraph View

1. Set Report Type to Paragraph in the header dropdown.
2. Load required expansions in the left panel.
3. Open the Columns tab — add columns in the order they should appear in the sentence.
4. Use Text block type — set Prefix and Suffix to add connective words.
5. Set fallback values on Text blocks so empty fields show meaningful defaults.
6. Apply filters and set Result Limit.
7. Review in Live Preview — read the output as a human would.
8. Save to your Confluence page.

**Best for:** Weekly digests, executive summaries, newsletter-style reports, change logs — any audience that prefers reading over scanning a data table.`,
        },
        {
          slug: "tabular-templates",
          title: "Templates",
          content: `Pre-built templates provide ready-to-use report configurations for common use cases. Templates save time and ensure consistent reporting patterns. All 35 templates are listed below in order.

## How to Apply a Template

1. Open the macro editor on any Confluence page.
2. Navigate to the Templates tab in the right panel.
3. Search by name or browse the list.
4. Click a template — it auto-configures the entire report.
5. Review results in Live Preview.
6. Customize columns or filters if needed.
7. Click Save to publish to your Confluence page.

## Available Pre-built Templates

| **#** | **Template Name** | **What It Shows** | **Objective** | **Best For** |
| --- | --- | --- | --- | --- |
| 1 | Pages grouped by selected labels | Pages filtered by chosen labels, showing page title + labels list | Quickly find and review all pages tagged with important labels | Governance for 'urgent/critical' pages, label cleanup, topic-based content tracking |
| 2 | Page last update details | Each page with last editor and last edited date | Track ownership and most recent activity per page | Audit 'who changed what', stale content review, accountability reporting |
| 3 | All comments with resolution status | Comments (inline + normal) with resolution status, author, modified date, excerpt | Track discussion items and unresolved feedback across Confluence | Review unresolved inline comments, discussion follow-ups, moderation/audit |
| 4 | Blog posts overview | Table of blog posts with title + excerpt/summary | Quick overview of announcements/news posts | Company news digest, blog library, communications tracking |
| 5 | Pages matching title keyword | Pages whose title contains a keyword (e.g., 'project') | Discover related pages without knowing exact names | Find 'Release Notes', 'Project', 'Design', 'Meeting Notes' pages fast |
| 6 | Recently updated content across spaces | Latest modified pages/blogs across all spaces with space + last modified | Monitor recent activity globally | Weekly admin audit, adoption tracking, activity dashboards |
| 7 | Content created by me | All pages/blogs/comments created by current user with type, contributors, excerpt | Personal contribution inventory | Performance reporting, personal dashboard, self-audit of work |
| 8 | Pages updated this year | Pages modified after start of year + contributors | Measure this year's documentation activity | Annual reporting, review top active areas, contributor visibility |
| 9 | Pages authored by me | Only pages created by current user, sorted by last modified + title | Personal page library and maintenance list | Clean up old pages you own, maintain your content set |
| 10 | Page likes in current space | Pages in current space with like count | Identify popular/high-value pages | Highlight best docs, measure engagement, identify key references |
| 11 | Attachments and images in current space | Attachments list with file name, parent page, file size, image preview | Audit attachments usage and storage | Storage cleanup, find large files, media inventory |
| 12 | My recently updated pages | Pages last modified by current user with updated time | Track your latest edits | Daily/weekly work recap, 'what did I touch recently' |
| 13 | Child pages with contributors and last editor | Child pages under current page with last editor, last modified, contributors | Manage a page tree with clear ownership/activity | Documentation hub maintenance, section owners, navigation governance |
| 14 | Recently updated pages across all spaces | Pages sorted by last modified with space + friendly update time | Global page activity feed | Admin monitoring, knowledge base activity reporting |
| 15 | Pages created in last 3 months | Pages created in last 12 weeks + last modified | Identify new content for review | Onboarding content review, new documentation QA, growth tracking |
| 16 | Pages created this year | Pages created since start of year with created date | Measure content growth (new pages) | Annual documentation growth metrics, team output reporting |
| 17 | Page creation vs last update timeline | Pages with both created date and latest update date | Understand lifecycle — fresh vs long-lived pages | Staleness analysis, maintenance planning, governance insights |
| 18 | Pages by space and creator | Pages with space + original creator | Ownership tracking across spaces | Identify responsible teams/users, transfer ownership, audits |
| 19 | Labels used in current space | Pages in current space + their labels | Label governance and taxonomy review | Standardize labels, remove duplicates, find untagged content |
| 20 | Child pages of the current page | Child pages list with excerpt | Create quick index/summary of a section | Documentation landing pages, structured navigation, hub pages |
| 21 | Recently created pages | Pages sorted by creation date (newest first) + created date | Spotlight newly created documentation | New content review queue, onboarding 'what's new' |
| 22 | Pages Updated By a Specific User | Pages with last updated by + last updated date (version fields) | Track updates by a user (or team) for accountability | Reviewer workflow, contributor reports, audit trail |
| 23 | Attachments Overview with Metadata | Table report of attachments with key metadata | Audit and manage files easily | Clean storage, find large/old files, track uploads |
| 24 | Stale Pages – Detailed View | Pages not modified in 40+ days with space info, created/creator, last modified/modifier, page link | Full stale-content audit with enough fields to take action | Cleanup campaigns, compliance reviews, maintenance scheduling |
| 25 | Content Created in Date Range | Content with type + created date + author | Report content created within a defined period | Monthly/quarterly reporting, content production tracking |
| 26 | Attachments Coverage Summary | Pages with attachment counts and attachment paging metadata + link | Understand attachment coverage per page | Identify pages with heavy attachments, storage governance |
| 27 | Owner vs Last Editor | Pages showing creator (owner) vs last updater + last updated time | Compare ownership vs active editors | Ownership reassignment, accountability checks, audit reporting |
| 28 | Pages – IDs & ARIs | Pages with content ID, ARI, base64 ARI, type | Provide internal identifiers for integrations/debugging | API troubleshooting, migration scripts, support diagnostics |
| 29 | Space & Page Status Audit | Pages with space type/status + page status + page link | Governance view for cleanup and standardization | Space lifecycle audits, ensure pages/spaces are 'current', compliance |
| 30 | Pages – Link Formats Overview | Shows API link, standard web link, and short link for pages | Help users choose correct link format for sharing/integration | Documentation linking standards, automation/webhook references |
| 31 | Blog Posts – Older than 30 Days | Blog posts created >30 days ago with space + last updated | Review older blogs for archival/cleanup | Content hygiene, outdated announcements review |
| 32 | Content – Everything Except Pages | All content items where type != page (blogs, attachments, comments, etc.) | Audit non-page content across instance | Storage cleanup, attachment audits, content-type governance |
| 33 | Blog Posts – Updated This Year | Blog posts modified since start of year with last updated + space key | Track active blog/news activity this year | Communications KPI, yearly reporting, stakeholder updates |
| 34 | Weekly Updated Pages | Pages updated in last 7 days with space + last updated + excerpt | Weekly activity snapshot | Weekly digest, team status reporting, 'what changed' |
| 35 | Today Updated Pages | Pages updated in last 24 hours with space + last updated + excerpt | Daily change tracker | Daily standups, release/change monitoring, fast review queue |

## Template Benefits

| **Benefit** | **What It Means** |
| --- | --- |
| Quick start | Ready-to-use configurations — zero manual setup needed |
| Best practices | Proven report structures for the most common use cases |
| Consistency | Standardized reporting patterns across teams and spaces |
| Customizable | Use as a starting point — add, remove, or reorder columns freely after applying |
| Unlockable | Templates are locked by default — click Edit in the center panel to modify |

**Tip:** After applying a template, click the Edit button in the center panel to unlock it — then customize columns, filters, or data source to fit your exact needs.`,
        },
      ],
    },
    {
      id: "custom-charts-report",
      title: "Custom Charts Report",
      articles: [
        {
          slug: "custom-charts-report-intro",
          title: "Custom Charts Report",
          content: `Turn Confluence content into visual insights — Bar, Pie, and Line charts

| **Subpage** | **What you will find** |
| --- | --- |
| Chart Overview | How charts work and how they are configured |
| Chart Types | Bar, Pie, and Line — when to use each |
| Chart Configuration | Step-by-step chart configuration and common patterns |
| Chart Templates | All 17 pre-built chart templates listed and described |`,
        },
        {
          slug: "chart-overview",
          title: "Chart Overview",
          content: `Reports, Charts, Templates, CQL & Export for Confluence Charts view turns Confluence content into visual insights by grouping results and applying a metric — so you can spot trends, activity, and distribution at a glance.

## What Charts Do

Charts group your Confluence data (by Space, Type, Author, Date, etc.) and apply a metric — usually Count — to produce a visual summary. Charts answer questions like 'How many pages per space?' or 'How has content grown month by month?'

## Available Chart Types

| **Chart Type** | **Best For** | **Example Use Case** |
| --- | --- | --- |
| Bar Chart | Comparing quantities across categories | Pages per space, top editors, label usage |
| Pie Chart | Understanding composition or distribution | Content type mix, likes vs no likes |
| Line Chart | Tracking change or trends over time | Pages created over time, daily updates |

## How Charts Are Configured

Charts use a separate configuration from tabular column settings. Key settings include:

* Group By — the field used to bucket/categorize data (e.g., Space, Author, Type, Month)
* Metric — what to measure per group (usually Count)
* Chart Type — Bar, Pie, or Line
* Series — optional secondary grouping for stacked charts

## When to Use Charts

* Activity dashboards — page creation trends, update frequency
* Governance insights — content distribution by space or type
* Contributor visibility — who creates or edits the most
* Engagement reporting — comment and like trends
* Storage audit — attachments by space or file type

**Tip:** Use Chart Templates in the Templates tab for instant chart setup — 17 pre-built chart configurations are ready to use.`,
        },
        {
          slug: "chart-types",
          title: "Chart Types",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports three chart types, each suited to different data and insights.

## Bar Chart

Compares grouped values using horizontal or vertical bars. Best for comparing quantities across distinct categories.

### Best For

* Pages per space — compare space sizes by page volume
* Top editors — rank users by update count
* Label usage — see which labels are most/least used
* Active spaces ranking — most updated spaces in a period

### Variants

* Simple bar — one bar per group (single metric)
* Stacked bar — bars broken into sub-segments by a secondary grouping (e.g., pages vs blogs per space)

## Pie Chart

Shows distribution as slices of a whole. Best for understanding composition or percentage split of content.

### Best For

* Content type mix — page vs blog vs comment share
* Likes distribution — liked vs not liked
* Status distribution — current vs archived
* Attachment file type breakdown — PDF vs PNG vs DOCX

## Line Chart

Shows change over time using a connected line. Best for tracking growth, trends, or activity spikes across a time axis.

### Best For

* Pages created over time — track content growth by month
* Pages updated over time — track maintenance activity
* Daily page activity by space — spot adoption or project spikes
* Comments trend — measure discussion engagement over time
* Blog publishing cadence — communications activity trend

## Choosing the Right Chart

| **Question to Answer** | **Recommended Chart** |
| --- | --- |
| How many [X] per [category]? | Bar Chart |
| What is the split/composition of [X]? | Pie Chart |
| How has [X] changed over time? | Line Chart |
| Who are the top [contributors/editors]? | Bar Chart |
| Which spaces are most/least active? | Bar Chart |
| What percentage is [type A] vs [type B]? | Pie Chart |`,
        },
        {
          slug: "chart-configuration",
          title: "Chart Configuration",
          content: `Charts are configured separately from tabular columns via the Charts section in the macro editor.

## Configuration Settings

| **Setting** | **Description** | **Example Values** |
| --- | --- | --- |
| Chart Type | Bar, Pie, or Line | Bar Chart |
| Group By | The field to bucket/categorize data | Space, Author, Type, Month, Day |
| Metric | What to measure per group | Count (most common) |
| Series | Optional secondary grouping for stacked charts | Type (page vs blog) |

## How to Configure a Chart

1. Set Report Type to 'Charts' in the header dropdown.
2. Select Chart Type — Bar, Pie, or Line.
3. Set Group By — pick the field to categorize data (e.g., Space, Author, Month).
4. Set Metric — typically Count.
5. Optionally set a Series for stacked bar charts.
6. Load required expansions so the Group By field is available.
7. Review in Live Preview — chart renders in real-time.
8. Adjust filters to narrow the dataset if needed.

## Common Configuration Patterns

### Pages per Space (Bar)

* Group By: Space
* Metric: Count
* Chart Type: Bar

### Content Type Distribution (Pie)

* Group By: Type
* Metric: Count
* Chart Type: Pie

### Monthly Content Growth (Line)

* Group By: Month (createdDate)
* Metric: Count
* Chart Type: Line

### Pages by Space and Type (Stacked Bar)

* Group By: Space
* Series: Type
* Metric: Count
* Chart Type: Bar

## Troubleshooting Charts

| **Problem** | **Check** |
| --- | --- |
| Chart shows no data | Dataset too small or over-filtered — remove a filter and try again |
| Group By field is empty | Required expansion not loaded — add expansion for that field |
| Unexpected chart results | Verify Group By field type is suitable for aggregation |
| Date axis not working | Ensure date field is from a loaded expansion |`,
        },
        {
          slug: "chart-templates",
          title: "Chart Templates",
          content: `Reports, Charts, Templates, CQL & Export for Confluence includes 17 pre-built chart templates. Each one is ready to use — just select, review in Live Preview, and save.

| **#** | **Template Name** | **Chart Type** | **Groups By** | **Use Case** |
| --- | --- | --- | --- | --- |
| 1 | Pages by space and content type | Bar (Stacked) | Space + Type | Compare pages vs blogs per space |
| 2 | Creator contributions by space | Bar (Stacked) | Creator + Space | Identify top content creators per space |
| 3 | Blog posts by space and author | Bar (Stacked) | Space + Author | See who publishes blogs and where |
| 4 | Overall content type distribution | Pie | Type | Understand content mix across instance |
| 5 | Daily page activity by space | Line | Day + Space | Track daily update trends per space |
| 6 | Total pages per space | Bar | Space | Compare space sizes by page volume |
| 7 | Most active spaces (last 30 days) | Bar | Space | Rank spaces by recent activity |
| 8 | Comments by space | Bar | Space | Measure discussion intensity per space |
| 9 | Comments by author | Bar | Author | Identify top commenters |
| 10 | Pages created over time | Line | Month (createdDate) | Track content growth trend |
| 11 | Pages updated over time | Line | Month (lastUpdated) | Track update cadence (maintenance) |
| 12 | Attachments by space | Bar | Space | Compare file usage across spaces |
| 13 | Attachments by file type | Pie | mediaType | Understand file format distribution |
| 14 | Blog posts over time | Line | Month (createdDate) | Track publishing frequency trend |
| 15 | Top page editors | Bar | Last Editor | Identify most active editors |
| 16 | Overall content growth summary | Line | Month + Type | Compare pages vs blogs growth trend |
| 17 | Comments over time | Line | Month (createdDate) | Track discussion volume trend |

## Quick-Start Guide

1. Open macro editor → navigate to Templates tab.
2. Search 'chart' or scroll to chart templates.
3. Click a template — it auto-configures source, expansions, chart type, and group settings.
4. Review in Live Preview.
5. Adjust filters or result limit if needed.
6. Save to your Confluence page.`,
        },
      ],
    },
    {
      id: "features",
      title: "Features",
      articles: [
        {
          slug: "features-intro",
          title: "Features",
          content: `Advanced tools built into the macro editor

| **Subpage** | **What you will find** |
| --- | --- |
| Live Preview | How and when the preview updates as you configure |
| Raw View | Inspect the JSON returned by Confluence and find exact field paths |
| Explore | Discover all available metadata fields with types and sample values |
| Export | Download report data as CSV or JSON |
| Edit Lock/Unlock | How template locking works and how to unlock for editing |
| Result Limit | Control dataset size and optimize report performance |`,
        },
        {
          slug: "live-preview",
          title: "Live Preview",
          content: `Live Preview allows you to see report results instantly as you configure your report. The preview updates in real-time without needing to save or refresh the page.

## Overview

Live Preview is the center panel of the macro editor. Every change you make — data source, expansions, columns, filters, or view type — is reflected in the preview immediately. This lets you validate your configuration before saving.

## When Live Preview Updates

### Data Source Changes

* Switch between Spaces drill-down and Custom CQL
* Modify space or page selections
* Update CQL queries

### Expansion Changes

* Add or remove expansion groups
* Load additional metadata fields

### Column Changes

* Create new columns
* Edit existing column configurations
* Drag and drop to reorder columns
* Change date formats, text transformations (uppercase/lowercase)
* Set truncation, prefix, suffix, or fallback values

### Filter Changes

* Add global filters
* Modify filter criteria (operator, property, value)
* Remove filters

### View & Template Changes

* Change between Table, List, Grid, Paragraph, or Charts
* Select and apply templates from the Templates tab
* Paste JSON recipes in the Import tab

## Benefits of Live Preview

| **Benefit** | **What It Means** |
| --- | --- |
| Immediate feedback | See changes without saving — no page reload needed |
| Faster configuration | Test settings in real-time and adjust instantly |
| Error detection | Identify issues (blank columns, wrong filters) before finalizing |
| Safe experimentation | Try different configurations without affecting the published report |

**Tip:** Check Live Preview frequently as you build — after adding each column and each filter. This catches issues early before they compound.`,
        },
        {
          slug: "raw-view",
          title: "Raw View",
          content: `Raw View displays the raw JSON data returned by Confluence for the content in your report. It shows the actual data structure so you can discover field paths, inspect metadata, and debug configuration issues.

## What Raw View Helps You Do

| **Purpose** | **Detail** |
| --- | --- |
| Discover available fields | Browse all fields returned by your data source and loaded expansions |
| Find exact JSON paths | Get the precise field path to use in column Data Value settings |
| Inspect data structure | Understand how Confluence returns nested objects and arrays |
| Debug blank columns | Verify whether a field exists and has a value for your content |
| Debug filter issues | Confirm field values match what your filter is comparing against |

## When to Use Raw View

* A column shows empty or unexpected values — check if the field path is correct
* A filter is not behaving as expected — confirm the field name and value format
* You need the exact JSON path for a field — copy it directly from Raw View
* You want to discover what fields are available after loading an expansion

## How to Access Raw View

1. Open the macro editor.
2. Navigate to the Raw tab in the right panel configuration tabs.
3. Raw View displays the JSON data from your current Live Preview results.
4. Use the search box to find a specific field name quickly.
5. Copy exact field paths to use in columns or filters.

## Tips for Using Raw View

* Load the required expansion first — fields only appear in Raw View after their expansion group is loaded
* Use the search box to find field names faster instead of scrolling through large JSON
* Copy the exact path — even small differences (uppercase/lowercase) cause blank columns
* Check nested fields — some values are nested inside objects (e.g., version.by.displayName)

**Note:** Raw View shows data for the current Live Preview results only. If your data source returns no results, Raw View will be empty.`,
        },
        {
          slug: "explore",
          title: "Explore",
          content: `Explore lists all available metadata fields returned by your data source and loaded expansions. It helps you identify the correct fields to use for columns and filters, and shows field types and sample values.

## Purpose

| **Purpose** | **Detail** |
| --- | --- |
| Discover available fields | View all metadata fields returned by your current data source |
| Field selection assistance | Identify the correct field path for columns and filters |
| Data type information | See field types (string, number, date, array, object) for each field |
| Sample values | View real sample data to confirm a field contains what you expect |
| Reduce trial and error | Find the right field path without guessing or checking Raw View manually |

## How to Use Explore

1. Open the macro editor and set your data source.
2. Load the required expansions in the left panel.
3. Click the Explore button in the center panel.
4. Browse through the list of available metadata fields.
5. Check the field type and sample value to confirm it's the right field.
6. Use the field path in your column Data Value or filter Property settings.

## Explore vs Raw View

| **Feature** | **Explore** | **Raw View** |
| --- | --- | --- |
| Shows fields as | Clean list — one field per row | Full JSON structure of a record |
| Field types shown | Yes — clearly labeled | Inferred from JSON value format |
| Sample values | Yes — one sample value per field | Full record data for all fields |
| Best for | Discovering and picking the right field | Verifying exact paths and nested data |
| Ease of use | Beginner-friendly | More detailed — for advanced debugging |

**Tip:** Use Explore first to discover the right field, then use Raw View to verify the exact JSON path if needed.`,
        },
        {
          slug: "export",
          title: "Export",
          content: `Export allows you to download your report data in CSV or JSON format directly from the macro editor or the published report view. Use it to save results for offline analysis, share filtered data with others, or back up report output.

## Export Formats

| **Format** | **Best For** | **How to Open** |
| --- | --- | --- |
| CSV | Sharing with stakeholders, Excel/Google Sheets analysis, offline filtering | Excel, Google Sheets, Numbers, any spreadsheet tool |
| JSON | Developer use, API integrations, data backup, programmatic processing | Code editor, JSON viewer, developer tools |

## Purpose

* Save report results for offline use and analysis
* Share filtered or formatted data with stakeholders who don't have Confluence access
* Import data into Excel, Google Sheets, or BI tools
* Back up report output at a point in time
* Use data in scripts, automations, or integrations

## How to Export

1. Open the macro editor (or view the published report on a Confluence page).
2. Click the Export button in the center panel toolbar.
3. Choose the desired format — CSV or JSON.
4. The file downloads automatically to your local system.

## What Gets Exported

* All visible columns as configured in the Columns tab
* All filtered data — only records matching your current filters
* Data as shown in Live Preview — what you see is what you export
* CSV is available from Table view; JSON is available from all views

## Export vs Import (JSON Recipe)

| **Action** | **What It Does** | **Found In** |
| --- | --- | --- |
| Export (CSV/JSON) | Downloads report DATA — the actual Confluence content records | Center panel Export button |
| Copy JSON (Recipe) | Copies report CONFIGURATION — the setup to recreate the report | Import tab → Copy JSON button |`,
        },
        {
          slug: "edit-lock-unlock",
          title: "Edit (Lock/Unlock)",
          content: `Templates in Reports, Charts, Templates, CQL & Export for Confluence are initially locked to prevent accidental changes. The Edit button in the center panel allows authorized users to unlock a template and modify its configuration.

## Overview

| **State** | **What It Means** | **What You Can Do** |
| --- | --- | --- |
| Locked (default) | Template is protected — configuration is read-only | View, preview, and export data — cannot edit columns or settings |
| Unlocked (after Edit) | Configuration is open for editing | Add, remove, reorder columns, change filters, data source, view type |

## Purpose

* Protect templates from unintended edits — locked by default after applying
* Allow authorized changes when customization is required
* Prevent accidental column deletion or configuration changes while browsing

## How to Use

1. Apply a pre-built template from the Templates tab — it loads in locked state.
2. Review the results in Live Preview.
3. To customize, click the Edit button in the center panel toolbar.
4. The configuration unlocks — columns, filters, and settings become editable.
5. Make your changes to fields, columns, filters, or data source.
6. Click Save to apply updates and publish to the Confluence page.

**Note:** The Edit lock applies to templates applied from the Templates tab. Reports built from scratch in the Columns tab are always editable.`,
        },
        {
          slug: "result-limit",
          title: "Result Limit",
          content: `Result Limit specifies the maximum number of records to be returned in a Reports, Charts, Templates, CQL & Export for Confluence report. It controls dataset size, report performance, and how many rows appear in the published view.

## Purpose

| **Purpose** | **Detail** |
| --- | --- |
| Control dataset size | Limit the number of results displayed in the report |
| Improve performance | Smaller result sets load faster — both in editor and on the published page |
| Manage large datasets | Prevent overwhelming displays when a data source returns thousands of records |
| Pagination-ready | Works together with Pagination to let users navigate large result sets efficiently |

## How to Set Result Limit

1. Open the macro editor.
2. Locate the Result Limit field in the header bar or right panel.
3. Enter the desired limit (e.g., 50, 100, 500).
4. Live Preview updates immediately to show the limited result set.
5. Save when satisfied — the limit applies to the published report.

## Best Practices

| **Scenario** | **Recommended Limit** |
| --- | --- |
| First-time setup / testing | 50 — fast preview, easy to verify |
| Standard operational reports | 100–200 — good balance of data and performance |
| Comprehensive audits / governance | 500+ — use with Pagination for navigation |
| Daily or weekly digest reports | 25–50 — keeps the report focused and readable |
| Export to CSV for full data | Set high (e.g., 1000) then export — don't rely on paginated view |

* Start with smaller limits (50–100) for faster testing
* Increase as needed for comprehensive reports
* Always combine high limits with Pagination for user-friendly navigation
* Consider performance when setting very high limits with many expansions loaded

**Tip:** For full data exports, set a high Result Limit, verify in Live Preview, then use the Export button to download as CSV or JSON rather than presenting all rows on the page.`,
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
          content: `Troubleshooting, FAQs, and how to reach the support team

| **Subpage** | **What you will find** |
| --- | --- |
| Troubleshooting Guide | Quick-reference fixes for empty results, blank columns, chart and performance issues |
| Release Notes | Latest updates, changes, and version history |
| FAQ | Common questions on permissions, templates, field setup, and debugging |
| Contact Support | How to submit a support request and what to include |`,
        },
        {
          slug: "troubleshooting-guide",
          title: "Troubleshooting Guide",
          content: `Diagnose and fix the most common Reports, Charts, Templates, CQL & Export for Confluence issues quickly.

## Quick Reference

| **Symptom** | **First Check** |
| --- | --- |
| Empty report results | Permissions → CQL query → Filters → Expansions |
| Blank column values | Expansions loaded? → JSON path correct? (Raw View) |
| Chart not showing | Group By field available? → Dataset size → Filters |
| Slow performance | Reduce expansions → Lower result limit → Narrow scope |

## Empty Report Results

**Problem:** My report is empty — no results appear.

### Check in this order:

1. Viewer permissions — does the viewer have access to the selected spaces/pages?
2. CQL correctness — try a broader query like type=page to confirm CQL is working.
3. Filters — remove filters one by one to see if a filter is excluding all results.
4. Expansions — confirm required expansions for columns/filters are loaded.

## Blank Column Values

**Problem:** A column shows empty/blank values.

### Check in this order:

5. Required expansion loaded — confirm the expansion group for that field is checked in the left panel.
6. JSON path correct — open Raw View and verify the exact path to the field.
7. Field exists for content type — some fields only exist for pages, not blogs or attachments.

## Chart Display Issues

**Problem:** Charts don't show expected results.

8. Check Group By field — it must be a suitable field for aggregation.
9. Check dataset size — chart may be empty if dataset is too small or over-filtered.
10. Check filters and date windows — ensure they're not excluding too much data.

## Performance Issues

**Problem:** Report feels slow to load or update.

11. Reduce expansions — load only the expansion groups you actually need.
12. Lower result limit — start with 50 records, increase only when needed.
13. Narrow scope — use a more specific CQL query or fewer spaces before adding heavy expansions.

## Debug Workflow

| **Step** | **Action** | **What to Look For** |
| --- | --- | --- |
| 1 | Open Raw View | Confirm data is returning at all |
| 2 | Check expansion list | Ensure required groups are checked |
| 3 | Verify JSON path | Find exact field path in Raw View |
| 4 | Check filters | Remove filters one by one |
| 5 | Broaden CQL | Start with type=page and narrow from there |
| 6 | Check permissions | Confirm viewer has access to space/pages |
| 7 | Use Explore | Verify field type and availability |
| 8 | Check Result Limit | Ensure limit isn't set to 0 or very low |`,
        },
        {
          slug: "release-notes",
          title: "Release Notes",
          content: `What's new and recently improved in Reports, Charts, Templates, CQL & Export for Confluence

## Recent Features

| **Feature** | **Description** |
| --- | --- |
| Regex Block Type | New column block type for pattern matching and data extraction |
| Text Block Type | Enhanced text display with prefix/suffix, truncation, case transform, and fallback values |
| Duplicate Column | Copy any existing column configuration with one click |
| Hide Column | Temporarily remove a column from display while preserving its configuration |
| Include Children | Spaces mode: automatically include all descendant pages under selected pages |
| Hierarchical View | Visual page tree in Spaces selector for easier navigation |
| Search in Expansions | Real-time search box in the left panel to find fields quickly |
| Search in Templates | Search box in the Templates tab for faster template discovery |
| Copy JSON to Clipboard | Copy report configuration JSON from the Import tab |
| >= and <= Operators | New filter operators for numeric and date comparisons |
| Query Help Panel | CQL reference panel for syntax guidance and error explanation |
| Compatibility Count | Shows how many fields are compatible with each column block type |

For a complete changelog and version history, please refer to the Atlassian Marketplace listing for Reports, Charts, Templates, CQL & Export for Confluence.`,
        },
        {
          slug: "faq",
          title: "FAQ",
          content: `## Permissions & Access

**Q: Do viewers see the same results as the author?**

No. Reports respect Confluence permissions. Users only see content they are allowed to access. Two users viewing the same report may see different results.

## Report Reusability

**Q: Can I reuse a report across spaces?**

Yes. Use Templates or Export/Import JSON recipes. Best practice: store recipes on a shared Confluence page (e.g., a Report Library page).

## Data Source Selection

**Q: When should I prefer CQL over Spaces drill-down?**

| **Scenario** | **Use This** |
| --- | --- |
| Simple, browse-based selection, non-technical users | Spaces (Drill-down) |
| Rules-based, dynamic queries, complex conditions | Custom CQL |
| Content from known specific pages or spaces | Spaces (Drill-down) |
| Content that updates automatically as Confluence changes | Custom CQL |

## Debugging & Troubleshooting

**Q: What's the safest way to debug field issues?**

1. Open Raw View to confirm JSON paths.
2. Ensure required expansions are loaded.
3. Check field compatibility and availability using Explore.

## Images & Visual Columns

**Q: How do I add profile pictures to reports?**

1. Add a new column in the Columns tab.
2. Select Image as the block type.
3. Load the history or metadata expansion.
4. Pick the profile picture field from the expansion.
5. Adjust the size slider — the size is shown in pixels.

**Q: Can I control image size?**

Yes. Use the size slider in the Image block configuration — the pixel dimensions are shown in the UI.

## Field Compatibility

**Q: What does '(X compatible)' mean next to a column block type?**

It shows how many available fields can work with the selected block type. Higher number means more usable fields are available for that block.

## Columns

**Q: What is the difference between Duplicate and Hide column actions?**

| **Action** | **What It Does** | **When to Use** |
| --- | --- | --- |
| Duplicate | Creates a copy of the column with identical configuration | When you need a similar column with minor changes |
| Hide | Removes the column from display but keeps the configuration | When you want to temporarily exclude a column without losing its setup |

## Quick Troubleshooting Reference

| **Symptom** | **Check** |
| --- | --- |
| Empty report | Permissions + CQL correctness + Filters + Expansions |
| Blank column values | Expansions loaded + Raw View path + Field availability |
| Slow performance | Reduce expansions + Lower result limit + Narrow scope |
| Chart not showing | Field type for Group By + Dataset size + Filters |`,
        },
        {
          slug: "contact-support",
          title: "Contact Support",
          content: `Need help with Reports, Charts, Templates, CQL & Export for Confluence? Here's how to get assistance.

## Before Contacting Support

Check these resources first — most issues can be resolved quickly:

1. Troubleshooting Guide — covers empty results, blank columns, chart issues, and performance
2. FAQ — common questions about permissions, templates, field setup, and debugging
3. Raw View — inspect your JSON data to diagnose column and filter issues
4. Explore — verify field availability for your data source

## How to Submit a Support Request

If you cannot resolve the issue using the documentation, submit a request via the Atlassian Marketplace support page for Reports, Charts, Templates, CQL & Export for Confluence.

### Include in Your Request

* Description of the issue — what are you trying to do, and what's happening instead?
* Steps to reproduce — how can we replicate the issue?
* Your data source — Spaces or Custom CQL (include the CQL query if applicable)
* Expansions loaded — which expansion groups are checked?
* Screenshot or screen recording of the issue
* Confluence version and app version

## Community & Resources

* Atlassian Community — search for Reports, Charts, Templates, CQL & Export for Confluence discussions or post a question
* Atlassian Marketplace listing — reviews, version history, and documentation links

## Contact Us

You can also reach our support team directly at [support@clovity.com](mailto:support@clovity.com)`,
        },
      ],
    },
    {
      id: "guidelines",
      title: "Guidelines",
      articles: [
        {
          slug: "guidelines-intro",
          title: "Guidelines",
          content: `Best practices for building efficient, reliable, and shareable reports

| **Subpage** | **What you will find** |
| --- | --- |
| Best Practices | Tips and guidelines for efficient, reliable, and shareable reports |`,
        },
        {
          slug: "best-practices",
          title: "Best Practices",
          content: `Follow these guidelines to build efficient, reliable, and shareable reports in Reports, Charts, Templates, CQL & Export for Confluence.

## 1. Start with Templates

* Use a pre-built template first — it configures source, expansions, columns, filters, and view in one click
* Customize to match your specific report goal after applying
* Saves time and ensures you follow proven report structures
* 35 tabular templates + 17 chart templates available

## 2. Optimize Performance

* Start with minimal expansions — load only what you need for your current columns and filters
* Add expansions one at a time and check Live Preview after each addition
* Remove unused expansions before saving — unused expansions slow down the report
* Use a lower Result Limit while testing (50–100), increase when finalizing
* Narrow your data source scope first (specific spaces or focused CQL) before adding heavy expansions

## 3. Validate in Live Preview

* Check Live Preview after every significant change — don't wait until the end
* Verify column values are not blank — blank means expansion is missing or field path is wrong
* Confirm filter behavior by adding filters one at a time and watching result count change
* Use Explore to find the right field path before configuring columns
* Use Raw View to verify exact JSON paths when columns show unexpected values

## 4. Share and Standardize

* Export report setups as JSON recipes using the Copy JSON button in the Import tab
* Store recipes on a shared Confluence 'Report Library' page for your team
* Document each recipe — name, purpose, use case, and which spaces it targets
* Use Import to recreate the same report on multiple Confluence pages without manual re-configuration

## 5. Choose the Right View

| **View** | **Best For** |
| --- | --- |
| Table | Audits, detailed lists, structured data comparison, CSV export |
| List | Clean inventories, directories, readable one-item-per-row output |
| Grid | Visual dashboards, team directories with photos, portfolio pages |
| Paragraph | Summaries, digests, executive reports, narrative-style output |
| Charts | Trends, comparisons, distribution insights, activity dashboards |

## 6. Quick Checklist

### Before You Build

* Check if a pre-built template covers your use case
* Decide between Spaces (browse) or Custom CQL (rules-based) as your data source
* Choose the view that matches your audience — table for analysts, paragraph for executives

### While Building

* Load minimal expansions — add only what current columns need
* Validate in Live Preview after each column and filter change
* Use Explore to find field paths, Raw View to debug unexpected values

### After Building

* Export the JSON recipe from the Import tab and store it in a Report Library page
* Document the recipe purpose and use case
* Set an appropriate Result Limit — use Pagination for large datasets

## 7. Permissions & Sharing

* Remember that each viewer sees only the content they have permission to access
* Test the report as a viewer (not an admin) to confirm the correct content is visible
* For org-wide reports, ensure the target spaces are accessible to all intended viewers
* Use Import/Export JSON to share the report configuration — not the data`,
        },
      ],
    },
  ],
};
