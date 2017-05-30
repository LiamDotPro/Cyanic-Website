<template>
  <div class="services-web">
    <web-hero></web-hero>
  </div>
</template>

<script>
  import WebHero from './Web/WebHero'
  export default {
    components: {WebHero},
    name: 'ServicesWeb',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Start coding!

  .services-web {

  }

</style>
