import { Component, OnInit } from '@angular/core';
import {StateService} from "../state.service";

@Component({
  selector: 'app-rules-definition',
  templateUrl: './rules-definition.component.html',
  styleUrls: ['./rules-definition.component.css']
})
export class RulesDefinitionComponent implements OnInit {

  _rule = '';

  constructor(private stateService: StateService) { }

  addRule() {
    this.stateService.postRules(this._rule);
  }

  ngOnInit() {
  }

}
