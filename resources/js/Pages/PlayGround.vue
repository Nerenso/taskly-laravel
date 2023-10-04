<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center">
    Hello From Playground
    <button @click="openSideBar = true">Open SideBar</button>
  </div>
  <MBaseDrawer :is-visible="openSideBar" @close="openSideBar = false" />
</template>

<script setup>
import MBaseDrawer from "@/Components/MBaseDrawer.vue";
import { ref } from "vue";

const openSideBar = ref(false);
</script>
