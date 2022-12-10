<template>
  <div :class="`deal-card deal-card__bg-${variant}`">
    <div class="deal-card__image">
      <img src="@/assets/deals/deal_icecream.png" alt="ice-cream" />
    </div>

    <div class="deal-card__content">
      <div class="deal-card__title">{{title}}</div>
      <div class="deal-card__offer">{{offer}}</div>
      <div class="deal-card__tag">{{tag}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealCard',
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    title: {
      type: String,
      default: ""
    },
    offer: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    },
  }
}
</script>

<style>
.deal-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-light);
  border-radius: 16px;
  padding-right: 24px;
}

.deal-card__bg-primary {
  background-color: var(--primary-light);
}

.deal-card__bg-secondary {
  background-color: var(--secondary-light);
}

.deal-card__bg-primary .deal-card__offer {
  color: var(--primary);
}

.deal-card__bg-secondary .deal-card__offer {
  color: var(--secondary);
}

.deal-card__image img {
  width: 100%;
  background-size: cover;
}

.deal-card__title {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #2B2B43;
}

.deal-card__offer {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.1px;
  padding-bottom: 36px;
}

.deal-card__tag {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--grey);
}
</style>