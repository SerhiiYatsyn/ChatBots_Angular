import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BotListComponent} from './components/bot-list/bot-list.component';
import {AppComponent} from './app.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'andy', component: AppComponent},
  {path: 'dany', component: AppComponent},
  {path: 'adder', component: AppComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
