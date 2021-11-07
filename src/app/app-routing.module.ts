import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerModule } from './container/container.module';


const appRoutes: Routes = [
  {
    path: 'container',
    loadChildren: 'app/container/container.module#ContainerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), ContainerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
