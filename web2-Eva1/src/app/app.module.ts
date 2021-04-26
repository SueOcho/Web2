import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProyectComponent } from './proyect/proyect.component';
import { LogosComponent } from './logos/logos.component';
import { ServiComponent } from './servi/servi.component';
import { ExploreComponent } from './explore/explore.component';
import { NumbersComponent } from './numbers/numbers.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    CardsComponent,
    InformationComponent,
    FooterComponent,
    AboutUsComponent,
    ProyectComponent,
    LogosComponent,
    ServiComponent,
    ExploreComponent,
    NumbersComponent,
    TeamComponent,
    TestimonialsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
