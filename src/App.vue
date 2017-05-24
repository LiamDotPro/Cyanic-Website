<template>
  <div id="app">
    <NavigationTop></NavigationTop>
    <router-view></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>

</script>

<style lang="scss">

  @import "assets/master";

  #app {
    @import url('https://fonts.googleapis.com/css?family=Oxygen');

    font-family: $fontFamily;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primaryWhite;
    background: $lightGrey;
  }
</style>
