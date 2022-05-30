export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Main"),
      },
    ],
  },
];
