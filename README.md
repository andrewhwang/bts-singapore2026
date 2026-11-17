# BTS in Singapore · ARIRANG City Guide

[Open the live map](https://andrewhwang.github.io/bts-singapore2026/)

싱가포르 BTS 행사 지도 · English / 한국어. Independent fan-made guide, not affiliated with BTS, HYBE or STB.

## 만든 이유 / About

**Andrew Hwang**이 BTS 팬들이 싱가포르를 방문하고 행사 장소를 쉽게 찾아갈 수 있도록 만든 지도 가이드입니다. 날짜별·지역별 일정을 살펴보고, 행사 상세 정보와 길찾기를 확인할 수 있습니다.

Created by **Andrew Hwang** to help BTS fans visit Singapore and find event locations more easily. Browse events by date and area, then open details and directions to plan your visit.

## 방문 전 확인 / Before you visit

**행사 일정·시간·장소·입장 조건은 변경될 수 있습니다. 방문 전 반드시 원문 기사와 주최 측 공식 공지에서 최신 정보를 확인하세요.** 각 행사 상세 창에 원문 기사와 공식 안내 링크가 있습니다.

**Event dates, times, locations and entry requirements may change. Always check the original article and the organiser’s official announcements for the latest information before visiting.** Each event detail includes links to the original article and official information.

- [원문 기사 / Original article — The Straits Times](https://www.straitstimes.com/singapore/drone-shows-fireworks-among-activities-to-mark-bts-the-city-arirang-programme-in-singapore)
- [공식 일정 / Official schedule — HYBE / Weverse](https://weverse.io/bts/notice/40721)

## 기본 언어 / Default language

처음 방문하면 브라우저의 기본 언어 속성(`navigator.language`)을 확인합니다. 한국어(`ko`, `ko-KR` 등)이면 한국어로, 그 외 언어이면 영어로 표시합니다. 상단의 한국어 / EN 버튼으로 변경할 수 있으며, 저장이 가능한 브라우저에서는 선택한 언어를 다음 방문에도 유지합니다. 저장 기능이 차단되어 있어도 브라우저 언어에 따라 기본 언어를 결정합니다.

On the first visit, the site checks the browser’s primary language (`navigator.language`). Korean (`ko`, `ko-KR`, etc.) opens the Korean version; every other language opens English. Use the 한국어 / EN buttons to switch. Your choice is remembered on later visits when browser storage is available. If storage is blocked, the default still follows the browser language.

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

