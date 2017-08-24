<template>
  <div class="Features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Higher Visability</h3>
            <p>Ranking higher on search engines such Google for keywords and phrases that apply to your website/business firstly and most importantly should lead to an increase in traffic. If the content, products or services on your website are what visitors want to consume and engage with the rate of visibility will increase through positive word of mouth and unprompted backlinking from other websites. These actions will feed back into positive SEO as search engines see more visitors and click throughs as a sign of quality content that it should promote by ranking it higher on the search results.</p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Encourages better content</h3>
            <p>Ranking higher on search engines such Google for keywords and phrases that apply to your website/business firstly and most importantly should lead to an increase in traffic. If the content, products or services on your website are what visitors want to consume and engage with the rate of visibility will increase through positive word of mouth and unprompted backlinking from other websites. These actions will feed back into positive SEO as search engines see more visitors and click throughs as a sign of quality content that it should promote by ranking it higher on the search results.</p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Improved website</h3>
            <p>Ranking higher on search engines such Google for keywords and phrases that apply to your website/business firstly and most importantly should lead to an increase in traffic. If the content, products or services on your website are what visitors want to consume and engage with the rate of visibility will increase through positive word of mouth and unprompted backlinking from other websites. These actions will feed back into positive SEO as search engines see more visitors and click throughs as a sign of quality content that it should promote by ranking it higher on the search results.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
    <div class="service-back-grad-bot"></div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Features',
    data () {
      return {
        header: 'Building Web Experiences for the Future'
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start coding!
  @import "../../assets/master";

  .Features {
    padding-bottom: 150px;
    padding-top: 150px;
    background: #eff1f8;
    position: relative;

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
  }
</style>
