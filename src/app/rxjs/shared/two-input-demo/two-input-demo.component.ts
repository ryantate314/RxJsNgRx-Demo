import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NodeSet } from '../../models/nodeset.model';

@Component({
  selector: 'app-two-input-demo',
  templateUrl: './two-input-demo.component.html',
  styleUrls: ['./two-input-demo.component.scss']
})
export class TwoInputDemoComponent implements OnInit, OnDestroy {

  nodeSet = new NodeSet(2);
  timeStep: number = 0;

  aClick$ = new Subject<string>();
  aCounter = 0;
  bClick$ = new Subject<string>();
  bCounter = 0;

  private destroyed$ = new Subject<void>();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  ngOnInit(): void {
  }

  aClick() {
    const value = "A" + this.aCounter;
    this.aCounter++;

    this.nodeSet = this.nodeSet.addNode(0, value, this.timeStep);
    this.timeStep++;
    this.aClick$.next(value);
    this.aCounter++;
  }

  bClick() {
    const value = "B" + this.bCounter;
    this.bCounter++;

    this.nodeSet = this.nodeSet.addNode(1, value, this.timeStep);
    this.timeStep++;
    this.bClick$.next(value);
  }

  public addResult(value: any) {
    this.nodeSet = this.nodeSet.addOutput(value, this.timeStep);
    this.timeStep++;
  }

  reset() {
    this.nodeSet = new NodeSet(2);
    this.timeStep = 0;
    this.aCounter = 0;
    this.bCounter = 0;
  }

}
