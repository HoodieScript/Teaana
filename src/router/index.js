import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [





];

const idxrouters = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,


});

export default idxrouters;
