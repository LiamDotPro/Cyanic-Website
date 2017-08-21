<template>
  <div class="Services-panel">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row" v-for="services in tiles">
            <div class="col-8">
              <service-tile :title="services.title" :image="services.image"
                            :desc="services.desc" :link="services.link" :key="services.id">
              </service-tile>
            </div>
            <div class="col-4">
              <div class="line-col-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="line-wrap col-4">
        <div class="line-col"></div>
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
            image: require('../../assets/img/top-side-images/web-development/desktop-illu.png'),
            title: 'Website Development',
            desc: 'We specialise in creating websites for business and personal branding, utilising some of newest and freshest technologies.',
            link: 'web'
          },
          {
            id: 2,
            image: require('../../assets/img/top-side-images/web-development/desktop-illu.png'),
            title: 'Search Engine Optimisation',
            desc: 'We can help your website be seen by more people by creating content and further optimising your website to rank you higher in google.',
            link: 'seo'
          },
          {
            id: 3,
            image: require('../../assets/img/top-side-images/web-development/desktop-illu.png'),
            title: 'Branding & Graphical Design',
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
    background-color: #027ef1;
    padding-top: 350px;
    padding-bottom: 50px;
    background: #0079ea url(../../assets/img/cyanic-dark-background.jpg) no-repeat top center;
    background-size: 100% auto;
    margin-top: -200px;
    overflow: hidden;

    .line-col-horizontal {
      height: 10px;
      width: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      border-top: 10px dotted #2090f6;
      -webkit-transform: translate(40px,-5px);
      transform: translate(40px,-5px);
    }

    .line-wrap {
      position: absolute;
      right: 0;
      bottom: 0;
      top: 0;

      .line-col {
        width: 2px;
        height: 200%;
        position: absolute;
        left: 50%;
        display: block;
        margin-left: 40px;
        border-left: 10px dotted #2090f6;
        margin-top: -160px;
      }
    }
  }
</style>
