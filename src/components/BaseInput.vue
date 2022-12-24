<template>
  <div class="base-input">
    <label class="base-input__label" for="email">{{ label }}</label>
    
    <div :class="`base-input__wrapper ${!!error ? 'has-error' : ''}`" >
      <input
        class="base-input__input"
        :value="value"
        :type="type === 'password' ? showPassword ? 'text': 'password' : type"
        :placeholder="placeholder"
        @input="handleInputChange"
        required
      />

      <div
        v-if="type === 'password'"
        class="base-input__append"
      >
        <button
          v-if="showPassword"
          class="base-input__password-toggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye" />
        </button>

        <button
          v-else
          class="base-input__password-toggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye-slash" />
        </button>
      </div>
    </div>

    <div v-if="!!error" class="base-input__error">
      {{ error }}
    </div>
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
    value: {
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
    showPassword: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    }
  },
  methods: {
    togglePasswordShow(){
      this.$emit("onPasswordToggle");
    },
    handleInputChange(e){
      this.$emit("onInput", e.target.value);
    }
  }
}
</script>

<style lang="scss">
.base-input {
  width: 100%;
  padding: 1 16px 32px 0;
  margin-bottom: 12px;

  &__label {
    display: block;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-break: 16px;
    color: #545563;
    margin-bottom: 8px;
  }

  &__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;

    border: 1px solid #c7c8d2;
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;

    &.has-error {
      border: 1px solid $color-error;
    }
  }

  &__input {
    width: 100%;
    height: 44px;
    border: none;
    outline: none;
    padding: 12px 4px 12px 12px;
    letter-spacing: 0.1px;
    color: #2b2b43;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  &__append {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
  }

  &__password-toggle {
    color: $color-grey;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    background: unset;
    transition: color .25s ease-in-out;

    &:hover {
      color: $color-grey-dark;
    }

    &:focus-visible {
      outline: 2px solid $color-primary;
    }
  }

  &__error {
    color: $color-error;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 0 8px;
    margin-top: 4px;
  }
}
</style>
