<template>
  <div class="Service-tile row">
    <div class="service-image col-4">
      <div class="image-wrap">
        <img :src="image" alt="" class="img-fluid">
      </div>
    </div>
    <div class="service-text col-8">
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
      <router-link :to="link" class="btn btn-service">Read More</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceTile',
    data () {
      return {}
    },
    props: ['image', 'title', 'desc', 'link']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .Service-tile {
    color: #fff;
    padding: 15px 0;
    margin: 15px 0;

    h2 {
      font-size: 22px;
      color: #fff;
      margin: 0 0 10px 0;
      font-weight: bold;
    }

    p {
      color: #fff;
      line-height:1.7;
      font-size:16px;
    }

    .service-image .image-wrap {
      background: #027ef1;
      border-radius: 250px;
      display: block;
      max-width: 200px;
      max-height: 200px;

      img {
        max-width: 110%;
        margin-left: -5%;
        margin-top: 0;
        margin-top: 0;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
    }
    .service-image .image-wrap:hover {

      img {
        margin-top: 5px;
        margin-top: -5px;
      }
    }

    .btn-service {
      position: relative;
      display: inline-block;
      background-color: transparent;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      border-radius: 3px;
      padding: 12px 30px;
      margin-top: 0;
      cursor: pointer;
      border: 1px solid #3592e9;
    }
    .btn-service:hover,.btn-service:focus,.btn-service:visited {
      background-color: $primaryColour;
      color: #fff;
    }
  }

</style>
