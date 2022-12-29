<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <router-link to="/">
            <img class="logo" src="@/assets/header/main_logo.svg">
          </router-link>
        </div>
        <div class="menu">
          <a class="menu__link" href="#">My orders</a>
          <a class="menu__shopping" href="#">
            <img src="@/assets/header/shopping bag.svg" />
            <span class="menu__shopping-counter">4</span>
          </a>

          <router-link v-if="isLoggedIn" to="/profile">
            <img class="menu__user" src="@/assets/header/useravatar.svg" />
          </router-link>

          <BaseButton v-if="!isLoggedIn" variant="primary" @onClick="login">
            Login
          </BaseButton>

          <!-- <img class="menu__icon" src="@/assets/header/menu.svg" /> -->
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

  &__left {
    display: flex;
    align-items: center;
  }
}

.logo {
  cursor: pointer;
}

.menu {
  display: flex;
  align-items: center;

  &__link {
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

  &__shopping {
    background-color: $color-primary-light;
    padding: 12px;
    border-radius: 16px;
    position: relative;
    margin-right: 11px;

    &-counter {
      position: absolute;
      border-radius: 8px;
      padding: 2px 6px;
      right: -6px;
      top: -6px;
      background-color: $color-primary;
      color: $color-white;
    }
  }

  &__user {
    border: 2px solid $color-grey-lightest;
    border-radius: 16px;
    padding: 2px;

    &:hover {
      border: 2px solid $color-primary;
    }
  }

  &__icon {
    display: none;
  }
}

/* Here you can define styles how to change on mobile  */
@media screen and (max-width: $breakpoint-md) {
  .logo {
    padding-left: 15px;
  }

  .search-form {
    display: none;
  }

  .menu {
    position: relative;

    &__link {
      display: none;
    }

    &__shopping {
      border: 2px solid $color-primary-light;
    }

    &__shopping {
      :hover {
        border: 2px solid $color-primary;
      }

      &__user {
        margin-right: 32px;
      }

      :hover {
        border: 2px solid $color-primary;
      }

      &__divider {
        &-vertical {
          position: absolute;
          right: 65px;
          top: 10;
          border: 1px solid $color-grey-lightest;
          height: 32px;
          color: $color-grey;
        }
      }

      &__icon {
        cursor: pointer;
        display: block;
        background: $color-grey-lightest;
        border-radius: 16px;
        padding: 14px;
        border: 2px solid $color-grey-lightest;

        :hover {
          border: 2px solid $color-primary;
        }
      }
    }
  }
}
</style>
