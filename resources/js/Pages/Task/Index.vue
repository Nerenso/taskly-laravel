<template>
  <Head title="Tasks" />

  <div class="min-h-screen flex flex-col">
    <NavBar :user="$page.props.auth.user" />
    <div v-if="$page.props.flash.message">
      {{ $page.props.flash.message }}
    </div>
    <main class="w-full h-full flex-1 flex justify-center items-center px-4 py-4">
      <div
        class="h-[75vh] max-w-lg bg-white dark:bg-slate-900 flex w-full flex-col rounded-lg shadow-lg overflow-hidden text-slate-800 dark:text-slate-300"
      >
        <h2 class="font-bold text-2xl p-6 border-b dark:border-slate-600">Welcome👋🏻 Here are your tasks</h2>

        <section class="flex-1 w-full overflow-y-auto px-6 py-4" scroll-region>
          <div v-if="tasks.length" v-for="task in tasks" :key="task.id" class="w-full" scroll-region>
            <div
              class="flex w-full items-center justify-between gap-2 py-1"
              @mouseenter="activeKey = task.id"
              @mouseleave="activeKey = null"
              @touchstart="activeKey = task.id"
            >
              <span :class="{ 'line-through': task.completed }">
                {{ task.body }}
              </span>
              <div v-if="activeKey == task.id" class="flex items-center h-5 gap-1">
                <button
                  @click="() => toggleComplete(task.id)"
                  class="px-2 py-2 border dark:border-slate-600 text-slate-500 dark:text-slate-300 rounded-md flex items-center gap-1"
                >
                  <Icon icon="solar:check-circle-bold" v-if="task.completed" class="w-5 h-5 text-emerald-500" />
                  <Icon icon="ci:radio-unchecked" v-else class="w-5 h-5" />
                </button>

                <button @click="taskToEdit = task" class="px-2 py-2 border dark:border-slate-600 rounded-md text-slate-500 dark:text-slate-300">
                  <Icon icon="jam:pencil-f" class="w-5 h-5 cursor-pointer" />
                </button>

                <button @click="deleteTask(task.id)" class="px-2 py-2 border dark:border-slate-600 rounded-md text-slate-500 dark:text-slate-300">
                  <Icon icon="dashicons:trash" class="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          <div v-else class="w-full h-full flex items-center justify-center">
            <div class="p-8 border-dashed dark:border-slate-500 rounded-3xl border-2">
              <svg
                class="w-20 h-20 mx-auto mb-4 stroke-slate-500 dark:stroke-slate-400 stroke-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21.9844 10C21.9473 8.68893 21.8226 7.85305 21.4026 7.13974C20.8052 6.12523 19.7294 5.56066 17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.27063 5.56066 3.19479 6.12523 2.5974 7.13974C2 8.15425 2 9.41667 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C10.1779 21.5393 11.0557 22 12 22C12.9443 22 13.8221 21.5393 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C21.8226 16.1469 21.9473 15.3111 21.9844 14"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5"
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>

              <p class="max-w-xs text-center">You have not added any tasks yet, try adding one through the field below.</p>
            </div>
          </div>
        </section>

        <form v-if="!taskToEdit" @submit.prevent="submitCreateForm" class="p-6 border-t dark:border-slate-600">
          <div class="flex items-center flex-wrap sm:flex-nowrap gap-2">
            <input
              id="task-body"
              name="task-body"
              v-model="createForm.body"
              type="text"
              placeholder="Call mom"
              class="w-full dark:placeholder:text-slate-600 dark:bg-slate-800 dark:border-slate-600 rounded-md border-slate-300"
            />
            <button class="px-4 py-2 w-full sm:w-fit bg-purple-600 font-semibold text-white rounded-md cursor-pointer">Add</button>
          </div>
          <div v-if="createForm.errors.body" class="text-xs text-red-500 mt-2">{{ createForm.errors.body }}</div>
        </form>

        <form v-else class="border-t dark:border-slate-600 p-6">
          <div class="flex flex-wrap sm:flex-nowrap items-center gap-2">
            <input
              id="task-body"
              name="task-body"
              v-model="editForm.body"
              type="text"
              placeholder="Call mom"
              class="w-full dark:placeholder:text-slate-600 dark:bg-slate-800 dark:border-slate-600 rounded-md border-slate-300"
            />
            <div class="flex items-center gap-2 w-full sm:w-fit">
              <button
                @click.prevent="submitEditForm(taskToEdit.id)"
                class="px-4 py-2 bg-purple-600 font-semibold text-white w-1/2 sm:w-fit rounded-md cursor-pointer"
              >
                Save
              </button>
              <button
                @click.prevent="taskToEdit = null"
                class="px-4 py-2 bg-slate-500 font-semibold text-white rounded-md cursor-pointer w-1/2 sm:w-fit"
              >
                Cancel
              </button>
            </div>
          </div>
          <div v-if="editForm.errors.body" class="text-xs text-red-500 mt-2">{{ editForm.errors.body }}</div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from "@/Components/NavBar.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Icon } from "@iconify/vue";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { ref, watch } from "vue";

defineProps(["tasks"]);

const activeKey = ref(null);
const taskToEdit = ref(null);

const createForm = useForm({
  body: "",
});

const editForm = useForm({
  body: "",
});

function toggleComplete(id) {
  taskToEdit.value = null;
  router.visit(route("task.toggle", id), { method: "post", preserveState: true, preserveScroll: true });
}

const deleteTask = (id) => {
  router.visit(route("task.destroy", id), { method: "delete", preserveScroll: true });
};

const submitCreateForm = () => createForm.post(route("task.store"), { onSuccess: () => createForm.reset() });

const submitEditForm = (id) => editForm.put(route("task.update", id), { onSuccess: () => (taskToEdit.value = null) });

watch(taskToEdit, (newValue) => {
  if (newValue) {
    editForm.body = newValue.body;
  }
});
</script>
