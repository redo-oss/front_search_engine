import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImagesComponent } from './list-images/list-images.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { NeuralNetworkComponent } from './neural-network/neural-network.component';
import { ComputerVisionComponent } from './computer-vision/computer-vision.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path:"",
    component:ListImagesComponent
  },
  {
    path:'upload-image',
    component:UploadImagesComponent
  },
  {
    path:'neural-network',
    component:NeuralNetworkComponent
  },
  {
    path:'computer-vision',
    component:ComputerVisionComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
