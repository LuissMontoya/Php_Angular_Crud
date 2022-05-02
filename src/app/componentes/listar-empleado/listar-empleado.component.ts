import { CrudService } from './../../servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css'],
})
export class ListarEmpleadoComponent implements OnInit {
  Empleados: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService
      .obtenerEmpleados()
      /*.subscribe( respuesta=> {
        console.log( respuesta );
      })*/
      .subscribe((data) => (this.Empleados = data));
  }

  borrarRegistro(id: any, i: any) {
    if (window.confirm('Desea eliminar este registro?')) {
      this.crudService.borrarEmpleado(id).subscribe((respuesta) => {
        this.Empleados.splice(i, 1);
      });
    }
  }
}
