<template>
  <div class="home">
    <HelloWorld msg="sdfa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    MainHeader
  }
};

</script>
