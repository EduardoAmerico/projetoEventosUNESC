import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // banner$:Observable<Banner[]>;
  banners: Banner[];

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.list().subscribe(dados => this.banners = dados);
  }
  startBanner(){

   

  }

}
