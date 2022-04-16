import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { CandServService } from './cand-serv.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display:string='none';
  public ss!:number;
  public es!:number;
  public searchName!:string;
  public salary!:number;
  public doj!:Date;
  public can:Contact[]=[];
  public first_name!:string;
  public last_name!:string;
  public phone!:string;
  public _id!:string;
  public first_name1!:string;
  public last_name1!:string;
  public phone1!:string;
  public loader:boolean=false;
  constructor(private cs:CandServService,private dialog: MatDialog){}
ngOnInit(){
  this.getContact();
}
getContact()
{debugger;
  this.loader=false;
  this.cs.getContacts().subscribe(
    (response:any)=>{
      debugger;
      this.can=response;
      
    }
  );
  
}
addContact(){
  debugger;
  let ob={
    first_name:this.first_name,
    last_name:this.last_name,
    phone:this.phone,
    salary:this.salary,
    doj:this.doj
  }
  this.loader=true;
  this.cs.addContact(ob).subscribe(
  (response:any)=>{
    debugger;    
    setTimeout(()=> this.getContact(), 2000); 

  }
  
    )
}

deleteContact(id:string){
  this.cs.deleteContact(id).subscribe(
    (reponse:any)=>{
      debugger;
      this.getContact();
    })
}

editContact(c:Contact){
  this._id=c._id;
   this.first_name1=c.first_name;
  this.last_name1=c.last_name;
  this.phone1=c.phone;
  this.display='block';
}

saveDtls(){
  debugger;
  let ob={
    _id:this._id,
    first_name:this.first_name1,
    last_name:this.last_name1,
    phone:this.phone1
    
  }
  this.cs.saveDtls(ob).subscribe(
    (response:any)=>{
      debugger;
      this.display='none';
      this.getContact();

    })}



closeModalDialog(){
this.display='none';
}

searchNameFunc()
{
  debugger;
this.cs.searchNameFunc(this.searchName).subscribe(
(response)=>{
  this.can=[];
  this.can.push(response);
  console.log(this.can);
});
}

searchSalaryWise(){
  debugger;
  let ob={
    ss:this.ss,
    es:this.es
  }

 this.cs.searchSalaryWise(ob).subscribe(
   (data:any)=>{
     debugger;
     this.can=[];
     this.can.push(data);
   }
 )


}

}
