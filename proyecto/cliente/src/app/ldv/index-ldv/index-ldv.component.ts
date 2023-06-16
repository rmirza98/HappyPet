import { Component, OnInit } from '@angular/core';

import { LdvService } from '../ldv.service';
import { Ldv } from '../ldv';
@Component({
  selector: 'app-index',
  templateUrl: './index-ldv.component.html',
  styleUrls: ['./index-ldv.component.css']
})
export class IndexLdvComponent implements OnInit {

  ldvs: Ldv[] = [];

  // constructor() { }
  constructor(public ldvService: LdvService) { }

  ngOnInit(): void {
    this.ldvService.getAll().subscribe((data: Ldv[])=>{
      this.ldvs = data;
      console.log(this.ldvs);
    })
  }

  deleteLdv(id:number){
    this.ldvService.delete(id).subscribe(res => {
         this.ldvs = this.ldvs.filter(item => item.id !== id);
         console.log('Ldv deleted successfully!');
    })
  }

  total: number = 0;

  calcularTotal(ldv: Ldv) {
    const cantidad = parseInt(ldv.cantidad, 10);
    const precio = parseFloat(ldv.product.precio);
    const subtotal = cantidad * precio;
    this.total += subtotal;
    return subtotal;
  }



 
}
