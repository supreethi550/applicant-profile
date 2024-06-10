import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class AvatarListComponent implements OnInit {
  avatars: any[] = [];
  isOpenEditModal: boolean = false;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicantService
      .getUserDetails()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.avatars = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          avatar: `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`,
        }));
      });
  }

  updateSkills(index: number, skills: string[]): void {
    this.avatars[index].skills = skills;
  }
}
