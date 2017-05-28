<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg product-tile-text">
          <h1>Connecting you with potential customers</h1>
          <p>
            One of our core aims is to engage as many of your users as possible, creating positive user experiences which maximize your online presence. We've already helped brands reach millions of potential customers.
          </p>
          <p class="second-text">
            Our graph shows how influential a good website could be to growing your existing user base and creating brand awareness. Connecting customers can sometimes be as simple as building on your existing offerings. By implementing a news tracker we've helped hundreds of thousands of people get the news they want while creating potential leads for the business.
          </p>
          <div class="row small-card-row">
            <div class="col-md small-card">
              <icon name="wrench" scale="5"></icon>
              <h3>Bespoke Solutions</h3>
              <p>
                We create bespoke web experiences tailored to meet the needs of your business utilizing the best possible technology.
              </p>
            </div>
            <div class="col-md small-card">
              <icon name="heart" scale="5"></icon>
              <h3>Client Satisfaction</h3>
              <p>
                We take your opinions seriously. As the owner or creator of a brand you can be assured we have your core principles at heart.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg linechart-div">
          <MethodLineChart></MethodLineChart>
          <div class="row">
            <div class="col-lg">
              <div class="metric-tile">
                <h3>Sessions</h3>
                <p>1,051,293</p>
              </div>
            </div>
            <div class="col-lg">
              <div class="metric-tile">
                <h3>Pageviews</h3>
                <p>2,177,895</p>
              </div>
            </div>
          </div>
          <h5>Analytics kindly provided by <a href="https://method.gg">Method.gg</a>
            to learn more the case study can be found
            <router-link to="/case-studies/method">here</router-link>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MethodLineChart from './LineChart/MethodLineChart'
  export default {
    name: 'ProductTileLeft',
    data () {
      return {}
    },
    components: {
      MethodLineChart
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

    padding-top: 30px;
    padding-bottom: 30px;

    h1 {
      color: $primaryColour;
    }

    p {
      color: $mediumGrey;
    }

    h3 {
      color: $primaryColour;
    }

    .small-card {

      h3 {
        z-index: 2;
        position: relative;
        font-size: 20px;
      }

      p {
        z-index: 2;
        position: relative;
        font-size: 16px;
      }

      svg {
        color: #e9edf7;
        position: absolute;
        right: 0;
        z-index: 1;
        opacity: 0.7;
      }

    }

    .product-tile-text {
      padding-top: 100px;
    }

    .small-card-row {
      padding-top: 20px;
    }

    .linechart-div {
      text-align: center;
      h5 {
        color: $mediumGrey;
        font-size: 14px;
      }
    }

    .metric-tile {
      padding: 10px 20px 10px 20px;
    }

    .second-text {
      padding-top:25px;
      padding-bottom: 25px;
    }

  }

</style>
