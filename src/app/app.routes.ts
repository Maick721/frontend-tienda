import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { Art1Component } from './components/art1/art1.component';
import { Art2Component } from './components/art2/art2.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrudComponent } from './components/crud/crud.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';



export const routes: Routes = [
    {path:'', redirectTo: 'form', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'form/:id', loadComponent: () => import('./components/form/form.component').then(m => m.FormComponent)},
    {path: 'nav', component: NavComponent},
    {path: 'foot', component: FootComponent},
    {path: 'art1', component: Art1Component},
    {path: 'art2', component: Art2Component},
    {path: 'productos', component: ProductosComponent},
    {path: 'crud', component: CrudComponent},
    {path: 'contactanos', component: ContactanosComponent},
];
//