import { Component, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  public a$ = new Subject<string>();
  public b$ = new Subject<string>();

  constructor() { }

  ngOnInit(): void {

    this.a$.pipe(
      map(x => x + ' Mapped!')
    ).subscribe((value) => {
      console.log(value);
    })


  }

}
