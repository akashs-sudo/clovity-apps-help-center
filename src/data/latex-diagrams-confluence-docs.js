export const latexDiagramsConfluenceDocs = {
  appSlug: "latex-diagrams-confluence",
  categories: [
    {
      id: "what-you-get",
      title: "What You Get",
      articles: [
        {
          slug: "what-you-get",
          title: "What You Get",
          content: `## Overview

This app adds macros that let you create technical visuals and formulas in Confluence Cloud with an editor that includes:

* Split view editing: Source (left) + Preview (right)
* Save and render: content renders directly on the page
* Hover actions (UML + LaTeX Block): edit, copy, zoom, pan, reset, fullscreen
* Inline math support: write text with embedded formulas (Inline macro)

## Macro Summary

### Diagrams

**Best for:** architecture, workflows, sequences, ER diagrams, timelines.

**Editor features**

* Split Source/Preview editor (live rendering)
* Samples dropdown for quick starting examples

**Viewer features (on the page)**

* Edit (opens modal)
* Copy source (copies Mermaid text)
* Zoom in/out + Reset
* Pan by dragging
* Fullscreen mode
* Clear error panel for invalid syntax

---

### LaTeX Block Equations

**Best for:** equations, aligned multi-line math, matrices, cases.

**Editor features**

* Split Source/Preview editor (live KaTeX rendering)
* Samples dropdown for quick starting examples

**Viewer features (on the page)**

* Edit (opens modal)
* Copy source (copies LaTeX)
* Zoom in/out + Reset
* Pan by dragging
* Fullscreen mode
* Clear error panel for invalid syntax

**Important input rule**

* This macro expects **raw LaTeX** (not wrapped with \`$$...$$\`).

---

### LaTeX Inline Equations

**Best for:** paragraphs with math in-line.

**Editor features**

* Split Source/Preview editor (live KaTeX rendering)
* Write normal text plus formulas

**Viewer features (on the page)**

* Minimal display for readability
* Hover edit icon to reopen editor
* Inline error highlighting if a specific formula fails`,
        },
      ],
    },
    {
      id: "quick-start",
      title: "Quick Start",
      articles: [
        {
          slug: "quick-start-intro",
          title: "Quick Start",
          content: `## Who this section is for

* **Admins:** install and validate the app
* **All users:** insert macros, write content, edit later

## Quick checklist

1. Install app (admin)
2. Edit page → type \`/\` → insert macro
3. Editor auto-opens the first time
4. Write/paste content → preview → **Save/Publish**

## Common paths

* Admin setup: **Install & Permissions**
* Editing later: **Edit Existing Content**`,
        },
        {
          slug: "install-permissions",
          title: "Install & Permissions (Admins)",
          content: `## Install the app

1. Go to **Confluence → Apps → Find new apps** (Marketplace).
2. Search for **Clovity Diagrams & Math**.
3. Select **Install**.
4. Review requested permissions during installation.

## Who should install

A Confluence **site admin** should install the app.

## After install: confirm macros exist

Open any page in edit mode and type \`/\`:

* Search "Diagrams"
* Search "LaTeX Block Equations"
* Search "LaTeX Inline Equations"

If you see these macros, installation is complete.

## Permissions overview (what admins should know)

* The app needs access to render macros and store macro content so it can be loaded later.
* Editing and viewing remain governed by Confluence permissions (page-level access).`,
        },
        {
          slug: "edit-existing-content",
          title: "Edit Existing Content",
          content: `## Edit Clovity Diagrams and LaTeX Block

1. Hover over the rendered macro on the page
2. Click **Edit** (pencil icon)
3. Update source text in the modal editor
4. Save/Publish to refresh the page view

## Edit Clovity LaTeX Inline

1. Hover over the inline content
2. Click the **Edit icon**
3. Update the paragraph and formulas
4. Save changes

## Pro tip: safe editing workflow

When making a large change:

1. Copy your current source into a temporary note
2. Make edits incrementally
3. Save and verify rendering each step`,
        },
        {
          slug: "contact-support",
          title: "Contact Support",
          content: `Need help with LaTeX Formulas & Diagrams for Confluence? Here's how to get assistance.

## Before Contacting Support

Check these resources first — most issues can be resolved quickly:

1. **What You Get** — overview of all macros and their features
2. **Diagrams Macro** — troubleshooting for Mermaid/UML diagrams
3. **LaTeX Block Equations** — checklist for successful rendering
4. **LaTeX Inline Equations** — rules for inline and block math syntax

## How to Submit a Support Request

If you cannot resolve the issue using the documentation, submit a request via the Atlassian Marketplace support page for LaTeX Formulas & Diagrams.

### Include in Your Request

* Description of the issue — what are you trying to do, and what's happening instead?
* Steps to reproduce — how can we replicate the issue?
* The macro type — Diagrams, LaTeX Block, or LaTeX Inline
* Screenshot or screen recording of the issue (including any error messages)
* Confluence version and app version

## Community & Resources

* Atlassian Community — search for LaTeX Formulas & Diagrams discussions or post a question
* Atlassian Marketplace listing — reviews, version history, and documentation links

## Contact Us

You can also reach our support team directly at [support@clovity.com](mailto:support@clovity.com)`,
        },
      ],
    },
    {
      id: "macro-reference",
      title: "Macro Reference",
      articles: [
        {
          slug: "macro-reference-intro",
          title: "Macro Reference",
          content: `This section provides detailed instructions for each macro, including:

* When to use it
* How to write content
* Viewer controls
* Examples library
* Troubleshooting guides

## Choose the right macro

* **Clovity UML:** diagrams from Mermaid syntax
* **Clovity LaTeX Block:** complex display math
* **Clovity LaTeX Inline:** text-centric content with math embedded`,
        },
        {
          slug: "diagrams-macro",
          title: "Diagrams Macro",
          content: `## What it is

Clovity UML renders **Mermaid** diagrams in Confluence.

## Best for

* Architecture diagrams and workflows
* Sequence diagrams for APIs
* Entity relationships and schemas
* Timelines, mindmaps, and planning visuals

## How it works

* You write Mermaid code in the editor
* Preview renders live
* Saving publishes the diagram into the page
* Viewer toolbar appears on hover for navigation and actions

---

## UML Editor Guide

### Editor layout

* **Source (left):** Mermaid code
* **Preview (right):** rendered diagram

### Using Samples

The editor includes a Samples menu. Use it to:

* Insert a working diagram instantly
* Modify nodes/edges to fit your use case

### Saving

Click **Save/Publish** to store the source and render on the page.

### Writing Mermaid that renders reliably

* Always start with a valid diagram type header, for example:
    * \`flowchart TD\`
    * \`sequenceDiagram\`
    * \`erDiagram\`
* Keep indentation consistent
* Prefer simple IDs (letters/numbers/underscores) for fewer parsing issues
* Build complex diagrams gradually (save often)

---

## Supported Diagram Types

Use these headers as "known good" starting points:

### Flowchart

\`\`\`
flowchart TD
    Start([Start]) --> Input[/Input Data/]
    Input --> Process{Valid Data?}
    Process -->|Yes| Calculate[Calculate Result]
    Process -->|No| Error[Show Error]
    Calculate --> Output[/Display Output/]
    Error --> Input
    Output --> End([End])

    style Start fill:#E3FCEF
    style End fill:#E3FCEF
    style Error fill:#FFEBE6
\`\`\`

### Sequence Diagram

\`\`\`
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database

    User->>Frontend: Click Login
    Frontend->>API: POST /auth/login
    activate API
    API->>Database: Query User
    activate Database
    Database-->>API: User Data
    deactivate Database
    API-->>Frontend: JWT Token
    deactivate API
    Frontend->>User: Redirect to Dashboard

    Note over User,Database: Authentication Flow
\`\`\`

### Class Diagram

\`\`\`
classDiagram
class Customer {
  +placeOrder()
}

class Order {
  +String orderId
  +calculateTotal()
}

class OrderItem {
  +int quantity
  +float price
  +getSubtotal()
}
\`\`\`

### Gantt

\`\`\`
gantt
    title Project Development Timeline
    dateFormat YYYY-MM-DD
    section Planning
    Requirements Gathering    :done, req, 2024-01-01, 2024-01-15
    Design Phase              :done, design, 2024-01-16, 2024-02-01
    section Development
    Backend Development       :active, backend, 2024-02-01, 2024-03-15
    Frontend Development      :frontend, 2024-02-15, 2024-03-30
    section Testing
    Unit Testing             :testing, 2024-03-15, 2024-04-01
    Integration Testing      :integration, 2024-03-25, 2024-04-10
    section Deployment
    Staging Deployment       :staging, 2024-04-10, 2024-04-15
    Production Deployment    :prod, 2024-04-15, 2024-04-20
\`\`\`

### Pie

\`\`\`
pie title Technology Stack Distribution
    "React" : 35
    "Node.js" : 25
    "PostgreSQL" : 20
    "Redis" : 10
    "Docker" : 10
\`\`\`

### Mindmap

\`\`\`
mindmap
  root((Web Application))
    Frontend
      React
      Redux
      CSS Modules
      Webpack
    Backend
      Node.js
      Express
      GraphQL
      REST API
    Database
      PostgreSQL
      Redis
      MongoDB
    DevOps
      Docker
      Kubernetes
      CI/CD
      Monitoring
\`\`\`

---

## UML Viewer Controls

These controls appear when you **hover** over a UML diagram on the page.

### Edit

Opens the modal editor so you can update Mermaid source.

### Copy Source

Copies the text to clipboard (useful for reuse across pages).

---

## UML Troubleshooting

### "Invalid Diagram Syntax"

**Likely causes**

* Missing diagram header line (e.g., \`flowchart TD\`)
* Typos in arrows/keywords
* Unsupported syntax for the selected diagram type

**Fast recovery**

1. Replace your content with a known-good example
2. Confirm it renders
3. Rebuild your diagram step-by-step (save often)

### Diagram looks cropped or hard to navigate

* Use **Fullscreen** for more space
* Zoom in slightly, then pan to explore
* Consider splitting one large diagram into multiple diagrams

### Copy Source didn't work

Some browsers restrict clipboard access in certain embedded contexts.

Workaround:

* Open editor → select text manually → copy`,
        },
        {
          slug: "latex-block-equations",
          title: "LaTeX Block Equations (Display Math)",
          content: `## What it is

Clovity LaTeX Block renders **display math** (centered equations).

## Best for

* Complex formulas
* Multi-line aligned equations
* Matrices and cases
* Technical specs and analytics docs

## Key input rule

Enter **raw LaTeX only** — do not wrap with \`$$...$$\`.

---

## LaTeX Block Editor Guide

### Editor layout

* **Source (left):** raw LaTeX
* **Preview (right):** rendered display equation

### What to type (examples)

Good:

* \`\\\\frac{a}{b}\`
* \`\\\\int_0^1 x\\\\,dx\`
* \`\\\\begin{aligned} ... \\\\end{aligned}\`

### Saving

Click **Save/Publish** to render on the page.

### Quick checklist for successful rendering

* Check braces \`{}\` are balanced
* Ensure every \`\\\\begin{...}\` has a matching \`\\\\end{...}\`
* Test simple → then add complexity

---

## Formatting & Best Practices

### Prefer aligned for multi-step math

\`\`\`
\\begin{aligned}
f(x) &= x^2 + 3x + 2 \\\\
f'(x) &= 2x + 3
\\end{aligned}
\`\`\`

### Use spacing for readability

\`\`\`
\\int_0^1 x \\, dx
\`\`\`

### Label expressions using \\text{...}

\`\`\`
\\begin{aligned}
\\text{Precision} &= \\frac{TP}{TP+FP} \\\\
\\text{Recall} &= \\frac{TP}{TP+FN}
\\end{aligned}
\`\`\`

### Keep long derivations readable

* Split across multiple lines
* Use multiple macros if the derivation becomes too dense
* Add a short caption above the macro explaining what the equation represents

---

## Block Viewer Controls

Controls appear when hovering over the rendered equation.

### Edit

Open the modal editor to update LaTeX source.

### Copy Source

Copies raw LaTeX to clipboard (useful for reuse across docs).`,
        },
        {
          slug: "latex-inline-equations",
          title: "LaTeX Inline Equations",
          content: `## What it is

Clovity LaTeX Inline renders math inside normal text.

## Best for

* Specs and docs where math supports the text
* Definitions of metrics inside sentences
* Short formulas and occasional standalone equations

---

## Inline Editor Guide

### Editor layout

* **Source (left):** normal paragraph text
* **Preview (right):** rendered text with math

### Writing content

Write like this:

* Normal text: \`The area is ...\`
* Inline math: \`$A=\\\\pi r^2$\`
* Block math: \`$$L=\\\\sum (y-\\\\hat{y})^2$$\`

### Saving

Click **Save changes** to render inline content on the page.

### When to choose Block macro instead

Use **Clovity LaTeX Block** when you need:

* multi-line aligned equations
* matrices or cases environments
* longer derivations with multiple steps

---

## Inline Math Rules

### Inline math

Use for short formulas within a sentence.

Example:

\`\`\`
We define accuracy as $Acc=\\frac{TP+TN}{TP+TN+FP+FN}$.
\`\`\`

**Best practices**

* Keep inline formulas short
* Avoid line breaks inside \`$...$\`
* Ensure every opening \`$\` has a closing \`$\``,
        },
      ],
    },
    {
      id: "eula",
      title: "End User License Agreement",
      articles: [
        {
          slug: "eula",
          title: "End User License Agreement (EULA)",
          content: `This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and Clovity, Inc. ("Company" or "We"), governing your use of the **LaTeX Math and UML Diagrams for Confluence** application ("Software") available on the Atlassian Marketplace.

By installing, accessing, or using this Software, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use the Software.

## 1. License Grant

Clovity, Inc. grants you a non-exclusive, non-transferable, revocable, and limited license to use the Software within your Atlassian Confluence environment in accordance with this Agreement.

## 2. Restrictions

You shall not:

* Copy, modify, distribute, or create derivative works of the Software.
* Reverse engineer, decompile, or attempt to extract the source code.
* Use the Software for unlawful or unauthorized purposes.
* Rent, lease, sublicense, or transfer the Software to third parties.

## 3. Data Privacy & Security

The Software may process Confluence-related data but does not store, share, or transmit personal or confidential data outside of your Confluence environment.

Your use of the Software must comply with applicable data protection laws and Atlassian's policies.

## 4. Support & Updates

Clovity, Inc. may provide updates, patches, or improvements to the Software at its discretion.

Support services are available as per the Atlassian Marketplace listing.

## 5. Disclaimer of Warranties

The Software is provided "AS IS" without any express or implied warranties, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Clovity, Inc. does not warrant that the Software will be error-free or operate without interruptions.

## 6. Limitation of Liability

To the fullest extent permitted by law, Clovity, Inc. shall not be liable for any damages arising out of or related to the use or inability to use the Software, including but not limited to loss of profits, data, or other intangible losses, even if Clovity, Inc. has been advised of the possibility of such damages.`,
        },
      ],
    },
  ],
};
