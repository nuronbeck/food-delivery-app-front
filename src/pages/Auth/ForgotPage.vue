<template>
  <div class="forgot__page">
    <div class="container">
      <div class="forgot__page--inner">
        <h1 class="forgot__page--title">Reset your password</h1>
        <p class="forgot_page--text">
          Please provide the email address you used when you signed up for your
          Udacity account
        </p>
        <input
          class="forgot__page--input"
          type="text"
          placeholder="Email Address......"
        />
        <button class="forgot__page--button">
          Send email <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPage",
};
</script>

<style>
.forgot__page {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--grey-lightest);
}

.forgot__page--inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--white);
  padding: 50px;
  border-radius: 10px;
}

.forgot__page--title {
  font-family: sans-serif;
  margin-bottom: 15px;
}

.forgot_page--text {
  font-family: sans-serif;
  font-size: 15px;
  margin-bottom: 25px;
}
.forgot__page--input {
  padding: 9px 20px;
  width: 100%;
  margin-bottom: 25px;
}

.forgot__page--button {
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  border-radius: 6px;
  border: 1px solid var(--primary);
  padding: 13px 30px;
  background-color: var(--primary);
  transition: background 0.25s linear, color 0.25s linear;
}

.forgot__page--button:hover {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
}
</style>
