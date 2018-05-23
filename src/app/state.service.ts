import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rule } from './rule';
import { RULES } from './mock-rules';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { State } from './State';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateUrl = 'http://localhost:8080/get-state';
  private postRulesUrl = 'http://localhost:8080/add-rules';


  getState(): Observable<string> {
    return this.http.get<string>(this.stateUrl);
  }

  postRules(rules) {
    this.http.post(this.postRulesUrl, rules);
  }

  constructor(private http: HttpClient) { }
}
