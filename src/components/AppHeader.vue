<template>
  <header class="header__menu">
    <div class="container">
      <div class="header__navbar">
        <div class="header__menu--left-side">
          <img
            class="header__menu--logo"
            src="@/assets/img/main_logo.svg"
            alt="Food delivery website logo"
          />

          <div class="header__menu--search">
            <input
              class="header__menu--search-input"
              type="text"
              placeholder="Search "
            />
            <i
              class="header__menu--search-icon fa-solid fa-magnifying-glass"
            ></i>
          </div>
        </div>

        <div class="header__menu--right-side">
          <nav class="header__menu--link">
            <router-link class="menu_link" to="">Restaurants</router-link>
            <a class="menu_link" href="#">Deals</a>
            <span class="header__menu--divider-vertical"></span>
            <a class="menu_link active" href="#">My orders</a>
          </nav>
          <div class="header__menu--icon">
            <a href="#"
              ><img
                class="header__menu--icon-item"
                src="@/assets/img/shopping bag.svg"
                alt="shopping bag icon"
            /></a>
            <span class="header__menu--icon-number">4</span>
          </div>
          <router-link to="/profile">
            <img
              class="header__menu--useravatar"
              src="@/assets/img/useravatar.svg"
              alt="useravatar img"
            />
          </router-link>
          <span class="header__menu--divider-vertical"></span>
          <img
            class="header__menu--icon-mobile"
            src="@/assets/img/menu.svg"
            alt=" header menu icon "
          />
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
.header__menu {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-bottom: 1px solid var(--primary-light);
}

.header__menu--left-side {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header__menu--logo {
  width: 79px;
  height: 40px;
}

.header__menu--search {
  position: relative;
  margin-left: 48px;
}

.header__menu--search-input {
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

.header__menu--search-icon {
  position: absolute;
  color: var(--grey);
  width: 16px;
  height: 16px;
  top: calc((40px - 16px) / 2);
  right: calc((40px - 16px) / 2);
}

/*  Here you can define styles how to create menu right side  */

.header__menu--right-side {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__menu--link {
  display: flex;
  align-items: center;
}

.menu_link {
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
  list-style: none;
  margin: 0 28px;
}

.menu_link:hover {
  color: var(--primary);
  transition: 0.5s;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__menu--divider-vertical {
  height: 32px;
  border-right: 1px solid var(--grey-lightest);
}

.header__menu--icon {
  position: relative;
  margin-right: 12px;
}

.header__menu--icon-item {
  background-color: var(--primary-light);
  padding: 16px;
  border-radius: 16px;
}

.header__menu--icon-number {
  position: absolute;
  background-color: #4e60ff;
  border-radius: 8px;
  padding: 2px 6px;
  color: var(--white);
  right: -6px;
  top: -6px;
}

.header__menu--useravatar {
  border: 2px solid #edeef2;
  border-radius: 16px;
  padding: 2px;
}

.header__menu--icon-mobile {
  display: none;
}

/* cards section */

/* Here you can define styles how to change on mobile  */
@media screen and (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .header__menu--search {
    display: none;
  }

  .header__menu--logo {
    padding-left: 15px;
  }

  .header__menu--link {
    display: none;
  }

  .header__navbar {
    display: flex;
  }

  .header__menu--icon {
    margin-left: 59px;
  }

  .header__menu--useravatar {
    border: 2px solid var(--primary);
    margin-left: 12px;
  }

  .header__menu--divider-vertical {
    margin: 0 19px;
    border: 1px solid var(--grey-lightest);
    height: 32px;
    color: var(--grey);
  }

  .header__menu--icon-mobile {
    display: block;
    background: #edeef2;
    border-radius: 16px;
    padding: 14px;
    cursor: pointer;
    border: 1px solid var(--white);
  }

  .header__menu--icon-mobile:hover {
    border: 1px solid var(--primary);
  }
}
</style>
