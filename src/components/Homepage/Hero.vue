<template>
  <div class="hero">
    <div class="container-fluid">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-lg-7 text-left">
            <div class="hero-text-block">
              <h1>{{header}}</h1>
              <p>
                Were a youthful and rebellious web development company that creates high quality bespoke websites using cutting edge technology. We don't cut corners in making sure your customers get the experience they deserve.
              </p>

              <div class="hero-button">
                <router-link to="/portfolio">
                  <button type="button" class="btn btn-outline-secondary">
                    How we Empower Brands
                    <svgicon icon="arrow-right" width="20" height="19"></svgicon>
                  </button>
                </router-link>

              </div>

              <div class="social-links">
                <a href="" target="_blank">
                  <icon name='facebook' scale="1.2"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='linkedin' scale="1.2"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='github' scale="1.2"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='instagram' scale="1.2"></icon>
                </a>
                <a href="" target="_blank">
                  <icon name='twitter' scale="1.2"></icon>
                </a>
              </div>

            </div>
          </div>
          <div class="col-6 col-lg-5">
            <div class="anim-box">
              <transition name="slide-fade2" appear>
                <img class="img-fluid toplayer" src="../../assets/img/topLayer.png" alt="">
              </transition>
              <transition name="slide-fade1" appear>
                <img class="img-fluid midlayer" src="../../assets/img/middleLayer.png" alt="">
              </transition>
              <transition name="slide-fade" appear>
                <img class="img-fluid bottomlayer" src="../../assets/img/bottomLayer.png" alt="">
              </transition>
              <transition name="slide-up" appear>
                <img class="img-fluid image-form" src="../../assets/img/insideForm.png">
              </transition>
              <transition name="slide-right" appear>
                <img class="img-fluid typebar" src="../../assets/img/typeBar.png">
              </transition>
              <transition name="fade-in1" appear>
                <img class="img-fluid leftForward" src="../../assets/img/wordForward.png">
              </transition>
              <transition name="fade-in" appear>
                <img class="img-fluid leftForward" src="../../assets/img/wordBack.png">
              </transition>
              <transition name="grow-in" appear>
                <img class="img-fluid leftForward" src="../../assets/img/formIcons.png">
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
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


  .service-back-grad {
    position: absolute;
    right: 0;
    left: 0;
    height: 250px;
    bottom: 0;
    z-index: 5;
    background: url(../../assets/img/cyanic-dark-bg-short.jpg) no-repeat top center;
    background-size: 100% 250px;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
    transition-delay: 0s;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade1-enter-active {
    transition: all 1s ease;
    transition-delay: 0.5s;
  }

  .slide-fade1-enter, .slide-fade1-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade2-enter-active {
    transition: all 1s ease;
    transition-delay: 1s;
  }

  .slide-fade2-enter, .slide-fade2-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: all 1s ease;
    transition-delay: 1.5s;
  }

  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide-right-enter-active {
    transition: all 1s ease;
    transition-delay: 1.8s;
  }

  .slide-right-enter, .slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }

  .fade-in-enter-active {
    transition: all 0.5s ease;
    transition-delay: 2.3s;
  }

  .fade-in-enter, .fade-in-leave-to {
    opacity: 0;
  }

  .fade-in1-enter-active {
    transition: all 2s ease;
    transition-delay: 3s;
  }

  .fade-in1-enter, .fade-in-leave-to {
    opacity: 0;
  }

  .grow-in-enter-active {
    transition: all 1s ease;
    transition-delay: 3.5s;
  }

  .grow-in-enter, .grow-in-leave-to {
    transform: scale(0);
    opacity: 0;
  }

  .hero {
    background: $primaryColour;
    position: relative;
    padding-bottom: 150px;

    h1 {
      font-size: 40px;
      font-weight: bold;
    }

    p {
      padding-top: 10px;
      font-size: 16px;
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
        background: rgb(3, 119, 228);
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
        color: rgb(205, 228, 250);
        vertical-align: middle;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
    }
    .social-links a:hover {
      background: #0071dd;
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

  .leftForward {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 40;
  }

  .rightForward {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 40;
  }

  .typebar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 40;
  }

  .image-form {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 40;
  }

  .toplayer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 30;
  }

  .midlayer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 20;
  }

  .bottomlayer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 10;
  }

  .anim-box {
    position: relative;
    margin-top: 60px;
    height: 475px;
  }

  .hero-text-block {
    padding-right: 50px;
    margin-top: 80px;
    position: relative;
    z-index: 10;
  }


</style>
