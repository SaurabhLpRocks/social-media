import { User } from '@shared/typings';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public selectedUserSubject = new BehaviorSubject<User>({
    id: '',
    username: 'na',
    firstName: '',
    lastName: '',
    createdDate: '',
  });
  public selectedUser$ = this.selectedUserSubject.asObservable();
  // public get selectedUser(): User{
  //   return this.selectedUserSubject.value;
  // }
  constructor() {}
}
