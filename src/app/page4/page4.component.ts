import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public sent: boolean;
 
  constructor() {
 } 
ngOnInit() {

}

};


