<template>
  <div id="app" class="app">
    <main v-if="isAppLoading" class="app__loading">
      <BaseSpinner variant="primary" />
      <span>Loading</span>
    </main>

    <main v-else>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      isAppLoading: true
    }
  },
  methods: {
    ...mapActions({
      checkAuth: 'auth/checkAuth'
    }),

    setupApplication(){
      if(localStorage.getItem('foodDeliveryAppToken')){
        this.checkAuth()
        .finally(() => {
          this.isAppLoading = false
        })
      } else {
        this.isAppLoading = false
      }
    }
  },
  mounted(){
    this.setupApplication();
  }
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');
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

body{
  height: -webkit-fill-available;
}

.app {
  display: flex;

  &__loading {
    color: $color-grey-dark;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}

main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
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
  max-width: $breakpoint-lg;
  padding: 0 15px;
}
</style>
