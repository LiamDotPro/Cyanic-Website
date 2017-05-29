<template>
  <div class="method-project-requirements">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <h3>Project Requirements Statement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at exercitationem expedita id ipsa nobis possimus ratione sit tempore ullam. A aliquam aspernatur autem deleniti eius et nam necessitatibus possimus.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 method-project-list">
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          <div class="col-lg-2 method-project-list">
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MethodProjectReq',
    data () {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  // Start coding!
  // Master Variable / Mixins Import
  @import "../../../../assets/master";

  .method-project-requirements {
    padding-top: 120px;
    padding-bottom: 60px;
    background: $primaryWhite;

    text-align: left;

    h3 {
      color: $primaryColour;
    }

    p {
      color: $mediumGrey;
    }

    .method-project-list {
      color: $mediumGrey;
    }
  }

</style>
