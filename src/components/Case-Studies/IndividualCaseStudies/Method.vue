<template>
  <div class="method">
    <MethodHero></MethodHero>
    <MethodProjectReq></MethodProjectReq>
    <MethodCarousel></MethodCarousel>
  </div>
</template>

<script>
  import MethodHero from './CaseMethod/MethodHero'
  import MethodProjectReq from './CaseMethod/MethodProjectReq'
  import MethodCarousel from './CaseMethod/MethodCarousel'
  export default {
    components: {
      MethodHero,
      MethodProjectReq,
      MethodCarousel
    },
    name: 'Method',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../../assets/master";


</style>
