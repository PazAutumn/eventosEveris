import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListMeetupComponent } from './list-meetup/list-meetup.component';

const routes: Routes = [{ 
  path: "list-meetup",
  component: ListMeetupComponent
}];
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
