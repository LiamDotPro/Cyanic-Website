<template>
  <div class="ThirdProductTile">
    <div class="container">
      <div class="row">
        <div class="col-lg product-tile-text">
          <h3>Connecting you with potential customers</h3>
          <p>
            One of our core aims is to engage as many of your users as possible, creating positive user experiences which maximize your online presence. We've already helped brands reach millions of potential customers.
          </p>
          <p class="second-text">
            Our graph shows how influential a good website could be to growing your existing user base and creating brand awareness. Connecting customers can sometimes be as simple as building on your existing offerings. By implementing a news tracker we've helped hundreds of thousands of people get the news they want while creating potential leads for the business.
          </p>
          <div class="row small-card-row">
            <div class="col-md small-card">
              <icon name="wrench" scale="5"></icon>
              <h4>Bespoke Solutions</h4>
              <p>
                We create bespoke web experiences tailored to meet the needs of your business utilizing the best possible technology.
              </p>
            </div>
            <div class="col-md small-card">
              <icon name="heart" scale="5"></icon>
              <h4>Client Satisfaction</h4>
              <p>
                We take your opinions seriously. As the owner or creator of a brand you can be assured we have your core principles at heart.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg linechart-div">

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

  .ThirdProductTile {
    background: $primaryWhite;
    color: #5f6b82;
    padding-bottom: 125px;

    h3 {
      color: #027ef1;
    }

  }

</style>
