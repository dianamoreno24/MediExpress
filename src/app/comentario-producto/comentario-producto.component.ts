import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario-producto',
  templateUrl: './comentario-producto.component.html',
  styleUrls: ['./comentario-producto.component.css']
})
export class ComentarioProductoComponent implements OnInit {
  newEmail = {
    title: 'Email',
    email: ''
};
  newCalification = {
    title: 'Califica el producto',
    calificacion: ''
  };
  // tslint:disable-next-line:typedef
  click($event){
    console.log('Envió el comentario', $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
