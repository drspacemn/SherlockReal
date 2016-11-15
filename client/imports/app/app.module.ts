import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule  }  from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { HomeComponent }  from "./home/home.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
