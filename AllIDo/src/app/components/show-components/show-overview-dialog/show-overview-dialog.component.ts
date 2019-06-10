import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Show } from "../../../interfaces/show";

export interface DialogData {
  show: Show;
}

@Component({
  selector: "app-show-overview-dialog",
  templateUrl: "./show-overview-dialog.component.html",
  styleUrls: ["./show-overview-dialog.component.css"]
})
export class ShowOverviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
