<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-4 col-lg-4 text-left">
            <h1>Cyanic.io</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa deserunt illum incidunt labore placeat sapiente! Aliquid assumenda autem harum illum ipsum laudantium minima nobis, numquam perferendis, quisquam repellendus sit!</p>
          </div>
          <div class="col-xs-8 col-lg-8">
            <img src="http://placehold.it/500x250" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start coding!
  @import "../../assets/master";

  .hero {

    h1 {
      font-size: 50px;
    }
    .container-fluid {

      background: $primaryColour;

      .container {
        padding-top: 120px;
        padding-bottom: 120px;
      }
    }

  }

</style>
