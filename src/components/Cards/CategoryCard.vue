<template>
    <a href="#" class="category">
        <img class="category__img" src="@/assets/category/pizza.png">
        <div class="category__name">{{ title }}</div>
    </a>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        title: {
            type: String,
            default: ""
        },
    }
}
</script>

<style lang="scss">
.category {
    height: 80px;
    border: 1px solid $color-grey-lightest;
    border-radius: 16px;
    background: $color-white;
    text-align: center;

    &:hover {
        cursor: pointer;
        border: 1px solid $color-primary;
        background-color: $color-grey-lightest;
    }

    &__img {
        margin: 10px 0;
        width: 24px;
        height: 24px;
    }

    &__name {
        font-family: $base-font;
        font-size: 13px;
        font-weight: 700;
        color: $color-grey-dark;
        line-height: 18px;
        letter-spacing: 0.1px;
    }
}
</style>