<template>
  <div id="app">
    <div >
        <AppHeader></AppHeader>
    </div>
    <section >
        <AppMenu></AppMenu>

        <div class="main-section">
          <router-view></router-view>
        </div>

    </section>
  </div>
</template>

<script>



import AppHeader from './components/Header';
import AppMenu from './components/Menu';

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
    width: 100%;
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
