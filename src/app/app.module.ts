import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NewSiteModalComponent } from './new-site-modal/new-site-modal.component';
import { FormsModule } from '@angular/forms';
import { ToasterComponent } from './toaster/toaster.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewSiteModalComponent,
    ToasterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // DynamicDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [AddNewSiteComponent]
})
export class AppModule { }
