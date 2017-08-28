<template>
  <div class="CallToAction">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-12 text-center">
          <div class="cta-text-block">
            <h3>Ready to start working together?</h3>
            <p>
              We're excited to hear all the ideas you have about your next project! Lets get a conversation started.</p>
            <a href="mailto:contact@cyanic.io">
              <button type="button" class="btn btn-outline-secondary">
                Send us a message
                <svgicon icon="arrow-right" width="20" height="19"></svgicon>
              </button>
            </a>
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
  @import "../assets/master";

  .CallToAction {
    text-align: left;
    background-color: $primaryColour;

    .cta-text-block {
      padding-top: 80px;
      padding-bottom: 80px;

      p {
        line-height: 1.7;
        font-size: 18px;
      }
      h3 {
        font-weight: bold;
        color: #fff;
      }
    }

  }

</style>
