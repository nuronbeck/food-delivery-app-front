<template>
  <div class="sign__page">
    <div class="container">
      <span class="sign__page--inner">
        <h1 class="sign__page--registration">Registration</h1>
        <div class="sign__page--form">
          <input
            class="sign__page--input"
            type="text"
            placeholder="First Name..."
          />
          <input
            class="sign__page--input"
            type="text"
            placeholder="Last Name..."
          />
          <input
            class="sign__page--input"
            type="text"
            placeholder="Date of Birth..."
          />
          <input
            class="sign__page--input"
            type="text"
            placeholder="Phone Number..."
          />
          <button class="sign__page--button">confirm</button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignPage",
};
</script>

<style>
.sign__page {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--grey-lightest);
}

.sign__page--inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--white);
  padding: 20px;
  border-radius: 10px;
}

.sign__page--registration {
  font-size: 34px;
  font-family: sans-serif;
  font-weight: 500;
}

.sign__page--form {
  width: 100%;
}

.sign__page--input {
  display: block;
  width: 100%;
  margin: 35px 0;
  padding: 15px 100px 10px 5px;
  font-style: italic;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.sign__page--button {
  width: 100%;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
  background-color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 5px;
  transition: background 0.25s linear, color 0.25s linear;
}

.sign__page--button:hover {
  color: var(--primary);
  background-color: var(--white);
  border: 1px solid var(--primary);
}
</style>
