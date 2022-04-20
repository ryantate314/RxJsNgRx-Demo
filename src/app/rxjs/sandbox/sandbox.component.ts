import { Component, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';
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
  private timeStep = 0;

  constructor() { }

  ngOnInit(): void {

    this.a$.pipe(
      map(x => x + ' Mapped!')
    ).subscribe((value) => {
      console.log(value);
      this.nodeSet = this.nodeSet.addOutput(value, this.timeStep);
      this.timeStep++;
    })


  }

}
