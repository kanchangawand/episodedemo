import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { EpisodeslistComponent } from './episodeslist/episodeslist.component';
import { EpisodesdetailsComponent } from './episodesdetails/episodesdetails.component';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    EpisodeslistComponent,
    EpisodesdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
