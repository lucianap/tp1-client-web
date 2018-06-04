import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateUrl = 'http://localhost:8080/get-state';
  private signalsUrl = 'http://localhost:8080/get-signals';
  private postRulesUrl = 'http://localhost:8080/add-rules';
  private dashboardsUrl = 'http://localhost:8080/get-dashboards';


  getState(id): Observable<string> {
    console.log("I am state service.");
    console.log(id);
    return this.http.get<string>(this.stateUrl  + "/" + id);
  }

  getSignals(id): Observable<string> {
    console.log("I am state signals.");
    return this.http.get<string>(this.signalsUrl + "/" + id);
  }

  getDashboardsIds(): Observable<string> {
    return this.http.get<string>(this.dashboardsUrl);
  }

  postRules(rules) {
    console.log(JSON.parse(rules));
    this.http.post(this.postRulesUrl, rules).subscribe(
      (data) => data,
      (err) => {console.log(err); alert("Error generating rule.\n" + err.message)});
  }

  constructor(private http: HttpClient) { }
}
