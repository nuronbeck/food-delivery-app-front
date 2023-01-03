<template>
  <div :class="`base-alert base-alert__${variant}`">
    <span class="base-alert__message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    message: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss">
.base-alert {
  padding: 16px 20px;
  width: 100%;
  border-radius: 4px;

  &__message {
    font-size: 14px;
    font-family: $base-font;
    font-weight: 400;
  }

  &__primary {
    color: $color-primary;
    background: $color-primary-light;
    border-left: 8px solid $color-primary;
  }

  &__secondary {
    color: $color-secondary;
    background: $color-secondary-light;
    border-left: 8px solid $color-secondary;
  }

  &__success {
    color: $color-green;
    background: $color-green-light;
    border-left: 8px solid $color-green;
  }

  &__danger {
    color: $color-error;
    background: $color-error-light;
    border-left: 8px solid $color-error;
  }

  &__warning {
    color: $color-yellow-dark;
    background: $color-yellow-light;
    border-left: 8px solid $color-yellow-dark;
  }
}
</style>