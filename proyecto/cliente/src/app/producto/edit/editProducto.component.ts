import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Producto } from '../producto';

@Component({
  selector: 'app-edit',
  templateUrl: './editProducto.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditProductoComponent implements OnInit {

  id: number;
  producto: Producto= {} as Producto;
  form: FormGroup;

  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {     this.id = this.route.snapshot.params['idProducto'];
  this.productoService.find(this.id).subscribe((data: Producto)=>{
    this.producto = data;
  });

  this.form = new FormGroup({
    nombre:  new FormControl(),
    descripcion: new FormControl(),
    precio: new FormControl()
  })
  
  
  ;}

  ngOnInit(): void {


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productoService.update(this.id, this.form.value).subscribe(res => {
         console.log('Producto updated successfully!');
         this.router.navigateByUrl('producto/index');
    })
  }

}
