import { Empleado } from './../../servicio/Empleado';
import { CrudService } from './../../servicio/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
})
export class EditarEmpleadoComponent implements OnInit {
  formularioEmpleados!: FormGroup;
  empleado!: Empleado;
  id: any;

  constructor(
    private activeRoute: ActivatedRoute,
    public formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.crudService.obtenerEmpleado(this.id).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioEmpleados.setValue({
        nombre: respuesta[0]['nombre'],
        correo: respuesta[0]['correo']
      });
    });
    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {}

  enviarDatos():any{
    console.log(this.id);
    console.log(this.formularioEmpleados.value);
    this.crudService.editarEmpleado(this.id, this.formularioEmpleados.value)
    .subscribe(()=>{});
    this.ruteador.navigateByUrl('/listar-empleado');
  }
}
