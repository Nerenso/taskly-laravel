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
    <img src="/assets/bg3.jpeg" class="absolute top-0 w-full z-0 blur-2xl opacity-[0.2] dark:opacity-[0.2] h-[800px] object-cover" />
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
import NavBar from "@/Components/NavBar.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps({
  user: Object,
});

const visible = ref(false);
</script>
