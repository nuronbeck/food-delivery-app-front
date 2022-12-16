<template>
  <form action="#" class="auth_form">
    <h1 class="login_name">Reset password</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput
      label="Repeat Password"
      placeholder="min. 8 characters"
    ></BaseInput>
    <div>
      <BaseButton variant="primary" class="button_login"> Reset </BaseButton>
    </div>
    <p class="top_link-center">
      You already have account? Please
      <router-link to="/auth/login" class="link_login-name">Login</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "ForgotPasswordPage",
};
</script>
