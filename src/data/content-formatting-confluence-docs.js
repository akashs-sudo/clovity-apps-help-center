import { getAllArticles, findArticle } from "./time-tracking-docs";
export { getAllArticles, findArticle };

export const contentFormattingConfluenceDocs = {
  categories: [
    {
      id: "overview",
      title: "Overview",
      articles: [
        {
          slug: "overview",
          title: "Overview",
          content: `# Content Formatting Macros: Tabs, Navigation, Visibility & CSS

Content Formatting Macros is a Confluence Cloud app that gives teams four powerful capabilities in one install:

## Four Core Capabilities

**1. Advanced Content Navigation (Tabs)**
Create multi-tab layouts inside any Confluence page. Organize complex documentation, runbooks, or knowledge bases into clean, clickable tab interfaces without leaving the page editor.

**2. 18 Rich Content Formatting Macros**
Buttons, Alerts, Backgrounds, Tooltips, Progress Bars, Footnotes, Pop-up Dialogs, Advanced Expand, Advanced Cards, Interactive Banners, Numbered Headings, Dividers, Countdown Timers, User Profiles, Status indicators, JSON Viewer, and more.

**3. Conditional Visibility (Show / Hide)**
Control which content users see based on Confluence groups, space roles, or login status. Show internal notes only to admins; hide drafts from guests.

**4. Attachment Management & Audit**
Bulk-view, label, and manage file attachments across your Confluence space from a single panel. Identify orphaned files, filter by type, and keep your space tidy.

## Supported Macros at a Glance

| Macro | Purpose |
|---|---|
| Tab Navigation | Multi-tab page layout |
| Tab Parent Content Mapper | Tabs pulling from child pages |
| Tab Label Content Mapper | Tabs filtered by label |
| Tab Page Mapper | Tabs from specific pages |
| Custom Tabs | Manual rich-content tabs |
| Conditional Show | Show content to specific groups |
| Conditional Hide | Hide content from specific groups |
| Buttons | Styled CTA buttons |
| Background | Section background color/image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal definitions |
| Progress Bar | Visual completion indicator |
| Footnotes | Inline reference notes |
| Pop-up Dialog | Modal overlays |
| Advanced Expand | Styled collapsible sections |
| Advanced Cards | Rich content cards with layout |
| Interactive Banner | Full-width announcement banners |
| Numbered Headings | Auto-numbered heading hierarchy |
| Divider | Styled horizontal rules |
| Countdown Timer | Live event countdown |
| User Profile | Confluence user info cards |
| Status Macro | Color-coded status badges |
| JSON Viewer | Formatted JSON display |

## Platform Compatibility

- **Confluence Cloud**: Fully supported
- **Confluence Data Center / Server**: Not supported
- **Confluence Mobile**: Read-only rendering; editing not available on mobile

## What's New
The app is actively updated. Check the Atlassian Marketplace listing for the latest release notes and version history.`,
        },
        {
          slug: "whats-included",
          title: "What's Included",
          content: `# What's Included

Content Formatting Macros ships four distinct capability sets in a single Confluence Cloud app.

## Part 1 — Advanced Content Navigation (Tabs)

Four tab macro variants let you build tabbed interfaces tailored to your content structure:

- **Tab Navigation** — the base tab container; works with any of the three mapper types below
- **Tab Parent Content Mapper** — auto-populates tabs from the child pages of a selected parent page
- **Tab Label Content Mapper** — auto-populates tabs from pages that share a specific Confluence label
- **Tab Page Mapper** — lets you hand-pick exactly which pages appear as tabs
- **Custom Tabs** — fully manual tabs where you write content directly inside each tab

## Part 2 — 18 Rich Content Formatting Macros

| Macro | What It Does |
|---|---|
| Buttons | Styled link buttons with color, size, and icon options |
| Background | Applies a background color or image to a page section |
| Alert | Info / Warning / Error / Success banners |
| Tooltip | Hover text definitions for terms or abbreviations |
| Progress Bar | Visual percentage-based progress indicator |
| Footnotes | Inline superscript references with collected footnote text |
| Pop-up Dialog | Trigger-based modal overlay |
| Advanced Expand | Collapsible section with custom header and styling |
| Advanced Cards | Structured content cards with layout and link options |
| Interactive Banner | Full-width announcement or hero banner |
| Numbered Headings | Automatically numbers heading levels |
| Divider | Styled horizontal separator (line, dots, gradient) |
| Countdown Timer | Live timer counting to a target date/time |
| User Profile | Displays a Confluence user's profile card |
| Status Macro | Color-coded status badge with 13 preset sets |
| JSON Viewer | Renders JSON in a formatted, readable viewer |

## Part 3 — Conditional Visibility

Two macros control content visibility at the section level:

- **Conditional Show** — wraps content that should only appear to specified groups or roles
- **Conditional Hide** — wraps content that should be hidden from specified groups or roles

Conditions can be based on Confluence groups, space roles (admin, user), or login status (authenticated vs. anonymous).

## Part 4 — Attachment Management & Audit

A dedicated panel accessible from the Confluence sidebar or space admin area that lets you:

- View all attachments across the space in one place
- Filter by file type, page, uploader, or date
- Bulk-label or bulk-delete attachments
- Identify orphaned files not linked from any page`,
        },
        {
          slug: "benefits-outcomes",
          title: "Benefits & Outcomes",
          content: `# Benefits & Outcomes

## Why Teams Choose Content Formatting Macros

### 1. Reduce Page Sprawl
Instead of creating ten separate pages for ten topics, use tabs to consolidate related content onto a single page. Teams report 40–60% fewer pages after migrating to tabbed layouts.

### 2. Improve Navigation Speed
Readers find what they need without endless scrolling. Tab interfaces, anchored buttons, and pop-up dialogs surface information in context.

### 3. Enforce Information Hierarchy
Numbered Headings, Dividers, and Alert macros give pages consistent visual structure. Readers instantly understand priority and flow.

### 4. Control Information Access
Conditional Show and Hide let a single page serve multiple audiences — without duplicate pages or manual copy-paste maintenance. Show sensitive data only to the right Confluence groups.

### 5. Drive Action with Buttons and Banners
Interactive Banners and Button macros turn passive documentation into active guides. Link to forms, systems, or next steps directly from the page.

### 6. Keep Attachments Organized
The Attachment Management Center prevents the common problem of spaces filling with untracked, orphaned files. Regular audits take minutes instead of hours.

### 7. Accelerate Onboarding
Use the included Page Templates (Employee Onboarding, Team Hub) to give new hires and new teams a structured, rich starting point immediately after install.

### 8. Professional Presentation
Cards, Backgrounds, Countdown Timers, and User Profile macros let teams create polished, visually engaging pages without any CSS or design skills.`,
        },
        {
          slug: "use-cases",
          title: "Use Cases Gallery",
          content: `# Use Cases Gallery

## Common Ways Teams Use Content Formatting Macros

### 1. IT Runbook with Tabs
**Scenario**: A 40-step deployment runbook was split across 8 pages, making it hard to follow.
**Solution**: Use Tab Navigation with one tab per environment (Dev, Staging, Prod). Each tab contains that environment's steps.
**Macros Used**: Tab Navigation, Alert (for warnings), Buttons (links to monitoring dashboards)
**Outcome**: Single page, zero cross-page navigation required during an incident.

### 2. HR Policy Hub with Conditional Visibility
**Scenario**: HR needs one policy page visible to all staff, but with a manager-only section for compensation bands.
**Solution**: Wrap the compensation section in Conditional Show, restricted to the "HR Managers" Confluence group.
**Macros Used**: Conditional Show, Background (highlight manager section), Alert
**Outcome**: One page serves all audiences; no duplicate maintenance.

### 3. Product Release Notes with Status and Progress
**Scenario**: Product team wants to track feature release status visually.
**Solution**: Status Macro badges (In Progress, Done, Blocked) plus Progress Bar macros showing completion per feature area.
**Macros Used**: Status Macro, Progress Bar, Numbered Headings
**Outcome**: Stakeholders read status at a glance without needing Jira access.

### 4. Team Wiki with Automatic Tab Updates
**Scenario**: Each sub-team maintains their own child page under a team hub. Managers want a single tabbed overview.
**Solution**: Tab Parent Content Mapper pointing at the team hub parent page. New child pages automatically appear as tabs.
**Macros Used**: Tab Navigation, Tab Parent Content Mapper
**Outcome**: Zero manual maintenance — tabs update automatically as child pages are created.

### 5. Event Countdown and Announcement
**Scenario**: HR wants to build excitement for an all-hands meeting.
**Solution**: Interactive Banner with event branding, Countdown Timer showing days/hours remaining.
**Macros Used**: Interactive Banner, Countdown Timer, Buttons (RSVP link)
**Outcome**: Engaging, time-aware announcement page.

### 6. Knowledge Base with Inline Definitions
**Scenario**: Technical documentation uses acronyms unfamiliar to new readers.
**Solution**: Tooltip macros wrap every acronym. Hover reveals the definition without cluttering the page.
**Macros Used**: Tooltip, Footnotes (for citations), Advanced Expand (for deep-dive sections)
**Outcome**: Readable for beginners; detailed for experts.`,
        },
        {
          slug: "limitations-compatibility",
          title: "Limitations & Compatibility",
          content: `# Limitations & Compatibility

## Platform Support

| Platform | Support Level |
|---|---|
| Confluence Cloud | Full support |
| Confluence Data Center | Not supported |
| Confluence Server | Not supported |
| Confluence Mobile (iOS/Android) | Read-only rendering; macros display as static content |

## Macro-Specific Limitations

### Tab Macros
- Tabs do not support deep-linking to a specific tab via URL by default
- Tab content is not indexed separately by Confluence search — search will land on the page, not the specific tab
- Nesting Tab Navigation inside another Tab Navigation is not recommended and may produce layout issues
- Tab Page Mapper requires the user inserting the macro to have read access to all mapped pages

### Conditional Visibility
- Visibility is evaluated at page render time based on the viewing user's Confluence groups
- **Important**: Conditional Hide/Show is a UI control, not a security boundary. The underlying page content is still accessible via the Confluence API to users with page read permission. Do not rely on these macros to protect truly sensitive data — use Confluence page restrictions for that.
- Anonymous (not logged-in) users are treated as a single audience type

### Rich Content Macros
- Background Macro: background images must be publicly accessible URLs; Confluence attachment URLs may not render correctly
- Countdown Timer: displays in the viewer's local timezone
- JSON Viewer: large JSON payloads (>500KB) may affect page load performance
- User Profile Macro: requires the displayed user to have a Confluence Cloud account in the same site

### Attachment Management Center
- Bulk operations affect only attachments the current admin has permission to manage
- Deletion via the Attachment Center is permanent and cannot be undone from within the app

## Browser Compatibility
All modern browsers (Chrome, Firefox, Edge, Safari) are supported. Internet Explorer is not supported.`,
        },
      ],
    },
    {
      id: "get-started",
      title: "Get Started",
      articles: [
        {
          slug: "get-started",
          title: "Get Started",
          content: `# Get Started with Content Formatting Macros

## Who This App Is For

- **Confluence Space Admins** who want to improve page structure and navigation across their space
- **Page Authors** who want richer, more engaging content without custom code
- **Team Leads** who want to consolidate scattered documentation into organized, tabbed hubs
- **IT and HR teams** who need to show different content to different audiences on the same page

## Quick-Start Checklist

1. Install the app from the Atlassian Marketplace (admin required)
2. Grant required permissions during install
3. Open any Confluence page in edit mode
4. Click the **+** (Insert) button in the editor toolbar
5. Search for any macro name (e.g., "Tab Navigation", "Alert", "Buttons")
6. Configure the macro settings in the panel that appears
7. Publish the page

## Four-Step Path to Your First Tabbed Page

### Step 1 — Plan Your Structure
Decide how many tabs you need and what content belongs in each. The most common pattern: one tab per topic, environment, team, or audience.

### Step 2 — Choose Your Tab Mapper
- **Tab Parent Content Mapper**: Use when tabs should mirror child pages (auto-updating)
- **Tab Label Content Mapper**: Use when you tag pages with labels and want tabs to reflect that grouping
- **Tab Page Mapper**: Use when you want to hand-pick exactly which pages appear as tabs
- **Custom Tabs**: Use when content lives directly on the page, not in separate child pages

### Step 3 — Insert and Configure
Insert the Tab Navigation macro, then insert the appropriate mapper macro inside it. Configure the mapper settings (parent page ID, label name, or page list).

### Step 4 — Enrich with Formatting Macros
Add Alert macros for warnings, Buttons for CTAs, Background for section separation, and Status badges for current state. Publish when ready.`,
        },
        {
          slug: "admin-setup",
          title: "Admin Setup",
          content: `# Admin Setup

## Installation

1. Go to **Confluence Settings** → **Find new apps** (requires Confluence Admin role)
2. Search for **"Content Formatting Macros Clovity"**
3. Click **Try it free** or **Buy now**
4. Accept the requested permissions
5. The app activates immediately — no restart required

## Permissions Required

The app requests the following scopes during installation:

| Permission | Reason |
|---|---|
| Read Confluence content | Tab mappers need to read child/labeled pages |
| Read space and page permissions | Conditional visibility evaluation |
| Read user profile | User Profile macro |
| Manage attachments | Attachment Management Center |

## Attachment Management Center Configuration

After install, configure the Attachment Center from **Space Settings** → **Content Formatting Macros** → **Attachment Center**:

1. **Enable Attachment Center**: Toggle on for each space where you want audit capability
2. **Set Storage Thresholds**: Configure warning thresholds for total attachment storage
3. **Configure Retention Rules**: Optionally set rules to flag attachments older than N days with no page links

## Admin Checklist

- [ ] App installed from Marketplace
- [ ] All permissions accepted
- [ ] Attachment Center enabled for target spaces
- [ ] Space members notified of new macro availability
- [ ] Optional: Page templates applied to key spaces (see Page Templates section)

## Granting Access to Specific Users

All Confluence users with edit access to a page can insert and configure any macro. There is no per-macro permission control — access is governed by standard Confluence page edit permissions.`,
        },
        {
          slug: "insert-macros",
          title: "Inserting Macros",
          content: `# Inserting Macros

## General Steps for Any Macro

1. Open a Confluence page in **Edit** mode
2. Place your cursor where you want the macro
3. Click the **+** (Insert) button in the toolbar, or type **/** to open the inline menu
4. Type the macro name in the search box
5. Click the macro to insert it
6. Fill in the configuration panel on the right
7. Click **Save** in the panel (or click outside) to preview
8. **Publish** the page to make it live

## Inserting Tab Navigation (Step-by-Step)

1. Insert **Tab Navigation** macro — this is the outer container
2. Inside the Tab Navigation, insert one of: **Tab Parent Content Mapper**, **Tab Label Content Mapper**, **Tab Page Mapper**, or start building **Custom Tabs**
3. Configure the mapper or add your custom tab content
4. Preview to confirm tabs appear correctly
5. Publish

## Inserting Conditional Show / Hide

1. Select the text or content blocks you want to show/hide
2. Insert the **Conditional Show** or **Conditional Hide** macro
3. The selected content is wrapped inside the macro
4. In the config panel, enter the Confluence group name(s) or role(s)
5. Preview in View mode to confirm (you will see your own groups)

## Tips

- You can nest most formatting macros inside tabs — Alerts, Backgrounds, Cards, etc. all work inside tab content
- Conditional macros can wrap tab containers — use this to show an entire tabbed section only to specific groups
- The JSON Viewer macro requires you to paste valid JSON in the macro body — it will show an error if the JSON is invalid
- For Buttons macro, the URL field accepts relative Confluence paths or full external URLs`,
        },
        {
          slug: "recommended-patterns",
          title: "Recommended Setup Patterns",
          content: `# Recommended Setup Patterns

## Pattern 1 — Team Hub Page

**Goal**: A single landing page for a team with tabs for each functional area.

**Setup**:
- Create child pages: "Engineering", "Design", "QA", "Roadmap"
- On the hub page, insert Tab Navigation + Tab Parent Content Mapper
- Point the mapper at the hub page itself as the parent
- Each child page renders as a tab automatically

**Settings**: Tab style: Underline or Pill | Show page title as tab label: Yes | Include child-of-child pages: No

---

## Pattern 2 — Release Notes Archive

**Goal**: Tabs for each release version, with the latest first.

**Setup**:
- Label each release page: \`release-v1\`, \`release-v2\`, etc.
- On the release notes index page, insert Tab Navigation + Tab Label Content Mapper
- Set label = \`release\` (or a common prefix)
- Sort by created date descending

---

## Pattern 3 — Multi-Audience Policy Page

**Goal**: One policy page where managers see extra compensation data.

**Setup**:
- Write shared policy content normally
- Wrap the compensation section in Conditional Show macro
- Set group = \`confluence-hr-managers\`

**Best Practice**: Add an Alert macro above the Conditional Show with the text "Some content on this page is visible only to HR Managers."

---

## Pattern 4 — Product Status Dashboard

**Goal**: Visual status of all features in a release.

**Setup**: Use a table with Status Macro badges in each row. Add a Progress Bar at the top showing overall completion. Add an Alert (warning) for any blocked items.

---

## Pattern 5 — Onboarding Checklist Page

**Goal**: New hire page with tabs for Week 1, Week 2, Week 3, and Resources.

**Setup**: Use Custom Tabs (4 tabs). Each tab contains a task list, assigned contacts, and Button macros linking to key systems.

---

## Pattern 6 — Incident Runbook

**Goal**: Runbook with tabs per severity level.

**Setup**: Custom Tabs: P1 Runbook, P2 Runbook, P3 Runbook, Escalation. Alert macros at the top of P1 tab (Error type, red). Buttons linking to PagerDuty, Slack channels, monitoring dashboards.`,
        },
        {
          slug: "update-existing-pages",
          title: "Updating Existing Pages",
          content: `# Updating Existing Pages

## Three Approaches to Migrating Existing Content

### Approach 1 — Wrap Existing Content in Tabs

Best for pages that already have clearly separated sections.

1. Open the page in Edit mode
2. Select all content for the first logical section
3. Cut it (Ctrl+X / Cmd+X)
4. Insert Tab Navigation + Custom Tabs
5. Paste the section content inside the first tab
6. Repeat for each section
7. Delete the old section headers (tabs replace them)

### Approach 2 — Convert Child Pages to Tab Views

Best when content already lives across multiple child pages.

1. On the parent (index) page, clear existing content
2. Insert Tab Navigation + Tab Parent Content Mapper
3. Point the mapper at the current parent page
4. Each child page becomes a tab automatically
5. Keep child pages as-is — they are still accessible directly

### Approach 3 — Gradual Enrichment

Best for large spaces where a full migration isn't practical.

1. Start with high-traffic pages only
2. Add Alert macros to existing warning callouts
3. Add Button macros to existing "click here" text links
4. Convert large "wall of text" sections to Advanced Expand macros
5. Move to tab layouts in a second pass

## Common Gotchas

| Situation | What to Do |
|---|---|
| Existing Confluence Expand macros | They still work, but Advanced Expand offers more styling options. You don't have to replace them. |
| Inline images inside tab content | Fully supported. No changes needed. |
| Jira issue macros inside tabs | Fully supported. |
| Table of contents macro inside tabs | Works, but TOC only scans the visible tab content, not all tabs. |
| Existing page restrictions | Tab mappers respect page restrictions — restricted child pages won't appear as tabs to users who don't have access. |

## Rollout Plan for Large Spaces

1. Identify top 10 most-visited pages using Confluence Analytics
2. Pilot with 2–3 pages, gather feedback
3. Document your team's preferred tab style and macro config in a style guide page
4. Use that style guide page as the template for all subsequent migrations
5. Train page owners with a 15-minute walkthrough using the inserted macros`,
        },
      ],
    },
    {
      id: "tab-navigation",
      title: "Advanced Content Navigation",
      articles: [
        {
          slug: "tab-navigation",
          title: "Tab Navigation Overview",
          content: `# Advanced Content Navigation

## What Are Tab Macros?

Tab macros let you display multiple sections of content inside a single Confluence page using a familiar tabbed interface. Readers click a tab label to switch views — no page navigation required.

## Two Ways to Create Tabs

### Method 1 — Content Mapper Tabs (Recommended for Existing Pages)

Insert **Tab Navigation** and pair it with one of three mapper macros:

| Mapper | Use When |
|---|---|
| Tab Parent Content Mapper | Tabs should auto-populate from child pages of a parent |
| Tab Label Content Mapper | Tabs should auto-populate from pages sharing a label |
| Tab Page Mapper | You want to hand-pick specific pages as tabs |

Mapper tabs are dynamic — they update automatically when child pages, labels, or page lists change.

### Method 2 — Custom Tabs (Manual Content)

Insert **Tab Navigation** without a mapper, and add **Custom Tab** containers inside it. Write content directly in each tab. Use this when content doesn't already exist as separate pages.

## Common Controls (All Tab Types)

| Setting | Options | Default |
|---|---|---|
| Tab style | Underline, Pill, Box | Underline |
| Tab position | Top, Left, Right | Top |
| Default open tab | First, Last, or specific tab number | First |
| Tab label size | Small, Medium, Large | Medium |

## Behavior Notes

- The active tab state is not persisted in the URL — refreshing the page always opens the default tab
- All tab content is rendered in the DOM — Confluence search will find text inside any tab
- Tab macros are fully nestable with other formatting macros (Alert, Background, Cards, etc.) inside each tab's content area`,
        },
        {
          slug: "tab-parent-mapper",
          title: "Tab Parent Content Mapper",
          content: `# Tab Parent Content Mapper Guide

## What It Does

The Tab Parent Content Mapper automatically creates one tab for each **child page** of a specified Confluence parent page. When child pages are added, renamed, or removed, the tabs update automatically — no manual editing required.

## When to Use It

- You already have (or plan to create) separate child pages for each topic
- You want tabs to stay in sync with your page hierarchy automatically
- Teams maintain individual pages and a hub page should aggregate them as tabs

## How to Set It Up

1. Insert the **Tab Navigation** macro on your hub page
2. Inside it, insert the **Tab Parent Content Mapper** macro
3. In the config panel, set the **Parent Page** — either the current page or another page in the space
4. Choose sort order and any filtering options
5. Preview and publish

## Settings Reference

| Setting | Description | Default |
|---|---|---|
| Parent Page | The page whose children become tabs. You can type a page name or paste a page URL. | Current page |
| Sort Order | Alphabetical, Manual (page tree order), Created Date, Modified Date | Manual (page tree order) |
| Max Tabs | Maximum number of child pages to show as tabs | All |
| Exclude Pages | Comma-separated list of page titles or IDs to exclude | None |
| Depth | How many levels of children to include (1 = direct children only) | 1 |

## Important Behaviors

- **Access control respected**: If a viewer doesn't have read access to a child page, that tab does not appear for them
- **Draft pages are excluded**: Only published child pages appear as tabs
- **Tab label = page title**: The tab label automatically uses the child page's title. If you rename the child page, the tab label updates on next page view.`,
        },
        {
          slug: "tab-label-mapper",
          title: "Tab Label Content Mapper",
          content: `# Tab Label Content Mapper Guide

## What It Does

The Tab Label Content Mapper creates tabs based on **Confluence page labels**. Each unique label value (or a set of label values you configure) becomes a tab, and all pages with that label appear as the tab's content.

## When to Use It

- Pages are already organized by label (release version, product area, team name)
- You want a cross-hierarchy tab view that spans multiple parent pages
- You want to let page authors control which tab their page appears in by adding/removing a label

## How to Set It Up

1. Apply consistent labels to the pages you want to group (e.g., \`v1\`, \`v2\`, \`v3\` for release notes)
2. Insert **Tab Navigation** on your index page
3. Inside it, insert **Tab Label Content Mapper**
4. In the config panel, enter the label(s) — one label per tab, or a shared prefix

## Two Configuration Modes

### Mode 1 — One Label Per Tab
Enter each label separately. Each label creates one tab. Pages tagged with that label appear in that tab.

### Mode 2 — CQL Filter
Enter a CQL query to define which pages are eligible, then group by a specific label.

Example CQL: \`space = "TEAM" AND label in ("release") ORDER BY created DESC\`

## Settings Reference

| Setting | Description |
|---|---|
| Labels | Comma-separated list of labels; each becomes one tab |
| Space | Restrict pages to a specific space (default: current space) |
| Sort | How pages within each tab are sorted |
| Max Pages Per Tab | Limit pages shown per tab |
| Tab Label Display | Use label as tab name, or use first page title found |

## Behaviors

- Pages with multiple matching labels appear in each matching tab
- Removing a label from a page removes it from that tab automatically
- Labels are case-insensitive in tab matching`,
        },
        {
          slug: "tab-page-mapper",
          title: "Tab Confluence Page Mapper",
          content: `# Tab Confluence Page Mapper Guide

## What It Does

The Tab Page Mapper lets you **hand-pick specific pages** from anywhere in the Confluence space to appear as tabs. Unlike the Parent or Label mappers, this one does not auto-update — you control exactly which pages are included and in what order.

## When to Use It

- You want precise control over which pages appear as tabs
- The pages you're grouping don't share a parent or a label
- You need tabs that pull from multiple different spaces
- The auto-updating behavior of other mappers would include pages you don't want

## How to Set It Up

1. Insert **Tab Navigation** on your page
2. Inside it, insert **Tab Page Mapper**
3. In the config panel, add pages one by one — search by title or paste page URLs
4. Drag to reorder the page list
5. Optionally set a custom tab label for each page (overrides the page title)
6. Preview and publish

## Comparison: When to Use Which Mapper

| Criterion | Parent Mapper | Label Mapper | Page Mapper |
|---|---|---|---|
| Auto-updates when pages added | Yes | Yes | No |
| Works across spaces | No | Yes (with space param) | Yes |
| Requires specific page hierarchy | Yes | No | No |
| Custom tab label per tab | No | No | Yes |
| Good for curated collections | No | No | Yes |

## Settings Reference

| Setting | Description |
|---|---|
| Pages | Ordered list of pages to include as tabs |
| Custom Tab Label | Optional override label for each tab (uses page title if blank) |
| Open in New Page Link | Optionally show a "Open page" link in each tab footer |

## Known Behavior

If a page in the list is deleted, the tab for that page disappears silently. Check your page list periodically if content is maintained by others.`,
        },
        {
          slug: "create-custom-tabs",
          title: "Create Custom Tabs",
          content: `# Create Custom Tabs Guide

## What Are Custom Tabs?

Custom Tabs let you write content **directly inside each tab** instead of pulling from other pages. Use this when the content you want to tab doesn't exist as separate Confluence pages, or when you want full control over tab content without creating child pages.

## When to Use Custom Tabs

- New content being written for the first time
- Content that doesn't make sense as standalone pages
- Small amounts of tabbed content where separate pages would be overkill
- Tabs that mix content types (text, images, tables, macros) freely

## How to Create Custom Tabs

1. Insert the **Tab Navigation** macro on your page
2. Inside it, do NOT insert a mapper — instead, click **Add Tab** in the macro body
3. Each click adds a new tab container
4. Click on a tab to select it, then type or insert content inside it
5. Double-click the tab label to rename it
6. Drag tabs left/right to reorder
7. Publish the page

## Three Content Types Supported in Custom Tabs

### Type 1 — Rich Text
Type directly inside the tab. Use all standard Confluence formatting: headings, tables, lists, code blocks, inline images.

### Type 2 — Other Macros
Insert any other Confluence macro inside a tab — including the Content Formatting macros themselves. Nest Alert, Background, Card, Button macros freely.

### Type 3 — Included Pages
Use the Confluence "Include Page" macro inside a tab to pull in another page's content. This is a middle ground between Custom Tabs and mapper tabs — you pick the pages but include their content inline.

## Tab Limits

- No enforced maximum number of tabs, but more than 10 tabs becomes difficult to navigate on narrow screens
- Tab labels should be kept short (under 20 characters) to avoid wrapping
- All custom tab content is stored on the current page — it is not accessible via direct URL`,
        },
      ],
    },
    {
      id: "dynamic-visibility",
      title: "Dynamic Visibility",
      articles: [
        {
          slug: "dynamic-visibility",
          title: "Dynamic Visibility Overview",
          content: `# Dynamic Visibility

## What Is Conditional Visibility?

Conditional visibility macros let you show or hide sections of content based on **who is viewing the page**. A single page can display different content to different audiences — admins see internal notes, guests see the public version, and managers see the compensation table.

## Two Macros

| Macro | Behavior |
|---|---|
| **Conditional Show** | Content is hidden by default; shown only to users who match the condition |
| **Conditional Hide** | Content is visible by default; hidden only for users who match the condition |

## Condition Types

| Condition | Description |
|---|---|
| Confluence Group | Show/hide based on Confluence group membership (e.g., \`confluence-admins\`) |
| Space Role | Show/hide based on space role: Space Admin or Space User |
| Login Status | Show to logged-in users only, or show to anonymous users only |

## Common Patterns

**Pattern 1 — Admin-only notes**: Conditional Show, condition: Space Admin.

**Pattern 2 — Guest-friendly version**: Conditional Hide, condition: Anonymous.

**Pattern 3 — Manager-only HR content**: Conditional Show, condition: group = \`hr-managers\`.

**Pattern 4 — Draft watermark**: Conditional Show, condition: Space Admin. Wraps a "DRAFT — DO NOT DISTRIBUTE" banner.

## Important Warning

> **Conditional visibility is a UI control, not a security boundary.**
>
> Users with page-read permission can still access all page content via the Confluence REST API, regardless of Conditional Show/Hide settings. These macros change what is *displayed* in the browser — they do not change who has *access* to the underlying content.
>
> For truly sensitive content, use **Confluence Page Restrictions** to limit read access at the page level.`,
        },
        {
          slug: "conditional-hide",
          title: "Conditional Hide Guide",
          content: `# Conditional Hide Guide

## What It Does

The Conditional Hide macro wraps content that should be **visible to most users but hidden from a specific group or condition**. Think of it as "hide this from X."

## Step-by-Step Setup

1. In Edit mode, select the content you want to conditionally hide
2. Click **+** (Insert) → search for **Conditional Hide**
3. The selected content is wrapped inside the macro body
4. In the config panel on the right, configure the condition:
   - **Type**: Group, Space Role, or Login Status
   - **Value**: Group name, role name, or logged-in/anonymous
5. Click outside the config panel to preview
6. In View mode, log in as a user who matches the condition — the content should be hidden for them

## Configuration Options

| Option | Values | Example |
|---|---|---|
| Condition Type | Group | \`confluence-guests\` |
| Condition Type | Space Role | \`Space User\` or \`Space Admin\` |
| Condition Type | Login Status | \`Anonymous\` or \`Authenticated\` |

## Multiple Conditions

You can stack multiple Conditional Hide macros to hide content from multiple groups. Each macro is evaluated independently.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content still visible when it shouldn't be | Group name typo | Check exact group name in Confluence People & Groups settings |
| Content hidden from everyone | Condition set to a group all users belong to | Narrow the group condition |
| Content visible in Confluence API response | Expected — conditional macros are UI-only | Use page restrictions for access control |
| No effect in edit preview | Preview in edit mode shows all content regardless of conditions | Switch to View mode to test |`,
        },
        {
          slug: "conditional-show",
          title: "Conditional Show Guide",
          content: `# Conditional Show Guide

## What It Does

The Conditional Show macro wraps content that should be **hidden by default and shown only to a specific group or condition**. Think of it as "show this only to X."

## Step-by-Step Setup

1. In Edit mode, select the content you want to conditionally show
2. Click **+** (Insert) → search for **Conditional Show**
3. The selected content is wrapped inside the macro body
4. In the config panel, configure:
   - **Type**: Group, Space Role, or Login Status
   - **Value**: The specific group, role, or status that should see this content
5. Preview in View mode — sign in as a user in the target group to confirm visibility

## Configuration Options

| Option | Values | Example |
|---|---|---|
| Condition Type | Group | \`confluence-admins\` |
| Condition Type | Space Role | \`Space Admin\` |
| Condition Type | Login Status | \`Authenticated\` |

## Combining with Other Macros

Conditional Show can wrap any content, including other Content Formatting macros (Alert, Background, Cards, Tabs) and standard Confluence macros.

**Example**: Wrap an **Interactive Banner** macro inside a **Conditional Show** macro set to Space Admins. The banner is only visible to space admins — useful for admin notices on public-facing spaces.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content not showing for target group | Group name does not exactly match Confluence group | Verify group name in Confluence Admin → Groups |
| Content showing to everyone | Condition set to a group everyone belongs to | Use a more specific group |
| Edit mode always shows content | Expected behavior — edit mode bypasses visibility conditions | Test in View mode |`,
        },
      ],
    },
    {
      id: "rich-content",
      title: "Rich Content Formatting",
      articles: [
        {
          slug: "rich-content-formatting",
          title: "Rich Content Formatting Overview",
          content: `# Rich Content Formatting

## Overview

Content Formatting Macros includes 18 macros for enhancing the visual quality, interactivity, and clarity of Confluence pages. These macros require no custom CSS or developer skills — everything is configured through the macro's settings panel in the Confluence editor.

## Full Macro List

| Macro | What It Does |
|---|---|
| Buttons | Styled link buttons |
| Background | Section background color or image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal text |
| Progress Bar | Visual percentage indicator |
| Footnotes | Inline numbered footnotes |
| Pop-up Dialog | Modal overlay triggered by a link or button |
| Advanced Expand | Styled collapsible section |
| Advanced Cards | Structured content cards |
| Interactive Banner | Full-width hero/announcement banner |
| Numbered Headings | Auto-number heading levels |
| Divider | Styled horizontal separator |
| Countdown Timer | Live countdown to a target date |
| User Profile | Confluence user info card |
| Status Macro | Color-coded status badge |
| JSON Viewer | Formatted JSON display |

## General Usage Tips

- All macros are available in the Confluence editor via the **+** (Insert) button or the **/command** inline menu
- Most macros have a **Preview** mode in the editor — click the macro to see a live preview
- Macros can be nested inside each other and inside tab containers
- Configuration is done through the settings panel that opens when you click the macro in the editor`,
        },
        {
          slug: "buttons-macro",
          title: "Buttons Macro",
          content: `# Buttons Macro

## What It Does
The Buttons macro creates styled call-to-action buttons on any Confluence page. Buttons can link to internal Confluence pages, external URLs, email addresses, or anchors on the same page.

## Configuration Options

| Setting | Options |
|---|---|
| Label | Button text (required) |
| URL / Link | Internal page, external URL, \`mailto:\` link, or \`#anchor-id\` |
| Style | Primary (filled), Secondary (outlined), Danger (red), Success (green), Ghost (transparent) |
| Size | Small, Medium, Large |
| Icon | Optional icon from the built-in icon set (left or right of label) |
| Open in new tab | Yes / No |
| Full width | Stretch button to container width |

## Adding Multiple Buttons

Insert multiple Button macros side by side. They will flow inline with automatic spacing. Use a Background or Card macro as a container to group a set of buttons with a section background.

## Common Use Cases

- **"Download" or "Get Started" CTA** at the top of a documentation page
- **Links to related systems** (Jira board, Confluence space, external tool) at the bottom of a runbook
- **Navigation buttons** replacing manually written "see also" links
- **Step-navigation** in onboarding pages: "Previous Step" and "Next Step"

## Best Practices

- Keep button labels short (2–5 words)
- Use Primary style for the main action, Secondary for alternatives
- Don't use Danger style for navigation — reserve it for genuinely destructive or critical actions`,
        },
        {
          slug: "background-macro",
          title: "Background Macro",
          content: `# Background Macro

## What It Does
The Background macro applies a background color, gradient, or image to any section of a Confluence page. Use it to visually separate content zones, highlight important sections, or create a branded look.

## Configuration Options

| Setting | Options | Notes |
|---|---|---|
| Background Type | Color, Gradient, Image | |
| Color | Color picker or hex value | For Color type |
| Gradient | Start color, end color, direction | For Gradient type |
| Image URL | Publicly accessible URL | For Image type; Confluence attachment URLs may not work |
| Padding | None, Small, Medium, Large | Inner spacing |
| Border Radius | None, Small, Medium, Large, Pill | Rounded corners |
| Text Color Override | Auto, Light, Dark | Ensures text readability on dark backgrounds |
| Min Height | Pixel value | Optional minimum height |

## Usage Notes

- Content inside the Background macro is fully editable — insert any Confluence content or other macros inside it
- The Image background type requires a publicly accessible URL — images hosted on Confluence as attachments may not render reliably due to auth requirements
- On mobile, background images fall back to the configured fallback color

## Common Patterns

**Section separator**: Use alternating white and light-gray Background macros to visually separate major page sections without borders.

**Announcement zone**: Blue background macro at the top of a space home page for team announcements.

**Warning zone**: Light-yellow background wrapping a critical process step that requires extra attention.`,
        },
        {
          slug: "alert-macro",
          title: "Alert Macro",
          content: `# Alert Macro

## What It Does
The Alert macro creates a styled banner for informational messages, warnings, errors, or success confirmations. Alerts have a colored left border and icon that immediately signals the message type to the reader.

## Alert Types

| Type | Color | Use For |
|---|---|---|
| Info | Blue | General information, notes, tips |
| Warning | Yellow/Amber | Caution, important considerations |
| Error | Red | Errors, failures, destructive actions |
| Success | Green | Confirmations, completed steps |
| Note | Gray | Secondary notes, editorial commentary |

## Configuration Options

| Setting | Options |
|---|---|
| Type | Info, Warning, Error, Success, Note |
| Title | Optional bold heading for the alert |
| Body | Rich text content (supports inline formatting, links, lists) |
| Dismissible | Yes / No — if Yes, reader can close the alert |
| Icon | Show or hide the type icon |

## Known Limitations

- The Dismissible option persists the dismissed state in the browser's local storage — it resets if the user clears browser data or switches devices
- Alerts cannot contain block-level macros (tables, code blocks) in the title field — only the body supports rich content

## Best Practices

- Use Info for routine tips and asides
- Reserve Error (red) for genuine error states or dangerous actions
- Keep alert body text concise — if you need more than 3 sentences, consider an Advanced Expand section instead`,
        },
        {
          slug: "tooltip-macro",
          title: "Tooltip Macro",
          content: `# Tooltip Macro

## What It Does
The Tooltip macro wraps a word or phrase with a hover tooltip that reveals additional context — a definition, explanation, or note. The tooltip appears on mouse hover and disappears when the cursor moves away.

## Configuration

| Setting | Description |
|---|---|
| Trigger Text | The word or phrase that is underlined/highlighted as the tooltip trigger |
| Tooltip Content | The text that appears on hover (plain text only) |
| Position | Top, Bottom, Left, Right (default: Top) |
| Style | Default (dotted underline), Bold, or Italic trigger styling |

## When to Use Tooltips

- **Acronym definitions**: Wrap "JQL" with a tooltip explaining "Jira Query Language"
- **Technical term glossary**: Inline definitions without disrupting reading flow
- **Contextual hints**: Indicate why a field is mandatory

## Limitations

- Tooltip content is plain text only — no links, formatting, or macros inside a tooltip
- Tooltips are not visible on mobile (touch devices have no hover state) — provide an alternative explanation in the body text for mobile readers
- Screen readers may not announce tooltip content — use tooltips to supplement, not replace, visible text

## Best Practice

Use tooltips sparingly. If the definition is important enough that most readers need it, put it in the main text. Tooltips are best for optional context that would interrupt reading if always visible.`,
        },
        {
          slug: "progressbar-macro",
          title: "Progress Bar Macro",
          content: `# Progress Bar Macro

## What It Does
The Progress Bar macro renders a visual, percentage-based progress indicator. Use it to show task completion, project health, survey results, or any value on a 0–100% scale.

## Configuration Options

| Setting | Description | Default |
|---|---|---|
| Value | Number from 0 to 100 | 0 |
| Label | Text label for the bar | None |
| Color | Fixed color (hex or named) or auto-threshold | Auto |
| Auto-threshold colors | Green >80%, Yellow 50–80%, Red <50% | Enabled when no fixed color |
| Size | Thin, Standard, Thick | Standard |
| Show Percentage | Display the number next to the bar | Yes |
| Animate | Animate the fill on page load | Yes |

## Multiple Bars (Stacked)

Insert multiple Progress Bar macros in sequence (or inside a table) to create a comparison view. Example: show completion per team member, per project phase, or per feature area.

## Common Use Cases

- Sprint completion percentage at the top of a sprint page
- OKR key result progress tracking
- Test coverage per module
- Feature rollout percentage
- Budget consumed vs. allocated`,
        },
        {
          slug: "footnotes-macro",
          title: "Footnotes Macro",
          content: `# Footnotes Macro

## What It Does
The Footnotes macro inserts superscript reference numbers inline with text, and collects the corresponding footnote definitions at the bottom of the section (or page). Think of it as academic citation style for Confluence pages.

## Setup (Two-Part)

### Part 1 — Inline Footnote Reference
Insert **Footnote** macro at the point in the text where the reference number should appear. Type the footnote definition inside the macro.

### Part 2 — Footnote List
Insert **Footnote List** macro at the bottom of the section or page. This renders the numbered list of all footnote definitions.

## Scope Rules

- Footnote numbers reset to 1 at each Footnote List macro
- If you use tabs, footnotes inside a tab share numbering with the current page scope
- For multi-tab pages, place one Footnote List macro at the bottom of each tab if you want tab-scoped numbering, or one Footnote List at the bottom of the page for page-wide numbering

## Limitations

- Footnote content is plain text only — no links or macros inside footnote definitions
- Footnotes are not auto-sorted — they appear in the order they are inserted on the page

## Use Cases

- Legal and compliance documents with citation requirements
- Research summaries referencing source material
- Technical docs with versioning notes
- Policy pages with exception notes`,
        },
        {
          slug: "popup-dialog-macro",
          title: "Pop-up Dialog Macro",
          content: `# Pop-up Dialog Macro

## What It Does
The Pop-up Dialog macro creates a modal overlay that opens when a reader clicks a trigger (a link, button, or image on the page). The dialog can contain any rich content — text, images, tables, other macros.

## Setup

1. Insert the **Pop-up Dialog** macro
2. The macro has two zones:
   - **Trigger zone**: What the reader sees and clicks (a text link, an image, or a Button macro)
   - **Dialog content zone**: What appears inside the modal when triggered
3. Place your trigger element in the Trigger zone
4. Write or insert your dialog content in the Dialog Content zone
5. Configure dialog size and heading in the settings panel

## Configuration Options

| Setting | Options |
|---|---|
| Dialog Title | Text that appears in the modal header |
| Size | Small, Medium, Large, Full-screen |
| Close on backdrop click | Yes / No |
| Show close button | Yes / No |

## Common Use Cases

- **Definitions**: A "What is this?" link beside a complex term opens a definition modal
- **Quick reference**: A "Show accepted values" link opens a reference table without leaving the page
- **Image preview**: Click a thumbnail to open a full-size image in a modal
- **Step detail**: "Learn more" link beside a summary opens a detailed step breakdown

## Limitation
Pop-up dialogs do not work well as navigation — avoid using them for primary content. If the content is important enough that most readers need it, put it in the page body or a tab, not a dialog.`,
        },
        {
          slug: "advanced-expand-macro",
          title: "Advanced Expand Macro",
          content: `# Advanced Expand Macro

## What It Does
The Advanced Expand macro creates a collapsible content section with a styled header. Unlike the standard Confluence Expand macro, Advanced Expand offers styling options for the header (color, icon, size) and supports rich content inside the body.

## Configuration Options

| Setting | Options |
|---|---|
| Header Text | The clickable title of the expand section |
| Header Style | Default, Bold, H2, H3, H4 |
| Header Color | Color picker or hex value |
| Left Icon | Optional icon before the header text |
| Right Icon | Expand/collapse arrow style |
| Default State | Collapsed or Expanded |
| Body Background | Optional background color for the expanded body |
| Border | None, Subtle, Visible |

## Expand Styles

**Default**: Plain text header with standard expand arrow.

**Styled Header (Bold, H2–H4)**: Use when the expand section should look like a heading in the page hierarchy.

**Colored Header**: Use to color-code expand sections by category (e.g., blue for setup steps, green for verification, red for rollback steps).

## Common Use Cases

- **FAQ pages**: Each question is an expand header; answers collapse until clicked
- **Long runbooks**: Collapse less-common paths by default
- **Step-by-step guides**: Show one step at a time to reduce cognitive load
- **Reference tables**: Collapse large reference tables that most readers don't need on every visit`,
        },
        {
          slug: "advanced-card-macro",
          title: "Advanced Cards Macro",
          content: `# Advanced Cards Macro

## What It Does
The Advanced Cards macro creates structured content cards — rectangular panels with optional header, body text, image, and link. Cards can be arranged in grid layouts to create visual hub pages.

## Card Layout Options

| Layout | Description |
|---|---|
| Single column | Full-width card |
| 2-column grid | Two cards side by side |
| 3-column grid | Three cards per row |
| Auto-flow | Cards wrap automatically based on container width |

## Card Configuration Options

| Setting | Description |
|---|---|
| Title | Card header text |
| Body | Rich text body content |
| Image | URL or Confluence attachment for a card image (top, left, or background) |
| Image Position | Top, Left, Right |
| Link | Optional URL — makes the entire card clickable |
| Footer Text | Optional small text at the card bottom |
| Background Color | Card background |
| Border | None, Subtle, Visible, Accent (colored left border) |
| Shadow | None, Small, Medium, Large |
| Badge | Optional badge label in the card corner |

## Common Use Cases

- **Space home page**: Cards for each team, product, or topic area — each card links to a sub-space or page
- **Product catalog**: One card per product with logo, description, and "Learn More" button
- **Team directory**: Cards for each team member with photo, name, and role
- **Resources hub**: Cards linking to key documents, forms, or systems`,
        },
        {
          slug: "interactive-banner-macro",
          title: "Interactive Banner Macro",
          content: `# Interactive Banner Macro

## What It Does
The Interactive Banner macro creates a full-width announcement or hero banner at the top (or anywhere) of a Confluence page. Banners support background images or colors, a headline, subtitle, and call-to-action buttons.

## Configuration Options

| Setting | Options / Description |
|---|---|
| Headline | Main bold text |
| Subtitle | Secondary text below headline |
| Background Type | Color, Gradient, or Image URL |
| Background Color | Color picker / hex |
| Text Color | Light or Dark (ensure contrast) |
| Height | Small (80px), Medium (160px), Large (240px), Hero (360px) |
| Alignment | Left, Center, Right |
| CTA Button 1 | Label + URL + style |
| CTA Button 2 | Label + URL + style (optional second button) |
| Overlay Opacity | 0–80% dark overlay on image backgrounds for text readability |

## Common Use Cases

- **Space home announcements**: "Q3 Planning starts this week — see the schedule"
- **Event banners**: Conference, all-hands, or product launch announcements
- **Onboarding welcome**: Welcome message at the top of a new-hire onboarding space
- **Status banners**: "This space is archived" or "Documentation is being updated"

## Combining with Countdown Timer
Place a Countdown Timer macro inside the banner subtitle area for a live event countdown embedded in the announcement.

## Mobile Rendering
On mobile, the banner height is automatically reduced and text size adjusts. Background images scale to cover the banner area.`,
        },
        {
          slug: "numbered-headings-macro",
          title: "Numbered Headings Macro",
          content: `# Numbered Headings Macro

## What It Does
The Numbered Headings macro automatically adds hierarchical numbers to all headings on a page (1, 1.1, 1.1.1, etc.) without manually typing them. If you add or remove a heading, numbering updates automatically on next page view.

## When to Use

- Legal or compliance documents where section references must be precise (e.g., "see section 3.2.1")
- Long technical specifications with deeply nested sections
- Project plans or proposals with numbered deliverables
- Any document where "refer to section X" needs to be unambiguous

## How to Use

1. Insert the **Numbered Headings** macro anywhere on the page (typically at the top of the content area)
2. The macro applies numbering to all headings on the page from that point forward
3. No other configuration is required — heading levels (H1, H2, H3) map to 1, 1.1, 1.1.1

## Configuration Options

| Setting | Description |
|---|---|
| Start Level | Which heading level to begin numbering (default: H2) |
| Max Depth | How many heading levels deep to number (default: all) |
| Separator | Character between number segments (default: .) |
| Prefix | Optional text before the first number (e.g., "Section ") |

## Behavior Notes

- Numbering is applied at view time — the heading text in the editor is unchanged
- The macro affects headings across the entire page, including content inside tabs and expand sections
- If multiple Numbered Headings macros are inserted on one page, only the first takes effect`,
        },
        {
          slug: "divider-macro",
          title: "Divider Macro",
          content: `# Divider Macro

## What It Does
The Divider macro inserts a styled horizontal separator between page sections. It goes beyond the standard Confluence horizontal rule with multiple visual styles and spacing options.

## Three Divider Types

### Type 1 — Line
A simple horizontal line. Configurable color, thickness (1–8px), and width (25%, 50%, 75%, 100%).

### Type 2 — Dots
A row of evenly spaced dots. Configurable dot size, color, and spacing.

### Type 3 — Gradient
A line that fades from a color to transparent at both ends. Configurable color and width.

## Configuration Options

| Setting | Options |
|---|---|
| Type | Line, Dots, Gradient |
| Color | Color picker or hex |
| Thickness | 1–8px (Line type only) |
| Width | 25%, 50%, 75%, 100% |
| Alignment | Left, Center, Right |
| Top Spacing | None, Small, Medium, Large |
| Bottom Spacing | None, Small, Medium, Large |

## When to Use

- Between major sections of a long page where a heading alone isn't enough visual separation
- In cards or background sections to separate a header from body content
- As a footer separator before contact information or navigation buttons`,
        },
        {
          slug: "countdown-macro",
          title: "Countdown Timer Macro",
          content: `# Countdown Timer Macro

## What It Does
The Countdown Timer macro displays a live countdown to a specific date and time. The timer updates in real time as the page is viewed.

## Three Display Styles

### Style 1 — Compact
Shows "X days, X hours, X minutes, X seconds" in a single line. Suitable for embedding in banners or cards.

### Style 2 — Block (Flip Clock)
Large block-style display with separate panels for days, hours, minutes, seconds. Best as a hero element.

### Style 3 — Text Only
Renders as inline text: "3 days remaining" or "Event starts in 2 hours 15 minutes". Integrates naturally into paragraph text.

## Configuration Options

| Setting | Description |
|---|---|
| Target Date & Time | The date and time to count down to |
| Timezone | Target event timezone (important for global teams) |
| Display Style | Compact, Block, or Text Only |
| Label | Optional text above the timer ("Registration closes in:") |
| Expired Message | Text to show after the countdown reaches zero |
| Show seconds | Yes / No |

## Timezone Note
The timer displays the countdown based on the **viewer's local timezone** relative to the target event time. Set the target timezone to the event's local timezone — the macro handles the conversion for each viewer.

## Common Use Cases

- Conference registration deadlines
- Product launch dates
- Sprint end countdowns on a team home page
- Promotion or discount expiry dates on internal sale pages`,
        },
        {
          slug: "user-profile-macro",
          title: "User Profile Macro",
          content: `# User Profile Macro

## What It Does
The User Profile macro displays a Confluence user's profile information — name, avatar, title, department, and contact links — as a styled card. Use it to display team members, point-of-contact information, or page owners.

## Five Card Styles

| Style | What It Shows |
|---|---|
| Compact | Avatar + Name + Job Title inline |
| Standard | Avatar + Name + Title + Department + Email |
| Detailed | All standard fields + Location + Phone + Confluence profile link |
| Avatar Only | Just the profile picture with hover tooltip of name |
| Card | Full card layout with background, all fields, and contact buttons |

## Configuration Options

| Setting | Description |
|---|---|
| User | Confluence username or email to display |
| Card Style | Compact, Standard, Detailed, Avatar Only, Card |
| Show Email | Yes / No |
| Show Location | Yes / No |
| Show Department | Yes / No |
| Custom Label | Override the job title displayed |
| Link to Profile | Make the card clickable to the user's Confluence profile |

## Requirements

- The displayed user must have a Confluence Cloud account in the same site
- Profile fields (title, department, location) must be filled in by the user in their Confluence profile settings

## Common Use Cases

- **Page owner block**: "Questions about this page? Contact:" + User Profile macro
- **Team directory**: Grid of Card-style User Profile macros for each team member
- **On-call roster**: Weekly rotation page showing the current on-call person
- **Escalation path**: Runbook section showing L1, L2, L3 escalation contacts`,
        },
        {
          slug: "status-macro",
          title: "Status Macro",
          content: `# Status Macro

## What It Does
The Status macro creates a color-coded badge that communicates a state, phase, or classification at a glance. Unlike the standard Confluence Status lozenge, this macro offers 13 preset status sets covering common workflows, plus a custom color mode.

## 13 Preset Status Sets

| Set Name | Example Values |
|---|---|
| General | To Do, In Progress, Done, Blocked |
| Approval | Pending, Approved, Rejected |
| Priority | Low, Medium, High, Critical |
| Health | Healthy, At Risk, Critical |
| Release | Planning, Development, Testing, Released |
| Environment | Development, Staging, Production |
| Ticket | Open, In Review, Closed, Reopened |
| Risk | Low, Medium, High, Very High |
| Compliance | Compliant, Non-Compliant, Under Review |
| Verification | Verified, Unverified, Failed |
| Access | Public, Internal, Restricted, Confidential |
| Budget | On Track, Over Budget, Under Budget |
| Custom | Any text + any color |

## Configuration

| Setting | Description |
|---|---|
| Status Set | Choose from 13 presets or Custom |
| Status Value | Select from the preset values or enter custom text |
| Color (Custom mode) | Color picker for badge background |
| Size | Small, Medium, Large |
| Style | Filled, Outlined, Subtle |

## Use Cases

- Project status table with a Status badge per row
- Runbook steps with a status column showing which steps are complete
- Risk register with a Risk level badge per item
- Release notes with Environment badges showing where each feature is deployed`,
        },
        {
          slug: "json-viewer-macro",
          title: "JSON Viewer Macro",
          content: `# JSON Viewer Macro

## What It Does
The JSON Viewer macro renders a block of JSON data in a formatted, syntax-highlighted, collapsible tree view. Use it to display API responses, configuration examples, or data samples without requiring readers to parse raw JSON.

## How It Works

1. Insert the **JSON Viewer** macro
2. Paste your JSON into the macro body
3. The macro validates the JSON and renders it as a collapsible tree
4. Readers can expand/collapse objects and arrays interactively
5. Syntax highlighting distinguishes keys, strings, numbers, booleans, and null values

## Viewer Features

- **Collapsible nodes**: Click any object or array to collapse/expand it
- **Syntax highlighting**: Color-coded by value type
- **Line numbers**: Optional line number display
- **Copy button**: Copies the raw JSON to clipboard

## Configuration Options

| Setting | Description |
|---|---|
| Theme | Light or Dark |
| Default collapsed depth | How many levels are expanded on load (0 = all collapsed, default: 2) |
| Show line numbers | Yes / No |
| Show copy button | Yes / No |
| Max height | Scroll container height (default: 400px) |

## Limitations

- JSON must be valid — the macro displays an error if the JSON is malformed
- Large JSON payloads (>500KB) may affect page load performance
- JSON is stored as page content — do not paste JSON containing sensitive data (API keys, passwords)

## Common Use Cases

- API documentation showing request/response examples
- Configuration file documentation
- Data schema examples for developer documentation
- Webhook payload examples`,
        },
      ],
    },
    {
      id: "attachment-management",
      title: "Attachment Management & Audit",
      articles: [
        {
          slug: "attachment-management",
          title: "Attachment Management & Audit",
          content: `# Attachment Management & Audit

## What Is the Attachment Management Center?

The Attachment Management Center is a dedicated panel built into Content Formatting Macros that gives Confluence space admins a single place to:

- **View all attachments** across a space (or filtered to a specific page)
- **Filter by**: file type, uploader, upload date, file size, or linked/unlinked status
- **Bulk label** attachments for categorization
- **Bulk delete** unused or orphaned attachments
- **Identify orphaned files** — attachments uploaded to a page but not referenced in any page content

## How to Access

- **From Space Settings**: Go to **Space Settings** → **Apps** → **Attachment Management Center**
- **From the Confluence sidebar**: If the admin has pinned the Attachment Center shortcut, it appears in the left sidebar

## Admin Configuration

Before using the Attachment Center, enable it per-space:

1. Go to **Space Settings** → **Content Formatting Macros** → **Attachment Center**
2. Toggle **Enable Attachment Center** to On
3. Optionally configure:
   - **Storage warning threshold**: Get a visual indicator when total attachment storage exceeds a set amount
   - **Orphan detection**: Automatically flag attachments not referenced in page content

## Key Features

### File Filtering
Filter the attachment list by:
- File type (PDF, PNG, XLSX, DOCX, etc.)
- Upload date range
- Uploader (Confluence user)
- Page (see all attachments on a specific page)
- Linked status (Linked to page content vs. Orphaned)
- File size (find large files consuming storage)

### Bulk Operations
Select multiple attachments and apply:
- **Add Label**: Tag attachments for organization
- **Remove Label**: Remove an existing label
- **Delete**: Permanently delete (with confirmation prompt)

### Orphan Detection
Attachments flagged as orphaned are uploaded to a page but not referenced in any content on that page. These are safe candidates for deletion — but verify before bulk-deleting, as some attachments may be referenced from other pages or spaces.

## Best Practices

1. **Run a quarterly audit** using the Attachment Center to identify and remove stale files
2. **Label important attachments** (e.g., \`approved\`, \`final\`, \`archived\`) to distinguish them from drafts
3. **Set a storage threshold** to get early warning before Confluence storage limits are reached
4. **Review orphaned files** before deleting — check if they are referenced from external sources
5. **Train page authors** to delete old attachment versions when uploading new versions

## Important Note

Deletions via the Attachment Center are permanent. Confluence does not have a recycle bin for attachments. Always verify the file list before confirming a bulk delete.`,
        },
      ],
    },
    {
      id: "page-templates",
      title: "Page Templates",
      articles: [
        {
          slug: "page-templates",
          title: "Page Templates",
          content: `# Page Templates

## What Templates Are Included?

Content Formatting Macros includes two ready-to-use Confluence page templates that demonstrate the app's capabilities in realistic, production-ready page designs.

---

## Template 1 — Employee Onboarding Hub

A structured onboarding experience for new hires, built with tabs, cards, and conditional visibility.

### Page Structure

| Tab | Content |
|---|---|
| Week 1 | First-day checklist, system access steps, buddy program info |
| Week 2 | Team introductions, process docs, first project overview |
| Week 3 | Role-specific training, first check-in prep |
| Resources | Buttons linking to HR systems, benefits portal, IT helpdesk |
| Manager View (Conditional) | Manager-only tab with onboarding completion tracking |

### Macros Used
- Tab Navigation + Custom Tabs (for the weekly structure)
- Conditional Show (for the Manager View tab)
- Buttons (system links in Resources tab)
- Alert (Info type — welcome message)
- User Profile (buddy/manager contact cards)
- Progress Bar (overall onboarding completion percentage)
- Interactive Banner (welcome header)

---

## Template 2 — Team Hub

A team home page with announcements, key links, member directory, and rotating status indicators.

### Page Structure

| Section | Content |
|---|---|
| Announcement Banner | Interactive Banner macro with latest team news |
| Quick Links | Button macros linking to Jira board, Confluence space, Slack channel |
| Team Members | Grid of User Profile macros (Card style) |
| Current Sprint Status | Status Macro badges per active project |
| Upcoming Events | Countdown Timer macros for key dates |
| Resources | Advanced Cards linking to key documents |

### Macros Used
- Interactive Banner
- Buttons
- User Profile (Card style, 3-column grid)
- Status Macro
- Countdown Timer
- Advanced Cards
- Background (alternating section backgrounds)
- Divider (between sections)

---

## How to Access Templates

1. In Confluence, navigate to the space where you want to create the page
2. Click **Create** → **From Template**
3. Search for **"Content Formatting"** or browse the template gallery
4. Select **Employee Onboarding Hub** or **Team Hub**
5. Click **Use Template** — the page opens in edit mode with all macros pre-configured
6. Replace placeholder text and configure macros with your actual content

---

## Troubleshooting Templates

| Issue | Fix |
|---|---|
| Templates not showing in the gallery | Confirm the app is installed and activated for the space |
| Macros showing placeholder content | Edit each macro and configure it with real data |
| Conditional Show section always hidden | Confirm the target Confluence group exists and the current user is in it |
| User Profile cards showing blank | Ensure the referenced users have completed their Confluence profile fields |`,
        },
      ],
    },
    {
      id: "privacy-access",
      title: "Privacy & Access Notes",
      articles: [
        {
          slug: "privacy-access",
          title: "Privacy & Access Notes",
          content: `# Privacy & Access Notes

## How Content Formatting Macros Handles Data

### Principle 1 — Content Stays in Confluence

Content Formatting Macros does not transmit page content, attachment data, or user information to external servers. All macro rendering is performed within the Atlassian Confluence Cloud environment using Atlassian's Forge or Connect app runtime.

The only external communication is:
- License verification with the Atlassian Marketplace
- Optional background image URLs you configure in the Background or Banner macros (the browser fetches these directly)

### Principle 2 — Visibility Macros Are UI Controls, Not Security Boundaries

Conditional Show and Conditional Hide macros change what is **displayed** in the browser. They do not change Confluence's underlying access control.

A user with page-read permission can still access all page content via:
- The Confluence REST API
- The page export (PDF, Word)
- The Confluence mobile app

**Do not use Conditional Show/Hide to protect sensitive data.** Use **Confluence Page Restrictions** for true access control.

Conditional macros are appropriate for:
- Audience targeting (showing relevant content to relevant users)
- Reducing visual clutter (hiding admin notes from general readers)
- Progressive disclosure (revealing advanced content to expert users)

### Principle 3 — Attachment Deletion Is Permanent

The Attachment Management Center's delete function permanently removes files from Confluence. There is no recycle bin or undo. Always confirm the file list carefully before executing a bulk delete.

## User Data in Macros

The User Profile macro reads user data from Confluence's user directory. Only data that users have voluntarily entered in their Confluence profile is displayed. The macro does not access email systems, HR systems, or external directories.

## Questions About Data Processing

For questions about how Clovity processes data as the app vendor, contact **support@clovity.com** or review the app's privacy policy on the Atlassian Marketplace listing.`,
        },
      ],
    },
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "help-support",
          title: "Help & Support",
          content: `# Help & Support

## Before Contacting Support

Work through this checklist first — most issues are resolved without opening a ticket:

- [ ] Confirm the app is installed and active (**Confluence Settings** → **Manage apps** → Content Formatting Macros shows "Active")
- [ ] Check that you are in a supported environment (Confluence Cloud — Data Center and Server are not supported)
- [ ] Try the action in a different browser or incognito mode (rules out browser cache issues)
- [ ] Check if the issue affects all users or only specific users
- [ ] Review the specific macro's documentation page in this help center for known limitations

## How to Reach Support

**Email**: support@clovity.com

**Atlassian Marketplace Support Portal**: Available via the app's Marketplace listing page → **Support** tab

**Response Times**:
- Standard: 1–2 business days
- Critical (app completely non-functional): same business day

## What to Include in Your Support Request

1. **Confluence site URL** (e.g., \`yourcompany.atlassian.net\`)
2. **App version** (visible in **Confluence Settings** → **Manage apps** → Content Formatting Macros → version number)
3. **Affected macro name** (e.g., "Tab Parent Content Mapper")
4. **Steps to reproduce** the issue
5. **Expected behavior** vs. **what actually happened**
6. **Screenshot or screen recording** if the issue is visual
7. **Browser and OS** (e.g., Chrome 124 on Windows 11)
8. **Whether the issue affects all users or specific users/groups**

## Feature Requests

Submit feature requests via the Atlassian Marketplace listing or email support@clovity.com with "Feature Request:" in the subject line.`,
        },
        {
          slug: "faq",
          title: "FAQ",
          content: `# Frequently Asked Questions

## Tab Macros

**Q: Can I link directly to a specific tab via URL?**
A: Not by default. The active tab state is not persisted in the URL. All page loads open the default tab. Deep-linking to tabs is on the feature roadmap.

**Q: Why don't some child pages appear as tabs in the Parent Content Mapper?**
A: The two most common reasons: (1) the viewer doesn't have read permission to that child page, or (2) the child page is in Draft status. Only published pages the viewer can access appear as tabs.

**Q: Can I nest Tab Navigation inside another Tab Navigation?**
A: It is technically possible but not recommended. Nested tabs often cause layout issues. Consider using Advanced Expand macros inside tabs for secondary grouping instead.

**Q: The tab content shows "Page not found" — why?**
A: For Page Mapper or Parent Mapper tabs, the source page was deleted or the viewer lacks permission. Check the mapped page still exists and that the viewer has read access.

---

## Conditional Visibility

**Q: Why is content hidden from everyone, including admins?**
A: Likely the Confluence group name in the macro config has a typo. Group names are case-sensitive and must exactly match the group name in **Confluence Admin** → **Groups**.

**Q: Why can I still see Conditional Show content when I shouldn't?**
A: If you are testing in Edit mode, all content is visible regardless of conditions. Switch to View mode to test.

**Q: Is content truly hidden via Conditional Hide, or just not displayed?**
A: Just not displayed. Users with page-read permission can still access all content via the API or exports. Use Confluence Page Restrictions for true access control.

---

## Attachment Management Center

**Q: The Attachment Center doesn't appear in Space Settings — why?**
A: It must be enabled per-space. Go to **Space Settings** → **Content Formatting Macros** → **Attachment Center** and toggle it On.

**Q: Can I recover a deleted attachment?**
A: No. Deletions through the Attachment Center are permanent. Confluence does not have a recycle bin for attachments.

**Q: What does "Orphaned" mean in the Attachment Center?**
A: An orphaned attachment is a file uploaded to a page but not referenced in any content on that page. These are safe deletion candidates, but verify they're not referenced from other pages first.

---

## General

**Q: Does the app work with Confluence Data Center?**
A: No. Content Formatting Macros is a Confluence Cloud-only app.

**Q: Can I use the macros on mobile?**
A: Macros render in read-only mode on the Confluence mobile app. Interactive features (countdown timers, pop-up dialogs) may have limited functionality on mobile.

**Q: Will macros break if I uninstall the app?**
A: If the app is uninstalled, macros will no longer render — they'll show as unresolved macro placeholders. Your page content is not deleted. Re-installing the app restores all macros.

**Q: Is there a free trial?**
A: Yes. A 30-day free trial is available via the Atlassian Marketplace. No credit card required to start the trial.`,
        },
        {
          slug: "contact-support",
          title: "Contact Support",
          content: `# Contact Support

## Get Help from the Clovity Team

Our Atlassian-certified support team is here to help with any questions about Content Formatting Macros.

## Contact Options

**Email Support**: support@clovity.com

Include the following for fastest resolution:
- Your Confluence site URL
- App version number (Settings → Manage apps → Content Formatting Macros)
- Macro name affected
- Steps to reproduce
- Screenshot or screen recording

**Atlassian Marketplace Support Portal**: Visit the app's listing on the Atlassian Marketplace and click the **Support** tab to open a ticket directly.

## Response Times

| Priority | Response Time |
|---|---|
| Critical (app non-functional) | Same business day |
| Standard questions | 1–2 business days |
| Feature requests | Reviewed weekly |

## Business Hours

Monday – Friday, 9:00 AM – 6:00 PM IST (Indian Standard Time)

## Feature Requests

Email **support@clovity.com** with subject: **Feature Request: [short description]**

All feature requests are reviewed by the product team. You'll receive confirmation that your request was received.`,
        },
        {
          slug: "eula",
          title: "End User License Agreement",
          content: `# End User License Agreement (EULA)

**Content Formatting Macros: Tabs Navigation Visibility CSS**
Developed and maintained by Clovity

---

## 1. Acceptance of Terms

By installing, accessing, or using Content Formatting Macros (the "App"), you ("User") agree to be bound by this End User License Agreement ("Agreement"). If you do not agree to these terms, do not install or use the App.

## 2. License Grant

Subject to the terms of this Agreement, Clovity grants you a limited, non-exclusive, non-transferable license to install and use the App within your Atlassian Confluence Cloud instance solely for your internal business purposes, in accordance with the applicable Atlassian Marketplace terms.

## 3. Restrictions

You may not:
- Copy, modify, or distribute the App
- Reverse engineer, decompile, or disassemble the App
- Use the App to develop competing products
- Sublicense or resell the App
- Remove any proprietary notices or labels on the App

## 4. Intellectual Property

The App and all associated intellectual property rights are owned by Clovity. This Agreement does not transfer any ownership rights to you. All rights not expressly granted are reserved by Clovity.

## 5. Data and Privacy

The App operates within the Atlassian Confluence Cloud environment. Clovity does not transmit your Confluence page content or attachment data to external servers beyond what is required for license verification with the Atlassian Marketplace.

## 6. Disclaimer of Warranties

THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. CLOVITY DOES NOT WARRANT THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.

## 7. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CLOVITY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP. CLOVITY'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

## 8. Termination

This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically if you fail to comply with any of its terms. Upon termination, you must cease all use of the App and destroy all copies in your possession.

## 9. Governing Law

This Agreement shall be governed by the laws of the State of California, United States, without regard to its conflict of law principles.

## 10. Contact

For questions about this Agreement, contact **support@clovity.com**.

---

*Last updated: 2025*`,
        },
      ],
    },
  ],
};
