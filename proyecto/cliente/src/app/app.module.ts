import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComentarioModule } from './comentario/comentario.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductoModule } from './producto/producto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LdvModule } from './ldv/ldv.module';
import { VentaModule } from './venta/venta.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    ComentarioModule,
    ProductoModule,
    CategoriaModule,
    LdvModule,
    VentaModule,
    HttpClientModule,
    NgbModule,    
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
