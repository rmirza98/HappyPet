import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
  ) { 
    this.form = new FormGroup({
      nombre:  new FormControl(),
      pwd: new FormControl()
    });
  }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }


  submit(){
    
    console.log(this.form.value);
    this.usuarioService.createLogin(this.form.value).subscribe(res => {
         this.router.navigateByUrl('');
         this.refresh();
    })
    console.log(this.form.value+"exito");

  }
  refresh(): void {
    window.location.href='';
}

}

