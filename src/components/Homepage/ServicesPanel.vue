<template>
  <div class="Services-panel">
    <div class="container">
      <div class="row">
        <div class="col-lg" v-for="services in tiles">
          <service-tile :title="services.title" :image="services.image"
                        :desc="services.desc" :key="services.id">
          </service-tile>
        </div>
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
          {
            id: 1,
            image: require('../../assets/img/icon1.png'),
            title: 'Website Development',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'
          },
          {
            id: 2,
            image: require('../../assets/img/icon2.png'),
            title: 'Search Engine Optimisation',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'
          },
          {
            id: 3,
            image: require('../../assets/img/icon3.png'),
            title: 'Consulting',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit. Aperiam dicta dolores ea ipsum, maiores, nam possimus quidem reiciendis rerum sapiente vel!'
          }
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
