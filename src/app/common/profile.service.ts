import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from './models/alert.model';
import { Profile } from './models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    return this.http.get<Profile>("/profile");
  }

  public updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>("/profile", profile);
  }

  public getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>("/alerts");
  }

  public markAlertRead(id: number): Observable<void> {
    return this.http.post<void>(`/alerts/${id}/read`, null);
  }
}
