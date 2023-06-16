import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  usuario: Usuario= {} as Usuario;
  form: FormGroup;

  constructor(
    public usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.id = this.route.snapshot.params['idUsuario'];
    this.usuarioService.find(this.id).subscribe((data: Usuario)=>{
      this.usuario = data;
    });


    this.form = new FormGroup({
      nombre:  new FormControl(),
      correo: new FormControl(),
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
    this.usuarioService.update(this.id, this.form.value).subscribe(res => {
         console.log('Usuario updated successfully!');
         this.router.navigateByUrl('usuario/index');
    })
  }

}
