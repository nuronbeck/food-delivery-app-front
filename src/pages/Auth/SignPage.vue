<template>
  <form class="signUp" @submit.prevent>
    <h1 class="signUp__name">Sign Up</h1>
    <BaseNotification />
    <div class="signUp__userInfo">
      <BaseInput
        label="First Name"
        placeholder="First Name"
        :value="formData.firstName"
        :error="errors.firstName"
        @onInput="(value) => changeField('firstName', value)"
      />
      <BaseInput
        label="Last Name"
        placeholder="Last Name"
        :value="formData.lastName"
        :error="errors.lastName"
        @onInput="(value) => changeField('lastName', value)"
      />
    </div>
    <BaseInput
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />
    <BaseInput
      label="Phone number"
      placeholder="+998 (99) 324-42-91"
      :value="formData.phoneNumber"
      :error="errors.phoneNumber"
      @onInput="(value) => changeField('phoneNumber', value)"
    />
    <BaseInput
      class="signUp__baseInput"
      label="Password"
      placeholder="min. 8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)"
    />

    <BaseButton
      variant="primary"
      class="signUp__baseBtn"
      @onClick="register"
      :loading="isLoading"
    >
      Register
    </BaseButton>
    <p class="signUp__text">
      Do you want to out ?
      <router-link to="/auth/login" class="signUp__link"> Login </router-link>
    </p>
  </form>
</template>

<script>
import client from "../../api";

export default {

  name: "SignPage",
  data() {
    return {
      isLoading: false,
      showPassword: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
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
    },
    register() {
      this.isLoading = true;

        client.post('/api/auth/sign-up', this.formData)
        .then(response => {
       this.formData[propertyName] = response.data.data.errors;
      console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        })
    },
  },
};
</script>


<style lang="scss">
.signUp {
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  &__name {
    color: $color-dark;
    font-size: 32px;
    font-family: $base-font;
    margin-bottom: 40px;
    font-weight: 700;
    letter-spacing: 0.1px;
  }
  &__userInfo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 10px;
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
  .signUp {
    width: 95%;
  }
}
</style>