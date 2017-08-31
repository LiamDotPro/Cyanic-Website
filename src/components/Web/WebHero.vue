<template>
  <div class="web-hero">

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1>Website Design & Development</h1>
          <p>Your digital presence as an individual or business is very important. Websites are critical assets to many businesses and can often make or break your chances of connecting with the audience you deserve. We have been providing professional website design and development to a vast amount of different companies, start-ups, influencers and individuals alike. We take great pride in providing a consistently positive customer experience and an exceptional end product.</p>
        </div>
        <div class="col-lg-4 hidden-md-down">
          <div class="image-wrap">
            <img src="../../assets/img/top-side-images/web-development/desktop-illu.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
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
    padding-bottom: 150px;
    padding-top: 150px;
    position: relative;

    h1 {
      color:#fff;
      font-size: 40px;
      font-weight: bold;
    }
    p {
      padding-top: 10px;
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 25px;
      color: #fff;
    }

    .service-back-grad {
      position: absolute;
      right: 0;
      left: 0;
      height: 100px;
      bottom: 0;
      z-index: 5;
      background: url(../../assets/img/cyanic-blue-bg-short-bottom.jpg) no-repeat bottom center;
      background-size: 100% 100px;
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {
    .web-hero {
      padding-bottom: 40px;
      padding-top: 100px;
    }
  }

  @media (max-width: 575px) {
    .web-hero {
      text-align: center;
    }
    .web-hero .service-back-grad {
      display: none;
    }
    .hidden-md-down {
      display: block;
    }
  }

  @media (max-width: 480px) {

  }
</style>
