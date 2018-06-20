<template>
  <div id="app">
    <div>
   <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
    <img src="./assets/ituneslogo.jpg">
     
    <Itunes/>
    <router-view/>
  </div>
</template>

<script>
import Itunes from './components/Itunes.vue'

import axios from 'axios';

export default {
  name: 'App',
  components: {
    Itunes
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
