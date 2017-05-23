<template>
  <div class="static-404">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
          <h1>{{ msg }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFoundComponent',
    data () {
      return {
        msg: '404 not found'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Start coding!
  .static-404 {

  }

</style>
