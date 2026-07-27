# SnipTools — Free Developer & Utility Tools

> **Domain**: [sniptoolkit.com](https://sniptoolkit.com)
> **Stack**: Astro 7 + Tailwind CSS 4 · 100% Static · Cloudflare Pages

Fast, free, privacy-first developer tools that run entirely in your browser. Zero sign-up, zero server uploads, zero tracking.

## Tools Included

| Tool | Description |
| :--- | :--- |
| **JSON Formatter & Validator** | Format, beautify, minify, and validate JSON with error highlighting |
| **Base64 Encode & Decode** | Encode/decode text and files to/from Base64 |
| **UUID Generator** | Generate UUID v4 & v7 in bulk with formatting options |
| **URL Encode & Decode** | Percent-encode/decode URLs and query parameters |
| **Unix Timestamp Converter** | Convert epoch timestamps to human-readable dates |
| **Hash Generator (SHA/MD5)** | Generate MD5, SHA-1, SHA-256, SHA-512 hashes & HMAC |
| **Word & Character Counter** | Count words, characters, sentences, reading time |
| **Color Picker & Converter** | Convert between HEX, RGB, HSL, HSV with WCAG contrast |
| **Lorem Ipsum Generator** | Generate placeholder text in paragraphs, words, or bytes |
| **Online Clipboard** | Share text snippets between tabs via 6-digit codes |

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production static site to dist/
npm run preview    # Preview production build locally
```

## Deploy to Cloudflare Pages

```bash
npm run deploy     # Build + deploy to Cloudflare Pages
```

## Architecture

- **100% Static Output** — No server, no database, no backend
- **100% Client-Side Processing** — All tools run in the browser via JavaScript & Web Crypto API
- **Zero Data Collection** — No user inputs are ever transmitted or stored
- **Dark Mode First** — Vercel-inspired design with light mode toggle
- **Command Palette** — Press `Ctrl+K` to fuzzy-search all tools instantly

## License

© 2026 SnipTools. All rights reserved.
