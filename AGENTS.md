# AGENTS — Project Context for AI Assistants

## Project Overview

Interactive HTML5 website showcasing design process tools organized in 6 phases. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools.

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, keyframe animations)
- Vanilla JavaScript (ES6+)
- No dependencies, no server required

## Color Palette

- Background: `#f5f5f7`
- Purple accent: `#9933cc`
- Blue accent: `#3399ff`
- Text: `#1d1d1f`

## File Structure (flat, no subfolders)

| File | Purpose |
|---|---|
| `index.html` | Main entry point |
| `style.css` | All styles |
| `app.js` | Modal logic, rendering, event handling |
| `datos.js` | Data: `fases` array with 6 phase objects |
| `README.md` | Spanish project docs |
| `AGENTS.md` | This file |
| `session-log.md` | Development session log |

## Data Structure (`datos.js`)

Global variable `fases` is an array of 6 objects:

```js
{
  id: Number,          // 1-6
  titulo: String,      // Phase name in Spanish
  descripcion: String, // Phase description
  color: String,       // Hex color (#3399ff or #9933cc)
  herramientas: [      // Array of tool objects
    {
      nombre: String,      // Tool name
      descripcion: String, // Description
      proposito: String,   // Main purpose
      contexto: String     // Usage context
    }
  ]
}
```

## Conventions

- All user-facing text is in **Spanish**
- All code identifiers, comments and this file are in **English**
- Tools alternate purple/blue per phase (odd phases blue `#3399ff`, even phases purple `#9933cc`)
- No external dependencies or CDN links

## Modal Behavior

- Click any `.tarjeta` card → opens modal with full tool info
- Close via × button, overlay click, or Escape key
- Modal has backdrop blur, fade+scale animation
