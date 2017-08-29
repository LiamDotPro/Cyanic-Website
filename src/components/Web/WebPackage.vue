<template>
  <div class="WebPackage">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="support-package">
            <div class="row">
              <div class="col-2">
                <icon class="package-icon" scale="5" name="wrench"></icon>
              </div>
              <div class="col-10 text-left">
                <h3>For information regarding website support and maintenance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales  nisl in ligula finibus suscipit. Mauris sodales eros vel!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'WebPackage',
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

  .WebPackage {
    @include gradient(#1989f0, #027ef1, vertical);
    padding-bottom: 30px;

    .support-package {
      padding: 60px 25px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      border-radius: 3px;
      margin-top: -50px;
      position: relative;
      text-align:center;

      .package-icon {
        color: #027ef1;
      }
      p {
        color: #5f6b82;
        line-height: 1.7;
        margin: 5px 0 0 0;
      }
    }
  }
</style>
