import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { P5generationComponent } from './components/p5generation/p5generation.component';
import { UploadPDFComponent } from './components/upload-pdf/upload-pdf.component';
import { ApiInterceptor } from './api.interceptor';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GenerationViewComponent } from './pages/generation-view/generation-view.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileViewComponent,
    GenerateComponent,
    HeaderComponent,
    FooterComponent,
    P5generationComponent,
    UploadPDFComponent,
    ProfileComponent,
    GenerationViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
