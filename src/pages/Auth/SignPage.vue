<template>
  <form action="#" class="auth_form">
    <h1 class="login_name">Sign Up</h1>
    <BaseInput label="Email" placeholder="name@example.com"></BaseInput>
    <BaseInput label="First Name" placeholder="First Name"></BaseInput>
    <BaseInput label="List Name" placeholder="List Name"></BaseInput>
    <BaseInput label="Password" placeholder="min. 8 characters"></BaseInput>

    <BaseButton variant="primary" class="button_login"> Register </BaseButton>
    <p class="top_link-center">
      Do you want to out ?
      <router-link to="/auth/login" class="link_login-name">
        Login
      </router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "SignPage",
};
</script>
