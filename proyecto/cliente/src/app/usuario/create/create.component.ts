import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public usuarioService: UsuarioService,
    private router: Router
  ) { 
    this.form = new FormGroup({
      nombre:  new FormControl(),
      correo: new FormControl(),
      pwd: new FormControl(),
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
    console.log(this.form.value);
    this.usuarioService.create(this.form.value).subscribe(res => {
         console.log('usuario creado');
         this.router.navigateByUrl('producto/index');
         this.refresh();
    })
  }
  refresh(): void {
    window.location.href='';
}
}
