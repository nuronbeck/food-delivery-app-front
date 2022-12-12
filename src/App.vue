<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* ============NOrmalize css ================== */
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');

/*=========== Nunito font regular================== */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

/*=================== Nunito font bold ==========*/
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap');

:root {
  --primary: #4E60FF;
  --primary-light: #F3F4FF;
  --secondary: #FD6D22;
  --secondary-light: #FFF3ED;
  --white: #fff;
  --dark: #2B2B43;
  --grey: #83859C;
  --grey-light: #C7C8D2;
  --grey-dark: #545563;
  --grey-lightest: #EDEEF2;
  --error: #FF5C60;

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
}

.container {
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-desktop);
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
</style>
