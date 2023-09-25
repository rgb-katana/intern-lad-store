import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  /* Indigo */
  --color-main-50: #eef2ff;
  --color-main-100: #e0e7ff;
  --color-main-200: #c7d2fe;
  --color-main-500: #6366f1;
  --color-main-600: #4f46e5;
  --color-main-700: #4338ca;
  --color-main-800: #3730a3;
  --color-main-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  font-size: 1.6rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyles;
