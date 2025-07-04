import { createRouter, createWebHistory } from 'vue-router';

// Import page components (not App.vue!)
import HomeView from '../components/CardContainer.vue';
import Product from '../components/SingleProduct.vue'
import Categories from "../components/product_cate.vue"
// import AboutView from '../views/AboutView.vue'; // example

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path:'/product/:id', component:Product},
  { path:'/Categories',component:Categories}
  // { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
