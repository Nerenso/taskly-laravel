<template>
  <Head title="Tasks" />

  <div class="min-h-screen flex flex-col">
    <NavBar :user="$page.props.auth.user" />
    <div v-if="$page.props.flash.message">
      {{ $page.props.flash.message }}
    </div>
    <main class="w-full h-full flex-1 flex justify-center items-center px-4 py-4">
      <div
        class="h-full max-h-[80vh] max-w-lg bg-white dark:bg-slate-900 flex w-full flex-col rounded-lg shadow-lg overflow-hidden text-slate-800 dark:text-slate-300"
      >
        <h2 class="font-bold text-2xl p-6 border-b dark:border-slate-600">Welcome👋🏻 Here are your tasks</h2>

        <section class="flex-1 w-full overflow-y-auto px-6 py-4" scroll-region>
          <div v-for="task in tasks" :key="task.id" class="w-full" scroll-region>
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
