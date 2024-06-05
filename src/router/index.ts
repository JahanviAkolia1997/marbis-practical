import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AccordionComponent from "../components/AccordionComponent.vue";
import TabsComponent from "../components/TabsComponent.vue";
import DropdownComponent from "../components/DropdownComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Accordion",
    component: AccordionComponent,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: TabsComponent,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: DropdownComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
