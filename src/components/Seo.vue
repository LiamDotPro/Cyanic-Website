<template>
  <div class="Seo">
    <Hero></Hero>
    <Description></Description>
    <Features></Features>
    <Faq></Faq>
    <Prices></Prices>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import Hero from './Seo/Hero'
  import Faq from './Seo/Faq'
  import Description from './Seo/Description'
  import Features from './Seo/Features'
  import Prices from './Seo/Prices'

  export default {
    components: {
      Hero,
      Faq,
      Description,
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
    p {
      line-height: 1.7;
    }
    h2 {
      color: #027ef1;
      font-weight: bold;
      font-size: 1.9rem;
      line-height: 1.2;
    }
    h3 {
      color: #027ef1;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.2;
    }
  }

</style>
