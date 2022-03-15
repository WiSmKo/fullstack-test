<template>
  <v-btn @click="goToAddBooking">Add New Booking</v-btn>
  <h3 class="mt-6">Upcoming Bookings: </h3>
  <v-container
      class="d-flex flex-row flex-wrap"
  >
    <BookingCard
      v-for="booking of bookings" 
      :booking="booking"
    />
  </v-container>
</template>

<script setup>
  import router from "@/router";
  import BookingCard from "@/components/BookingCard.vue";
  import {getQuery} from "../utils/fetchbackend";
  import { onMounted, ref } from "vue";

  const bookings = ref([])
  onMounted( async ()=> {
    const bookingsResponse = await getQuery('bookings')
    bookings.value = await bookingsResponse.json()
  })

  function goToAddBooking() {
    router.push('/bookings/new')
  }
</script>

<style scoped>
</style>