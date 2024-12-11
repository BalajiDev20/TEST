import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSeriveService } from './app-serive.service'; 
import { interval, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

// import { error } from 'console';
// import {subscribe} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public HttpClient: HttpClient,
    public AppSeriveService:AppSeriveService
  )
   { }

  title = 'practice';
  emplyeeArray = []
   Array = [];

  ngOnInit() {

                // Using Observables


    // this.HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(data=> console.log(data));

                 // Using Promise


  //   const emp = new Promise((resolve, reject) => {

  //      fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((res) => (res.json()))
  //       .then( data =>{
  //         this.Array = data;
  //         if(this.Array.length > 0){
  //           resolve(this.Array)
  //         }
  //         else{
  //           reject('No Array')
  //         }
  //       })
  //       // .catch((error)=>console.log(error))
  // })

  // emp.then((message)=>{
  //   console.log(message)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })



          // Using Servive + Observable

  // this.AppSeriveService.getEmp()
  // .subscribe((data)=>{ console.log(data)});

          // Inbuild Observable

  // interval(1000).subscribe(count => console.log(count))     

  let CustomObservable = Observable.create(observer=>{
    let count = 0;
    setInterval(()=>{
      observer.next(count);
      if(count > 3){
        observer.error('Exit')
      }
      if(count > 2){
        observer.complete()
      }
      count ++;
    },1000)
  })

  CustomObservable.pipe(map(data=>{ return 'count is' + data})).subscribe(data => {
    console.log(data)
  }, error=>{console.log(error)},
()=>{console.log('complete')})
}
}