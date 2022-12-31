<template>
  <div class="base-checkbox__wrapper">
    <div :class="`base-checkbox__checkbox ${checked ? 'isChecked' : ''}`" @click="toggleCheckbox">
      <font-awesome-icon class="base-checkbox__icon" icon="fa-solid fa-check" />
    </div>

    <div v-if="label" class="base-checkbox__label" @click="toggleCheckbox">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    toggleCheckbox() {
      this.$emit('onChange', !this.checked)
    }
  }
};
</script>

<style lang="scss">
.base-checkbox {
  &__wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 12px;
  }

  &__label {
    color: $color-dark;
    font-family: $base-font;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }

  &__icon {
    color: $color-white;
    display: none;
  }

  &__checkbox {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $color-grey-light;
    border-radius: 4px;

    &.isChecked {
      background-color: $color-primary;
      border: 2px solid $color-primary;

      .base-checkbox__icon {
        display: block;
      }
    }
  }

  &__label,
  &__checkbox {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
