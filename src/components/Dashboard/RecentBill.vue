<template>
  <CardItem>
    <template #default>
      <h1 class="text-2xl font-bold">Starbucks</h1>
      <hr>
      <div class="flex justify-between">
        <h2 class="text-lg font-medium">Total Bill</h2>
        <span>PHP <span class="text-xl font-bold">1,400</span></span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-secondary">Split with</span>
        <div class="flex gap-4">
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-12 rounded-full">
              <span>JB</span>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-12 rounded-full">
              <span>JB</span>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-12 rounded-full">
              <span>JB</span>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-12 rounded-full">
              <span>JB</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardItem>
</template>

<script lang="ts" setup>
import CardItem from "./CardItem.vue"
</script>