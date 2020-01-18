import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeachDeleteComponent } from './seach-delete/seach-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserregistrationService } from './userregistration.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SeachDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserregistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
