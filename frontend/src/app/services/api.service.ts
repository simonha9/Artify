import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchResumes(keywords: string) {
    return this.http.get(
      `${environment.backendUrl}/resumes/search?keywords="${keywords}"`
    );
  }
  uploadPDF(file: File, title: string, userId: string) {
    console.log('uploadPDF inside of api.service.ts');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    return this.http.post(
      `${environment.backendUrl}/users/${userId}/resumes/upload`,
      formData
    );
  }

  getGeneration(generationId: string) {
    return this.http.get(
      `${environment.backendUrl}/resumes/${generationId}/analyze`
    );
  }

  generateSD(body: JSON) {
    return this.http.post(`${environment.sdUrl}/generate`, body);
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

  getResumes(userId: string) {
    return this.http.get(`${environment.backendUrl}/users/${userId}/resumes`);
  }
}
