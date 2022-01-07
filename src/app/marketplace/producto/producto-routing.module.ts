import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductoComponent
  },
  {
    path: 'add',
    component: AddProductoComponent
  },
  {
    path: 'edit/:id',
    component: EditProductoComponent
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
export class ProductoRoutingModule { }
