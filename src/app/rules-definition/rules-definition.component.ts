import { Component, OnInit } from '@angular/core';
import {StateService} from "../state.service";

@Component({
  selector: 'app-rules-definition',
  templateUrl: './rules-definition.component.html',
  styleUrls: ['./rules-definition.component.css']
})
export class RulesDefinitionComponent implements OnInit {

  _ruleCounter = '[["define-counter","spam-count",[],["current","spam"]]]';
  _ruleSignal = '[["define-signal",{"spam-fraction":["\\/",["counter-value","spam-count",[]],["counter-value","email-count",[]]]},true]]';


  constructor(private stateService: StateService) { }

  public addRuleCounter() {
    console.log(this._ruleCounter);
    this.stateService.postRules(this._ruleCounter);
  }

  public addRuleSignal() {
    console.log(this._ruleSignal);
    this.stateService.postRules(this._ruleSignal);
  }

  ngOnInit() {
  }

}
