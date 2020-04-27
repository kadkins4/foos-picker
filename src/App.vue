<template>
  <div id="app">
    <Teams />
  </div>
</template>

<script>
import Teams from './components/Teams.vue'

export default {
  name: 'app',
  components: {
    Teams
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 15px;
}
</style>
