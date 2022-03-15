<template>
    <v-card
      class="mx-auto my-4"
      width="300"
  >
    <v-card-title class="white--text mt-4">
      <p class="ml-3">
        {{location.name}}
      </p>
    </v-card-title>
    <v-card-subtitle>
        <p class="ml-3 mb-4">
            {{location.city}}, {{location.country}}
        </p>
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import type { Location } from "../models/location.model";
import { defineProps } from "vue";

const props = defineProps<{
  location: Location
}>()
</script>