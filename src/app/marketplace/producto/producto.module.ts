import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { ProductoRoutingModule } from './producto-routing.module';



@NgModule({
  declarations: [ListProductoComponent, AddProductoComponent, EditProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
