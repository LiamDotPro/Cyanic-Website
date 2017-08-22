<template>
  <div class="Seo">
    <Faq></Faq>
    <Features></Features>
    <Prices></Prices>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Faq from './Seo/Faq'
  import Features from './Seo/Features'
  import Prices from './Seo/Prices'

  export default {
    components: {
      Faq,
      Features,
      Prices
    },
    name: 'Seo',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Seo {

  }

</style>
