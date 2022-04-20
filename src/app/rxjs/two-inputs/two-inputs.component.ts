import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { combineLatest, merge, mergeWith, Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { NodeSet } from '../models/nodeset.model';
import { TwoInputDemoComponent } from '../shared/two-input-demo/two-input-demo.component';

@Component({
  selector: 'app-two-inputs',
  templateUrl: './two-inputs.component.html',
  styleUrls: ['./two-inputs.component.scss']
})
export class TwoInputsComponent implements OnInit, AfterViewInit {

  @ViewChildren(TwoInputDemoComponent) demos!: QueryList<TwoInputDemoComponent>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const demos = this.demos.toArray();

    const withLatestPipeDemo = demos[0];

    withLatestPipeDemo.aClick$.pipe(
        withLatestFrom(withLatestPipeDemo.bClick$)
      )
      .subscribe((value) => {
        withLatestPipeDemo.addResult(value);
      });

    const combineLatestDemo = demos[1];

    combineLatest([
      combineLatestDemo.aClick$,
      combineLatestDemo.bClick$
    ]).subscribe((value) => {
      combineLatestDemo.addResult(value);
    });

    const mergePipeDemo = demos[2];

    mergePipeDemo.aClick$.pipe(
      mergeWith(mergePipeDemo.bClick$)
    )
    .subscribe((value) => {
      mergePipeDemo.addResult(value);
    });

    const mergeDemo = demos[3];

    merge(mergeDemo.aClick$, mergeDemo.bClick$)
      .subscribe((value) => {
        mergeDemo.addResult(value);
      });
  }
  
}
