<template>
    <div class="mt-20 h-screen bg-slate-500">
        <TodoBar :id="1" ref="myComp" />
        <button class="mt-8" @click="myCompContinue">Click Me</button>
        <br>
        <button @click="show">Expanded</button>
        <br>
        <p>Prop ID: {{ childId }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoBar from '../contents/test2.vue';
import { useTodoBar } from '../composables/todoFunction';

export default defineComponent({
    components: {
        TodoBar,
    },
    setup(props, { emit }) {
        const { selectedStatus, updateStatus, deleteItem } = useTodoBar(props, emit);

        return {
            selectedStatus,
            updateStatus,
            deleteItem
        };
    }
});
</script>