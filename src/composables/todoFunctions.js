import { defineComponent, ref, toRefs } from 'vue';

const items = ref([
    { id: 1, name: 'Hi Travel Bali', status: 'Pending' },
    { id: 2, name: 'Dashboard Admin', status: 'Pending' },
    { id: 3, name: 'Oracle App', status: 'Done' },
    { id: 4, name: 'Login Page', status: 'Pending' },
    { id: 5, name: 'Sign Up Page', status: 'Pending' },
    { id: 6, name: 'Dashboard Admin', status: 'On Going' },
]);

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

export function useTodo() {
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
        newTask,
        nextId,
        items
    };
}