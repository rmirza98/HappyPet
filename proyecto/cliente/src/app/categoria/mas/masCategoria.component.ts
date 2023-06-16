import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Categoria } from '../categoria';
import { ProductoService } from 'src/app/producto/producto.service';
import { Usuario } from 'src/app/usuario/usuario';
import { Producto } from 'src/app/producto/producto';

@Component({
  selector: 'app-edit',
  templateUrl: './masCategoria.component.html',
  styleUrls: ['./mas.component.css']
})
export class MasCategoriaComponent implements OnInit {

  id: number;
  categoria: Categoria= {} as Categoria;
  productos: Producto[] = [];

  constructor(
    public categoriaService: CategoriaService,
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.id = this.route.snapshot.params['idCategoria'];
    this.categoriaService.find(this.id).subscribe((data: Categoria)=>{
      this.categoria = data;
    });

  

  }

  ngOnInit(): void {

    this.productoService.getProductosPorCategoria(this.id).subscribe((data:Producto[])=>{
      this.productos=data;
    });

  }



  submit(){
    
  }

}
