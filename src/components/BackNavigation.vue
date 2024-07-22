<template>
  <div class="flex px-5 mt-5 justify-between items-center">
    <FontAwesomeIcon :icon="faChevronLeft" @click="backToDashboard" />
    <span class="text-xl font-bold">{{ props.title }}</span>
    <span></span>
  </div>
</template>

<script lang="ts" setup>
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps({
  title: String
})

const backToDashboard = () => router.push("/dashboard")

</script>