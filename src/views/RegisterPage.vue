<template>
  <div class="w-full h-full flex flex-col justify-center px-10 gap-5">
    <div>
      <h1 class="text-5xl text-left text-indigo-500 text-center">
        Bill Tracker Pro
      </h1>
    </div>
    <div class="welcome-text mt-2 lg:text-center">
      <p class="text-2xl">Create an account</p>
    </div>
    <div class="flex flex-col gap-5">
      <input
        class="input input-lg input-bordered w-full focus:outline-none"
        placeholder="Email"
      />
      <div class="relative">
        <input
          class="input input-lg input-bordered w-full focus:outline-none"
          placeholder="Password"
          v-model="form.password"
          :type="passwordFieldType"
        />
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
        >
          <font-awesome-icon
            :icon="passwordFieldType === 'password' ? 'eye' : 'eye-slash'"
          />
        </button>
      </div>
      <div class="relative">
        <input
          class="input input-lg input-bordered w-full focus:outline-none"
          placeholder="Confirm Password"
          v-model="form.password"
          :type="passwordFieldType"
        />
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
        >
          <font-awesome-icon
            :icon="passwordFieldType === 'password' ? 'eye' : 'eye-slash'"
          />
        </button>
      </div>
    </div>
    <div>
      <button class="btn btn-primary w-full text-white">Login</button>
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
      Already had an account?
      <router-link to="/login" class="text-primary">Sign in</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const form = reactive({
  password: "",
});
const passwordFieldType = ref("password");
const togglePasswordVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};
</script>

<style scoped>
h1 {
  font-family: "Lalezar", system-ui;
  color: "blue";
}
</style>
