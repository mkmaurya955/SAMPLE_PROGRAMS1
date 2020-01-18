import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  id:string;
  employee: Employee = new Employee();
  message:any;
  submitted = false;
  employees: Observable<Employee[]>;

  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    this.emplist();
    
    // this.onSubmit();
    //this.newEmployee();
  }
  // Employee List
  emplist(){
    this.employees = this.empservice.getemplist();

  }
  //Employee Delete
  empdel(id:string){
    let resp= this.empservice.delemp(id);
    resp.subscribe(data =>{
      console.log(data);
      this.emplist();
    },
    error=>console.log(error));
  }
  //Employee Create
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save(){
    this.empservice.editemp(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    this.emplist();
  }

}
