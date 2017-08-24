<template>
  <div class="PrivateInvestigation">
    <div class="container">
      <private-header></private-header>
      <private-section-responsive></private-section-responsive>
      <private-section-modern></private-section-modern>
      <private-section-layout></private-section-layout>
      <private-section-rethink></private-section-rethink>
      <private-section-anon></private-section-anon>
    </div>
  </div>
</template>

<script>
  import privateHeader from './private-investigation/private-header'
  import PrivateSectionResponsive from './private-investigation/private-section-responsive'
  import PrivateSectionModern from './private-investigation/private-section-modern'
  import PrivateSectionLayout from './private-investigation/private-section-layout'
  import PrivateSectionRethink from './private-investigation/private-section-rethink'
  import PrivateSectionAnon from './private-investigation/private-section-anon'

  export default {
    name: 'PrivateInvestigation',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    },
    components: {
      PrivateSectionAnon,
      PrivateSectionRethink,
      PrivateSectionLayout,
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
