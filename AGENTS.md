# AGENTS

This is a small static web app for an English study guide built with plain HTML, CSS, and JavaScript.

## Key files
- `guia_ingles_interactiva.html` — the main page markup and navigation structure.
- `styles.css` — the visual theme, responsive layout, dark/light mode styles, and card UI.
- `app.js` — the app logic: data arrays, dynamic rendering, quiz behavior, flashcards, verb search, and section navigation.
- `service-worker.js` — offline caching support for local app shell assets.

## What to know
- No build tools, package manager, or backend: this is a static frontend project.
- JavaScript is vanilla and uses direct DOM manipulation.
- Content is Spanish-first but the app teaches English grammar and vocabulary, so maintain Spanish labels and UX language where appropriate.
- Keep the existing structure and user flow unless the user asks for a redesign.

## When making changes
- Update `app.js` if you need to change topic content, flashcards, quiz questions, or irregular verb data.
- Use `styles.css` for visual and responsive behavior changes.
- Keep `guia_ingles_interactiva.html` as the main shell; it also loads the app script and styles.
- Preserve the mobile nav, dark/light toggle, and quiz progress flow.

## Tasks the AI should focus on
- Fixing UI bugs or improving layout in a plain CSS/HTML context.
- Adding or editing grammar topics, flashcards, quiz questions, and verb search behavior.
- Improving accessibility, readability, or performance in the static app.
- Avoid introducing frameworks, complex build setups, or server components unless explicitly requested.
