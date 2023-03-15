import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { P5spiral } from '../classes/p5spiral';

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
  uploadPDF(file: File) {
    console.log('uploadPDF inside of api.service.ts');
    console.log(File);

    //todo example generation after upload file
    return '123123312asdasd';

    /*{ dotSize: 0.08,
      radius: Math.sqrt(0.5) + 0.08,
      irrationalDenominator: 1.61803398875,
      shapeCount: 1000} */

    //send post request to backend of the file
    // const formData = new FormData();
    // formData.append('pdf', file);
    // return this.http.post(`${environment.backendUrl}/uploadPDF`, formData);
  }

  getGeneration(generationId: string) {
    //todo implement this when backend is ready
    return {
      dotSize: 0.08,
      radius: Math.sqrt(0.5) + 0.08,
      irrationalDenominator: 1.61803398875,
      shapeCount: 1000,
    };
  }

  generateSD(prompt: FormData) {
    //TODO: implement this when backend is ready
    return this.http.post(`${environment.backendUrl}/sd`, { prompt });
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
