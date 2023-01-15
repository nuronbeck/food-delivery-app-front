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

      <div class="category__list" v-if="isLoading">
        <CategoryCardSkeleton
          v-for="(_, index) in Array.from({ length: 6 }).fill(0)"
          :key="`categorySkeleton__${index}`"
        />
      </div>

      <div class="category__list" v-if="!isLoading">
        <CategoryCard
          v-for="(categoryCard, index) in categoryList"
          :key="`categoryCard__${index}`"
          :title="categoryCard.name"
          :image="categoryCard.image"
          :selected="categoryCard.id === selectedCategory"
          @onClick="() => clickCategory(categoryCard)"
        />
      </div>

      <!-- ============Product card=========== -->
      <div class="products__list" v-if="isLoading">
        <ProductCardSkeleton
          v-for="(_, index) in Array.from({ length: 6 }).fill(0)"
          :key="`productSkeleton__${index}`"
        />
      </div>

      <div class="products__list" v-if="!isLoading">
        <ProductCard
          v-for="(product) in productList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :featured="product.featured"
          :title="product.name"
          :minTime="product.deliveryTime"
          :minSum="product.minimalOrder"
          :tags="product.tags"
        />
      </div>
    </div>
  </section>
</template>

<script>
import dealsList from "../data/dealsList";

import client from "../api"

export default {
  name: "IndexPage",
  data() {
    return {
      isLoading: false,
      dealsList,
      categoryList: [],
      productList: [],
      selectedCategory: null
    };
  },
  methods: {
    loadData(){
      this.isLoading = true

      const promise1 = client.get('/api/products')
      .then((response) => {
        this.productList = response.data.data;
      })

      const promise2 = client.get('/api/categories')
      .then(({ data: { data = [] } = {} }) => {
        this.categoryList = data;
      })

      Promise.all([promise1, promise2])
      .finally(() => {
        this.isLoading = false
      })
    },
    clickCategory(categoryObject){
      const { id } = categoryObject;
      
      if(this.selectedCategory === id){
        this.selectedCategory = null
      } else {
        this.selectedCategory = id
      }
    }
  },
  mounted(){
    this.loadData();
  }
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
