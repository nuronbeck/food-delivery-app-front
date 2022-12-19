<template>
  <section class="login">
    <div class="login_container">
      <LogoBlock />

      <div class="block">
        <div class="block_inner">
          <h2 class="block_title">Strengthen the Guci`an bond</h2>
          <div class="block_text">
            Connecting Alumni and of Govermment engineering college idukki to a
            next level
          </div>
          <div class="circle">
            <div class="circle_inner">
              <div class="circle_item"></div>
              <div class="circle_item active"></div>
              <div class="circle_item"></div>
              <div class="circle_item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style lang="scss">
/* DEFAULT*/
.login {
  margin: 0 auto;
  width: 100%;
  &_container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/*BLOCK_LIFT-SIDE*/
.block_left-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*BLOCK_RIGHT-SIDE*/
.block {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

  background-color: $color-primary;
  &_inner {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 0 auto;
  }
  &_title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;

    color: $color-white;
  }
  &_text {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;

    color: $color-white;
  }
}

.circle {
  margin: 54px 0;
  &_inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &_item {
    width: 8px;
    height: 8px;
    margin: 0 5px;

    opacity: 0.3;
    border-radius: 50%;
    background-color: $color-white;
  }
}

.active {
  opacity: 1;
}

.header__navbar {
  display: none;
}

@media screen and (max-width: $breakpoint-md) {
  .container {
    padding: 0 15px;
  }

  .header__menu {
    margin: 15px 0;
    width: 100%;
    &__navbar {
      display: block;
    }
  }

  .login_container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .block_right-side {
    display: none;
  }
}
</style>
