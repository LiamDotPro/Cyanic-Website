<template>
  <div class="Features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Higher Visibility</h3>
            <p>
              Ranking higher on search engines such Google for keywords and phrases that apply to your website/business firstly and most importantly should lead to an increase in traffic. If the content, products or services on your website are what visitors want to consume and engage with the rate of visibility will increase through positive word of mouth and unprompted backlinking from other websites. These actions will feed back into positive SEO as search engines see more visitors and click throughs as a sign of quality content that it should promote by ranking it higher on the search results.</p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Content Optimisation</h3>
            <p>
              The SEO of content revolves around the concept of better content attracting more visitors which in turn shows search engines that your website should be shown to more people on the search results for your topic/business area. Having engaging content that provides value to the visitors that consume it has benefits for search engine ranking as well as the popularity and perception of your brand. Visitors will return for previous or future content all of whom are potential customers for your business or fans of / an audience for your personal brand.</p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Improved Website</h3>
            <p>
              A factor of ranking in a search engine is the loading speed of the pages on your website. Slow websites will often be less prefered by users if an alternative is available. If the website is too slow to load content users will often abandon that website all together, leaving a negative feeling towards that brand going forward, potentially being spread wider through negative word of mouth as a result of their dissatisfaction. With our business packages we include the work needed to keep the controllable aspect of your website’s page load speed fast, ensuring the users see the great content your website is providing.
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Generating New Leads</h3>
            <p>
              Ultimately generating new leads for a lot of web businesses lies at the heart of why one might choose to take out SEO services and we understand that the bottom line is important. While we can’t promise that we can guarantee you new leads, we can put you in the best position to be able to have the chance to connect. We find that if the businesses meets the need of the consumer deeply then as long as there getting new traffic, generating new leads ends up being package and parcel. We are also able to offer our own insight into how we think this process will happen and advise on B-B selling and B-C Service monetization on your web platform alongside insight into UI/UX techniques that will really benefit your services / products.            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="testimonial-tile">
            <h3>Connecting with Surrounding Brands</h3>
            <p>
              Many businesses neglect the fact that connecting with existing brands around your own platform and offerings can be mutually beneficial. By using our SEO services we can put your website into the right place to be noticed and make your chances of being approach for potential deals more likely. This kind of keyword building means that your business has a broader range of areas where it can garner more potential views while still offering the same services and products which increases the potential audience for our clients.
            </p>
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
