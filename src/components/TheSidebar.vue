<template>
  <ul class="menu bg-base-200 min-h-full w-80 p-4">
    <!-- Sidebar content here -->
    <div class="mt-2 block max-sm:hidden">
      <h1 class="text-4xl title">Bill Tracker Pro</h1>
    </div>
    <li><router-link to="/dashboard">
        <FontAwesomeIcon :icon="faGauge" class="h-4 mr-7" /><span class="text-xl">Dashboard</span>
      </router-link></li>
    <li><router-link to="/payments">
        <FontAwesomeIcon :icon="faMoneyBill" class="h-4 mr-7" /><span class="text-xl">Payments</span>
      </router-link></li>
    <li><router-link to="/settings">
        <FontAwesomeIcon :icon="faGear" class="h-4 mr-7" /><span class="text-xl">Settings</span>
      </router-link></li>
  </ul>
</template>

<script lang="ts" setup>
import { faGauge, faMoneyBill, faGear } from '@fortawesome/free-solid-svg-icons';
</script>

<style scoped>
.title {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>
