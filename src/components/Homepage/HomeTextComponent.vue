<template>
  <div class="home-text-component">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{headerText}}</h2>
          <p>{{descriptionText}}</p>
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
    background: $primaryWhite;
    padding: 60px;

    h2 {
      color: $primaryColour;
      margin-top: 20px;
      font-weight: bold;
    }

    p {
      color: $mediumGrey;
      font-size: 20px;
    }
  }

</style>
