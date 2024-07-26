<template>
  <img src="../../assets/svg/electric-lamp.svg" class="h-16" v-if="props.type === 'Electric'" />
  <img src="../../assets/svg/water-pump.svg" class="h-16" v-else-if="props.type === 'Water'" />
  <img src="../../assets/svg/money-icon.svg" class="h-16" v-else-if="props.type === 'Credit'" />
  <img src="../../assets/svg/internet.svg" class="h-16" v-else-if="props.type === 'Internet'" />
  <img src="../../assets/svg/rent-house.svg" class="h-16" v-else-if="props.type === 'Rent'" />
</template>

<script lang="ts" setup>
const props = defineProps({
  type: String
})
</script>