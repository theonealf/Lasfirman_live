import { appsettings } from './appsettings/appsettings';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lasfirman';  
  constructor(public settings:appsettings, private cookies:CookieService){
    this.settings.loader= true;
    // // Clear on startup if expired
    // const dateNow = new Date();

    // if(this.cookies.get('cached')){
    //     console.log(this.cookies.get('cached'));
    // }else{
    //   dateNow.setMinutes(dateNow.getMinutes() + 1);
    //   this.cookies.set('cached', 'true', dateNow);
      localStorage.clear();
      console.log("kör");
    //   console.log(this.cookies.get('cached') +" updaterad");
    // }
   
    
  }

}
