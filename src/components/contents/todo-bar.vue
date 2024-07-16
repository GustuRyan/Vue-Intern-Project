<template>
    <div class="w-full h-full bg-[#F5F5F5] rounded-xl flex justify-between p-4">
        <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#E2E3E3] flex justify-center items-center">
                <img v-if="status === 'Pending'" class="w-8 h-8" src="/public/images/close_fill.svg" alt="">
                <img v-if="status === 'On Going'" class="w-8 h-8" src="/public/images/minimize_fill.svg" alt="">
                <img v-if="status === 'Done'" class="w-8 h-8" src="/public/images/check_fill.svg" alt="">
            </div>
            <h2 class="text-lg font-semibold text-[#35383E]">
                {{ name }}
            </h2>
        </div>
        <div class="flex gap-8 text-lg">
            <select class="rounded-lg w-48 px-2 bg-[#E2E3E3]" v-model="selectedStatus" @change="updateStatus">
                <option value="Pending">Pending</option>
                <option value="On Going">On Going</option>
                <option value="Done">Done</option>
            </select>
            <button @click="deleteItem">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selectedStatus: this.status
        }
    },
    methods: {
        updateStatus() {
            this.$emit('update-status', this.name, this.selectedStatus);
        },
        deleteItem() {
            this.$emit('delete-item', this.name);
        }
    }
}
</script>
