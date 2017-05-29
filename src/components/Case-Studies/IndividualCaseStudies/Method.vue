<template>
  <div class="method">
    <MethodHero></MethodHero>
  </div>
</template>

<script>
  import MethodHero from './CaseMethod/MethodHero'

  export default {
    components: {MethodHero},
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
