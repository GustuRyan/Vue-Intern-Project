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
            <div v-for="topping in toppings" class="w-full flex justify-between">
                <span class="text-lg">{{ topping.name }}</span>
                <span class="text-[#717171]">Rp. {{ topping.prices }}</span>
            </div>
        </div>
        <p class="w-full flex justify-end font-bold text-xl">
            <span>Rp. {{ cart.totalPrice }}</span>
        </p>
        <button class="w-fit">
            <img src="/images/bin-logo.svg" alt="bin-logo" class="w-8 h-8 mb-4 hover:opacity-70">
        </button>
    </div>
</template>


<script setup>
import { defineProps, defineEmits, ref, toRefs } from 'vue';

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
        type: Object,
        required: true
    },
});

const emit = defineEmits(['change-open'])
</script>