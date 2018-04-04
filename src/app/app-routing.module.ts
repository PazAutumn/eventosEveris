import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListMeetupComponent } from './list-meetup/list-meetup.component';

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}

const routes: Routes = [
{ path: "events", component: ListMeetupComponent }
];
