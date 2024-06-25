import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filtro-pessoas';

  userSelected: IUser = {} as IUser;
  temUsuarioSelecionado: boolean = false;

  onUserSelected(user: IUser) {
    if (user === this.userSelected) {
      this.userSelected = {} as IUser;
      this.temUsuarioSelecionado  = false;
    } else {
      this.userSelected = user;
      this.temUsuarioSelecionado  = Boolean(user.nome);
    }
  }
}
