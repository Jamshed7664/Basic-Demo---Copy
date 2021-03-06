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
import { MaterialDesignCompComponent } from './material-design-comp/material-design-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { ClassAndStyleComponent } from './class-and-style/class-and-style.component';
import { TDFormComponent } from './tdform/tdform.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
const routes:Routes=[
  {path :'',component:LoginFirebaseComponent},
  {path :'viewData',component:ViewCardDataComponent},
  {path :'login',component:LoginFirebaseComponent},
  {path :'shopping-list',component:ShoppingListComponent}
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
    LoginFirebaseComponent,
    MaterialDesignCompComponent,
    ClassAndStyleComponent,
    TDFormComponent,
    HeaderComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  exports : [ Comp1Component,Comp2Component,Comp3Component],
  providers: [MyServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
