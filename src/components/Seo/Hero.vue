<template>
  <div class="Description-Hero">

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1>Search Engine Optimisation</h1>
          <p>Increasing your visibility on search engines helps your business or personal website in a number of ways. Search engine optimisation (SEO) services help to format, expose and promote content to attract potential customers and general users to your website. From here you can attempt to convert these visitors into customers, to engage them in the content of your website or to have users submit data for future use (such as signing up for a marketing newsletter). </p>
        </div>
        <div class="col-lg-4 hidden-md-down">
          <div class="image-wrap">
            <img src="../../assets/img/top-side-images/seo/seo.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Description',
    data () {
      return {
        header: 'Building Web Experiences for the Future'
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start coding!
  @import "../../assets/master";

  .Description-Hero {
    padding-bottom: 150px;
    padding-top: 150px;
    position: relative;

   h1 {
     color:#fff;
     font-size: 40px;
     font-weight: bold;
   }
    p {
      padding-top: 10px;
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 25px;
      color: #fff;
    }
    .service-back-grad {
      position: absolute;
      right: 0;
      left: 0;
      height: 100px;
      bottom: 0;
      z-index: 5;
      background: url(../../assets/img/cyanic-blue-bg-short-bottom.jpg) no-repeat bottom center;
      background-size: 100% 100px;
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {
    .hidden-md-down {
      display: block;
    }
    .Description-Hero {
      padding-bottom: 40px;
      padding-top: 100px;
      text-align: center;
    }
    .Description-Hero .service-back-grad {
      display: none;
    }
  }

  @media (max-width: 575px) {

  }

  @media (max-width: 480px) {

  }
</style>
