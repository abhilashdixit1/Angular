import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../../services/movie.service";
import { Movie } from "../../../interfaces/movie";

@Component({
  selector: "app-movie-view",
  templateUrl: "./movie-view.component.html",
  styleUrls: ["./movie-view.component.css"]
})
export class MovieViewComponent implements OnInit {
  public movies: Movie[];
  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  public getMovies(): void {
    this._movieService.getMovies().subscribe(data => {
      console.log("data", data);
      this.movies = data;
    });
  }
}
