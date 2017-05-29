<template>
  <div class="case-study-hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <h1>Case Studies</h1>
            <h3>A showcase of our previous projects</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugit impedit magni modi optio quasi qui repudiandae sint voluptatibus? Autem delectus fugit laborum quae saepe sequi suscipit ut voluptas?</p>
          </div>
          <div class="col-lg">

          </div>
        </div>
        <case-study-hero-panel></case-study-hero-panel>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseStudyHeroPanel from './CaseStudyHeroPanel'
  export default {
    components: {CaseStudyHeroPanel},
    name: 'CaseStudyHero',
    data () {
      return {
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .case-study-hero {

    padding-top: 60px;
    padding-bottom: 30px;

    text-align: left;
    background: $primaryColour;
  }

</style>
