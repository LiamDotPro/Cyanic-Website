<template>
  <div class="Home">
    <hero></hero>
    <CallToAction></CallToAction>
  </div>
</template>


<script>
  import Hero from './Homepage/Hero'
  import CallToAction from './Homepage/CallToAction'
  export default {
    components: {Hero, CallToAction},
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
