<template>
    <footer>
        <section class="footer__content">
            <div class="category">
                <p class="title-footer">Category</p>
                <p class="title-footer--white">
                    <router-link to="/">Home</router-link>  <br>
                    <a href="#"> about us </a> <br>
                    <a href="#">eshop</a>  <br>
                    <a href="#">Features</a>  <br>
                    <a href="#">new collections</a>  <br>
                    <a href="#">blog</a>  <br>
                     <router-link to="/contact">Contact</router-link> <br><br>
                </p>
            </div>
            <div class="account">
                <p class="title-footer">Our account</p>
                <p class="title-footer--white">
                    <a href="#">Your Account</a> <br>
                    <a href="#">Personal Information</a>  <br>
                    <a href="#">Addresses</a>  <br>
                    <a href="#">Discount</a>  <br>
                    <a href="#">Order History</a>  <br>
                    <a href="#">Addresses</a>  <br>
                    <a href="#">Search terms</a>  <br><br>
                </p>
            </div>
            <div class="support">
                <p class="title-footer">Our Support</p>
                <p class="title-footer--white">
                    <a href="#">Site Map</a> <br>
                    <a href="#">Search Terms</a>  <br>
                    <a href="#">Advanced Search</a>  <br>
                    <a href="#">Mobile</a>  <br>
                    <router-link to="/contact">Contact Us</router-link><br>
                    <a href="#">Mobile</a>  <br>
                    <a href="#">Addresses</a>  <br><br>
                </p>
            </div>
            <div class="newsletter">
                <p class="title-footer">Newsletter</p>
                <p class="text-footer--white">Join thousands of other people <br> subscribe to our news</p>
                <button class="btn1" type="button">INSERT EMAIL </button>
                <button class="btn2" type="submit">SUBMIT</button> <br><br>
                
                <img src="../assets/images/standard/aex.png" alt="card">
                <img src="../assets/images/standard/maestero.png" alt="card">
                <img src="../assets/images/standard/mastercard.png" alt="card">
                <img src="../assets/images/standard/paypal.png" alt="card">
                <img src="../assets/images/standard/visa_straight.png" alt="card">            

            </div>
            <div class="about">
                <p class="title-footer">About Us</p>
                <p class="text-footer--white"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas cum ab veritatis a laborum error ipsa amet nobis odit  recusandae. </p>
                <p class="text-footer--white">Phone: <a class="about-txt" href="tel:1-999-342-9876">  1-999-342-9876</a></p> 
                <p class="text-footer--white">e-mail: <a class="about-txt" href = "mailto: info@surfhouse.com"> <span class="yellow-span">info@surfhouse.com</span> </a></p>
            </div>
        </section>
        <section class="footer__copyright">
            <p>© 2018 SURFHOUSE</p>
        </section>
    </footer>
</template>