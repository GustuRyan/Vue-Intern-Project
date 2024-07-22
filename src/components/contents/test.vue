<template>
    <div class="mt-20 h-screen bg-slate-500">
        <TodoBar :id="1" ref="myComp"/>
        <button class="mt-8" @click="myCompContinue">Click Me</button>
        <br>
        <button @click="show">Expanded</button>
        <br>
        <p>Prop ID: {{ childId }}</p>
    </div>
</template>

<script>
import TodoBar from '../contents/test2.vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    components: {
        TodoBar,
    },
    setup() {
        const myComp = ref(null);
        const childId = ref(null);

        onMounted(() => {
            if (myComp.value) {
                childId.value = myComp.value.id;
            }
        });

        const myCompContinue = () => {
            if (myComp.value) {
                myComp.value.alertFn('hello from Todo');
            }
        };

        const show = () => {
            if (myComp.value) {
                myComp.value.expanded();
            }
        };

        return {
            myComp,
            myCompContinue,
            show,
            childId
        };
    }
});
</script>