<script setup>
import { ref, onMounted, watch } from 'vue';
import PizzaCard from '../contents/pizza/pizza-card.vue';
import PizzaCart from '../contents/pizza/pizza-cart.vue';
import AddVariant from '../contents/pizza/select-variants.vue';
import { pizzaSearch } from '../../composables/pizzaFunctions';
import { pizzaOrder } from '../../composables/pizzaFunctions';
import { useCartStore } from '../../stores/cartStore';

const nullable = ref({ id: null, pizza: null, topping_ids: [], totalPrice: null });
const nullList = ref([
    { id: null, name: null, prices: null }
]);
const cartStore = useCartStore();
const { setCart, setToppings, thisCart, allToppings } = cartStore;

const {
    pizzas,
    toppings,
    carts,
    isOpen,
    pizzaId,
    pizzaPrices,
    pizzaToppings,
    variantSearch,
    toppingSearch,
    pizzaToppingSearch,
} = pizzaSearch();

const {
    overallPrices,
    lastPrices,
    updates,
    cart_id,
    toppingList,
    updateOverall,
    deleteCart,
} = pizzaOrder();

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
                        @customize="pizzaToppingSearch(pizza.id), setCart(nullable), setToppings(nullList)"
                        :toppings="toppingSearch(pizza.topping_ids)" />
                </section>
            </section>
            <section
                class="w-[34%] h-screen flex flex-col bg-white border-[1px] border-[#DDDDDD] rounded-md shadow-lg pb-[40px] px-[40px] gap-8 overflow-y-scroll scrollbar-hide">
                <div class="w-full h-fit flex border-b-2 pb-4 sticky top-0 bg-white pt-[40px]">
                    <h1 class="text-3xl text-gray-700 font-bold ">
                        My Cart
                    </h1>
                </div>
                <section class="flex flex-col gap-3">
                    <PizzaCart v-if="carts.length != 0" v-for="cart in carts" :cart='cart' :variant="variantSearch(cart.pizza_id)"
                        :toppings="toppingSearch(cart.topping_ids)" @delete-cart="deleteCart(cart.id, cart.totalPrice)"
                        @set-cart="setCart" @set-toppings="setToppings" @search="pizzaToppingSearch(cart.pizza_id)"
                        @update-cart="" @update-overall-prices="updateOverall(lastPrices)" />
                    <section class="w-full h-fit mt-6">
                        <div
                            class="w-full flex justify-between items-center font-bold text-xl bg-gray-100 border-[1px] rounded-lg p-4">
                            <h2>Total Harga
                                <br>
                                pada Keranjang
                            </h2>
                            <p class="text-2xl">Rp. {{ overallPrices }}</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
        <AddVariant v-if="isOpen" :isOpen='isOpen' @change-open="isOpen = !isOpen" @update-overall-prices="updateOverall(lastPrices)"
            :toppings="pizzaToppings" :pizzaId="pizzaId" :pizzaPrices="pizzaPrices" :updates="updates"
            :cart_id="cart_id" :toppingLists="toppingList" />
    </main>
</template>
