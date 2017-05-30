<template>
  <div class="web-hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg hero-text">
            <h1>Website Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, possimus, repellat. Aliquam at autem, commodi deleniti dolore eaque eius expedita ipsa nemo, nostrum nulla praesentium, quaerat quia quibusdam recusandae voluptatum!</p>
          </div>
          <div class="col-lg hero-image">
            <img :src="heroImage" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid hero-bottom">
      <div class="container">
        <div class="row hero-bottom-bar">
          <div v-for="items in navigationItems" class="col-lg-2 nav-bar" :key="items.id">
            <a><h5>{{items.title}}</h5></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebHero',
    data () {
      return {
        heroImage: require('../../assets/img/services-images/web/feature-creator-img.png'),
        navigationItems: [
          {id: 0, title: 'Introduction', link: ''},
          {id: 0, title: 'Responsive', link: ''},
          {id: 0, title: 'Our Process', link: ''},
          {id: 0, title: 'Why Us', link: ''}
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .web-hero {
    text-align: left;
    background: $primaryColour;

    .hero-text {
      padding-top: 100px;
      padding-bottom: 144px;
    }

    .hero-image {
      img {
        position: absolute;
        top: -10px;
        bottom: 0;
        right: 40px;
        z-index: 2;
      }
    }

    .hero-bottom {
      background: $secondaryColour;
      .hero-bottom-bar {
       padding: 20px 0 20px 0;
        background: $secondaryColour;
      }
    }
  }


</style>
