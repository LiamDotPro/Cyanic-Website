<template>
  <div class="WebPackage">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="support-package">
            <div class="row">
              <div class="col-lg-2 hidden-md-down">
                <img src="../../assets/icons/seo/wrenches.png" alt="" class="img-fluid">
              </div>
              <div class="col-lg-10">
                <h3>For information regarding website support and maintenance</h3>
                <p>For several of our previous projects we have devised support plans that include out of regular business hours contact, support for content creation on a large news platform and maintaining the availability of websites during high volumes of traffic.</p>
                <p>As standard with our projects we include support for bugs and issues that may occur shortly after a project is launched. However, this included support only covers issues with the product. If you want to feel confident that someone is there to taking care of your website beyond the initial level of support we can discuss a price for an ongoing support package that is tailored to your needs. If this is something you would like to know more about, <router-link to="/contact">get in contact</router-link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'WebPackage',
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

  .WebPackage {
    @include gradient(#1989f0, #027ef1, vertical);
    padding-bottom: 30px;

    h3 {
      margin-top: 0;
    }

    .support-package {
      padding: 60px 60px 60px 25px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      border-radius: 3px;
      margin-top: -50px;
      position: relative;

      .package-icon {
        color: #027ef1;
      }
      p {
        color: #5f6b82;
        line-height: 1.7;
        margin: 5px 0 0 0;
      }
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {
    .WebPackage .support-package {
      text-align: center;
      padding: 50px 45px;
    }
  }

  @media (max-width: 757px) {
    .WebPackage .support-package {
      text-align: center;
      padding: 40px 30px;
    }
    .hidden-md-down {
      display: block;
    }
  }

  @media (max-width: 575px) {

  }

  @media (max-width: 480px) {

  }
</style>
