import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MenusComponent } from './menus/menus.component';
import { GuarnicionesComponent } from './guarniciones/guarniciones.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { SalsasComponent } from './salsas/salsas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PagarFacturaComponent } from './facturas/pagar-factura/pagar-factura.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: PedidosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'administracion/adicionales', component: AdicionalesComponent },
  { path: 'administracion/horarios', component: HorariosComponent },
  { path: 'administracion/menus', component: MenusComponent },
  { path: 'administracion/guarniciones', component: GuarnicionesComponent },
  { path: 'administracion/bebidas', component: BebidasComponent },
  { path: 'administracion/postres', component: PostresComponent },
  { path: 'administracion/salsas', component: SalsasComponent },
  { path: 'administracion/clientes', component: ClientesComponent },
  { path: 'administracion/empresas', component: EmpresasComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'pagar-factura', component: PagarFacturaComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'permisos', component: PermisosComponent },
  { path: 'nosotros', component: NosotrosComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
