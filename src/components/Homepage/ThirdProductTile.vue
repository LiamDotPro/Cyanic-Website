<template>
  <div class="ThirdProductTile">
    <div class="container">
      <div class="row">
        <div class="col-lg product-tile-text">
          <h3>Our Approach</h3>
          <p>
            One of our core aims is to engage as many of your users as possible, creating positive user experiences which maximize your online presence. We've already helped brands reach millions of potential customers.
          </p>
          <p class="second-text">
            Our graph shows how influential a good website could be to growing your existing user base and creating brand awareness. Connecting customers can sometimes be as simple as building on your existing offerings. By implementing a news tracker we've helped hundreds of thousands of people get the news they want while creating potential leads for the business.
          </p>
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
    background: #f6f6f6;
    color: #5f6b82;
    padding-bottom: 125px;

    h3 {
      color: #027ef1;
    }

  }

</style>
