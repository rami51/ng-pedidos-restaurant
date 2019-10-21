import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {
  permisos : Array<Object>;

  constructor() { }

  ngOnInit() {
    this.permisos = [{codigo: "PERMISO1"},
    {codigo: "PERMISO2"},
    {codigo: "PERMISO3"}];
  }

  addNew() {
    this.permisos.push({codigo: "permisoAgregado"})
  }

}
