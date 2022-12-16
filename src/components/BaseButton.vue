<template>
  <button :class="'btn btn-' + variant" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style>
.btn {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-family: "Nunito";
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--primary);
  border: none;
  transition: box-shadow 0.15s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
}

.btn-primary {
  color: var(--white);
  background-color: var(--primary);
  border: none;
}
.btn-primary-outline {
  color: var(--primary);
  background-color: var(--white);
  border: 1px solid var(--primary);
  box-shadow: none;
}

.btn-danger {
  color: var(--white);
  background-color: var(--error);
  border: none;
}

.btn-danger-outline {
  color: var(--error);
  background-color: var(--white);
  border: 1px solid var(--error);
  box-shadow: none;
}
.btn-outline-none {
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-left: 32px;
  color: var(--grey);
}

.btn:disabled {
  cursor: not-allowed;
  color: var(--grey);
  background-color: var(--white);
  border: 1px solid var(--grey);
  box-shadow: none;
}
</style>
