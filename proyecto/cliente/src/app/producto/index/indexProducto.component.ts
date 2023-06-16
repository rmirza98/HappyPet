import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Usuario } from 'src/app/usuario/usuario';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './indexProducto.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexProductoComponent implements OnInit {
  productos: Producto[] = [];
  usuario: string="";
  
  // constructor() { }
  constructor(public productoService: ProductoService,public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe((data: Producto[])=>{
      this.productos = data;
      console.log(this.productos);
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

  deleteProducto(id:number){
    this.productoService.delete(id).subscribe(res => {
         this.productos = this.productos.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

  ngOnDestroy(): void {
    window.location.reload();
  }

  recargar(): void {
   
      window.location.reload();
   
  }

}
