<template>
    <div v-if="isOpen" class="w-full h-full">
        <section class="flex justify-center items-center w-screen h-screen ">
            <div class="w-[56%] h-fit flex flex-col bg-white rounded-lg shadow-lg fixed z-[65] top-[30%]">
                <div class="w-full p-5 text-xl font-bold">
                    Select Variant
                </div>
                <div class="w-full p-5 grid grid-cols-3 gap-3 border-y-2">
                    <button v-for="topping in toppings" @click="addTopping(topping.id, topping.prices)" class="flex gap-3 items-center group w-fit">
                        <div class="w-10 h-10 rounded-lg border-[1px] flex justify-center items-center group-hover:bg-slate-300">
                            <img src="/images/plus-for-cart.svg" alt="plus-logo" class="w-6 h-6">
                        </div>
                        <p class="text-lg font-semibold">
                            {{ topping.name }} (Rp. {{ topping.prices }})
                        </p>
                    </button>
                </div>
                <div class="w-full flex justify-end px-5 py-3">
                    <button @click="addCart(pizzaId, pizzaPrices, toppingList), $emit('change-open'), $emit('update-overall-prices')" class="flex items-center gap-2 px-2 py-2 w-fit rounded-md bg-[#2E74FF] hover:bg-[#2e4981]">
                        <img src="/images/cart-logo.svg" alt="cart-logo" class="w-4 h-4">
                        <span class="text-lg text-white">
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>
        </section>
        <div @click="$emit('change-open'), removeTopping" class="w-full h-full fixed top-0 z-[60] bg-[#121212] opacity-25"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs } from 'vue';
import { pizzaOrder } from '../../../composables/pizzaFunctions';

const props = defineProps ({
    isOpen: Boolean,
    pizzaId: {
        type: Number,
        required: true
    },
    pizzaPrices: {
        type: Number,
        required: true
    },
    toppings: {
        type: Object,
        required: true
    },
});

const emit = defineEmits (['change-open', 'update-overall-prices'])

const { addTopping, removeTopping, addCart, toppingList } = pizzaOrder();
</script>