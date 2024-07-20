<template>
  <div class="flex flex-col gap-2">
    <button class="btn btn-md py-7 rounded-2xl flex flex-col items-center">
      <FontAwesomeIcon :icon="props.icon" class="h-7 px-1 text-primary" />
    </button>
    <span class="text-gray-400 text-xs tracking-wider">{{ label }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: Object,
  label: String
})
</script>