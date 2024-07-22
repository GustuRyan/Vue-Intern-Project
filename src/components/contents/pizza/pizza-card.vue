<template>
    <div class="w-full h-full flex flex-col gap-[6px]">
        <img :src="'./images/pizza-pictures/' + image" alt="pizza-images" class="rounded-xl h-44 object-cover">
        <h1 class="text-xl font-semibold">
            {{ name }} - Pizza
        </h1>
        <div class="flex flex-col gap-[6px]">
            <h2 class="text-xl font-bold">
                Rp. {{ prices }}
            </h2>
            <button @click="$emit('customize')" class="w-fit px-2 flex items-center gap-1 bg-[#F5F5F5] hover:bg-[#e5e5e5] text-[#717171] rounded-[4px] border-[1px]">
                <img src="/images/cooking-logo.svg" alt="cooking-logo" class="w-4 h-4">
                <span>Bisa dicostum</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs } from 'vue';
import AddVariant from './select-variants.vue';

const props = defineProps ({
    isOpen: Boolean,
    name: String,
    image: String,
    prices: Number,
    toppings: {
        type: Object,
        required: true
    },
});

const emit = defineEmits (['change-open', 'customize'])
</script>