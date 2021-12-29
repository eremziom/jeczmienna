<template>
<div class="container">
  <div class="imgBaner">
  </div>
  <h2 style="margin: 0; opacity: 1; color: black; z-index: 10;">Jęczmienna 33</h2>
</div>
  <!-- <img alt="Vue logo" class="imgBaner" src="./assets/nove-zdrovie.jpeg"> -->
</template>

<script>

export default {
  name: 'App',
  components: {
    
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
  background-image: url('./assets/nove-zdrovie.jpeg')
}
body {
  margin: 0;
}
</style>
