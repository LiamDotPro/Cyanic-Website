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
    },
    metaInfo: {
      title: "Cyanic - Build an Audience using our Derby SEO services designed to give you're Website Traction",
      meta: [
        {name: 'description', content: ''}
      ]
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
      font-weight: normal;
      font-size: 1.7rem;
      line-height: 1.2;
      /*margin-top: 150px;*/
    }

  }

</style>
