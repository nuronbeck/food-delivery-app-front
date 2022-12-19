<template>
  <form action="#" class="auth_form">
    <h1 class="login_name">Login</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>

    <div class="chackbox">
      <input class="chackbox_sign" type="" />
      <div class="chackbox_text">Keep me logged in</div>
    </div>

    <BaseButton variant="primary" class="button_login"> Login </BaseButton>

    <router-link to="/auth/forgot-password" class="forgot__icon"
      >Forgot password</router-link
    >

    <div class="top_link-center">
      <p>
        Don`t have an account?
        <router-link to="/auth/sign" class="link_login-name">
          Sign up</router-link
        >
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style lang="scss">
/* FORM*/
.auth_form {
  max-width: 350px;
  width: 100%;
}

.login_name {
  width: 100%;
  font-size: 32px;
  line-height: 40px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.1px;

  color: $color-dark;
}

.chackbox {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  &_sign {
    margin-right: 12px;
    width: 20px;
    height: 20px;

    border: 2px solid $color-grey-light;
    border-radius: 4px;
  }
  &_text {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;

    color: $color-grey-dark;
  }
}

.button_login {
  width: 100%;
  margin-bottom: 35px;
}

.forgot__icon {
  margin-bottom: 100px;
  width: 100%;
  display: block;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: $color-primary;

  border: 0;
  background-color: $color-white;
  :hover {
    color: $color-primary;
  }
}

.top_link-center {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: $color-grey-dark;
  text-align: center;
}

.link_login-name {
  font-size: 14px;
  color: $color-primary;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
