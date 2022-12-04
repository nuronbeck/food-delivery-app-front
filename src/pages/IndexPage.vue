<template>
  <div class="container">

    <!-- =======Deals page======== -->

    <div class="deals">
      <div class="deal__right">
        <div class="deal__right-img">
          <img src="../assets/img/deals/ice.png" alt="ice-cream">
        </div>
        <div class="deal__right--content">
          <div class="deal-title">All deserts</div>
          <div class="deal-percentage deal-primary">20% OFF</div>
          <div class="deal-text">Deserty</div>
        </div>
      </div>

      <div class="deal__left">
        <div>
          <img src="../assets/img/deals/burger.png" alt="burger">
        </div>
        <div class="deal__left--content">
          <div class="deal-title">Big Burgers</div>
          <div class="deal-percentage deal-orange">49% OFF</div>
          <div class="deal-text">Fooddies</div>
        </div>
      </div>
    </div>

    <!-- =======Category page======= -->

    <section class="category">
      <div class="container">
        <div class="category__inner">
          <router-link to="./Cards/ProductCardPage.vue" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/pizza.png" alt="">
            </div>
            <div class="category__name">Pizza</div>
          </router-link>
          <a href="№" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/burger.png" alt="">
            </div>
            <div class="category__name">Burger</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/meat.png" alt="">
            </div>
            <div class="category__name">BBQ</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/sushi.png" alt="">
            </div>
            <div class="category__name">Sushi</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/broccoli.png" alt="">
            </div>
            <div class="category__name">Vegan</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="../assets/img/category/cake.png" alt="">
            </div>
            <div class="category__name">Desserts</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
/* =========Deals page atyle==========  */
.deals {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-bottom: 30px;
}

.deal__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F3F4FF;
  border-radius: 16px;
  padding-right: 24px;
}

.deal__left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF3ED;
  border-radius: 16px;
  padding-right: 24px;
}

.deals img {
  width: 100%;
  background-size: cover;
}

.deal-title {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #2B2B43;
}

.deal-text {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #83859C;
}

.deal-percentage {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.1px;
  padding-bottom: 36px;
}

.deal-primary {
  color: var(--primary);
}

.deal-orange {
  color: var(--orange);
}

/* ========Category page style============  */
.category {
  max-width: var(--breakpoint-desktop);
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
}

.category__inner {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
}

.category__item {
  height: 80px;
  border: 1px solid var(--grey-lightest);
  border-radius: 16px;
  background: var(--white);
  text-align: center;
  transition: background .25s linear, border .25s linear;
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
  font-size: 13px;
  font-style: 13px;
  font-weight: 700;
  color: var(--black);
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0.1px;
}

.category__name:hover {
  color: var(--bluw-light);
}


@media screen and (max-width: 768px) {
  .category__inner {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 15px;
  }

}

@media screen and (max-width: 1026px) {
  .deals {
    display: block;
  }

  .deal__right {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;

  }

  .deal__left {
    display: flex;
    flex-direction: column-reverse;
  }

  .deal-title {
    padding-top: 16px;
    text-align: center;
  }

  .deal-percentage {
    padding-bottom: 0;
  }

  .deal-text {
    text-align: center;
  }
}
</style>