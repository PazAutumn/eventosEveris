import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListMeetupComponent } from './list-meetup/list-meetup.component';

const routes: Routes = [{ 
  path: "events",
  component: ListMeetupComponent
}];
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}