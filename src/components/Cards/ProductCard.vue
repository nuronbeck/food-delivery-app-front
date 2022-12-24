<template>
  <div class="card">
    <div class="card__image" :style="{
      'background-image':
        'url(' + require('@/assets/product/food4.jpg') + ')',
    }">
      <span v-if="featured" class="card__featured">{{ featured }}</span>
    </div>
    <div class="card__body">
      <div>
        <div class="card__title">{{ title }}</div>
        <div class="card__shopping-counter">
          <img src="@/assets/product/icons/shopping.svg" />
          <span v-if="counter" class="card__counter">{{ counter }}</span>
        </div>
      </div>
      <div class="card__text">
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
      type: Number,
      default: 0,
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

<style lang="scss">
.card {
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;

  &__image {
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

  &__featured {
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
    background-color: $color-primary;
  }

  &__body {
    padding: 16px;

    div {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__title {
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: $color-dark;
    margin-bottom: 6px;
  }

  &__shopping {
    &-counter {
      position: relative;

    }
  }

  &__counter {
    position: absolute;
    top: -12px;
    right: 0;
    font-family: "Nunito";
    font-size: 10px;
    line-height: 1;
    font-weight: bold;
    color: var(--white);
    background-color: $color-primary;
    padding: 3px;
    min-width: 14px;
    text-align: center;
    border-radius: 6px;
  }

  &__text {
    margin-bottom: 14px;

    p {
      font-family: "Nunito";
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      margin-left: 7px;
      color: $color-grey;
    }
  }

  &__tag--dot {
    width: 3px;
    height: 3px;
    background-color: var(--primary);
    border-radius: 50%;
    margin-left: 8px;
  }

  &__action {
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: $color-grey-dark;
    padding: 4px 10px;
    background: $color-grey-lightest;
    border-radius: 100px;

    img {
      margin-right: 8px;
    }
  }
}
</style>
