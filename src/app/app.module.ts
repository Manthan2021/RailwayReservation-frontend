import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterconsumerComponent } from './registerconsumer/registerconsumer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddstationComponent } from './addstation/addstation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddreturnstationComponent } from './addreturnstation/addreturnstation.component';
import { AddticketComponent } from './addticket/addticket.component';
import { GetticketComponent } from './getticket/getticket.component';
import { DisplayticketComponent } from './displayticket/displayticket.component';
import { GetstationComponent } from './getstation/getstation.component';
import { DisplaystationComponent } from './displaystation/displaystation.component';
import { GetreturnstationComponent } from './getreturnstation/getreturnstation.component';
import { DisplayreturnstationComponent } from './displayreturnstation/displayreturnstation.component';
import { GettrainComponent } from './gettrain/gettrain.component';
import { DisplaytrainComponent } from './displaytrain/displaytrain.component';
import { GetreturntrainComponent } from './getreturntrain/getreturntrain.component';
import { DisplayreturntrainComponent } from './displayreturntrain/displayreturntrain.component';
import { UpdatetraincapacityComponent } from './updatetraincapacity/updatetraincapacity.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { AddreturntrainComponent } from './addreturntrain/addreturntrain.component';
import { FindtrainsComponent } from './findtrains/findtrains.component';
import { DisplayfindtrainsComponent } from './displayfindtrains/displayfindtrains.component';
import { GetalltrainsComponent } from './getalltrains/getalltrains.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { NgxPrintModule } from 'ngx-print';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GetallstationsComponent } from './getallstations/getallstations.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterconsumerComponent,
    HomeComponent,
    LoginComponent,
    AddstationComponent,
    AddreturnstationComponent,
    AddticketComponent,
    GetticketComponent,
    DisplayticketComponent,
    GetstationComponent,
    DisplaystationComponent,
    GetreturnstationComponent,
    DisplayreturnstationComponent,
    GettrainComponent,
    DisplaytrainComponent,
    GetreturntrainComponent,
    DisplayreturntrainComponent,
    UpdatetraincapacityComponent,
    AddtrainComponent,
    AddreturntrainComponent,
    FindtrainsComponent,
    DisplayfindtrainsComponent,
    GetalltrainsComponent,
    PrintticketComponent,
    DashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    HeaderComponent,
    SidenavComponent,
    GetallstationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPrintModule,MatSidenavModule,
    //Material
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
