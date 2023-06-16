import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { IndexProductoComponent } from './index/indexProducto.component';
import { CreateProductoComponent } from './create/createProducto.component';
import { EditProductoComponent } from './edit/editProducto.component';
import { MasProductoComponent } from './mas/masProducto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexProductoComponent,
    CreateProductoComponent,
    EditProductoComponent,
    MasProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductoModule { }
