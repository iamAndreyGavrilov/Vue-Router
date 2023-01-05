<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <RouterLink active-class="active" to="/">Home</RouterLink>
  <RouterLink active-class="active" to="/about">About</RouterLink>
  <RouterView/>
</template>

<style scoped>
.active {
  color: red;
}
</style>
