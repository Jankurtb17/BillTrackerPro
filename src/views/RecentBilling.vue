<template>
  <BackNavigation title="Billing List" />
  <div role="tablist" class="tabs mt-5 px-5 gap-4">
    <a role="tab" class="tab rounded-3xl h-10" @click="setActive('recent')"
      :class="[active === 'recent' ? 'bg-lime-400' : '']">
      <span class="text-md text-green-700">Recent</span>
    </a>
    <a role="tab" class="tab rounded-3xl h-10" @click="setActive('utility')"
      :class="[active === 'utility' ? 'bg-lime-400' : '']">
      <span class="text-md text-green-700">Utility</span>
    </a>
    <a role="tab" class="tab rounded-3xl h-10" @click="setActive('completed')"
      :class="[active === 'completed' ? 'bg-lime-400' : '']">
      <span class="text-md text-green-700">Completed</span>
    </a>
  </div>

  <BillingList />
</template>

<script lang="ts" setup>
import BackNavigation from "../components/BackNavigation.vue"
import { ref } from "vue"
const active = ref('recent')
const setActive = (type: string) => active.value = type
import BillingList from '../components/RecentBilling/BillingList.vue';
</script>