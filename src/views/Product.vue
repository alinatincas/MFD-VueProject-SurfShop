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
        <section class="product-side">
        <img src="../assets/images/standard/img-prd.jpg" alt="">
        <h1>PRODUCT</h1>

        <!-- tabs from https://www.npmjs.com/package/vue-simple-tabs -->
        <tabs>
            <tab title="PRODUCT DESCRIPTION" active="true">
                 <div class="content">Nulla consequat massa quis enim. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. <br> <br>

                Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.</div>
            </tab> <br>
            <tab title="ADDITIONAL INFORMATION">
                <div class="content">Nulla consequat massa quis enim. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. <br> <br>

                Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.</div>             
            </tab><br>
            <tab title="REVIEWS">
                <div class="content">Nulla consequat massa quis enim. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. <br> <br>

                Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.</div> 
            </tab>
            <tab title="PRODUCT TAGS">
                <div class="content">Nulla consequat massa quis enim. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. <br> <br>

                Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.</div> 
            </tab>
        </tabs>
    </section>
    </aside>
    
    </section>
</template>


<script>
import { Tabs, Tab } from 'vue-simple-tabs';
 
  export default {
    components: { Tabs, Tab },
    
  };
</script>
