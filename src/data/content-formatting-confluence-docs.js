import { getAllArticles, findArticle } from "./time-tracking-docs";
export { getAllArticles, findArticle };

export const contentFormattingConfluenceDocs = {
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-content-formatting",
          title: "What is Content Formatting Macros?",
          sideVideo: {
            src: "https://www.youtube.com/embed/IVYf00T0R7c",
            title:
              "Content Formatting Macros: Tabs, Navigation, Visibility & CSS - Product Overview",
          },
          content: `
Content Formatting Macros is a Confluence Cloud app that gives teams five powerful capabilities in one install.

<!--VIDEO_BREAK-->

## Five Core Capabilities

**1. Advanced Content Navigation (Tabs)**
Create multi-tab layouts inside any Confluence page. Organize complex documentation, runbooks, or knowledge bases into clean, clickable tab interfaces without leaving the page editor.

**2. Rich Content Formatting Macros**
Buttons, Alerts, Background, Tooltip, Progress Bar, Footnotes, Footnote Summary, Pop-up Dialog, Advanced Expand, Advanced Card, Interactive Banner, Numbered Heading, Divider, Countdown Timer, User Profile, Status, JSON Viewer, Custom Fonts, News, Page Tree, Activity Stream, Number List, Form Macro, Markdown Renderer, HTML Renderer, and more.

**3. Conditional Visibility (Show / Hide)**
Control which content users see based on Confluence groups, space roles, or login status. Show internal notes only to admins; hide drafts from guests.

**4. Attachment Management & Audit**
Bulk-view, label, and manage file attachments across your Confluence space from a single panel. Identify orphaned files, filter by type, and keep your space tidy.

**5. Templates**
It help users get started quickly with a pre-designed structure tailored to their needs. Instead of creating everything from scratch, users can simply choose a template, customize the content, and save valuable time.

## Supported Macros at a Glance

| **Macro** | Purpose |
|---|---|
| **Tab Parent Content Mapper** | Tabs pulling from child pages |
| **Tab Label Content Mapper** | Each page with your entered label becomes a tab |
| **Tab Confluence Page Mapper** | Tabs from specific pages |
| **Custom Tabs** | Manual rich-content tabs |
| **Conditional Show** | Show content to specific groups |
| **Conditional Hide** | Hide content from specific groups |
| **Buttons** | Styled CTA buttons |
| **Background** | Section background color/image |
| **Alert** | Info, Warning, Error, Success banners |
| **Tooltip** | Hover-to-reveal definitions |
| **Progress Bar** | Multi-step page workflow tracker |
| **Footnotes** | Inline reference notes |
| **Pop-up Dialog** | Modal overlays |
| **Advanced Expand** | Styled collapsible sections |
| **Advanced Cards** | Rich content cards with layout |
| **Interactive Banner** | Full-width announcement banners |
| **Numbered Headings** | Auto-numbered heading hierarchy |
| **Divider** | Styled horizontal rules |
| **Countdown Timer** | Live event countdown |
| **User Profile** | Confluence user info cards |
| **Status Macro** | Color-coded status badges |
| **JSON Viewer** | Formatted JSON display |
| **Footnotes Summary** | Consolidated list of all footnotes used on a page |
| **Custom Fonts** | Apply custom typography and font styling |
| **News** | Display latest announcements of confluence blogs |
| **Page Tree** | Hierarchical navigation of Confluence pages |
| **Activity Stream** | Show recent page and user activities |
| **Number List** | Styled numbered lists with advanced formatting |
| **Form Macro** | Collect structured user input through forms |
| **Markdown Renderer** | Render Markdown content inside Confluence |
| **HTML Renderer** | Render custom HTML content inside Confluence |


## Platform Compatibility

- **Confluence Cloud**: Fully supported
- **Confluence Data Center / Server**: Not supported
- **Confluence Mobile**: Read-only rendering; editing not available on mobile

## What's New
The app is actively updated. Check the Atlassian Marketplace listing for the latest release notes and version history.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `25 step-by-step tutorials covering every macro - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/content-formatting-confluence/what-is-content-formatting) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/watch?v=xAWexa-8kIw&list=PLACoCS_WiVwRpkORYCho-5uakGUo7sNYp",
            videos: [
              {
                id: "JDZ-kBDXeL0",
                title: "Content Formatting Macros - Complete App Overview",
              },
              {
                id: "VK92Mme_9p8",
                title:
                  "Footnotes Macro - Add Auto-Numbered Reference",
              },
              {
                id: "xI9OYm5CgIc",
                title:
                  "Footnotes Summary Macro - Dynamic Footnotes Summary in Confluence",
              },
              {
                id: "RwbZxdCF5AA",
                title:
                  "Pop-up Dialog Macro - Create Button-Triggered Modals withRich Content",
              },
              {
                id: "HRrhSA11AUo",
                title:
                  "Tooltip Macro - Add Hover-Activated Inline Definitions to AnyConfluence Page",
              },
              {
                id: "IH1eZreounY",
                title:
                  "Alert Macro - Add Color-Coded Warning, Info, Tip & ErrorBlocks",
              },
              {
                id: "sP4w94ZxONE",
                title:
                  "Buttons Macro - Create Styled Call-to-Action Buttons & Navigation Panels in Confluence",
              },
              {
                id: "eGKmabeoQ2M",
                title:
                  "Interactive Banner Macro - Build Hero Banners & Rotating Slideshows in Confluence",
              },
              {
                id: "XZq8shzt02E",
                title:
                  "Progress Bar Macro - Guide Readers Through Multi-Step Flows Across Confluence Pages",
              },
              {
                id: "Jy9LtqzPcWc",
                title:
                  "Tab Confluence Page Mapper - Hand-Pick & Curate Pages into a Custom Tab Hub",
              },
              {
                id: "fkw7A6K5zUk",
                title:
                  "Tab Label Content Mapper - Create Dynamic Tabs Using Confluence Labels & CQL",
              },
              {
                id: "tlKnFvVweRg",
                title:
                  "Tab Parent Content Mapper - Auto-Build Tabbed Hubs from Confluence Parent Pages",
              },
              {
                id: "7jN2lWkw_QA",
                title:
                  "Attachment Control Center - Search, Manage & Audit Every Attachment Across Confluence",
              },
              {
                id: "Y-JpvYWGeZ4",
                title:
                  "Advanced Cards Macro - Create Visual Card Grids with Images, Titles & Buttons in Confluence",
              },
              {
                id: "AKjNJr4x9H8",
                title:
                  "Advanced Expand Macro - Add Collapsible Sections with Icons & Rich Content in Confluence",
              },
              {
                id: "4B3gU4lgC6w",
                title:
                  "Conditional Show Macro - Show Content Only to Specific Users or Groups in Confluence",
              },
              {
                id: "FlgfKbiAlwE",
                title:
                  "Conditional Hide Macro - Hide Content from Specific Users or Groups in Confluence",
              },
              {
                id: "6RBF0Z2FPtk",
                title:
                  "Navigate Pages with Dynamic Page Tree",
              },
              {
                id: "vJRNvXPqNiE",
                title:
                  "Create Structured Numbered Lists in Confluence",
              },
              {
                id: "DA6Z_k3i1hw",
                title:
                  "Share Team News and Updates in Confluence",
              },
              {
                id: "arDj_p0crmI",
                title:
                  "Render Markdown Content in Confluence",
              },
              {
                id: "ZRxmS0Q9mYA",
                title:
                  "Embed Custom HTML Content in Confluence",
              },
              {
                id: "FZXyQmh8JJw",
                title:
                  "Build Interactive Forms in Confluence",
              },
              {
                id: "YQSW8BYKoV4",
                title:
                  "Track Live Activity Stream in Confluence",
              },
              {
                id: "gIYA5J9Ihfo",
                title:
                  "Background Macro - Add Color, Gradient & Image Backgrounds to Confluence Page Sections",
              },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `

<img src="/images/content-formatting-assets/installation-setup-update.jpg" alt="Installation & Setup screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## Prerequisites

Before installing, confirm:

1. You are a **Confluence Cloud site administrator** (required to install Marketplace apps)
2. Your Confluence instance is **Confluence Cloud** - this app does not support Data Center or Server
3. You have access to the **Atlassian Marketplace** from your Confluence instance

## Installation Steps

| **Step** | Action |
|---|---|
| **1** | Go to **[marketplace.atlassian.com](https://marketplace.atlassian.com)** and search for **"Content Formatting Macros: Tabs Navigation Visibility CSS"** |
| **2** | On the app listing, confirm **Hosting → Cloud** is supported |
| **3** | Click **Try it free** (30-day trial) or **Buy now** |
| **4** | Select your **Atlassian Cloud site** when prompted and choose **Confluence** |
| **5** | Review the permissions the app requires and click **Accept** to proceed |
| **6** | The app installs automatically - no restart required |

## Permission Scopes Requested

The app requests the following scopes during installation:

| **Permission** | Reason |
|---|---|
| **Read Confluence content** | Tab mappers need to read child/labeled pages |
| **Read space and page permissions** | Conditional visibility evaluation |
| **Read user profile** | User Profile macro |
| **Manage attachments** | Attachment Management Center |

## Post-Install Verification

After installation:

1. Open any Confluence page in edit mode
2. Click the **+** (Insert) button in the editor toolbar
3. Search for "Alert" or "Tab Parent Content Mapper" - the macros should appear in the results
4. If macros don't appear, go to **Confluence Settings** → **Manage apps** → Confirm Content Formatting Macros: Tabs Navigation Visibility CSS shows "Active"

## Admin Checklist

- App installed from Marketplace
- All permissions accepted
- Post-install verification passed (macros appear in editor)

## Uninstalling

To uninstall: Go to **admin.atlassian.com** → **Apps** → **Manage Apps** → click **Content Formatting Macros** → **Uninstall**. Macro placeholders will remain on pages but will no longer render until the app is re-installed.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
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
5. Search for any macro name (e.g., "Alert", "Buttons")
6. Configure the macro settings in the panel that appears
7. Publish the page

## Four-Step Path to Your First Tabbed Page

### Step 1 - Plan Your Structure
Decide how many tabs you need and what content belongs in each. The most common pattern: one tab per topic, environment, team, or audience.

### Step 2 - Choose Your Tab Mapper
- **Tab Parent Content Mapper**: Use when tabs should mirror child pages
- **Tab Label Content Mapper**: Use when you enter a label and want every page tagged with that label to appear as its own separate tab
- **Tab Confluence Page Mapper**: Use when you want to hand-pick exactly which pages appear as tabs
- **Create Custom Tabs**: Use when content lives directly on the page, not in separate child pages

### Step 3 - Insert and Configure
Insert the tab mapper macro directly on the page (type "/" → search the macro name). Configure the mapper settings (parent page, label name, or page list) in the config panel.

### Step 4 - Enrich with Formatting Macros
Add Alert macros for warnings, Buttons for CTAs, Background for section separation, and Status badges for current state. Publish when ready.`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## Who Can Do What

| **Role** | Can Do |
|---|---|
| **Space Admin** | Install the app (site admin required) |
| **Page Author (edit permission)** | Insert, configure, and publish any macro on pages they can edit |
| **Page Viewer (read permission)** | View rendered macros; conditional visibility is evaluated per viewer's groups |

## Installing the App

Only a **Confluence site administrator** can install apps from the Atlassian Marketplace. Space admins without site admin rights cannot install the app themselves - they must request installation from a site admin.

## Inserting Macros

All Confluence users with **page edit permission** can insert and configure any Content Formatting macro. There is no per-macro permission control - access is governed by standard Confluence page edit permissions.

## Conditional Show / Hide

For conditional visibility macros to work correctly:
- The Confluence group names used in the macro config must exactly match existing group names in **Confluence Admin → Groups**
- Group membership is managed by Confluence administrators in the standard Confluence user management interface
- The app does not create, manage, or sync groups - it reads existing Confluence group membership at render time

## Attachment Center

The Attachment Management Center requires:
- **Space Admin** role to enable the feature per-space (Space Settings → Content Formatting Macros → Attachment Center)
- **Space Admin** role to perform bulk delete operations
- Standard Confluence attachment permissions apply to all operations

## Important: Conditional Visibility Is Not a Security Boundary

Conditional Show and Conditional Hide macros change what is **displayed** in the browser. They do not restrict access to the underlying page content.

Users with page-read permission can still access all content via the Confluence REST API, page exports, or the Confluence mobile app - regardless of conditional macro settings.

**For truly sensitive content, use Confluence Page Restrictions to limit read access at the page level.**`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `
Content Formatting Macros adds 30+ macros to the Confluence Cloud editor - no separate dashboard, no separate app to open. Everything happens inside a Confluence page in edit mode. Use this guide to find the fastest path for your role.

## Content Author / Technical Writer

You write pages and want richer formatting.

**Start with:**
1. [Quick Start Guide](/apps/content-formatting-confluence/quick-start) - insert your first macro in under 2 minutes
2. [Tab Navigation Overview](/apps/content-formatting-confluence/tab-navigation) - create tabbed layouts from child pages or labels
3. [Alert Macro](/apps/content-formatting-confluence/alert-macro) - highlight important notes, warnings, and tips
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - full page workflow

**Best macros to learn first:** Alert · Background · Tab Parent Content Mapper · Buttons · Advanced Expand

---

## Space Administrator

You manage space structure and want consistent, well-organised content.

**Start with:**
1. [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper) - generate tabs from child pages
2. [Page Templates](/apps/content-formatting-confluence/page-templates) - apply consistent layouts across a space
3. [Attachment Center Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) - audit attachments space-wide, find orphans, manage bulk actions
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - reference architecture for space-level hubs

---

## IT / Security Team

You need to restrict what different audiences can see on the same page.

**Start with:**
1. [Conditional Show Guide](/apps/content-formatting-confluence/conditional-show) - show content only to a specific Confluence user or group
2. [Conditional Hide Guide](/apps/content-formatting-confluence/conditional-hide) - hide content from specific Confluence user or group
3. [Privacy & Access Notes](/apps/content-formatting-confluence/privacy-access) - how macros interact with Confluence permissions
4. [How to: Create Role-Based Content Visibility](/apps/content-formatting-confluence/how-to-role-based-content) - full workflow

---

## Confluence Administrator

You install apps and need to understand what this app accesses.

**Start with:**
1. [Installation & Setup](/apps/content-formatting-confluence/installation-setup) - install from Atlassian Marketplace
2. [Permissions & Access](/apps/content-formatting-confluence/permissions-access) - what the app can and cannot access
3. [Privacy & Access Notes](/apps/content-formatting-confluence/privacy-access) - data residency and scope
4. [Attachment Management & Audit](/apps/content-formatting-confluence/attachment-management) - storage and audit features
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for all macros, insertion methods, and key rules.

## How to Insert Any Macro

| **Method** | Steps |
|---|---|
| **Slash command** | Type \`/\` in the page body → type the macro name → click it |
| **Toolbar insert (+)** | Click **+** in the editor toolbar → search or browse → click the macro |
| **Macro browser** | Click **+** → **Other macros** → browse by category |

## All Macros at a Glance

### Navigation (Tabs)
| **Macro** | What It Does | Full Reference |
|---|---|---|
| **Tab Parent Content Mapper** | Auto-tabs from child pages | [Parent Mapper](/apps/content-formatting-confluence/tab-parent-mapper) |
| **Tab Label Content Mapper** | Each page tagged with your entered label becomes a tab | [Label Mapper](/apps/content-formatting-confluence/tab-label-mapper) |
| **Tab Confluence Page Mapper** | Manual tab list from selected pages | [Page Mapper](/apps/content-formatting-confluence/tab-page-mapper) |
| **Create Custom Tabs** | Manual custom tab content | [Custom Tabs](/apps/content-formatting-confluence/create-custom-tabs) |

### Visibility
| **Macro** | What It Does | Full Reference |
|---|---|---|
| **Conditional Show** | Show content only to a group / role | [Conditional Show](/apps/content-formatting-confluence/conditional-show) |
| **Conditional Hide** | Hide content from a group / role | [Conditional Hide](/apps/content-formatting-confluence/conditional-hide) |

### Rich Content
| **Macro** | What It Does | Full Reference |
|---|---|---|
| **Alert** | Coloured info / warning / error / success callout | [Alert](/apps/content-formatting-confluence/alert-macro) |
| **Background** | Coloured or image background section | [Background](/apps/content-formatting-confluence/background-macro) |
| **Buttons** | Styled CTA link buttons | [Buttons](/apps/content-formatting-confluence/buttons-macro) |
| **Advanced Cards** | Card-layout content blocks | [Advanced Cards](/apps/content-formatting-confluence/advanced-card-macro) |
| **Interactive Banner** | Full-width announcement banner | [Interactive Banner](/apps/content-formatting-confluence/interactive-banner-macro) |
| **Advanced Expand** | Collapsible content sections | [Advanced Expand](/apps/content-formatting-confluence/advanced-expand-macro) |
| **Pop-up Dialog** | Modal overlay content | [Pop-up Dialog](/apps/content-formatting-confluence/popup-dialog-macro) |
| **Progress Bar** | Multi-step page workflow tracker | [Progress Bar](/apps/content-formatting-confluence/progressbar-macro) |
| **Countdown Timer** | Deadline or event countdown | [Countdown](/apps/content-formatting-confluence/countdown-macro) |
| **Status** | Inline coloured status badge | [Status](/apps/content-formatting-confluence/status-macro) |
| **Tooltip** | Hover-reveal tooltip text | [Tooltip](/apps/content-formatting-confluence/tooltip-macro) |
| **User Profile** | Display a user's avatar and name | [User Profile](/apps/content-formatting-confluence/user-profile-macro) |
| **Numbered Heading** | Auto-numbered heading hierarchy | [Numbered Headings](/apps/content-formatting-confluence/numbered-headings-macro) |
| **Divider** | Styled horizontal divider line | [Divider](/apps/content-formatting-confluence/divider-macro) |
| **Footnotes** | Numbered footnote references | [Footnotes](/apps/content-formatting-confluence/footnotes-macro) |
| **Footnotes Summary** | Consolidated list of all footnotes on a page | [Footnotes Summary](/apps/content-formatting-confluence/footnotes-summary-macro) |
| **JSON Viewer** | Formatted, collapsible JSON display | [JSON Viewer](/apps/content-formatting-confluence/json-viewer-macro) |
| **Custom Fonts** | Apply custom typography and font styling | [Custom Fonts](/apps/content-formatting-confluence/custom-fonts-macro) |
| **News** | Display latest announcements of confluence blogs | [News](/apps/content-formatting-confluence/news-macro) |
| **Page Tree** | Hierarchical navigation of Confluence pages | [Page Tree](/apps/content-formatting-confluence/page-tree-macro) |
| **Activity Stream** | Show recent page and user activities | [Activity Stream](/apps/content-formatting-confluence/activity-stream-macro) |
| **Number List** | Styled numbered lists with advanced formatting | [Number List](/apps/content-formatting-confluence/number-list-macro) |
| **Form Macro** | Collect structured user input through forms | [Form Macro](/apps/content-formatting-confluence/form-macro) |
| **Markdown Renderer** | Render Markdown content inside Confluence | [Markdown Renderer](/apps/content-formatting-confluence/markdown-renderer-macro) |
| **HTML Renderer** | Render custom HTML content inside Confluence | [HTML Renderer](/apps/content-formatting-confluence/html-renderer-macro) |

### Attachment Management
| **Feature** | What It Does | Full Reference |
|---|---|---|
| **Attachment Center Dashboard** | Space-wide attachment audit and inventory | [Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) |
| **Bulk Actions** | Delete or move attachments in bulk | [Bulk Actions](/apps/content-formatting-confluence/attachment-bulk-actions) |
| **Audit Logs** | History of attachment changes | [Audit Logs](/apps/content-formatting-confluence/attachment-audit-logs) |

## Key Rules

- **Tab macros cannot be nested inside another tab macro** - use Advanced Expand for secondary grouping within a tab
- **Conditional macros check group names at render time** - group names are case-sensitive and must match exactly as they appear in Confluence Admin → Groups
- **Macro settings save when you click Save on the panel** - you still need to Publish the page to make changes visible to others
`,
        },
        {
          slug: "how-to-tabbed-knowledge-base",
          title: "How to: Build a Tabbed Knowledge Base Page",
          content: `
A step-by-step workflow for building a tabbed hub page that organises content across multiple sections - the most common pattern for IT runbooks, product docs, and team wikis.

## Design: Three-Layer Structure

A well-built tabbed page combines three macro layers:

| **Layer** | Macro | Purpose |
|---|---|---|
| **Navigation** | Tab Parent Content Mapper | Tabs across the top, each tab = one content section |
| **Visibility** | Conditional Show / Hide | Different content per audience within the same tab |
| **Formatting** | Alert, Background, Buttons, Cards | Visual richness and callouts within each section |

## Step 1 - Prepare Your Child Pages (for Auto-Tab Approach)

1. Create a parent page in Confluence (this will be your hub)
2. Create child pages under it - one per tab section (e.g., Overview, Setup Guide, Troubleshooting, Reference)
3. Name each child page clearly - the page title becomes the tab label

→ [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper)

## Step 2 - Insert Tab Parent Content Mapper

1. Open the hub page in edit mode
2. Type \`/\` → search **Tab Parent Content Mapper** → insert it directly on the page
3. In the config panel, confirm the parent page (defaults to current page)
4. Set Sort Order to page tree order or **Alphabetical**
5. Preview - each child page appears as a tab

→ [Tab Navigation Overview](/apps/content-formatting-confluence/tab-navigation)

## Step 3 - Add Formatting Inside Tabs

Edit each child page and add rich formatting macros:

- Use **Alert** for warnings, notes, and important callouts
- Use **Background** to visually distinguish different sections within a tab
- Use **Buttons** to link to related Jira boards, external tools, or other pages
- Use **Advanced Expand** to collapse long reference tables or optional details

→ [Alert Macro](/apps/content-formatting-confluence/alert-macro) · [Background Macro](/apps/content-formatting-confluence/background-macro)

## Step 4 - Add Audience Visibility (Optional)

If different teams need to see different content within the same tab:

1. On the child page (in edit mode), select the content meant for a specific group
2. Type \`/\` → **Conditional Show** → insert it around the selected content
3. In the config panel, search for and select the specific **users** or **groups** who should see this content
4. Test in View mode with a matching user and a non-matching user

→ [How to: Create Role-Based Content Visibility](/apps/content-formatting-confluence/how-to-role-based-content)

## Step 5 - Publish and Verify

1. Publish each child page
2. Publish the hub page
3. Verify tabs appear correctly in view mode
4. Test tab navigation - each tab should load the corresponding child page content inline

## Maintaining the Hub

- **Add a new tab:** Create a new child page under the parent
- **Remove a tab:** Delete or move the child page out of the parent
- **Reorder tabs:** Drag child pages in the Confluence page tree to reorder them
`,
        },
        {
          slug: "how-to-role-based-content",
          title: "How to: Create Role-Based Content Visibility",
          content: `
A workflow for showing or hiding specific content sections based on who is viewing the page - without creating separate pages for each audience.

→ [Conditional Show Guide](/apps/content-formatting-confluence/conditional-show) · [Conditional Hide Guide](/apps/content-formatting-confluence/conditional-hide)

## When to Use This

| **Scenario** | Macro |
|---|---|
| **Show admin-only notes inside a public runbook** | Conditional Show (group = confluence-admins) |
| **Hide internal pricing from external users** | Conditional Hide (group = external-users) |
| **Show different onboarding steps per team** | Conditional Show (two blocks, different groups) |

## Step 1 - Identify Your Groups

1. Go to **Confluence Admin → Groups** (or **Site Admin → Groups** for cloud)
2. Note the **exact group name** - Conditional macros are case-sensitive
3. If a group doesn't exist, create it in Confluence Admin and assign the right users

## Step 2 - Wrap Content with Conditional Show

To show content **only** to a specific group:

1. Open the page in edit mode
2. Select the content block you want to restrict
3. Type \`/\` → **Conditional Show** → insert it (wraps the selected content)
4. In the config panel:
   - Under **Groups**, search and select the Confluence group who should see this content
   - Optionally add individual users under **Users**
   - Set **Match using** to **Any** or **All** as needed
5. Save the macro and Publish the page
6. Test: log in as a group member (visible) and a non-member (hidden)

## Step 3 - Wrap Content with Conditional Hide

To hide content **from** a specific group:

1. Select the content to hide
2. Type \`/\` → **Conditional Hide** → insert it
3. In the config panel, under **Groups**, search and select the group to hide from
4. Publish and test

## Step 4 - Stack Multiple Conditions on the Same Page

You can place multiple Conditional Show macros side by side to show different content to different audiences on the same page:

\`\`\`
[Conditional Show - Group: engineering-team]
  → Engineering-specific setup steps
[Conditional Show - Group: product-team]
  → Product team workflow steps
[Content with no conditional macro]
  → Visible to everyone
\`\`\`

Each block is independent - users in multiple groups see all content that matches any of their groups.

## Verification Checklist

- Group name matches exactly (copy-paste from Confluence Admin)
- Tested with a user IN the target group (content shows correctly)
- Tested with a user NOT in the target group (content is hidden)
- Page published after saving macros
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that save time and prevent common mistakes.

## Tab Navigation

- **Use the Parent Mapper for living hubs.** Tabs generated from child pages reflect the current child page list - add or rename a child page and the tab changes without editing the hub page. Custom Tabs require manual updates every time.
- **Tab Navigation cannot be nested.** If you need collapsible subsections inside a tab, use Advanced Expand - it's designed for secondary grouping within a tab body.
- **Reorder tabs by reordering child pages** in the Confluence page tree (drag and drop). The tab order follows the page tree by default.

## Conditional Visibility

- **Group names are case-sensitive.** Copy the group name directly from Confluence Admin → Groups. A single character difference causes the condition to silently fail - content becomes visible to everyone (Conditional Show fails open, not closed).
- **Test with two browser sessions.** Open an incognito window logged in as a non-group member. Don't rely on memory of who can see what - verify every condition.
- **Conditional macros enforce visibility, not access.** They hide content from the rendered view. The underlying page is still accessible to anyone with page view permission. For true access control, use Confluence page restrictions.

## Rich Content Macros

- **Alert types map to meaning, not just colour.** Use Info (blue) for context, Warning (yellow) for caution, Error (red) for blockers, Success (green) for completed steps. Consistent usage helps readers scan quickly.
- **Background + Alert creates a highlighted section.** Wrap an Alert inside a Background macro to create a visually distinct callout area - useful for critical procedures or step-by-step guides.
- **Use Buttons for all external links in runbooks.** Plain hyperlinks are easy to miss in dense documentation. Buttons with clear labels (e.g., "Open Jira Board", "View Monitoring Dashboard") reduce navigation friction.

## Attachments

- **Run the Attachment Center audit before space migrations.** Orphaned attachments that aren't referenced in any page content are the most common source of unexpected storage bloat during migration.
- **Bulk delete only after reviewing the orphan list.** Orphan detection flags attachments not referenced in page body content - but some may be linked from external systems or emails. Review before bulk-deleting.

## General

- **Macro settings save when you click outside the panel, but only Publish makes them live.** Draft changes are visible in your edit session but not to other users until you Publish.
- **Use the Page Templates feature to enforce consistency.** Create a template for each content type (runbook, decision record, meeting notes) with your standard macro layout pre-built - space members apply the template instead of recreating the structure.
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 2. ADVANCED CONTENT NAVIGATION (TABS)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "tab-navigation",
      title: "Advanced Content Navigation (Tabs)",
      articles: [
        {
          slug: "tab-navigation",
          title: "Tab Navigation Overview",
          content: `# Advanced Content Navigation

<img src="/images/content-formatting-assets/tab-navigation.png" alt="Tab Navigation screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Tab Macros?

Tab macros let you display multiple sections of content inside a single Confluence page using a familiar tabbed interface. Readers click a tab label to switch views - no page navigation required.

## Two Ways to Create Tabs

### Method 1 - Content Mapper Tabs (Recommended for Existing Pages)

Insert one of the three mapper macros directly on your page - each macro is standalone and renders the full tab interface by itself.

| **Macro** | Use When |
|---|---|
| **Tab Parent Content Mapper** | Tabs load from child pages of a parent |
| **Tab Label Content Mapper** | You enter a label; every page with that label becomes its own tab |
| **Tab Confluence Page Mapper** | You want to hand-pick specific pages as tabs |

Mapper tabs are dynamic - tabs reflect the current state of child pages, labeled pages, or the hand-picked page list.

### Method 2 - Custom Tabs (Manual Content)

Insert the **Create Custom Tabs** macro directly on your page. Write content inside each tab in the config panel. Use this when content doesn't already exist as separate pages.

## Common Controls (All Tab Types)

| **Setting** | Options | Default |
|---|---|---|
| **Tab style** | Underline, Pill, Box | Underline |
| **Tab position** | Top, Left | Top |
| **Default open tab** | First | First |

## Behavior Notes

- The active tab state is not persisted in the URL - refreshing the page always opens the default tab
- All tab content is rendered in the DOM - Confluence search will find text inside any tab
- Tab macros are fully nestable with other formatting macros (Alert, Background, Cards, etc.) inside each tab's content area`,
        },
        {
          slug: "tab-parent-mapper",
          title: "Tab Parent Content Mapper",
          content: `# Tab Parent Content Mapper Guide

<img src="/images/content-formatting-assets/tab-parent-mapper-update.png" alt="Tab Parent Content Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Parent Content Mapper creates one tab for each **child page** of a specified Confluence parent page. When child pages are added, renamed, or removed, the tabs reflect those changes - no manual editing of the hub page required.

## When to Use It

- You already have (or plan to create) separate child pages for each topic
- You want tabs to stay in sync with your page hierarchy automatically
- Teams maintain individual pages and a hub page should aggregate them as tabs

## How to Set It Up

1. Insert **Tab Parent Content Mapper** directly on the page
2. In the config panel, set the **Parent Page** - either the current page or another page in the space
3. Choose sort order and any filtering options
4. Preview and publish

## Settings Reference

| **Setting** | Description | Default |
|---|---|---|
| **Parent Page** | The page whose children become tabs. You can type a page name. | Current page |
| **Sort Order** | Alphabetical, Created Date, Modified Date | Manual (page tree order) |
| **Max Tabs** | Maximum number of child pages to show as tabs | All |

## Important Behaviors

- **Access control respected**: If a viewer doesn't have read access to a child page, that tab does not appear for them
- **Draft pages are excluded**: Only published child pages appear as tabs`,
        },
        {
          slug: "tab-label-mapper",
          title: "Tab Label Content Mapper",
          content: `# Tab Label Content Mapper Guide

<img src="/images/content-formatting-assets/tab-label-mapper-update.png" alt="Tab Label Content Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Label Content Mapper creates tabs based on a **label you enter in the macro configuration**. You type one label name - every Confluence page that has been tagged with that label becomes its own separate tab. If three pages share the same label, three tabs are created, one per page, with each tab's title taken from the page title and its content pulled from that page.

## When to Use It

- Multiple pages are already tagged with the same label and you want each of them as its own tab on a hub page
- You want tabs to reflect pages as they are tagged with or un-tagged from the label
- You want a cross-hierarchy view - pages from different parts of the space grouped by a shared label

## How to Set It Up

1. Tag each Confluence page you want as a tab with the same label (e.g., add the label \`release-notes\` to every release-notes page)
2. Insert **Tab Label Content Mapper** directly on the page
3. In the config panel, type the label name (e.g., \`release-notes\`)
4. Every page with that label appears as a separate tab - preview and publish

## Settings Reference

| **Setting** | Description |
|---|---|
| **Label** | The label name to match - each page tagged with this label becomes one tab |
| **Space** | Restrict matching to a specific space (default: current space) |
| **Sort** | How tabs are ordered: Alphabetical, Created Date, Modified Date |
| **Max Pages** | Maximum number of pages (tabs) to display |

## Behaviors

- One label input → one tab per page that carries that label
- If 3 pages share the label, 3 tabs are created; if 5 pages share it, 5 tabs are created
- Adding the label to a page adds it to the tab list
- Removing the label from a page removes it from the tab list
- Labels are case-insensitive in matching
- Only published pages the viewer has read permission to access appear as tabs`,
        },
        {
          slug: "tab-page-mapper",
          title: "Tab Confluence Page Mapper",
          content: `# Tab Confluence Page Mapper Guide

<img src="/images/content-formatting-assets/tab-page-mapper-update.png" alt="Tab Confluence Page Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Page Mapper lets you **hand-pick specific pages** from anywhere in the Confluence space to appear as tabs. Unlike the Parent or Label mappers, this one requires manual updates - you control exactly which pages are included and in what order.

## When to Use It

- You want precise control over which pages appear as tabs
- The pages you're grouping don't share a parent or a label
- You need tabs that pull from multiple different spaces
- The dynamic behavior of other mappers would include pages you don't want

## How to Set It Up

1. Insert **Tab Confluence Page Mapper** directly on the page
2. In the config panel, add pages one by one - search by title or paste page URLs
3. Drag to reorder the page list
4. Preview and publish

## Known Behavior

If a page in the list is deleted, the corresponding tab is removed automatically when the macro is edited or refreshed. Check your page list periodically if content is maintained by others.`,
        },
        {
          slug: "create-custom-tabs",
          title: "Create Custom Tabs",
          content: `# Create Custom Tabs Guide

<img src="/images/content-formatting-assets/create-custom-tabs-update.png" alt="Create Custom Tabs screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Custom Tabs?

Custom Tabs let you write content **directly inside each tab** instead of pulling from other pages. Use this when the content you want to tab doesn't exist as separate Confluence pages, or when you want full control over tab content without creating child pages.

## When to Use Custom Tabs

- New content being written for the first time
- Content that doesn't make sense as standalone pages
- Small amounts of tabbed content where separate pages would be overkill

## How to Create Custom Tabs

1. Open your page in edit mode
2. Type "/" → search **Create Custom Tabs** → insert it directly on the page
3. In the config panel, add a label for each tab you want
4. Click on a tab to select it, then type or insert content inside it
5. Drag tabs up/down to reorder
6. Publish the page

## Three Content Types Supported in Custom Tabs

### Type 1 - Rich Text
Type directly inside the tab. Use all standard Confluence formatting: headings, tables, lists, code blocks, inline images.

### Type 2 - Included Pages
Use the Confluence "Include Page" macro inside a tab to pull in another page's content. This is a middle ground between Custom Tabs and mapper tabs - you pick the pages but include their content inline.

## Tab Limits

- No enforced maximum number of tabs, but more than 10 tabs becomes difficult to navigate on narrow screens
- Tab labels should be kept short (under 20 characters) to avoid wrapping
- All custom tab content is stored on the current page - it is not accessible via direct URL`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 3. DYNAMIC VISIBILITY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dynamic-visibility",
      title: "Dynamic Visibility",
      articles: [
        {
          slug: "dynamic-visibility",
          title: "Dynamic Visibility Overview",
          content: `
## What Is Conditional Visibility?

Conditional visibility macros let you show or hide sections of content based on **who is viewing the page**. A single page can display different content to different audiences - admins see internal notes, guests see the public version, and managers see the compensation table.

## Two Macros

| **Macro** | Behavior |
|---|---|
| **Conditional Show** | Content is hidden by default; shown only to users who match the condition |
| **Conditional Hide** | Content is visible by default; hidden only for users who match the condition |

## Condition Types

| **Condition** | Description |
|---|---|
| **Confluence User** | Show/hide for specific individual Confluence users |
| **Confluence Group** | Show/hide based on Confluence group membership (e.g., \`confluence-admins\`) |

You can select multiple users and/or groups in one macro. Use the **Match using** setting to control whether the viewer must match **Any** (at least one) or **All** of the selected conditions.

## Common Patterns

**Pattern 1 - Admin-only notes**: Conditional Show, group = \`confluence-admins\`.

**Pattern 2 - Manager-only HR content**: Conditional Show, group = \`hr-managers\`.

## Important Warning

> **Conditional visibility is a UI control, not a security boundary.**
>
> Users with page-read permission can still access all page content via the Confluence REST API, regardless of Conditional Show/Hide settings. These macros change what is *displayed* in the browser - they do not change who has *access* to the underlying content.
>
> For truly sensitive content, use **Confluence Page Restrictions** to limit read access at the page level.`,
        },
        {
          slug: "conditional-hide",
          title: "Conditional Hide Guide",
          content: `# Conditional Hide Guide

<img src="/images/content-formatting-assets/conditional-hide-update.png" alt="Conditional Hide screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Conditional Hide macro wraps content that should be **visible to most users but hidden from a specific group or condition**. Think of it as "hide this from X."

## Step-by-Step Setup

1. Click on edit button.
2. Click **+** (Insert) → search for **Conditional Hide**.
3. Write the content inside the macro body.
4. In the config panel:
   - Set **Match using** to **Any** (hide if viewer matches any condition) or **All** (hide only if viewer matches all)
   - Under **Users**, search and select specific Confluence users to hide from (optional)
   - Under **Groups**, search and select Confluence groups to hide from (at least one user or group required)
5. Click Save.
6. In View mode, log in as a user who matches the condition - the content should be hidden for them

## Multiple Conditions

You can stack multiple Conditional Hide macros to hide content from multiple groups. Each macro is evaluated independently.

## Troubleshooting

| **Symptom** | Likely Cause | Fix |
|---|---|---|
| **Content still visible when it shouldn't be** | Wrong user or group selected | Re-open the macro config and verify the correct user/group is selected |
| **Content hidden from everyone** | Selected group includes all users | Use a more specific group or switch to individual user selection |
| **Content visible in Confluence API response** | Expected - conditional macros are UI-only | Use page restrictions for access control |
| **No effect in edit preview** | Edit mode shows all content regardless of conditions | Switch to View mode to test |`,
        },
        {
          slug: "conditional-show",
          title: "Conditional Show Guide",
          content: `# Conditional Show Guide

<img src="/images/content-formatting-assets/conditional-show-update.png" alt="Conditional Show screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Conditional Show macro wraps content that should be **hidden by default and shown only to a specific group or condition**. Think of it as "show this only to X."

## Step-by-Step Setup

1. Click on Edit button
2. Click **+** (Insert) → search for **Conditional Show**
3. Write the content inside the macro body.
4. In the config panel:
   - Set **Match using** to **Any** (show if viewer matches any condition) or **All** (show only if viewer matches all)
   - Under **Users**, search and select specific Confluence users who should see this content (optional)
   - Under **Groups**, search and select Confluence groups who should see this content (at least one user or group required)
5. Click Save.
6. Preview in View mode - sign in as a user in the target group to confirm visibility

## Multiple Conditions

You can stack multiple Conditional Show macros to show different content to different groups. Each macro is evaluated independently.

## Troubleshooting

| **Symptom** | Likely Cause | Fix |
|---|---|---|
| **Content not showing for target group** | Wrong user or group selected | Re-open the macro config and verify the correct user/group is selected |
| **Content showing to everyone** | Selected group includes all users | Use a more specific group or switch to individual user selection |
| **Edit mode always shows content** | Expected behavior - edit mode bypasses visibility conditions | Test in View mode |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 4. RICH CONTENT FORMATTING
    // ═══════════════════════════════════════════════════════════════
    {
      id: "rich-content",
      title: "Rich Content Formatting",
      articles: [
        {
          slug: "rich-content-formatting",
          title: "Rich Content Formatting Overview",
          content: `
## Overview

Content Formatting Macros includes 25 macros for enhancing the visual quality, interactivity, and clarity of Confluence pages. These macros require no custom CSS or developer skills - everything is configured through the macro's settings panel in the Confluence editor.

## Full Macro List

| **Macro** | What It Does |
|---|---|
| **Buttons** | Styled link buttons |
| **Background** | Section background color or image |
| **Alert** | Info, Warning, Error, Success banners |
| **Tooltip** | Hover-to-reveal text |
| **Progress Bar** | Multi-step page workflow tracker |
| **Footnotes** | Inline numbered footnotes |
| **Pop-up Dialog** | Modal overlay triggered by a link or button |
| **Advanced Expand** | Styled collapsible section |
| **Advanced Cards** | Structured content cards |
| **Interactive Banner** | Full-width hero/announcement banner |
| **Numbered Headings** | Auto-number heading levels |
| **Divider** | Styled horizontal separator |
| **Countdown Timer** | Live countdown to a target date |
| **User Profile** | Confluence user info card |
| **Status Macro** | Color-coded status badge |
| **JSON Viewer** | Formatted JSON display |
| **Footnotes Summary** | Consolidated list of all footnotes used on a page |
| **Custom Fonts** | Apply custom typography and font styling |
| **News** | Display latest announcements of confluence blogs |
| **Page Tree** | Hierarchical navigation of Confluence pages |
| **Activity Stream** | Show recent page and user activities |
| **Number List** | Styled numbered lists with advanced formatting |
| **Form Macro** | Collect structured user input through forms |
| **Markdown Renderer** | Render Markdown content inside Confluence |
| **HTML Renderer** | Render custom HTML content inside Confluence |

## General Usage Tips

- All macros are available in the Confluence editor via the **+** (Insert) button or the **/command** inline menu
- Most macros have a **Preview** mode in the editor - click the macro to see a live preview
- Macros can be nested inside each other and inside tab containers
- Configuration is done through the settings panel that opens when you click the macro in the editor`,
        },
        {
          slug: "buttons-macro",
          title: "Buttons Macro",
          content: `# Buttons Macro

<img src="/images/content-formatting-assets/buttons-macro.png" alt="Buttons Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Buttons macro creates styled call-to-action buttons on any Confluence page. Buttons can link to internal Confluence pages, external URLs, email addresses, or anchors on the same page.

## Configuration Options

Each button in the macro has these settings:

| **Setting** | Options |
|---|---|
| **Button text** | Label shown on the button (max 50 characters, required) |
| **Icon** | Optional icon from the built-in Lucide icon library |
| **Icon position** | Before, After, or Only (icon-only button) |
| **Style** | Filled, Outlined, Subtle, Link |
| **Shape** | Square, Rounded, Pill |
| **Size** | S, M, L |
| **Font family** | Arial, Calibri, Georgia, Verdana, Trebuchet MS, Times New Roman, Palatino, Tahoma, Courier New, Impact |
| **Font weight** | Regular, Semi-Bold, Bold |
| **Hover effect** | None, Elevated (lifts up), Shrink |
| **Background color** | Color picker (Filled style only) |
| **Text color** | Color picker |
| **Alignment** | Left, Center, Right |
| **Destination** | Search Confluence page or Add link (external URL) |
| **Open in new tab** | Yes / No |

The macro also includes a **Presets** tab with 30+ pre-designed button styles.

## Adding Multiple Buttons

All buttons live inside **one macro instance**. Use the **+ Add Button** control to add more buttons. When multiple buttons exist, **Group Settings** appear:

| **Group Setting** | Options |
|---|---|
| **Orientation** | Horizontal, Vertical |
| **Group Alignment** | Left, Center, Right, Space Between, Space Around |

## Common Use Cases

- **"Download" or "Get Started" CTA** at the top of a documentation page
- **Links to related systems** (Jira board, Confluence space, external tool) at the bottom of a runbook
- **Navigation buttons** replacing manually written "see also" links
- **Step-navigation** in onboarding pages: "Previous Step" and "Next Step"

## Best Practices

- Keep button labels short (2–5 words)
- Use Filled style for the main action, Outlined for alternatives
- Use icon-only buttons (Icon position: Only) for compact toolbars or social media links`,
        },
        {
          slug: "background-macro",
          title: "Background Macro",
          content: `# Background Macro

<img src="/images/content-formatting-assets/background-macro.png" alt="Background Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Background macro applies a background color, gradient, or image to any section of a Confluence page. Use it to visually separate content zones, highlight important sections, or create a branded look.

## Configuration Options

| **Setting** | Options | Notes |
|---|---|---|
| **Background Type** | Color, Gradient, Image | |
| **Color** | Color picker or hex value | For Color type |
| **Opacity** | Slider | For Color type |
| **Gradient** | Start color, end color, direction | For Gradient type |
| **Image** | Upload Confluence attachment or stock image | For Image type |
| **Image size** | Cover, Contain, Auto | For Image type |
| **Image position** | Top, Center, Bottom etc. | For Image type |
| **Image opacity** | Slider | For Image type |
| **Overlay color + opacity** | Color picker + slider | Semi-transparent overlay over background image |
| **Content padding** | Slider | Inner padding around content |
| **Min height** | Preset or custom pixel value | Optional minimum height |
| **Border radius** | Slider (pixels) | Rounded corners |
| **Alignment (X / Y)** | Left/Center/Right, Top/Center/Bottom | Content alignment inside the container |
| **Text color** | Color picker or hex value | Ensures text readability on dark backgrounds |

## Usage Notes

- Content inside the Background macro is fully editable - insert any Confluence content or other macros inside it
- Images can be uploaded directly as Confluence attachments from the macro config panel - no external hosting required
- Use the overlay feature to add a dark or colored semi-transparent layer over background images for better text contrast

## Common Patterns

**Section separator**: Use alternating white and light-gray Background macros to visually separate major page sections without borders.

**Announcement zone**: Blue background macro at the top of a space home page for team announcements.

**Warning zone**: Light-yellow background wrapping a critical process step that requires extra attention.`,
        },
        {
          slug: "alert-macro",
          title: "Alert Macro",
          content: `# Alert Macro

<img src="/images/content-formatting-assets/alert-macro.png" alt="Alert Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Alert macro creates a styled banner for informational messages, warnings, errors, or success confirmations. Alerts have a colored left border and icon that immediately signals the message type to the reader.

## Alert Types

| **Type** | Use For |
|---|---|
| **Work in progress** | Page being actively edited or drafted |
| **Info** | General information, notes, tips |
| **Warning** | Caution, important considerations |
| **Error** | Errors, failures, destructive actions |
| **Success** | Confirmations, completed steps |
| **Sensitive** | Sensitive or restricted information |
| **Outdated** | Content that may be stale or superseded |

## Configuration Options

| **Setting** | Options |
|---|---|
| **Alert type** | Work in progress, Success, Error, Info, Sensitive, Warning, Outdated |
| **Style** | Image Alert (with icon image) or Simple Alert (text only) |
| **Title** | Bold heading for the alert (max 50 characters, required) |
| **Body** | Alert message text (max 500 characters, required) |
| **Image** | Custom image upload - only visible when Style is Image Alert |
| **Permanently dismiss** | Checkbox - adds a dismiss option so readers can hide the alert permanently (stored in browser local storage) |
| **Background color** | Color picker or custom hex |
| **Text color** | Color picker or custom hex |

## Known Limitations

- The Permanently Dismiss option stores the dismissed state in the browser's local storage - it resets if the user clears browser data or switches devices

## Best Practices

- Use Info for routine tips and asides
- Reserve Error for genuine error states or dangerous actions
- Keep alert body text concise - if you need more than 3 sentences, consider an Advanced Expand section instead`,
        },
        {
          slug: "tooltip-macro",
          title: "Tooltip Macro",
          content: `# Tooltip Macro

<img src="/images/content-formatting-assets/tooltip-macro.png" alt="Tooltip Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Tooltip macro wraps a word or phrase with a hover tooltip that reveals additional context - a definition, explanation, or note. The tooltip appears on mouse hover and disappears when the cursor moves away.

## Configuration

| **Setting** | Description |
|---|---|
| **Tooltip text** | The text that appears when the user hovers over the macro (max 250 characters, plain text only) |

The tooltip trigger is the content placed inside the macro body in the editor - any text or inline content you type inside the macro becomes the hoverable trigger.

## When to Use Tooltips

- **Acronym definitions**: Wrap "JQL" with a tooltip explaining "Jira Query Language"
- **Technical term glossary**: Inline definitions without disrupting reading flow
- **Contextual hints**: Indicate why a field is mandatory

## Limitations

- Tooltip content is plain text only - no links, formatting, or macros inside a tooltip
- Tooltips are not visible on mobile (touch devices have no hover state) - provide an alternative explanation in the body text for mobile readers
- Screen readers may not announce tooltip content - use tooltips to supplement, not replace, visible text

## Best Practice

Use tooltips sparingly. If the definition is important enough that most readers need it, put it in the main text. Tooltips are best for optional context that would interrupt reading if always visible.`,
        },
        {
          slug: "progressbar-macro",
          title: "Progress Bar Macro",
          content: `# Progress Bar Macro

<img src="/images/content-formatting-assets/progressbar-macro.png" alt="Progress Bar Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Progress Bar macro creates a **multi-step, cross-page progress bar** in Confluence. Each step macro is placed on a separate page. Together they render a unified visual bar that shows readers where they are in a multi-page process - like an onboarding flow, a tutorial series, or a multi-phase procedure.

The bar is automatically scoped to a parent page: all step macros that share the same parent page belong to the same progress bar, with no manual ID configuration required.

## How It Works

1. Add a **Progress Bar** macro to each page that is part of the flow.
2. Configure each macro with its step title, step number, and destination (the Confluence page this step links to).
3. When a reader views any page in the flow, the macro with the **lowest step number** renders the full progress bar above the content.
4. The active step (highlighted in the bar) is determined by matching the current page to a step's destination.
5. Readers can click any step in the bar to navigate directly to that page.

## Configuration Options

| **Setting** | Description | Required |
|---|---|---|
| **Current step** | Mark this step as the active position in the bar | No |
| **Step title** | Label shown in the bar for this step (max 50 characters) | Yes |
| **Destination** | The Confluence page this step navigates to on click | Yes |
| **Step number** | Position of this step in the sequence (1–100) | Yes |

## Visual Behavior

- **Blue dot** - shown on the current (active) step and the first step when no step is active yet
- **Gray dot** - shown on steps that come after the active step (not yet completed)
- **No dot** - completed steps (before the active step) show no dot; the blue line covers them
- **Blue line** - drawn from the first step to the active step to show progress
- **Step color** - defaults to \`#0052cc\`; inherits from the color set when saving a step

## Scope & Bar Identity

The macro automatically groups steps by shared parent page. You do not need to assign a bar ID manually. Steps on pages that share the same parent are treated as one progress bar. This means you can run independent progress bars across different sections of your space without any naming conflicts.

## Setup Example

To build a 3-step onboarding flow:

1. Create pages: **Step 1 – Welcome**, **Step 2 – Setup**, **Step 3 – Complete** - all as children of an **Onboarding** parent page.
2. On **Step 1 – Welcome**: add a Progress Bar macro, set Step title = "Welcome", Step number = 1, Destination = the Welcome page.
3. On **Step 2 – Setup**: add a Progress Bar macro, set Step title = "Setup", Step number = 2, Destination = the Setup page.
4. On **Step 3 – Complete**: add a Progress Bar macro, set Step title = "Complete", Step number = 3, Destination = the Complete page.
5. When any of these pages is viewed, the bar appears above the content showing all three steps with the current page highlighted.

## Common Use Cases

- Multi-page onboarding or employee orientation flows
- Step-by-step tutorial series spread across Confluence pages
- Multi-phase project procedures with one page per phase
- Training paths where each module lives on its own page`,
        },
        {
          slug: "footnotes-macro",
          title: "Footnotes Macro",
          content: `# Footnotes Macro

<img src="/images/content-formatting-assets/footnotes-macro.png" alt="Footnotes Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Footnotes macro inserts superscript reference numbers inline with text, and collects the corresponding footnote definitions at the bottom of the section (or page). Think of it as academic citation style for Confluence pages.

## Setup (Two-Part)

### Part 1 - Inline Footnote Reference
Insert **Footnote** macro at the point in the text where the reference number should appear. Type the footnote definition inside the macro.

### Part 2 - Footnote Summary
Insert **Footnote Summary** macro at the bottom of the section or page. This renders the numbered list of all footnote definitions.

## Scope Rules

- Footnote numbers reset to 1 at each Footnote Summary macro
- If you use tabs, footnotes inside a tab share numbering with the current page scope
- For multi-tab pages, place one Footnote Summary macro at the bottom of each tab if you want tab-scoped numbering, or one Footnote List at the bottom of the page for page-wide numbering

## Limitations

- Footnote content is plain text only - no links or macros inside footnote definitions
- Footnotes are not auto-sorted - they appear in the order they are inserted on the page

## Use Cases

- Legal and compliance documents with citation requirements
- Research summaries referencing source material
- Technical docs with versioning notes
- Policy pages with exception notes`,
        },
        {
          slug: "footnotes-summary-macro",
          title: "Footnotes Summary Macro",
          content: `# Footnotes Summary Macro

## What It Does
The Footnotes Summary macro renders a numbered list of all Footnote macro definitions placed on the page above it. It works as the counterpart to the Footnotes macro - the Footnotes macro marks the inline reference, and the Footnotes Summary collects and displays all footnote text in one place.

## Setup

1. Place **Footnote** macros inline throughout your page content where you want reference numbers to appear
2. At the end of the section (or page), insert the **Footnotes Summary** macro
3. The Summary automatically scans upward and renders a numbered list of every footnote definition it finds in scope

## Scope and Numbering

| **Behaviour** | Detail |
|---|---|
| **Numbering** | Footnote numbers reset to 1 at each Footnotes Summary macro |
| **Scope** | Each Summary collects footnotes from the current page scope up to the previous Summary (or page start) |
| **Multi-tab pages** | Place one Footnotes Summary at the bottom of each tab for tab-scoped numbering, or one at the bottom of the page for page-wide numbering |

## Limitations

- The Footnotes Summary cannot be nested inside another macro's body
- Footnotes are listed in the order they appear on the page, not alphabetically
- Footnote content is plain text only - no links or macros inside footnote definitions

## Use Cases

- Academic-style documents with end-of-section citation lists
- Legal and policy pages with footnoted exceptions
- Research summaries requiring consolidated reference lists
- Multi-section pages where each section has its own footnote list`,
        },
        {
          slug: "popup-dialog-macro",
          title: "Pop-up Dialog Macro",
          content: `# Pop-up Dialog Macro

<img src="/images/content-formatting-assets/popup-dialog-macro.png" alt="Pop-up Dialog Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Pop-up Dialog macro creates a modal overlay that opens when a reader clicks a trigger (button).

## Setup

1. Insert the **Pop-up Dialog** macro on your page
2. In the settings panel, enter a **Title** and **Body** for the dialog content
3. A trigger button is automatically added - click the edit icon next to "Pop-up Trigger Added" to customise the button label and alignment
4. Readers click the trigger button to open the dialog

## Configuration Options

| **Setting** | Options |
|---|---|
| **Title** | Text shown as the dialog heading (max 50 characters, required) |
| **Body** | Message content shown inside the dialog (max 500 characters, required) |
| **Text Alignment** | Left, Center, Right |
| **Text color** | Color picker or custom hex |
| **Trigger button text** | Label on the trigger button (default: "Open Pop-up") |
| **Trigger alignment** | Left, Center, Right |

## Common Use Cases

- **Definitions**: A "What is this?" link beside a complex term opens a definition modal
- **Quick reference**: A "Show accepted values" link opens a reference table without leaving the page
- **Step detail**: "Learn more" link beside a summary opens a detailed step breakdown

## Limitation
Pop-up dialogs do not work well as navigation - avoid using them for primary content. If the content is important enough that most readers need it, put it in the page body or a tab, not a dialog.`,
        },
        {
          slug: "advanced-expand-macro",
          title: "Advanced Expand Macro",
          content: `# Advanced Expand Macro

<img src="/images/content-formatting-assets/advanced-expand-macro.png" alt="Advanced Expand Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Advanced Expand macro creates a collapsible content section with a styled header. Unlike the standard Confluence Expand macro, Advanced Expand offers styling options for the header (color, icon, size) and supports rich content inside the body.

## Configuration Options

| **Setting** | Options |
|---|---|
| **Style** | Style A (minimal with arrow), Style B (card with expand button), Style C (bordered/accented) |
| **Icon** | Optional icon shown beside the header - choose from the built-in icon library or upload an emoji |
| **Header size** | Normal text, H1, H2, H3, H4, H5, H6 |
| **Accent color** | Color picker - controls header text and icon color |
| **Header background color** | Color picker (Style A only) |

## Expand Styles

**Style A**: Minimal header with a left-side arrow indicator. Supports a custom header background color.

**Style B**: Card-style panel with an expand/collapse button on the right. No background color option.

**Style C**: Bordered style with a top and bottom accent line. No background color option.

Use the **Accent color** picker to color-code expand sections by category (e.g., blue for setup steps, green for verification, red for rollback steps).

## Common Use Cases

- **FAQ pages**: Each question is an expand header; answers collapse until clicked
- **Long runbooks**: Collapse less-common paths by default
- **Step-by-step guides**: Show one step at a time to reduce cognitive load`,
        },
        {
          slug: "advanced-card-macro",
          title: "Advanced Cards Macro",
          content: `# Advanced Cards Macro

<img src="/images/content-formatting-assets/advanced-card-macro.png" alt="Advanced Cards Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Advanced Cards macro creates structured content cards - rectangular panels with optional header, body text, image, and link. Cards can be arranged in grid layouts to create visual hub pages.

## Card Layout Options

| **Columns** | Description |
|---|---|
| **1** | Full-width single card per row |
| **2** | Two cards per row |
| **3** | Three cards per row |
| **4** | Four cards per row |
| **5** | Five cards per row |

## Per-Card Configuration

| **Setting** | Description |
|---|---|
| **Title** | Card header text (required) |
| **Content** | Body text content |
| **Image** | Upload a Confluence attachment image |
| **Destination** | Link to a Confluence page (search) or external URL |
| **Open in new tab** | Yes / No |
| **Background color** | Color picker |
| **Text color** | Color picker |

## Layout and Design Options

| **Setting** | Options |
|---|---|
| **Image position** | Left, Top, Bottom, Right, None |
| **Image fit** | Cover, Contain, Fill |
| **Custom card height** | Toggle + height input (100–800px) |
| **Text alignment** | Left, Center, Right |
| **Hide card border** | Toggle |
| **Title size** | 8–72px |
| **Content size** | 8–48px |
| **Card spacing** | Slider |

## Common Use Cases

- **Space home page**: Cards for each team, product, or topic area - each card links to a sub-space or page
- **Product catalog**: One card per product with logo, description, and "Learn More" button
- **Team directory**: Cards for each team member with photo, name, and role
- **Resources hub**: Cards linking to key documents, forms, or systems`,
        },
        {
          slug: "interactive-banner-macro",
          title: "Interactive Banner Macro",
          content: `# Interactive Banner Macro

<img src="/images/content-formatting-assets/interactive-banner-macro.png" alt="Interactive Banner Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Interactive Banner macro creates a full-width announcement or hero banner at the top (or anywhere) of a Confluence page. Banners support background images or colors, a headline, subtitle, and call-to-action buttons.

## Configuration Options

The banner supports multiple slides, each configured independently:

| **Setting** | Description |
|---|---|
| **Slide components** | Toggle which elements appear: Title, Body, Button |
| **Title** | Main heading text for this slide (max 50 characters) |
| **Title text color** | Color picker for the title text |
| **Body** | Secondary text below the title (max 250 characters) |
| **Body text color** | Color picker for the body text |
| **Background image** | Upload a Confluence attachment or use a stock image |
| **Overlay mode / opacity** | Dark overlay on the background image for text readability |
| **Button text** | Label for the call-to-action button |
| **Button destination** | Link to a Confluence page (search) or external URL |
| **Open in new tab** | Yes / No |
| **Button background color** | Color picker for the button |
| **Button text color** | Color picker for the button label |

## Common Use Cases

- **Space home announcements**: "Q3 Planning starts this week - see the schedule"
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

<img src="/images/content-formatting-assets/numbered-headings-macro.png" alt="Numbered Headings Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Numbered Headings macro automatically adds hierarchical numbers to all headings on a page (1, 1.1, 1.1.1, etc.) without manually typing them. If you add or remove a heading, numbering updates automatically on next page view.

## When to Use

- Legal or compliance documents where section references must be precise (e.g., "see section 3.2.1")
- Long technical specifications with deeply nested sections
- Project plans or proposals with numbered deliverables
- Any document where "refer to section X" needs to be unambiguous

## How to Use

Numbered Headings is a **page-level byline button**, not an inline macro. It appears in the page byline area (the metadata strip below the page title).

1. Open the page in **view mode**
2. Click the **Numbered Heading | Clovity** button in the page byline
3. A settings panel opens - enable numbering and configure the format
4. Click Save - the page headings update immediately

## Configuration Options

| **Setting** | Options |
|---|---|
| **Enable / Disable** | Toggle numbered headings on or off for this page |
| **Number format** | Decimal (1, 1.1, 1.1.1), Latin lower (a,b,c), Latin upper (A,B,C), Roman lower (i,ii,iii), Roman upper (I,II,III) |
| **Skip headings** | Multi-select - choose which heading levels (H1–H6) to exclude from numbering |

## Behavior Notes

- Numbering is applied to the live page HTML - heading text in the editor is not modified
- Settings are stored per-page - each page has its own enable/format configuration
- It is not inserted via "/" in the editor - it is a separate byline action button`,
        },
        {
          slug: "divider-macro",
          title: "Divider Macro",
          content: `# Divider Macro

<img src="/images/content-formatting-assets/divider-macro.png" alt="Divider Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Divider macro inserts a styled horizontal separator between page sections. It goes beyond the standard Confluence horizontal rule with multiple visual styles and spacing options.

## Three Divider Types

### Line
A styled horizontal rule. Choose a line style (Solid, Dashed, Dotted, Double, or Gradient), set the color, thickness, and width.

### Text
A divider with a centered or aligned text label. Configure the label text (max 30 characters), label style (Plain, Badge, Uppercase), text color, font size, and font weight. A line appears on either side of the label.

### Icon
A divider with an icon from the built-in icon library. Choose the icon, size (S/M/L), and the accompanying line style and width.

## Configuration Options

All three types share these base settings:

| **Setting** | Options |
|---|---|
| **Type** | Line, Text, Icon |
| **Line style** | Solid, Dashed, Dotted, Double, Gradient |
| **Color** | Color picker or custom hex |
| **Thickness** | Slider |
| **Width** | Full width toggle; or percentage slider when not full width |
| **Alignment** | Left, Center, Right |

Additional settings for **Text** type:

| **Setting** | Options |
|---|---|
| **Label text** | Free text (max 30 characters, required) |
| **Label style** | Plain, Badge, Uppercase |
| **Text color** | Color picker |
| **Font size** | Slider |
| **Font weight** | Light, Regular, Bold |

Additional settings for **Icon** type:

| **Setting** | Options |
|---|---|
| **Icon** | From built-in Lucide icon library |
| **Icon size** | S, M, L |

## When to Use

- Between major sections of a long page where a heading alone isn't enough visual separation
- In cards or background sections to separate a header from body content
- As a footer separator before contact information or navigation buttons`,
        },
        {
          slug: "countdown-macro",
          title: "Countdown Timer Macro",
          content: `# Countdown Timer Macro

<img src="/images/content-formatting-assets/countdown-macro.png" alt="Countdown Timer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Countdown Timer macro displays a live countdown to a specific date and time. The timer updates in real time as the page is viewed.

## Configuration Options

| **Setting** | Description |
|---|---|
| **Date** | Target expiry date (required, must be today or future) |
| **Time** | Target expiry time (optional) |
| **Style** | Boxes, Circles, or Gauges |
| **Color** | Color picker for the timer elements |
| **Font size** | Slider from 25–60px |
| **Show labels** | Toggle to show or hide "Days", "Hours", "Minutes", "Seconds" labels |
| **Label text** | Customizable label text for each unit (when Show labels is on) |

## Display Styles

### Boxes
Countdown units displayed in individual rectangular boxes for days, hours, minutes, and seconds.

### Circles
Countdown units displayed with circular progress rings for each time unit.

### Gauges
Countdown units shown as arc gauge indicators for each time unit.

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

<img src="/images/content-formatting-assets/user-profile-macro.png" alt="User Profile Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The User Profile macro lets you add up to 30 profile cards on a single Macro. Each card displays a user's name and a custom details field (such as job title), along with an optional image and background color. Card Style controls only the visual appearance of the cards - it does not add or remove information fields.

## How to Set It Up

1. Insert the **User Profile** macro on your page
2. In the **General** tab, use the **Add Users** field to search for and add Confluence users (up to 30)
3. Choose a **Card Style**, **Card Size**, and set your preferred colors
4. Select a **Hover Effect** if desired
5. Switch to the **Content** tab to fill in details for each individual card
6. Publish the page

## General Tab Settings

| **Setting** | Description |
|---|---|
| **Add Users** | Search and add Confluence users to display - up to 30 users per macro |
| **Card Style** | 5 visual layout options that change the card's appearance only - no extra fields are added or removed by changing style |
| **Card Size** | Small, Medium, or Large |
| **Name Color** | Color of the user's display name on the card |
| **User Details Color** | Color of the details text (e.g. job title) on the card |
| **Shape Color** | Color of the avatar shape/background |
| **Hover Effect** | Visual effect applied when a viewer hovers over a card (e.g. No effect, shadow, lift) |

## Content Tab Settings (Per Card)

Each user card has its own Content tab with individual settings:

| **Setting** | Description |
|---|---|
| **User Details** | Free-text field (up to 50 characters) - enter the information to show on the card, such as job title, team, or role |
| **Background Color** | Optional background color for that individual card |
| **Image** | Optional custom image to display on the card |
| **Move backwards / Move forwards** | Reorder the card's position within the macro |
| **Remove Profile Card** | Delete this card from the macro |

## Card Style Note

Card Style selects between 5 visual appearances for how the card is laid out. It only affects how the card looks - it does not pull in additional data from Confluence profiles or show/hide extra fields. The information displayed on each card is only what you enter in the User Details field and the user's name.

## Common Use Cases

- **Team directory**: Add all team members, enter each person's role in the User Details field
- **Point-of-contact block**: Add the relevant person, enter their role or responsibility in User Details
- **On-call roster**: Add the current on-call person and update the User Details field each rotation
- **Escalation path**: Add L1, L2, L3 contacts with their escalation level in User Details`,
        },
        {
          slug: "status-macro",
          title: "Status Macro",
          content: `# Status Macro

<img src="/images/content-formatting-assets/status-macro.png" alt="Status Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Status macro creates color-coded status badges from 13 preset sets covering workflows, estimations, and other classifications. Select a preset set to display a badge group on your page.

## 13 Preset Status Sets

### Status Sets
| **Set** | Values |
|---|---|
| **Workflow** | TO DO, IN PROGRESS, REVIEW, BLOCKED, DONE |
| **Approval** | DRAFT, REVIEW, REJECTED, APPROVED |
| **Quality** | EXCELLENT, AVERAGE, POOR |
| **Priority** | VERY LOW, LOW, MEDIUM, HIGH, VERY HIGH |
| **MoSCoW** | MUST HAVE, SHOULD HAVE, COULD HAVE |

### Values & Estimations
| **Set** | Values |
|---|---|
| **Linear scale** | ?, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| **Fibonacci** | ?, 1, 2, 3, 5, 8, 13, 20, 40, 100 |
| **T-shirt sizes** | ?, XS, S, M, L, XL |
| **Completion** | 0%, 25%, 50%, 75%, 100% |

### Miscellaneous
| **Set** | Values |
|---|---|
| **Tier** | PLATINUM, GOLD, SILVER, BRONZE |
| **Rarity** | Common, Magical, Set, Rare, Legendary, Mythic |
| **Star rating** | ★, ★★, ★★★, ★★★★, ★★★★★ |
| **Color dots** | green, yellow, orange, gray |

## Configuration

Select a preset set from the visual card picker in the settings panel. Each card previews the status badges in that set. The selected set is then displayed on the page.

## Use Cases

- Project status table with a workflow status badge per row
- Backlog items with story point estimates (Fibonacci)
- Risk register with a priority badge per item
- Release notes with completion percentage badges`,
        },
        {
          slug: "json-viewer-macro",
          title: "JSON Viewer Macro",
          content: `# JSON Viewer Macro

<img src="/images/content-formatting-assets/json-viewer-macro.png" alt="JSON Viewer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

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

## Limitations

- JSON must be valid - the macro displays an error if the JSON is malformed
- Large JSON payloads (>500KB) may affect page load performance
- JSON is stored as page content - do not paste JSON containing sensitive data (API keys, passwords)

## Common Use Cases

- API documentation showing request/response examples
- Configuration file documentation
- Data schema examples for developer documentation
- Webhook payload examples`,
        },
        {
          slug: "custom-fonts-macro",
          title: "Custom Fonts Macro",
          content: `# Custom Fonts Macro

<img src="/images/content-formatting-assets/custom-fonts-macro.png" alt="Custom Fonts Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Custom Fonts macro lets you add a styled text block to any Confluence page. You type the text directly into the macro and control its font family, weight, size, color, alignment, and line height - all from the config panel. Use it to create visually distinct headings, section titles, or callout text that goes beyond Confluence's standard heading styles.

## How to Set It Up

1. Insert the **Custom Fonts** macro on your page
2. In the **Text** field, type the text you want to display (required)
3. Set the **Alignment** - Left, Center, or Right
4. Under **Typography**, choose the **Font Family**, **Font Weight**, and drag the **Font Size** slider to the size you need
5. Pick a **Text Color** from the preset swatches or use the custom color picker
6. Optionally enable **Set line height manually** to control vertical spacing
7. Publish the page

## Configuration Options

| **Setting** | Options | Notes |
|---|---|---|
| **Text** | Free text input | Required - this is the text that will be displayed |
| **Alignment** | Left, Center, Right | Controls horizontal alignment of the text block |
| **Font Family** | Dropdown (e.g. Arial, and other available fonts) | Selects the typeface for the text |
| **Font Weight** | Regular, Bold, and other available weights | Controls how thick or thin the text strokes appear |
| **Font Size** | Slider (px) | Drag to set the exact size; displays the current value in px |
| **Text Color** | Preset color swatches + custom color picker | Sets the text color |
| **Set Line Height Manually** | Toggle on / off | When on, lets you enter a specific line height value |

## Common Use Cases

- **Custom page title**: Add a large, styled heading at the top of a space home page or landing page
- **Section labels**: Use a distinct font and color to mark major sections within a long page
- **Announcement text**: Display a bold, center-aligned message at the top of an announcement page
- **Visual emphasis**: Highlight a key statistic, quote, or call-to-action with a larger font size and a brand color`,
        },
        {
          slug: "news-macro",
          title: "News Macro",
          content: `# News Macro

<img src="/images/content-formatting-assets/news-macro.png" alt="News Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The News macro displays Confluence blog posts from your space as a styled feed on any Confluence page. You give the feed a title, set how many posts to show, and choose the feed type - the macro then renders the matching blog posts in that layout.

## How to Set It Up

1. Insert the **News** macro on your page
2. Enter a **Title** for the feed (required)
3. Enter a **Limit** - the number of blog posts to display
4. Select a **Feed Type** from the dropdown (e.g. Image Feed)
5. Publish the page

## Configuration Options

| **Setting** | Description |
|---|---|
| **Title** | Required - the heading displayed above the blog post feed |
| **Limit** | Number of blog posts to show in the feed |
| **Feed Type** | Controls the layout of the feed (e.g. Image Feed displays posts with their associated images) |

## Common Use Cases

- **Space home page**: Show the latest blog posts from your space so visitors always see recent updates
- **Team hub**: Surface team announcements written as Confluence blog posts
- **Project space**: Display project updates and news posts in a visual feed layout
- **Knowledge base**: Highlight recently published blog articles for readers

## Behavior Notes

- The macro pulls blog posts from the current Confluence space
- Only published blog posts are shown - drafts are not included
- Posts the viewer does not have read permission to access are not displayed`,
        },
        {
          slug: "page-tree-macro",
          title: "Page Tree Macro",
          content: `# Page Tree Macro

<img src="/images/content-formatting-assets/page-tree-macro.png" alt="Page Tree Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Page Tree macro displays all pages of the current Confluence space in a list when inserted on a page. Readers can see every page in the space and click any page title to navigate to it. The currently selected or active page is highlighted in the list.

## How to Set It Up

1. Insert the **Page Tree** macro on your page
2. By default, the macro renders all pages in the current space starting from the space homepage - no configuration required
3. Optionally, open the config panel to set a **Root Page** - the tree will then show only that page and its sub-pages instead of the full space
4. Publish the page

## Common Use Cases

- **Space home page**: Give readers a complete overview of all pages in the space from a single location
- **Navigation panel**: Embed the macro on a hub or landing page so team members can quickly find and jump to any page
- **Documentation index**: Let readers browse the full list of pages in a documentation space without using the sidebar
- **Onboarding pages**: Help new team members discover all available pages in the space

## Behavior Notes

- Only pages the viewer has read permission to access are shown
- Draft pages are not included in the list
- The active/selected page is visually highlighted in the list`,
        },
        {
          slug: "activity-stream-macro",
          title: "Activity Stream Macro",
          content: `# Activity Stream Macro

<img src="/images/content-formatting-assets/activity-stream-macro.png" alt="Activity Stream Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Activity Stream macro shows recent page activity from a selected Confluence space. Each entry displays the page name, the user who last modified it, and how long ago the change was made - grouped by user avatar. You set a title, choose the space, and set a limit on how many items to show.

## How to Set It Up

1. Insert the **Activity Stream** macro on your page
2. Enter a **Title** - this appears as the heading above the activity list (e.g. "Recent Activity")
3. Select the **Space** from the dropdown - the macro shows activity from that space
4. Enter a **Limit** - the number of recent page entries to display
5. Publish the page

## Configuration Options

| **Setting** | Description |
|---|---|
| **Title** | Heading displayed above the activity list - leave blank and "Your title will appear here" is shown as a placeholder |
| **Space** | The Confluence space to pull recent page activity from (selected from a dropdown of available spaces) |
| **Limit** | Number of recent page activity entries to display |

## What It Shows

The macro renders a list of recently modified pages from the selected space. Each entry shows:

- **Page name** - clickable link to the page
- **User name** - the person who last modified the page
- **Time ago** - how long ago the page was last changed (e.g. 14 days ago, 58 days ago)

Entries are grouped under the user's avatar, so you can see at a glance which user was responsible for which recent changes.

## Common Use Cases

- **Space home page**: Show the team which pages have been updated recently in the space
- **Team hub**: Display recent page changes from the team's space so members can follow what's being worked on
- **Project space**: Surface the most recently edited pages in a project space
- **Manager view**: Choose a specific space to monitor recent documentation activity

## Behavior Notes

- Only pages the current viewer has read permission to access are shown
- The activity is pulled from the space selected in the Space dropdown
- Draft pages are not included`,
        },
        {
          slug: "number-list-macro",
          title: "Number List Macro",
          content: `# Number List Macro

<img src="/images/content-formatting-assets/number-list-macro.png" alt="Number List Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Number List macro creates a styled numbered list on a Confluence page. You add each list item individually using the **Add a List item** button, choose a numbering style, set a color, pick a variation, and toggle rounded corners - all from the config panel.

## How to Set It Up

1. Insert the **Number List** macro on your page
2. Click **Add a List item** to add your first item - a text input appears for that item
3. Type the item text, then click **Add a List item** again to add more
4. Choose a **Numbering** style
5. Under **Appearance**, select a **Color**, **Variation**, and toggle **Fully rounded corners** if desired
6. Publish the page

## Configuration Options

### Numbering

| **Option** | Description |
|---|---|
| **1, 2, 3…** | Standard decimal numbering |
| **A, B, C…** | Alphabetical numbering |
| **I, II, III…** | Roman numeral numbering |

### Appearance

| **Setting** | Options | Description |
|---|---|---|
| **Color** | Preset swatches (dark, white, blue, green, orange, red, purple, black) + custom picker | Sets the color of the number markers |
| **Variation** | Filled, Outlined, Plain | Controls the visual style of the number badge - Filled shows a solid colored badge, Outlined shows a border only, Plain shows the number without a badge |
| **Fully rounded corners** | Toggle on / off | When on, the number badge uses fully circular/pill-shaped corners |

## Common Use Cases

- **Step-by-step guides**: Add each step as a list item with a color that matches your page theme
- **Ranked lists**: Use A, B, C… or I, II, III… numbering to show priority or ranking
- **Procedures**: Use Filled variation with a bold color to make each step number visually stand out
- **Structured content**: Use Plain variation for a clean, minimal numbered list with custom color`,
        },
        {
          slug: "form-macro",
          title: "Form Macro",
          content: `# Form Macro

<img src="/images/content-formatting-assets/form-macro.png" alt="Form Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Form macro embeds a structured input form directly on any Confluence page. You give the form a title, then build it by adding fields from a list of available field types. The form preview updates as you add fields, so you can see how it will look before publishing.

## How to Set It Up

1. Insert the **Form** macro on your page
2. Enter a **Form Title** - this appears as the dark header bar at the top of the form (e.g. "My Form")
3. Under **Add a Field**, click any field type to add it to the form
4. The added field appears under **Form Fields** - you can reorder fields using the up/down arrows and remove them with the delete button
5. Continue adding fields until the form is complete
6. Publish the page

## Form Title

| **Setting** | Description |
|---|---|
| **Form Title** | Required - displayed as a bold header at the top of the rendered form |

## Available Field Types

Click any of the following from the **Add a Field** section to add it to your form:

| **Field Type** | Description |
|---|---|
| **Short text** | Single-line text input - for names, short answers, IDs |
| **Paragraph** | Multi-line text input - for descriptions, comments, or longer responses |
| **Number** | Numeric input field |
| **Date field** | Calendar date picker |
| **Attachment upload** | Lets the form submitter upload a file |
| **Dropdown list** | Single-select dropdown from a list of options |
| **Page list** | Lets the submitter select from Confluence pages |
| **User list** | Lets the submitter select a Confluence user |
| **Label list** | Lets the submitter select from Confluence labels |
| **Table field** | A table-based input field |

## Managing Form Fields

Once a field is added to the **Form Fields** list:

- **Reorder** - use the up/down arrows on the right of each field to change its position
- **Remove** - click the delete (×) button to remove a field from the form

## Common Use Cases

- **Request intake**: Build an IT or HR request form with short text, dropdown, and attachment upload fields
- **Feedback collection**: Use paragraph and dropdown fields to gather structured post-event feedback
- **Data collection**: Use number, date, and user list fields to capture structured information from team members
- **File submission**: Use the attachment upload field to let users submit files directly through a Confluence page`,
        },
        {
          slug: "markdown-renderer-macro",
          title: "Markdown Renderer Macro",
          content: `# Markdown Renderer Macro

<img src="/images/content-formatting-assets/markdown-renderer-macro.png" alt="Markdown Renderer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Markdown Renderer macro takes raw Markdown text and renders it as formatted Confluence content. Paste any standard Markdown - headings, lists, bold/italic, code blocks, tables, links - and it displays as styled, readable output without converting it to Confluence storage format.

## How to Use

1. Insert the **Markdown Renderer** macro
2. Paste your Markdown source text into the macro body
3. The macro renders a preview in edit mode
4. Publish the page - readers see the formatted output, not the raw Markdown

## Supported Markdown Syntax

| **Element** | Markdown | Rendered As |
|---|---|---|
| **Headings** | \`# H1\`, \`## H2\`, \`### H3\` | Styled headings |
| **Bold** | \`**text**\` | Bold text |
| **Italic** | \`*text*\` | Italic text |
| **Code (inline)** | \`\\\`code\\\`\` | Monospace inline |
| **Code block** | \`\\\`\\\`\\\`language\\\`\\\`\\\`\` | Syntax-highlighted code block |
| **Table** | \`\| col \| col \|\` | Formatted table |
| **Ordered list** | \`1. item\` | Numbered list |
| **Unordered list** | \`- item\` | Bulleted list |
| **Link** | \`[label](url)\` | Hyperlink |
| **Blockquote** | \`> text\` | Indented quote block |
| **Horizontal rule** | \`---\` | Divider line |

## Common Use Cases

- **Docs-as-code migration**: Paste README.md or other Markdown files directly into Confluence without reformatting
- **Developer documentation**: Engineers who write in Markdown can contribute Confluence pages without learning the Confluence editor
- **Cross-platform content**: Maintain content in Markdown in a Git repo and mirror it to Confluence by pasting into this macro
- **API reference**: Paste OpenAPI or README-style Markdown descriptions into Confluence pages alongside other content

## Limitations

- Markdown is stored verbatim inside the macro - Confluence search indexes the rendered text, not the raw Markdown source
- Custom Markdown extensions (GitHub Flavored Markdown task lists, footnotes, definition lists) may not render - standard CommonMark syntax is most reliable
- Images referenced via relative paths in the Markdown will not render; use absolute URLs`,
        },
        {
          slug: "html-renderer-macro",
          title: "HTML Renderer Macro",
          content: `# HTML Renderer Macro

<img src="/images/content-formatting-assets/html-renderer-macro.png" alt="HTML Renderer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The HTML Renderer macro renders custom HTML markup inside a Confluence page. It supports standard HTML elements, inline CSS, and safe embed codes - giving authors who know HTML direct control over layout and styling on specific sections of a page.

## How to Use

1. Insert the **HTML Renderer** macro
2. Paste or type your HTML into the macro body
3. The macro sanitizes the HTML and renders a preview in edit mode
4. Publish the page - readers see the rendered HTML output

## Supported HTML Elements

| **Category** | Supported Tags |
|---|---|
| **Structure** | \`div\`, \`section\`, \`article\`, \`header\`, \`footer\`, \`p\`, \`span\` |
| **Headings** | \`h1\` – \`h6\` |
| **Text formatting** | \`strong\`, \`em\`, \`u\`, \`s\`, \`code\`, \`pre\`, \`blockquote\` |
| **Lists** | \`ul\`, \`ol\`, \`li\`, \`dl\`, \`dt\`, \`dd\` |
| **Tables** | \`table\`, \`thead\`, \`tbody\`, \`tr\`, \`th\`, \`td\` |
| **Media** | \`img\` (src must be absolute URL), \`figure\`, \`figcaption\` |
| **Links** | \`a\` (href with http/https) |
| **Inline style** | \`style\` attribute on any element |

## Sanitization Rules

For security, the following are stripped before rendering:

- \`<script>\` tags and JavaScript event handlers (\`onclick\`, \`onload\`, etc.)
- \`<iframe>\` tags (use Confluence's native embed for iframes)
- External stylesheet links (\`<link rel="stylesheet">\`)
- \`<form>\` and \`<input>\` elements (use the Form Macro for input collection)
- \`data:\` and \`javascript:\` URIs in \`href\` or \`src\` attributes

## Common Use Cases

- **Custom layouts**: Multi-column HTML layouts using flexbox or grid via inline CSS - useful when Confluence's column macro isn't flexible enough
- **Styled callouts**: Highly customized callout boxes that go beyond what the Alert macro offers
- **Embedded badges or shields**: Static SVG badges (e.g., build status, version number) from external badge services
- **Complex tables**: HTML tables with \`colspan\`, \`rowspan\`, or cell-level background colors not possible in Confluence's native table editor
- **Third-party widget embeds**: Static HTML embed codes from tools that provide non-iframe embeds (e.g., charts, maps with static HTML output)

## Limitations

- JavaScript is not executed - HTML Renderer is for markup and styling only, not interactive widgets
- \`<iframe>\` is blocked; use Confluence's built-in Embed macro for video and external content iframes
- Inline styles apply only within the macro container - they cannot affect elements outside the macro body
- Very large HTML blocks may affect page load time; keep HTML concise`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 5. ATTACHMENT MANAGEMENT & AUDIT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "attachment-management",
      title: "Attachment Management & Audit",
      articles: [
        {
          slug: "attachment-management",
          title: "Attachment Management & Audit",
          content: `
## What Is the Attachment Management Center?

The Attachment Management Center is a dedicated panel built into Content Formatting Macros that gives Confluence space admins a single place to:

- **View all attachments** across a space (or filtered to a specific page)
- **Filter by**: file type, uploader, upload date, file size, or linked/unlinked status
- **Bulk label** attachments for categorization
- **Bulk delete** unused or orphaned attachments
- **Identify orphaned files** - attachments uploaded to a page but not referenced in any page content

## How to Access

- **Globally**: The Attachment Management Center is accessible globally - you do not need to go through Space Settings

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
Attachments flagged as orphaned are uploaded to a page but not referenced in any content on that page. These are safe candidates for deletion - but verify before bulk-deleting, as some attachments may be referenced from other pages or spaces.

## Best Practices

1. **Run a quarterly audit** using the Attachment Center to identify and remove stale files
2. **Label important attachments** (e.g., \`approved\`, \`final\`, \`archived\`) to distinguish them from drafts
3. **Set a storage threshold** to get early warning before Confluence storage limits are reached
4. **Review orphaned files** before deleting - check if they are referenced from external sources
5. **Train page authors** to delete old attachment versions when uploading new versions

## Important Note

Deletions via the Attachment Center are permanent. Confluence does not have a recycle bin for attachments. Always verify the file list before confirming a bulk delete.`,
        },
        {
          slug: "attachment-center-dashboard",
          title: "Attachment Center Dashboard",
          content: `# Attachment Center Dashboard

<img src="/images/content-formatting-assets/attachment-center-dashboard.png" alt="Attachment Center Dashboard screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What You See on the Dashboard

The Attachment Center Dashboard is the main overview screen that gives Confluence space administrators an at-a-glance picture of their space's attachment health.

## Dashboard Metrics

| **Metric** | Description |
|---|---|
| **Total Attachments** | Count of all attachments uploaded to the space |
| **Total Storage Used** | Aggregate size of all attachments in MB/GB |
| **Orphaned Attachments** | Attachments not referenced in any page content |
| **Large Files** | Attachments exceeding the configured size threshold |
| **Attachments This Month** | Number of new uploads in the current calendar month |

## Storage Health Indicator

The storage health bar at the top of the dashboard provides a visual representation:

- **Green**: Storage usage is below 75% of the configured warning threshold
- **Yellow**: Storage usage is between 75% and 100% of the warning threshold
- **Red**: Storage usage has exceeded the warning threshold - action recommended

> To configure the warning threshold, go to **Space Settings → Content Formatting Macros → Attachment Center → Storage warning threshold**.

## Quick Action Cards

The dashboard surface displays three quick action cards:

1. **Review Orphaned Files** - Opens the attachment list pre-filtered to show only orphaned attachments
2. **Find Large Files** - Opens the attachment list sorted by file size (largest first)
3. **Recent Uploads** - Shows attachments uploaded in the last 7 days

## Attachment Activity Chart

The activity chart plots attachment uploads over the selected time period (7 days, 30 days, or 90 days). Use it to:

- Identify spikes in upload activity
- Spot the dates when large batches of files were uploaded
- Understand storage growth trends over time

## Navigating from the Dashboard

- Click any **metric card** to go to the attachment list filtered by that metric
- Click **View All Attachments** to see the unfiltered list
- Click **Audit Log** to switch to the audit trail view
- Use the **Space Picker** (top right) to switch between spaces if you have admin access to multiple spaces`,
        },
        {
          slug: "attachment-bulk-actions",
          title: "Bulk Actions",
          content: `# Bulk Actions

<img src="/images/content-formatting-assets/attachment-bulk-actions.png" alt="Bulk Actions screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Bulk Actions?

Bulk Actions let you select multiple attachments and apply an operation to all of them at once - saving time compared to performing the same action individually on each file.

## Selecting Attachments

### Select Individual Files
Click the checkbox at the left edge of any attachment row to select it. Selected rows are highlighted.

### Select All on Page
Click the checkbox in the table header row to select all attachments currently visible on the page. This selects only the current page of results (not all pages).

### Select Across Pages
To work with attachments across multiple pages of results:
1. Apply filters to narrow results to the specific set you need
2. Use **Select All** to select the current page
3. An option to **Select all {N} results** appears - click it to extend the selection to all filtered results

## Available Bulk Operations

| **Operation** | What It Does | Reversible? |
|---|---|---|
| **Add Label** | Tags all selected attachments with one or more Confluence labels | Yes - remove label to undo |
| **Remove Label** | Removes a specific label from all selected attachments | Yes - re-add the label |
| **Delete** | Permanently deletes all selected attachments from Confluence | **No - permanent** |

## How to Delete Attachments in Bulk

1. Filter the attachment list to narrow down to the files you want to remove
2. Select the attachments using the checkboxes
3. Click the **Bulk Actions** button above the attachment table
4. Select **Delete** from the dropdown
5. A confirmation dialog appears showing the count of files to be deleted and their total size
6. Click **View Files** to expand and review each file name before confirming
7. Type **DELETE** in the confirmation field
8. Click **Confirm Delete**

> **Warning:** Attachment deletion is permanent. Confluence does not have a recycle bin. Deleted attachments cannot be recovered. Always verify the selection before confirming.

## How to Bulk Label Attachments

1. Select the attachments you want to label
2. Click **Bulk Actions → Add Label**
3. Type or search for a label in the label picker (e.g., \`approved\`, \`archived\`, \`review\`)
4. Click **Apply**
5. All selected attachments receive the label immediately

## Safety Recommendations

- **Always filter first** before selecting all - avoid accidentally selecting attachments you want to keep
- **Preview the selection** by expanding the confirmation dialog before deleting
- **Use labels** to mark attachments for review before deleting - this gives others a chance to flag files that should not be deleted
- **Work in batches** when deleting large numbers of files - 50–100 at a time is a manageable batch size for verifying results`,
        },
        {
          slug: "attachment-filters-sorting",
          title: "Filters & Sorting",
          content: `# Filters & Sorting

<img src="/images/content-formatting-assets/attachment-filters-sorting.png" alt="Filters & Sorting screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## Overview

The Filters & Sorting panel lets you narrow the attachment list to exactly the files you are looking for. You can filter by file type, upload date, uploader, file size, page, and link status - and combine any number of these filters together.

## Available Filters

| **Filter** | Options | Use Case |
|---|---|---|
| **File Type** | PDF, Image (PNG/JPG/GIF), Spreadsheet (XLSX/CSV), Document (DOCX), Video, Other | Find all PDFs in a space for a compliance review |
| **Upload Date** | Custom date range picker | Identify attachments uploaded during a specific project or sprint |
| **Uploaded By** | Confluence user picker | Find all files uploaded by a specific user |
| **Page** | Page title search / picker | See all attachments on a specific page |
| **File Size** | Greater than / Less than (KB or MB input) | Find files over 10 MB to identify large storage consumers |
| **Link Status** | Linked / Orphaned / All | Show only orphaned attachments not referenced in any page content |
| **Label** | Label picker | Find attachments with a specific label (e.g., \`approved\`) |

## Applying Filters

1. Click the **Filters** button above the attachment table
2. The filter panel expands below the table header
3. Select your desired filter values - the table updates live as you make each selection
4. Active filters appear as chips above the table; click the **×** on a chip to remove that filter
5. Click **Clear All** to remove all active filters at once

## Combining Filters

Filters work with AND logic - all active filters must match for an attachment to appear in results. Examples:

- **File Type = PDF** AND **Upload Date = Jan–Mar 2024** → only PDFs uploaded in Q1 2024
- **Link Status = Orphaned** AND **File Size > 5 MB** → large orphaned files (prime delete candidates)
- **Uploaded By = [user]** AND **Label = draft** → draft files from a specific team member

## Sorting

Click any column header to sort the attachment list by that column:

| **Column** | Sort Options |
|---|---|
| **File Name** | A→Z or Z→A alphabetically |
| **Page** | A→Z by page title |
| **Uploaded By** | A→Z by user display name |
| **Upload Date** | Newest first or Oldest first |
| **File Size** | Largest first or Smallest first |

The current sort column is indicated by an up/down arrow in the column header. Click the header again to reverse the sort direction.

## Saving Filter Presets

Frequently used filter combinations can be saved as presets for faster access in future sessions:

1. Apply the filters you want to save
2. Click **Save as Preset** (below the active filter chips)
3. Give the preset a name (e.g., "Large Orphaned PDFs")
4. Click **Save**

Saved presets appear in the **Presets** dropdown at the top of the filter panel. Presets are saved per-user and per-space.`,
        },
        {
          slug: "attachment-audit-logs",
          title: "Audit Logs",
          content: `# Audit Logs

<img src="/images/content-formatting-assets/attachment-audit-logs.png" alt="Audit Logs screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Audit Logs?

The Audit Logs section records all attachment-related actions performed via the Attachment Management Center. Use it to track who deleted files, when labels were applied, and which bulk operations have been run - and by whom.

## What Gets Logged

| **Action** | Logged Details |
|---|---|
| **Attachment Deleted** | File name, page, file size, deleted by, timestamp |
| **Bulk Delete** | Count of files, total size, deleted by, timestamp, list of file names |
| **Label Added** | File name, label applied, added by, timestamp |
| **Label Removed** | File name, label removed, removed by, timestamp |
| **Bulk Label** | Count of files affected, label applied, performed by, timestamp |
| **Settings Changed** | Setting name, old value, new value, changed by, timestamp |

## Accessing Audit Logs

1. Go to **Space Settings → Apps → Attachment Management Center**
2. Click the **Audit Log** tab at the top of the Attachment Center panel
3. The log loads showing the most recent 100 events, newest first

## Filtering the Audit Log

| **Filter** | Purpose |
|---|---|
| **Date Range** | View events within a specific date window |
| **Action Type** | Show only Deletes, Label changes, or Settings changes |
| **Performed By** | Filter to events from a specific Confluence user |
| **File Name** | Search for events related to a specific file name |

## Reading a Log Entry

Each log entry shows:

- **Timestamp**: Date and time of the action (Confluence site timezone)
- **Action**: What was done (e.g., "Bulk Delete", "Label Added")
- **Performed By**: The Confluence user who triggered the action
- **Details**: Summary of what was affected (e.g., "12 files, 45.3 MB total")
- **Expand icon**: Click to see the full list of affected files for bulk operations

## Exporting Audit Logs

1. Apply date range and any other filters to scope the data
2. Click **Export** (top right of the Audit Log tab)
3. Choose **CSV** for spreadsheet analysis or **PDF** for a formatted report
4. The file downloads automatically

> **Tip:** Export monthly audit logs as part of a regular compliance or governance review process.

## Retention Policy

Audit log entries are retained for **90 days** by default. Entries older than 90 days are automatically purged. Contact your Confluence site administrator if you need to extend the retention period for compliance requirements.

## Common Audit Use Cases

| **Scenario** | How to Use the Audit Log |
|---|---|
| **Someone deleted important files** | Filter by Action = Deleted, find the event, expand to see file names |
| **Verify a cleanup was completed** | Filter by date range of the cleanup, confirm bulk delete events appear |
| **Find out who bulk-labeled files** | Filter by Action = Label, identify the bulk label events |
| **Investigate unexpected storage drop** | Filter by Action = Deleted, sort by date to find large delete events |
| **Generate a compliance report** | Export filtered logs to CSV and attach to your audit documentation |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 6. PAGE TEMPLATES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "page-templates",
      title: "Page Templates",
      articles: [
        {
          slug: "page-templates",
          title: "Page Templates",
          content: `# Page Templates

<img src="/images/content-formatting-assets/page-templates.png" alt="Page Templates screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Templates Are Included?

Content Formatting Macros includes four ready-to-use Confluence page templates that demonstrate the app's capabilities in realistic, production-ready page designs.

---

## Template 1 - Team Hub

A team space home page with a welcome header, vision and mission cards, a photo-based member directory, resource cards, and helpful links. Also creates two child pages: Meeting Notes and Ways of Working.

### Page Structure

| **Section** | Content |
|---|---|
| **Welcome Header** | Styled title with team name and welcome message |
| **Team Culture** | Vision and Mission background cards side by side |
| **Get in Touch** | Button links to Slack channel, team email, support desk, and product wiki |
| **Meet the Team** | Department label cards + person photo cards in a 4-column grid (Engineering, Marketing, Product) |
| **Team Activity** | Placeholder section for Jira macros (issues, charts, or timeline) |
| **Recently Updated** | Placeholder for Confluence Recently Updated macro |
| **Team Resources** | 3 Advanced Cards linking to Onboarding Resources, Ways of Working, and Meeting Notes |
| **Helpful Links** | Buttons in 3 columns linking to tools, repos, and dashboards |

### Macros Used
- Background (Vision and Mission cards)
- Buttons (Get in Touch links, Helpful Links columns)
- Advanced Cards (4-column member directory, 3-column resource cards)

### Child Pages Created
| **Child Page** | Contents |
|---|---|
| **Meeting Notes** | Sprint planning table, committed tickets table, decisions and action items table |
| **Ways of Working** | Team ritual cards (Standup, Sprint Planning, Retro), team norms list, definition of done |

---

## Template 2 - Company Hub

A company-wide intranet landing page with a rotating banner, essentials panel, department directory, HR resources, and other resource links.

### Page Structure

| **Section** | Content |
|---|---|
| **Rotating Banner** | Interactive Banner with 3 slides (Welcome, Connect & Grow, Knowledge Hub) |
| **Essentials** | Quick-access buttons: Single Sign-On, Expenses, HR tool |
| **Who We Are** | Company description paragraph |
| **Recent Blogs** | Placeholder for a Confluence Blog Posts stream |
| **Team in Action** | Image background section with company culture description |
| **Connect on Socials** | Buttons for Twitter, LinkedIn, and YouTube |
| **Departments Grid** | 10 Advanced Cards in a 5-column grid: Finance, Marketing, People, GTM, Legal, Education, Product, Engineering, Sales, UX/UI |
| **HR Help** | Image background with HR team description and HR Hub button |
| **HR FAQ** | 3 collapsible expand sections: New Employees, Referral Program, Career Development |
| **Other Resources** | 3-column layout: IT Support, Together Resources, Tools & Apps |

### Macros Used
- Interactive Banner (3-slide rotating carousel)
- Background (color and image variants for multiple sections)
- Buttons (vertical and horizontal, for Essentials and social links)
- Advanced Cards (10-card department grid, 5 columns)
- Advanced Expand (HR FAQ collapsible items)

---

## Template 3 - Monthly Project Report

A single-page monthly report covering project summary, KPI targets, key initiatives (tabbed), upcoming focus areas, and team kudos.

### Page Structure

| **Section** | Content |
|---|---|
| **Report Banner** | Interactive Banner with report title and monthly summary |
| **Project Summary** | Table with project name, status date, PM, stakeholders, and links - alongside a Table of Contents |
| **Target Check** | 3 Background cards, each showing a KPI's current value vs. target and insights |
| **Key Initiatives** | Custom Tabs - one tab per initiative, each with a metrics table, insights, and project links |
| **Next Up** | 3 Advanced Cards for upcoming focus areas |
| **Kudos** | Table recognizing team members with appreciation notes |

### Macros Used
- Interactive Banner
- Background (Target Check KPI cards)
- Tooltip (inline metric definitions, e.g. MAU)
- Custom Tabs (one tab per initiative in the Key Initiatives section)
- Advanced Cards (Next Up section, 3 cards)

---

## Template 4 - User Guide

A structured product or feature documentation page showcasing the Buttons macro in detail - styles, shapes, sizes, icon positions, hover effects, and font options - alongside Getting Started cards and a quick links footer.

### Page Structure

| **Section** | Content |
|---|---|
| **Hero** | Full-width gradient Background with Custom Fonts title (macro name, subtitle, tagline) |
| **Introduction** | 2-column layout - text description alongside a screenshot image background |
| **Examples** | Buttons macro rows demonstrating all style variants, shapes, sizes, icon positions, hover effects, and font families |
| **Getting Started** | Advanced Cards inside a Background - How To Insert, Templates, Configuration, How To Edit/Remove |
| **Quick Links** | Dark full-width Background with horizontal Buttons rows for site navigation |

### Macros Used
- Background (hero gradient, screenshot columns, Getting Started wrapper, footer)
- Custom Fonts (hero title styling)
- Buttons (all examples rows, quick links footer)
- Advanced Cards (Getting Started section, 4 cards in 1-column layout)

---

## How to Access Templates

1. In Confluence, click the **Settings** (gear icon) → look for **Page Templates | Clovity** under the Apps section in the left sidebar
2. The template gallery opens - use the category filter pills (**All**, **HR**, **Project**, **Documentation**) to browse
3. Click **Preview** on any card to see a full screenshot of the template
4. Click **Use Template** on the card (or inside the preview modal)
5. In the dialog that opens:
   - Select a **Space** (required)
   - Optionally choose a **Parent Page** to nest the new page under
   - Optionally add or remove **Labels** (pre-filled from the template)
   - Enter a **Page Title** (pre-filled with the template name)
6. Click **Create Page** - the app creates the page and any child pages automatically via the Confluence API, with all macros pre-configured
7. Click **Open Page** in the success dialog to go directly to the new page

---

## Troubleshooting Templates

| **Issue** | Fix |
|---|---|
| **Cannot find Page Templates in Confluence Settings** | Confirm the app is installed and active - go to **Settings** → **Manage apps** and verify Content Formatting Macros shows "Active" |
| **Template gallery is blank or won't load** | Refresh the page; if it persists, re-install the app or contact support |
| **Macros showing placeholder content** | Click the macro's edit (pencil) icon and configure it with your real data, then publish |
| **Team Hub child pages not created** | Child pages (Meeting Notes, Ways of Working) are created automatically by the app via API - check that you have page-create permissions in the selected space |
| **Banner images not loading** | The images are bundled with the app - confirm the app version is up to date on the Marketplace |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 7. PRIVACY & ACCESS NOTES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "privacy-access",
      title: "Privacy & Access Notes",
      articles: [
        {
          slug: "privacy-access",
          title: "Privacy & Access Notes",
          content: `
## How Content Formatting Macros Handles Data

### Principle 1 - Content Stays in Confluence

Content Formatting Macros does not transmit page content, attachment data, or user information to external servers. All macro rendering is performed within the Atlassian Confluence Cloud environment using Atlassian's Forge or Connect app runtime.

The only external communication is:
- License verification with the Atlassian Marketplace
- Optional background image URLs you configure in the Background or Banner macros (the browser fetches these directly)

### Principle 2 - Visibility Macros Are UI Controls, Not Security Boundaries

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

### Principle 3 - Attachment Deletion Is Permanent

The Attachment Management Center's delete function permanently removes files from Confluence. There is no recycle bin or undo. Always confirm the file list carefully before executing a bulk delete.

## User Data in Macros

The User Profile macro reads user data from Confluence's user directory. Only data that users have voluntarily entered in their Confluence profile is displayed. The macro does not access email systems, HR systems, or external directories.

## Questions About Data Processing

For questions about how Clovity processes data as the app vendor, contact **developers@clovity.com** or review the app's privacy policy on the Atlassian Marketplace listing.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 9. RELEASE NOTES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "release-notes",
      title: "Release Notes",
      articles: [
        {
          slug: "latest-release",
          title: "Latest Release",
          content: `

# Version 6.2.0 - Latest Release

## What's New

### Minor Version Update

Version 6.2.0 includes a minor release update for Content Formatting, Navigation, and Visibility for Confluence. This release focuses on improving app stability, compatibility, and overall user experience across existing macros and page formatting features.

### Platform Improvements

* Improved performance for macro rendering across Confluence pages
* Enhanced compatibility with Atlassian Cloud hosting
* Minor fixes and refinements across existing content formatting macros
* Improved reliability for published and edited Confluence pages
* Continued support for Cloud-based app deployment

## Available Features

### Content Formatting Macros

The app provides a growing set of macros to help teams create structured, interactive, and visually enhanced Confluence pages.

Key supported macro categories include:

* Tabs and content mapping
* Conditional content visibility
* Attachment management
* Alerts and callouts
* Footnotes and summaries
* Tooltips and popups
* Buttons and background styling
* Advanced expand sections
* Interactive banners
* Advanced cards
* Dividers and titles
* Countdown and status displays
* User profile and numbered heading layouts
* JSON viewer
* News sections
* Page tree navigation
* Activity stream
* Numbered lists
* Forms
* Markdown rendering
* HTML rendering
* Templates

## Release Information

* App Version: 6.2.0
* Version Status: Public
* Hosting: Cloud
* Release Date: 2026-04-20
* Release Summary: Minor version update`,
        },
        {
          slug: "cloud-edition",
          title: "Cloud Edition",
          content: `

# Cloud Edition Updates

This app is a Confluence Cloud-exclusive product built for Atlassian Marketplace customers. All releases listed below apply to the Cloud edition only.

## Version 6.2.0

* Minor version update
* Improved stability across existing macros
* Enhanced compatibility with Confluence Cloud
* General performance and maintenance improvements

## Version 6.1.0

* Minor version update
* Continued improvements to app reliability
* Small refinements across content formatting and navigation features
* Published as a public Cloud release

## Version 6.0.0

* Payment model changed
* Marketplace payment and licensing configuration updated
* Continued support for existing Cloud features
* Public Cloud release

## Version 4.0.0

* Required scopes changed
* Added and refined advanced content and rendering macros
* Introduced support for:
  * JSON Viewer
  * News
  * Page Tree
  * Activity Stream
  * Numbered List
  * Form Macro
  * Markdown Render
  * HTML Render
  * Templates

## Version 3.0.0

* Payment model and required scopes changed
* Added advanced visual and interactive page components
* Introduced support for:
  * Advanced Expand
  * Interactive Banner
  * Advanced Card
  * Divider
  * Title
  * Countdown
  * Status
  * User Profile
  * Number Heading

## Version 2.1.0

* Minor version update
* Private Cloud release
* Internal improvements and refinements before the next public release

## Version 2.0.0

* Initial public Cloud release
* Added foundational tab, visibility, and attachment control features
* Introduced support for:
  * Tab Label Content Mapper
  * Tab Parent Content Mapper
  * Tab Confluence Page Mapper
  * Create Custom Tabs
  * Conditional Hide
  * Conditional Show
  * Attachment Control Center

## Platform Notes

| **Capability** | Detail |
|---|---|
| **Hosting** | Cloud |
| **Deployment** | Updates are delivered through Atlassian Marketplace |
| **Compatibility** | Built for Confluence Cloud |
| **Version Status** | Public and private versions are managed through Marketplace releases |
| **Admin Action** | Updates are applied through Atlassian Marketplace app versioning |`,
        },
        {
          slug: "version-history",
          title: "Version History",
          content: `
# Version History / Changelog

## v6.2.0 - Current

Minor version update with stability, compatibility, and maintenance improvements for the Cloud edition.

## v6.1.0

Minor version update with continued refinements across the app experience and existing Confluence macros.

## v6.0.0

Payment model changed. Marketplace payment and licensing configuration updated for the Cloud app.

## v4.0.0

Added content rendering, navigation, and structured page macros, including JSON Viewer, News, Page Tree, Activity Stream, Numbered List, Form Macro, Markdown Render, HTML Render, and Templates.

## v3.0.0

Added advanced visual and interactive formatting macros, including Advanced Expand, Interactive Banner, Advanced Card, Divider, Title, Countdown, Status, User Profile, and Number Heading.

## v2.1.0

Private minor version update with internal improvements and refinements.

## v2.0.0

Initial public release with tabbed content, conditional visibility, and attachment management features. Included Tab Label Content Mapper, Tab Parent Content Mapper, Tab Confluence Page Mapper, Create Custom Tabs, Conditional Hide, Conditional Show, and Attachment Control Center.

---

## How Updates Are Delivered

Updates are delivered through the Atlassian Marketplace for Confluence Cloud. No manual package installation is required.

To check your current version:

1. Go to Confluence Settings → Apps → Manage apps
2. Find "Content Formatting, Navigation, and Visibility for Confluence"
3. Open the app details panel
4. Review the installed app version`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 10. INTEGRATIONS & MIGRATION
    // ═══════════════════════════════════════════════════════════════
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
## Native Confluence Integration

Content Formatting Macros is built as a native Confluence Cloud app and integrates deeply with Confluence's built-in data model. It does not require any external service connections, API keys, or third-party accounts.

---

## Confluence Features Used by Each Macro

### Page Hierarchy (Child Pages)

**Used by**: Tab Parent Content Mapper

The Tab Parent Content Mapper reads the Confluence page hierarchy to populate tabs from child pages. It uses the Confluence Content API to:
- Retrieve all child pages of a specified parent page
- Read each child page's title (used as the tab label)
- Fetch and render each child page's body content inside the tab
- Respect the page tree sort order configured in Confluence

**Confluence permission model**: If a viewer does not have read permission on a child page, that tab is not rendered for them. The mapper respects all standard Confluence page restrictions.

---

### Labels

**Used by**: Tab Label Content Mapper

The Tab Label Content Mapper looks up all pages tagged with the label name you entered in the macro configuration. Each matching page becomes its own tab - the tab title is the page title and the tab content is the page body. It integrates with:
- Confluence's label system (labels applied to pages via the page footer or editor)
- Space-scoped filtering (restricts results to a specific space or all accessible spaces)

**Confluence permission model**: Only pages the current viewer has read permission to access are returned - pages they cannot see are silently excluded from the tab list.

---

### Spaces

**Used by**: Tab Label Content Mapper, Tab Page Mapper, Attachment Management Center

Macros can be scoped to specific Confluence spaces. The Attachment Management Center operates on a per-space basis and requires Space Admin access to enable.

---

### Users & Groups (Conditional Visibility)

**Used by**: Conditional Show, Conditional Hide

The conditional visibility macros integrate with Confluence's user and group system:

| **Data Used** | Source | How Used |
|---|---|---|
| **Confluence user identity** | Confluence session | Match against individually selected users |
| **Confluence group membership** | Confluence Groups API | Match against selected groups |

**What the app does NOT do**:
- The app does not sync, create, or modify Confluence groups
- The app does not access Atlassian Access, external identity providers, or SSO directory data
- Group membership is read at render time from Confluence's built-in groups - no caching between page loads

**Confluence permission model**: Group names in the macro configuration must exactly match existing Confluence groups. The app reads group membership via Confluence's standard permissions model.

---

### User Profiles

**Used by**: User Profile Macro

The User Profile macro reads Confluence user profile data:

| **Field** | Source |
|---|---|
| **Display name** | Confluence user profile |
| **Avatar / profile photo** | Confluence user profile |
| **Job title** | Confluence user profile (optional field) |
| **Department** | Confluence user profile (optional field) |
| **Location** | Confluence user profile (optional field) |
| **Email address** | Confluence user profile (shown only if configured to display) |

Profile fields are populated by each user in their own **Confluence profile settings**. Fields not filled in by the user will be blank in the macro display. The app does not pull data from external HR systems or directories.

---

### Attachments

**Used by**: Attachment Management Center

The Attachment Management Center integrates with Confluence's attachment storage system:

| **Capability** | Confluence API Used |
|---|---|
| **List all attachments in a space** | Confluence Content API (attachments endpoint) |
| **Filter by file type, date, uploader** | Client-side filtering of API results |
| **Apply labels to attachments** | Confluence Labels API |
| **Delete attachments** | Confluence Attachments API (delete) |
| **Detect orphaned files** | Compare attachment list against page content references |

**Permissions required**: Space Admin role to enable the Attachment Center per-space; standard Confluence attachment permissions apply to all read and delete operations.

---

## Confluence Permission Model Integration

Content Formatting Macros fully respects Confluence's permission model at every layer:

| **Permission Layer** | How the App Honors It |
|---|---|
| **Page restrictions** | Tab mapper macros only show tabs for pages the viewer can read |
| **Space permissions** | Attachment Center requires Space Admin role; conditional macros read space roles from Confluence |
| **Site administration** | App installation requires Confluence site admin role |
| **Group membership** | Conditional Show/Hide reads group membership from Confluence at render time |
| **Anonymous access** | Conditional visibility evaluates login status correctly for anonymous (not-logged-in) viewers |

---

## What Content Formatting Macros Does NOT Integrate With

| **System** | Status |
|---|---|
| **Jira (issues, boards, sprints)** | No direct integration - use Confluence's built-in Jira macros for Jira data |
| **External databases** | No |
| **External identity providers (Okta, Azure AD)** | No - reads Confluence group membership only |
| **Confluence Data Center** | Not supported |
| **Confluence Server** | Not supported |
| **Third-party storage (S3, GDrive)** | No |`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
## Migrating from Other Tab or Formatting Apps to Content Formatting Macros

If your Confluence space currently uses another tab or formatting app (e.g., Comala, Scroll Viewport, Brikit Theme Press, or other tab macro apps), this guide covers what to expect when switching to Content Formatting Macros.

---

## Before You Migrate

### Step 1 - Audit Your Current Usage

Before installing Content Formatting Macros, take stock of what you're replacing:

1. Identify all pages that use the old tab/formatting macros
2. Note the tab structures in use - how many tabs, what content type, mapper vs. manual
3. List any conditional visibility or CSS customization features you rely on
4. Check if any page templates reference the old macros

### Step 2 - Install Content Formatting Macros First

Install Content Formatting Macros **before** uninstalling your old app. This allows you to:
- Test the new macros side by side on a copy of a key page
- Validate rendering and feature parity before committing
- Train page authors on the new workflow before removing the familiar interface

### Step 3 - Map Old Macros to New Macros

| **Old Pattern** | Content Formatting Equivalent |
|---|---|
| **Manual tab macro (other app)** | Custom Tabs |
| **Dynamic tabs from child pages** | Tab Parent Content Mapper |
| **Tabs by label/tag** | Tab Label Content Mapper |
| **Hand-picked page list as tabs** | Tab Page Mapper |
| **Show/hide section (role-based)** | Conditional Show / Conditional Hide |
| **Custom CSS background** | Background Macro |
| **Styled button link** | Buttons Macro |
| **Styled expand/collapse** | Advanced Expand Macro |

---

## Migration Process (Per Page)

### For Pages with Manual Tabs

1. Open the page in edit mode
2. Note the content in each tab of the old macro
3. Type "/" → search **Create Custom Tabs** → insert it directly on the page below the old tab macro
4. Add a tab for each section and copy the content from each old tab into the corresponding new tab
5. Once the new tabs are verified, delete the old tab macro
6. Publish

### For Pages with Dynamic Tabs (Child-Page Based)

If your old app populated tabs from child pages, the **Tab Parent Content Mapper** is the direct equivalent:

1. Type "/" → search **Tab Parent Content Mapper** → insert it directly on the page
2. Configure the Parent Page in the mapper config panel
3. Compare the tab output against the old macro's output
4. If the output matches, delete the old tab macro
5. Publish

### For Pages with Conditional Visibility

1. Identify the condition used in the old macro (group name, role, or login status)
2. Insert the equivalent **Conditional Show** or **Conditional Hide** macro
3. Configure with the same condition
4. Test with users in the target group
5. Delete the old macro and publish

---

## What to Expect When Uninstalling the Old App

When you uninstall your previous tab or formatting app:

| **What Happens** | Details |
|---|---|
| **Old macros stop rendering** | Macro placeholders appear in their place - \`{old-macro-name:...}\` - visible in edit mode; in view mode they typically show as empty space or a "Macro not found" message |
| **Page content is NOT deleted** | All page text, images, and Confluence content remain intact - only the macro rendering is affected |
| **Macro storage is retained** | The macro parameter data is stored in the page's storage format and remains in the page even after uninstall - it's just not rendered |
| **Re-install restores rendering** | Re-installing the old app restores rendering of the old macros |

---

## Macro Content Persistence on Pages

Confluence stores macro parameters (the macro's configuration settings) as part of the page's storage-format XML. This means:

- When an app is uninstalled, the macro parameters remain stored in the page - they are not deleted
- The macro body content (content you typed inside a macro) is also preserved
- If you re-install the old app, all macros return to their fully rendered state

**Important implication for migration**: If you migrate pages to Content Formatting Macros and then delete the old macro instances, the old macro data is permanently removed from the page. This is typically the desired outcome, but make sure you have verified the migration before deleting.

---

## Rollback Plan

If you need to roll back after starting a migration:

1. Do NOT uninstall Content Formatting Macros - uninstall would leave its macros unrendered
2. Re-install the old app if you uninstalled it - this restores old macro rendering
3. Pages where you have already replaced old macros with Content Formatting macros cannot be automatically reverted - those pages must be manually updated or restored from Confluence's page history

**Recommendation**: Use Confluence's **Page History** feature before migrating important pages. This gives you a point-in-time restore option if a migration goes wrong.

---

## Getting Help with Migration

If you are migrating a large Confluence space (100+ pages with tab macros) and need assistance, contact the Clovity support team:

- **Email**: developers@clovity.com
- **Subject**: Migration Assistance: [your Confluence site URL]

Include the number of pages involved, the app you are migrating from, and your timeline. The support team can provide migration guidance and tooling recommendations.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 11. USE CASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "use-cases",
      title: "Use Cases",
      articles: [
        {
          slug: "common-use-cases",
          title: "Common Use Cases",
          content: `
Real-world scenarios where Content Formatting Macros transforms how teams use Confluence.

---

## Use Case 1 - IT Runbook with Tabs

### Scenario
An IT operations team maintains runbooks for 20+ services in Confluence. Each runbook has the same sections (Overview, Procedures, Escalation, Reference), but they're all formatted differently because different engineers wrote them. Finding the right section in a long runbook requires too much scrolling.

### Solution
Standardize every runbook on a shared template using tab macros:

- **Tab 1: Overview** - Background macro (light blue), service description, Alert macro (current status), Buttons macro (links to monitoring dashboard, Jira board)
- **Tab 2: Procedures** - Numbered steps, Background macro (yellow) for critical sections, Alert macros for warnings
- **Tab 3: Escalation** - User Profile macros for L1/L2/L3 contacts, Conditional Show (admin-only internal notes)
- **Tab 4: Reference** - Advanced Expand macros for collapsible reference tables, JSON Viewer for API response examples

### Macros Used
Create Custom Tabs, Background, Alert, Buttons, User Profile, Conditional Show, Advanced Expand, JSON Viewer, Status Macro

### Outcome
- Runbook sections are instantly accessible via tabs - no scrolling through irrelevant content
- All runbooks follow the same structure regardless of who wrote them
- Escalation contacts are always visible in one place
- Admin notes are hidden from non-admin readers viewing the runbook

---

## Use Case 2 - HR Policy Hub with Conditional Visibility

### Scenario
An HR team maintains a Policy Hub in Confluence. Some policies are for all employees; others are manager-only (compensation bands, performance improvement process). Currently, managers are emailed the manager-only policies separately, creating version control problems.

### Solution
Build a single Policy Hub page using conditional visibility:

- All-employee policies: published normally in tabs (by policy category)
- Manager-only sections: wrapped in **Conditional Show** macro, condition: group = \`hr-managers\`
- Sensitive data tables (salary bands): wrapped in **Conditional Show** macro, condition: group = \`hr-leadership\`
- An **Alert** (Info type) at the top explains that additional content is visible based on role

### Macros Used
Tab Label Content Mapper (policies tagged with labels by category), Conditional Show, Alert

### Outcome
- One page, one source of truth - no more emailing separate documents
- Managers see exactly what they need without a separate page
- Leadership-only data is hidden from managers
- Version control is solved - updating one page updates for all audiences simultaneously
- Confluence Page Restrictions still protect the page from non-HR access at the page level

---

## Use Case 3 - Product Release Notes with Status and Progress

### Scenario
A product team publishes release notes in Confluence for each sprint. Stakeholders want to see what's in the current release at a glance - what's done, what's in testing, and what's been pushed to the next sprint.

### Solution
Create a release notes page template with status indicators:

- **Interactive Banner** at the top: "Sprint 47 Release Notes - Shipping November 15"
- **Countdown Timer** in the banner subtitle: "Shipping in X days"
- A **Status Macro** per feature row in a table (Done, In Testing, Pushed)
- **Progress Bar** showing overall sprint completion percentage
- **Create Custom Tabs** with tabs: This Sprint | Next Sprint | Shipped | Known Issues
- **Alert** (Warning) for any known blocking issues

### Macros Used
Interactive Banner, Countdown Timer, Status Macro, Progress Bar, Create Custom Tabs, Alert

### Outcome
- Stakeholders get a visual, at-a-glance view of release status
- The countdown builds anticipation and sets clear timeline expectations
- Status badges replace written "Done/In Progress" text with scannable visual cues
- The Known Issues tab is easy to find - no hunting through long pages

---

## Use Case 4 - Team Wiki with Dynamic Tabs

### Scenario
An engineering team has a Confluence space with dozens of sub-pages: team processes, architecture docs, runbooks, meeting notes. The team home page has manual links to these pages, but the list goes stale - people add pages but forget to update the home page links.

### Solution
Replace the manual link list with **Tab Parent Content Mapper** tabs:

- Organize child pages into logical parent pages (e.g., "Processes", "Architecture", "Runbooks")
- On the team home page, use **Tab Parent Content Mapper** for each major section
- Each mapper pulls tabs from the relevant parent's child pages
- Add a manual "Quick Links" section using **Buttons** macros for the most-visited pages
- Use **User Profile** macros in a sidebar card for the team's on-call and team lead contacts

### Macros Used
Tab Parent Content Mapper, Buttons, User Profile, Advanced Cards (for featured resources)

### Outcome
- The home page never goes stale - tabs auto-update when pages are added or renamed
- New team members can explore all team content from one organized hub
- On-call and team lead contacts are always visible and up to date
- Reducing manual home page maintenance saves time and eliminates broken links

---

## Use Case 5 - Event Countdown Announcement

### Scenario
A company's internal comms team wants to build excitement for an upcoming all-hands event. They want a Confluence page that functions as a living announcement - with a countdown, event details, registration link, and agenda - that updates automatically as the event approaches.

### Solution
Build a dedicated event page:

- **Interactive Banner**: Full-width banner with event branding, headline "Annual All-Hands 2025", and a "Register Now" Button
- **Countdown Timer** (Block style): Prominently placed below the banner, counting down to the event date
- **Create Custom Tabs** with tabs: Event Details | Agenda | Speakers | FAQ
- **Background macros**: Color-coded sections within the Agenda tab (morning sessions blue, afternoon sessions green)
- **Advanced Cards**: Speaker cards with photo, name, title, and session description
- **Conditional Show**: Admin-only tab with internal logistics notes (visible to event-organizers group only)

### Macros Used
Interactive Banner, Buttons, Countdown Timer, Create Custom Tabs, Background, Advanced Cards, Conditional Show

### Outcome
- The countdown creates real-time urgency visible every time someone views the page
- All event information is in one place with a clear tabbed structure
- Speaker cards make the agenda visually engaging
- Internal organizer notes are on the same page but invisible to general attendees`,
        },
        {
          slug: "use-case-templates",
          title: "Use Case Templates",
          content: `
Ready-to-use page templates demonstrating best-practice layouts with Content Formatting Macros. Each template includes a suggested macro layout, section structure, and guidance notes.

---

## Template 1 - Team Hub Page

A comprehensive team home page that serves as the single entry point for all team information.

### Page Structure

\`\`\`
[Interactive Banner]
  Headline: [Team Name] Hub
  Subtitle: "Your starting point for everything [Team Name]"
  Background: Team color gradient
  CTA Button 1: "View Jira Board" → Jira URL
  CTA Button 2: "Team Calendar" → Confluence calendar page

[Divider - gradient style]

[Background: light gray]
  ## Quick Links
  [Buttons row: Jira Board | Confluence Space | Slack Channel | On-Call Rotation]

[Create Custom Tabs - Pill style]
  Tab 1: Overview
    [Alert - Info: Team description/charter]
    [Advanced Cards: 3-column grid of key processes with links]

  Tab 2: Team Members
    [User Profile (Card style) × N - one per team member]
    [Conditional Show: hr-managers group]
      [Table of roles and direct report lines]

  Tab 3: Processes
    [Tab Parent Content Mapper → "Processes" child page]

  Tab 4: Resources
    [Tab Label Content Mapper → label: team-resources]

  Tab 5: Announcements
    [Interactive Banner: latest announcement]
    [Advanced Expand: previous announcements (collapsed)]

[Divider]

[Background: white]
  ## Current Status
  [Status Macro: Sprint Status] [Status Macro: Deployment Status] [Status Macro: On-Call Status]
  [Progress Bar: Sprint completion %]
  [Countdown Timer: next sprint end / next release]
\`\`\`

### Key Macros
Interactive Banner, Buttons, Tab Parent Content Mapper, Tab Label Content Mapper, Create Custom Tabs, User Profile, Conditional Show, Advanced Cards, Alert, Status Macro, Progress Bar, Countdown Timer, Divider, Background, Advanced Expand

### Guidance Notes
- Replace all placeholder content (team name, URLs, group names) before publishing
- Update the Status Macro values and Progress Bar value each sprint
- The Processes and Resources tabs auto-update as child pages and labeled pages are added - no ongoing maintenance needed
- Conditional Show section requires the \`hr-managers\` group to exist in Confluence Admin → Groups

---

## Template 2 - IT Runbook

A standardized runbook template for IT operations. Apply this structure to every service runbook for consistent, scannable documentation.

### Page Structure

\`\`\`
[Alert - Warning]
  "Last reviewed: [Date] | Owner: [Team Name] | Status: [Status Macro]"

[Create Custom Tabs - Box style, Top position]
  Tab 1: Overview
    [Background: light blue]
      ## Service Overview
      [Table: Service Name | Owner | Tier | SLA | Repo | Monitoring Dashboard]
    [Buttons: Open Jira Board | Open Monitoring | Open Runbook Repository]
    [Alert - Info: Service description and purpose]

  Tab 2: Procedures
    ## Standard Procedures
    [Advanced Expand: "Deployment" (collapsed by default)]
      [Numbered steps for deployment procedure]
      [Alert - Warning: Pre-deployment checklist]
    [Advanced Expand: "Rollback" (collapsed by default)]
      [Background - red tint]
        [Alert - Error: Use only when deployment fails]
      [Numbered steps for rollback]
    [Advanced Expand: "Incident Response" (collapsed by default)]
      [Numbered steps]

  Tab 3: Escalation
    [Background: light gray]
      ## On-Call Contacts
      [User Profile (Standard style) × 3: L1, L2, L3]
    [Table: Escalation conditions and who to contact]
    [Conditional Show: confluence-admins group]
      [Alert - Note: Internal SLA notes and escalation override conditions]

  Tab 4: Architecture
    [Background: white]
      ## Architecture Overview
      [Confluence image or draw.io diagram]
    [Advanced Expand: "Dependencies" (expanded by default)]
      [Table: Dependency | Version | Owner | Health status]
    [JSON Viewer: Sample API response or config]

  Tab 5: Reference
    [Advanced Expand: "Accepted Values" (collapsed)]
      [Table of configuration values]
    [Advanced Expand: "Common Errors" (collapsed)]
      [Table: Error code | Meaning | Resolution]
    [Advanced Expand: "Useful Commands" (collapsed)]
      [Code blocks with common CLI commands]
\`\`\`

### Key Macros
Alert, Create Custom Tabs, Background, Buttons, Advanced Expand, User Profile, Conditional Show, JSON Viewer, Status Macro

### Guidance Notes
- Set the Alert at the top to Warning type and update the review date when the runbook is reviewed
- The Escalation tab's Conditional Show should use the space admin or ops group - confirm the group name in Confluence Admin
- Keep the Procedures tab focused on step-by-step instructions; use the Reference tab for lookup tables
- Add a Status Macro badge to the top Alert to show current service health at a glance

---

## Template 3 - Project Status Page

A living project status page that gives stakeholders a real-time view of project health, timeline, and deliverables.

### Page Structure

\`\`\`
[Interactive Banner]
  Headline: [Project Name]
  Subtitle: [One-line project goal]
  Background: Project color
  CTA Button 1: "View Jira Project" → Jira project URL
  CTA Button 2: "Project Charter" → Charter page URL

[Background: light gray]
  ## At a Glance
  [Status Macro: Overall Status] [Status Macro: Budget Status] [Status Macro: Timeline Status] [Status Macro: Risk Status]
  [Progress Bar: % complete, label: "Project Completion"]
  [Countdown Timer: "Go-Live in" → target delivery date]

[Create Custom Tabs - Underline style]
  Tab 1: Summary
    [Alert - appropriate type based on current status]
    [Table: Milestone | Target Date | Status (Status Macro) | Owner]
    [Advanced Cards: 3 cards - Scope | Timeline | Budget summaries]

  Tab 2: Workstreams
    [Tab Parent Content Mapper → "Workstreams" child page]
    (Each workstream is a child page with its own status/progress)

  Tab 3: Risks & Issues
    [Table: Risk/Issue | Severity (Status Macro) | Owner | Mitigation | Status]
    [Alert - Warning: Any open blockers]

  Tab 4: Decisions Log
    [Table: Date | Decision | Made By | Rationale | Link]

  Tab 5: Stakeholders
    [User Profile (Standard style): Sponsor, PM, Tech Lead, Business Owner]
    [Conditional Show: project-leads group]
      [Table: Stakeholder engagement plan - internal use only]

  Tab 6: Documents
    [Advanced Cards: links to Charter, SOW, Architecture Doc, Test Plan, Retrospective]
\`\`\`

### Key Macros
Interactive Banner, Buttons, Background, Status Macro, Progress Bar, Countdown Timer, Alert, Tab Parent Content Mapper, Create Custom Tabs, Advanced Cards, User Profile, Conditional Show

### Guidance Notes
- Update the Status Macro badges and Progress Bar at the start of each status reporting cycle (weekly or sprint-by-sprint)
- The Countdown Timer creates urgency - update the target date if the go-live date changes
- The Workstreams tab auto-updates as workstream child pages are added - structure child pages consistently (use this same template for each workstream page)
- The Conditional Show on the Stakeholders tab uses a \`project-leads\` group - create this group in Confluence Admin and add the appropriate members`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 12. HELP & SUPPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "help-support",
          title: "Help & Support",
          content: `
Our Atlassian-certified support team is here to help with any questions about Content Formatting Macros. Work through the checklist below before opening a ticket - most issues are resolved without one.

## Before Contacting Support

- Confirm the app is installed and active: **Confluence Settings** → **Manage apps** → Content Formatting Macros shows **"Active"**
- Verify you are on Confluence Cloud - Data Center and Server are not supported
- Try the action in a different browser or incognito window to rule out cache issues
- Check whether the issue affects all users or only specific users or groups
- Review the relevant macro's documentation page in this help center for known limitations

## Contact Options

| **Channel** | Details |
|---|---|
| **Email** | developers@clovity.com |
| **Marketplace Support Portal** | Visit the app's Atlassian Marketplace listing → **Support** tab to open a ticket directly |
| **Atlassian Community** | Browse community discussions where other customers share tips and experiences |

## Business Hours

Monday – Friday, 24 hrs (PDT)

## Response Times

| **Priority** | Response Time |
|---|---|
| **Critical** (app completely non-functional) | Same business day |
| **Standard** questions & bug reports | 1–2 business days |
| **Feature requests** | Reviewed weekly by the product team |

## What to Include in Your Request

For the fastest resolution, always include:

1. **Confluence site URL** (e.g., \`yourcompany.atlassian.net\`)
2. **App version** - visible in **Confluence Settings** → **Manage apps** → Content Formatting Macros
3. **Affected macro name** (e.g., "Tab Parent Content Mapper", "Conditional Show")
4. **Steps to reproduce** the issue
5. **Expected behavior** vs. **what actually happened**
6. **Screenshot or screen recording** if the issue is visual
7. **Browser and OS** (e.g., Chrome 124 on Windows 11)
8. **Whether the issue affects all users or specific users/groups**

## Feature Requests

Email **developers@clovity.com** with subject: **Feature Request: [short description]**

All feature requests are reviewed by the product team. You will receive a confirmation that your request was received. You can also submit requests via the **Support** tab on the Atlassian Marketplace listing.`,
        },
        {
          slug: "faq",
          title: "FAQ",
          content: `
## Tab Macros

**Q: Can I link directly to a specific tab via URL?**
A: Not by default. The active tab state is not persisted in the URL. All page loads open the default tab. Deep-linking to tabs is on the feature roadmap.

**Q: Why don't some child pages appear as tabs in the Parent Content Mapper?**
A: The two most common reasons: (1) the viewer doesn't have read permission to that child page, or (2) the child page is in Draft status. Only published pages the viewer can access appear as tabs.

**Q: Can I nest a tab macro inside another tab macro?**
A: It is technically possible but not recommended. Nested tabs often cause layout issues. Consider using Advanced Expand macros inside tabs for secondary grouping instead.

**Q: The tab content shows "Page not found" - why?**
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

**Q: The Attachment Center doesn't appear in Space Settings - why?**
A: It must be enabled per-space. Go to **Space Settings** → **Content Formatting Macros** → **Attachment Center** and toggle it On.

**Q: Can I recover a deleted attachment?**
A: No. Deletions through the Attachment Center are permanent. Confluence does not have a recycle bin for attachments.

**Q: What does "Orphaned" mean in the Attachment Center?**
A: An orphaned attachment is a file uploaded to a page but not referenced in any content on that page. These are safe deletion candidates, but verify they are not referenced from other pages first.

---

## General

**Q: Does the app work with Confluence Data Center?**
A: No. Content Formatting Macros is a Confluence Cloud-only app.

**Q: Can I use the macros on mobile?**
A: Macros render in read-only mode on the Confluence mobile app. Interactive features (countdown timers, pop-up dialogs) may have limited functionality on mobile.

**Q: Will macros break if I uninstall the app?**
A: If the app is uninstalled, macros will no longer render - they will show as unresolved macro placeholders. Your page content is not deleted. Re-installing the app restores all macros.

**Q: Is there a free trial?**
A: Yes. A 30-day free trial is available via the Atlassian Marketplace. No credit card is required to start the trial.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 9. END USER LICENSE AGREEMENT (EULA)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "eula",
      title: "End User License Agreement (Eula)",
      articles: [
        {
          slug: "eula",
          title: "End User License Agreement",
          content: `
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

For questions about this Agreement, contact **developers@clovity.com**.

---

*Last updated: 2025*`,
        },
      ],
    },
  ],
};
