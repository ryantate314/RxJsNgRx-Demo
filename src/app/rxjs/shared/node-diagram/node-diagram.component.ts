import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NodeSet } from '../../models/nodeset.model';

@Component({
  selector: 'app-node-diagram',
  templateUrl: './node-diagram.component.html',
  styleUrls: ['./node-diagram.component.scss']
})
export class NodeDiagramComponent implements OnInit, OnChanges {

  @Input()
  nodeSet: NodeSet | undefined;

  readonly colors: string[] = [
    "green",
    "blue",
    "teal"
  ];

  circleRadius = 7;
  circlePadding = 3;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
