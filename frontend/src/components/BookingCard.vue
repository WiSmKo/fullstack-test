<template>
    <v-card
      class="mx-auto my-4"
      width="300"
  >
    <v-card-text class="white--text">
      <p class="ml-3">
        Course: {{booking.courseId}}
      </p>
      <p class="ml-3">
          Location: {{booking.locationId}}
      </p>
      <p class="ml-3">
          Trainer: {{booking.trainerId}}
      </p>
      <p class="ml-3">
        Students: {{booking.studentIds}}
      </p>
      <p class="ml-3">
        <span class="font-weight-bold">Start date: </span>{{dateToString(booking.startDate)}}
      </p>
      <p class="ml-3">
        <span class="font-weight-bold">End Date: </span>{{dateToString(booking.endDate)}}
      </p>
      <p class="ml-3">
        <span v-html="required"></span>
      </p>
    </v-card-text>

  </v-card>
</template>

<script setup lang="ts">
import type { Booking } from "../models/booking.model";
import { computed, defineProps } from "vue";

const props = defineProps<{
  booking: Booking
}>()
function dateToString(dbDate:string):string{
  return new Date(dbDate).toLocaleDateString("en-UK", { weekday: "short", year: '2-digit', month: 'long', day: 'numeric' });
}

const required = computed(()=>{
  if(props.booking.mandatory){
    // return  '<v-icon icon="mdiFlag" />'
    return '<span class="font-weight-bold text-red">Mandatory</span>'
  }
})
</script>