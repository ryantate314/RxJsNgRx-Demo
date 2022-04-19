import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/common/models/profile.model';
import { ProfileService } from 'src/app/common/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile | null = null;
  isUpdated: boolean = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile;
    })
  }

  onSave(): void {
    this.profileService.updateProfile(this.profile!).subscribe(() => {
      this.isUpdated = true;
    });
  }

}
