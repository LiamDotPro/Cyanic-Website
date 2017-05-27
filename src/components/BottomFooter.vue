<template>
  <div class="footer-bot">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <h3>Navigation</h3>
            <ul>
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>
                <router-link to="/case-studies">Case Studies</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/web">Web</router-link>
              </li>
              <li>
                <router-link to="/seo">Seo</router-link>
              </li>
              <li>
                <router-link to="/consultancy">Consultancy</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h3>Case Studies</h3>
            <ul>
              <li>Method</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h3>Blog</h3>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="col-lg">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BottomFooter',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Start coding!
  @import "../assets/master";

  .footer-bot {
    padding-top: 30px;
    background: $primaryWhite;

    h3 {
      color: $primaryColour;
      font-size: 22px;
    }

    ul {
      list-style: none;
      text-align: left;
    }

    li {
      color: $darkGrey;

      a {
        color: $darkGrey;
      }
    }

  }
</style>
