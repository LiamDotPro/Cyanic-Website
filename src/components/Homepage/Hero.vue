<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xs-6 col-lg-7 text-left">
            <div class="hero-text-block">
              <h1>{{header}}</h1>
              <p>
                Were a youthful and rebellious web development company that creates high quality bespoke websites using cutting edge technology. We don't cut corners in making sure your customers get the experience they deserve.
              </p>

              <div class="hero-button">
                <router-link to="/portfolio">
                  <button type="button" class="btn btn-outline-secondary">
                    How we Empower Brands
                    <svgicon icon="arrow-right" width="20" height="19" color="#fff"></svgicon>
                  </button>
                </router-link>

              </div>

              <div class="social-links">
                <a href="" target="_blank">
                  <icon name='facebook' scale="1.5"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='linkedin' scale="1.5"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='github' scale="1.5"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='instagram' scale="1.5"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='twitter' scale="1.5"></icon>
                </a>
              </div>

              <!--<div class="hero-bottom-text">-->
              <!--<div class="hero-bottom-card">-->
              <!--<h3>Case Study: Method Gaming</h3>-->
              <!--<h5>-->
              <!--We helped Method.gg reach more than 4m people in 2017 by creating and designing a full bespoke system that is now enjoyied by millions of users annually.</h5>-->
              <!--<router-link to="/case-studies/method">Find out more</router-link>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </div>
          <div class="col-xs-6 col-lg-5">
            <img class="img-responsive" src="../../assets/img/feature-framework-img.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Hero',
    data () {
      return {
        header: 'Building Web Experiences for the Future'
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start coding!
  @import "../../assets/master";

  .hero {
    background: $primaryColour;

    h1 {
      font-size: 30px;
    }

    p {
      padding-top: 10px;
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 25px;
    }

    .hero-bottom-text {

      padding-top: 120px;
      color: $mediumGrey;
      .hero-bottom-card {
        border-radius: 4px;
        padding: 20px 10px 20px 10px;
        box-shadow: 0 4px 0 #e1dede;
        background: $primaryWhite;
      }

      h5 {
        font-size: 16px;
      }

      a {
        color: $primaryDark;
        text-decoration: none;
      }
    }

    .social-links {
      padding: 15px 0 15px 0;

      a {
        display: inline-block;
        padding: 0;
        background: rgba(0, 0, 0, 0.05);
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 50px;
        border-radius: 100px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      svg {
        color: rgba(255, 255, 255, 0.8);
        vertical-align: middle;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
    }
    .social-links a:hover {
      background: rgba(0, 0, 0, 0.1);
      svg {
        color: #fff;
      }
    }

    .hero-button {
      padding-bottom: 10px;
    }

    .btn-outline-secondary {
      color: $primaryWhite;

      a {
        color: $primaryWhite;
        text-decoration: none;
      }
    }

    .btn-outline-secondary:hover {
      background: #fff;
      color: $primaryColour;
    }
    .btn-outline-secondary:hover svg {
      color: $primaryColour;
      fill: $primaryColour;
    }

    .btn-outline-secondary:focus {
      box-shadow: none;
    }

    .hero-bottom-text {
      h3 {
        font-size: 20px;
      }
    }

  }

</style>
