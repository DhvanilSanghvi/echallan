
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffensesService {

  uri = 'http://40.79.18.3:4000/Offenses';
 
  constructor(private http: HttpClient) { }

  addOffense(offenderName, license, email, policeid, offense, vehicleno, challanid, transactionId) {
    const obj = {
      offenderName,
      license, 
      email,
      policeid,
      offense,
      vehicleno,
      challanid,
      transactionId
    };
    console.log(obj);
    this.http.post(`${this.uri}/`, obj)
        .subscribe(res => console.log('Offense added in database'));
  }

  getOffense(challanid){
    console.log("Fetching data ..");
    /*
  this.http.get(`${this.uri}/${challanid}`)
    .subscribe(res => console.log(res));
    */
  return this.http.get(`${this.uri}/${challanid}`);

   
}  
}