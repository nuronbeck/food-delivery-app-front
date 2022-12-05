<template>
  <section class="login">
    <div class="login_container">
      <div class="block_left-side">
        <div class="auth_form">
          <h1 class="login_name">Login</h1>
          <label class="login_label" for="email">Email</label>
          <input
            class="login_input"
            placeholder="name@example.com"
            id="email"
            type="text"
            name="email"
          />
          <label class="login_label" for="password">Password</label>
          <input
            class="login_input"
            placeholder="min.8 characters"
            id="password"
            type="text"
            name="password"
          />
          <div class="chackbox">
            <input class="chackbox_sign" type="checkbox" name="checkbox" />
            <div class="chackbox_text">Keep me logged in</div>
          </div>
          <button class="button_login">Login</button>
          <router-link to="./forgot" class="button_forgot">Forgot password</router-link>
          <div class="sign">
            <p>
              Don`t have an account?<router-link to="./sign" class="sign_inner"> Sign up</router-link>
            </p>
          </div>
        </div>
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

<script>
export default {
  name: "LoginPage",
};
</script>

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

/* FORM*/
.auth_form {
  max-width: 350px;
  width: 100%;
}

.login_name {
  width: 100%;
  font-size: 32px;
  line-height: 82px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.1px;

  color: var(--dark);
}

.login_label {
  margin-bottom: 5px;
  width: 100%;
  display: block;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: var(--black);
}

.login_input {
  width: 100%;
  margin-bottom: 30px;
  padding-left: 10px;
  height: 44px;
  display: block;
  border: 1px solid var(--grey-light);
  border-radius: 8px;
}

.chackbox {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.chackbox_sign {
  margin-right: 12px;
  width: 20px;
  height: 20px;

  border: 2px solid var(--grey-light);
  border-radius: 4px;
}

.chackbox_text {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;

  color: var(--dark);
}

.button_login {
  width: 100%;
  margin-bottom: 35px;
  padding: 12px 16px;
  display: block;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: var(--white);
  border: 1px solid var(--primary);
  background-color: var(--primary);
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(78, 96, 255, 0.16);
  transition: background 0.25s linear, color 0.25s linear;
}

.button_login:hover {
  cursor:pointer;
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: var(--bluw-light);
}

.button_forgot {
  margin-bottom: 100px;
  width: 100%;
  display: block;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: var(--primary);
  text-decoration: none;
  border: 0;
  background-color: var(--white);
}

.button_forgot:hover {
  color: var(--primary);
  text-decoration: underline;
}

.sign {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--black);
  text-align: center;
}
.sign_inner {
  font-size: 14px;
  color: var(--primary);
  text-decoration: none;
}

.sign_inner:hover {
  text-decoration: underline;
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
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;

  color: var(--white);
}

.block_right--text {
  font-family: 'Nunito';
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
  .login_container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .block_right-side {
    display: none;
  }
}
</style>
