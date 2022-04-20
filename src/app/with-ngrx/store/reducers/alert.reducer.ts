import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { Alert } from 'src/app/common/models/alert.model';
import { AlertRead, LoadAlerts, LoadAlertsSuccess } from '../actions/alert.actions';

export interface AlertState
{
  alerts: Alert[] | null,
  isLoading: boolean
}

const initialState: AlertState = {
  alerts: null,
  isLoading: false
};

export const alertsReducer = createReducer(
  initialState,
  on(LoadAlerts, (state) => ({ ...state, isLoading: true })),
  on(LoadAlertsSuccess, (state, { alerts }) => ({
    ...state,
    alerts: alerts,
    isLoading: false}
  )),
  on(AlertRead, (state, { id }) => ({
    ...state,
    alerts: state.alerts!.map(x => x.Id !== id
      ? x
      : { ...x, IsRead: true })
  }))
);

const selectAlertState = createFeatureSelector<AlertState>("alerts");

export const selectAlerts = createSelector(selectAlertState, (state) => state.alerts);
export const selectAlertsLoading = createSelector(selectAlertState, (state) => state.isLoading);