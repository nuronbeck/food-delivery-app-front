<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-left">
          <router-link to="/">
            <img class="logo" src="@/assets/header/main_logo.svg">
          </router-link>
          <div class="search-form">
            <input class="search-input" type="text" placeholder="Search " />
            <i class="search-icon fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="menu">
          <a class="menu__link" href="#">Restaurants</a>
          <a class="menu__link" href="#">Deals</a>
          <span class="menu-divider__vertical"></span>
          <a class="menu__link" href="#">My orders</a>
          <a class="menu__shopping" href="#"
            ><img src="@/assets/header/shopping bag.svg" /><span
              class="menu__shopping--counter"
              >4</span
            ></a
          >
          <router-link to="/profile"
            ><img class="menu__user" src="@/assets/header/useravatar.svg"
          /></router-link>
          <img class="menu__menu--icon" src="@/assets/header/menu.svg" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
.header {
  height: 80px;
  background-color: var(--white);
  border-bottom: 1px solid var(--primary-light);
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-left {
    display: flex;
    align-items: center;
  }
}

.logo {
 cursor: pointer; 
}

.search-form {
  position: relative;
  margin-left: 48px;
  align-items: center;
}

.search-input {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
  background-color: var(--grey-lightest);
  padding: 10px 12px;
  padding-right: calc((12px * 2) + 16px);
  border-radius: 12px;
  border: none;
  outline-color: var(--primary);
  height: 40px;
  min-width: 224px;
  box-sizing: border-box;
}

.search-icon {
  position: absolute;
  color: var(--grey);
  width: 16px;
  height: 16px;
  top: calc((40px - 16px) / 2);
  right: calc((40px - 16px) / 2);
}

.menu {
  display: flex;
  align-items: center;

  &__link {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: var(--dark);
    margin: 0 28px;

    &:hover {
      color: var(--primary);
      transition: 0.5s;
    }
  }

  &-divider {
    &__vertical {
      height: 32px;
      border-right: 1px solid var(--grey-light);
    }
  }

  &__shopping {
    background-color: var(--primary-light);
    padding: 12px;
    border-radius: 16px;
    position: relative;
    margin-right: 11px;

    &--counter {
      position: absolute;
      background-color: #4e60ff;
      border-radius: 8px;
      padding: 2px 6px;
      color: var(--white);
      right: -6px;
      top: -6px;
    }
  }

  &__user {
    border: 2px solid #edeef2;
    border-radius: 16px;
    padding: 2px;

    &:hover {
      border: 2px solid var(--primary);
    }
  }

  &__menu--icon {
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
  }

  .menu__link {
    display: none;
  }

  .menu__shopping {
    border: 2px solid $color-primary-light;
  }

  .menu__shopping:hover {
    border: 2px solid $color-primary;
  }

  .menu__user {
    margin-right: 32px;
  }

  .menu__user:hover {
    border: 2px solid $color-primary;
  }

  .menu-divider__vertical {
    position: absolute;
    right: 65px;
    top: 10;
    border: 1px solid $color-grey-lightest;
    height: 32px;
    color: $color-grey;
  }

  .menu__menu--icon {
    cursor: pointer;
    display: block;
    background: #edeef2;
    border-radius: 16px;
    padding: 14px;
    border: 2px solid $color-grey-lightest;
  }

  .menu__menu--icon:hover {
    border: 2px solid $color-primary;
  }
}
</style>
