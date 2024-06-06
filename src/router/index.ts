import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AccordionComponent from "../components/AccordionComponent.vue";
import TabsComponent from "../components/TabsComponent.vue";
import DropdownComponent from "../components/DropdownComponent.vue";

// Define the routes for the application
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // Root path of the application which is Accordion component
    name: "Accordion", // Name of the route
    component: AccordionComponent, // Component to be rendered for this route
  },
  {
    path: "/tabs", // Path for the tabs component
    name: "Tabs",
    component: TabsComponent,
  },
  {
    path: "/dropdown", // Path for the dropdown component
    name: "Dropdown",
    component: DropdownComponent,
  },
];

// Create the router instance with the defined routes and history mode
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use HTML5 history mode
  routes, // Array of route definitions
});

export default router;
