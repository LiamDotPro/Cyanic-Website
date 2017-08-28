<template>
  <div class="Prices">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="testimonial-tile">
            <span class="testimonial-title">Methodgg</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales  nisl in ligula finibus suscipit. Mauris sodales eros vel!</p>
            <ul class="list-unstyled">
              <li></li>
            </ul>
            <a href="" class="twitter-handle">@methodgg</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Prices',
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
