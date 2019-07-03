/*import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { SampleTransaction } from './org.example.mynetwork';

@Injectable({
  providedIn: 'root'
})
export class SampleTransactionService {

  private NAMESPACE = 'SampleTransaction';

  constructor(private dataService: DataService<SampleTransaction>) {
  };

public getAll(): Observable<SampleTransaction[]> {
    return this.dataService.getAll(this.NAMESPACE);
}

public getTransaction(id: any): Observable<SampleTransaction> {
  return this.dataService.getSingle(this.NAMESPACE, id);
}

public addTransaction(itemToAdd: any): Observable<SampleTransaction> {
  return this.dataService.add(this.NAMESPACE, itemToAdd);
}

public updateTransaction(id: any, itemToUpdate: any): Observable<SampleTransaction> {
  return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
}

public deleteTransaction(id: any): Observable<SampleTransaction> {
  return this.dataService.delete(this.NAMESPACE, id);
}
} 
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response } from './sample-transactionresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleTransactionService {
  

  uri = 'http://localhost:3000/api/SampleTransaction';
 
  constructor(private http: HttpClient) { }

  addSampleTransaction(License,policeid):Observable<any> {
    var $class="org.example.mynetwork.SampleTransaction";
    var ret:any;
    
    const obj = {
        $class,
        License,
        policeid
    };
    console.log(obj);

    return this.http.post(`${this.uri}/`, obj);
  /*      .subscribe(res => {
          console.log(res);
          return res;
          ret=res;
         // console.log(ret.transactionId);
        });
  }*/
}}