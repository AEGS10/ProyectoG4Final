import { RouterModule, Routes } from '@angular/router';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { PaginaPrincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NgModule } from '@angular/core';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { TransporteComponent } from './transporte/transporte.component';
import { ToursComponent } from './tours/tours.component';


export const routes: Routes = [
    
    { path: '', redirectTo: 'paginainicial', pathMatch: 'full' },// Ruta raíz redirige a paginainicial
    { path: 'paginainicial', component: PaginainicialComponent },  
    { path: 'paginaprincipal', component: PaginaPrincipalComponent },
    { path: 'explorar', component: ExplorarComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: 'experiencias', component: ExperienciasComponent },
    {
        path: 'reservas',
        component: ReservasComponent,
        children: [
            { path: '', redirectTo: 'hoteles', pathMatch: 'full' }, // Redirige a hoteles por defecto
            { path: 'hoteles', component: HotelesComponent },
            { path: 'transporte', component: TransporteComponent },
            { path: 'tours', component: ToursComponent },
        ]
    },
    { path: 'recomendaciones', component: RecomendacionesComponent },
    { path: '**', redirectTo: 'paginainicial' }  // Cualquier ruta no reconocida redirige a paginainicial         // Login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }