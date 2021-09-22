import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue';

Vue.component('app-user', User); //It's a global component.

new Vue({
  el: '#app',
  render: h => h(App)
})
