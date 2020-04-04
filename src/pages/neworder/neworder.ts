import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators,FormGroup,FormBuilder, } from '@angular/forms';
/**
 * Generated class for the NewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neworder',
  templateUrl: 'neworder.html',
})
export class NeworderPage {
  formActivity: FormGroup;
  category:any;
  title:any;
  description:any;
  addedTodo:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public formBuilder:FormBuilder) {
    this.storage=storage;
    this.formActivity=this.formBuilder.group({
      category:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeworderPage');
  }
  saveRecord(){
    if(this.formActivity.valid){
      let todoObj={ category: "",title: "",description: ""};
      todoObj.category=this.category;
      todoObj.title=this.title;
      todoObj.description=this.description;

      this.storage.get('todoDetails').then((val)=>{
        if(val){
          this.addedTodo=val;
          this.addedTodo.push(todoObj);
          this.storage.set('todoDetails',this.addedTodo);
        }else{
          this.addedTodo.push(todoObj);
          this.storage.set('todoDetails',this.addedTodo);
        }
        this.category="";
        this.title="";
        this.description="";
        this.navCtrl.pop();
      });
    }
  }
}
