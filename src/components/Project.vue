<template>
  <div class="Project">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page-title-block">
            <h1 class="main-title">{{getProjectData.name}}</h1>
            <p class="description">
              {{ getProjectData.tagline }}
            </p>
            <a v-if="getProjectData.url !== null && getProjectData.url !== ''" :href="getProjectData.url"
               class="project-url">
              <icon name="link" scale="1"></icon>
              {{ getProjectData.url.replace('http://', '') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="project-images">
      <div class="section-gradient"></div>
      <div class="container">
        <div class="row">

          <div class="col-sm-12 col-md-12" v-for="image in getProjectData.images.images">
            <div class="portfolio-tile">
              <!--<div class="image-label">Home Page</div>-->
              <img class="img-fluid" :src="image" alt="">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Project',
    data () {
      return {
        param: this.$route.params.id
      }
    },
    computed: {
      getProjectData: function () {
        return this.$store.getters.getProject('/' + this.param)
      }
    }
  }

</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../assets/master";

  .Project {
    padding: 50px 0 0 0;

    .page-title-block {
      text-align: center;

      .description {
        line-height: 1.7;
      }
    }

    .project-url {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 150px;
      background: #0071db;
      color: #fff;
      padding: 10px 20px;
      margin-top: 10px;
      margin-bottom: 15px;
      text-decoration: none !important;
      display: inline-block;

      svg {
        vertical-align: middle;
        margin-right: 5px;
      }
    }

    .project-images {
      background: $primaryWhite;
      position: relative;
      background: #0079ea url(../assets/img/cyanic-dark-background.jpg) no-repeat top center;
      background-size: 100% auto;
      padding-bottom: 50px;
    }

    .portfolio-tile {
      border-radius: 5px;
      margin: 15px 0;
      -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      overflow: hidden;
      position: relative;

      .image-label {
        position: absolute;
        bottom: 0;
        left: 0;
        background: #027ef1;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        padding: 8px 20px;
        border-radius: 0 4px 0 0;
        text-transform: uppercase;
      }
      img {
        width: 100%;
      }
    }
  }
</style>
