<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView, useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue"
const route = useRoute()
</script>

<template>
  <div class="main-page" v-if="route.meta.isSignin">
    <RouterView name="SignIn" />
    <!-- <WelcomePage /> -->
  </div>
  <div class="main-page " v-else>
    <RouterView name="Dashboard" />
  </div>

</template>

<style>
.main-page {
  height: 100vh;
}
</style>
