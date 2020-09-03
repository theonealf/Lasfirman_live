import { appsettings } from './../appsettings/appsettings';
import { WpApiService } from './../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  pagedata:any = [];

  constructor(private route:ActivatedRoute, private wpApi:WpApiService, private settings:appsettings) { }

  ngOnInit(){
    // this.route.paramMap.subscribe( prams =>{
        
    //     this.wpApi.getPageSlug("start").subscribe(Response => {
    //       this.pagedata= Response
    //       this.settings.loader= false;
    //     });
    // })
    let pageslug= "start";
    if (!localStorage.getItem(pageslug)) {        
      this.wpApi.getPageSlug(pageslug).subscribe(Response =>{
        this.pagedata =Response;        
        localStorage.setItem(pageslug, JSON.stringify(Response));
        this.settings.loader= false;
        return true;
      });
    }else{
      let testobj= JSON.parse(localStorage.getItem(pageslug))
      this.pagedata =testobj 
      setInterval(() => {
        this.settings.loader= false;
        
      }, 500);
    };
  } 
   ngOnDestroy(){
     this.settings.loader= true;
   }
}
