<template>
  <section>
    <div class="container">
      <!-- ========Deals page========== -->
      <div class="deals__list">
        <DealCard
          v-for="(dealCard, index) in dealsList"
          :key="`dealCard__${index}`"
          :variant="dealCard.variant"
          :title="dealCard.title"
          :offer="dealCard.offer"
          :tag="dealCard.tag"
        />
      </div>
      <!-- ===========Category page=========== -->
      <div class="category__list">
        <CategoryCard
          v-for="(categoryCard, index) in categoryList"
          :key="`categoryCard__${index}`"
          :title="categoryCard.title"
        />
      </div>

      <!-- ============Product card=========== -->

      <div class="products__list">
        <ProductCard
          v-for="(productCard, index) in productList"
          :key="`productCard__${index}`"
          :featured="productCard.featured"
          :title="productCard.title"
          :minTime="productCard.minTime"
          :minSum="productCard.minSum"
          :cardAction="productCard.cardAction"
          :counter="productCard.counter"
        />
      </div>
    </div>
  </section>
</template>

<script>
import dealsList from "../data/dealsList";
import categoryList from "../data/categoryList";
import productList from "../data/productList";

export default {
  name: "IndexPage",
  data() {
    return {
      dealsList,
      categoryList,
      productList,
    };
  },
};
</script>

<style lang="scss">
.deals {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 32px;
  }
}

.category {
  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
    margin-bottom: 40px;
  }
}

.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-bottom: 100px;
  }
}

@media screen and ( max-width: 768px) {
  .deals {
    &__list {
      grid-template-columns: 1fr;
    }
  }

  .category {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .products {
    &__list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
