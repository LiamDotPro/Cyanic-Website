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

  // Global variables outline in app so that they can have scope over other objects that are scoped to components.
  // Colour Palette Reference https://puu.sh/vVbjW/f802be9239.png
  @import "./assets/master";

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
