import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { OffensesService } from '../offenses.service';
import Offense from '../Offense';
import { DatapoliceidService } from '../datapoliceid.service';
import { SendobjService } from '../sendobj.service';
import { ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SelectAutocompleteComponent, SelectAutocompleteModule } from 'mat-select-autocomplete';

function emailDomainValidator(control: FormControl){
  let email=control.value ;
  if (email && email.indexOf("@") != -1) {
    let[_,domain]=email.split("@");
    if(domain=="codecraft.tv"){
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }

  }
}

@Component({ 
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})


export class Page1Component implements OnInit {
  

  angForm: FormGroup;

 

  constructor(private fb: FormBuilder, private data: DatapoliceidService, private pt: SendobjService) {

   this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
       offenderName: ['', Validators.required ],
       license: ['', [Validators.required, Validators.pattern('^[A-Z]+[A-Z]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]'), Validators.maxLength(15)]],
       email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com+$')] ],
       policeid: ['', [Validators.required,Validators.maxLength(2)]],
       vehicleno:['', [Validators.required, Validators.pattern('^[A-Z]+[A-Z]+[0-9]+[0-9]+[A-Z]+[A-Z]+[0-9]+[0-9]+[0-9]+[0-9]'), Validators.maxLength(10)]]
     });
   }

   @ViewChild(SelectAutocompleteComponent, null) multiSelect: SelectAutocompleteComponent;

   options = [
     {
       display: 'Driving without Valid License (₹ 5000)',
       value: '1'
     }, {
       display: 'Not carrying required documents (₹ 500)',
       value: '2'
     }, {
       display: 'Driving without wearing a helmet (₹ 100)',
       value: '3'
     }, {
       display: 'Driving without fastening seat belt (₹ 100)',
       value: '4'
     }, {
       display: 'Driving over the speed limit(₹ 1000)',
       value: '5'
     }, {
       display: 'Driving against one way(₹ 100)',
       value: '6'
     }, {
       display: 'Not slowing down at an intersection(₹ 100)',
       value: '7'
     }, {
       display: 'Driving on footpath(₹ 100)',
       value: '8'
     }, {
       display: 'Violating a Stop Sign(₹ 100)',
       value: '9'
     }, {
       display: 'Displaying APPLIED FOR Numberplate( ₹4500)',
       value: '10'
     }, {
       display: 'Improper usage of horn(₹ 100)',
       value: '11'
     }, {
       display: 'Disobeying a Traffic Police Officer(₹ 100)',
       value: '12'
     }, {
       display: 'Signal Jumping(₹ 100)',
       value: '13'
     }, {
       display: 'Overtaking Hazardously(₹ 100)',
       value: '14'
     }, {
       display: 'Overtaking from the wrong side (₹ 100)',
       value: '15'
     }, {
       display: 'Driving under the influence of alcohol(₹ 2000)',
       value: '16'
     }, {
       display: 'Using mobile phone phile driving(₹ 1000)',
       value: '17'
     }, {
       display: 'Towed Vehicle(₹ 200)',
       value: '18'
     }, {
       display: 'Vehicles with tinted/dark windows(₹ 200)',
       value: '19'
     }
   ];
   selectedOptions = [];

   selected = this.selectedOptions;
   showError = false;
   errorMessage = '';
 
   onToggleDropdown() {
     this.multiSelect.toggleDropdown();
   }
 
   getSelectedOptions(selected) {
     this.selected = selected;
   }
 
   onResetSelection() {
     this.selectedOptions = [];
   }

   offense= this.selected;
  

  

  transactionres: any;

 
   assignID(policeid) {
     this.data.changeMessage(policeid);
     
   }

   sendobject(offenderName, license, emailid, policeid,offense,vehicleno){
     
    var obj1={
      offenderName,
      license,
      emailid,
      policeid,
      offense,
      vehicleno
    };
    console.log(obj1);  
    console.log('Object sent');
    this.pt.changeMessage(obj1);

 }

  ngOnInit() {
  }
  

   
}

