import {Routes} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'search', component: SearchComponent}
]
