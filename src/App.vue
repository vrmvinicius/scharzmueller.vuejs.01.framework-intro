<template>
  <div id="app">
     <router-view></router-view>
     <!-- <app-user></app-user> -->
     <p>This isn't Italic now!</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
