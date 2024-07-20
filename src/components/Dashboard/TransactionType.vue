<template>
  <img src="../../assets/svg/Electric.svg" class="h-12" v-if="props.type === 'Electric'" />
  <img src="../../assets/svg/water.svg" class="h-12" v-else-if="props.type === 'Water'" />
  <img src="../../assets/svg/credit.svg" class="h-12" v-else-if="props.type === 'Credit'" />
  <img src="../../assets/svg/internet.svg" class="h-12" v-else-if="props.type === 'Internet'" />
  <img src="../../assets/svg/rent.svg" class="h-12" v-else-if="props.type === 'Rent'" />
</template>

<script lang="ts" setup>
const props = defineProps({
  type: String
})
</script>