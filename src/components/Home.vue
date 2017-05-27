<template>
  <div class="Home">
    <hero></hero>
    <services-panel></services-panel>
    <HomeTextComponent></HomeTextComponent>
    <product-tile-left></product-tile-left>
    <product-tile-right></product-tile-right>
    <icon-table></icon-table>
    <CallToAction></CallToAction>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Hero from './Homepage/Hero'
  import CallToAction from './Homepage/CallToAction'
  import ServicesPanel from './Homepage/ServicesPanel'
  import HomeTextComponent from './Homepage/HomeTextComponent'
  import ProductTileLeft from './Homepage/ProductTileLeft'
  import ProductTileRight from './Homepage/ProductTileRight'
  import IconTable from './Homepage/IconTable'

  export default {
    components: {
      ServicesPanel,
      Hero,
      CallToAction,
      HomeTextComponent,
      ProductTileLeft,
      ProductTileRight,
      IconTable
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
