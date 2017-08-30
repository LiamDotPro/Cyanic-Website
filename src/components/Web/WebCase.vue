<template>
    <div class="WebCase">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Case Study: Method</h2>
            <a href="https://method.gg" target="_blank">www.method.gg</a>
          </div>
          <div class="col text-right"><img src="../../assets/img/testimonials/method_400x400.jpg" alt="" class="img-fluid case-avatar"></div>
        </div>
        <div class="row">
          <div class="col">
            <h3>Introduction</h3>
            <p>Method, from its beginnings over 11 years ago as a World of Warcraft guild, is a professional gaming and esports organisation. Method has a long standing and established place in the gaming scene with a large and loyal fan base that has been built up over the years. With a growing involvement in a range of gaming and esports scenes Method are expanding both in size and brand awareness. As such, the work we produced originally and the ongoing work we complete is required to adapt to support the changing goals and objectives of their website.</p>
            <h3>Deliverables</h3>
            <p>Over the year we have worked with Method, we have delivered a variety of different systems that have offered unique functionality and made for purpose hubs of information to make the viewing and administration experience as smooth as possible. Shortly before we started the Method website we had been working on a bespoke content management system that had been designed specifically to fill part of the void of esports management systems.</p>
            <p>Live views of these systems can be seen on the <router-link to="/project/method">Method project page</router-link></p>

            <h3>Results</h3>
            <p>All-in-all for the size that the project has grown to since the start of the project we have had minimal interruption to service, minor bugs that arose as a result of unusual circumstances and surprising little user training/questions about how to use the admin panel. We have maintained high availability for contact with the client and emergency support which allowed us to fix any issues they did have quickly and with minimal interruption.</p>
              <p>The most prominent success of the project was the design, development and implementation of the raid progress system. It was a bespoke system that is unique to the Method.gg website which allows them to report and post updates about a competition very popular in their niche of gaming (World of Warcraft). Alongside the great work by Method staff and the brand’s great reputation and fanbase routing for the Method team the system has seen approximately 6 Million page views since it was implemented into the site.</p>

            <h3>Client's Thoughts</h3>
            <p>“Method has been working with Cyanic for over a year and counting. Paul and Liam understand the needs of us as a client very well and they are swift to turn a concept into a fully functional web solution.” - <i>Sascha Steffens, Co-founder of Method</i></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'WebCase',
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

  .WebCase {
    background: $primaryWhite;
    padding-bottom: 120px;
    padding-top: 60px;

    h2 {
      margin-bottom: 5px;
    }
  }


  .case-avatar {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin: 0 0 0 auto;
    display: block;
  }


</style>
