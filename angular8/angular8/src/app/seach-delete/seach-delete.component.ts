import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../userregistration.service';
import { User } from '../user';

@Component({
  selector: 'seach-delete',
  templateUrl: './seach-delete.component.html',
  styleUrls: ['./seach-delete.component.scss']
})
export class SeachDeleteComponent implements OnInit {
  users: any;
  id: string;
  email:string;
  constructor(private service: UserregistrationService) { }

  ngOnInit() {
    this.reloadData();
    // let resp=this.service.getAllUsers();
    // resp.subscribe((data)=>this.users=data);
    
  }

  reloadData() {
      let resp=this.service.getAllUsers();
      resp.subscribe((data)=>this.users=data);
   }

  // deleteUsers() {
  //   this.service.deleteUser(this.user.id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.SeachDeleteComponent.reloadData();
  //       },
  //       error => console.log(error));
  // }

  deleteUsers(id: string) {
    let resp=this.service.deleteUser(id);
      resp.subscribe(data => {
          console.log(data);
          this.reloadData();
          // let resp=this.service.getAllUsers();
          // resp.subscribe((data)=>this.users=data);
        },
        error => console.log(error));
  }

  public findEmail(){
    let resp=this.service.findByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
  }


}
