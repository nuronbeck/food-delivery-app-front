<template>
  <div class="input-box">
    <label class="login_label" for="email">{{ label }}</label>
    <input
      class="login_input"
      id="email"
      type="text"
      name="email"
      required
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style lang="scss">
.input-box {
  width: 100%;
  padding: 1 16px 32px 0;
}

.login_label {
  margin-bottom: 5px;
  width: 100%;
  display: block;
  font-family: "Nunito" sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: $color-grey-dark;
}

.login_input {
  width: 100%;
  margin-bottom: 30px;
  padding-left: 10px;
  height: 44px;
  display: block;
  border: 1px solid $color-grey-light;
  border-radius: 8px;
}
</style>
