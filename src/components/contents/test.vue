<template>
    <div class="bg-gray-300 p-20">
        <div class="inputs" v-for="(input, index) in inputs" :key="input.id">
            <input type="text" v-model="input.name" :ref="'name' + index">
            <button @click="displayRef('name' + index)">
                Click to see the input ref
            </button>
            <hr>
        </div>
        <button @click="addInput">Add Input</button>
        <button @click="displayAllRefs">Click to see all refs</button>
        <button @click="displayAllInputs">Click to see all input values</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputs: [
                { id: 1, name: '' }
            ],
            allInputs: []
        }
    },
    methods: {
        displayRef(ref) {
            const inputValue = this.$refs[ref][0].value;
            console.log('The value of input is:', inputValue);
            this.allInputs.push(inputValue); // Menyimpan nilai input ke dalam array
        },
        displayAllRefs() {
            console.log(this.$refs);
        },
        displayAllInputs() {
            console.log('All input values:', this.allInputs);
        },
        addInput() {
            const newId = this.inputs.length + 1;
            this.inputs.push({ id: newId, name: '' });
        }
    }
}
</script>

<style scoped>
.bg-gray-300 {
    background-color: #e2e8f0;
    padding: 20px;
}
.inputs {
    margin-bottom: 10px;
}
</style>