import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /*
  todo - will probabaly replace this with a different request for each type of generation
  each of them will have a file upload and they should return:

  params for the p5 generation
  user details for the author

  */
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

  getGenerationn(generationId: string) {
    //todo implement this when backend is ready
    return {
      dotSize: 0.8,
      irrationalDenominator: 6.28318530718,
      shapeCount: 1800,
      frames: 1000,
    };
  }

  getGeneration(generationId: string) {
    return this.http.get(
      `${environment.backendUrl}/resumes/${generationId}/analyze`
    );
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
    return this.http.get(`${environment.backendUrl}/resumes`);
  }
}
