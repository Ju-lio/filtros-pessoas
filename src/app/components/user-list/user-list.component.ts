import { UsersList } from '../../data/users-list';
import { IUser } from './../../interfaces/user/user.interface';
import { Component } from '@angular/core';

const userList: IUser[] = UsersList;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  displayedColumns: string[] = ['name','date','status'];
  dataSource = userList;

  public onUserSelected(user: IUser) {

  }
}
