import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../../interfaces/movie";
import { MatDialog } from "@angular/material/dialog";
import { MovieOverviewDialogComponent } from "../movie-overview-dialog/movie-overview-dialog.component";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() public movie: Movie;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openMovieDialog() {
    const dialogRef = this.dialog.open(MovieOverviewDialogComponent, {
      data: { movie: this.movie }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
