import { Component, OnInit } from '@angular/core';
import { OffensesService } from '../offenses.service';
import Offense from '../Offense';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  constructor( private os : OffensesService) { }

  obj: any={};
  str: any;
  str1: any;

  getOffense(challanid) {

    console.log("getting ..");
      this.os.getOffense(challanid).subscribe(res => {
        this.obj = res;
        console.log(this.obj.transactionId);
        var splitted=this.obj.transactionId.slice(0,32);
        var splitted1=this.obj.transactionId.slice(32,66);
        console.log(splitted);
        this.str=splitted;
        this.str1=splitted1;
    });
   
  }


  ngOnInit() { 
  }

}
 