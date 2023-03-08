import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 private API_SERVER = "http://localhost:8080/contact/"
  constructor(private httpClient:HttpClient) { }
 
  public getText():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }


  public saveContactText(text:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER, text);
  }


  public deleteContactText(id: any):Observable <any>{
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }

}

