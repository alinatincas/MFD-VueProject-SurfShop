<template>
  <div class="home">
    <Aside></Aside>
    <HelloWorld msg="sdfa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'home',
  components: {
    MainHeader,
    Aside
  }
};

</script>
