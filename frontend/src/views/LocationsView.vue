<template>
    <h3>List of Locations</h3>
    <v-container
        class="d-flex flex-row flex-wrap"
    >
        <LocationCard
            v-for="location of locations"
            :location="location"
        />
    </v-container>
</template>

<script setup>

    import LocationCard from "../components/LocationCard.vue";
    import {getQuery} from "../utils/fetchbackend";
    import {onMounted, ref} from "vue";

    const locations = ref([])

    onMounted( async ()=> {
        const locationsResponse = await getQuery('locations')
        locations.value = await locationsResponse.json()
    })
</script>

<style scoped>

</style>