import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  listComentarios: Comentario [] = [
    {
      titulo: 'Cibersecurity',
      autor: 'Yasmani Alexander Tapia',
      fechaCreacion: new Date(), texto:'Ejemplo'
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}

