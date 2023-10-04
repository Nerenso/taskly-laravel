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
import { ref } from "vue";
import BaseDrawer from "@/Components/BaseDrawer.vue";
import MBaseDrawer from "@/Components/MBaseDrawer.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps({
  user: Object,
});

const visible = ref(false);
</script>
