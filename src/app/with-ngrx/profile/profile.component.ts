import { Component, OnDestroy, OnInit } from '@angular/core';
import { Profile } from 'src/app/common/models/profile.model';
import { Store } from '@ngrx/store';
import { UpdateProfile, UpdateProfileSuccess } from '../store/actions/profile.actions';
import { BehaviorSubject, filter, map, Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { selectProfile } from '../store/reducers/profile.reducer';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile: Profile | null = null;

  isUpdated$: Observable<boolean>;

  private destroyed$ = new Subject<void>();

  constructor(private store: Store, private actions$: Actions) {
    this.isUpdated$ = this.actions$.pipe(
      ofType(UpdateProfileSuccess),
      map(() => true)
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  ngOnInit(): void {
    this.store.select(selectProfile)
      .pipe(
        filter(profile => profile !== null),
        map(profile => profile!),
        takeUntil(this.destroyed$)
      )
      .subscribe((profile) => {
        this.profile = {
          ...profile
        };
      });
  }

  onSave(): void {
    this.store.dispatch(UpdateProfile(this.profile!));
  }

}
