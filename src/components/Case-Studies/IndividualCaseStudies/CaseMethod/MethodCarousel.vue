<template>
  <div class="method-carousel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg">
          <carousel>
            <slide v-for="slide in slides" :key="slide.id">
              <img :src="slide.image" class="img-fluid" alt="">
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MethodCarousel',
    data () {
      return {
        slides: [
          {
            id: 0, image: require('../../../../assets/img/case-studies-images/method-cyanic-project-preview.jpg')
          },
          {
            id: 1, image: require('../../../../assets/img/case-studies-images/method-cyanic-project-preview.jpg')
          },
          {
            id: 2, image: require('../../../../assets/img/case-studies-images/method-cyanic-project-preview.jpg')
          }
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../../../assets/master";

  .method-carousel {
    padding-top: 20px;
    padding-bottom: 20px;
  }

</style>
