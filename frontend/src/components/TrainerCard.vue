<template>
    <v-card
        class="mx-auto my-4"
        width="300"
    >
        <v-card-title class="white--text mt-4">
            <p class="ml-3">
                {{trainer.firstName}} {{trainer.lastName}}
            </p>
        </v-card-title>
        <v-card-subtitle>
            <p class="ml-3">
                {{trainer.city}}, {{trainer.country}}
            </p>
        </v-card-subtitle>
        <v-card-text>
            <div class="font-weight-bold ml-3 mb-2">
                <v-chip 
                    v-for="competency of competencies"
                    :competency="competency"
                    outlined :color="chipColor"></v-chip>
                    {{trainer.competencies}}
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Trainer } from '@/models/trainer.model';
import { defineProps, computed, ref } from 'vue';

const props = defineProps<{
    trainer: Trainer
}>()

const competencies = ref([])
const show = ref(false)

const level = computed(()=>{
  switch (props.trainer.level) {
    case 1:
      return 'Beginner'
    case 2:
      return 'Improver'
    case 3:
      return 'Intermediate'
    case 4:
      return 'Experienced'
    case 5:
      return 'Expert'
  }
})

const chipColor = computed(()=>{
  switch (props.trainer.competencies) {
    case "Backend":
      return 'red'
    case "Cloud":
      return 'blue'
    case "Frontend":
      return 'green'
    case "Fullstack":
      return 'primary'
    case "Security":
      return 'orange'
  }
})
</script>