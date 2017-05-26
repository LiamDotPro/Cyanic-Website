<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-lg-6 text-left">
            <h1>{{msg}}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa deserunt illum incidunt labore placeat sapiente! Aliquid assumenda autem harum illum ipsum laudantium minima nobis, numquam perferendis, quisquam repellendus sit!</p>
          </div>
          <div class="col-xs-6 col-lg-6">
            <img class="img-responsive" src="http://placehold.it/550x500" alt="">
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
        msg: 'We build Excellence'
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

    p {
      padding-top:10px;
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
