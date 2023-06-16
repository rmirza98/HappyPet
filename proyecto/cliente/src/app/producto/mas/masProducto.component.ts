import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ComentarioService } from 'src/app/comentario/comentario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './masProducto.component.html',
  styleUrls: ['./edit.component.css']
})
export class MasProductoComponent implements OnInit {

  id: number;
  producto: Producto= {} as Producto;
  //comentarios: Comentario[] = [];

  constructor(
    public comentarioService : ComentarioService,
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {     
    
    this.id = this.route.snapshot.params['idProducto'];
  this.productoService.find(this.id).subscribe((data: Producto)=>{
    this.producto = data;
    console.log(this.producto)

  });

 

  ;}

  ngOnInit(): void {
   /* this.comentarioService.getComentarioByProducto(this.id).subscribe((data: Comentario[])=>{
      this.comentarios = data;
    });*/
  }

}
