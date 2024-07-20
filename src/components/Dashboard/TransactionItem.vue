<template>
  <div class="flex w-full justify-between transaction-item">
    <div class="flex gap-5 ">
      <div>
        <TransactionType :type="props.type"/>
      </div>
      <div>
        <h1 class="text-xl">{{ props.type }}</h1>
        <span class="text-gray-400">{{ props.date_posted }}</span>
      </div>
    </div>
    <div>
      <span class="text-lg">₱ {{ props.amount }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TransactionType from "./TransactionType.vue"
const props = defineProps({
  type: String,
  amount: Number,
  date_posted: String
})
</script>

<style scoped>
.transaction-item {
  font-family: 'Roboto', 'sans-serif'
}
</style>