<template>
  <div class="dashboard h-full w-full">
    <div class=" welcome-txt px-5 py-5">
      <h1 class="text-4xl text-black">Hi, Jan Kurt Bayaras!</h1>
      <span class="text-xl">Welcome Back</span>
    </div>
    
    <div class="px-5">
      <CardItem>
        <template #default>
          <div class="w-full">
            <div class="flex flex-col">
              <div class="flex justify-between ">
                <h2 class="text-md">Total Balance</h2>
                <button @click="toggleEyeCon">
                  <font-awesome-icon :icon="showDots ? 'eye-slash' : 'eye'" />
                </button>
              </div>
              <div class="eyecon text-4xl flex gap-3 mt-3">
                <span>₱</span>
                <div v-if="showDots" class="dots">
                  <span v-for="(dot, index) in dotsArray" :key="index">•</span>
                </div>
                <div v-else class="number tracking-wide"> {{ number }}</div>
  
              </div>
            </div>
          </div>
        </template>
      </CardItem>
    </div>

    <div class="px-5">
      <div class="card border shadow-xl mt-4 payment">
        <div class="card-body text-center">
          <div class="flex justify-evenly items-center gap-3">
            <DashboardIcons :icon="faHouse" label="Rent"/>
            <DashboardIcons :icon="faCreditCard" label="Credit"/>
            <DashboardIcons :icon="faBolt" label="Electric"/>
            <DashboardIcons :icon="faWater" label="Credit"/>
          </div>
        </div>  
      </div>
    </div>

    <div class="p-1">
      <Transactions />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import CardItem from "../components/Dashboard/CardItem.vue"
import { faHouse, faWater, faBolt, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DashboardIcons from "../components/Dashboard/DashboardIcons.vue"
import Transactions from "../components/Dashboard/Transactions.vue"
const number = ref('8000');
const showDots = ref(false);

const dotsArray = computed(() => number.value.split(''));

const toggleEyeCon = () => {
  showDots.value = !showDots.value;
};
</script>

<style>
.dashboard {
  font-family: 'Roboto', 'sans-serif'
}

.payment {
  /* background-color: #99BC85; */
}
</style>