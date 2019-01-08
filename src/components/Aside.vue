<template>
    <aside>
        <section class="main-menu">
            <div class="menu-title">
                <a href="#" class="menu-highlight--link"> MENU </a> </div>
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