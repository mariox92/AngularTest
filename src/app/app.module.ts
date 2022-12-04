import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTweetsComponent } from './profile/profile-tweets/profile-tweets.component';
import { ProfileTweetsDetailsComponent } from './profile/profile-tweets-details/profile-tweets-details.component';
import { ProfileMediaComponent } from './profile/profile-media/profile-media.component';
import { ProfileLikesComponent } from './profile/profile-likes/profile-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileTweetsComponent,
    ProfileTweetsDetailsComponent,
    ProfileMediaComponent,
    ProfileLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
