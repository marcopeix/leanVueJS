<template>
<div class="container">
  <div class="ro">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <app-header></app-header>
      <h1>Routing</h1>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>

import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
</style>
