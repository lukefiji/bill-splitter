# Bill Splitter

Bill splitter made for quick bill splitting

## Design

### Overview

- Split bill by # of people
- Enter subtotal (pre-tax)
- Enter tax/total (post-tax)
  - Include toggle between tax, or total amount
- Enter itemized amount
  - Assign to one, multiple, or all plates
  - Display remaining total
- Enter tip
  - Include toggle between pre-tax or post-tax
- Display each person's total

### Technical Specs

- Tax & tip should be assigned proportionally based on an individual's check

## Stack

- [Vite](https://github.com/vitejs/vite)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [React](https://github.com/facebook/react)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) + [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge) + [`clsx`](https://github.com/lukeed/clsx)
- [Prettier](https://github.com/prettier/prettier)
  - [`prettier-plugin-organize-imports`](https://github.com/simonhaenisch/prettier-plugin-organize-imports)
  - [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
