import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Movie } from "../../../interfaces/movie";

export interface DialogData {
  movie: Movie;
}

@Component({
  selector: "app-movie-overview-dialog",
  templateUrl: "./movie-overview-dialog.component.html",
  styleUrls: ["./movie-overview-dialog.component.css"]
})
export class MovieOverviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
