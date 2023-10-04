<template>
  <div class="flex min-h-screen bg-slate-100 w-full items-center justify-center">
    <button @click="show = true">Open Sidebar</button>
  </div>
  <Teleport to="body">
    <div>
      <Presence>
        <Motion
          v-if="show"
          @click="show = false"
          class="fixed top-0 bg-black/50 h-screen w-full"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.3 }"
        />
      </Presence>

      <Presence>
        <Motion
          v-if="show"
          class="fixed right-0 top-0 h-screen w-[320px] bg-white z-10 shadow-lg"
          :initial="{ x: 320 }"
          :animate="{ x: 0 }"
          :exit="{ x: 320 }"
          :transition="{ duration: 0.3 }"
        />
      </Presence>
    </div>
  </Teleport>
</template>

<script setup>
import { Motion, Presence } from "motion/vue";
import { ref } from "vue";

const show = ref(false);
const render = ref(false);
</script>
