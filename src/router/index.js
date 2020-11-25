import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Supply from '../views/Supply.vue';
import Profile from '../views/Account.vue';
import Product from '../views/Shop.vue';
import Cart from '../views/Cart.vue';
import Gallery from "../components/Gallery.vue"
import Contact from "../components/Contact.vue"
import Landing from "../components/Landing.vue"
import Login from "../views/Login.vue"
import Customer from "../views/Customer.vue"
import StoredProducts from "../views/StoredProducts.vue"
import AccountRegistered from "../views/AccountRegistered.vue"
import StoredSupplies from "../views/StoredSupply.vue"
import StoredAddons from "../views/StoredAddons.vue"

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
		component: Profile,
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
		path: '/teaana-accounts',
		name: 'accountregistered',
		component: AccountRegistered,
	},


];


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
