<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- <AppHeader /> -->
      <div class="bg-white w-full min-h-screen">
        <AppDashboard />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <TheSidebar />
    </div>
    <div class="btm-nav bg-base-300 lg:hidden">
      <router-link to="/dashboard">
        <FontAwesomeIcon :icon="faHouse" class="h-5" />
      </router-link>

      <router-link to="/transactions">
        <FontAwesomeIcon :icon="faCreditCard" class="h-5" />
      </router-link>

      <router-link to="/add-cash">
        <FontAwesomeIcon :icon="faCirclePlus" class="text-orange-600 h-9" />
      </router-link>

      <router-link to="/settings">
        <FontAwesomeIcon :icon="faSliders" class="h-5" />
      </router-link>

      <router-link to="/profile">
        <FontAwesomeIcon :icon="faMoon" class="h-5" />
      </router-link>
    </div>
  </div>


</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TheSidebar from "../../components/TheSidebar.vue";
import AppDashboard from "../AppDashboard.vue"
import {  faSun, faMoon, faHouse, faSliders, faCirclePlus, faCreditCard } from "@fortawesome/free-solid-svg-icons"
</script>

<style scoped>
.title {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>