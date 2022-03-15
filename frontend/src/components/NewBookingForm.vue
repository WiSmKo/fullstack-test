<template>
  <v-container>
    <v-form
      ref="form"
    >
      <v-select
        :items="cities"
        label="City"
        outlined      
      ></v-select>
    </v-form>
  </v-container>

</template>

<script setup lang="ts">
import { getQuery } from '@/utils/fetchbackend';
import CoursesViewVue from '@/views/CoursesView.vue';
import { computed, onMounted, ref } from 'vue';
import type { Location } from "../models/location.model";


const cities = ref([])

onMounted( async ()=> {
  const locationsResponse = await getQuery('locations/cities')
  const locationsAsJson = await locationsResponse.json()
  // .then(data=>(console.log(data)));
  
})

</script>

<style scoped>

</style>