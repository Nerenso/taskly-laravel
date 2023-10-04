<template>
  <div class="flex flex-col min-h-screen w-full items-center justify-end pb-60">
    <section>
      <Presence>
        <!-- <Motion
        class="w-[300px] h-[300px] bg-emerald-500 rounded-2xl"
        v-if="show"
        :initial="{ opacity: 0, x: -300 }"
        :animate="{ opacity: 1, transition: transition, x: 0 }"
        :exit="{ opacity: 0, x: -300 }"
      /> -->
        <Motion
          @click="show = false"
          class="fixed top-0 min-h-screen w-full bg-black/30"
          data-motion-id="backdrop"
          v-if="show"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1, transition: { duration: 0.3 } }"
          :exit="{ opacity: 0, transition: { duration: 0.3 } }"
        >
          <Motion
            @click.stop
            data-motion-id="sidebar"
            class="fixed top-0 right-0 w-[320px] bg-white h-screen"
            :initial="{ opacity: 0, x: 320 }"
            :animate="{ opacity: show ? 1 : 0, x: show ? 0 : 320, transition: { duration: 0.3 } }"
            :exit="{ opacity: 0, x: 320, transition: { duration: 0.3 } }"
          />
        </Motion>
      </Presence>
      <Motion
        @click.stop
        class="fixed top-0 right-0 w-[320px] bg-white h-screen"
        :initial="{ opacity: 0, x: 320 }"
        :animate="{ opacity: show ? 1 : 0, x: show ? 0 : 320, transition: { duration: 0.3 } }"
        :exit="{ opacity: 0, x: 320, transition: { duration: 0.3 } }"
      />
      <!-- <div v-show="show" class="w-28 h-28 bg-blue-500">Box</div> -->

      <button @click="show = !show">Toggle sidebar</button>
    </section>

    <div @click="render = false" v-show="render" :ref="sidebar.backdrop" class="fixed w-full top-0 h-screen bg-black/40">
      <aside :ref="sidebar.panel" class="fixed right-0 h-screen w-[320px] bg-white"></aside>
    </div>

    <button @click="render = true">Show Side Bar</button>

    <div ref="box1" class="bg-blue-500 w-72 h-72 rounded-lg"></div>
    <div ref="box2" class="bg-emerald-500 w-72 h-72 rounded-lg"></div>
    <button @mouseenter="showBoxes = true" @mouseleave="showBoxes = false">{{ showBoxes ? "Hide" : "Show" }}</button>
  </div>
</template>

<script setup>
import { Motion, Presence } from "motion/vue";
import { ref } from "vue";
import { spring, timeline, animate } from "motion";
import { watch } from "vue";
import { toRefs } from "vue";

const sidebar = ref({
  backdrop: null,
  panel: null,
  render: false,
});

const { render } = toRefs(sidebar.value);

const showBoxes = ref(false);

const box1 = ref(null);
const box2 = ref(null);

function hideSideBar() {
  animate(sidebar.value.backdrop, { opacity: 0 }, { duration: 0.5 }, { z: -10 });
  animate(sidebar.value.panel, { x: 320 }, { duration: 0.5 });
  setTimeout(() => {
    render.value = false;
  }, 500);
}

function showSideBar() {
  render.value = true;
  animate(sidebar.value.backdrop, { opacity: 1 }, { duration: 0.5 });
  animate(sidebar.value.panel, { x: 320 }, { duration: 0.5 });
}

function showElements() {
  timeline([[box1.value, { opacity: 1 }, { duration: 2 }]]);

  timeline([[box2.value, { opacity: 1 }, { duration: 0.5 }]]);
}

function hideElements() {
  animate(box1.value, { opacity: 0 }, { duration: 0.5 });
  // timeline([[box1.value, { opacity: 1 }, { duration: 2 }]]);
  timeline([[box2.value, { opacity: 0 }, { duration: 0.5 }]]);
  // setTimeout(() => {
  //   showBoxes.value = false;
  // }, 2000);
}

watch(showBoxes, (newValue, oldValue) => {
  if (newValue) {
    showElements();
  } else {
    hideElements();
  }
});

watch(render, (newValue, oldValue) => {
  if (newValue) {
    showSideBar();
  } else {
    console.log(newValue);
    hideSideBar();
  }
});

const transition = {
  easing: spring({
    damping: 10,
    mass: 0.5,
  }),
  duration: 0.2,
};

const show = ref(false);
const buttonHover = ref(false);
</script>
