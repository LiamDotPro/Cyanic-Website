<template>
  <div class="col-lg-2">
    <div class="tech-block">
      <b-tooltip :content="name" popover-style="{background: #ffffff;}" placement="bottom">
        <img ref="image" class="img-fluid" :src="src">
      </b-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TechnologyBlock',
    data () {
      return {
      }
    },
    props: ['name', 'src']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .tech-block {

  }

</style>
