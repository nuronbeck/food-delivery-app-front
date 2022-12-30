<template>
  <form action="#" class="login">
    <h1 class="login__name">Reset password</h1>
    
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>

    <div>
      <BaseButton variant="primary" class="login__baseBtn"> Reset </BaseButton>
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
