import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';


export const APP_ROUTES: Routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'usuarios' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
