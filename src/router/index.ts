import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { default as WorkflowIndex } from "@/pages/Workflow/index.vue";
import { default as ChatIndex } from "@/pages/Chat/index.vue";
import Home from "@/pages/Home.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/workflow", component: WorkflowIndex },
  { path: "/chat", component: ChatIndex },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
