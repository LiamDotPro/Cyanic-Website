<template>
  <div class="webProcess">
    <div class="container process-container">
      <div class="row">
        <div class="col-lg">
          <h1>Our Process</h1>
          <p>
            Our process is simple and easy to understand: Initial Specifications & Requirements, Design & Prototyping, Development, Testing & Review, Post Mortem & Further Enhancements. This model of working allows us to grantee the final product matches your expectations visually and in functionality alongside stage meetings.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg row-header">
          <h2>Initial Specifications & Requirements</h2>
        </div>
      </div>
      <div class="row process-item">
        <div class="col-lg-3">
          <img :src="require('../../assets/process/process-1.png')" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8">
          <p>
            Initially we shall work with you to get an idea of what your looking to do and also scope out what technologies would best suit your project, all of these are then made into requirements that work as part of our project management.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg row-header">
          <h2>Design & Prototyping</h2>
        </div>
      </div>
      <div class="row process-item">
        <div class="col-lg-3">
          <img :src="require('../../assets/process/process-1.png')" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8">
          <p>
            At this stage of the project we look to 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WebProcess',
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

  .webProcess {
    background: #ecf0f9;
    text-align: left;

    .process-container {
      padding-top: 60px;
      padding-bottom: 60px;

      h1 {
        color: $primaryColour;
      }

      h2 {
        color: $primaryColour;
      }

      p {
        color: $mediumGrey;
      }

      .process-item {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .row-header {
        padding-top: 20px;
      }
    }
  }


</style>
