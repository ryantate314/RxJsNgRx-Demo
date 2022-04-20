import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProfileService } from 'src/app/common/profile.service';
import { LoadProfile, LoadProfileSuccess, UpdateProfile, UpdateProfileSuccess } from '../actions/profile.actions';
 
@Injectable()
export class ProfileEffects {
 
  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(LoadProfile),
    switchMap(() => this.profileService.getProfile()
      .pipe(
        map(profile => LoadProfileSuccess(profile)),
        catchError(() => EMPTY)
      ))
    )
  );

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateProfile),
    switchMap((profile) => this.profileService.updateProfile(profile)
      .pipe(
        map((profile) => UpdateProfileSuccess(profile))
      )
    )
  ));
 
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}