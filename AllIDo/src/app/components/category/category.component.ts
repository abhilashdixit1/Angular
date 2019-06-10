import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  public gotoShows(): void {
    this._router.navigate(["/shows"]);
  }

  public gotoMovies(): void {
    this._router.navigate(["/movies"]);
  }
}
