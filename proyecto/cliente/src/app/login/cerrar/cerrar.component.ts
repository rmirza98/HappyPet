import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './cerrar.component.html',
})
export class CerrarComponent implements OnInit {

 
  constructor(
    public usuarioService: UsuarioService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    
    

  }


  cerrar(){
    this.usuarioService.deleteLogin();
    this.router.navigateByUrl('');
    this.refresh();

  }

  cancelar(){
    this.router.navigateByUrl('');
  }
  refresh(): void {
    window.location.href='';
}
}