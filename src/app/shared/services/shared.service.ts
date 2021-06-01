import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient :  HttpClient) { }

  getJsonFromAsset(url) {
    return this.httpClient.get(url+'.json');
  }
}
