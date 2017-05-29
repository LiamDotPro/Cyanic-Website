<template>
  <div class="icon-table">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <icon name="rocket" scale="2"></icon>
          <h3>Bespoke Systems</h3>
          <p>We can tailor your needs to one complete bespoke system ideal for your business.</p>
        </div>
        <div class="col-lg">
          <icon name="paint-brush" scale="2"></icon>
          <h3>Pixel Perfect Design</h3>
          <p>Crisp, Sharp and Beautiful Industry standard imagery to represent your brand.</p>
        </div>
        <div class="col-lg">
          <icon name="cog" scale="2"></icon>
          <h3>Business Applications</h3>
          <p>Our Business applications increase your productivity, time to stop wasting time.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg">
          <icon name="users" scale="2"></icon>
          <h3>Social Media Experts</h3>
          <p>Social Media Integration as standard so your customers can find you on multiple platforms.</p>
        </div>
        <div class="col-lg">
          <icon name="universal-access" scale="2"></icon>
          <h3>Accessibility</h3>
          <p>
            We can make sure all of your customers are receiving the same experience, even if there on Internet Explorer.</p>
        </div>
        <div class="col-lg">
          <icon name="line-chart" scale="2"></icon>
          <h3>SEO</h3>
          <p>We follow search engine best practices allowing your website to be ranked effectively. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconTable',
    data () {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .icon-table {
    padding-top: 60px;
    padding-bottom: 120px;
    text-align: left;
    color: $mediumGrey;
    background: $primaryWhite;
    vertical-align: middle;

    svg {
      color: $primaryColour;
    }

    h3 {
      color: $primaryColour;
    }
  }

</style>
