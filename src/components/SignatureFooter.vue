<template>
  <div class="signature-footer">
    <div class="container">
      <div class="row">
        <div class="col-5">

        </div>
      </div>
      <div class="row">
        <div class="col-12 social-icons-text">
          <a href="http://facebook.com/cyanic.io" target="_blank">
            <icon name="facebook"></icon>
          </a>
          <a href="https://github.com/DualityMedia" target="_blank">
            <icon name="github"></icon>
          </a>
          <a href="http://twitter.com/cyanicio" target="_blank">
            <icon name="twitter"></icon>
          </a>
        </div>
        <div class="col-12 text-center">
          <span class="copyright-text"> © 2017 Cyanic Solutions </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignatureFooter',
    data () {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "/../assets/master";

  .signature-footer {
    text-align: left;
    color: #fff;
    background: $darkBlue;
    box-shadow: inset 0 5px 15px rgba(0,0,0,0.05);
    padding: 80px 0;
    text-align: left;
    /*border-top: 1px solid #1f84e3;*/

    .social-icons-text {
      text-align: center;

      a {
        margin-left: 2px;
        margin-right: 2px;
        text-decoration: none;
        color: #fff;
      }

    }

    .row {
      padding: 10px 0 10px 0;
    }

    .copyright-text {
      font-size: 14px;

    }

    .copyright-text {
      font-size: 14px;
      padding-left: 0;
      display: block;
    }
  }

</style>
