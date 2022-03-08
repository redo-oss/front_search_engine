import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {

  uploadedFiles: any[] = [];
  multiple: boolean = true;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
 
  myUploader(event: { files: any; },clear:any) {
    console.log(event.files)
    for(let file of event.files) {
      this.uploadedFiles.push(file);
  }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
    clear.clear()
  }



}
