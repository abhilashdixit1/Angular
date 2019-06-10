import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../interfaces/movie";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getMovies() {
    return this._http.get<Movie[]>(
      "https://fokuvl6yv3.execute-api.eu-west-3.amazonaws.com/live"
    );
  }
}
