# eGov Foundation – Landing Page

A responsive landing page built as part of a frontend assignment, recreating the [eGov Foundation](https://egov.org.in) website based on a reference design screenshot.

The project is split into two tasks — one built with plain HTML, CSS and Bootstrap, and the other rebuilt using React.

---

##Project Structure

```
Tailwebs/
├── task-1/               # HTML + CSS + Bootstrap
│   ├── eGov-webPage.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── eGov.js
│
└── task-2/eGov-webPage               # React
           └── src/
                ├── components/
                │   ├── Navbar.jsx
                │   ├── Hero.jsx
                │   ├── Stats.jsx
                │   ├── Features.jsx
                │   ├── CTA.jsx
                │   ├── Footer.jsx
                │   └── resources/
                │       ├── ResourcesSec.jsx
                │       ├── ArticleCard.jsx
                │       ├── SkelCard.jsx
                │       ├── Controls.jsx
                │       └── EmptyState.jsx
                ├── hooks/
                │   ├── useArticles.js
                │   └── useFilter.js
                ├── data/
                │   └── mockData.js
                ├── global/
                │   └── index.js
                ├── styles/
                │   └── index.css
                └── App.jsx
```

---

## Task 1 – HTML + CSS + Bootstrap

A fully responsive landing page built without any JavaScript framework.

**What's included:**
- Sticky navbar with mobile hamburger menu
- Hero section with floating image animation
- Stats strip
- Features / Bold Approaches section with pill filters
- Impact / CTA section
- DIGIT Platform section
- Latest at eGov (Resources) section
- Supporters section
- Footer with newsletter subscribe input
- Scroll-triggered fade-in animations using Intersection Observer

**Tech used:**
- HTML5 (semantic)
- CSS3 (custom properties, animations, flexbox, grid)
- Bootstrap 5.3
- Bootstrap Icons
- Google Fonts – DM Sans
- Vanilla JavaScript

### How to run

Just open `task-1/eGov-webPage.html` in your browser. No setup needed.

---

## Task 2 – React

The same landing page rebuilt in React with additional interactive features on the Resources section.

**What's included — on top of Task 1:**
- Fully componentised — every section is its own component
- Resources section with:
  - Search bar to filter articles by name or category
  - Category filter pills (All, Article, Newsletter, Case Study, Whitepaper, Strategy Paper)
  - Loading state with shimmer Skel cards
  - "No results found" empty state with contextual message
  - Live results count
- Custom hooks for data fetching (`useArticles`) and filtering (`useFilter`)
- Mock article data in a separate `data/dummyData.js` file
- All constants (nav links, stats, features, footer links) centralized in `constants/index.js`

**Tech used:**
- React 18 (functional components + hooks)
- useState, useEffect, useMemo
- CSS3 (no UI library)
- Google Fonts – DM Sans
- Vite

## Design Reference

The UI is based on a screenshot of [egov.org.in](https://egov.org.in). All images used are placeholder images from [placeholder.com](https://placeholder.com) as per the task requirements.

**Font:** DM Sans  
**Primary color:** `#0057FF`  
**Accent color:** `#00C9A7`

---

## Notes

- Task 1 keeps everything in a single HTML file with separate CSS and JS files — this is intentional since plain HTML has no component system
- Task 2 is structured the way I'd structure any real React project — hooks for logic, constants for static data, and components that do one thing each
- Both tasks are fully responsive on desktop and mobile
