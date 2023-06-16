import { Component, OnInit } from '@angular/core';

import { VentaService } from '../venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Venta } from '../venta';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {

  id: number;
  venta: Venta= {} as Venta;

  constructor(
    public ventaService: VentaService,
    private route: ActivatedRoute,
    private router: Router
  ) {     
    this.id = this.route.snapshot.params['idVenta'];
  this.ventaService.find(this.id).subscribe((data: Venta)=>{
    this.venta = data;
  });

 }

  ngOnInit(): void {
    

  }

  total: number = 0;

// Calcular el valor total en función de los valores de cantidad y precio
calcularTotal(ldv: any) {
  const cantidad = parseInt(ldv.cantidad, 10);
  const precio = parseFloat(ldv.product.precio);
  const subtotal = cantidad * precio;
  this.total += subtotal;
  return subtotal;
}

  submit(){
    
  }

}
