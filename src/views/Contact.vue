<template>
  <section class="contact">
    <aside>    
      <section class="main-menu">
          <!-- menu dropdown from: https://github.com/snokier/effect-dropdown-vue/blob/master/README_en.md -->
        <effect-dropdown  class="menu-highlight--link menu-title"  label="MENU" active-color="#26d2fc" effect="camber">
            <effect-dropdown-item class="bg content"><a href="#">ABOUT</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">APPAREL</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">SURF APPAREL</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">WINDSURF</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">KITESURF</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">ACCESSORIES</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">SALE</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">BRANDS</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">BLOG</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content"><a href="#">GADGETS</a></effect-dropdown-item>
            <effect-dropdown-item class="bg content menu-highlight"><router-link to="/contact" class="menu-highlight--link">CONTACT</router-link></effect-dropdown-item>
        </effect-dropdown>
      </section>
      <section class="tags">
        <h2><b><i>Tags Widgets</i></b></h2>
            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG</button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button>
            <button class="btn" type="button"> TAG </button><br>

        <h3><i><a href="#">view all tags -></a></i></h3>
      </section>
      <section class="contact-form">
      <h1 class="contact-title"><i><b>CONTACT US</b></i></h1>    
      <p><b>If you have questions about your order or need any <br> general information our customer service team <br> will be happy to assist you.</b></p><br>
      <form @submit.prevent="validateBeforeSubmit">
        <div>
          <label class="label">FULL NAME*</label><br>
            <input name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="e.g. robert smith">
            <b v-show="errors.has('name')"> ! </b>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div><br>
        <div>
          <label class="label">EMAIL*</label><br>
            <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="e.g. name@name.com">
            <b v-show="errors.has('email')"> ! </b>  
            <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </div><br>
        <div>
          <label class="label">COMPANY</label><br>
            <input name="company" v-model="company" v-validate="{ alpha: true }" type="text" placeholder="e.g. robert smith">
        </div><br>
        <div>
          <label class="label">SUBJECT*</label><br>
            <input name="subject" v-model="subject" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('subject') }" type="text" placeholder="e.g. info">
            <b v-show="errors.has('subject')"> ! </b>
            <span v-show="errors.has('subject')">{{ errors.first('subject') }}</span>
        </div><br>
        <div>
          <label class="label">MESSAGE</label><br>
            <input name="message" v-model="message" v-validate="{ alpha: true }" type="text" class="padd-input">
        </div><br>
        <div>
          <button type="submit" class="btn-contact" >SEND</button>
        </div>
      </form>
    </section>
    </aside>
  </section>
</template>

<script>
  export default {
    name: 'contact-form',
    data: () => ({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }),
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            alert('Submitted! Thank you!');
            return;
          }

          alert('Please write in the fields with the correct format!');
        });
      }
    }
  };
</script>



