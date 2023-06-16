import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LdvService } from 'src/app/ldv/ldv.service';
import { Ldv } from 'src/app/ldv/ldv';
import { Venta } from '../venta';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-create',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent implements OnInit {

  ldvs: Ldv[] = [];
  usuario: Usuario= {} as Usuario;
  venta: Venta= {} as Venta;

  defaultValue: string = 'Valor por defecto';
  form: FormGroup;

  constructor(
    public ventaService: VentaService,
    public ldvService: LdvService,
    public usuarioService: UsuarioService,
    private router: Router
  ) { 

    this.usuarioService.findLogin().subscribe(
      (usuario: Usuario) => {
        this.usuario =usuario;
      },
      (error: any) => {
        // Manejar el error en caso de que ocurra
      }
    );

    const fechaHoraActual = new Date();
    this.defaultValue = `${fechaHoraActual.toLocaleDateString('es-ES')} ${fechaHoraActual.toLocaleTimeString('es-ES')}`;
    this.form = new FormGroup({
      fecha:  new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl()
    });
  }

  ngOnInit(): void {

  

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.usuario.id,this.form.value);
    this.ventaService.create(this.usuario.id,this.form.value).subscribe(res => {
         console.log('Venta created successfully!');
         this.router.navigateByUrl('venta/index');
    })
  }

}
