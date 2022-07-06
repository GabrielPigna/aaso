import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private router: Router , 
    private http: HttpClient , 
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    }


    onLogin(form: NgForm) {
       console.log(form);

       const url =
       "https://angular-demo-97-default-rtdb.firebaseio.com/users.json";

       this.http.get(url , { 
        params: new HttpParams()
         .set('orderBy', '"email"') 
         .set('equalTo', ` "${form.value.email}" `)
        })
        .subscribe(user => {
          if(Object.keys(user)?.length > 0) {
            this.router.navigate(["/"])
            console.log(user);
          }
          form.reset();
       })


   //    this.http.get("https://angular-demo-97-default-rtdb.firebaseio.com/users.json")
   //    .subscribe(users => {
   //    console.log(users);
   //   })
    }
  
}


