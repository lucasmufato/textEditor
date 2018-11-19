import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  private styleChangesEventsSubject = new Subject();
  private wordChangesEventsSubject = new Subject();
  private replaceEventsSubject = new Subject();

  styleChangesEvents = this.styleChangesEventsSubject.asObservable();
  wordChangesEvents = this.wordChangesEventsSubject.asObservable();
  replaceEvents = this.replaceEventsSubject.asObservable();

  announceStyleChange(styles){
    this.styleChangesEventsSubject.next(styles);
  }

  announceWordChange(word){
    this.wordChangesEventsSubject.next(word);
  }

  announceReplace(word, synonim){
    this.replaceEventsSubject.next({word: word, synonim: synonim});
  }

  constructor() { }


}
