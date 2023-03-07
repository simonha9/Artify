import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  uploadPDF(file: File) {
    console.log('uploadPDF inside of api.service.ts');
    console.log(File);

    //send post request to backend of the file
    // const formData = new FormData();
    // formData.append('pdf', file);
    // return this.http.post(`${environment.backendUrl}/uploadPDF`, formData);
  }

  getAuth() {
    return this.http.get(`${environment.backendUrl}/users/profile`);
  }

  getUsers() {
    return this.http.get(`${environment.backendUrl}/users`);
  }

  getUserDetails(userId: string) {
    return this.http.get(`${environment.backendUrl}/users/${userId}`);
  }

  getUserPDFsSummary() {}

  getUserPDFParams() {}
}
