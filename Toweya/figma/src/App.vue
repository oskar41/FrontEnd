<template>
  <div id="app">
    <div >
        <AppHeader></AppHeader>
    </div>
    <section class="main-section">
        <AppMenu></AppMenu>
        <router-view></router-view>
    </section>
  </div>
</template>

<script>


import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'

import AppHeader from './components/Header';
import AppMenu from './components/Menu';

// Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import {mapActions} from 'vuex';

export default {
  name: 'app',
  methods: {
  ...mapActions([
      "add"
    ]),
  },
  mounted() {
    this.add()
  },
  components: {
    AppHeader,
    AppMenu
  }

}
</script>

<style>
  #app{
    position: relative;
    width: 1440px;
    height: 1205px;

    background: #FFFFFF;
  }
  .main-section{
    position: absolute;
    width: 1191px;
    height: 1141px;
    left: 249px;
    top: 64px;

    background: #FFFFFF;
  }
</style>
