<template>
  <div class="signature-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs col-lg-4 team-text">
          <span><icon name="code" scale="0.8"></icon> + <icon name="paint-brush" scale="0.7"></icon> = The Cyanic Team </span>
        </div>
        <div class="col-xs col-lg copyright-text float-right">
          <div class="float-right">
            <span class=""> © 2017 Cyanic Solutions </span>
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

    .row {
      padding: 10px 10px;
    }

    .copyright-text {
      font-size: 14px;

    }

    .team-text {
      font-size:14px;
      padding-left: 0;
    }
  }

</style>
