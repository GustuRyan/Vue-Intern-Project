import { defineComponent, ref, toRefs } from 'vue';

export function useTodoBar(props, emit) {
    const { id, status } = toRefs(props);
    const selectedStatus = ref(status.value);

    const updateStatus = () => {
        emit('update-status', id.value, selectedStatus.value);
    };

    const deleteItem = () => {
        emit('delete-item', id.value);
    };

    return {
        selectedStatus,
        updateStatus,
        deleteItem
    };
}
