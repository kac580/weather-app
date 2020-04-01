import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getWeather(location){
    // const APPID = 'd60de1a22e28f1f3137832dfcf5a6987'  //apixu id
    //'a7ebf6dab2bb335d1840c274a28df80c';  // openweathermap id

    let url =  '/api/location/search/?query=london'
    // 'https://api.apixu.com/v1/current.json?key=d60de1a22e28f1f3137832dfcf5a6987&q='  + location ;
    // 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a7ebf6dab2bb335d1840c274a28df80c'
    return this.http.get(url)
  }
}
