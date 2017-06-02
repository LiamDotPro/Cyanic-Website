<template>
  <div class="signature-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs col-lg-4 team-text">
          <span class=""> © 2017 Cyanic Solutions </span>
        </div>
        <div class="col-xs col-lg-4 social-icons-text">
          <a href="" target="_blank">
            <icon name="github"></icon>
          </a>
          <a href="" target="_blank">
            <icon name="facebook"></icon>
          </a>
          <a href="" target="_blank">
            <icon name="twitter"></icon>
          </a>
          <a href="" target="_blank">
            <icon name="linkedin"></icon>
          </a>
        </div>
        <div class="col-xs col-lg copyright-text float-right">
          <div class="float-right">
            <icon name="paint-brush" scale="0.9"></icon>
            +
            <icon name="code"></icon>
            <span>The Cyanic Team</span>
          </div>
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
    color: $darkGrey;
    background: $primaryWhite;
    border-top: #d7d9db 1px solid;

    .social-icons-text {
      text-align: center;

      a {
        margin-left: 2px;
        margin-right: 2px;
        text-decoration: none;
        color: $darkGrey
      }

    }

    .row {
      padding: 10px 10px;
    }

    .copyright-text {
      font-size: 14px;

    }

    .team-text {
      font-size: 14px;
      padding-left: 0;
    }
  }

</style>
