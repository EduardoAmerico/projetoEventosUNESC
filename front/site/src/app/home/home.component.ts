import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private banners;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.banners = this.homeService.getBanners();
  }

}
