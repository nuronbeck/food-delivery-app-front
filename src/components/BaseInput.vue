<template>
  <div class="auth_form">
    <label class="login_label" for="email" {{ Label }}>Email</label>
    <input
      class="login_input"
      id="email"
      type="text"
      name="email"
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
