import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Todo from './components/TodoView.vue'
import Pizza from './components/PizzaView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/pizza', component: Pizza },
        { path: '/to-do', component: Todo },
    ]
});

const app = createApp(App)

app.use(router);
app.component('to-do', Todo);
app.component('pizza', Pizza);

app.mount('#app')