import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { RootComponent } from './root/root.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path:"", component:RootComponent},
  {path:"timeline", component:TimelineComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"research", component:ResearchComponent},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
