import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NeworderPage } from '../neworder/neworder';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todoList:any[]=[];
  temp:any={category:"",title:"", description:""};
 
  constructor(public navCtrl: NavController,public storage:Storage) {
    this.storage.get('todoDetails').then((val)=>{
      this.todoList=val;
    });

  }
  ngOnInit(){
    this.storage.get('todoDetails').then((val)=>{
      this.todoList=val;
    });

  }
  ionViewWillEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todoList=val;
    });
  }
  ionViewDidEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todoList=val;
    });
  }
  gotoNewOrder(){
    this.navCtrl.push(NeworderPage);
  }

  removeItem(todo){
    let index = this.todoList.indexOf(todo);
    if(index>-1){
      this.todoList.splice(index,1);
      this.storage.set('todoDetails',this.todoList);

    }
  }
}
