import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {
  // private baseUrl = 'http://localhost:8080/api/User';

  constructor(private http: HttpClient) { }

  getRegistration(user : Object): Observable<Object> {
    return this.http.post('http://localhost:8080/api/User/create', user);

  }

  public getAllUsers(){
    return this.http.get("http://localhost:8080/api/User/getAllUsers");

  }

  public deleteUser(id: string): Observable<any>{
    return this.http.delete("http://localhost:8080/api/User/delete/" +id, { responseType: 'text' });
    }

  public findByEmail(email){
    return this.http.get("http://localhost:8080/api/User/findUser/" +email);
  }

  // public updateUser(id:string, body: any): Observable<any>{
  //   return this.http.put("http://localhost:8080/api/User/update/" +id, body);
  // }

}
