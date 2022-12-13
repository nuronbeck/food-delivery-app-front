<template>
  <div>
    <h1>Reset password</h1>

    <div>
      <BaseButton variant="primary">
        Reset
      </BaseButton>
    </div>

    <p>
      You already have account? Please <router-link to="/auth/login" class="button_forgot">login</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: "ForgotPasswordPage"
}
</script>