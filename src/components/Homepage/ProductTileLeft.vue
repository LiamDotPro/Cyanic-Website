<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg product-tile-text">
          <h1>Connecting you with potential customers</h1>
          <p>
           One of our core aims is to make sure that the work we carry out for each indvidual clients is getting them the business they deserve. We've already helped brands reach millions of potential clients.
          </p>
          <div class="row">
            <div class="col-md small-card">
              <icon name="wrench" scale="5"></icon>
              <h3>Bespoke Solutions</h3>
              <p>
                We create bespoke web exspierences tailored to meet the needs of your business utilizing the best possible technology.
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
        <div class="col-lg">
          <img src="../../assets/img/phone-block.png" alt="Product tile 1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductTileLeft',
    data () {
      return {}
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
        opacity: 0.5;
      }

    }

    .product-tile-text {
      padding-top: 100px;
    }

  }

</style>
