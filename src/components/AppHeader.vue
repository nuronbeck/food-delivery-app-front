<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-left">
          <img class="logo" src="@/assets/header/main_logo.svg">
          <div class="search-form">
            <input class="search-input" type="text" placeholder="Search ">
            <i class="search-icon fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="menu">
          <router-link class="menu__link" to="#">Restaurants</router-link>
          <router-link class="menu__link" to="#">Deals</router-link>
          <span class="menu-divider__vertical"></span>
          <router-link class="menu__link" to="#">My orders</router-link>
          <router-link class="menu__shopping" to="#"><img src="@/assets/header/shopping bag.svg"><span
              class="menu__shopping--counter">4</span></router-link>
          <router-link to="#"><img class="menu__user" src="@/assets/header/useravatar.svg"></router-link>
          <img class="menu__menu--icon" src="@/assets/header/menu.svg">
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

<style>
.header {
  height: 80px;
  background-color: var(--white);
  border-bottom: 1px solid var(--primary-light);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
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
}

.menu__link {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
  margin: 0 28px;
}

.menu__link:hover {
  color: var(--primary);
  transition: .5s;
}

.menu-divider__vertical {
  height: 32px;
  border-right: 1px solid var(--grey-light);
}

.menu__shopping {
  background-color: var(--primary-light);
  padding: 12px;
  border-radius: 16px;
  position: relative;
  margin-right: 11px;
}

.menu__shopping--counter {
  position: absolute;
  background-color: #4E60FF;
  border-radius: 8px;
  padding: 2px 6px;
  color: var(--white);
  right: -6px;
  top: -6px;
}

.menu__user {
  border: 2px solid #EDEEF2;
  border-radius: 16px;
  padding: 2px;
}

.menu__user:hover {
  border: 2px solid var(--primary);
}

.menu__menu--icon {
  display: none;
}


/* cards section */

/* Here you can define styles how to change on mobile  */
@media screen and (max-width: 768px) {

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
    border: 2px solid var(--primary-light);
  }

  .menu__shopping:hover {
    border: 2px solid var(--primary);
  }

  .menu__user {
    margin-right: 32px;
  }

  .menu__user:hover {
    border: 2px solid var(--primary);
  }


  .menu-divider__vertical {
    position: absolute;
    right: 65px;
    top: 10;
    border: 1px solid var(--grey-lightest);
    height: 32px;
    color: var(--grey);
  }



  .menu__menu--icon {
    cursor: pointer;
    display: block;
    background: #edeef2;
    border-radius: 16px;
    padding: 14px;
    border: 2px solid var(--grey-lightest);
  }

  .menu__menu--icon:hover {
    border: 2px solid var(--primary);
  }
}
</style>
