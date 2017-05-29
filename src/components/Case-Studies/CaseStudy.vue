<template>
  <div class="case-study row no-gutters">
    <div class="col-lg-6">

      <img v-if="position === 'right'" class="img-fluid" :src="src" alt="">

      <div v-if="position === 'left'" class="case-study-text">
        <h2>{{title}} <span>{{tagline}}</span></h2>
        <p>{{body}}</p>
        <button type="button" class="btn btn-outline-secondary">
          View the project
          <svgicon icon="arrow-right" width="20" height="19" color="#fff"></svgicon>
        </button>
      </div>

    </div>
    <div class="col-lg-6">

      <img v-if="position === 'left'" class="img-fluid" :src="src" alt="">

      <div v-if="position === 'right'" class="case-study-text">
        <h2>{{title}} <span>{{tagline}}</span></h2>
        <p>{{body}}</p>
        <button type="button" class="btn btn-outline-secondary">
          View the project
          <svgicon icon="arrow-right" width="20" height="19" color="#fff"></svgicon>
        </button>
      </div>

    </div>
  </div>
</template>

<script>

  // Left is the text in the expression check.
  // Possibly add in computed function below which gathers true or false values.

  export default {
    name: 'CaseStudy',
    data () {
      return {}
    },
    props: ['src', 'title', 'tagline', 'link', 'linkText', 'body', 'position']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/_master";

  .case-study {
    .case-study-text {
      padding-top: 120px;
    }
  }

</style>
