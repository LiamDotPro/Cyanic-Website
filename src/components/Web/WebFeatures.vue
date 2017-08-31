<template>
  <div class="webProcess">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Our Website Design & Development Features</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>Transparency throughout</h3>
            <p>From our own experience and comments from previous clients we know that a lot of people have experienced poor transparency with regards to the progress being made on their website project (from both agencies and independent developers). With horror stories of 4-5 month turnarounds for a few page brochure website we like to keep customers up to date not only to hopefully provide peace of mind but to maintain an effective working relationship and focus achieving deadlines.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>Convenient Communication</h3>
            <p>Throughout the project we find clients have peaks of enthusiasm to see progress and development of their website project (we often share the same excitement!). We want clients to feel we are there when they need us, and that they chose wisely with having us working on their project. Because of this we are often available if you need to get in contact outside of common business hours, and if something is urgent we can in most instances look at the issue at the point of it being identified.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>Small team of enthusiasts</h3>
            <p>Although we see a lot of small team (even one person) businesses trying to portray a larger persona we are proud to be a 2-3 man team of people who have before starting this business spent most of their spare time outside of work and education engaged in website design, website development and graphical design.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>Passionate about the work</h3>
            <p>Before we started the cyanic.io business we as individuals have been actively engaged in websites, from the visual design and construction to understanding how they operate behind the scenes. Its this passion that drives us to strive to work above the expectations of our clients, not only to achieve a better result for them but also for our own hunger for continuous improvement.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>We use newer technology</h3>
            <p>Although we still work predominantly with the more well known website design languages HTML, CSS, PHP and jQuery we also utilise newer technologies such as vue.js for projects that will really benefit from it. A great example of this was the <router-link to="/project/djarii">Djarii.tv project</router-link> that through conversation with the client built as a single page application using vue.js and node.js. This allowed us to achieve very impressive load speeds, streamlined content delivery and opportunity to include real-time aspects to the website (such as the social counters).</p>
            <p>Specifically for projects that heavily utilise popular platforms such as social media the use of new technology enabled us to more effectively interact with information they made available via their API. Working in this way allows us to produce more unique experiences for our client’s websites helping them to be more memorable and integrated with the preferred platform of their audience. We achieved this with a Twitch.tv subscriber only section on <a href="http://djarii.tv/subscribers">Djarii.tv website</a> that created an exclusive space for the fans that support her, with more streamers showing an interest in working with us on something similar for their own websites.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-tile">
            <h3>Genuine care for client’s success</h3>
            <p>We often use the saying “your success is our success”, we’re not the first to use it we know, but we honestly mean it. We see our investment of that extra level of care, often working out of regular business hours to get something the client is really happy with worth it; throughout the project we will make decisions and propose ideas that we genuinely believe is the best approach for the project and maximising the results for our clients. This sort of consideration is something we pride ourselves on and ties in heavily with taking detailed specifications and understanding the client’s business. A common example of where we see other designers failing on this is designing a really nice website that unfortunately when filled with the client’s real content looks and functions nothing like the proposal. We take the actions needed to avoid this wherever possible.</p>
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
    .testimonial-tile {
      margin: 0;
    }
  }


  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {

  }

  @media (max-width: 575px) {
    .webProcess {
      padding: 50px 15px;

      .service-back-grad,
      .service-back-grad-bot {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {

  }

</style>
