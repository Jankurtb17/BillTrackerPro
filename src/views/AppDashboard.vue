<template>
  <div class="dashboard h-full w-full">
    <div class=" welcome-txt px-5 pt-5">
      <h1 class="text-3xl text-black">Hi, Jan Kurt Bayaras!</h1>
      <span class="text-xl text-gray-500">Welcome Back</span>
    </div>
    
    <div class="px-5">
      <TotalBalance/>
    </div>

    <div class="px-5 mt-5">
      <div class="flex justify-between px-1">
        <span class="text-md font-medium">Recent Billing</span>
        <span>See all</span>
      </div>
      <div class="carousel carousel-center w-full space-x-4 p-4">
        <div v-for="i in 5" :key="i">
          <div class="carousel-item">
            <RecentBill />
          </div>
        </div>

      </div>
    </div>

    <div class="p-1">
      <TransactionList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RecentBill from "../components/Dashboard/RecentBill.vue"
import TransactionList from "../components/Dashboard/TransactionList.vue"
import TotalBalance from "../components/Dashboard/TotalBalance.vue"
</script>

<style>
.dashboard {
  font-family: 'Roboto', 'sans-serif'
}
</style>