import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenerateComponent } from './pages/generate/generate.component';
import { IndexComponent } from './pages/index/index.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { GenerationViewComponent } from './pages/generation-view/generation-view.component';
import { SdViewComponent } from './pages/sd-view/sd-view.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'generate',
    component: GenerateComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileViewComponent,
  },
  {
    path: 'generation/:id',
    component: GenerationViewComponent,
  },
  {
    path: 'sd-generation',
    component: SdViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //get current user id
  }
}
