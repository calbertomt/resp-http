import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResResponse, Users } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  cargarUsuarios() {
    const url = 'https://reqres.in/api/users';

    return this.http.get<ReqResResponse>(url);
  }
}
