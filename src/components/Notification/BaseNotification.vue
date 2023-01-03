<template>
  <div class="alert show">
    <font-awesome-icon icon="fa-solid fa-exclamation" />
    <span class="alert__msg">The given data was invalid</span>
  </div>
</template>

<script>
export default {
name: "BaseNotification"
}
</script>

<style lang="scss">
.alert{
    background: $color-yellow;
    margin: -20px 0 20px 0;
    padding: 16px 20px;
    width: 100%;
    border-radius: 4px;
    border-left: 8px solid $color-yellow-dark;
    
.fa-exclamation{
    color: $color-yellow-dark;
font-size: 26px;
}
&__msg{
    padding: 0 20px;
    font-family: $base-font;
    font-size: 18px;
    color: $color-yellow-dark;
}

}
</style>