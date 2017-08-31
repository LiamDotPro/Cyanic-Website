<template>
  <div class="contact">

    <div class="contact-hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <h1>Get in contact</h1>
            <p>
              We’d love to hear from you! If you have any questions, feedback or interest in working with us on a project we welcome your messages and look forward to you getting in contact. To initially get in contact you can fill in the form below or send us a message via Twitter from which we can provide a more convenient or direct contact method.
            </p>
          </div>
        </div>
      </div>
      <div class="service-back-grad"></div>
    </div>

    <div class="contact-form">

      <div class="container">
        <div class="row">
          <div class="col">
            <form v-show="!getEmailedState" @submit.prevent="onSubmit" method="post">
              <div class="form-group">
                <label>Full Name: </label>
                <input v-model="name" name="name" required="" type="text" class="form-control">
              </div>

              <div class="form-group">
                <label>Email Address: </label>
                <input v-model="email" name="email" required="" type="text" class="form-control">
              </div>

              <div class="form-group">
                <label for="reasonSelect">Reason for getting in contact:</label>
                <select v-model="subject" class="form-control" id="reasonSelect" required>
                  <option>Web Development & Design</option>
                  <option>Search Engine Optimization</option>
                  <option>Twitch Design</option>
                  <option>Social Media</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div class="form-group">
                <label>Message:</label>
                <textarea v-model="msg" class="form-control" name="message" required=""></textarea>
              </div>

              <vue-recaptcha ref="invisibleRecaptcha"
                             @verify="onVerify"
                             @expired="onExpired"
                             size="invisible"
                             :sitekey="sitekey">
              </vue-recaptcha>

              <button class="btn btn-send" type="submit">Submit</button>
            </form>
          </div>

        </div>
        <div v-show="getEmailedState" class="emailSuccess row">
          <div class="col">
            <icon scale="4" name="check-circle"></icon>
            <h2>Your message has been sent!</h2>
            <p>We will always aim to respond to your message as soon as possible via the email you have provided.</p>
            <p>
              You can expect a quick reply during business hours (and sometimes out of business hours), otherwise it may be the next day before we can reply.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'
  export default {
    name: 'Contact',
    data () {
      return {
        msg: '',
        name: '',
        subject: '',
        email: '',
        sitekey: '6Le0xy4UAAAAAMtuCQWaBaGIfGLq4QlbHpf44QjQ'
      }
    },
    methods: {
      onSubmit: function (e, data) {
        this.$refs.invisibleRecaptcha.execute()
      },
      onVerify: function (response) {
        console.log('Verify: ' + response)
        if (!this.$store.state.emailed) {
          this.$http.post('http://109.74.195.166:1337/contact', {
            subject: this.subject,
            name: this.name,
            email: this.email,
            message: this.msg
          }).then((res) => {
            if (res.body === 'success') {
              this.name = ''
              this.email = ''
              this.msg = ''
              this.$store.dispatch('UPDATE_EMAIL_STATUS')
            } else {
            }
          })
        }
      },
      onExpired: function () {
        console.log('Expired')
      }
    },
    computed: {
      getName: function () {
        return this.name
      },
      getEmailedState: function () {
        return this.$store.state.emailed
      }
    },
    components: {
      VueRecaptcha
    },
    metaInfo: {
      title: 'Get In Contact for a website services, Logo Design and Social Branding in Derby or Reading'
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

  .emailSuccess {
    text-align: center;
    padding: 100px 0;

    svg {
      color: #3695ef;
      margin-bottom: 10px;
    }
    h2 {
      display: block;
      font-weight:bold;
    }
    p {
      font-size: 20px;
      line-height: 1.7;
      margin: 0 0 5px 0;
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
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding: 1.15rem 3rem;
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
        font-size: 16px;
      }
    }
  }


  @media (max-width: 1199px) {

  }

  @media (max-width: 991px) {
    .contact-hero {
      padding-top: 100px;
    }
    .contact-hero .service-back-grad {
      height: 50px;
      background-size: 100% 50px;
    }
  }

  @media (max-width: 757px) {
    .contact-form .btn-send {
      display: block;
      width: 100%;
    }
  }

  @media (max-width: 575px) {
    .contact-hero .service-back-grad {
      display: none;
    }
    .contact-hero {
      padding-bottom: 50px;

      h1 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 480px) {

  }
</style>
