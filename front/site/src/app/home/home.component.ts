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
  banners2: Banner[];
  idCategoria: any;
  idInput: any;

  constructor(private homeService:HomeService) { }

  formatDate(dateStr){
      const [day, month, year] = dateStr.split("-")
      return new Date(year, month - 1, day)
    
  } 

  ngOnInit() {
    // this.homeService.list().subscribe(dados => this.banners = dados);
    this.idCategoria=0;
    this.idInput = '';
    this.onSearch();
    this.startBanner();
    
  }

  onSearch(){
    this.homeService.search( this.idInput ,this.idCategoria).subscribe(dados => this.banners = dados);
    
  }

  startBanner(){
    this.homeService.list().subscribe(dados => this.banners2 = dados); 

  }

  onLoadBanner(pbanner){
    var currentDate = new Date()
    if (pbanner.dataInicial > currentDate){
      return 'Em breve'
    }else if(pbanner.dataFinal < currentDate){
      return 'Finalizado'
    }else {
      return 'Em andamento'
    }
  }

}
