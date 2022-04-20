import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Profile } from 'src/app/common/models/profile.model';
import { LoadProfile, LoadProfileSuccess, UpdateProfileSuccess } from '../actions/profile.actions';

export interface ProfileState {
  profile: Profile | null,
  isLoading: boolean
}

const initialState: ProfileState = {
  profile: null,
  isLoading: false
};

export const profileReducer = createReducer<ProfileState>(
  initialState,
  on(LoadProfile, (state) => ({
    ...state,
    isLoading: true })
  ),
  on(LoadProfileSuccess, (state, profile) => ({
    ...state,
    profile: profile,
    isLoading: false})
  ),
  on(UpdateProfileSuccess, (state, profile) => ({
    ...state,
    profile: profile
  }))
);

const selectProfileState = createFeatureSelector<ProfileState>("profile");

export const selectProfile = createSelector(selectProfileState, (state) => state.profile);
export const selectProfileLoading = createSelector(selectProfileState, (state) => state.isLoading);