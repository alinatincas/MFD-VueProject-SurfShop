<template>
  <section class="home">
   <aside>

<div class="aside-panel">
   <section class="main-menu">
            <div class="menu-title">
                <a href="#" class="menu-highlight--link" v-on:click="isNinja = !isNinja" ref="open_me"> MENU </a> 
            </div>
            <div class="bg" v-show="!isNinja">
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
    
      </div> 
        <div class="slide">
          <div class="text">
            <h1 class="txt">JP FUNRIDE <br> 2017</h1>
          <p>Super easy going freeride boards <br> based on the X-Cite Ride shape <br> concept with additional control <br> and super  easy jibing.</p><br>
          <button class="btn1" type="button">BUY NOW </button>
          </div>
          
          <img class="slide-img" src="../assets/images/standard/slider01.jpg" alt="">
          <div class="prd-list">
          <h1 class="txt2"><i><b>NEW PRODUCTS</b></i></h1>
            <div class="prd1">
                <router-link to="/product"><img src="../assets/images/standard/image-product.jpg" alt=""></router-link>
                <router-link to="/product"><img src="../assets/images/standard/image-product.jpg" alt=""></router-link>
                <router-link to="/product"><img src="../assets/images/standard/image-product.jpg" alt=""></router-link>
            </div>
        </div>
        </div>
    </aside>
    </section>  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods : {
        trigger_refered_element : function(){
            this.$refs.open_me.open();
        }
    }
};

</script>
