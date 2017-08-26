<template>
  <div class="webProcess">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Use of new technology</h3>
            <p>Although we still work predominantly with the more well known website design languages HTML, CSS, PHP and jQuery we also utilise newer technologies such as vue.js for projects that will really benefit from it. A great example of this was the Djarii.tv project that through conversation with the client built as a single page application using vue.js and node.js. This allowed …</p>
        </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Transparency throughout</h3>
            <p>From our own experience and comments from previous clients we know that a lot of people have experienced poor transparency with regards to the progress being made on their website project (from both agencies and independent developers). With horror stories of 4-5 month turnarounds for a few page brochure website we like to keep customers up to date not only to hopefully provide peace of mind but to maintain an effective working relationship and focus achieving deadlines.</p>
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
  export default {
    name: 'WebProcess',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .webProcess {
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
