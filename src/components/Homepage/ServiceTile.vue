<template>
  <div class="Service-tile">
    <div class="service-image">
      <img :src="image" alt="">
    </div>
    <div class="service-text">
      <h1>{{title}}</h1>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceTile',
    data () {
      return {}
    },
    props: ['image', 'title', 'desc']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .Service-tile {
    text-align: center;
    background: $primaryWhite;
    display: block;
    border-radius: 4px;
    padding: 20px 40px 20px 40px;
    height:100%;

    h1 {
      font-size: 26px;
      color: $primaryColour;
    }

    p {
      color: $lightGrey;
    }

    .service-text{
      margin-bottom: 20px;
    }
  }

</style>
