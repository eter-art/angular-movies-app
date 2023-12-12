import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    //Pipes
    ProfitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
