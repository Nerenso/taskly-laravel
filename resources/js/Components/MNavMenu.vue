<template>
  <Teleport to="body">
    <div>
      <Presence>
        <Motion
          v-if="show"
          @click="hideSideBar"
          class="fixed top-0 bg-black/50 dark:bg-black/70 h-screen w-full z-40"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.3 }"
        />
      </Presence>

      <Presence>
        <Motion
          v-if="show"
          class="fixed top-0 max-w-lg inset-x-0 mx-auto z-50 overflow-hidden"
          :initial="{ y: -300, scale: 0.5, opacity: 0 }"
          :animate="{ y: 0, scale: 1, opacity: 1 }"
          :exit="{ y: -300, scale: 0.5, opacity: 0 }"
          :transition="{ duration: 0.3, easing: 'ease' }"
        >
          <slot></slot>
        </Motion>
      </Presence>
    </div>
  </Teleport>
</template>

<script setup>
import { Motion, Presence } from "motion/vue";
import { watch } from "vue";
import { ref } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close"]);
const show = ref(false);

const hideSideBar = () => {
  emit("close");
  show.value = false;
};

const showSideBar = () => {
  show.value = true;
};

watch(
  () => props.isVisible,
  (val) => {
    if (val) {
      showSideBar();
    } else {
      hideSideBar();
    }
  }
);
</script>
