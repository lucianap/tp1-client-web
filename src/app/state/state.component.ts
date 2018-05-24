import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {


  _state: string;
  errorMessage = "";
  interval: any;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getState();
    this.interval = setInterval(() => {
      this.getState();
    }, 2000);
  };

  getState(): void {
    this.stateService.getState()
      .subscribe(rules => {console.log(rules); this._state = rules});
  }

}
