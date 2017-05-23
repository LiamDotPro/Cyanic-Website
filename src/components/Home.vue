<template>
  <div class="Home">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <h1>{{ msg }} <icon name="beer" scale="1.5"></icon></h1>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Cyanic'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .Home {

  }

</style>
