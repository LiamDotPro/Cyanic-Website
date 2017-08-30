<template>
  <div class="contact">

    <div class="contact-hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <h1>Get in contact</h1>
          <p>Increasing your visibility on search engines helps your business or personal website in a number of ways.</p>
        </div>
      </div>
    </div>
    <div class="service-back-grad"></div>
    </div>
    <!--<div class="contact-info-block">-->
      <!--<div class="container">-->
        <!--<div class="row">-->
          <!--<div class="col-4">-->
            <!--<div class="contact-info-tile">-->
              <!--<h2>General Email</h2>-->
              <!--<p>contact@cyanic.io</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-4">-->
            <!--<div class="contact-info-tile">-->
              <!--<h2>Twitter</h2>-->
              <!--<p>contact@cyanic.io</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-4">-->
            <!--<div class="contact-info-tile">-->
              <!--<h2>Twitter</h2>-->
              <!--<p>@cyanicio</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!---->
    <!--</div>-->

    <div class="contact-form">

      <div class="container">
        <div class="row">
          <div class="col">

            <form @submit.prevent="onSubmit" method="post">
              <div class="form-group">
                <label>Full Name: </label>
                <input v-model="name" name="name" required="" type="text" class="form-control">
              </div>

              <div class="form-group">
                <label>Email Address: </label>
                <input v-model="email" name="email" required="" type="text" class="form-control">
              </div>

              <div class="form-group">
                <label for="reasonSelect">Reason for getting in contact</label>
                <select v-model="subject" class="form-control" id="reasonSelect">
                  <option>Web Development & Design</option>
                  <option>Search Engine Optimization</option>
                  <option>Twitch Design</option>
                  <option>Social Media</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea v-model="msg" class="form-control" name="message" required=""></textarea>
              </div>

              <button class="btn btn-send" type="submit">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        msg: '',
        name: '',
        subject: '',
        email: ''
      }
    },
    methods: {
      onSubmit: function (e, data) {
        this.$http.post('http://109.74.195.166:1337/contact', {
          subject: this.subject,
          name: this.name,
          email: this.email,
          message: this.msg
        }).then((res) => {
          if (res === 'success') {
          } else {
          }
        })
      }
    },
    computed: {
      getName: function () {
        return this.name
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Start coding!

  .contact-hero {
    padding-bottom: 100px;
    padding-top: 150px;
    position: relative;

    h1 {
      color: #fff;
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

    .container {
      position: relative;
      z-index: 25;
    }
    .service-back-grad {
      position: absolute;
      right: 0;
      left: 0;
      height: 150px;
      bottom: 0;
      z-index: 5;
      background: url(../assets/img/cyanic-dark-bg-short.jpg) no-repeat top center;
      background-size: 100% 150px;
    }

  }

  .contact-info-block {
    padding-bottom: 50px;
    padding-top: 50px;
    position: relative;

    .contact-info-tile {
      position: relative;
      z-index: 25;
    }

  }



  .contact-form {
    padding: 80px 15px 100px 15px;
    background: #0377e4;
    color: #fff;
    position: relative;


    .btn-send {
      background: #3193ef;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding:1.15rem 3rem;
      margin-top: 20px;
      cursor: pointer;
      font-size: 14px;
    }

    form {

      .form-control {
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-height: 56px;
        color: #fff;

        option {
          color: #fff;
          background: rgb(2, 95, 182);
          box-shadow: 0 0 0 rgb(2, 95, 182);
          border: 1px solid rgb(2, 95, 182);
        }

      }
      textarea.form-control {
        min-height: 150px;
      }
      label {
        font-weight: bold;
        margin-bottom: 3px;
        font-size: 14px;
      }
    }
  }
</style>
