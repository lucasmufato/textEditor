import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Synonim} from '../model/synonim';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SynonimsFinderService {

  url = 'https://api.datamuse.com/words';
  constructor(private http: HttpClient) { }


  findSynonims(originalWord: any): Observable<Synonim[]> {
    const params = new HttpParams()
      .set('ml', originalWord);
    return this.http.get<Synonim[]>(this.url, {params});
  }
}
