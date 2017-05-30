<template>
  <div class="method">
    <MethodHero></MethodHero>
    <MethodProjectReq></MethodProjectReq>
    <MethodCarousel></MethodCarousel>
    <MethodFeaturedTable></MethodFeaturedTable>
  </div>
</template>

<script>
  import MethodHero from './CaseMethod/MethodHero'
  import MethodProjectReq from './CaseMethod/MethodProjectReq'
  import MethodCarousel from './CaseMethod/MethodCarousel'
  import MethodFeaturedTable from './CaseMethod/MethodFeaturedTable'

  export default {
    components: {
      MethodHero,
      MethodProjectReq,
      MethodCarousel,
      MethodFeaturedTable
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
