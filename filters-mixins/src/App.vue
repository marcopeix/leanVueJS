<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | to-lowercase}}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { fruitMixin } from './fruitMixin';

export default {
  mixins: [fruitMixin]
}
</script>

<style>
</style>
