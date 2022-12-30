<template>
  <div class="loginPage">
    <LogoBlock />

    <div class="loginPage__right">
      <div class="loginPage__right_title">
        <h2>Strengthen the Guci`an bond</h2>
      </div>
      <div class="loginPage__right_text">
        <p>Connecting Alumni and students of Government engineering college Idukki to a next level</p>
      </div>
      <div class="loginPage__right_circle">
        <span></span>
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* DEFAULT*/
.loginPage {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    background-color: $color-primary;

    &_title {
      font-family: $base-font;
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 16px;
      line-height: 42px;
      color: $color-white;

    }

    &_text {
      font-family: $base-font;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 40px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: $color-white;
    }

    &_circle {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;

      span {
        width: 8px;
        height: 8px;
        margin: 0 5px;
        opacity: 0.3;
        border-radius: 50%;
        background-color: $color-white;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}





@media screen and (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .header__menu {
    margin: 15px 0;
    width: 100%;
  }

  .header__navbar {
    display: block;
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
