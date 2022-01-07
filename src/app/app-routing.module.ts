import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Productos',
    loadChildren: () => import('./marketplace/producto/producto.module').then(p => p.ProductoModule)
  },
  {
    path: 'Categorias',
    loadChildren: () => import('./marketplace/categoria/categoria.module').then(c => c.CategoriaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
