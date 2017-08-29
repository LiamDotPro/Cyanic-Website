<template>
  <div class="Testimonials">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="testimonial-tile">
            <a target="_blank" href="http://www.twitter.com/Djari328" class="twitter-icon"><icon name="twitter" scale="1.8"></icon></a>
            <img src="../../assets/img/testimonials/djarii_400x400.jpg" alt="" class="img-fluid testimonial-avatar">
            <span class="testimonial-title">Djarii</span>
            <a target="_blank" href="http://www.twitter.com/Djari328" class="twitter-handle">@Djari328</a>
            <p>When working with Paul and Liam, it's like working with friends. They're awesome, competent and humble guys who go out of their way to perfect every aspect of their projects.</p>
          </div>
        </div>
        <div class="col">
          <div class="testimonial-tile">
            <a target="_blank" href="#" class="twitter-icon"><icon name="twitter" scale="1.8"></icon></a>
            <img src="../../assets/img/testimonials/method_400x400.jpg" alt="" class="img-fluid testimonial-avatar">
            <span class="testimonial-title">Methodgg</span>
            <a target="_blank" href="http://www.twitter.com/methodgg" class="twitter-handle">@methodgg</a>
            <p>Method has been working with Cyanic for over a year and counting. Paul and Liam understand the needs of us as a client very well and they are swift to turn a concept into a fully functional web solution.</p>
          </div>
        </div>
        <div class="col">
          <div class="testimonial-tile">
            <a target="_blank" href="http://www.twitter.com/kvestina" class="twitter-icon"><icon name="twitter" scale="1.8"></icon></a>
            <img src="../../assets/img/testimonials/tinalyra.jpg" alt="" class="img-fluid testimonial-avatar">
            <span class="testimonial-title">TinaLyra</span>
            <a target="_blank" href="http://www.twitter.com/kvestina" class="twitter-handle">@kvestina</a>
            <p>It was utmost a lovely cooperation I had with Cyanic as they were easygoing  available and helpful beyond means.</p>
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

  .Testimonials {
    @include gradient(#1989f0, #027ef1, vertical);
    padding-bottom: 30px;

    .testimonial-tile {
      padding: 40px 25px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      border-radius: 3px;
      margin-top: -50px;
      position: relative;
      text-align:center;

      .testimonial-avatar {
        max-width: 50px;
        max-height: 50px;
        border-radius: 50%;
        margin: 0 auto 5px auto;
        display: block;
      }
      .testimonial-title {
        display: block;
        font-weight:bold;
        font-size: 18px;
        color: #027ef1;
      }
      .twitter-icon {
        display: inline-block;
        position: absolute;
        right: 10px;
        bottom: 0;
        color: #a7cbea;
      }
      .twitter-handle {
        text-decoration: none;
        display: block;
        font-size: 14px;
        color: #a4a8b1;
      }
      p {
        color: #5f6b82;
        line-height: 1.7;
        margin: 10px 0;
      }
    }
  }
</style>
