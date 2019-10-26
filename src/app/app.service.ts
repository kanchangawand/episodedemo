import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
// import{Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  
  getShow():Observable<any[]>
  {
    return this.httpClient.get<any[]>
    ("http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes");
  }

  
 
  }