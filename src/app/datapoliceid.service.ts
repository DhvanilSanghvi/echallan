import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapoliceidService {

  private messageSource = new BehaviorSubject('5');
  currentMessage = this.messageSource.asObservable();


 
  constructor() { }

  changeMessage(message: string) 
  {
    this.messageSource.next(message);
  }

  

}

