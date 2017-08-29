<template>
  <div class="web-hero">

    <div class="container">
      <div class="row align-items-center">
        <div class="col-9">
          <h1>Branding</h1>
          <p>Your branding is important to get right as it's often the first thing that a person will use to decide if they want to engage with you further. When they come into contact with your brand they will make assumptions as to how professional, reliable or high quality your respective product, service or content is from their perception of your branding. It’s because of this that getting your branding right is so important, we’re here to help. Below are some of the areas that we have experience delivering to clients ranging from personal brands with large audiences of monthly viewers to businesses pitching for considerable investment.</p>
        </div>
        <div class="col-3"></div>
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
        heroImage: require('../../assets/img/services-images/web/feature-creator-img.png')
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


</style>
