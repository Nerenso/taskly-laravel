<template>
  <div class="mx-auto max-w-md relative p-10 bg-blue-400">
    <div>Hello</div>
    <button @click="visible = true">Open Menu</button>

    <div class="text-xl">Test Page Body</div>
    <Teleport to="body">
      <div
        v-if="showSideBar"
        @click="visible = false"
        class="fixed h-screen inset-0 w-full top-0 transition-all duration-300"
        :class="{ 'z-40 bg-black/50': mountElement, '-z-10 bg-transparent': !mountElement }"
      >
        <div
          class="w-[320px] h-screen bg-white fixed right-0 transition-all duration-300"
          :class="{ 'translate-x-0': mountElement, 'translate-x-full': !mountElement }"
        >
          <button @click="visible = false">Close Menu</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch, Teleport } from "vue";
const visible = ref(false);
const mountElement = ref(false);
const showSideBar = ref(false);

const setShowSideBar = () => {
  showSideBar.value = !showSideBar.value;
  setTimeout(() => {
    mountElement.value = !mountElement.value;
  }, 50);
};

const hideSideBar = () => {
  mountElement.value = false;
  setTimeout(() => {
    showSideBar.value = false;
  }, 350);
};

watch(visible, () => {
  console.log(visible.value);
  if (visible.value) {
    setShowSideBar();
  } else {
    hideSideBar();
  }
});
</script>
