<template>
  <div class="static-404">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <h1>{{ msg }}</h1>
          <h2>{{ desc }}</h2>
          <router-link to="/home">
            <button class="btn btn-outline-secondary">Back to home</button>
          </router-link>
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
        msg: '404',
        desc: 'This page can not found'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/master";

  // Start coding!
  .static-404 {
    h1 {
      font-weight: bold;
      font-size: 4rem;
    }

    .row {
      padding-top: 200px;
      padding-bottom: 200px;
    }

    button {
      margin-top: 10px;
    }

  }

</style>
