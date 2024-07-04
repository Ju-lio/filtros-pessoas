import { OnInit, Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'filtro-pessoas';
  usersList: IUser[] = []; 
  usersListFiltered: IUser[] = []; 
  userSelected: IUser = {} as IUser;
  temUsuarioSelecionado: boolean = false;
  filterOptions: IFilterOptions = {} as IFilterOptions;

  ngOnInit() {
    setTimeout(() => {
      // Pegando lista do servidor
      this.usersList = UsersList;

      // Trazendo tudo da lista
      this.usersListFiltered = this.usersList;
    },1)
  };

  getList(): IUser[] {
    console.log(this.usersList)
    return this.usersList;
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

  filterUsersListByName(usersList: IUser[], filterName: string | undefined): IUser[] {
    if (!filterName) {
      return usersList;
    }
    
    return usersList.filter((user) => user.nome.includes(filterName));
  }

  
  filterUsersListByStartDate(usersList: IUser[], filterStartDate: string | undefined): IUser[] {
    if (!filterStartDate) {
      return usersList;
    }
    
    return usersList.filter((user) => user.dataCadastro >= filterStartDate);
  }  
  filterUsersListByEndDate(usersList: IUser[], filterEndDate: string | undefined): IUser[] {
    if (!filterEndDate) {
      return usersList;
    }
    
    return usersList.filter((user) => user.dataCadastro <= filterEndDate);
  }
  filterUsersListByStatus(usersList: IUser[], filterStatus: boolean | undefined): IUser[] {
    if (filterStatus === undefined || filterStatus === null) {
      return usersList;
    }
    return usersList.filter((user) => user.ativo === filterStatus);
  }


  filterList(usersList: IUser[], filterOptions: IFilterOptions): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(usersList, filterOptions.name);
    // filteredList = this.filterUsersListByStartDate(usersList, filterOptions.startDate);
    // filteredList = this.filterUsersListByEndDate(usersList, filterOptions.endDate);
    console.log('tudo bawn veinho?')
    console.log( filterOptions.status)
    filteredList = this.filterUsersListByStatus(usersList, filterOptions.status);

    return filteredList;
  }

  onFilterOptions(filterOptions: IFilterOptions) {
    this.filterOptions = filterOptions;
  }
}
