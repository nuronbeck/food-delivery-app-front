<template>
  <form action="#" class="login">
    <h1 class="login__name">Reset password</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>
    <BaseInput
      label="Repeat Password"
      placeholder="min. 8 characters"
    ></BaseInput>
    <div>
      <BaseButton variant="primary" class="login__btn"> Reset </BaseButton>
    </div>
    <p class="login__sign">
      You already have account? Please
      <router-link to="/auth/login" class="login__link">Login</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "ForgotPasswordPage",
};
</script>
