<template>
  <div class="Services-panel">
    <div class="container">
      <div class="row">
        <ServiceTile class="col-lg-3" v-for="services in tiles" :title="services.title" :image="services.image"
                     :desc="services.desc" :key="item"></ServiceTile>
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceTile from '../Homepage/ServiceTile'
  export default {
    name: 'ServicesPanel',
    data () {
      return {
        tiles: [
          {image: '/', title: 'Website Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'},
          {image: '/', title: 'SEO', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'},
          {image: '/', title: 'Consulting', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'}
        ]
      }
    },
    components: {
      ServiceTile
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .Services-panel {

    background: $lightGrey;
    padding-top: 50px;
    padding-bottom: 100px;

  }

</style>
