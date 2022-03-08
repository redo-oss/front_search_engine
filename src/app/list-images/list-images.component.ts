import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {
  public image: any;
  public image_similaire:any;
  public fileReader:FileReader;
  public fileUpload: File | null = null;
  public name: string;
  public imageUrl:any;
  constructor(private FileService: FileService) {
    
    this.image ={
      src:"",
      class:[],
      boxes:0
    };
    this.name ='';
    this.fileReader = new FileReader();
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    console.log(event)
    this.fileUpload = <File>event.files[0];
    this.name =event.files.item(0).name;
    this.fileReader.onload=(e)=>{
      this.imageUrl = this.fileReader.result
      
    }
    this.fileReader.readAsDataURL(<File>event.files[0])
    
  }
  cancel(){
    this.fileUpload = null;
    this.name = '';
    this.imageUrl = null;
  }
  Upload(){
    this.FileService.postFile(this.imageUrl).subscribe(res => {
      console.log('res',res)
      this.image = res;
      this.find_image(res?.class_ids)
      // this.fileUpload = null;
      // this.name = '';
    })
    
  }
  find_image(cls:any){
    this.FileService.find_image_simimlaire(cls).subscribe(res =>{
      console.log('image similaire ',res)
      this.image_similaire=res
    })
  }

}
