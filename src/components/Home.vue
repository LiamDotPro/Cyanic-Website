<template>
  <div class="Home">
  <hero></hero>
  </div>
</template>


<script>
  import Hero from './Homepage/Hero'
  export default {
    components: {Hero},
    name: 'Homepage',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Home {

  }

</style>
