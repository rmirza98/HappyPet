import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioRoutingModule } from './comentario-routing.module';
import { IndexComentarioComponent } from './index/indexComentario.component';
import { CreateComentarioComponent } from './create/createComentario.component';
import { EditComentarioComponent } from './edit/editComentario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComentarioComponent,
    CreateComentarioComponent,
    EditComentarioComponent
  ],
  imports: [
    CommonModule,
    ComentarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComentarioModule { }
