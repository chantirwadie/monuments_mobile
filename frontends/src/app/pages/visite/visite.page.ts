import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visite',
  templateUrl: './visite.page.html',
  styleUrls: ['./visite.page.scss'],
})
export class VisitePage implements OnInit {
  data : any
  monuments :any
  date : any;
  image:string ;
  today:any;
  data2:any;
  id_user:any;
  latitude_user:any;
  longtitude_user:any;
  constructor(private router:Router,public http: HttpClient,private activatedRoute : ActivatedRoute) { 
    this.data = this.activatedRoute.snapshot.paramMap.get('id')

  }
  
  ngOnInit() {
    const now = new Date();
    this.today = now.toISOString();
    console.log(this.today);
    const user = localStorage.getItem('User');
    this.id_user=JSON.parse(user).data.id
    console.log(JSON.parse(user).data.id)
    // console.log(user);
    if (user == null) {
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }else{
      this.http.get('http://127.0.0.1:5000/monuments').subscribe(
      res => {
        this.monuments = res
        this.monuments = this.monuments.filter(monument =>{
          return monument.id == this.data
          })
        this.data2 = this.monuments
        console.log(this.data2[0].nom)
      }, error => {
        console.log(error)
      })
    }
  }
  visite(){
    let visite = {
      date: this.today,
      nom: this.data2[0].nom,
      image: this.image,
      id_user : this.id_user,
      longtitude_user : this.data2[0].longitude,
      latitude_user : this.data2[0].latitude
    }
    console.log(visite)
    this.http.post('http://localhost:5000/add', visite).subscribe(
      res => {
        console.log(visite);
      }, error => {
        console.log(error);
      })
  }

}
