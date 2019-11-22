import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';
import { Observable, empty } from 'rxjs';
import { Categ } from './categ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // banner$:Observable<Banner[]>;
  banners: Banner[];
  idCategoria: any;

  constructor(private homeService:HomeService) { }

  formatDate(dateStr){
      const [day, month, year] = dateStr.split("-")
      return new Date(year, month - 1, day)
    
  }
  

  ngOnInit() {
    this.homeService.list().subscribe(dados => this.banners = dados);
    // this.homeService.categ().subscribe(dados => this.categs = dados);

    console.log(this.banners)
    console.log(this.formatDate("10-01-2019"))
    console.log(this.formatDate("20-01-2019"))
  }
  startBanner(){

   

  }

}
