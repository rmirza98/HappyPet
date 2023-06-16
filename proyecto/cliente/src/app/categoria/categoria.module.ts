import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';

import { IndexCategoriaComponent } from './index/indexCategoria.component';
import { CreateCategoriaComponent } from './create/create.Categoriacomponent';
import { EditCategoriaComponent } from './edit/editCategoria.component';
import { MasCategoriaComponent } from './mas/masCategoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexCategoriaComponent,
    CreateCategoriaComponent,
    EditCategoriaComponent,
    MasCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
