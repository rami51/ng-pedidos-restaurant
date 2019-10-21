import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { PostresComponent } from './postres/postres.component';
import { MenusComponent } from './menus/menus.component';
import { SalsasComponent } from './salsas/salsas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { GuarnicionesComponent } from './guarniciones/guarniciones.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PagarFacturaComponent } from './facturas/pagar-factura/pagar-factura.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidosComponent,
    AdicionalesComponent,
    PostresComponent,
    MenusComponent,
    SalsasComponent,
    HorariosComponent,
    GuarnicionesComponent,
    BebidasComponent,
    ClientesComponent,
    EmpresasComponent,
    UsuariosComponent,
    PerfilesComponent,
    PermisosComponent,
    FacturasComponent,
    PagarFacturaComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
