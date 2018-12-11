import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USARIO_ROUTES } from './components/usuario/usuario.routes';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', component: UsuarioComponent, children: USARIO_ROUTES }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
