import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
