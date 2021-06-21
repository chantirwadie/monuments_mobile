import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  lastName: string;
  firstName: string;
  email: string;
  password: String;
  image: String;
  phone: String;


  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  register() {
    let user = {
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      password: this.email,
      image: this.image,
      phone: this.phone
    }
    this.http.post('http://localhost:5000/api/v1/user/register', user).subscribe(
      res => {
        console.log(user);
      }, error => {
        console.log(error);
      })
  }


}
