<template>
  <div class="card border mt-4 payment" :class="[props.type, props.shadow]">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: String,
  shadow: String
})
</script>