import { Component, OnInit } from '@angular/core';

import { VentaService } from '../venta.service';
import { Venta } from '../venta';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';
@Component({
  selector: 'app-index',
  templateUrl: './index-venta.component.html',
  styleUrls: ['./index-venta.component.css']
})
export class IndexVentaComponent implements OnInit {

  ventas: Venta[] = [];
  usuario: string="";

  // constructor() { }
  constructor(public ventaService: VentaService,public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.ventaService.getAll().subscribe((data: Venta[])=>{
      this.ventas = data;
      console.log(this.ventas);
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

  deleteVenta(id:number){
    this.ventaService.delete(id).subscribe(res => {
         this.ventas = this.ventas.filter(item => item.id !== id);
         console.log('ventas deleted successfully!');
    })
  }

}
