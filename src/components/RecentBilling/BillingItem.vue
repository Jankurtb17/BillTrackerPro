<template>
  <CardItem shadow="shadow-lg">
    <template #default>
      <div class="flex gap-4">
        <div>
          <TransactionType :type="props.type" />
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <h1 class="text-xl">{{ props.type }}</h1>
            <span class="text-lg">₱ {{ props.amount }}</span>
          </div>
          <span class="text-gray-400">{{ props.date_posted }}</span>
          <div class="avatar-group -space-x-6 rtl:space-x-reverse">
            <div class="avatar">
              <div class="w-10">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-10">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-10">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-10">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div>
            <progress class="progress progress-success w-56" value="20" max="100"></progress>
          </div>
        </div>

        
      </div>


    </template>
  </CardItem>

</template>

<script lang="ts" setup>
import TransactionType from "../Dashboard/TransactionType.vue"
import CardItem from "../Dashboard/CardItem.vue";
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