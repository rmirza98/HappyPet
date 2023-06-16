import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './usuario/index/index.component';
import { CreateComponent } from './usuario/create/create.component';
import { EditComponent } from './usuario/edit/edit.component';
import { IndexProductoComponent } from './producto/index/indexProducto.component';
import { CreateProductoComponent } from './producto/create/createProducto.component';
import { EditProductoComponent } from './producto/edit/editProducto.component';
import { IndexCategoriaComponent } from './categoria/index/indexCategoria.component';
import { CreateCategoriaComponent } from './categoria/create/create.Categoriacomponent';
import { EditCategoriaComponent } from './categoria/edit/editCategoria.component';
import { IndexComentarioComponent } from './comentario/index/indexComentario.component';
import { CreateComentarioComponent } from './comentario/create/createComentario.component';
import { EditComentarioComponent } from './comentario/edit/editComentario.component';
import { CreateLdvComponent } from './ldv/create-ldv/create-ldv.component';
import { EditLdvComponent } from './ldv/edit-ldv/edit-ldv.component';
import { IndexLdvComponent } from './ldv/index-ldv/index-ldv.component';
import { CreateVentaComponent } from './venta/create-venta/create-venta.component';
import { EditVentaComponent } from './venta/edit-venta/edit-venta.component';
import { IndexVentaComponent } from './venta/index-venta/index-venta.component';
import { LoginComponent } from './login/login.component';
import { CerrarComponent } from './login/cerrar/cerrar.component';
import { MasProductoComponent } from './producto/mas/masProducto.component';
import { MasCategoriaComponent } from './categoria/mas/masCategoria.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: 'usuario', redirectTo: 'usuario/index', pathMatch: 'full'},
  { path: 'usuario/index', component: IndexComponent },
  { path: 'usuario/create', component: CreateComponent },
  { path: 'usuario/edit/:idUsuario', component: EditComponent },
  { path: 'producto', redirectTo: 'producto/index', pathMatch: 'full'},
  { path: 'producto/index', component: IndexProductoComponent },
  { path: 'producto/create', component: CreateProductoComponent },
  { path: 'producto/edit/:idProducto', component: EditProductoComponent },
  { path: 'comentario/create/:idProducto', component: CreateComentarioComponent },
  { path: 'categoria', redirectTo: 'categoria/index', pathMatch: 'full'},
  { path: 'categoria/index', component: IndexCategoriaComponent },
  { path: 'categoria/create', component: CreateCategoriaComponent },
  { path: 'categoria/edit/:idCategoria', component: EditCategoriaComponent },
  { path: 'comentario', redirectTo: 'comentario/index', pathMatch: 'full'},
  { path: 'comentario/index', component: IndexComentarioComponent },
  { path: 'comentario/edit/:idComentario', component: EditComentarioComponent },
  { path: 'ldv', redirectTo: 'ldv/indexLdv', pathMatch: 'full'},
  { path: 'ldv/indexLdv', component: IndexLdvComponent },
  { path: 'ldv/createLdv/:idProducto', component: CreateLdvComponent },
  { path: 'ldv/editLdv/:idLdv', component: EditLdvComponent },
  { path: 'venta', redirectTo: 'venta/indexVenta', pathMatch: 'full'},
  { path: 'venta/index', component: IndexVentaComponent },
  { path: 'venta/createVenta', component: CreateVentaComponent },
  { path: 'venta/editVenta/:idVenta', component: EditVentaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/cerrar', component: CerrarComponent },
  { path: 'producto/mas/:idProducto', component: MasProductoComponent },
  { path: 'categoria/mas/:idCategoria', component: MasCategoriaComponent },
  { path: '', component: HomeComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
