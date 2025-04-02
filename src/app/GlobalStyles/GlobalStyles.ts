import { createGlobalStyle } from 'styled-components'

export const COLOR_LOADER = 'var(--c-yellow-300)'

export const GlobalStyles = createGlobalStyle`
:root {
  --c-white: #fff;

  --c-yellow-300: #fde047;
  --c-yellow-700: #a16207;

  --c-red-400: #f87171;
  --c-red-500: #ef4444;
  --c-red-700: #b91c1c;

  --c-gray-50: #f9fafb;
  --c-gray-100: #f3f4f6;
  --c-gray-200: #e5e7eb;
  --c-gray-300: #d1d5db;
  --c-gray-400: #9ca3af;
  --c-gray-500: #6b7280;
  --c-gray-600: #4b5563;
  --c-gray-900: #111827;
}

body {
  font-family: RobotoMono, sans-serif;
  font-size: 14px;
  color: var(--c-gray-900);
}

/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-text-size-adjust: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  color: currentcolor;
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textarea without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}
`
