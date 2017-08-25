<template>
  <div id="app">
    <NavigationTop></NavigationTop>
    <router-view></router-view>
    <signature-footer></signature-footer>
  </div>
</template>

<script>

</script>

<style lang="scss">

  @import "assets/master";

  .tooltip {
    .tooltip-inner {
      background-color: $primaryColour !important;
    }

    .tooltip-inner:before {
      border-bottom-color: $primaryColour !important;
    }
  }

  #app {
    /*@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');*/
    font-family: $fontFamily;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $primaryWhite;
    background: $primaryColour;
    font-weight: 300;

    button, input, optgroup, select, textarea {
      font-family: $fontFamily;
    }
  }
</style>
