import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/Login",
    name: "login",
    component: () => <LoginComponent/>
  },
  {
    path: "/registryMember",
    name: "registryMember",
    component: () => import("./components/RegistryMemberComponent")
  },
  {
    path: "/registryOrganizer",
    name: "registryOrganizer",
    component: () => import("./components/RegistryOrganizerComponent")
  },
  {
    path: "/registryEvent",
    name: "registryEvent",
    component: () => import("./components/RegistryEventComponent")
  },

  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;