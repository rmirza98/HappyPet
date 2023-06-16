import { Component, OnInit } from '@angular/core';

import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-index',
  templateUrl: './indexComentario.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComentarioComponent implements OnInit {

  comentarios: Comentario[] = [];

  // constructor() { }
  constructor(public comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.comentarioService.getAll().subscribe((data: Comentario[])=>{
      this.comentarios = data;
      console.log(this.comentarios);
    })
  }

  deletePerson(id:number){
    this.comentarioService.delete(id).subscribe(res => {
         this.comentarios = this.comentarios.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}
