<template>
  <div class="product__list">
    ProductCard
    ProductCard
    ProductCard
    ProductCard
    ProductCard
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.product__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr)
}
</style>