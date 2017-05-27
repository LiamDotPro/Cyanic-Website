<template>
  <div class="icon-table">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Product title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque excepturi in.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconTable',
    data () {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .icon-table {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: left;
    color: $mediumGrey;
    background: $primaryWhite;

    svg {
      color: $primaryColour;
    }

    h3 {
      color: $primaryColour;
    }
  }

</style>
