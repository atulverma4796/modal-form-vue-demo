<template>
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Modal/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "./components/modal.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
