import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from "@angular/material/dialog";
import { DialogItemComponent } from '../common-item/dialog-item/dialog-item.component'

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  data: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', '0123456'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const dialogRef = this.dialog.open(DialogItemComponent, {
        data: { title: "確認", message: "タスクを移動しますか？" },
        height: "180px",
        width: "250px",
        disableClose: false,
      });

      dialogRef.afterClosed().subscribe((result) => {

        if (result) {

          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );

        }

      });
    }
  }
}
