import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/common/models/profile.model';

export const LoadProfile = createAction("LoadProfile");
export const LoadProfileSuccess = createAction("LoadProfileSucess", props<Profile>());
export const UpdateProfile = createAction("UpdateProfile", props<Profile>());
export const UpdateProfileSuccess = createAction("UpdateProfileSuccess", props<Profile>());