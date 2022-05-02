
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'agregar'},
  {path: 'agregar-empleado', component: AgregarEmpleadoComponent},
  {path: 'listar-empleado', component: ListarEmpleadoComponent},
  {path: 'editar-empleado/:id', component: EditarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
