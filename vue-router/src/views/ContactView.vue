<script setup>
import {useRoute} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find((car) => car.id === +route.params.id);


</script>

<template>
  <div>
    <h1>contact</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </div>
</template>


<style scoped>

</style>