<template>
  <form class="auth_form">
    <h1 class="login_name">Login</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>

    <div class="chackbox">
      <input class="chackbox_sign" type="checkbox" name="checkbox" />
      <div class="chackbox_text">Keep me logged in</div>
    </div>

    <BaseButton variant="primary" class="button_login"> Login </BaseButton>

    <router-link to="/auth/forgot-password" class="button_forgot"
      >Forgot password</router-link
    >

    <div class="sign">
      <p>Don`t have an account?<a href="#" class="sign_inner"> Sign up</a></p>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
/* FORM*/
.auth_form {
  max-width: 350px;
  width: 100%;
}

.login_name {
  width: 100%;
  font-size: 32px;
  line-height: 82px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.1px;

  color: var(--dark);
}

.login_label {
  margin-bottom: 5px;
  width: 100%;
  display: block;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: var(--black);
}

.login_input {
  width: 100%;
  margin-bottom: 30px;
  padding-left: 10px;
  height: 44px;
  display: block;
  border: 1px solid var(--grey-light);
  border-radius: 8px;
}

.chackbox {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.chackbox_sign {
  margin-right: 12px;
  width: 20px;
  height: 20px;

  border: 2px solid var(--grey-light);
  border-radius: 4px;
}

.chackbox_text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;

  color: var(--dark);
}

.button_login {
  width: 100%;
  margin-bottom: 35px;
}

.button_forgot {
  margin-bottom: 100px;
  width: 100%;
  display: block;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: var(--primary);

  border: 0;
  background-color: var(--white);
}

.button_forgot:hover {
  color: var(--primary);
}

.sign {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--black);
  text-align: center;
}

.sign_inner {
  font-size: 14px;
  color: var(--primary);
}
</style>
