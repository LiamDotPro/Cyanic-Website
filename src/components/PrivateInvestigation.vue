<template>
  <div class="PrivateInvestigation">
    <div class="container">
      <private-header></private-header>
      <private-section-responsive></private-section-responsive>
      <private-section-modern></private-section-modern>
    </div>
  </div>
</template>

<script>
  import privateHeader from './private-investigation/private-header'
  import PrivateSectionResponsive from './private-investigation/private-section-responsive'
  import PrivateSectionModern from './private-investigation/private-section-modern'

  export default {
    name: 'PrivateInvestigation',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    },
    components: {
      PrivateSectionModern,
      PrivateSectionResponsive,
      privateHeader
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../assets/master";


</style>
