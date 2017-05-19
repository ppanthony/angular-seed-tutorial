import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';;
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }        from './app.component';
import { HeroesComponent }     from './heroes.component';
import { SharedModule } from './shared/shared.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule.forRoot(), FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [AppComponent,HeroDetailComponent, HeroesComponent],
  providers: [ HeroService, {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})



export class AppModule {

}
