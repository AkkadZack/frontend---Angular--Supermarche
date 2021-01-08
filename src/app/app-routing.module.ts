import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { GestUsersComponent } from './components/admin/gest-users/gest-users.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { CmdComponent } from './components/admin/cmd/cmd.component';
import { LigneCmdComponent } from './components/admin/ligne-cmd/ligne-cmd.component';
import { UpdateCmdComponent } from './components/admin/update-cmd/update-cmd.component';
import { ChefComponent } from './components/chef/chef.component';
import { CommanderComponent } from './components/chef/commander/commander.component';
import { MesCmdsComponent } from './components/chef/mes-cmds/mes-cmds.component';
import { DetailCmdComponent } from './components/chef/detail-cmd/detail-cmd.component';
import { CompteComponent } from './components/chef/compte/compte.component';
import { AcompteComponent } from './components/admin/acompte/acompte.component';
import { HomeadminComponent } from './components/admin/homeadmin/homeadmin.component';
import { ProduitListComponent } from './components/admin/produit-list/produit-list.component';
import { AddProduitComponent } from './components/admin/produit-list/add-produit/add-produit.component';
import { HomeChefComponent } from './components/chef/home-chef/home-chef.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:HomeadminComponent},
{path:'admin/G.Users',component:GestUsersComponent},
{path:'admin/G.Produits',component:ProduitListComponent},
{path:'admin/addUser',component:AddUserComponent},
{path:'admin/updateUser/:id',component:UpdateUserComponent},
{path:'admin/user',component:AcompteComponent},
{path:'chef/user',component:CompteComponent},
{path:'admin/cmds',component:CmdComponent},
{path:'admin/ligneCmd/:id',component:LigneCmdComponent},
{path:'admin/updateCmd/:id',component:UpdateCmdComponent},
{path:'chef',component:HomeChefComponent},
{path:'chef/commander',component:CommanderComponent},
{path:'chef/mesCmds',component:MesCmdsComponent},
{path:'chef/ligneCmd/:id',component:DetailCmdComponent},
{path:'admin/G.Produits/addProduit',component:AddProduitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
