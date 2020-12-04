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
import Login from "../views/Login.vue"
import Customer from "../views/Customer.vue"
import StoredProducts from "../views/StoredProducts.vue"
import StoredCustomers from "../views/StoredCustomers.vue"
import StoredSupplies from "../views/StoredSupply.vue"
import StoredAddons from "../views/StoredAddons.vue"
import StoredCart from "../views/StoredCartSupply.vue"


Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
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
		name: 'supply',
		component: Supply,
	},
	{
		path: '/teaana-login',
		name: 'teaana-login',
		component: Login,
	},
	{
		path: '/customer',
		name: 'customer',
		component: Customer,
	},
	{
		path: '/teaana-products',
		name: 'storedproducts',
		component: StoredProducts,
	},
	{
		path: '/teaana-supplies',
		name: 'storedsupplies',
		component: StoredSupplies,
	},
	{
		path: '/teaana-addons',
		name: 'storedaddons',
		component: StoredAddons,
	},
	{
		path: '/supply-cart',
		name: 'storedcart',
		component: StoredCart,
	},
	{
		path: '/teaana-customer',
		name: 'accountregistered',
		component: StoredCustomers,
	},


];


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
