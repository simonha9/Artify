import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { P5generationComponent } from './components/p5generation/p5generation.component';
import { UploadPDFComponent } from './components/upload-pdf/upload-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent,
    GenerateComponent,
    HeaderComponent,
    FooterComponent,
    P5generationComponent,
    UploadPDFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
