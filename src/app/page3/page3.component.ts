import { Component, OnInit } from '@angular/core';
import { OffensesService } from '../offenses.service';
import { SendobjService } from '../sendobj.service';
import { ObjectSend} from '../objectsend';
import { OffenderService } from '../offender.service';
import { SampleTransactionService } from '../sample-transaction.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private pt: SendobjService, public serviceOffender: OffenderService, private hp: SampleTransactionService,private os: OffensesService ) {


   }
  
  obj1: ObjectSend;
  transactionId: any;

  

  addOffense(challanid) {
    this.serviceOffender.addOffender(this.obj1.offenderName,this.obj1.license);
    console.log("Offender added on blockchain");
  
    this.hp.addSampleTransaction(this.obj1.license,this.obj1.policeid).subscribe((res => {
  
    console.log(res.transactionId);
    this.os.addOffense(this.obj1.offenderName, this.obj1.license, this.obj1.emailid, this.obj1.policeid, this.obj1.offense, this.obj1.vehicleno, challanid, res.transactionId);
    console.log("Transaction added on blockchain");
   
  }));
}
   ngOnInit() {
    this.pt.currentMessage.subscribe(message => this.obj1 = message);
  }



}
