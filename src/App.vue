<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView, useRoute } from "vue-router";
import AppShell from "../src/views/Base/AppShell.vue"
const route = useRoute()
</script>

<template>
  <div class="main-page" v-if="route.meta.isSignin">
    <RouterView name="SignIn" />
  </div>
  <div class="main-page " v-else>
    <AppShell>
      <template #default>
        <RouterView name="Dashboard" />
      </template>
    </AppShell>
  </div>

</template>

<style>
.main-page {
  height: 100vh;
}
</style>
