import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API =  environment.API;
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
  
  postFile(fileToUpload: any){
    // const formData: FormData = new FormData();
    // formData.append('fileKey', fileToUpload, fileToUpload?.name);
    // console.log(formData);
    return this.http.post<any>(API+'/', {file:fileToUpload})
  }
  public  find_image_simimlaire(cls:any){
    return this.http.post<any>(API+'/similaire-images',cls)
  }

}
