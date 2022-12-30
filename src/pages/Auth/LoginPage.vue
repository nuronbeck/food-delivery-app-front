<template>
  <div class="login">
    <h1 class="login__name">Login</h1>
    <p class="login__text">
      Sign in with your data that you entered during your registration.
    </p>
    <!-- ========Base inputs========= -->
    <BaseInput
      label="Email"
      type="email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />

    <BaseInput
      class="login__baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)"
    />
    <!-- ============Base checkbox========= -->
    <BaseCheckbox
      class="login__baseCheckbox"
      label="Keep me logged in"
      :checked="formData.loginSaveInfo.keepMeLogin"
      @onChange="(value) => changeField('keepMeLogin', value)"
    />
    <!-- ===========Base button========== -->
    <BaseButton
      variant="primary"
      class="login__baseBtn"
      @onClick="login"
      :loading="isLoading"
    >
      Login
    </BaseButton>

    <router-link to="/auth/forgot-password" class="login__forgotLink"
      >Forgot password</router-link
    >

    <div class="login__sign">
      <p>
        Don`t have an account?<router-link to="/auth/sign" class="login__link">
          Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      isLoading: false,
      showPassword: false,
      formData: {
        email: "",
        password: "",
        loginSaveInfo: {
          keepMeLogin: false,
        },
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    showPasswordClick() {
      this.showPassword = !this.showPassword;
    },
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== "") {
        this.errors[propertyName] = "";
      }

      this.formData[propertyName] = value;
      this.formData.loginSaveInfo[propertyName] = value;
    },
    login() {
      // console.log(this.formData);
      this.isLoading = true;

      setTimeout(() => {
        this.errors.email = "* This email is not valid!";
        this.errors.password =
          "* Password should contain at least one character!";

        this.isLoading = false;
      }, 2500);
    },
  },
};
</script>

<style lang="scss">
/* FORM*/
.login {
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
  &__text {
    display: none;
  }

  &__baseInput {
    margin-bottom: 28px !important;
  }

  &__baseCheckbox {
    margin-bottom: 40px;
  }

  &__baseBtn {
    width: 100%;
    margin-bottom: 35px;
  }

  &__forgotLink {
    color: $color-primary;
    display: block;
    font-family: $base-font;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 110px;
    &:hover {
      color: $color-primary;
    }
  }

  &__sign {
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
  .login {
    transform: translateX(-50%) translateY(-40%);
    width: 95%;
    &__name {
      font-size: 60px;
    }
    &__text {
      display: block;
      color: $color-grey-dark;
      font-family: $base-font;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 20px;
      letter-spacing: 0.1px;
    }
    &__link {
      padding-bottom: 32px;
    }
  }
}
</style>