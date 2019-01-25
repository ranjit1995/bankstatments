import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-home/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-home/admin-footer/admin-footer.component';
import { LineChartComponent } from './admin-home/line-chart/line-chart.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { 
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const routes: Routes = [
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path:'home', component:HomeComponent },
{ path:"header" , component:HeaderComponent},
{ path:"footer" , component:FooterComponent},
{ path:"auth/login", component:LoginComponent},
{ path:"auth/logout", component:LogoutComponent},
{ path:"admin", component:AdminHomeComponent},
{ path:"admin/header", component:AdminHeaderComponent},
{ path:"admin/footer", component:AdminFooterComponent},
{ path:"admin/line-chart", component:LineChartComponent},
]
import { MatFileUploadModule } from 'angular-material-fileupload';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    LineChartComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,MatFileUploadModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [
    MatListModule]
})
export class AppModule { }
