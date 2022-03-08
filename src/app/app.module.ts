import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ListImagesComponent } from './list-images/list-images.component';
import { UploadImagesComponent } from './upload-images/upload-images.component'
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import { AboutUsComponent } from './about-us/about-us.component';
import { NeuralNetworkComponent } from './neural-network/neural-network.component';
import { ComputerVisionComponent } from './computer-vision/computer-vision.component';
@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    UploadImagesComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    NeuralNetworkComponent,
    ComputerVisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
