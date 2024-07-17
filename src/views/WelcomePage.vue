<template>
  <div>
    <font-awesome-icon :icon="faMoon" />
  </div>
  <div class="w-full h-full flex flex-col justify-center px-10 gap-5">
    <div class="flex justify-center">
      <img
        src="../assets/svg/team checklist-bro 1.svg"
        class="md:w-8/12 lg:w-5/12 lg:h-80"
      />
    </div>
    <div class="welcome-text mt-2 lg:text-center">
      <h1 class="text-6xl text-left text-indigo-500 lg:text-center">Welcome</h1>
      <p class="text-2xl">Effortless Track and</p>
      <p class="text-3xl">Manage All Utility Bills</p>
    </div>
    <div class="flex flex-col gap-5 lg:items-center">
      <router-link to="/login" class="btn btn-lg btn-primary lg:w-4/12"
        >Login</router-link
      >
      <router-link to="/register" class="btn btn-lg btn-outline lg:w-4/12"
        >Register</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<style scoped>
h1 {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>
