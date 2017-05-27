<template>
  <div class="container-fluid">
    <div class="container">
      <div class="NavigationTop">
        <nav class="navbar navbar-toggleable-md navbar-transparent">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link class="navbar-brand" to="/" exact="/">Navbar</router-link>

          <div class="collapse navbar-collapse pull-right" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/home" exact="/home">Home</router-link>
              </li>


              <li class="nav-item">
                <router-link class="nav-link" to="/case-studies">Case Studies</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>

              <b-nav-item-dropdown right-alignment>

                <!-- Using text slot -->
                <template slot="text">
                  <span>Services</span>
                </template>

                <b-dropdown-item to="/web">Web</b-dropdown-item>
                <b-dropdown-item to="/seo">Seo</b-dropdown-item>
                <b-dropdown-item to="/consultancy">Consultancy</b-dropdown-item>
              </b-nav-item-dropdown>

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

  .nav-link {
    color: $primaryWhite;
    opacity: 0.7;
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

    .dropdown a::after{
      color: white !important;
    }

    .navbar-toggleable-md .navbar-nav .nav-link {
      color: white !important;
    }

  }

</style>
