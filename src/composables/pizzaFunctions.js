import { ref } from 'vue';

const pizzas = ref([
    { id: 1, name: 'Margherita', prices: 65000, topping_ids: [1, 2, 3, 4, 9], image: 'margherita.jpeg' },
    { id: 2, name: 'Pepperoni', prices: 75000, topping_ids: [1, 7, 6, 8, 5], image: 'pepperoni.jpg' },
    { id: 3, name: 'Hawaiian', prices: 75000, topping_ids: [1, 2, 8, 9, 6], image: 'hawaiian.jpeg' },
    { id: 4, name: 'BBQ Chicken', prices: 85000, topping_ids: [9, 8, 7, 4, 5], image: 'bbq-chicken.jpeg' },
    { id: 5, name: 'Four Cheese', prices: 100000, topping_ids: [6, 2, 3, 4, 5], image: 'four-cheese.jpg' },
    { id: 6, name: 'Veggie', prices: 65000, topping_ids: [7, 9, 3, 4, 5], image: 'veggie.jpeg' },
    { id: 7, name: 'Meat Lovers', prices: 120000, topping_ids: [6, 2, 3, 4, 8], image: 'meat-lovers.jpg' },
    { id: 8, name: 'Seafood', prices: 110000, topping_ids: [1, 2, 6, 4, 5], image: 'seafood.jpg' },
    { id: 9, name: 'Buffalo Chicken', prices: 100000, topping_ids: [9, 2, 3, 6, 5], image: 'buffalo-chicken.jpg' },
    { id: 10, name: 'Mexican', prices: 85000, topping_ids: [1, 8, 3, 6, 5], image: 'mexican.jpg' },
    { id: 11, name: 'Pesto Chicken', prices: 100000, topping_ids: [7, 2, 3, 4, 5], image: 'pesto-chicken.jpeg' },
    { id: 12, name: 'Mushroom', prices: 75000, topping_ids: [8, 2, 3, 9, 5], image: 'mushroom.jpg' },
]);

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
]);

const carts = ref([
    // { id: 1, pizza: 1, topping_ids: [1, 3, 9], totalPrice: 107000 },
    // { id: 2, pizza: 5, topping_ids: [6, 4], totalPrice: 123000 },
    // { id: 3, pizza: 7, topping_ids: [2, 3, 4, 8], totalPrice: 283000 },
]);

const isOpen = ref(false);

export function pizzaSearch() {
    const pizzaToppings = ref([]);
    const pizzaId = ref(0);
    const pizzaPrices = ref(0);

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

    const pizzaToppingSearch = (id) => {
        pizzaToppings.value = [];
        const items = pizzas.value.find(item => item.id === id);
        const list = items.topping_ids;

        list.forEach(id => {
            toppings.value.forEach(topping => {
                if (id === topping.id) {
                    pizzaToppings.value.push(topping);
                }
            });
        });
        pizzaId.value = id;
        pizzaPrices.value = items.prices;
        isOpen.value = !isOpen.value;
    };

    return {
        variantSearch,
        toppingSearch,
        pizzaToppingSearch,
        pizzas,
        toppings,
        carts,
        isOpen,
        pizzaToppings,
        pizzaId,
        pizzaPrices,
    };
}

export function pizzaOrder() {
    const overallPrices = ref(0);
    const toppingList = ref([]);
    const lastPrices = ref(0);
    const cart_id = ref(0);
    const updates = ref([]);

    carts.value.forEach(cart => {
        overallPrices.value += cart.totalPrice;
    });

    const addTopping = (toppingId, toppingPrices) => {
        const listId = ref(toppingList.value.length + 1);
        const free = ref(true);

        if (toppingList.value != null) {
            toppingList.value.forEach(topping => {
                if (toppingId == topping.topping) {
                    free.value = false;
                }
            });
        }

        if (free.value) {
            toppingList.value.push({ topping: toppingId, prices: toppingPrices });
        }
        else {
            toppingList.value = toppingList.value.filter(topping => topping.topping != toppingId);
        }
    };

    const removeTopping = () => {
        toppingList.value.length = 0;
        updates.value.length = 0;
    };

    const addCart = (pizzaId, pizzaPrices, toppingList) => {
        const addedTopping = ref([]);
        const nextId = ref(carts.value.length + 1);
        const totalCount = ref(pizzaPrices);

        toppingList.forEach(topping => {
            addedTopping.value.push(topping.topping);
            totalCount.value += topping.prices;
        });

        carts.value.push({ id: nextId.value, pizza_id: pizzaId, topping_ids: addedTopping, totalPrice: totalCount.value });
        toppingList.length = 0;
        lastPrices.value = totalCount.value;
    };

    const updateCart = (id) => {
        const items = carts.value.find(item => item.id === id);
        const pizza = pizzas.value.find(pizza => pizza.id === items.pizza_id)
        const totalCount = ref(pizza.prices);

        if (items) {
            items.topping_ids = [];
            items.totalPrice = totalCount;
            toppingList.value.forEach((topping) => {
                items.topping_ids.push(topping.topping);
                totalCount.value += topping.prices;
                items.totalPrice = totalCount;
            });
        }
    };

    const deleteCart = (id) => {
        carts.value = carts.value.filter(cart => cart.id !== id);
    };

    const updateOverall = () => {
        overallPrices.value = 0;

        carts.value.forEach(cart => {
            overallPrices.value += cart.totalPrice;
        });
    };

    return {
        overallPrices,
        toppingList,
        lastPrices,
        updates,
        cart_id,
        addTopping,
        removeTopping,
        addCart,
        updateCart,
        updateOverall,
        deleteCart,
    };
}