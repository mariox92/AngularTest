import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTweetsComponent } from './profile/profile-tweets/profile-tweets.component';
import { ProfileTweetsDetailsComponent } from './profile/profile-tweets-details/profile-tweets-details.component';
import { ProfileMediaComponent } from './profile/profile-media/profile-media.component';
import { ProfileLikesComponent } from './profile/profile-likes/profile-likes.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile/tweets', pathMatch: 'full' },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: '', redirectTo: 'tweets', pathMatch: 'full' },
      { path: 'tweets', component: ProfileTweetsComponent },
      { path: 'tweets-details', component: ProfileTweetsDetailsComponent },
      { path: 'media', component: ProfileMediaComponent },
      { path: 'likes', component: ProfileLikesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
