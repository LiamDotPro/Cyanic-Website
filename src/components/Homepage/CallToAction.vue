<template>
  <div class="CallToAction">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <h1>Call to Action!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CallToAction',
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

  .CallToAction {

    .container-fluid {

      background-color: $secondaryColour;

      .container {
        padding-top: 100px;
        padding-bottom: 100px;
      }
    }

  }

</style>
