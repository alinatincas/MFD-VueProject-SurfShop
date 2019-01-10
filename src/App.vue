<template>
  <div id="app">
    <MainHeader></MainHeader>
    <!-- <Ether msg="ABCDFDSGSG" /> -->
    <MainMenu></MainMenu>
    <div>
      <router-view />
    </div>
   
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
// import Ether from './components/Ether.vue';

/* import VueFormGenerator from "vue-form-generator/dist/vfg-core.js";
import "vue-form-generator/dist/vfg-core.css";
 */

export default {
  name: "app",
  components: {
    MainMenu,
    MainHeader, 
    MainFooter,
    // Ether
  }
}
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto');
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
