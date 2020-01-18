import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../userregistration.service';
import { User } from '../user';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  user: User = new User();
  message:any;
  submitted = false;
  
  constructor(private service : UserregistrationService ) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
 
  save() {
    this.service.getRegistration(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // getRegister(){
  //   let resp=this.service.getRegistration(this.user);
  //   resp.subscribe((data)=>this.message=data)
  // }
}
