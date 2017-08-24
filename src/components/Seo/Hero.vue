<template>
  <div class="Description-Hero">

    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <h1>Search Engine Optimisation</h1>
          <p>Increasing your visibility on search engines helps your business or personal website in a number of ways. Search engine optimisation (SEO) services help to format, expose and promote content to attract potential customers and general users to your website with the intention to convert these visitors to sales of your product or services, to engage them in the content of your website or to capture user data for future use (such as email marketing via a newsletter). </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Description',
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

  .Description-Hero {
    padding-bottom: 150px;
    padding-top: 150px;

   h1 {
     color:#fff;
     font-size: 40px;
     font-weight: bold;
   }
    p {
      padding-top: 10px;
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 25px;
      color: #fff;
    }

  }
</style>
