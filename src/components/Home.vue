<template>
  <div class="Home">
    <hero></hero>
    <services-panel></services-panel>
    <CallToAction></CallToAction>
  </div>
</template>


<script>
  import Hero from './Homepage/Hero'
  import CallToAction from './Homepage/CallToAction'
  import ServicesPanel from './Homepage/ServicesPanel'

  export default {
    components: {
      ServicesPanel,
      Hero,
      CallToAction
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
