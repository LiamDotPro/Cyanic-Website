<template>
  <div class="product-tile-left">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <img src="../../assets/img/phone-block.png" alt="Product tile 1">
        </div>
        <div class="col-lg">
          <h1>Successful Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda delectus, deserunt, dicta doloremque eius ex facilis fuga harum incidunt ipsum nihil porro quaerat repudiandae similique sunt? Officiis, reprehenderit!
          </p>
          <icon></icon>
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

  }

</style>
