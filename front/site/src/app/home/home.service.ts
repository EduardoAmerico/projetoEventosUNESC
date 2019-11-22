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
 
  private readonly API = `${environment.API}banner`;
  private readonly API2 = `${environment.API}categoria`;
  private readonly API3 = `${environment.API}banner?categId=`;
  //  private readonly API = "http://localhost:3000/banner";


  constructor(private http:HttpClient) { }

  list(){
    
    return this.http.get<Banner[]>(this.API);
    
  }
  categ(){
    return this.http.get<Categ[]>(this.API2);
    
  }
  categId(index){
    return this.http.get<Banner[]>(this.API3 + index);
    
  }
}
