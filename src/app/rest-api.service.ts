import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  base_url = 'https://ccmobuat.ucb.com.bd:8443/api/';

  constructor(public http: HttpClient) { }
}
