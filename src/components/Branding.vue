<template>
  <div class="Branding">
    <BrandHero></BrandHero>
    <BrandServices></BrandServices>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import BrandHero from './Branding/BrandHero'
  import BrandServices from './Branding/BrandServices'

  export default {
    components: {
      BrandHero,
      BrandServices
    },
    name: 'Branding',
    data () {
      return {}
    },
    metaInfo: {
      title: "Cyanic - Derby Social Media Content, Logo's, Twitch Packages, Branded Documents",
      meta: [
        {name: 'description', content: ''}
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Branding {
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
