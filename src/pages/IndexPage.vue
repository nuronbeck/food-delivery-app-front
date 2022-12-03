<template>

  <div>

    <!-- =======Header page======= -->
    <header class="header__menu">
      <div class="container">
        <div class="header__navbar">
          <div class="header__menu--left-side">
            <a href="./index.html">
              <img class="header__menu--logo" src="@/components/assets/header-img/main_logo.svg">
            </a>

            <div class="header__menu--search">
              <input class="header__menu--search-input" type="text" placeholder="Search " />
              <i class="header__menu--search-icon fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div class="header__menu--right-side">
            <nav class="header__menu--link">
              <a class="menu_link" href="#">Restaurants</a>
              <a class="menu_link" href="#">Deals</a>
              <span class="header__menu--divider-vertical"></span>
              <a class="menu_link active" href="#">My orders</a>
            </nav>
            <div class="header__menu--icon">
              <a href="#">
                <img class="header__menu--icon-item" src="@/components/assets/header-img/shopping bag.svg">
              </a>
              <span class="header__menu--icon-number">4</span>
            </div>
            <a href="./account.html">
              <img class="header__menu--useravatar" src="@/components/assets/header-img/useravatar.svg" alt="img">
            </a>
            <span class="header__menu--divider-vertical"></span>
            <img class="header__menu--icon-mobile" src="@/components/assets/header-img/menu.svg" alt="img">
          </div>
        </div>
      </div>
    </header>

    <!-- =========Deals page========= -->
    <div class="container">
      <div class="deals">
        <div class="deal__right">
          <div class="deal__right-img">
            <img src="@/components/assets/deals-img/ice.png" alt="Ice img">
          </div>
          <div class="deal__right--content">
            <div class="deal-title">All deserts</div>
            <div class="deal-percentage deal-primary">20% OFF</div>
            <div class="deal-text">Deserty</div>
          </div>
        </div>

        <div class="deal__left">
          <div>
            <img src="@/components/assets/deals-img/burger.png" alt="Burger img">
          </div>
          <div class="deal__left--content">
            <div class="deal-title">Big Burgers</div>
            <div class="deal-percentage deal-orange">49% OFF</div>
            <div class="deal-text">Fooddies</div>
          </div>
        </div>
      </div>
    </div>

    <!-- =======Category page=========== -->
    <section class="category">
      <div class="container">
        <div class="category__inner">
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/pizza.png" alt="Pizza img">
            </div>
            <div class="category__name">Pizza</div>
          </a>
          <a href="№" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/burger.png" alt="Burger img">
            </div>
            <div class="category__name">Burger</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/meat.png" alt="Meat img">
            </div>
            <div class="category__name">BBQ</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/sushi.png" alt="Sushi img">
            </div>
            <div class="category__name">Sushi</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/broccoli.png" alt='Broccoli img'>
            </div>
            <div class="category__name">Vegan</div>
          </a>
          <a href="#" class="category__item">
            <div class="category__photo">
              <img class="category__img" src="@/components/assets/category-img/cake.png" alt="Cake img">
            </div>
            <div class="category__name">Desserts</div>
          </a>
        </div>
      </div>
    </section>

    <!-- =======Product Card============ -->
    <div class="container">
      <section class="products__list">
        <div class="product__card">
          <div class="card__preview" style="background-image: url(@/components/assets/product-img/img.jpg);">
            <span class="card__preview--badge">Featured</span>
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product__card">
          <div class="card__preview" style="background-image: url(@/components/assets/product-img/food1.jpg);">
            <span class="card__preview--badge">Featured</span>
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product__card">
          <div class="card__preview" style="background-image: url(@/components/assets/product-img/food2.jpg);">
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product__card">
          <div class="card__preview" style="background-image: url(@/components/assets/product-img/food3.jpg);">
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product__card">
          <div class="card__preview" style="background-image: url(@/components/assets/product-img/food4.jpg);">
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product__card">
          <div class="card__preview" style="background-image: url(../components/assets/product-img/food5.jpg)">
          </div>
          <div class="card__content">
            <div class="card__content-left">
              <div class="card__content--title">Burgers & Pizza</div>
              <div class="card__content--info">
                <div class="card__content--cook-time">
                  <img src="../components/assets/product-img/icons/clock.svg">
                  123
                </div>

                <span class="card__content--tag-dot"></span>

                <div class="card__content--price">
                  $24 min sum
                </div>
              </div>
              <div class="card__content--hashtags">
                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/burger.svg">
                  Burger
                </span>

                <span class="card__content--hashtag">
                  <img src="../components/assets/product-img/icons/pizza.svg">
                  Pizza
                </span>
              </div>
            </div>
            <div class="card__content-right">
              <div class="card__content--bag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331"
                    stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="card__content--bag-count">2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>


</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
/* =========Header page style============= */

.header__menu {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-bottom: 1px solid var(--primary-light);
  margin-bottom: 16px;
}

.header__menu--left-side {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header__menu--logo {
  width: 79px;
  height: 40px;
}

.header__menu--search {
  position: relative;
  margin-left: 48px;
}

.header__menu--search-input {
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
  background-color: var(--grey-lightest);
  padding: 10px 12px;
  padding-right: calc((12px * 2) + 16px);
  border-radius: 12px;
  border: none;
  outline-color: var(--primary);
  height: 40px;
  min-width: 224px;
  box-sizing: border-box;
}

.header__menu--search-icon {
  position: absolute;
  color: var(--grey);
  width: 16px;
  height: 16px;
  top: calc((40px - 16px) / 2);
  right: calc((40px - 16px) / 2);
}

/*  Here you can define styles how to create menu right side  */

.header__menu--right-side {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__menu--link {
  display: flex;
  align-items: center;
}

.menu_link {
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
  list-style: none;
  margin: 0 28px;
}

.menu_link:hover {
  color: var(--primary);
  transition: .5s;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__menu--divider-vertical {
  height: 32px;
  border-right: 1px solid var(--grey-lightest);
}

.header__menu--icon {
  position: relative;
  margin-right: 12px;
}

.header__menu--icon-item {
  background-color: var(--primary-light);
  padding: 16px;
  border-radius: 16px;
}

.header__menu--icon-number {
  position: absolute;
  background-color: #4E60FF;
  border-radius: 8px;
  padding: 2px 6px;
  color: var(--white);
  right: -6px;
  top: -6px;
}

.header__menu--useravatar {
  border: 2px solid #EDEEF2;
  border-radius: 16px;
  padding: 2px;
}

.header__menu--icon-mobile {
  display: none;
}


/* ==========Deals page style=============== */
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


/* =======Category Page style======== */
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

/* =======Product page style=========== */
.products__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.product__card {
  border: 1px solid var(--grey-lightest);
  border-radius: 16px;
}

.card__preview {
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

.card__preview--badge {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 8px 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 11px;
  color: var(--white);
  text-transform: uppercase;
  border-radius: 0 16px;
  background-color: var(--primary);
}

.card__content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
}

.card__content--title {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: var(--dark);
  margin-bottom: 6px;
}

.card__content--info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 14px;
}

.card__content--cook-time,
.card__content--price {
  display: inline-block;
  margin-right: 8px;
  font-size: 12px;
  font-family: 'Nunito', sans-serif;
  line-height: 16px;
  color: var(--grey);
}

.card__content--tag-dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 50%;
  margin-right: 8px;
}

.card__content--hashtags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.card__content--hashtag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  border-radius: 100px;
  color: var(--grey-darker);
  background-color: var(--grey-lightest);
  margin-right: 8px;
}

.card__content--hashtag img {
  width: 12px;
  height: 12px;
  margin-right: 8px;
}

.card__content--bag {
  position: relative;
}

.card__content--bag svg {
  width: 20px;
  height: 20px;
}

.card__content--bag-count {
  position: absolute;
  top: -12px;
  right: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 10px;
  line-height: 1;
  font-weight: bold;
  color: var(--white);
  background-color: var(--primary);
  padding: 2px;
  min-width: 14px;
  text-align: center;
  border-radius: 5px;
}

/* ====Mobile  breakpoint 768px========*/
@media screen and (max-width: 768px) {
  .header__menu--search {
    display: none;
  }

  .header__menu--logo {
    padding-left: 15px;
  }

  .header__menu--link {
    display: none;
  }

  .header__navbar {
    display: flex;
  }

  .header__menu--icon {
    margin-left: 59px;
  }

  .header__menu--useravatar {
    border: 2px solid var(--primary);
    margin-left: 12px;
  }

  .header__menu--divider-vertical {
    margin: 0 19px;
    border: 1px solid var(--grey-lightest);
    height: 32px;
    color: var(--grey);
  }

  .header__menu--icon-mobile {
    display: block;
    background: #EDEEF2;
    border-radius: 16px;
    padding: 14px;
    cursor: pointer;
    border: 1px solid var(--white);
  }

  .header__menu--icon-mobile:hover {
    border: 1px solid var(--primary);
  }

  .category__inner {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 15px;
  }


  /* Products list mobile      */
  .products__list {
    grid-template-columns: 1fr;
  }
}

/* ====Tablet brakpoint  */
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