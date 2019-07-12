/*import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Offender } from './org.example.mynetwork';


@Injectable({
  providedIn: 'root'
})

export class OffenderService {

  private NAMESPACE = 'Offender';

  constructor(private dataService: DataService<Offender>) {
  };

  public getAll(): Observable<Offender[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Offender> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addParticipant(itemToAdd: any): Observable<Offender> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<Offender> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<Offender> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffenderService { 

  uri = 'http://localhost:3000/api/Offender';
 
  constructor(private http: HttpClient) { }

  ndf="org.example.mynetwork";

  addOffender(Name, License) {
     var $class="org.example.mynetwork.Offender";
    const obj = {
     $class,
     License,
     Name
    };
    console.log(obj);
    this.http.post(`${this.uri}/`, obj)
        .subscribe(res => console.log('Done'));
  }
}