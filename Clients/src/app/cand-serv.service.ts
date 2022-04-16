import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact, Contact2 } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandServService {

  constructor(private http:HttpClient) { }
  
  getContacts():Observable<Contact>{
    debugger;
    return this.http.get<Contact>(environment.url+"contacts")
  }
  addContact(newContact:any)
  {debugger;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newContact);
    return this.http.post(environment.url+'contact',body,{'headers':headers})
  }
  deleteContact(id:string){
    debugger;
    return this.http.delete(environment.url+'contact/'+id);
  }
  saveDtls(updatedContact:any){
    debugger;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(updatedContact);
    return this.http.post(environment.url+"updateContact",body,{'headers':headers})
  }
  searchNameFunc(name:string):Observable<Contact>{
    debugger;
    return this.http.get<Contact>(environment.url+'SearchData/'+name);
  }
  searchSalaryWise(ob:any){
    debugger;
    const headers={ 'content-type' : 'application/json' };
    const body=JSON.stringify(ob);
    return this.http.post<Contact>(environment.url+"searchSalaryWise",body,{'headers':headers});
  }
}
