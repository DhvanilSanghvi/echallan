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
    /* REPLACE CONFIG DETAILS BELOW WITH YOURS */
    const firebaseConfig = {
      apiKey: "AIzaSyAZpi9TyKItUO3uWrMRvChaeMFDpPvSVZg",
      authDomain: "e-challan-system-ac786.firebaseapp.com",
      databaseURL: "https://e-challan-system-ac786.firebaseio.com",
      projectId: "e-challan-system-ac786",
      storageBucket: "e-challan-system-ac786.appspot.com",
      messagingSenderId: "545824128538",
      appId: "1:545824128538:web:231488866ae81b8d"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
 } 
ngOnInit() {
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
}

onSubmit(formData) {
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = formData.phone_number.toString();

  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then((confirmationResult) => {
      this.sent = true;
      const verification = prompt('Enter verification code');
      if (verification != null) {
        console.log(verification);
        confirmationResult.confirm(verification)
          .then((good) => {
            // all checks out
          })
          .catch((bad) => {
            // code verification was bad.
          });
      } else {
        console.log('No verification code entered');
      }
    })
    .catch((err) => {
      console.log('sms not sent', err);
    });
};

}
