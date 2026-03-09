# Parallax Website

A visually immersive parallax scrolling website built with pure HTML, CSS, and JavaScript — no external libraries or frameworks.

## Preview

The site features a layered nature scene (hills, trees, leaves, and a plant) that animates as the user scrolls, creating a deep 3D effect. Below the hero section is an informational content area explaining parallax scrolling.

## Features

- **Multi-layer parallax effect** — 9 image layers (hills, tree, leaf, plant) move at different speeds on scroll to simulate depth
- **Smooth scroll animations** — driven by a native `scroll` event listener in vanilla JavaScript
- **Floating hero text** — the title drifts downward as the user scrolls
- **Responsive guard** — detects viewport width and alerts users if their window is below 1250px, hiding content until desktop size is reached
- **Teal/green color theme** — consistent branding using `#359381` (nav/logo) and `#003329` (content background)
- **Google Fonts** — uses the Poppins typeface (weights 400, 500, 700)

## Project Structure

```
Parallax Website/
├── index.html       # Main HTML structure (header, parallax section, scroll section)
├── style.css        # All styling (layout, parallax positioning, typography, colors)
├── script.js        # Scroll event handler & desktop-mode detection
└── Images/
    ├── hill1.png    # Background hill (moves up on scroll)
    ├── hill2.png    # Mid-ground hill layer
    ├── hill3.png    # Mid-ground hill layer
    ├── hill4.png    # Hill that shifts left on scroll
    ├── hill5.png    # Hill that shifts right on scroll
    ├── tree.png     # Foreground tree (stationary)
    ├── leaf.png     # Floating leaf (moves diagonally on scroll)
    ├── plant.png    # Foreground plant (stationary)
    └── home.png     # Favicon
```

## How It Works

### Parallax Logic (`script.js`)

On every `scroll` event, `window.scrollY` is captured and applied to each element with a unique multiplier:

| Element | Transform | Effect |
|---------|-----------|--------|
| `#text` | `marginTop = scrollY × 2.5` | Title sinks down quickly |
| `#leaf` | `top = scrollY × −1.5`, `left = scrollY × 1.5` | Leaf floats up and right |
| `#hill1` | `top = scrollY × 0.8` | Slow downward drift |
| `#hill4` | `left = scrollY × −1.5` | Slides out to the left |
| `#hill5` | `left = scrollY × 1.5` | Slides out to the right |

### Desktop Guard

On `load` and `resize`, the script checks `window.matchMedia("(min-width: 1250px)")`. If the condition is not met, the entire `#content` div is hidden and the user is shown an alert to switch to desktop mode.

## Technologies Used

- HTML5
- CSS3 (Flexbox, absolute positioning, transitions)
- Vanilla JavaScript (ES6)
- Google Fonts — [Poppins](https://fonts.google.com/specimen/Poppins)

## Getting Started

No build step or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in a modern browser.
3. Ensure your browser window is at least **1250px wide** to see the full experience.

```bash
# Quick start with VS Code Live Server
code .
# Then open index.html with Live Server
```

## Browser Support

Works in all modern browsers that support CSS `position: absolute`, the `scroll` event, and `window.matchMedia`.
