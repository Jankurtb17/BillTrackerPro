<template>
  <div class="bg-gray-100 mt-16 min-h-screen rounded-2xl">
    <div class="flex justify-between items-center p-5">
      <span class="text-2xl">Transactions</span>
      <span class="text-xl text-success">See all</span>
    </div>
    <div class="flex px-5 py-2" v-for="transaction in transactions" :key="transaction.id">
      <TransactionItem :type="transaction.type" :amount="transaction.amount" :date_posted="transaction.datePosted" />
    </div>
  </div>

</template>

<script lang="ts" setup>
import TransactionItem from "./TransactionItem.vue"
import { ref } from "vue";

const transactions = ref([
  {
    id: 1,
    type: 'Electric',
    datePosted: 'Jul 7, 2024',
    amount: 1100
  },
  {
    id: 2,
    type: 'Water',
    datePosted: 'Jul 7, 2024',
    amount: 200
  },
  {
    id: 3,
    type: 'Rent',
    datePosted: 'Jul 7, 2024',
    amount: 2875
  },
  {
    id: 4,
    type: 'Rent',
    datePosted: 'Jul 7, 2024',
    amount: 2875
  },
])
</script>