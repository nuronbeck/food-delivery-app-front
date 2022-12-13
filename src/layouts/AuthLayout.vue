<template>
  <section class="login">
    <div class="login_container">
      <div class="block_left-side">
        <router-view></router-view>
      </div>
      
      <div class="block_right-side">
        <div class="block_right-inner">
          <h2 class="block_right--title">Strengthen the Guci`an bond</h2>
          <div class="block_right--text">
            Connecting Alumni and of Govermment engineering college idukki to a
            next level
          </div>
          <div class="circle">
            <div class="circle_inner">
              <div class="circle_item"></div>
              <div class="circle_item active"></div>
              <div class="circle_item"></div>
              <div class="circle_item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* DEFAULT*/
.login {
  margin: 0 auto;
  width: 100%;
}

.login_container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/*BLOCK_LIFT-SIDE*/
.block_left-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*BLOCK_RIGHT-SIDE*/
.block_right-side {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

  background-color: var(--primary);
}

.block_right-inner {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;
}

.block_right--title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;

  color: var(--white);
}

.block_right--text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;

  color: var(--white);
}

.circle {
  margin: 54px 0;
}

.circle_inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.circle_item {
  width: 8px;
  height: 8px;
  margin: 0 5px;

  opacity: 0.3;
  border-radius: 50%;
  background-color: var(--white);
}

.active {
  opacity: 1;
}

.header__navbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .header__menu {
    margin: 15px 0;
    width: 100%;
  }

  .header__navbar {
    display: block;
  }

  .login_container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .block_right-side {
    display: none;
  }
}
</style>
