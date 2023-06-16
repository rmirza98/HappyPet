import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComentarioComponent } from './index/indexComentario.component';
import { CreateComentarioComponent } from './create/createComentario.component';
import { EditComentarioComponent } from './edit/editComentario.component';
  
const routes: Routes = [/*
  { path: 'comentario', redirectTo: 'comentario/index', pathMatch: 'full'},
  { path: 'comentario/index', component: IndexComentarioComponent },
  { path: 'comentario/create', component: CreateComentarioComponent },
  { path: 'comentario/edit/:idComentario', component: EditComentarioComponent } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentarioRoutingModule { }
