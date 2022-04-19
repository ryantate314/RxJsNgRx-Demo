import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/common/models/alert.model';
import { ProfileService } from 'src/app/common/profile.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  public alerts: Alert[] | null = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getAlerts()
      .subscribe((alerts) => {
        this.alerts = alerts;
      });
  }

  public markRead(alert: Alert) {
    alert.IsRead = true;
    this.profileService.markAlertRead(alert.Id)
      .subscribe();
  }

}
