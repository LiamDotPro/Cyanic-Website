<template>
  <div class="Home">
    <hero></hero>
    <services-panel></services-panel>
    <HomeTextComponent></HomeTextComponent>
    <product-tile-left></product-tile-left>
    <product-tile-right></product-tile-right>
    <ThirdProductTile></ThirdProductTile>
    <Testimonials></Testimonials>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Hero from './Homepage/Hero'
  import ServicesPanel from './Homepage/ServicesPanel'
  import HomeTextComponent from './Homepage/HomeTextComponent'
  import ProductTileLeft from './Homepage/ProductTileLeft'
  import ThirdProductTile from './Homepage/ThirdProductTile'
  import ProductTileRight from './Homepage/ProductTileRight'
  import Testimonials from './Homepage/Testimonials'

  export default {
    components: {
      ServicesPanel,
      Hero,
      HomeTextComponent,
      ProductTileLeft,
      ProductTileRight,
      ThirdProductTile,
      Testimonials
    },
    name: 'Homepage',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Home {


  }

</style>
