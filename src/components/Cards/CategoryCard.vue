<template>
    <a href="#" class="category__item">
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

<style>
.category__item {
    height: 80px;
    border: 1px solid var(--grey-lightest);
    border-radius: 16px;
    background: var(--white);
    text-align: center;
}

.category__item:hover {
    border: 1px solid var(--primary);
    cursor: pointer;
    background-color: var(--grey-lightest);
}

.category__img {
    margin: 10px 0;
    width: 24px;
    height: 24px;
}

.category__name {
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--grey-dark);
    line-height: 18px;
    letter-spacing: 0.1px;
}
</style>