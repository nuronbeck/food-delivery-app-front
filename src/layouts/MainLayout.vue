<template>
  <div>
    <AppHeader />

    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  name: "MainLayout",
  components: {
    AppHeader,
  },
};
</script>
