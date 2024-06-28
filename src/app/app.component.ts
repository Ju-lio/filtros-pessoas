import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filtro-pessoas';
  userList: IUser[] = []; 
  userSelected: IUser = {} as IUser;
  temUsuarioSelecionado: boolean = false;

  onUserSelected(user: IUser) {
    if (user === this.userSelected) {
      this.userSelected = {} as IUser;
      this.temUsuarioSelecionado  = false;
    } else {
      this.userSelected = user;
      this.temUsuarioSelecionado  = Boolean(user);
    }
  }

  filterOptions: IFilterOptions = {
    name: '',
    startDate: '',
    endDate: '',
    status: '',
  };

  onFilterOptions(filterOptions: IFilterOptions) {
    this.userList = this.userList.filter((user) => user.ativo === filterOptions.status);
  }
}
