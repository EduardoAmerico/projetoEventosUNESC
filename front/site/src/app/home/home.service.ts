import { Injectable} from '@angular/core';
import { Banner } from './banner';
import { environment } from 'src/environments/environment';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Categ } from './categ';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  private readonly API = `${environment.API}banner?_sort=dataInicial&_order=desc`;
  private readonly API2 = `${environment.API}categoria`;
  private readonly API3 = `${environment.API}banner?_sort=dataInicial&_order=desc&categId=`;
  private readonly API4 = `${environment.API}banner?_sort=dataInicial&_order=desc&titulo_like=`;
  //  private readonly API = "http://localhost:3000/banner";


  constructor(private http:HttpClient) { }

  list(){
    
    return this.http.get<Banner[]>(this.API);
    
  }

  search(title, index){

    return this.http.get<Banner[]>(this.API4 + title + (index > 0 ? '&categId='+index : ''));

  }
  
  categ(){
    return this.http.get<Categ[]>(this.API2);
    
  }

  categId(index){
    return this.http.get<Banner[]>(this.API3 + index);
    
  }
}
