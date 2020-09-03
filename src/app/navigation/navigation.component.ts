import { WpApiService } from './../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menylist:any = [];

  constructor(private wpApi:WpApiService) { }

  ngOnInit(){
    this.wpApi.getMeny("").subscribe(Response => this.menylist= Response);
  }

}
