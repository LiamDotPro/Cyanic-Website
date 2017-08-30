<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 product-tile-text">
          <h3>Connecting you with potential customers</h3>
          <p>
            One of our core aims is to engage as many of your users as possible, creating positive user experiences which maximize your online presence. We've already helped brands reach millions of potential customers.
          </p>
          <p>
            Our graph shows how influential a good website could be to growing your existing user base and creating brand awareness. Connecting customers can sometimes be as simple as building on your existing offerings. By implementing a news tracker we've helped hundreds of thousands of people get the news they want while creating potential leads for the business.
          </p>
          <div class="row small-card-row">
            <div class="col-12 small-card">
              <icon name="wrench" scale="5"></icon>
              <h4>Bespoke Solutions</h4>
              <p>
                We create bespoke web experiences tailored to meet the needs of your business utilizing the best possible technology.
              </p>
            </div>
            <div class="col-12 small-card">
              <icon name="heart" scale="5"></icon>
              <h4>Client Satisfaction</h4>
              <p>
                We take your opinions seriously. As the owner or creator of a brand you can be assured we have your core principles at heart.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 linechart-div">
          <MethodLineChart></MethodLineChart>
          <div class="row">
            <div class="col-sm-6">
              <div class="metric-tile">
                <h4 class="metric-title">Sessions</h4>
                <p class="metric-value">1,051,293</p>
                <span class="metric-note">Jan 14 - Feb 14</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="metric-tile">
                <h4 class="metric-title">Pageviews</h4>
                <p class="metric-value">2,177,895</p>
                <span class="metric-note">Jan 14 - Feb 14</span>
              </div>
            </div>
          </div>
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
    padding-bottom: 60px;
    position: relative;
    z-index: 100;

    .metric-note {
      color: #b6b9bf;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      display: block;
      text-align: center;
    }

    h3 {
      color: $primaryColour;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.2;
    }

    p {
      color: $mediumGrey;
      line-height: 1.7;
      font-size: 16px;
    }

    h4 {
      color: $primaryColour;
      font-size: 18px;
    }

    .small-card {
      padding: 10px 15px;

      h4 {
        z-index: 2;
        position: relative;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      p {
        z-index: 2;
        position: relative;
        font-size: 16px;
        line-height: 1.7;
      }

      svg {
        color: #e9edf7;
        position: absolute;
        left: -30px;
        z-index: 1;
        opacity: 0.7;
        top: -10px;
      }

    }

    .product-tile-text {
      padding-right: 30px;
    }

    .linechart-div {
      text-align: center;

      h5 {
        color: $mediumGrey;
        font-size: 14px;
      }

      .method-line-chart {
        padding: 20px;
        background: #eff1f8;
        border-radius: 4px;
        margin-bottom: 25px;
        box-shadow: 0 3px 0 rgba(0, 29, 56, 0.1);
      }
    }

    .metric-tile {
      padding: 20px;
      background: #eff1f8;
      border-radius: 4px;
      box-shadow: 0 3px 0 rgba(0, 29, 56, 0.1);

      .metric-title {
        font-weight: bold;
        margin-bottom: 0;
      }
      .metric-value {
        font-size: 28px;
        font-weight: bold;
        line-height: 1.2;
        margin: 0;
      }
    }


  }


  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {
    .product-tile-left .linechart-div .method-line-chart {
      margin-top: 25px;
    }
  }

  @media (max-width: 575px) {
    .product-tile-left {
      text-align: center;
      padding-bottom: 30px;
    }
    .product-tile-left .product-tile-text {
      padding-right: 15px;
    }
    .product-tile-left .small-card svg {
      display: none;
    }
    .product-tile-left .metric-tile {
      margin-bottom: 15px;
    }
    .product-tile-left .linechart-div .method-line-chart {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 480px) {

  }
</style>
