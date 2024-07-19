<template>
  <div class="navbar bg-base-200 ">
    <div class="flex flex-row justify-between w-full ">
      <div class="flex items-center">
        <label for="my-drawer-3" class="lg:hidden btn btn-square btn-ghost mr-5">
          <FontAwesomeIcon :icon="faBars" class="h-6" />
        </label>
        <div class="pt-2 lg:hidden">
          <label class="text-3xl title">Bill Tracker Pro</label>
        </div>
      </div>

      <label class="swap swap-rotate">
        <input type="checkbox" class="theme-controller" value="forest" />
        <FontAwesomeIcon :icon="faSun" class="swap-off h-6 w-6 fill-curren" />
        <FontAwesomeIcon :icon="faMoon" class="swap-on h-6 w-6 fill-current" />
      </label>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
</script>

<style scoped>
.title {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>