import { Routes } from '@angular/router';

import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const USARIO_ROUTES: Routes = [
    { path: 'detalle', component: UsuarioDetalleComponent},
    { path: 'nuevo', component: UsuarioNuevoComponent},
    { path: 'editar', component: UsuarioEditarComponent},
    { path: '**' , pathMatch: 'full', redirectTo: 'editar'}
];

