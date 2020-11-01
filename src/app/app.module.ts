import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyServicesService } from './my-services.service';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { ViewCardDataComponent } from './view-card-data/view-card-data.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
const routes:Routes=[
  {path :'',component:MyWebsiteComponent},
  {path :'viewData',component:ViewCardDataComponent}
]

var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    ParentComponent,
    ChildComponent,
    RxjsComponent,
    LoginFormComponent,
    MyWebsiteComponent,
    ViewCardDataComponent,
    LoginFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
