import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service'; 
import { Categoria } from 'src/app/categoria/categoria';
import { Producto } from '../producto';
@Component({
  selector: 'app-create',
  templateUrl: './createProducto.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProductoComponent implements OnInit {
  categorias: Categoria[] = [];
  producto: Producto= {} as Producto;

  constructor(
    public productoService: ProductoService,
    public categoriaService: CategoriaService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    })
    

  }


  submit(){
    
    console.log("existo");
    this.productoService.create(this.producto).subscribe(res => {
         console.log('Prducto creado');
         this.router.navigateByUrl('producto/index');
    })
  }

}
