<template>
  <div class="flex-1 flex flex-col w-full min-h-screen bg-neutral-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
    <Head title="Taskly" />
    <header class="w-full relative z-10">
      <nav class="flex justify-between max-w-5xl w-full mx-auto items-center py-4 border-b border-slate-300 dark:border-slate-600">
        <Link class="text-3xl font-bold" href="/">Taskly</Link>

        <div v-if="!props.user" class="flex items-center gap-4">
          <Link :href="route('login')">Login</Link>
          <Link :href="route('register')">Register</Link>

          <button @click="toggleDark()" class="px-1.5 py-1.5 border border-slate-400 dark:border-slate-600 rounded-md">
            <span class="text-slate-800 dark:text-slate-300">
              <svg
                v-if="isDark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="absolute w-[1000px] -top-60 right-10 blur-[100px] opacity-10">
      <path
        fill="#FF0066"
        d="M49.7,-63C57.6,-52.6,52.5,-30.5,51.2,-12.8C49.9,5,52.4,18.3,49.9,34.5C47.4,50.7,39.9,69.8,25.1,79.9C10.4,89.9,-11.5,90.9,-27.5,82.2C-43.4,73.5,-53.4,55,-59.5,37.7C-65.7,20.3,-67.9,4,-60.7,-6.2C-53.6,-16.5,-37.2,-20.6,-25.5,-30.3C-13.8,-40,-6.9,-55.3,7,-63.6C20.9,-72,41.8,-73.3,49.7,-63Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 600 600"
      class="absolute w-[1000px] -top-60 left-10 blur-[100px] opacity-10"
    >
      <path
        d="M175.91622924804688,493.1937255859375C249.86911010742188,522.7748769124349,456.5445098876953,545.4188563028971,494.764404296875,493.97906494140625C532.9842987060547,442.53927357991535,468.4554926554362,242.93194325764975,405.235595703125,184.5549774169922C342.0156987508138,126.17801157633463,174.47643534342447,121.72773996988933,115.44502258300781,143.71726989746094C56.41360982259115,165.70679982503256,40.96858469645182,258.24608103434247,51.047119140625,316.4921569824219C61.12565358479818,374.7382329305013,101.96334838867188,463.6125742594401,175.91622924804688,493.1937255859375C249.86911010742188,522.7748769124349,456.5445098876953,545.4188563028971,494.764404296875,493.97906494140625"
        fill="hsl(180, 69%, 40%)"
      ></path>
    </svg>
    <section class="max-w-5xl mx-auto w-full text-center pt-48 pb-32 z-10">
      <h2 class="text-[48px] font-bold text-center dark:text-white mb-4">
        Stay <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-600">Organized</span> and on Track!
      </h2>
      <p class="text-xl max-w-2xl mx-auto mb-8">
        The smart and simple way to manage your projects, collaborate with your team, and achieve your goals.
      </p>
      <div class="flex gap-4 justify-center">
        <button class="px-4 py-3 bg-purple-600 font-semibold text-white rounded-md cursor-pointer">Get Started</button>
        <button>Watch Video</button>
      </div>
    </section>
    <section class="w-full p-4 flex-1 dark:bg-slate-950 bg-slate-50 z-10">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-3xl font-bold mb-8">How does it work?</h3>
        <div class="w-full grid grid-cols-3 gap-8">
          <div class="border dark:border-slate-600 rounded-lg p-8 self-start">1</div>
          <div class="border dark:border-slate-600 rounded-lg p-8 mt-20 self-start">2</div>
          <div class="border dark:border-slate-600 rounded-lg p-8 mt-40">3</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Link, Head } from "@inertiajs/vue3";
import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

console.log(isDark.value);

const props = defineProps({
  user: Object,
});

console.log(props.user);
</script>
