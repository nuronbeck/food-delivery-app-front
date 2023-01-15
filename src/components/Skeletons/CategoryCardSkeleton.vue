<template>
  <div class="category-card-skeleton"></div>
</template>

<script>
export default {
  name: 'CategoryCardSkeleton',
}
</script>

<style lang="scss">
.category-card-skeleton {
  border-radius: 16px;
  background-color: $color-grey-lightest;
  width: 100%;
  min-height: 80px;
  animation-name: skeletonShimmer;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition: all 2s ease-in-out;
}

@keyframes skeletonShimmer {
  0% {
    background-color: $color-grey-lightest;
  }

  50% {
    background-color: $color-grey-light;
  }
  
  100% {
    background-color: $color-grey-lightest;
  }
}
</style>