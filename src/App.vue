<template>
<div class="container">
  <div class="imgBaner">
  </div>
  <h2 style="margin: 0; opacity: 1; color: black; z-index: 10;">Jęczmienna</h2>
  <button style="margin: 0; opacity: 1; color: black; z-index: 10;" v-on:click="sendPost">klik</button>
</div>
  <!-- <img alt="Vue logo" class="imgBaner" src="./assets/nove-zdrovie.jpeg"> -->
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    sendPost: async function(){
            const payload = {
                rtvagd: 'test123',
            } 
            await axios
                .post(`http://localhost:8000/api/rtvagds`, payload)
                .then(r => console.log(r.status))
                .catch(e => console.log(e));
            console.log('message sent')
        },
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
}
.container {
  position: relative;
  z-index: 1;
}
.imgBaner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.3;
  filter: invert(100%);
  background-size: cover;
  background-image: url('./assets/nove-zdrovie.jpeg');
  z-index: -1;
}
body {
  margin: 0;
}
</style>
