<template>
  <div class="mt-5 overflow-y-auto h-4/6" >
    <div class="px-5" v-for="bill in billingList" :key="bill.id" >
      <div class="flex " >
        <BillingItem :amount="bill.amount" :date_posted="bill.datePosted" :type="bill.type" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BackNavigation from "../BackNavigation.vue"
import BillingItem from "./BillingItem.vue"
import { ref } from "vue"
const active = ref('recent')
const setActive = (type: string) => active.value = type

const billingList = ref([
  {
    id: 1,
    type: 'Electric',
    datePosted: 'Jul 7, 2024',
    persons: ["1", "2", "3"],
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