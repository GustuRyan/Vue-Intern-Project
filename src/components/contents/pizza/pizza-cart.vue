<script setup>
import { defineProps, defineEmits, onMounted, computed } from 'vue';
import { useCartStore } from '../../../stores/cartStore';

const props = defineProps({
    isOpen: Boolean,
    cart: {
        type: Object,
        required: true
    },
    variant: {
        type: Object,
        required: true
    },
    toppings: {
        type: Array,
        required: true
    },
});

const emit = defineEmits(['change-open', 'delete-cart', 'update-cart', 'update-overall-prices', 'search', 'set-cart', 'set-toppings'])

const cartStore = useCartStore();
const { thisCart, allToppings } = cartStore;
</script>

<template>
    <div class="w-full h-full flex flex-col gap-4 border-b-2 border-dashed font-semibold">
        <div class="w-full h-full flex justify-between">
            <h1 class="text-xl">
                {{ variant.name }}
            </h1>
            <img :src="'./images/pizza-pictures/' + variant.image" alt="pizza-images" class="w-20 h-20 rounded-xl border-[1px] object-cover">
        </div>
        <div class="w-full h-full flex flex-col">
            <h2 class="text-sm text-[#717171] ">TOPPING</h2>
            <div v-if="toppings.length != 0" v-for="topping in toppings" :key="topping.id" class="w-full flex justify-between">
                <span class="text-lg">{{ topping.name }}</span>
                <span class="text-[#717171]">Rp. {{ topping.prices }}</span>
            </div>
            <div v-else class="w-full flex justify-between">
                <span class="text-lg">Tidak ada</span>
                <span class="text-[#717171]">Rp. -,</span>
            </div>
        </div>
        <p class="w-full flex justify-end font-bold text-xl">
            <span>Rp. {{ cart.totalPrice }}</span>
        </p>
        <div class="w-full flex justify-between">
            <button @click="$emit('delete-cart'), $emit('update-overall-prices')" class="w-fit">
                <img src="/images/bin-logo.svg" alt="bin-logo" class="w-6 h-6 mb-4 hover:opacity-70">
            </button>
            <button @click="$emit('set-cart', cart), emit('set-toppings', toppings), $emit('update-cart'), $emit('search'), $emit('update-overall-prices')" class="w-fit">
                <img src="/images/pen_fill.svg" alt="update-logo" class="w-6 h-6 mb-4 hover:opacity-70">
            </button>
        </div>
    </div>
</template>
