import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostraMenu = new Subject<boolean>()
  constructor() { }
  login(usuario: string, senha: string) {
    if (usuario == "aluno" && senha == "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(false)
    } else {
      this.mostraMenu.next(true);
      window.location.reload();
    }
  }
  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor)
  }
  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}