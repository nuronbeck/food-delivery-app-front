<template>
  <form class="forgotPassword" @submit.prevent>
    <h1 class="forgotPassword__name">Reset password</h1>

    <BaseInput
      class="forgotPassword__baseInput"
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    ></BaseInput>

    <div>
      <BaseButton
        variant="primary"
        class="forgotPassword__baseBtn"
        @onClick="reset"
        :loading="isLoading"
      >
        Reset
      </BaseButton>
    </div>
    <p class="forgotPassword__text">
      You already have account? Please
      <router-link to="/auth/login" class="forgotPassword__link">Login</router-link>
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


<style lang="scss">
.forgotPassword{
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

   &__name {
    color: $color-dark;
    font-size: 32px;
    line-height: 82px;
    font-family: $base-font;
    font-weight: 700;
    letter-spacing: 0.1px;
  }
  &__baseInput {
    margin-bottom: 28px !important;
  }
  &__baseBtn {
    width: 100%;
    margin-bottom: 35px;
  }
  &__text {
    color: $color-dark;
    font-family: $base-font;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  &__link {
    font-size: 14px;
    color: $color-primary;
  }
}

@media screen and (max-width: 768px) {
  .forgotPassword{
    width: 95%;
  }
}
</style>