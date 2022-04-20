import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { Profile } from '../common/models/profile.model';
import { LoadAlerts } from './store/actions/alert.actions';
import { LoadProfile } from './store/actions/profile.actions';
import { selectAlerts } from './store/reducers/alert.reducer';
import { selectProfile } from './store/reducers/profile.reducer';

@Component({
  selector: 'app-with-ngrx',
  templateUrl: './with-ngrx.component.html',
  styleUrls: ['./with-ngrx.component.scss']
})
export class WithNgrxComponent implements OnInit {
  profile$: Observable<Profile>;
  numUnreadAlerts$: Observable<number>;

  constructor(private store: Store) {
    this.profile$ = this.store.select(selectProfile).pipe(
      filter((profile) => profile !== null),
      map((profile) => profile!)
    );

    this.numUnreadAlerts$ = this.store.select(selectAlerts).pipe(
      filter((alerts) => alerts !== null),
      map((alerts) => alerts!.filter(alert => !alert.IsRead).length)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(LoadProfile());
    this.store.dispatch(LoadAlerts());
  }

}
