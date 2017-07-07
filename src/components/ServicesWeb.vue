<template>
  <div class="services-web">
    <web-hero></web-hero>
    <web-intro></web-intro>
    <web-process></web-process>
  </div>
</template>

<script>
  import WebHero from './Web/WebHero'
  import WebIntro from './Web/WebIntro'
  import WebProcess from './Web/WebProcess'
  export default {
    components: {
      WebProcess,
      WebIntro,
      WebHero
    },
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
