<template>
  <div class="input-box">
    <label for="email">{{ label }}</label>
    <input id="email" :type="type" name="email" required :placeholder="placeholder" />
    <a @click="showPassword()" v-if="visibility == 'password'">
      <font-awesome-icon icon="fa-light fa-eye" />
    </a>

    <a @click="hidePassword()" v-if="visibility == 'text'">
      <font-awesome-icon icon="fa-light fa-eye-slash" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibility: "password"
    }
  },
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
    }
  }
}
</script>

<style lang="scss">
.input-box {
  width: 100%;
  padding: 1 16px 32px 0;

  label {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-break: 16px;
    color: #545563;
  }

  input {
    width: 100%;
    height: 44px;
    border: 1px solid #c7c8d2;
    border-radius: 8px;
    padding: 12px;
    letter-spacing: 0.1px;
    color: #2b2b43;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
  }
}
</style>
