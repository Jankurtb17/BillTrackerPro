<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="bg-white w-full min-h-screen overflow-y-auto">
        <slot></slot>
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

      <router-link to="/billing-list">
        <FontAwesomeIcon :icon="faCreditCard" class="h-5" />
      </router-link>

      <router-link to="/dashboard">
        <FontAwesomeIcon :icon="faCirclePlus" class="text-orange-600 h-9" />
      </router-link>

      <router-link to="/settings">
        <FontAwesomeIcon :icon="faSliders" class="h-5" />
      </router-link>

      <router-link to="/settings">
        <FontAwesomeIcon :icon="faSliders" class="h-5" />
      </router-link>
    </div>
  </div>


</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TheSidebar from "../../components/TheSidebar.vue";
import AppDashboard from "../AppDashboard.vue"
import RecentBilling from "../RecentBilling.vue";
import { faMoon, faHouse, faSliders, faCirclePlus, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<style scoped>
.title {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>