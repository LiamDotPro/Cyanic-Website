<template>
  <div class="method-hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg text-container">
            <h1>Method</h1>
            <h3>Professional Esports Organization</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugit impedit magni modi optio quasi qui repudiandae sint voluptatibus? Autem delectus fugit laborum quae saepe sequi suscipit ut voluptas?</p>
          </div>
          <div class="col-lg image-container">
            <img :src="image" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid stats-container">
      <div class="container">
        <div class="row stats-row">
          <div v-for="stat in stats" class="col-lg-2" :key="stat.id">
            <h3>{{stat.title}}</h3>
            <p> {{stat.figure}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MethodHero',
    data () {
      return {
        image: require('../../../../assets/img/case-studies-images/method-cyanic-project-preview.jpg'),
        stats: [
          {id: 0, title: 'Sessions', figure: '4.2M'},
          {id: 0, title: 'Users', figure: '4.2M'},
          {id: 0, title: 'Reach', figure: '4.2M'}
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../../../assets/master";

  .method-hero {
    padding-top: 60px;
    text-align: left;
    background: $primaryColour;

    .stats-container {
      background: $secondaryColour;
      .stats-row {
        padding-top: 20px;
      }

    }

    .text-container {
      p {
        padding-bottom: 100px;
      }
    }

    .image-container {
      img {
        position: absolute;
        bottom: 0;
        top: 0;
        z-index: 2;
        border-radius: 4px;

      }
    }

  }

</style>
