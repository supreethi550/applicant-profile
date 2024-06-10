import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProfileEditModalService } from './applicant-profile-edit-modal.service';

interface Skill {
  name: string;
  rating?: number;
  action: 'apply' | 'edit' | 'update';
}

@Component({
  selector: 'app-applicant-profile-edit-modal',
  templateUrl: './applicant-profile-edit-modal.component.html',
  styleUrls: ['./applicant-profile-edit-modal.component.css'],
})
export class ProfileEditModalComponent implements OnInit, OnDestroy {
  avatar: any;
  skillsForm: FormGroup;
  subscription: Subscription;
  searchType: string = 'skill';
  searchText: string = '';
  formSubmitted: boolean = false;
  isFilteredSearch: boolean = false;
  popoverIndex: number | null = null;
  nonFilteredSkills: Skill[];

  constructor(
    private fb: FormBuilder,
    private profileEditModalService: ProfileEditModalService
  ) {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([]),
    });

    this.subscription = this.profileEditModalService.openModal$.subscribe(
      (avatar) => {
        this.avatar = avatar;
        this.searchText = '';
        this.setSkills(avatar.skills || []);
        this.openModal();
      }
    );
  }

  ngOnInit(): void {}

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addSkill(): void {
    this.formSubmitted = true;
    const newSkill = this.skillsForm.get('skills') as FormArray;
    if (newSkill.valid) {
      this.addSkillToForm(newSkill);
      this.formSubmitted = false;
    }
  }

  addSkillToForm(skill: any): void {
    const skillGroup = this.fb.group({
      name: [skill.value.name, Validators.required],
      rating: [
        skill.value.rating,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
      action: ['apply'],
    });
    this.skills.push(skillGroup);
  }

  updateSkill(index: number): void {
    const skill = this.skills.at(index) as FormGroup;
    if (skill.valid) {
      if (skill.value.action === 'apply') {
        skill.patchValue({ action: 'edit' });
      } else if (skill.value.action === 'edit') {
        skill.patchValue({ action: 'update' });
      } else if (skill.value.action === 'update') {
        skill.patchValue({ action: 'edit' });
      }
    } else {
      skill.markAllAsTouched();
      this.formSubmitted = true;
    }
  }

  deleteSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onApply(): void {
    if (this.skillsForm.valid) {
      if (!this.isFilteredSearch) {
        this.avatar.skills = this.skills.controls.map(
          (control) => control.value
        );
      }
      this.isFilteredSearch = false;
      this.closeModal();
    } else {
      this.skillsForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.isFilteredSearch = false;
    this.closeModal();
  }

  openModal(): void {
    const modal = document.getElementById('profileEditModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('profileEditModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  setSkills(skills: Skill[]): void {
    const skillsArray: FormArray = this.skillsForm.get('skills') as FormArray;
    skillsArray.clear();
    skills.forEach((skill) => {
      skillsArray.push(
        this.fb.group({
          name: [
            skill.name,
            [
              Validators.required,
              Validators.pattern('[a-zA-Z0-9s ]{2,}'),
              Validators.minLength(2),
              Validators.maxLength(50),
            ],
          ],
          rating: [
            skill.rating,
            [
              Validators.required,
              Validators.pattern('^[1-5]{1}'),
              Validators.min(1),
              Validators.max(5),
            ],
          ],
          action: [skill.action === 'apply' ? 'edit' : skill.action],
        })
      );
    });
    this.nonFilteredSkills = this.avatar.skills;
    // this.nonFilteredSkills.controls = this.skills.controls;
  }

  getFilteredSkills(): void {
    this.isFilteredSearch = true;

    if (this.searchText) {

      if (this.searchType === 'skill') {
        this.skills.controls = this.skills.controls.filter((control) => {
          const name: string = control.value.name || '';
          return name.includes(this.searchText);
        }) as FormGroup[];
      } else {
        const rating: number = parseInt(this.searchText, 10);
        this.skills.controls = this.skills.controls.filter((control) => {
          return control.value.rating === rating;
        }) as FormGroup[];
      }
    } else {
      this.setSkills(this.nonFilteredSkills || []);
    }
  }

  getSkillErrorMessages(index: number, field: string): string {
    const skill: FormGroup = this.skills.at(index) as FormGroup;

    if (skill.get(field)?.hasError('required')) {
      return 'This field is required';
    } else if (
      skill.get(field)?.hasError('min') ||
      skill.get(field)?.hasError('max')
    ) {
      return 'Rating must be between 1 and 5';
    } else if (
      skill.get(field)?.hasError('pattern') ||
      skill.get(field)?.hasError('minlengtn') ||
      skill.get(field)?.hasError('maxlength')
    ) {
      return 'Please enter valid values';
    }
    return '';
  }

  onPopoverAction(action: string, index: number): void {
    switch (action) {
      case 'apply':
      case 'update':
        this.updateSkill(index);
        break;
      case 'edit':
        this.updateSkill(index);
        break;
      case 'remove':
        this.deleteSkill(index);
        break;
    }
    this.popoverIndex = null;
  }
}
