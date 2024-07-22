<script setup>
import { ref } from 'vue';
import TodoBar from '../contents/todo-bar.vue';
import { useTodo } from '../../composables/todoFunctions';

const { addInput, updateStatus, deleteItem, items, newTask } = useTodo();
</script>

<template>
    <main class="w-full h-full">
        <section class="p-[80px] w-full h-full">
            <div
                class="w-full h-full flex flex-col justify-between bg-white border-[1px] border-[#DDDDDD] rounded-xl shadow-lg p-[40px] gap-8">
                <div class="w-full flex justify-between border-b-2 pb-4">
                    <h1 class="text-3xl text-gray-700 font-bold ">
                        To Do
                    </h1>
                </div>
                <section class="w-full h-full flex flex-col gap-3">
                    <div v-for="item in items" :key="item.id">
                        <TodoBar :id="item.id" :name="item.name" :status="item.status" @update-status="updateStatus"
                            @delete-item="deleteItem" />
                    </div>
                    <form @submit.prevent="addInput">
                        <input class="w-full h-full border-b-2 flex py-4 text-lg" v-model="newTask" type="text"
                            placeholder="Write new task here...">
                        <div class="w-full flex justify-end mt-4">
                            <button class="bg-[#F5F5F5] px-4 py-2 text-lg rounded-lg hover:bg-[#d8d8d8]"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    </main>
</template>
