import { Component, Input } from '@angular/core';
import { ProfileEditModalService } from '../applicant-profile-edit-modal/applicant-profile-edit-modal.service';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css']
})
export class AvatarCardComponent {
  @Input() avatar: any;

  constructor(private profileEditModalService: ProfileEditModalService) {}

  openEditModal(): void {
    this.profileEditModalService.openModal(this.avatar);
  }
}
