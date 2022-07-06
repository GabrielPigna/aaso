import { Component, OnInit } from '@angular/core';
import { lista } from '../lista';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text:string;
  show:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  list: lista[]=[];
  nuovaList : string ;


  addTask() {
    if(this.nuovaList){
      let testo = new lista();
      testo.name = this.nuovaList;
      testo.isCompleted = true;
      this.list.push(testo);
      this.nuovaList = '';
    }else {
      alert('Per favore Aggiungi qualcosa alla Lista');
    }
    console.log(this.list);
  }

  removeTask(id: number) {
    this.list = this.list.filter((v,i) => i !== id);
  }

  showIdden() {
    this.show =!this.show;
  }
 

}
