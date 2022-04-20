import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProfileService } from 'src/app/common/profile.service';
import { AlertRead, LoadAlerts, LoadAlertsSuccess } from '../actions/alert.actions';
import { LoadProfile, LoadProfileSuccess } from '../actions/profile.actions';
 
@Injectable()
export class AlertEffects {
 
  loadAlerts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadAlerts),
    switchMap(() => this.profileService.getAlerts()
      .pipe(
        map(alerts => LoadAlertsSuccess({ alerts: alerts })),
        catchError(() => EMPTY)
      ))
    )
  );

  markRead$ = createEffect(() => this.actions$.pipe(
    ofType(AlertRead),
    switchMap((action) => this.profileService.markAlertRead(action.id))
  ), { dispatch: false} );
 
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}