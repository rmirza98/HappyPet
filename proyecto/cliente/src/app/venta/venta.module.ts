import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';

import { IndexVentaComponent } from './index-venta/index-venta.component';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexVentaComponent,
    CreateVentaComponent,
    EditVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VentaModule { }
