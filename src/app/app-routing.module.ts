import { HemComponent } from './hem/hem.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UndersidaComponent } from './undersida/undersida.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path:'', component:HemComponent },
  {path:':slug', component:UndersidaComponent, data: { preload: true, delay: false }},  
  {path:'**', component:PagenotfoundComponent,data: { preload: true, delay: false}}

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
