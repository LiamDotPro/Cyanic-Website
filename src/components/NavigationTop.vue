<template>
  <div class="main-header">
    <div class="container">
      <div class="NavigationTop">
        <nav class="navbar navbar-toggleable-md navbar-transparent">

          <b-nav-toggle target="nav_collapse"></b-nav-toggle>

          <b-navbar toggleable type="inverse" class="main-navbar">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-link class="navbar-brand" to="/home">
              <img src="../assets/img/cyanic.png" alt="Cyanic Web Development Logo">
            </b-link>
            <b-collapse is-nav id="nav_collapse">
              <b-nav is-nav-bar class="ml-auto main-links">
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
                <li class="nav-item">
                  <a class="nav-link" href="https://medium.com/@cyanicltd" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
              </b-nav>
            </b-collapse>
          </b-navbar>

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
      margin-top: -10px;

      .nav-link {
        color: #fff !important;
        opacity: 1;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
      }

      .nav-link:hover,
      .nav-link:focus,
      .nav-link:visited {
        color: #fff;
      }
    }
  }

  .main-navbar {
    width: 100%;

    .navbar-toggler {
      border: none;
      opacity: 1;
      cursor: pointer;
      margin-top: 10px;
    }
    .navbar-toggler:hover,
    .navbar-toggler:focus {
      outline: none;
    }
  }

  .navbar-toggler-icon {
    display: block;
    margin-top: 10px;
    cursor: pointer;

    .navbar-bar {
      display: block;
      background: #fff;
      height: 3px;
      width: 100%;
      margin-bottom: 6px;
    }
  }

  nav {
    padding-left: 0;
    padding-right: 0;
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

  .navbar-brand {
    img {
      max-height: 60px;
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {
    .main-header .main-links .nav-link {
      padding-right: 0.7rem !important;
      padding-left: 0.7rem !important;
    }
  }

  @media (max-width: 757px) {
    .NavigationTop {
      padding-top: 0;
    }
    .main-header .main-links .nav-link {
      text-align: center;
      padding: 10px 0;
      background: rgb(9, 119, 222);
      border-bottom: 1px solid rgb(34, 133, 225);
    }
    .main-header .container {
      width: 100%;
      padding: 0;
    }
    .main-header .main-links {
      margin: 15px -15px 0 -15px;
      padding: 0;
      border-top: 1px solid #2285e1;
    }
    .main-header .navbar-brand {
      margin-left: 15px;
    }
  }

  @media (max-width: 575px) {

  }

  @media (max-width: 480px) {

  }

</style>
