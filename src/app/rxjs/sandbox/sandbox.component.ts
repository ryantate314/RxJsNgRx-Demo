import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, merge, mergeWith, Observable, Subject, withLatestFrom } from 'rxjs';
import { NodeSet } from '../models/nodeset.model';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  public a$ = new Subject<string>();
  public b$ = new Subject<string>();

  public nodeSet = new NodeSet(1);
  public timeStep = 0;

  constructor() { }

  ngOnInit(): void {

    // Logical OR
    // When Either A OR B Happens
    this.a$.pipe(
        mergeWith(this.b$)
      )
      .subscribe((value) => {
        this.nodeSet = this.nodeSet.addOutput(value, this.timeStep);
        this.timeStep++;
      });

    merge(this.a$, this.b$)
      .subscribe((value) => {
        this.nodeSet = this.nodeSet.addOutput(value, this.timeStep);
        this.timeStep++;
      });

    // Logical AND
    // When A AND B Happens (not at the same time)
    // Note: B must happen first
    this.a$.pipe(
      withLatestFrom(this.b$)
    )
    .subscribe((value) => {
    });

    combineLatest([
      this.a$,
      this.b$
    ]).subscribe((value) => {});

  }

}
