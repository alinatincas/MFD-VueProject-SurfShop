import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import Contact from './views/Contact.vue';
import EffectDropdown from 'effect-dropdown-vue'
import 'effect-dropdown-vue/dist/index.css'

Vue.use(EffectDropdown)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
