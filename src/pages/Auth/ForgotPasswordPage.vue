<template>
  <form class="auth_form">
    <h1 class="login_name">Reset password</h1>

    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseButton variant="primary" class="button_login"> Reset </BaseButton>

    <p>
      You already have account? Please
      <router-link to="../auth/login" class="button_forgot">Login</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "ForgotPasswordPage",
};
</script>
