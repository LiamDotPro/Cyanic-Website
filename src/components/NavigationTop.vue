<template>
  <div class="NavigationTop">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/home">Navbar</router-link>

      <div class="collapse navbar-collapse pull-right" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Home</router-link>
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
            <router-link class="nav-link" to="/case-studies">Case Studies</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
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
  $fontFamily: 'Oxygen', sans-serif;
  .NavigationTop {
    font-family: $fontFamily;
  }
</style>
