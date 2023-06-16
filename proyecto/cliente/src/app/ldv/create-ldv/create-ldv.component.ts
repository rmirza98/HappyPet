import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/producto/producto.service';
import { Router,ActivatedRoute } from '@angular/router';
import { LdvService } from '../ldv.service';
import { Ldv } from '../ldv';
import { Producto } from 'src/app/producto/producto';
@Component({
  selector: 'app-create',
  templateUrl: './create-ldv.component.html',
  styleUrls: ['./create-ldv.component.css']
})
export class CreateLdvComponent implements OnInit {
  producto: Producto = {} as Producto;
  ldv: Ldv= {} as Ldv;
  id:number;
  constructor(
    public productoService: ProductoService,
    public ldvService: LdvService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params['idProducto'];
    this.productoService.find(this.id).subscribe((data: Producto)=>{
      this.producto = data;
  });
}

  ngOnInit(): void {
    
    

  }


  submit(){
    this.ldvService.create(this.producto.id,this.ldv).subscribe(res => {
         console.log('Ldv creada '+this.producto.id);
         this.router.navigateByUrl('ldv/indexLdv');
    })
  }

}