import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
      name: "Home",
			component: Home,
		},
		{
			path: "/About",
      name: "About",
			component: About,
		},
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home" }
    }
	],
});

export default router;
