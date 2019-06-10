import { Component, OnInit } from "@angular/core";
import { ShowService } from "../../../services/show.service";
import { Show } from "../../../interfaces/show";

@Component({
  selector: "app-show-view",
  templateUrl: "./show-view.component.html",
  styleUrls: ["./show-view.component.css"]
})
export class ShowViewComponent implements OnInit {
  public shows: Show[];
  constructor(private _showService: ShowService) {}

  ngOnInit() {
    this.getShows();
  }

  public getShows(): void {
    this._showService.getShow().subscribe(data => {
      this.shows = data;
    });
  }
}
