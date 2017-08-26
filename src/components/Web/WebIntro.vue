<template>
  <div class="WebIntro">
    <div class="container">
      <div class="row">
        <div class="col-lg intro-container">
          <h1>Introduction</h1>
          <h2>Why you should choose us</h2>
          <p>
            We have a large amount of technical and design experience under our belt utilizing and leveraging many different technologies so that we can provide the best experience possible, were a company that gets stuff done.
          </p>
          <p>
            Having an empowering and unique website could be the difference in getting new leads or selling more of the awesome products you work on, further more having already worked with lots of big brands you can be assured that your project will be in reliable hands. One of the core fundamentals the company was built upon was the ability to learn quickly and adapt to the needs of our clients so we really can offer a bespoke service that keeps clients coming back time and time again to work with us. Secondly we can offer a full end to end service all the way from company logo's and branding down to custom widgets / components as well as Search Engine Optimization once your website is deployed and live. Lastly we offer support for all of our products and can work to a tight time schedules / anti-social hours if required to make sure your users receive and optimal experience at all times.
          </p>

          <h2>The importance of good website design</h2>
          <p>
            Currently in 2017 there are still a lot of out dated non modernised websites operating, which are unappealing and hard to operate for potential clients and users. We offer only the highest standard of web design with thoughtful ui/ux cases planned and tested before hand making the information or products available to your customers seamless.</p>
          <p>
            We offer more than just a template you'd find for wordpress or wix, truly highly customizable features and concepts which expresses your branding and makes your website memorable. Want to see examples?
            <router-link to="/portfolio">Check our portfolio here</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebIntro',
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

  .WebIntro {
    background: $primaryWhite;
  }
</style>
