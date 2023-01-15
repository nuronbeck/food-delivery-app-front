<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/header/main_logo.svg" />
          </router-link>
        </div>
        <div class="header__menu">
          <router-link v-if="isLoggedIn" class="header__menu-link" to="/my-orders" active-class="active">
            My orders
          </router-link>

          <router-link v-if="isLoggedIn" class="header__menu-card" to="/cart">
            <img src="@/assets/header/shopping bag.svg" />
            <span class="header__menu-counter">4</span>
          </router-link>

          <router-link v-if="isLoggedIn" class="header__menu--profile-link" to="/profile" active-class="active">
            <img class="header__menu--profile-image" src="@/assets/profile/blank-profile-picture.jpg" />
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
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isAuth",
    }),
  },
  methods: {
    login() {
      this.$router.push("/auth/login");
    },
  },
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

      &.active {
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

    &--profile-image {
      min-width: 100%;
      height: auto;
    }

    &--profile-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      min-width: 46px;
      min-height: 46px;
      background-color: $color-grey-light;
      outline: 2px solid $color-white;
      border-radius: 16px;
      overflow: hidden;
      box-sizing: border-box;

      &:hover {
        outline: 2px solid $color-primary;
      }

      &.active {
        outline: 2px solid $color-primary;
      }
    }

    &-icon {
      display: none;
    }
  }
}

// =========Mobile breakpoint==========
@media screen and (max-width: 768px) {
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
    }
  }
}
</style>
