import { UsersList } from '../../data/users-list';
import { IUser } from './../../interfaces/user/user.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {

  @Output() userSelected = new EventEmitter<IUser>();  

  @Input({ required: true }) userList: IUser[] = [];

  onUserSelected(user: IUser) {
    this.userSelected.emit(user);
  }

  filtrar() {
    // this.userList = UsersList.filter(user => (user.ativo === ));
  }

  displayedColumns: string[] = ['name','date','status'];

  dataSource = UsersList;
}
