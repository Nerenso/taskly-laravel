<template>
  <Teleport to="body">
    <div
      v-if="showSideBar"
      @click="hideSideBar"
      class="fixed h-screen inset-0 w-full top-0 transition-all duration-300"
      :class="{ 'z-40 bg-black/50': mountElement, 'z-40 bg-transparent': !mountElement }"
    >
      <div
        class="w-[320px] h-screen bg-white dark:bg-slate-900 fixed right-0 z-999 transition-all duration-300"
        :class="{ 'translate-x-0': mountElement, 'translate-x-full': !mountElement }"
        @click.stop
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, Teleport } from "vue";

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(["close"]);

// const visible = ref(props.visible);

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
    emit("close");
  }, 350);
};

watch(
  () => props.visible,
  (val) => {
    if (val) {
      setShowSideBar();
    } else {
      hideSideBar();
    }
  }
);
</script>
