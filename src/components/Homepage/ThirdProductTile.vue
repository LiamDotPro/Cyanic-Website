<template>
  <div class="ThirdProductTile">
    <div class="container">
      <div class="row">
        <div class="col-8 product-tile-text">
          <h3>Our Approach</h3>
          <p>
            Each project we undertake will inevitably be different to some degree so we’re experienced at strategizing the correct approach. When starting a new project we start by gathering specifications that we transform into our preliminary proposals which are drafted and sent to you for review. When confident to proceed GitHub project boards are created and utilized throughout the development stage alongside key stage meetings with clients normally conducted via communication methods convenient for the client.
          </p>
          <p>
            After development has concluded there will be a demo showcasing the final product and allowing further client input. Finally, as curtesy we often have project post mortem meetings with our clients to make sure they’re pleased with the outcome. This process has lead us to many successful endpoints for existing client, though it’s not set in stone to follow this exact plan. We try to customize and enhance as much as possible to meet your goals and expectations. By choosing us you can be sure you won’t be left in the dark wondering if anything is happening!
          </p>
        </div>
        <div class="col-4">
          <img src="../../assets/img/kanban.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MethodLineChart from './LineChart/MethodLineChart'
  export default {
    name: 'ProductTileLeft',
    data () {
      return {}
    },
    components: {
      MethodLineChart
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .ThirdProductTile {
    background: #fcfcfd;
    color: #5f6b82;
    padding-bottom: 125px;
    padding-top: 60px;

    h3 {
      color: #027ef1;
    }

  }

</style>
