<template>
  <button :class="'base-btn base-btn-' + variant" :disabled="disabled" @click="handleClick">
    <BaseSpinner v-if="loading" />
    <slot v-else />
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
    loading: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleClick() {
      this.$emit('onClick')
    }
  }
};
</script>

<style lang="scss">
.base-btn {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-family: $base-font;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
  color: $color-white;
  background-color: $color-primary;
  border: none;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  }

  &-primary {
    background-color: $color-primary;
    border: none;
    color: $color-white;

    &-outline {
      background-color: $color-white;
      border: 1px solid $color-primary;
      box-shadow: none;
      color: $color-primary;
    }
  }

  &-danger {
    background-color: $color-error;
    border: none;
    color: $color-white;

    &-outline {
      background-color: $color-white;
      border: 1px solid $color-error;
      box-shadow: none;
      color: $color-error;
    }
  }

  &-none {
    cursor: pointer;
    border: none;
    background: none;
    font-family: $base-font;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin-left: 32px;
    color: $color-grey;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: $color-white;
    border: 1px solid $color-grey;
    box-shadow: none;
    color: $color-grey;
  }
}
</style>
