<template>
  <div class="method">
    <MethodHero></MethodHero>
    <MethodProjectReq></MethodProjectReq>
  </div>
</template>

<script>
  import MethodHero from './CaseMethod/MethodHero'
  import MethodProjectReq from './CaseMethod/MethodProjectReq'

  export default {
    components: {
      MethodHero,
      MethodProjectReq
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
