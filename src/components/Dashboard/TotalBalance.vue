<template>
  <CardItem type="bg-primary" shadow="shadow-xl">
    <template #default>
      <div class="w-full text-white">
        <div class="flex flex-col">
          <h2 class="text-lg text-center">Total Balance</h2>
        </div>
        <div class=" text-center">
          <span class="text-6xl">₱ 8,000.00</span>
        </div>
      </div>
    </template>
  </CardItem>
</template>

<script lang="ts" setup>
import CardItem from "./CardItem.vue"
</script>