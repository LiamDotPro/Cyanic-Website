<template>
  <div class="case-study-hero-panel">
    <div class="row">
      <div v-for="stat in stats" class="col-lg-2" :key="stat.id">
        <h3>{{stat.title}}</h3>
        <p> {{stat.figure}}</p>
      </div>
      <div class="col-lg">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CaseStudyHeroPanel',
    data () {
      return {
        stats: [
          {id: 0, title: 'Total Sessions', figure: '4.5 M'},
          {id: 0, title: 'Total Users', figure: '4.5 M'},
          {id: 0, title: 'Total Reach', figure: '4.5 M'}
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .case-study-hero-panel {

    padding-top: 20px;

    h3 {
      font-size: 16px;
      margin-bottom: 0;
    }

    p {
      margin: 0 0;
      font-size: 30px;
      font-weight: bold;
    }

  }

</style>
