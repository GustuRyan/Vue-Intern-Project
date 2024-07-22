<script setup>
import { ref } from 'vue';
import PizzaCard from '../contents/pizza/pizza-card.vue';
import PizzaCart from '../contents/pizza/pizza-cart.vue';
import AddVariant from '../contents/pizza/select-variants.vue';
import { pizzaSearch } from '../../composables/pizzaFunctions';

const { variantSearch,
    toppingSearch,
    pizzaToppingSearch,
    pizzas,
    toppings,
    carts,
    isOpen,
    pizzaId,
    pizzaPrices,
    pizzaToppings } = pizzaSearch();
</script>

<template>
    <main class="w-full h-full">
        <section class="px-[80px] py-[80px] w-full h-full flex justify-between">
            <section
                class="w-[64%] h-screen flex flex-col justify-between bg-white border-[1px] border-[#DDDDDD] rounded-md shadow-lg pb-[40px] px-[40px] gap-8 overflow-y-scroll scrollbar-hide">
                <div class="w-full flex justify-between border-b-2 pb-4 sticky top-0 bg-white pt-[40px]">
                    <h1 class="text-3xl text-gray-700 font-bold ">
                        Pizza List
                    </h1>
                </div>
                <section class="grid grid-cols-3 gap-6 gap-y-8">
                    <PizzaCard v-for="pizza in pizzas" :id="pizza.id" :name="pizza.name" :image="pizza.image"
                        :prices="pizza.prices" :isOpen='isOpen'
                        @customize="pizzaToppingSearch(pizza.toppings, pizza.id, pizza.prices)"
                        :toppings="toppingSearch(pizza.toppings)" />
                </section>
            </section>
            <section
                class="w-[34%] h-screen flex flex-col justify-between bg-white border-[1px] border-[#DDDDDD] rounded-md shadow-lg pb-[40px] px-[40px] gap-8 overflow-y-scroll scrollbar-hide">
                <div class="w-full h-full flex justify-between border-b-2 pb-4 sticky top-0 bg-white pt-[40px]">
                    <h1 class="text-3xl text-gray-700 font-bold ">
                        My Cart
                    </h1>
                </div>
                <section class="flex flex-col gap-3">
                    <PizzaCart v-for="cart in carts" :cart='cart' :variant="variantSearch(cart.pizza)"
                        :toppings="toppingSearch(cart.toppings)" />
                </section>
            </section>
        </section>
        <AddVariant :isOpen='isOpen' @change-open="isOpen = !isOpen" :toppings="pizzaToppings" :pizzaId="pizzaId"
            :pizzaPrices="pizzaPrices" />
    </main>
</template>
