<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <AppHeader />
      <div class="bg-white w-full min-h-screen">
        <AppDashboard />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <TheSidebar />
    </div>
    <!-- <div class="btm-nav ">
      <button>
        <FontAwesomeIcon :icon="faBars" />
      </button>

      <button>
        <FontAwesomeIcon :icon="faSun" />
      </button>

      <button>
        <FontAwesomeIcon :icon="faMoon" />
      </button>
    </div> -->
  </div>


</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "../../components/AppHeader.vue";
import TheSidebar from "../../components/TheSidebar.vue";
import AppDashboard from "../AppDashboard.vue"
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
</script>

<style scoped>
.title {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>