import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
    console.log(JSON.parse(rules));
    this.http.post(this.postRulesUrl, rules).subscribe();
  }

  constructor(private http: HttpClient) { }
}
