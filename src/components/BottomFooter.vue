<template>
  <div class="footer-bot">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="footer-navigation">
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
              <router-link to="/web">Website Design</router-link>
            </li>
            <li>
              <router-link to="/seo">SEO</router-link>
            </li>
            <li>
              <router-link to="/consultancy">Consultancy</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
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
    padding-top: 0;
    background: $primaryWhite;

    h3 {
      color: $primaryColour;
      font-size: 22px;
      text-align: left;
    }

    ul.footer-navigation {
      list-style: none;
      text-align: left;
      padding-left: 0;
      margin: 0 -25px;
      li {
         display: inline-block;

        a {
          color: $primaryColour;
          padding: 25px 30px;
          display: block;
          text-decoration: none;
          -webkit-transition: all 0.1s ease-in-out;
          -moz-transition: all 0.1s ease-in-out;
          -o-transition: all 0.1s ease-in-out;
          transition: all 0.1s ease-in-out;
        }
        a:hover, a:focus {
          background: rgb(247, 247, 248);
        }
      }
    }

  }
</style>
