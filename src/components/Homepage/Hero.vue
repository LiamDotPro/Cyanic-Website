<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-lg-6 text-left">
            <h1>{{msg}}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa deserunt illum incidunt labore placeat sapiente! Aliquid assumenda autem harum illum ipsum laudantium minima nobis, numquam perferendis, quisquam repellendus sit!</p>
            <icon class="ma-beer" scale="3" name="beer" ></icon>
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

<<<<<<< HEAD
=======
    p {
      padding-top:10px;
    }
>>>>>>> 503108e7aa4b741421fc0bb85dd29f4e3f1aceeb
    .container-fluid {

      background: $primaryColour;

      .container {
        padding-top: 120px;
        padding-bottom: 120px;

        .ma-beer{
          opacity: 0.8;
        }

      }
    }

  }

</style>
