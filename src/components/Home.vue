<template>
  <div class="Home">
    <hero></hero>
    <services-panel></services-panel>
    <CallToAction></CallToAction>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Hero from './Homepage/Hero'
  import CallToAction from './Homepage/CallToAction'
<<<<<<< HEAD
=======
  import ServicesPanel from './Homepage/ServicesPanel'
>>>>>>> 503108e7aa4b741421fc0bb85dd29f4e3f1aceeb

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
