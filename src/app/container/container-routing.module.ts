import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventManagementComponent } from './event-management/event-management.component';
import { DialogItemComponent } from './common-item/dialog-item/dialog-item.component';

const routes: Routes = [
  { path: 'container/eventManagement',  component: EventManagementComponent },
  { path: 'container/dialog',  component: DialogItemComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
