import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventManagementComponent } from './event-management/event-management.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogItemComponent } from './common-item/dialog-item/dialog-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EventManagementComponent,
    DialogItemComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  entryComponents: [EventManagementComponent],
})
export class ContainerModule { }
