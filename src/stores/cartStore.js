import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const thisCart = ref({});
  const allToppings = ref([]);

  const setCart = (cart) => {
    thisCart.value = cart;
  };

  const setToppings = (toppings) => {
    allToppings.value = toppings;
  };

  return {
    thisCart,
    allToppings,
    setCart,
    setToppings,
  };
});
