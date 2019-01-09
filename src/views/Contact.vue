<template>
    <section class="contact">
     <aside>
        
        <section class="main-menu">
            <div class="menu-title">
                <a href="#" class="menu-highlight--link"> MENU </a> 
            </div>
            <div class="bg">
                <a href="#">ABOUT</a>  <br><br>
                <a href="#">APPAREL</a>  <br><br>
                <a href="#">SURF APPAREL</a>  <br><br>
                <a href="#">WINDSURF</a>  <br><br>
                <a href="#">KITESURF</a>  <br><br>
                <a href="#">ACCESSORIES</a>  <br><br>
                <a href="#">SALE</a>  <br><br>
                <a href="#">BRANDS</a>  <br><br>
                <a href="#">BLOG</a>  <br><br>
                <a href="#">GADGETS</a>  
            </div>
            
            <div class="menu-highlight">
                <router-link to="/contact" class="menu-highlight--link">CONTACT</router-link>
            </div>
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
        <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
  novalidate="true"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Name</label><br>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="email">Email</label><br>
    <input
      id="email"
      v-model="email"
      type="email"
      name="email"
    >
  </p>
  

  <p>
    <label for="email">Company</label><br>
    <input
      id="company"
      v-model="company"
      type="text"
      name="company"
    >
  </p>
  <p>
    <label for="subject">Subject</label><br>
    <input
      id="subject"
      v-model="subject"
      type="text"
      name="subject"
    >
  </p>
  <p>
    <input
      type="submit"
      value="Send"
    >
  </p>

</form>
    </section>
    </aside>
    
    </section>
</template>



