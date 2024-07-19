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

export function useTodo(items) {
    const newTask = ref('');
    const nextId = ref(items.value.length + 1);

    const addInput = () => {
        if (newTask.value.trim() !== '') {
            items.value.push({ id: nextId.value, name: newTask.value, status: 'Pending' });
            nextId.value++;
            newTask.value = '';
        }
    };

    const updateStatus = (id, newStatus) => {
        const item = items.value.find(item => item.id === id);
        if (item) {
            item.status = newStatus;
        }
    };

    const deleteItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
    };

    return {
        addInput,
        updateStatus,
        deleteItem,
        newTask
    };
}