<template>
  <div class="Service-tile">
    <div class="service-tile">
      <div class="service-image">
        <img :src="image" alt="">
      </div>
      <div class="service-text">
        <h1>{{title}}</h1>
        <span>{{desc}}</span>
      </div>
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
    min-width: 300px;
    min-height: 300px;
    background: $primaryWhite;
    vertical-align: middle;
    padding-top: 20px;
    display: block;
    overflow: hidden;
    margin: 10px 10px;

    border-radius: 4px;

    p {
      color: black;
    }

    h1 {
      font-size: 26px;
      color: $primaryColour;
    }

    span {
      color: $lightGrey;
    }
  }

</style>
