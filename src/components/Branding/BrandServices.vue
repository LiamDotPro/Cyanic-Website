<template>
  <div class="BrandServices">
    <div class="container">
      <div class="row service-row service-row-boxed align-items-center">
        <div class="col-lg-9">
          <h2>Logo Design</h2>
          <p>Your logo is something that makes your branding unique and noticeable, a good logo can often make the difference between someone remembering you and potentially engaging with your offerings. Logo’s come in all different styles, sizes, colours and vary in complexity but they are often the heart and soul of a brand which is why it’s important that your logo radiates you. We have constructed logos for lots of different companies and individuals all looking for something that makes them memorable, if you have something quirky and different rest assured that we have the correct toolset to make that vision a reality.</p>
        </div>
        <div class="col-3 text-right hidden-md-down">
          <img class="img-fluid" src="../../assets/img/services/logo-design.jpg" alt="">
        </div>
      </div>
      <div class="row service-row service-row-boxed align-items-center">
        <div class="col-3 text-left hidden-md-down">
          <img class="img-fluid" src="../../assets/img/services/social-designs.jpg" alt="">
        </div>
        <div class="col-lg-9">
          <h2>Social Media Design</h2>
          <p>We have a vast amount of experience working with social media platforms and have a keen eye for where you may be able to improve on your existing branding. Alternatively, if you’re looking to create new branding across multiple platforms we can provide insight and cohesive designs that will make you stand out. Furthermore, we can also design sets of content posts such as infographics and lively images that will engage your users in the topics you like to discuss.</p>
        </div>
    </div>
    <div class="row service-row service-row-boxed align-items-center">
        <div class="col-lg-9">
          <h2>Twitch Packages</h2>
          <p>Twitch is an ever-growing platform where you’re continually competing for the limelight, with our twitch package you can be sure all your online branding is appealing and modern. Furthermore, good consistent branding that matches all your social media makes the flow to conversion from external platforms simpler and faster. We’ll take care of your header, offline screen, panels and profile picture to meet your high standards.</p>
        </div>
          <div class="col-3 text-right hidden-md-down">
            <img class="img-fluid" src="../../assets/img/services/twitch-icon.jpg" alt="">
          </div>
  </div>
      <div class="row service-row service-row-boxed align-items-center">
        <div class="col-3 text-left hidden-md-down">
          <img class="img-fluid" src="../../assets/img/services/branded-documents.jpg" alt="">
        </div>
        <div class="col-lg-9">
          <h2>Branded Documents</h2>
          <p>Internal paperwork makes up a large amount of the branded material that every business uses on a day to day basis, items such as invoices and sponsor/investor documents are some of the most critical documents to a business. If you really want to provide a true end to end experience then we can create impressive illustrations mixed with well-constructed and crafted documents that will show people you mean business.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'BrandServices',
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

  .BrandServices {
    background: $primaryWhite;
    padding: 80px 0;

    h2 {
      color: #027ef1;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.2;
    }
    p {
      line-height: 1.7;
      color: #5f6b82;
      font-size: 16px;
    }

    .service-row {
      padding: 45px 35px;
      margin-bottom: 30px;

      h2 {
        margin-bottom: 10px;
        border-bottom: none;
        padding-bottom: 0;
      }
    }
    .service-row-boxed {
      background-color: #fff;
      box-shadow: 0 0 15px 0 rgba(59, 60, 118, 0.1);
      padding: 45px 35px;

      h2 {
        margin-bottom: 10px;
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }


  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {

  }

  @media (max-width: 757px) {
    .BrandServices {
      padding: 40px 0 10px 0;
    }
  }

  @media (max-width: 575px) {

  }

  @media (max-width: 480px) {

  }

</style>
