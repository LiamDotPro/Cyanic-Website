<template>
  <div class="Web">
    <WebHero></WebHero>
    <WebIntro></WebIntro>
    <WebFeatures></WebFeatures>
    <WebCase></WebCase>
    <WebPackage></WebPackage>
  </div>
</template>


<script>
  // You can follow the same layout for importing local components
  import WebHero from './Web/WebHero'
  import WebIntro from './Web/WebIntro'
  import WebFeatures from './Web/WebFeatures'
  import WebCase from './Web/WebCase'
  import WebPackage from './Web/WebPackage'

  export default {
    components: {
      WebHero,
      WebIntro,
      WebFeatures,
      WebCase,
      WebPackage
    },
    name: 'Web',
    data () {
      return {}
    },
    metaInfo: {
      title: 'Cyanic - Derby Website Design and Development utilizing UI/UX for an Impressive Web Experience',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'We provide professional website design and development to a variety of different clients. See how our approach achieves consistently high client satisfaction.'
        },
        {
          name: 'og:title',
          content: 'Cyanic - Derby Website Design and Development utilizing UI/UX for an Impressive Web Experience'
        },
        {
          name: 'og:url',
          content: 'https://cyanic.io/web'
        },
        {
          name: 'og:description',
          content: 'We provide professional website design and development to a variety of different clients. See how our approach achieves consistently high client satisfaction.'
        }
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Web {
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
