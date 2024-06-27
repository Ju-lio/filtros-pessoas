import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'filtro-pessoas';
  userList: IUser[] = []; 
  userSelected: IUser = {} as IUser;
  temUsuarioSelecionado: boolean = false;
  // filterOptions: IFilterOptions = [];

  ngOnInit(): void {
    this.userList = this.processList(this.userList, this.filterOptions);
  }
  processList(userList: IUser[], filtefilterOptionsrs: IFilterOptions): IUser[] {
    return userList;
  }

  onUserSelected(user: IUser) {
    if (user === this.userSelected) {
      this.userSelected = {} as IUser;
      this.temUsuarioSelecionado  = false;
    } else {
      this.userSelected = user;
      this.temUsuarioSelecionado  = Boolean(user);
    }
  }

  onSelectedFilters(filterOptions: IFilterOptions) {
    filterOptions
  }
}
