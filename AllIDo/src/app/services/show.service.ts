import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Show } from "../interfaces/show";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  constructor(private _http: HttpClient) {}

  getShow() {
    return this._http.get<Show[]>(
      "https://kf9wjkz05c.execute-api.eu-west-3.amazonaws.com/live/shows"
    );
  }
}
