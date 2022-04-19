import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, withLatestFrom } from 'rxjs';
import { NodeSet } from '../models/nodeset.model';

@Component({
  selector: 'app-two-inputs',
  templateUrl: './two-inputs.component.html',
  styleUrls: ['./two-inputs.component.scss']
})
export class TwoInputsComponent implements OnInit, OnDestroy {

  nodeSet = new NodeSet(2);
  timeStep: number = 0;

  aClick$ = new Subject<string>();
  bClick$ = new Subject<string>();

  destroyed$ = new Subject<void>();

  constructor() {

    this.aClick$.pipe(
      withLatestFrom(this.bClick$),
      takeUntil(this.destroyed$)
    ).subscribe((value) => {
      this.nodeSet = this.nodeSet.addOutput(value, this.timeStep);
      this.timeStep++;
    });

  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  ngOnInit(): void {
  }

  aClick() {
    this.nodeSet = this.nodeSet.addNode(0, "A", this.timeStep);
    this.timeStep++;
    this.aClick$.next("A");
  }

  bClick() {
    this.nodeSet = this.nodeSet.addNode(1, "B", this.timeStep);
    this.timeStep++;
    this.bClick$.next("B");
  }

  reset() {
    this.nodeSet = new NodeSet(2);
    this.timeStep = 0;
  }
}
