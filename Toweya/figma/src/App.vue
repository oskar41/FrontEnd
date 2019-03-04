<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <h1>Site</h1>
          </div>
        </div>
        <hr>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-2 menu">
            <div>

            </div>
          </div>
          <div class="col col-sm-10">
            <router-view></router-view>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',


}
</script>

<style>

</style>
