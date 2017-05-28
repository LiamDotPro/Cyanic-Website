<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <img src="../../assets/img/phone-block.png" alt="Product tile 1">
        </div>
        <div class="col-lg">
          <h1>We've got the right skill set to get things done</h1>
          <p>
            We have a rich set of technologies that we develop with, which gives our clients the satisfaction in knowing there getting not only a great looking product but also a product ready to tackle the real world. If your looking for older technologies we still support many older legacy systems and may be able to help, contact us below.
          </p>
          <div class="row icon-area">
            <technology-block v-for="tech in images" :name="tech.name" :src="tech.src" :key="tech.id"></technology-block>
          </div>
        </div>
      </div>
    </div>
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
            id: 1, name: 'VueJs', src: require('../../assets/img/tech-logos/vue.png')
          },
          {
            id: 2, name: 'NodeJs', src: require('../../assets/img/tech-logos/node.png')
          },
          {
            id: 3, name: 'Socket.Io', src: require('../../assets/img/tech-logos/socketio.png')
          },
          {
            id: 4, name: 'Ionic', src: require('../../assets/img/tech-logos/ionic.png')
          },
          {
            id: 5, name: 'Wordpress', src: require('../../assets/img/tech-logos/wordpress.png')
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

  .product-tile-left {

    background: $primaryWhite;
    text-align: left;
    padding-top: 60px;
    padding-bottom: 60px;

    h1 {
      color: $primaryColour;
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

  }

</style>
