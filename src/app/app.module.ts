import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { FeatureComponent } from './components/feature/feature.component';
import { LocationComponent } from './components/location/location.component';
import { OfferComponent } from './components/offer/offer.component';
import { PricesComponent } from './components/prices/prices.component';
import { GuideComponent } from './components/guide/guide.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImageFormatDirective } from './directives/image-format.directive';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    FeatureComponent,
    LocationComponent,
    OfferComponent,
    PricesComponent,
    GuideComponent,
    ProfileComponent,
    ImageFormatDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
