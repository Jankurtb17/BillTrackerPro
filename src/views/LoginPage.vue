<template>
  <div class="w-full h-full lg:flex lg:justify-center">
    <div class="flex flex-col justify-center px-10 gap-5 w-full lg:w-4/12 h-full">
      <div>
        <h1 class="text-5xl text-left text-indigo-500 text-center">
          Bill Tracker Pro
        </h1>
      </div>
      <div class="welcome-text mt-2 lg:text-center">
        <p class="text-2xl">Login to your account</p>
      </div>
      <div class="flex flex-col gap-5">
        <input
          class="input input-lg input-bordered w-full focus:outline-none"
          placeholder="Email"
        />
        <input
          class="input input-lg input-bordered w-full focus:outline-none"
          placeholder="Password"
        />
      </div>
      <div>
        <button class="btn btn-primary w-full text-white" @click="redirectToDashboard">Login</button>
      </div>
      <div class="divider">Or login with</div>
      <div class="flex justify-center gap-20">
        <FontAwesomeIcon
          :icon="['fab', 'google']"
          class="h-8 text-orange-600 cursor-pointer"
        />
        <FontAwesomeIcon
          :icon="['fab', 'facebook']"
          class="h-8 text-blue-600 cursor-pointer"
        />
      </div>
      <p class="text-center mt-5">
        Dont have an account?
        <router-link to="/register" class="text-primary"
          >Register Here</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { useRouter } from "vue-router"
const router = useRouter()

const redirectToDashboard = () => {
  router.push("/dashboard")
}
</script>

<style scoped>
h1 {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>
