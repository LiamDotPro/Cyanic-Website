<template>
  <div class="method-featured-table">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <h3>Features we Delivered</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta eius maxime quod sint, voluptatum. Aliquid delectus incidunt, molestias recusandae sunt ut? Dolorem libero nemo obcaecati pariatur quo reprehenderit, sunt.
            </p>
          </div>
        </div>
        <method-icon-table></method-icon-table>
      </div>
    </div>
  </div>
</template>

<script>
  import MethodIconTable from './MethodIconTable'

  export default {
    components: {MethodIconTable},
    name: 'MethodFeaturedTable',
    data () {
      return {}
    },
    component: {
      MethodIconTable
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../../../assets/master";

  .method-featured-table {

    padding-top: 60px;

    text-align: left;
    background: $primaryWhite;

    h3 {
      color: $primaryColour;
    }

    p {
      color: $mediumGrey;
    }
  }

</style>
