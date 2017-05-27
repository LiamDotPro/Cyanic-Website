<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-lg-6 text-left">
            <h1>{{header}}</h1>
            <p>
              Were a youthful and rebellious web development company that creates high quality bespoke websites using cutting edge technology. We don't cut corners in making sure your customers get the experience they deserve.
            </p>

            <div class="hero-button">
              <router-link to="/case-studies/method">
                <button type="button" class="btn btn-outline-secondary">
                  How Were Empowering Global Brands
                  <svgicon icon="arrow-right" width="20" height="19" color="#fff"></svgicon>
                </button>
              </router-link>

            </div>

            <div class="social-links">
              <a href="">
                <icon name='facebook' scale="1.5"></icon>
              </a>
              <a href="">
                <icon name='linkedin' scale="1.5"></icon>
              </a>
              <a href="">
                <icon name='github' scale="1.5"></icon>
              </a>
              <a href="">
                <icon name='instagram' scale="1.5"></icon>
              </a>
            </div>

            <div class="hero-bottom-text">
              <h3>
                We built a bespoke solution for method.gg
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque harum veritatis? Ab aliquam asperiores consequatur delectus, dolorum eligendi esse fuga illum neque possimus quis, sequi sint, soluta vero voluptatem.
              </p>
            </div>
          </div>
          <div class="col-xs-6 col-lg-6">
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

    h1 {
      font-size: 50px;
    }

    p {
      padding-top: 10px;
    }

    .container-fluid {

      background: $primaryColour;

      .container {
        padding-top: 100px;
        padding-bottom: 120px;

      }
    }

    .hero-bottom-text {
      h3 {
        padding-top: 200px;
      }
    }

    .social-links {
      padding: 15px 0 15px 0;

      svg {
        color: $primaryWhite;
        margin-right: 10px;
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
      background: $secondaryColour;
    }

    .btn-outline-secondary:focus {
      box-shadow: none;
    }

  }

</style>
