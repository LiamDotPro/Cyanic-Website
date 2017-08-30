<template>
  <div class="Prices">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
          <div class="price-tile">
            <h3>Online Package</h3>
            <span class="price-amount">£150 <span class="per-month">/per month</span></span>
            <p>This package is ideal for online only websites or small businesses wanting to try the service.</p>
            <ul class="list-unstyled">
              <li>Optimisation for fewer keywords</li>
              <li>Creation of content / Collaboration on Content</li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="price-tile">
            <h3>Business Package</h3>
            <span class="price-amount">£300 <span class="per-month">/per month</span></span>
            <p>This package is ideal for small/medium businesses wanting to improve various aspects of their digital reach.</p>
            <ul class="list-unstyled">
              <li>Local and National location based SEO</li>
              <li>Optimisation for more keywords / key areas</li>
              <li>Further Creation of content / Collaboration on Content</li>
              <li>Outreach / Backlinking</li>
              <li>Page Speed Optimisation</li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="price-tile">
            <h3>Business Plus Package</h3>
            <span class="price-amount">£600 <span class="per-month">/per month</span></span>
            <p>This is our most in depth package aimed at business with large websites wanting more time invested into them.</p>
            <ul class="list-unstyled">
              <li>Everything included with the business package</li>
              <li>Use of more time consuming methods with greater analysis and implementations</li>
              <li>Focus on a much wider keyword range.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Prices',
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

  .Prices {
    @include gradient(#1989f0, #027ef1, vertical);
    padding-bottom: 30px;

    .price-tile {
      padding: 25px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      border-radius: 3px;
      margin-top: -50px;
      position: relative;
      min-height:420px;
      text-align: center;

      .price-amount {
        display: block;
        color: #027ef1;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;

        .per-month {

        }
      }
      h3 {
        margin: 0 0 5px 0;
        font-weight:bold;
        color: #5f6b82;
      }
      p {
        color: #5d6981;
        line-height: 1.7;
        margin: 10px 0;
        font-size: 14px;
      }
      ul {
        margin: 25px -25px 0 -25px;

        li {
          border-top: 1px solid #d7d9db;
          color: #5f6b82;
          padding: 8px 25px;
        }
      }
    }
  }
</style>
