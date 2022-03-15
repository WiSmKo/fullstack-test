<template>
    <v-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Course
                    </th>
                    <th class="text-left">
                        Location
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ booking.courseId }}</td>
                    <td>{{ booking.locationId }}</td>
                </tr>
            </tbody>
        </template>
    </v-table>
</template>

<script setup lang="ts">

    import type { Booking } from "../models/booking.model";
    import {defineProps} from "vue";

    const props = defineProps<{
        booking: Booking
    }>()

    let items:number[];

    function addItems(){
        items.push(props.booking.courseId)
    }

    // const course = computed(()=> {
    //         return props.booking.courseId
    // }


</script>

<style scoped>
</style>