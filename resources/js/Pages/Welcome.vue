<template>
  <div class="flex-1 flex flex-col w-full min-h-screen bg-neutral-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
    <Head title="Taskly" />
    <NavBar :user="user" />
    <div class="max-w-xs overflow-hidden hidden">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="absolute -top-60 right-10 blur-[100px] opacity-[0.15]">
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
        class="absolute -top-60 left-10 blur-[100px] opacity-[0.15]"
      >
        <path
          d="M175.91622924804688,493.1937255859375C249.86911010742188,522.7748769124349,456.5445098876953,545.4188563028971,494.764404296875,493.97906494140625C532.9842987060547,442.53927357991535,468.4554926554362,242.93194325764975,405.235595703125,184.5549774169922C342.0156987508138,126.17801157633463,174.47643534342447,121.72773996988933,115.44502258300781,143.71726989746094C56.41360982259115,165.70679982503256,40.96858469645182,258.24608103434247,51.047119140625,316.4921569824219C61.12565358479818,374.7382329305013,101.96334838867188,463.6125742594401,175.91622924804688,493.1937255859375C249.86911010742188,522.7748769124349,456.5445098876953,545.4188563028971,494.764404296875,493.97906494140625"
          fill="hsl(180, 69%, 40%)"
        ></path>
      </svg>
    </div>
    <img src="/assets/bg3.jpeg" class="absolute top-0 w-full z-0 blur-2xl opacity-[0.1] dark:opacity-[0.2] h-[800px] object-cover" />
    <section class="mx-auto w-full text-center py-36 z-10 bg-cover relative p-4">
      <h2 class="text-4xl md:text-[48px] font-bold text-center dark:text-white mb-4">
        Stay <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-600">Organized</span> and on Track!
      </h2>
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        The smart and simple way to manage your projects, collaborate with your team, and achieve your goals.
      </p>
      <div class="flex gap-4 justify-center">
        <button @click="visible = true" class="px-4 py-3 bg-purple-600 font-semibold text-white rounded-md cursor-pointer">Open Menu</button>
        <button>Watch Video</button>

        <div class="card flex justify-content-center">
          <MBaseDrawer :is-visible="visible" @close="visible = false">
            <div class="flex flex-col h-full overflow-y-hidden bg-white dark:bg-slate-800">
              <header class="flex items-center justify-between p-4 text-slate-800 dark:text-white">
                <div class="text-lg font-bold">Taskly</div>
                <button @click="visible = false" class="">X</button>
              </header>
              <section class="bg-blue-400 flex-1 p-4 text-xl overflow-y-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam asperiores quasi consectetur est amet neque a beatae quidem
                obcaecati nostrum, impedit voluptate officiis nesciunt reprehenderit atque totam doloribus cum omnis. Rem dolor quo voluptate ratione
                facere quod autem suscipit cupiditate maiores. Maiores tempore, iure est consectetur excepturi sapiente eos, deserunt possimus
                quibusdam, laborum sit tenetur atque aliquam laboriosam dolor voluptas. Iusto quidem facilis quos quis sequi impedit reprehenderit
                ducimus, eius, vel laboriosam, eaque odit consequuntur quisquam fugit blanditiis soluta veritatis? Nostrum et delectus, voluptates
                explicabo aliquid ut vero ratione velit. Velit, maxime! Similique blanditiis enim vero. Blanditiis porro perspiciatis eum eveniet
                explicabo aperiam numquam modi error repellendus. Nesciunt tempore voluptatem quod iusto quam. Exercitationem nemo accusantium,
                accusamus minima eveniet consectetur! Voluptatem error enim debitis dolores iste veritatis, quaerat aperiam, eaque assumenda illo,
                aspernatur necessitatibus. Officia nulla modi ipsa error numquam tempore ullam quisquam iusto, corporis, dicta nostrum quae ratione
                qui! Dicta expedita eum, numquam rerum animi at earum culpa dignissimos rem et dolor inventore repellendus aliquid eligendi
                accusantium ab provident, eius velit, doloribus vero soluta officia. Libero nisi omnis aperiam. Animi facilis quidem recusandae
                aspernatur tenetur aperiam nesciunt delectus est! Quis libero qui, debitis facilis atque consequatur cupiditate quas eaque cumque
                voluptatibus explicabo, ducimus voluptate distinctio accusantium dolore tempora omnis? Eaque explicabo quasi alias magnam
                exercitationem nobis magni. Consequuntur eos vel, cupiditate quos optio nemo cum, quisquam odio necessitatibus molestiae tempore fuga
                quod veritatis tempora, aliquam quaerat nihil enim doloremque. Maxime nisi ipsa tempore fugit possimus quod reiciendis culpa iusto
                expedita aspernatur. Cupiditate iusto fugit sequi rerum nemo corporis inventore doloremque, quas quia ex voluptatum expedita nesciunt,
                accusamus repellendus? Ratione. Quos sint, delectus atque laborum quis magnam culpa debitis, quia, aliquid harum molestias doloribus?
                Culpa aliquid aliquam distinctio reiciendis vel. Harum, voluptatum. Sed similique officiis blanditiis voluptatem ullam. Reiciendis,
                maiores? Tempore dicta aspernatur facere aliquid eaque asperiores sint rem quibusdam iste soluta doloremque saepe, animi sed pariatur.
                Ratione, iste iure. Consequatur corporis at porro praesentium vitae cumque pariatur recusandae dignissimos. Id blanditiis nesciunt
                inventore accusantium debitis earum non mollitia, obcaecati maiores suscipit est praesentium ullam, quam doloribus excepturi facilis
                quia voluptatum fugiat sit beatae numquam, animi dicta cum. Eius, incidunt? Dolore id deserunt necessitatibus itaque, neque, quo
                maxime iste ab unde inventore totam nesciunt? Consequuntur nulla quos, dolorum consequatur cumque ipsum alias, necessitatibus
                doloribus dolore repellat delectus, odit hic magnam. Fugit eveniet mollitia, perferendis quidem nulla quisquam cupiditate velit enim!
                At atque iusto vel eum sapiente nisi, veniam, possimus dolore magni numquam cumque nobis cum consequatur doloribus consequuntur sint
                error. Quisquam consequuntur nihil doloremque dolor voluptas, assumenda amet? Pariatur illo doloremque quam, maxime distinctio minus
                corporis veritatis. Praesentium id possimus, libero nihil a dolorum excepturi totam nam repellendus optio quo?
              </section>
              <footer class="bg-red-400 p-4">Footer</footer>
            </div>
          </MBaseDrawer>
        </div>
      </div>
    </section>
    <div class="w-full bg-layer-1 p-6 text-center md:p-20 bg-gradient-to-b from-transparent dark:to-slate-900 to-white to-20% z-20">
      <div class="mx-auto w-full max-w-6xl">
        <span
          class="leading-sm inline-flex items-center rounded-full border-2 border-orange-200 bg-orange-200 px-2 py-0.5 text-xs font-bold uppercase text-orange-600 shadow-sm"
        >
          <!-- Heroicon name: outline/light-bulb -->
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="{2}"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          Features
        </span>
        <h2 class="mx-auto mt-4 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-4xl">
          Simplicity is key. Elevate your copy with a simple design.
        </h2>
        <p class="mt-6 text-xl text-text">Here is a section with two features or points and a subheading.</p>

        <div class="mt-12 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/view-grid -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-dusk"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/wifi -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-lime"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/shield-check -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-peach"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/bell -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-sky"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/sun -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-dusk"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="p-5 text-center md:p-8">
            <div class="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <!-- Heroicon name: outline/sparkles -->
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 stroke-gradient gradient-cotton-candy"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="{2}"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-heading">A simple heading</h3>
            <p class="mt-2 text-center text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Link, Head } from "@inertiajs/vue3";
import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import BaseDrawer from "@/Components/BaseDrawer.vue";
import MBaseDrawer from "@/Components/MBaseDrawer.vue";
import NavBar from "@/Components/NavBar.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps({
  user: Object,
});

const visible = ref(false);
</script>
