<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* ============NOrmalize css ================== */
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");

/*=========== Nunito font regular================== */
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap");

/*=================== Nunito font bold ==========*/
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap");

:root {
  --primary: #4e60ff;
  --primary-light: #f3f4ff;
  --secondary: #fd6d22;
  --secondary-light: #fff3ed;
  --white: #fff;
  --dark: #2b2b43;
  --grey: #83859c;
  --grey-light: #c7c8d2;
  --grey-dark: #545563;
  --grey-lightest: #edeef2;
  --error: #ff5c60;

  --breakpoint-mobile: 768px;
  --breakpoint-desktop: 1110px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  text-decoration: none;
  margin: 0;
}

.container {
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-desktop);
}


</style>
