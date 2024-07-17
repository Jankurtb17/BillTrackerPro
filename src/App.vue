<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import WelcomePage from "./views/WelcomePage.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="main-page">
    <!-- <WelcomePage /> -->
    <RouterView name="SignIn" />
  </div>
</template>

<style>
.main-page {
  height: 100vh;
}
</style>
