<template>
    <h3>List of Trainers</h3>
    <v-container
        class="d-flex flex-row flex-wrap"
    >
        <TrainerCard
            v-for="trainer of trainers"
            :trainer="trainer"
        />
    </v-container>
</template>
    
<script setup>

    import {getQuery} from "../utils/fetchbackend";
    import { onMounted, ref } from "vue";
    import TrainerCard from "../components/TrainerCard.vue"

    const trainers = ref([])

    onMounted( async ()=> {
        const trainersResponse = await getQuery('trainers')

        trainers.value = await trainersResponse.json()
    })

</script>

<style scoped>
</style>