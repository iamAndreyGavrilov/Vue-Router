<script setup>
import cars from '../data/cars.json'
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="home">
    <h1>home</h1>
    <div class="cars">
      <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">{{ car.name }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}

.cars a {
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #000;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>