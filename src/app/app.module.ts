import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routes} from "./routes";
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {LoginComponent} from "./components/login/login.component";
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
