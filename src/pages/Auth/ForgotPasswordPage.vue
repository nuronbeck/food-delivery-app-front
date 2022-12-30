<template>
  <form class="login" @submit.prevent>
    <h1 class="login__name">Reset password</h1>

    <BaseInput
      class="login__baseInput"
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    ></BaseInput>

    <div>
      <BaseButton
        variant="primary"
        class="login__baseBtn"
        @onClick="reset"
        :loading="isLoading"
      >
        Reset
      </BaseButton>
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
  data() {
    return {
      isLoading: false,
      formData: {
        email: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== "") {
        this.errors[propertyName] = "";
      }

      this.formData[propertyName] = value;
    },
    reset() {
      // console.log(this.formData);
      this.isLoading = true;

      setTimeout(() => {
        this.errors.email = "* This email is not valid!";

        this.isLoading = false;
      }, 2500);
    },
  },
};
</script>
