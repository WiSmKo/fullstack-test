<template>
  <v-app>
    <v-navigation-drawer
        app
        :permanent="true"
        :expand-on-hover="true"
    >
      <v-list class="" >
        <v-list-item class="text-grey-darken-1">
          <router-link to="/courses">
            <v-icon class="mr-2" icon="mdi-library" /> Courses
          </router-link>
        </v-list-item>
        <v-list-item class="text-grey-darken-1">
          <router-link to="/locations">
            <v-icon class="mr-2"  icon="mdi-map-marker" /> Locations
          </router-link>
        </v-list-item>
        <v-list-item class="text-grey-darken-1">
          <router-link to="/trainers">
            <v-icon class="mr-2" icon="mdi-account-supervisor" /> Trainers
          </router-link>
        </v-list-item>
        <v-list-item class="text-grey-darken-1">
          <router-link to="/Bookings">
            <v-icon class="mr-2" icon="mdi-book" />
            Bookings
          </router-link>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
}
</script>

<style>
 a {
   text-decoration: none;
   color: black;
 }
</style>