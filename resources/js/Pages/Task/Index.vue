<template>
  <Head title="Tasks" />

  <main class="w-full min-h-screen flex justify-center bg-slate-200 items-center">
    <div class="h-[500px] max-w-lg bg-white flex w-full flex-col rounded-lg shadow-lg overflow-hidden">
      <h2 class="font-bold text-2xl p-6 border-b">Welcome👋🏻 Here are your tasks</h2>
      <section class="flex-1 w-full overflow-y-auto px-6 py-4">
        <div v-for="task in tasks" :key="task.id" class="py-2 w-full">
          <div class="flex w-full items-center justify-between gap-2" @mouseenter="activeKey = task.id" @mouseleave="activeKey = null">
            <span class="">
              {{ task.body }}
            </span>
            <div v-if="activeKey == task.id" class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full border border-slate-500" />
              <PencilIcon class="w-4 h-4 text-slate-500" />
            </div>
          </div>
        </div>
      </section>
      <form @submit.prevent="submitForm" class="flex items-center gap-2 border-t p-6">
        <input v-model="form.body" type="text" placeholder="Call mom" class="w-full rounded-md border-slate-300 ring-emerald-400" />
        <button class="px-4 py-2 bg-purple-600 font-semibold text-white rounded-md cursor-pointer">Add</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { useForm, Head } from "@inertiajs/vue3";
import { PencilIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

defineProps(["tasks"]);

const activeKey = ref(null);

const showControls = (key) => {};

const form = useForm({
  body: "",
});

const submitForm = () => form.post(route("task.store"), { onSuccess: () => form.reset() });
</script>
