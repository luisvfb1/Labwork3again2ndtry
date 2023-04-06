import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;
const API_Key = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getNews(_url: any){
    return this.http.get(`${API_URL} / ${_url} &apiKey= ${API_Key}`);
  }

}
