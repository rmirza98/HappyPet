import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comentario } from '../comentario';
import { ProductoService } from 'src/app/producto/producto.service';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/producto/producto';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';
@Component({
  selector: 'app-create',
  templateUrl: './createComentario.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComentarioComponent implements OnInit {
  id: number;
  form: FormGroup;
  comentario: Comentario= {} as Comentario;
  producto: Producto= {} as Producto;
  usuario: number=0;

  constructor(
    private route: ActivatedRoute,
    public comentarioService: ComentarioService,
    public productoService: ProductoService,
    public usuarioService:UsuarioService,
    private router: Router
  ) { 
    this.usuarioService.findLogin().subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario.id;
      },
      (error: any) => {
        // Manejar el error en caso de que ocurra
      }
    );
    this.id = this.route.snapshot.params['idProducto'];
    this.form = new FormGroup({
      texto:  new FormControl()
    });
  }

  ngOnInit(): void {  
 
  }

  get f(){
    return this.form.controls;
  }

  submit(){

   // this.comentario.texto=this.form.value;
    /*this.productoService.find(this.id).subscribe(
      (producto: Producto) => {
        this.comentario.producto = producto;
      },
      (error: any) => {
        // Manejar el error en caso de que ocurra
      }
    );*/



    
    console.log(this.form.value);
    console.log(this.id,this.usuario,this.comentario);

    this.comentarioService.create(this.id,this.usuario,this.form.value).subscribe(res => {
         console.log('comentario creado');
         // poner la id del producto
         this.router.navigateByUrl('producto/index');
    })
  }

}
