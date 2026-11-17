# BTS in Singapore · ARIRANG City Guide

[Open the live map](https://andrewhwang.github.io/bts-singapore2026/)

싱가포르 BTS 행사 지도 · English / 한국어. Independent fan-made guide, not affiliated with BTS, HYBE or STB.

## Features

- Interactive Singapore map, venue groups and event details
- Combined date, area, category and bilingual text search filters
- English / Korean, with remembered language preference
- Exact selected-day filtering for fireworks, concerts and Zouk parties
- Explicit labels for schedules still requiring confirmation
- Official source, original article and Google Maps directions for every event
- Responsive layout, keyboard-accessible controls and native modal dialog
- Singapore time (UTC+8); dates indicate session start dates

## Run locally

Requires Node.js 18+; no installation or build step.

```sh
node serve.cjs
```

Open http://127.0.0.1:4173. Run `node validate.cjs` for schedule/data checks.

## Hosting

GitHub Pages publishes the `main` branch root. `.nojekyll` enables plain static serving. Push changes to `main` to deploy. All asset paths are relative so the project works at `/bts-singapore2026/`. No secrets, API keys or backend are required.

Map tiles use OpenStreetMap, fonts use Google Fonts. If these external services are unavailable, event browsing and directions remain usable, with a map failure notice. Leaflet 1.9.4 is vendored in `assets/leaflet` with its BSD-2-Clause license.

## Content and updates

Verified 17 November 2026. Update `data.js` to maintain events, venue coordinates, translated descriptions and source URLs. Exact dates use `dates`; a date range uses inclusive `start` / `end`. `tentative: true` indicates only possible operating days, not a confirmed daily event. January 2027 continuation is included. Coordinates are approximate venue waypoints, not guaranteed entry points. Multi-site programmes are represented at each venue.

The guide is based on the requested [Straits Times article](https://www.straitstimes.com/singapore/drone-shows-fireworks-among-activities-to-mark-bts-the-city-arirang-programme-in-singapore) and cross-checked against [HYBE / Weverse](https://weverse.io/bts/notice/40721), [STB](https://www.stb.gov.sg/about-stb/media-publications/media-centre/-bts-the-city-arirang-singapore--expands-programme-and-welcomes-visa-as-official-partner-alongside-stb/) and partner announcements linked in the data. Descriptions are independently written summaries. No article text is reproduced. Some official-programme additions (New Bahru and individual city light-up sites) supplement article locations.

## Image credit

Background: **The White House, 31 May 2022**, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BTS_at_the_White_House_on_May_31,_2022_05.jpg), public domain US federal government work. Historical photograph, not a 2026 tour image. All marks belong to their respective owners.

