<template>
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
    </aside>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    msg: String
  }
}
</script>