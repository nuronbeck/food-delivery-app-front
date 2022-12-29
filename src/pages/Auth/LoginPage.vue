<template>
  <div class="login">
    <h1 class="login__name">Login</h1>

    <BaseInput label="Email" type="email" placeholder="name@example.com" :value="formData.email" :error="errors.email"
      @onInput="(value) => changeField('email', value)" />

    <BaseInput label="Password" type="password" placeholder="min.8 characters" :value="formData.password"
      :showPassword="showPassword" :error="errors.password" @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)" />
      

    <BaseButton variant="primary" class="login__btn" @onClick="login" :loading="isLoading">
      Login
    </BaseButton>

    <router-link to="/auth/forgot-password" class="login__forgotLink">Forgot password</router-link>

    <div class="login__sign">
      <p>Don`t have an account?<router-link to="/auth/sign" class="login__link"> Sign up</router-link></p>
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
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    showPasswordClick() {
      this.showPassword = !this.showPassword
    },
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== '') {
        this.errors[propertyName] = ''
      }

      this.formData[propertyName] = value
    },
    login() {
      this.isLoading = true;

      setTimeout(() => {
        this.errors.email= '* This email is not valid!'
        this.errors.password= '* Password should contain at least one character!'

        this.isLoading = false;
      }, 2500);
    }
  }
};
</script>

<style lang="scss">
/* FORM*/
.login {
  max-width: 350px;
  width: 100%;

  &__name {
    width: 100%;
    font-size: 32px;
    line-height: 82px;
    font-family: $base-font;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.1px;
    color: $color-dark;
  }

  &__btn {
    width: 100%;
    margin-bottom: 35px;
  }

  &__forgotLink {
    margin-bottom: 100px;
    width: 100%;
    display: block;
    font-family: $base-font;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: $color-primary;
    border: 0;
    background-color: $color-white;
    &:hover {
      color: $color-primary;
    }
  }

  &__sign {
    font-family: $base-font;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark;
    text-align: center;
  }

  &__link {
    font-size: 14px;
    color: $color-primary;
  }
}
</style>