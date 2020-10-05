import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  public usuarios: any = [];

  constructor(private usuariosServices: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosServices.cargarUsuarios()
        .subscribe(resp => {
          console.log(resp.data);
          this.usuarios = resp.data;
        });
  }

}
