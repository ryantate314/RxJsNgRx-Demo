import { Component, OnInit } from '@angular/core';
import { Profile } from '../common/models/profile.model';
import { ProfileService } from '../common/profile.service';

@Component({
  selector: 'app-without-ngrx',
  templateUrl: './without-ngrx.component.html',
  styleUrls: ['./without-ngrx.component.scss']
})
export class WithoutNgrxComponent implements OnInit {

  public profile: Profile | null = null;
  public numAlerts: number = 0;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile()
      .subscribe((profile) => {
        this.profile = profile;
      });

    this.profileService.getAlerts()
      .subscribe((alerts) => {
        this.numAlerts = alerts.length;
      });
  }

}
