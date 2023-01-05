<script setup>
import {useRoute, useRouter, RouterView} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
// route.params - объект с параметрами маршрута /cars/:id

const router = useRouter();
// router.push() - переход на другой маршрут (переход на другую страницу)

// const car = cars.find((car) => car.id === parseInt(route.params.id));
const car = cars.find((car) => car.id === +route.params.id);

const {name, price, year} = car;

</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ year }}</p>
    <p>{{ price }}</p>
    <button @click="router.push(`/cars/${+route.params.id}/contact`)">Click for contact</button>
    <RouterView/>
  </div>
</template>


<style lang="scss" scoped>

</style>