import { Injectable } from '@angular/core';
import { ObjectSend } from './objectsend';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendobjService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: ObjectSend){
    this.messageSource.next(message);
  }


}
