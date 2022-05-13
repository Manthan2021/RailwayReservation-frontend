import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterconsumerComponent } from './registerconsumer/registerconsumer.component';
import{ LoginComponent } from './login/login.component';
import { AddstationComponent } from './addstation/addstation.component';
import { AddreturnstationComponent } from './addreturnstation/addreturnstation.component';
import { AddticketComponent } from './addticket/addticket.component';
import { GetticketComponent } from './getticket/getticket.component';
import { DisplayticketComponent } from './displayticket/displayticket.component';
import { DisplaystationComponent } from './displaystation/displaystation.component';
import { GetstationComponent } from './getstation/getstation.component';
import { GetreturnstationComponent } from './getreturnstation/getreturnstation.component';
import { DisplayreturnstationComponent } from './displayreturnstation/displayreturnstation.component';
import { GettrainComponent } from './gettrain/gettrain.component';
import { DisplaytrainComponent } from './displaytrain/displaytrain.component';
import { GetreturntrainComponent } from './getreturntrain/getreturntrain.component';
import { DisplayreturntrainComponent } from './displayreturntrain/displayreturntrain.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
{path:'register',component:RegisterconsumerComponent},
{path:'login', component:LoginComponent},
{path:'addstation',component:AddstationComponent},
{path:'addreturnstation',component:AddreturnstationComponent},
{path:'addticket',component:AddticketComponent},
{path:'getticket',component:GetticketComponent},
{path:'displayticket',component:DisplayticketComponent},
{path:'getstation',component:GetstationComponent},
{path:'displaystation',component:DisplaystationComponent},
{path:'getreturnstation',component:GetreturnstationComponent},
{path:'displayreturnstation',component:DisplayreturnstationComponent},
{path:'gettrain',component:GettrainComponent},
{path:'displaytrain',component:DisplaytrainComponent},
{path:'getreturntrain',component:GetreturntrainComponent},
{path:'displayreturntrain',component:DisplayreturntrainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisterconsumerComponent,HomeComponent]