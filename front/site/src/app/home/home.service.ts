import { Injectable} from '@angular/core';
import { Banner } from './banner';
import { environment } from 'src/environments/environment';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  private readonly API = `${environment.API}banner`;
  //  private readonly API = "http://localhost:3000/banner";


  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Banner[]>(this.API);
  }
}
