import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditModalService {
  private openModalSource = new Subject<any>();
  openModal$ = this.openModalSource.asObservable();

  openModal(avatar: any): void {
    this.openModalSource.next(avatar);
  }
}
