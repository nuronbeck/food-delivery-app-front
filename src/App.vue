<template>
  <div id="app">
    <IndexPage />

  </div>
</template>

<script>
import IndexPage from './pages/IndexPage'

export default {
  name: 'App',
  components: {
    IndexPage
    // LoginPage
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
/* Nunito font regular */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

/* Nunito font bold */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap');

:root {
  --primary: #4E60FF;
  --primary-light: #F3F4FF;
  --white: #fff;
  --dark: #2B2B43;
  --grey: #83859C;
  --grey-darker: #545563;
  --grey-light: #C7C8D2;
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

a {
  text-decoration: none;
}


.container {
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-desktop);
}

@media screen and (max-width: 1140px) {
  .container {
    padding: 0 15px;
  }
}
</style>
