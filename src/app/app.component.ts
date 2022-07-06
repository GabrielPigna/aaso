import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { lista} from './lista';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  list: lista[]=[];
  nuovaList : string ;

  ngOnInit(){

  }


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

 





}
