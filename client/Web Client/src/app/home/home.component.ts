import {Component, Inject, OnInit} from '@angular/core';
import { HomeService } from './home.service';
import { HomePage } from './HomePage';

@Component({
  selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homePage:HomePage;

  constructor(private _homeService: HomeService){}
  ngOnInit() {
    var self = this;
    this.homePage = new HomePage();

    this._homeService.getBannerData().subscribe(data => {
      this.homePage = data[0];
      console.log(this.homePage.banner.heading);
      console.log(this.homePage.banner.subHeading);
    });
}
}
