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
    DisplayreturntrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
