<template>
  <div class="Services-panel">
    <div class="container services-container">
      <div class="row service-row">
        <div class="col-12">
          <div class="row" v-for="services in tiles">
            <div class="col-lg-8">
              <service-tile :title="services.title" :image="services.image"
                            :desc="services.desc" :link="services.link" :key="services.id">
              </service-tile>
            </div>
            <div class="col-lg-4 hidden-md-down">
              <div class="line-col-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="line-wrap col-4 hidden-md-down">
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
            desc: 'We specialise in creating websites for business, influencers and personal brands, utilising some of the newest and freshest technologies.',
            link: 'web'
          },
          {
            id: 2,
            image: require('../../assets/img/top-side-images/seo/seo.png'),
            title: 'Search Engine Optimisation',
            desc: 'We can help your website be seen by more people through the creation of content and further optimization of your website to rank you higher in Google.',
            link: 'seo'
          },
          {
            id: 3,
            image: require('../../assets/img/top-side-images/preview.png'),
            title: 'Branding & Graphic Design',
            desc: 'We have worked alongside big brands to strengthen their existing branding and provided high quality, thoughtful graphical assets to enhance their platform.',
            link: 'branding'
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
    padding-top: 0;
    padding-bottom: 50px;
    background: #0377e4;
    margin-top: -200px;
    overflow: hidden;
    position: relative;

    .services-container {
      z-index: 25;
    }

    .service-row {
      margin-top: 250px;
    }

    .line-col-horizontal {
      height: 10px;
      width: 40%;
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
        margin-top: -270px;
      }
    }
  }



  @media (max-width: 1199px) {
    .Services-panel {
      margin-top: -100px;
    }
    .Services-panel .line-wrap .line-col,
    .Services-panel .line-col-horizontal {
      border-color: #027ef0;
    }
  }

  @media (max-width: 991px) {
    .Services-panel .service-row {
      margin-top: 150px;
    }
  }

  @media (max-width: 757px) {

  }

  @media (max-width: 575px) {

  }

  @media (max-width: 480px) {

  }

</style>
