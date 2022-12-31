<template>
  <div :class="`base-spinner base-spinner__${variant}`"></div>
</template>

<script>
export default {
  name: 'BaseSpinner',
  props: {
    variant: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss">
.base-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;

  &__white {
    &:after {
      border: 2px solid $color-white !important;
      border-color: $color-white transparent $color-white transparent !important;
    }
  }

  &__primary {
    &:after {
      border: 2px solid $color-primary !important;
      border-color: $color-primary transparent $color-primary transparent !important;
    }
  }

  &__secondary {
    &:after {
      border: 2px solid $color-secondary !important;
      border-color: $color-secondary transparent $color-secondary transparent !important;
    }
  }
}

.base-spinner:after {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  margin: 2px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>