<script setup>
import {useRoute} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
// route.params - объект с параметрами маршрута /cars/:id

// const car = cars.find((car) => car.id === parseInt(route.params.id));
const car = cars.find((car) => car.id === +route.params.id);

const {name, price, year} = car;

</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ price }}</p>
    <p>{{ year }}</p>
  </div>
</template>


<style lang="scss" scoped>

</style>