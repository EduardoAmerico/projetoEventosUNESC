import { environment } from '../../environments/environment';
import { Banner } from '../home/banner';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly API = `${environment.API}banner`;

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Banner[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }
  

  create(banner){
    return this.http.post(this.API, banner).pipe(take(1));
  }

}
