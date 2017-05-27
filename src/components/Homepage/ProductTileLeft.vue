<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <h1>Successful Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda delectus, deserunt, dicta doloremque eius ex facilis fuga harum incidunt ipsum nihil porro quaerat repudiandae similique sunt? Officiis, reprehenderit!
          </p>
          <div class="row">
            <div class="col-md small-card">
              <icon name="line-chart" scale="6"></icon>
              <h3>Successful Products</h3>
              <p>
                facilis fuga harum incidunt ipsum nihil porro quaerat repudiandae similique sunt? Officiis, reprehenderit!
              </p>
            </div>
            <div class="col-md small-card">
              <icon name="rocket" scale="6"></icon>
              <h3>Successful Products</h3>
              <p>
                 ex facilis fuga harum incidunt ipsum nihil porro quaerat repudiandae similique sunt? Officiis, reprehenderit!
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

  .product-tile-left {
    background: $primaryWhite;
    text-align: left;

    padding-top: 60px;
    padding-bottom: 60px;

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
      }

    }

  }

</style>
