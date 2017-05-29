<template>
  <div class="home-text-component">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>{{headerText}}</h1>
            <h3>{{descriptionText}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeTextComponent',
    data () {
      return {
        headerText: 'We Measure our success by your success',
        descriptionText: 'We strive to make sure that all our clients projects are masterfully crafted, breath-takingly beautiful and ultimately match the requirements of what they wanted. We go above and beyond to make your dream a reality.'
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .home-text-component {

    padding-top: 50px;
    padding-bottom: 30px;

    background: $primaryWhite;

    h1 {
      color: $primaryColour;
      font-size: 36px;
    }

    h3 {
      color: $mediumGrey;
      font-size: 20px;
    }
  }

</style>
