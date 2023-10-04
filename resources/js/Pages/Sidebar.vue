<template>
  <div class="min-h-screen w-full bg-slate-300 flex items-center justify-center">
    <Teleport to="body">
      <div v-if="render" class="fixed h-screen w-full top-0">
        <Transition
          enter-active-class="duration-300 ease-in"
          enter-from-class="transform opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="transform opacity-0"
          appear
        >
          <section @click="hideSideBar" v-if="show" class="fixed top-0 min-h-screen w-full bg-black/30"></section>
        </Transition>

        <Transition
          enter-active-class="duration-300"
          enter-from-class="transform translate-x-full opacity-0"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="duration-300"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="transform opacity-0 translate-x-full"
          appear
        >
          <aside v-if="show" class="fixed right-0 h-screen w-[320px] bg-white"></aside>
        </Transition>
      </div>
    </Teleport>
    <button @click="showSidebar">Open Sidebar</button>
  </div>
</template>

<script setup>
import { animate } from "motion";
import { onUpdated } from "vue";
import { onBeforeUpdate } from "vue";
import { watch, ref, Transition } from "vue";

const backdrop = ref(null);
const panel = ref(null);
const render = ref(false);
const show = ref(false);

function showSidebar() {
  // animate(backdrop.value, { opacity: 1 }, { duration: 0.5 });
  render.value = true;
  show.value = true;
}

const hideSideBar = () => {
  // animate(backdrop.value, { opacity: 0 }, { duration: 0.5 });
  show.value = false;
  setTimeout(() => {
    render.value = false;
  }, 500);
};

// onUpdated(() => {
//   if (backdrop.value) {
//     showSidebar();
//   }
// });

watch(show, (newValue, oldValue) => {
  if (newValue) {
    showSidebar();
  } else {
    hideSideBar();
  }
});
</script>
