import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdvRoutingModule } from './ldv-routing.module';

import { IndexLdvComponent } from './index-ldv/index-ldv.component';
import { CreateLdvComponent } from './create-ldv/create-ldv.component';
import { EditLdvComponent } from './edit-ldv/edit-ldv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexLdvComponent,
    CreateLdvComponent,
    EditLdvComponent
  ],
  imports: [
    CommonModule,
    LdvRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LdvModule { }
