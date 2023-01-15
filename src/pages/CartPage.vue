<template>
  <div class="container">
    <h2 class="cart-page__heading">Cart</h2>

    <div class="cart-page__content">
      <h3 class="cart-page__content-title">Products list</h3>
      
      <div>
        Content here...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPage"
};
</script>

<style lang="scss">
.cart-page {
  &__heading {
    color: $color-dark;
    font-size: 20px;
    font-family: $base-font;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.1px;
    margin-bottom: 16px;
  }

  &__content {
    border: 1px solid $color-grey-lightest;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 24px;
  }

  &__content-title {
    color: $color-dark;
    font-family: $base-font;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    margin-bottom: 16px;
  }
}
</style>
