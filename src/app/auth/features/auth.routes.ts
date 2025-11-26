import { Routes } from "@angular/router";

export default [
    {
    path: 'o',
    loadComponent: () => import('./sing-in/sing-in.component'),
},
    {
    path: 'u',
    loadComponent: () => import('./sing-up/sing-up.component'),
}
] as Routes