<template>
  <div class="input-box">
    <label for="email">{{ label }}</label>
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

<style>
.input-box {
  width: 100%;
  padding: 1 10px 12px 0;
}

.input-box label {
  font-family: "Nunito" sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-break: 16px;
  color: #545563;
}

.input-box input {
  width: 100%;
  height: 44px;
  border: 1px solid #c7c8d2;
  border-radius: 8px;
  padding: 12px;
  letter-spacing: 0.1px;
  color: #2b2b43;
  font-family: "Nunito" sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 4px;
}
</style>
