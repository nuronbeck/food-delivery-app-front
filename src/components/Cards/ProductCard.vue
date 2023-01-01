<template>
  <div class="card">
    <div
      class="card__image"
      :style="{
        'background-image':
          'url(' + image + ')',
      }"
    >
      <span v-if="featured" class="card__featured">{{ featured }}</span>
    </div>
    <div class="card__body">
      <div>
        <div class="card__title">{{ title }}</div>
        <div class="card__count">
          <img src="@/assets/product/icons/shopping.svg" />
          <span v-if="counter" class="card__count-counter">{{ counter }}</span>
        </div>
      </div>
      <div class="card__text">
        <img src="@/assets/product/icons/clock.svg" />
        <p>{{ minTime }}</p>
        <span class="card__tag-dot">{{ cardTextDot }}</span>
        <p>{{ minSum }}</p>
      </div>
      <div class="card__tags">
        <div
          class="card__tag"
          v-for="tag in tags" :key="`productTag__${tag}`"
        >
          <img src="@/assets/product/icons/burger.svg" v-if="false"/>
          {{tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    image: {
      type: String,
      default: 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
    },
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
    minTime: {
      type: String,
      default: "",
    },
    minSum: {
      type: String,
      default: "",
    },
    cardTextDot: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: () => [],
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
    border-radius: 16px 16px 0 0;
    background-size: cover;
  }

  &__featured {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 8px 16px;
    font-family: $base-font;
    font-weight: bold;
    font-size: 11px;
    color: $color-white;
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
    color: $color-dark;
    font-family: $base-font;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &__count {
    position: relative;
    cursor: pointer;
    &-counter {
      color: $color-white;
      position: absolute;
      top: -12px;
      right: 0;
      font-family: $base-font;
      font-size: 10px;
      line-height: 1;
      font-weight: bold;
      background-color: $color-primary;
      padding: 3px;
      min-width: 14px;
      text-align: center;
      border-radius: 6px;
    }
  }

  &__text {
    margin-bottom: 14px;

    p {
      color: $color-grey;
      font-family: $base-font;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      margin-left: 7px;
    }
  }

  &__tag {
    &-dot {
      width: 3px;
      height: 3px;
      background-color: $color-primary;
      border-radius: 50%;
      margin-left: 8px;
    }
  }

  &__tags {
    display: grid;
    grid-template-columns: auto;
    gap: 6px;
  }
 
  &__tag {
    color: $color-grey-dark;
    cursor: pointer;
    font-family: $base-font;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 4px 10px;
    background: $color-grey-lightest;
    border-radius: 100px;

    img {
      margin-right: 8px;
    }
  }
}
</style>
