<template>
  <div class="case-studies">
    <case-study-hero></case-study-hero>
    <div class="container-fluid case-studies-inside">
      <div class="container">
        <CaseStudy v-for="study in studies"
                   v-if="!!(study.id % 2)"
                   :src="study.image"
                   :title="study.title"
                   :tagline="study.tagline"
                   :link="study.link"
                   :linkText="study.linkText"
                   :body="study.body"
                   position="left"
                   :key="study.id"></CaseStudy>

        <CaseStudy v-else
                   :title="study.title"
                   :src="study.image"
                   :tagline="study.tagline"
                   :link="study.link"
                   :linkText="study.linkText"
                   :body="study.body"
                   position="right"
                   :key="study.id"></CaseStudy>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseStudyHero from './Case-Studies/CaseStudyHero'
  import CaseStudy from './Case-Studies/CaseStudy'
  export default {
    components: {
      CaseStudy,
      CaseStudyHero
    },
    name: 'CaseStudies',
    data () {
      return {
        studies: [
          {
            id: 0,
            image: require('../assets/img/case-studies-images/method-cyanic-project-preview.jpg'),
            title: 'Method',
            tagline: 'Esports Organization',
            link: '/case-studies/method',
            linkText: 'View the Method Case Study',
            body: 'Stuffff'
          },
          {
            id: 1,
            image: require('../assets/img/case-studies-images/method-cyanic-project-preview.jpg'),
            title: 'Placeholder',
            tagline: 'Placeholder Organization',
            link: '/case-studies/placeholder',
            linkText: 'View the Placeholder Case Study',
            body: 'placeholder'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Start coding!
  @import "../assets/master";

  .case-studies {
    .case-studies-inside {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    background: $primaryDark;
  }

</style>
