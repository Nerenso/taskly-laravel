<template>
  <header class="w-full z-30 sticky top-0 backdrop-blur-lg text-slate-800 dark:text-slate-300">
    <div class="border-b border-slate-300 dark:border-slate-600 max-w-5xl mx-auto">
      <nav class="flex justify-between max-w-5xl w-full mx-auto items-center py-4 px-4 lg:px-0 p">
        <Link class="text-3xl font-bold" href="/">Taskly</Link>

        <div class="flex items-center gap-4">
          <div v-if="!props.user" class="hidden md:flex items-center gap-4">
            <Link :href="route('login')">Login</Link>
            <Link :href="route('register')">Register</Link>
          </div>
          <button @click="toggleDark()" class="hidden md:block px-1.5 py-1.5 border border-slate-400 dark:border-slate-600 rounded-md">
            <span class="text-slate-800 dark:text-slate-300">
              <SunIcon v-if="isDark" class="w-5 h-5" />
              <MoonIcon v-else class="w-5 h-5" />
            </span>
          </button>
        </div>

        <Bars2Icon @click="showNav = true" class="cursor-pointer md:hidden w-6 h-6 text-slate-800 dark:text-slate-300" />
        <!-- <button>Menu</button> -->
        <MNavMenu :is-visible="showNav" @close="showNav = false">
          <div class="p-6 h-full w-full">
            <section class="w-full rounded-lg shadow-xl bg-white dark:bg-slate-800 p-6 text-slate-800 dark:text-slate-300">
              <header class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">Taskly</h2>
                <XMarkIcon class="w-6 h-6 cursor-pointer" @click="showNav = false" />
              </header>
              <nav class="flex flex-col gap-4">
                <div v-if="!props.user" class="flex flex-col gap-4 text-xl mt-8">
                  <p>About Us</p>
                  <p>Contact</p>
                  <Link :href="route('login')">Login</Link>
                  <Link :href="route('register')">Register</Link>
                </div>
                <div @click="toggleDark()" class="cursor-pointer flex items-center justify-between mt-8">
                  <span>{{ isDark ? "Enable Light Mode" : "Enable Dark Mode" }}</span>
                  <button class="px-1.5 py-1.5 border border-slate-400 dark:border-slate-600 rounded-md">
                    <span class="text-slate-800 dark:text-slate-300">
                      <SunIcon v-if="isDark" class="w-5 h-5" />
                      <MoonIcon v-else class="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </nav>
            </section>
          </div>
        </MNavMenu>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import MNavMenu from "../Components/MNavMenu.vue";
import { MoonIcon, Bars2Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { SunIcon } from "@heroicons/vue/24/outline";
import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps({
  user: Object,
});

const isDark = useDark();
const toggleDark = useToggle(isDark);

const showNav = ref(false);
</script>
