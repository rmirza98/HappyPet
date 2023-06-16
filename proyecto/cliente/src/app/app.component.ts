import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';
import { Usuario } from './usuario/usuario';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HayppyPet';
  usuario: string="";

  constructor(private usuarioService: UsuarioService) {
    
  }
  
  ngOnInit() {
  
      this.usuarioService.findLogin().subscribe(
        (usuario: Usuario) => {
          this.usuario = usuario.nombre;
        },
        (error: any) => {
          // Manejar el error en caso de que ocurra
        }
        
      );
    }
  
}
