<template>
  <div class="Portfolio">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page-title-block">
            <h1 class="main-title">Portfolio</h1>
            <h2 class="sub-title">A collection of our work for a range of clients</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="project in getProjects" class="col-sm-6 col-md-6">
          <div class="portfolio-tile">
            <router-link class="project-link" :to="'/project' + project.pagelink">
              <img class="img-fluid" :src="project.tileimage" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Portfolio',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    },
    computed: {
      getProjects: function () {
        return this.$store.state.projects
      }
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../assets/master";

  .Portfolio {
    padding: 50px 0 100px 0;
    background: url(../assets/img/cyanic-dark-background.jpg) no-repeat bottom center;
    background-size: 100% auto;

    .project-link {
      display: block;
    }

    .portfolio-tile {
      border-radius: 5px;
      margin: 15px 0;
      border: 2px solid #1f84e3;
      -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      overflow: hidden;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      opacity: 0.9;
    }
    .portfolio-tile:hover {
      -webkit-transform: scale(1.025);
      -moz-transform: scale(1.025);
      -o-transform: scale(1.025);
      -ms-transform: scale(1.025);
      transform: scale(1.025);
      opacity: 1;
    }
  }
</style>
