<template>
  <div class="product-tile-right">
    <div class="container">
      <div class="row align-items-center">
        <div class="col product-tile-text">
          <h2>We've got the right skill set to get things done</h2>
          <p>
            We develop with a rich set of technologies, giving our clients satisfaction knowing their getting not only a great looking product but also a product ready to tackle the real world. If you're looking for older technologies, we still support many older legacy systems and may be able to help, contact us for more information on our <router-link to="/contact">contact page</router-link>.
          </p>
          <div class="row icon-area justify-content-center">
            <technology-block v-for="tech in images" :name="tech.name" :src="tech.src"
                              :key="tech.id"></technology-block>
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
    <div class="service-back-grad-bot"></div>
  </div>
</template>

<script>
  import TechnologyBlock from './TechnologyBlock'
  export default {
    components: {TechnologyBlock},
    name: 'ProductTileLeft',
    data () {
      return {
        images: [
          {
            id: 1, name: 'Vue', src: require('../../assets/img/tech-logos/vue.png')
          },
          {
            id: 2, name: 'Node', src: require('../../assets/img/tech-logos/node.png')
          },
          {
            id: 3, name: 'Socket.Io', src: require('../../assets/img/tech-logos/socketio.png')
          },
          {
            id: 4, name: 'Ionic', src: require('../../assets/img/tech-logos/ionic.png')
          },
          {
            id: 5, name: 'Wordpress', src: require('../../assets/img/tech-logos/wordpress.png')
          },
          {
            id: 6, name: 'And Many More..', src: require('../../assets/img/tech-logos/plusOne.png')
          }
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .product-tile-right {
    position: relative;
    background: #eff1f8;
    text-align: center;
    padding-top: 200px;
    padding-bottom: 200px;

    .service-back-grad {
      position: absolute;
      right: 0;
      left: 0;
      height: 100px;
      top: 0;
      z-index: 5;
      background: url(../../assets/img/cyanic-light-bg-short.jpg) no-repeat top center;
      background-size: 100% 100px;
    }
    .service-back-grad-bot {
      position: absolute;
      right: 0;
      left: 0;
      height: 100px;
      bottom: 0;
      z-index: 5;
      background: url(../../assets/img/cyanic-light-bg-short-bottom.jpg) no-repeat bottom center;
      background-size: 100% 100px;
    }

    p {
      color: $mediumGrey;
    }

    h3 {
      color: $primaryColour;
    }

    .icon-area {
      padding-top: 20px;
    }
    .image-data-overlay {
      position: absolute;
      bottom: 200px;
      left: 50%;
      transform: translateX(-50%);

    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {

  }

  @media (max-width: 575px) {
    .product-tile-right .tech-block {
      text-align: center;
      display: block;
      margin-bottom: 15px;

      img {
        margin: 0 auto 20px auto;
        display: block;
      }
    }
  }

  @media (max-width: 480px) {

  }

</style>
