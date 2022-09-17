import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  agregaComentario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregaComentario=this.fb.group({
      titulo:['',Validators.required],
      autor:['',Validators.required],
      texto:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregar(){
    console.log(this.agregaComentario);

    const comentario:Comentario={
      titulo: this.agregaComentario.get('titulo')?.value,
      autor: this.agregaComentario.get('autor')?.value,
      texto: this.agregaComentario.get('texto')?.value,
      fechaCreacion: new Date()
    }
    console.log(comentario);
  }

}
