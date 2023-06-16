import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/.../

import { IndexProductoComponent } from './index/indexProducto.component';
import { CreateProductoComponent } from './create/createProducto.component';
import { EditProductoComponent } from './edit/editProducto.component';
  
const routes: Routes = [
  /*
  { path: 'producto', redirectTo: 'producto/index', pathMatch: 'full'},
  { path: 'producto/index', component: IndexProductoComponent },
  { path: 'producto/create', component: CreateProductoComponent },
  { path: 'producto/edit/:idProducto', component: EditProductoComponent },
  { path: '../comentario/create/:idProducto', component: CreateProductoComponent }*/
];

/.../

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
