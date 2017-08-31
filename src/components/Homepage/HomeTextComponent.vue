<template>
  <div class="home-text-component">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{headerText}}</h2>
          <p>{{descriptionText}}</p>
        </div>
        <div class="col-12 faces-col">
          <b-tooltip content="Liam Read" :popover-style="{backGround: '#ffffff'}" placement="bottom">
            <img src="../../../src/assets/img/faces/liam.jpg" class="img-fluid">
          </b-tooltip>
          <b-tooltip content="Paul Harrison" :popover-style="{backGround: '#ffffff'}" placement="bottom">
            <img src="../../../src/assets/img/faces/paul.jpg" class="img-fluid">
          </b-tooltip>
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
        headerText: 'We measure our success by your success',
        descriptionText: "We strive to make sure all of our client's projects are masterfully crafted, breath-takingly beautiful and ultimately match the requirements of what they wanted. We go above and beyond to make your dream a reality."
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

  .faces-col {
    img {
      max-width: 75px;
      max-height: 75px;
      border-radius: 50%;
    }
    div {
      display: inline-block;
      margin-right: 20px;
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {
    .home-text-component p {
      font-size: 16px;
    }
  }

  @media (max-width: 757px) {

  }

  @media (max-width: 575px) {

    .home-text-component {
      text-align: center;
      padding: 60px 0 30px 0;
    }
  }

  @media (max-width: 480px) {

  }
</style>
