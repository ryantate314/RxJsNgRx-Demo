import { createAction, props } from '@ngrx/store';
import { Alert } from 'src/app/common/models/alert.model';

export const LoadAlerts = createAction("LoadAlerts");
export const LoadAlertsSuccess = createAction("LoadAlertsSuccess", props<{ alerts: Alert[] }>());
export const AlertRead = createAction("AlertRead", props<{ id: number }>());