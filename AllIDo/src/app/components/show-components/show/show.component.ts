import { Component, OnInit, Input } from "@angular/core";
import { Show } from "../../../interfaces/show";
import { MatDialog } from "@angular/material/dialog";
import { ShowOverviewDialogComponent } from "../show-overview-dialog/show-overview-dialog.component";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"]
})
export class ShowComponent implements OnInit {
  @Input() public show: Show;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openShowDialog() {
    const dialogRef = this.dialog.open(ShowOverviewDialogComponent, {
      data: { show: this.show }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
