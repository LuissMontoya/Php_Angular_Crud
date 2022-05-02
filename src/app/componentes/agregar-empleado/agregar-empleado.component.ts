import { CrudService } from './../../servicio/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioEmpleados!: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {}

  enviarDatos(): any {
    console.log('presionado');
    console.log(this.formularioEmpleados.value);
    this.crudService.agregarEmpleado(this.formularioEmpleados.value)
    .subscribe();
    this.ruteador.navigateByUrl('/listar-empleado');
  }
}
