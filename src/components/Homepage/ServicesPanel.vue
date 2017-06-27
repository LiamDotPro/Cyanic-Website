<template>
  <div class="Services-panel">
    <div class="container">
      <div class="row">
        <div class="col-lg" v-for="services in tiles">
          <service-tile :title="services.title" :image="services.image"
                        :desc="services.desc" :link="services.link" :key="services.id">
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
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit.',
            link: 'web'
          },
          {
            id: 2,
            image: require('../../assets/img/icon2.png'),
            title: 'Search Engine Optimisation',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit.',
            link: 'seo'
          },
          {
            id: 3,
            image: require('../../assets/img/icon3.png'),
            title: 'Consulting',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda delectus eaque libero minus non praesentium reprehenderit.',
            link: 'consulting'
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
    background: -webkit-gradient(linear, left top, right top, from(#027ef1), to(#0173dd));
    background: -webkit-linear-gradient(top, #027ef1, #0173dd);
    background: -moz-linear-gradient(top, #027ef1, #0173dd);
    background: -o-linear-gradient(top, #027ef1, #0173dd);
    background: -ms-linear-gradient(top, #027ef1, #0173dd);
    background: linear-gradient(top, #027ef1, #0173dd);
    background-color: #027ef1;
    padding-top: 50px;
    padding-bottom: 50px;

  }

</style>
