import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CRUD1Service } from '../crud1.service';
import { Clase } from 'src/app/Models/clase.model';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class CRUD1Component implements OnInit {
public form: FormGroup;
public datos: any;

  constructor(private registroService: CRUD1Service,
    public formB: FormBuilder
    ) { 
      this.form = this.formB.group({
        id: new FormControl(),
        nombre: new FormControl('',Validators.required),
        fecha_inicio: new FormControl('',Validators.required),
        fecha_fin: new FormControl('',Validators.required)
      });

    }

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.registroService.obtenerRegistros()
    .toPromise()
    .then((res)=>{
      this.datos = res;
    })
  }

  public crear(){
    if(this.form.valid){
      const registro = {
        nombre: this.form.get('nombre')?.value,
        fecha_inicio: this.form.get('fecha_inicio')?.value,
        fecha_fin: this.form.get('fecha_fin')?.value,
      }
      this.registroService.crearRegistro(registro)
      .toPromise()
      .then((res)=>{
        this.get();
      })
    }
  }

  public actualizar(){
    if(this.form.valid && this.form.get('id')?.value){
      const registro = {
        nombre: this.form.get('nombre')?.value,
        fecha_inicio: this.form.get('fecha_inicio')?.value,
        fecha_fin: this.form.get('fecha_fin')?.value,
      }
      this.registroService.actualizarRegistro(this.form.get('id')?.value,registro)
      .toPromise()
      .then((res)=>{
        this.get();
      })
    }
  }



  public eliminar(id: number) {
    this.registroService.eliminarRegistro(id)
    .toPromise()
    .then((res)=>{
      this.get();
    })
  }

}
