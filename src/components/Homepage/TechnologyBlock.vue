<template>
  <div class="col-lg-1 col-md-2 col-sm-2 col-3">
    <div class="tech-block">
      <b-tooltip :content="name" :popover-style="{backGround: '#ffffff'}" placement="bottom">
        <img ref="image" class="img-fluid" :src="src">
      </b-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TechnologyBlock',
    data () {
      return {}
    },
    props: ['name', 'src']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .tech-block {
    span {
      display: block;

      img {
        max-width: 65px;
        display: block;
      }
    }
  }


  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {
    .tech-block span img{
      max-width: 70%;
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 757px) {
    .tech-block span img{
      max-width: 100%;
      display: block;
    }
  }

  @media (max-width: 575px) {
    .tech-block span img{
      max-width: 60%;
      display: block;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 480px) {
    .tech-block span img{
      max-width: 100%;
      display: block;
    }
  }


</style>
