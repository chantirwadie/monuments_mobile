import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string
  password: string
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient,public router: Router){ }

  ngOnInit() {
  }
  login() {

    let credentials = {
      email : this.email,
      password : this.password
    }
    console.log(credentials);
    this.http.post('http://localhost:5000/api/v1/user/login', credentials).subscribe(
      res => {
        localStorage.setItem('User', JSON.stringify(res))
        // const data = JSON.stringify(res)
        // console.log(data)
        this.router.navigateByUrl('/home', { replaceUrl: true })

      }, error => {
        console.log(error)
      })


  }

}
