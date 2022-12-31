<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/header/main_logo.svg">
          </router-link>
        </div>
        <div class="header__menu">
          <a class="header__menu-link" href="#">My orders</a>
          <a class="header__menu-card" href="#">
            <img src="@/assets/header/shopping bag.svg" />
            <span class="header__menu-counter">4</span>
          </a>
          <router-link v-if="isLoggedIn" to="/profile">
            <img class="header__menu-userImg" src="@/assets/header/useravatar.svg" />
          </router-link>
          <BaseButton v-if="!isLoggedIn" variant="primary" @onClick="login">
            Login
          </BaseButton>
          <!-- <img class="header__menu-icon" src="@/assets/header/menu.svg" /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true
    }
  }
};
</script>

<style lang="scss">
.header {
  height: 80px;
  background-color: $color-white;
  border-bottom: 1px solid $color-primary-light;
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  &__menu {
    display: flex;
    align-items: center;

    &-link {
      font-family: $base-font;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      margin: 0 28px;
      color: $color-dark;

      &:hover {
        transition: 0.5s;
        color: $color-primary;
      }
    }

    &-card {
      background-color: $color-primary-light;
      padding: 12px;
      border-radius: 16px;
      position: relative;
      margin-right: 11px;
    }

    &-counter {
      position: absolute;
      border-radius: 8px;
      padding: 2px 6px;
      right: -6px;
      top: -6px;
      background-color: $color-primary;
      color: $color-white;
    }

    &-userImg {
      border: 2px solid $color-grey-lightest;
      border-radius: 16px;
      padding: 2px;

      &:hover {
        border: 2px solid $color-primary;
      }
    }

    &-icon {
      display: none;
    }
  }
}

// =========Mobile breakpoint==========
@media screen and ( max-width: 768px) {

  .header {
    &__menu {
      position: relative;
      justify-content: end;

      &-link {
        display: none;
      }

      &-card {
        border: 2px solid $color-primary-light;

        &:hover {
          border: 2px solid $color-primary;
        }
      }

      &-userImg {
        &:hover {
          border: 2px solid $color-primary;
        }
      }

      // &-icon {
      //   cursor: pointer;
      //   display: block;
      //   background: $color-grey-lightest;
      //   border-radius: 16px;
      //   padding: 14px;
      //   border: 2px solid $color-grey-lightest;

      //   &:hover {
      //     border: 2px solid $color-primary;
      //   }
      // }
    }
  }
}
</style>
