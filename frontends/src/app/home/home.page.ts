import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  monuments : any
  monuments2 : any
  selectedVille : any
  idval : any
  constructor(public http: HttpClient,private router:Router) {}
  ngOnInit(): void{
    const user = localStorage.getItem('User');
    // console.log(user);
    if (user == null) {
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }else{
      this.http.get('http://127.0.0.1:5000/monuments').subscribe(
      res => {
        this.monuments = res;
        this.monuments2 = res;
      }, error => {
        console.log(error)
      })
    }

  }
  setVille(){ 
    if(this.selectedVille=="all")  {
      this.monuments =this.monuments2;
    }else{
      this.monuments =this.monuments2;
      this.monuments = this.monuments.filter(monument =>{
      return monument.ville == this.selectedVille
    })
    }
      
  }
  showDetail(id) {
    this.router.navigate(['detail/'+id])
  }
}
