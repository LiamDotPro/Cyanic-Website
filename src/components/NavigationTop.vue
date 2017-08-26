<template>
  <div class="main-header">
    <div class="container">
      <div class="NavigationTop">
        <nav class="navbar navbar-toggleable-md navbar-transparent">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link class="navbar-brand" to="/"><img src="../assets/img/cyanic.png"
                                                                  alt="Cyanic Web Development Logo"></router-link>
          <div class="collapse navbar-collapse pull-right" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto main-links">
              <li class="nav-item">
                <router-link class="nav-link" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/web">Web</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/seo">SEO</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/branding">Branding</router-link>
              </li>
              <!--<li class="nav-item">-->
                <!--<router-link class="nav-link" to="/private-investigation">Private Investigation</router-link>-->
              <!--</li>-->
              <!--<li class="nav-item">-->
                <!--<router-link class="nav-link" to="/esports">Esports</router-link>-->
              <!--</li>-->
              <li class="nav-item">
                <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavigationTop',
    data () {
      return {}
    }
  }

  //  Navigation Structure - Reference for router linking -  are dropdown, + are future.
  //  home
  //  case studies
  //  contact
  //  blog
  //  Services
  //  -web
  //  -seo
  //  -consultancy
  //  +ecommernce
  //  +mobile

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/master";

  .NavigationTop {
    font-family: $fontFamily;
    padding-top: 20px;
  }

  .main-header {
    /*border-bottom: 1px solid rgba(255, 255, 255, 0.1);*/
    background: #027ef1;

    .main-links {
      margin-top: -15px;
    }
  }

  nav {
    padding-left: 0;
    padding-right: 0;
  }

  .nav-link {
    color: #fff;
    opacity: 1;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .router-link-active {

    color: $primaryWhite;
    opacity: 1;
  }

  .container-fluid {
    background: #027ef1;
    a {
      color: $primaryWhite;

    }

    span {
      color: $primaryWhite;
      opacity: 0.7;
    }

    .dropdown a::after {
      color: white !important;
    }

    .navbar-toggleable-md .navbar-nav .nav-link {
      color: white !important;
    }

  }

</style>
