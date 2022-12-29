<template>
  <div class="login_containers">
    <div class="header-wrappers">
      <router-link to="/" class="header-left">
        <img class="logo" src="@/assets/header/main_logo.svg" />
      </router-link>
    </div>
    <div class="block_left-side">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoBlock",
};
</script>

<style lang="scss">
.header-wrappers {
  margin: 30px 0 20px 30px;
}

@media screen and (max-width: 768px) {
  .header-wrappers {
    margin: 15px 0 0 -10px;
  }
}
</style>
