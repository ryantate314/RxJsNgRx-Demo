import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Alert } from 'src/app/common/models/alert.model';
import { ProfileService } from 'src/app/common/profile.service';
import { Store } from '@ngrx/store';
import { selectAlerts, selectAlertsLoading } from '../store/reducers/alert.reducer';
import { AlertRead, LoadAlerts } from '../store/actions/alert.actions';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  public alerts$: Observable<Alert[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.alerts$ = store.select(selectAlerts).pipe(
      filter((alerts) => alerts !== null),
      map((alerts) => alerts!)
    );

    this.loading$ = store.select(selectAlertsLoading);
  }

  ngOnInit(): void {
  }

  public markRead(alert: Alert) {
    this.store.dispatch(AlertRead({ id: alert.Id }));
  }

}
