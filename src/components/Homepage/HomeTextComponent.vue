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
        descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad atque blanditiis enim, explicabo facilis harum hic id iste minima nam nisi numquam praesentium quaerat quod recusandae sint vel veritatis.'
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
    }

    h3 {
      color: $lightGrey;
    }
  }

</style>
