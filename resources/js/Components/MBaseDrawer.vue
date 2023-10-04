<template>
  <Teleport to="body">
    <div>
      <Presence>
        <Motion
          v-if="show"
          @click="hideSideBar"
          class="fixed top-0 bg-black/40 dark:bg-black/60 h-screen w-full z-40"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.3 }"
        />
      </Presence>

      <Presence>
        <Motion
          v-if="show"
          class="fixed right-0 top-0 h-screen w-[320px] bg-white z-50 shadow-lg"
          :initial="{ x: 320 }"
          :animate="{ x: 0 }"
          :exit="{ x: 320 }"
          :transition="{ duration: 0.3 }"
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
