import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/About",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: "Home" },
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
