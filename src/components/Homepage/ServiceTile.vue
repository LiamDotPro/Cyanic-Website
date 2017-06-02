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
    props: ['image', 'title', 'desc', 'link']
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../assets/master";

  .Service-tile {
    text-align: center;
    background: $primaryWhite;
    display: flex;
    border-radius: 3px;
    padding: 20px 30px;
    height: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 22px;
      color: $primaryColour;
      margin: 15px 0;
    }

    p {
      color: $mediumGrey;
      line-height:1.7;
      font-size:16px;
    }

    .service-image {
      flex-direction: column;
      flex-grow: 1;
      display: flex;
    }

    .service-text {
      margin-bottom: 20px;
      flex-direction: column;
      flex-grow: 0;
      display: flex;
    }
  }

</style>
