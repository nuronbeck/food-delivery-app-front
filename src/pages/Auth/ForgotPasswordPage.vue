<template>
  <form class="auth_form">
    <h1>Reset password</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>

    <div>
      <BaseButton variant="primary" class="button_login"> Reset </BaseButton>
    </div>

    <p>
      You already have account? Please
      <router-link to="/auth/login" class="button_forgot">login</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "ForgotPasswordPage",
};
</script>
