import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data : any
  monuments :any
  image: String;
  date : any;
  today:any;
  constructor(private router:Router,public http: HttpClient,private activatedRoute : ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.paramMap.get('id')
   console.log(this.data)
  }

  ngOnInit() {
    const user = localStorage.getItem('User');
    // console.log(user);
    if (user == null) {
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }else{
      this.http.get('http://127.0.0.1:5000/monuments').subscribe(
      res => {
        this.monuments = res;
        this.monuments = this.monuments.filter(monument =>{
          return monument.id == this.data
          })
        console.log(this.monuments)
      }, error => {
        console.log(error)
      })
    }
  }
  visite(){
    this.router.navigate(['visite/'+this.data])
  }

}
