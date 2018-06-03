import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StateComponent} from "./state/state.component";
import {RulesDefinitionComponent} from "./rules-definition/rules-definition.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'state', component: StateComponent },
  { path: 'definitions', component: RulesDefinitionComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
