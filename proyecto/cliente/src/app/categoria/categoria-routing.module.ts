import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCategoriaComponent } from './index/indexCategoria.component';
import { CreateCategoriaComponent } from './create/create.Categoriacomponent';
import { EditCategoriaComponent } from './edit/editCategoria.component';
  
const routes: Routes = [/*
  { path: 'categoria', redirectTo: 'categoria/index', pathMatch: 'full'},
  { path: 'categoria/index', component: IndexCategoriaComponent },
  { path: 'categoria/create', component: CreateCategoriaComponent },
  { path: 'categoria/edit/:idCategoria', component: EditCategoriaComponent } */
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
