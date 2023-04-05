import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  //generate resume analysis with timeout
  getGenerationTimeout(generationId: string, timeout: number): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        this.http
          .get(`${environment.backendUrl}/resumes/${generationId}/analyze`)
          .subscribe(
            (data) => {
              observer.next(data);
              observer.complete();
            },
            (error) => {
              observer.error(error);
            }
          );
      }, timeout);
    });
  }

  generateSD(body: JSON) {
    return this.http.post(`${environment.sdUrl}/generate`, body);
  }

  getAuth() {
    return this.http.get(`${environment.backendUrl}/users/profile`, {
      withCredentials: true,
    });
  }

  getUserDetails(userId: string) {
    return this.http.get(`${environment.backendUrl}/users/${userId}`);
  }

  getResumes(userId: string) {
    return this.http.get(`${environment.backendUrl}/users/${userId}/resumes`);
  }
}
