<script setup>
import { ref } from 'vue';
import PizzaCard from '../contents/pizza/pizza-card.vue';
import PizzaCart from '../contents/pizza/pizza-cart.vue';
import AddVariant from '../contents/pizza/select-variants.vue';

const pizzas = ref([
    { id: 1, name: 'Margherita', prices: 65000, toppings: [1, 2, 3, 4, 9], image: 'margherita.jpeg' },
    { id: 2, name: 'Pepperoni', prices: 75000, toppings: [1, 7, 6, 8, 5], image: 'pepperoni.jpg' },
    { id: 3, name: 'Hawaiian', prices: 75000, toppings: [1, 2, 8, 9, 6], image: 'hawaiian.jpeg' },
    { id: 4, name: 'BBQ Chicken', prices: 85000, toppings: [9, 8, 7, 4, 5], image: 'bbq-chicken.jpeg' },
    { id: 5, name: 'Four Cheese', prices: 100000, toppings: [6, 2, 3, 4, 5], image: 'four-cheese.jpg' },
    { id: 6, name: 'Veggie', prices: 65000, toppings: [7, 9, 3, 4, 5], image: 'veggie.jpeg' },
    { id: 7, name: 'Meat Lovers', prices: 120000, toppings: [6, 2, 3, 4, 8], image: 'meat-lovers.jpg' },
    { id: 8, name: 'Seafood', prices: 110000, toppings: [1, 2, 6, 4, 5], image: 'seafood.jpg' },
    { id: 9, name: 'Buffalo Chicken', prices: 100000, toppings: [9, 2, 3, 6, 5], image: 'buffalo-chicken.jpg' },
    { id: 10, name: 'Mexican', prices: 85000, toppings: [1, 8, 3, 6, 5], image: 'mexican.jpg' },
    { id: 11, name: 'Pesto Chicken', prices: 100000, toppings: [7, 2, 3, 4, 5], image: 'pesto-chicken.jpeg' },
    { id: 12, name: 'Mushroom', prices: 75000, toppings: [8, 2, 3, 9, 5], image: 'mushroom.jpg' },
])

const toppings = ref([
    { id: 1, name: 'Ham', prices: 12000 },
    { id: 2, name: 'Mushroom', prices: 8000 },
    { id: 3, name: 'Mozzarela', prices: 15000 },
    { id: 4, name: 'Cheddar', prices: 15000 },
    { id: 5, name: 'Pepperoni', prices: 12000 },
    { id: 6, name: 'Pineapple', prices: 8000 },
    { id: 7, name: 'Bacon', prices: 15000 },
    { id: 8, name: 'Meatball', prices: 15000 },
    { id: 9, name: 'Sausage', prices: 15000 },
])

const carts = ref([
    { id: 1, pizza: 1, toppings: [1, 3, 9], totalPrice: 107000 },
    { id: 2, pizza: 5, toppings: [6, 4], totalPrice: 123000 },
    { id: 3, pizza: 7, toppings: [2, 3, 4, 8], totalPrice: 283000 },
])

let isOpen = ref(false)

const variantSearch = (id) => {
    let variant = null;
    pizzas.value.forEach(pizza => {
        if (id === pizza.id) {
            variant = pizza;
        }
    });
    return variant;
};

const toppingSearch = (list) => {
    let selectedToppings = [];
    list.forEach(id => {
        toppings.value.forEach(topping => {
            if (id === topping.id) {
                selectedToppings.push(topping);
            }
        });
    });
    return selectedToppings;
};

let pizzaToppings = [];

const pizzaToppingSearch = (list) => {
    pizzaToppings = [];
    list.forEach(id => {
        toppings.value.forEach(topping => {
            if (id === topping.id) {
                pizzaToppings.push(topping);
            }
        });
    });
    isOpen.value = !isOpen.value
    return pizzaToppings;
};
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
                    <PizzaCard v-for="pizza in pizzas" :name="pizza.name" :image="pizza.image" :prices="pizza.prices"
                        :isOpen='isOpen' @customize="pizzaToppingSearch(pizza.toppings)" :toppings="toppingSearch(pizza.toppings)" />
                </section>
            </section>
            <section
                class="w-[34%] h-screen flex flex-col justify-between bg-white border-[1px] border-[#DDDDDD] rounded-md shadow-lg pb-[40px] px-[40px] gap-8 overflow-y-scroll scrollbar-hide">
                <div class="w-full h-full flex justify-between border-b-2 pb-4 sticky top-0 bg-white pt-[40px]">
                    <h1 class="text-3xl text-gray-700 font-bold ">
                        My Cart
                    </h1>
                </div>
                <section class="flex flex-col gap-5">
                    <PizzaCart v-for="cart in carts" :cart='cart' :variant="variantSearch(cart.pizza)"
                        :toppings="toppingSearch(cart.toppings)" />
                </section>
            </section>
        </section>
        <AddVariant :isOpen='isOpen' @change-open="isOpen = !isOpen" :toppings="pizzaToppings" />
    </main>
</template>
