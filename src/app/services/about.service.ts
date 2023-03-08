import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private API_SERVER = "http://localhost:8080/about/"
  constructor(private httpClient:HttpClient) { }
  
  public getText(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
  
  public saveAboutText(text: any):Observable<any>{
    return this.httpClient.post(this.API_SERVER, text);
  }

  public deleteAboutText(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
