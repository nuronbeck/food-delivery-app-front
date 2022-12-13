<template>
  <div class="card">
    <div
      class="card__image"
      :style="{
        'background-image':
          'url(' + require('@/assets/product/food4.jpg') + ')',
      }"
    >
      <span v-if="featured" class="card__featured">{{ featured }}</span>
    </div>
    <div class="card__body">
      <div>
        <div class="card__title">{{ title }}</div>
        <div class="card__shopping--counter">
          <img src="@/assets/product/icons/shopping.svg" />
          <span v-if="counter" class="shopping-counter">{{ counter }}</span>
        </div>
      </div>
      <div card__text>
        <img src="@/assets/product/icons/clock.svg" />
        <p>{{ text1 }}</p>
        <span class="card__tag--dot">{{ cardTextDot }}</span>
        <p>{{ text2 }}</p>
      </div>
      <div>
        <div class="card__action">
          <img src="@/assets/product/icons/burger.svg" />
          {{ cardAction }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    featured: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    counter: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    },
    cardTextDot: {
      type: String,
      default: "",
    },
    cardAction: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.card {
  border: 1px solid var(--grey-lightest);
  border-radius: 16px;
}

.card__image {
  position: relative;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.card__featured {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 8px 16px;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 11px;
  color: var(--white);
  text-transform: uppercase;
  border-radius: 0 16px;
  background-color: var(--primary);
}

.card__body {
  padding: 16px;
}

.card__body div {
  display: flex;
  align-items: center;
}

.card__body div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.card__title {
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: var(--dark);
  margin-bottom: 6px;
}

.card__shopping--counter {
  position: relative;
}

.card__shopping--counter img {
  margin-right: 10px;
}

.shopping-counter {
  position: absolute;
  top: -12px;
  right: 0;
  font-family: "Nunito";
  font-size: 10px;
  line-height: 1;
  font-weight: bold;
  color: var(--white);
  background-color: var(--primary);
  padding: 3px;
  min-width: 14px;
  text-align: center;
  border-radius: 6px;
}

.card__body p {
  font-family: "Nunito";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-left: 7px;
  color: var(--grey);
}

.card__tag--dot {
  width: 3px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 50%;
  margin-left: 8px;
}

.card__action {
  cursor: pointer;
  font-family: "Nunito";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--grey-dark);
  padding: 4px 10px;
  background: var(--grey-lightest);
  border-radius: 100px;
}

.card__action img {
  margin-right: 8px;
}
</style>
