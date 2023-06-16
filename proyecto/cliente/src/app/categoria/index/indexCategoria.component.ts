import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';
@Component({
  selector: 'app-index',
  templateUrl: './indexCategoria.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  usuario: string="";

  // constructor() { }
  constructor(public categoriaService: CategoriaService,public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    });
    this.usuarioService.findLogin().subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario.nombre;
      },
      (error: any) => {
        // Manejar el error en caso de que ocurra
      }
    );
  }
  

  deleteCategoria(id:number){
    this.categoriaService.delete(id).subscribe(res => {
         this.categorias = this.categorias.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    });

    

}
}