import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowViewComponent } from "./components/show-components/show-view/show-view.component";
import { CategoryComponent } from "./components/category/category.component";
import { MovieViewComponent } from "./components/movie-components/movie-view/movie-view.component";

const routes: Routes = [
  { path: "shows", component: ShowViewComponent },
  { path: "category", component: CategoryComponent },
  { path: "movies", component: MovieViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
