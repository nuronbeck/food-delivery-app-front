<template>
  <section>
    <div class="container">
      <div class="deals-list">
        <DealCard
          v-for="(dealCard, index) in dealsList"
          :key="`dealCard__${index}`"
          :variant="dealCard.variant"
          :title="dealCard.title"
          :offer="dealCard.offer"
          :tag="dealCard.tag"
        />
      </div>
    </div>
  </section>
</template>

<script>
import dealsList from "../data/dealsList"

export default {
  name: 'IndexPage',
  data(){
    return {
      dealsList
    }
  }
}
</script>

<style>
.deals-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

@media screen and (max-width: 768px){
  .deals-list {
    grid-template-columns: 1fr;
  }
}
</style>