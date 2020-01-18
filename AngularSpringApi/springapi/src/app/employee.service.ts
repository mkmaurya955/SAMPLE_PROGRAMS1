import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getemplist(): Observable<any>{
    return this.http.get("http://localhost:8300/api/employees/");

  }

  delemp(id: string): Observable<any>{
    return this.http.delete("http://localhost:8300/api/springemp/"+id);

  }

  editemp(employee: Object): Observable<Object>{
    return this.http.post("http://localhost:8300/api/springemp/",employee);

  }

}
