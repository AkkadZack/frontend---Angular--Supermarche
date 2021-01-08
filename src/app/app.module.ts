import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { GestUsersComponent } from './components/admin/gest-users/gest-users.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { LigneCmdComponent } from './components/admin/ligne-cmd/ligne-cmd.component';
import { CmdComponent } from './components/admin/cmd/cmd.component';
import { UpdateCmdComponent } from './components/admin/update-cmd/update-cmd.component';
import { ChefComponent } from './components/chef/chef.component';
import { CommanderComponent } from './components/chef/commander/commander.component';
import { MesCmdsComponent } from './components/chef/mes-cmds/mes-cmds.component';
import { CompteComponent } from './components/chef/compte/compte.component';
import { DetailCmdComponent } from './components/chef/detail-cmd/detail-cmd.component';
import { AcompteComponent } from './components/admin/acompte/acompte.component';
import { HomeadminComponent } from './components/admin/homeadmin/homeadmin.component';
import { ProduitListComponent } from './components/admin/produit-list/produit-list.component';
import { AddProduitComponent } from './components/admin/produit-list/add-produit/add-produit.component';
import { HomeChefComponent } from './components/chef/home-chef/home-chef.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    GestUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    LigneCmdComponent,
    CmdComponent,
    UpdateCmdComponent,
    ChefComponent,
    CommanderComponent,
    MesCmdsComponent,
    CompteComponent,
    DetailCmdComponent,
    AcompteComponent,
    HomeadminComponent,
    ProduitListComponent,
    AddProduitComponent,
    HomeChefComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
