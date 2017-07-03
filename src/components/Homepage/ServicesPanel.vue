<template>
  <div class="Services-panel">
    <div class="container">
      <div class="row">
        <div class="col-lg" v-for="services in tiles">
          <service-tile :title="services.title" :image="services.image"
                        :desc="services.desc" :link="services.link" :key="services.id">
          </service-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceTile from '../Homepage/ServiceTile'
  export default {
    name: 'ServicesPanel',
    data () {
      return {
        tiles: [
          {
            id: 1,
            image: require('../../assets/img/icon1.png'),
            title: 'Website Development',
            desc: 'We specialise in creating websites for business and personal branding, utilising some of newest and freshest technologies.',
            link: 'web'
          },
          {
            id: 2,
            image: require('../../assets/img/icon2.png'),
            title: 'Search Engine Optimisation',
            desc: 'We can help your website be seen by more people by creating content and further optimising your website to rank you higher in google.',
            link: 'seo'
          },
          {
            id: 3,
            image: require('../../assets/img/icon3.png'),
            title: 'Consulting',
            desc: 'Need to improve an existing platform or service your provide? we have the knowledge to steer your web projects in the right direction.',
            link: 'consulting'
          }
        ]
      }
    },
    components: {
      ServiceTile
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .Services-panel {
    background: -webkit-gradient(linear, left top, right top, from(#027ef1), to(#0173dd));
    background: -webkit-linear-gradient(top, #027ef1, #0173dd);
    background: -moz-linear-gradient(top, #027ef1, #0173dd);
    background: -o-linear-gradient(top, #027ef1, #0173dd);
    background: -ms-linear-gradient(top, #027ef1, #0173dd);
    background: linear-gradient(top, #027ef1, #0173dd);
    background-color: #027ef1;
    padding-top: 50px;
    padding-bottom: 50px;

  }

</style>
