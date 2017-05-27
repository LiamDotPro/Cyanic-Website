<template>
  <div class="Home">
    <hero></hero>
    <services-panel></services-panel>
    <HomeTextComponent></HomeTextComponent>
    <CallToAction></CallToAction>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Hero from './Homepage/Hero'
  import CallToAction from './Homepage/CallToAction'
  import ServicesPanel from './Homepage/ServicesPanel'
  import HomeTextComponent from './Homepage/HomeTextComponent'
  export default {
    components: {
      ServicesPanel,
      Hero,
      CallToAction,
      HomeTextComponent
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
