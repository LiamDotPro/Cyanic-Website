<template>
  <div class="product-tile-right">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <div class="image-data-overlay">
            <h2>100k</h2>
          </div>
          <img class="img-fluid" src="../../assets/img/mobile.png" alt="Product tile 1">
        </div>
        <div class="col-lg product-tile-text">
          <h2>We've got the right skill set to get things done</h2>
          <p>
            We have a rich set of technologies that we develop with, which gives our clients the satisfaction in knowing there getting not only a great looking product but also a product ready to tackle the real world. If your looking for older technologies we still support many older legacy systems and may be able to help, contact us below.
          </p>
          <div class="row icon-area">
            <technology-block v-for="tech in images" :name="tech.name" :src="tech.src"
                              :key="tech.id"></technology-block>
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
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
    background: #f6f6f6;
    text-align: left;
    padding-top: 30px;
    padding-bottom: 30px;

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

    .product-tile-text {
      padding-top: 160px;
    }
  }

</style>
