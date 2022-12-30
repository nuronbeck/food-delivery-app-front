<template>
  <form action="#" class="login">
    <h1 class="login__name">Sign Up</h1>
    <BaseInput label="Email" placeholder="name@example.com" />
    <BaseInput label="First Name" placeholder="First Name" />
    <BaseInput label="List Name" placeholder="List Name" />
    <BaseInput label="Password" placeholder="min. 8 characters" />
    <BaseInput label="Repeat Password" placeholder="min. 8 characters" />

    <BaseButton variant="primary" class="login__btn"> Register </BaseButton>
    <p class="login__sign">
      Do you want to out ?
      <router-link to="/auth/login" class="login__link"> Login </router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "SignPage",
};
</script>
