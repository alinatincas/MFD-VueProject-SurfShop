<template>
  <div class="home">

    <HelloWorld msg="sdfa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {

  name: 'home',
  components: {
    HelloWorld,
    Header
  }
}
</script>
