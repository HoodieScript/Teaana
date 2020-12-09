import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Supply from '../views/Supply.vue';
import Accountsupp from '../views/Accountsupp.vue';
import Product from '../views/Shop.vue';
import Cart from '../views/Cart.vue';
import Gallery from "../components/Gallery.vue"
import Contact from "../components/Contact.vue"
import Landing from "../components/Landing.vue"



Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/banner-section',
		component: Landing
	},
	{
		path: '/#about-section',

		component: Gallery

	},
	{
		path: '#contact-section',
		name: 'contact',
		component: Contact

	},
	{
		path: '/profile',
		name: 'profile',
		component: Accountsupp,
	},
	{
		path: '/store',
		name: 'shop',
		component: Product,
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart,
	},
	{
		path: '/supply',
		name: 'Supply',
		component: Supply,
	},
	{
		path: '/teaana-login',
		name: 'Login',
		component: () => import( /* webpackChunkName: "teaana-login" */ "../views/Login.vue"),

	},

	{
		path: '/teaana-products',
		name: 'StoredProducts',
		component: () => import( /* webpackChunkName: "teaana-products" */ "../views/StoredProducts.vue"),

	},
	{
		path: '/teaana-supplies',
		name: 'StoredSupplies',
		component: () => import( /* webpackChunkName: "teaana-supplies" */ "../views/StoredSupply.vue"),

	},
	{
		path: '/teaana-addons',
		name: 'StoredAddons',
		component: () => import( /* webpackChunkName: "teaana-addons" */ "../views/StoredAddons.vue"),
	},
	{
		path: '/supply-cart',
		name: 'StoredCart',
		component: () => import( /* webpackChunkName: "supply-cart" */ "../views/StoredCartSupply.vue"),
	},
	{
		path: '/teaana-customer',
		name: 'StoredCustomers',
		component: () => import( /* webpackChunkName: "teaana-customer" */ "../views/StoredCustomers.vue"),

	},
	{
		path: '/teaana-orders',
		name: 'StoredCustomers',
		component: () => import( /* webpackChunkName: "teaana-orders" */ "../views/StoredOrders.vue"),

	},


];


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
