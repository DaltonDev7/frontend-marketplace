import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoriaComponent
  },
  {
    path: 'add',
    component: AddCategoriaComponent
  },
  {
    path: 'edit/:id',
    component: EditCategoriaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CategoriaRoutingModule { }
